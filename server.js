const express = require('express');
const path = require('node:path');

const app = express();
const port = Number(process.env.PORT) || 3000;
const nominatimBaseUrl = 'https://nominatim.openstreetmap.org';
const cache = new Map();
const cacheDuration = 1000 * 60 * 60 * 24;
const pakistanBounds = { south: 23.4, west: 60.8, north: 37.2, east: 77.9 };
let pakistanBoundaryRequest;

app.disable('x-powered-by');
app.use(express.static(__dirname));
app.use('/api/map', (request, response, next) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type');

    if (request.method === 'OPTIONS') return response.sendStatus(204);
    return next();
});

function isInsidePakistanBounds(latitude, longitude) {
    return latitude >= pakistanBounds.south && latitude <= pakistanBounds.north
        && longitude >= pakistanBounds.west && longitude <= pakistanBounds.east;
}

function pointInRing(latitude, longitude, ring) {
    let inside = false;
    for (let current = 0, previous = ring.length - 1; current < ring.length; previous = current++) {
        const [currentLongitude, currentLatitude] = ring[current];
        const [previousLongitude, previousLatitude] = ring[previous];
        const crossesLatitude = (currentLatitude > latitude) !== (previousLatitude > latitude);
        const crossingLongitude = ((previousLongitude - currentLongitude) * (latitude - currentLatitude)
            / (previousLatitude - currentLatitude)) + currentLongitude;
        if (crossesLatitude && longitude < crossingLongitude) inside = !inside;
    }
    return inside;
}

function isInsidePakistanBoundary(latitude, longitude, boundary) {
    if (!isInsidePakistanBounds(latitude, longitude) || !boundary) return false;
    const polygons = boundary.type === 'Polygon' ? [boundary.coordinates] : boundary.coordinates;
    return polygons.some((polygon) => pointInRing(latitude, longitude, polygon[0])
        && !polygon.slice(1).some((hole) => pointInRing(latitude, longitude, hole)));
}

async function getPakistanBoundary() {
    if (!pakistanBoundaryRequest) {
        pakistanBoundaryRequest = cached('pakistan-boundary-en', async () => {
            const results = await fetchNominatim('/search', {
                format: 'jsonv2',
                q: 'Pakistan',
                countrycodes: 'pk',
                polygon_geojson: '1',
                limit: '1'
            });
            return results.find((result) => result.geojson)?.geojson || null;
        });
    }
    return pakistanBoundaryRequest;
}

async function fetchNominatim(pathname, params) {
    const url = new URL(pathname, nominatimBaseUrl);
    url.search = new URLSearchParams(params).toString();
    const response = await fetch(url, {
        headers: {
            'User-Agent': "RajasPizzaMap/1.0 (local restaurant ordering website; contact: support@rajas-pizza.local)",
            'Accept-Language': 'en'
        },
        signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) throw new Error(`Geocoding provider returned ${response.status}`);
    return response.json();
}

async function cached(key, loader) {
    const existing = cache.get(key);
    if (existing && existing.expiresAt > Date.now()) return existing.value;

    const value = await loader();
    cache.set(key, { value, expiresAt: Date.now() + cacheDuration });
    return value;
}

app.get('/api/map/boundary', async (request, response) => {
    try {
        const boundary = await getPakistanBoundary();

        if (!boundary) return response.status(502).json({ error: 'Pakistan map boundary is unavailable.' });
        response.set('Cache-Control', 'public, max-age=86400');
        return response.json(boundary);
    } catch (error) {
        console.error('Map boundary API failed:', error.message);
        return response.status(502).json({ error: 'Could not load Pakistan map boundary.' });
    }
});

app.get('/api/map/search', async (request, response) => {
    const query = String(request.query.q || '').trim();
    if (query.length < 2 || query.length > 160) {
        return response.status(400).json({ error: 'Enter a place name between 2 and 160 characters.' });
    }

    try {
        const [results, boundary] = await Promise.all([
            cached(`search:${query.toLowerCase()}`, () => fetchNominatim('/search', {
                format: 'jsonv2',
                q: `${query}, Pakistan`,
                countrycodes: 'pk',
                viewbox: `${pakistanBounds.west},${pakistanBounds.north},${pakistanBounds.east},${pakistanBounds.south}`,
                bounded: '1',
                limit: '5'
            })),
            getPakistanBoundary()
        ]);
        const places = results
            .filter((place) => place.lat && place.lon
                && isInsidePakistanBoundary(Number(place.lat), Number(place.lon), boundary))
            .map((place) => ({
                latitude: Number(place.lat),
                longitude: Number(place.lon),
                display_name: place.display_name
            }));

        return response.json({ results: places });
    } catch (error) {
        console.error('Map search API failed:', error.message);
        return response.status(502).json({ error: 'Address search is temporarily unavailable.' });
    }
});

app.get('/api/map/reverse', async (request, response) => {
    const latitude = Number(request.query.lat);
    const longitude = Number(request.query.lon);
    if (!Number.isFinite(latitude) || !Number.isFinite(longitude)
        || !isInsidePakistanBounds(latitude, longitude)) {
        return response.status(400).json({ error: 'Coordinates must be inside Pakistan.' });
    }

    try {
        const boundary = await getPakistanBoundary();
        if (!isInsidePakistanBoundary(latitude, longitude, boundary)) {
            return response.status(400).json({ error: 'Coordinates must be inside Pakistan.' });
        }
        const result = await cached(`reverse:${latitude.toFixed(5)}:${longitude.toFixed(5)}`, () =>
            fetchNominatim('/reverse', {
                format: 'jsonv2',
                lat: String(latitude),
                lon: String(longitude)
            })
        );
        return response.json({
            display_name: result.display_name || '',
            latitude,
            longitude
        });
    } catch (error) {
        console.error('Map reverse API failed:', error.message);
        return response.status(502).json({ error: 'Could not find an address for this map pin.' });
    }
});

app.get('/api/health', (request, response) => response.json({ status: 'ok' }));

app.get('/', (request, response) => response.sendFile(path.join(__dirname, 'index.html')));

app.listen(port, () => {
    console.log(`Raja's Pizza is running at http://localhost:${port}`);
});
