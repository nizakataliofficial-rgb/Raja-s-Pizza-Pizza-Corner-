const categoryData = {
    'Midnight Deals': {
        count: 5,
        timer: '8:48',
        items: [
            { id: 'mn-1', name: 'MN Deal 1', serves: 'Serves 1', oldPrice: 900, newPrice: 450, imageClass: 'deal-one' },
            { id: 'mn-2', name: 'MN Deal 2', serves: 'Serves 2', oldPrice: 1900, newPrice: 950, imageClass: 'deal-two' },
            { id: 'mn-3', name: 'MN Deal 3', serves: 'Serves 3', oldPrice: 2900, newPrice: 1450, imageClass: 'deal-three' },
            { id: 'mn-4', name: 'MN Deal 4', serves: 'Serves 4', oldPrice: 3600, newPrice: 1800, imageClass: 'deal-four' },
            { id: 'mn-5', name: 'MN Deal 5', serves: 'Serves 5', oldPrice: 4500, newPrice: 2250, imageClass: 'deal-five' }
        ]
    },
    'New Arrival': {
        count: 4,
        timer: '9:22',
        items: [
            { id: 'na-1', name: 'Supreme Feast', serves: 'Serves 2', oldPrice: 2200, newPrice: 1750, imageClass: 'deal-two' },
            { id: 'na-2', name: 'Cheese Burst', serves: 'Serves 3', oldPrice: 2500, newPrice: 1990, imageClass: 'deal-three' },
            { id: 'na-3', name: 'Tikka Supreme', serves: 'Serves 2', oldPrice: 2100, newPrice: 1650, imageClass: 'deal-one' },
            { id: 'na-4', name: 'Raja Special', serves: 'Serves 4', oldPrice: 4200, newPrice: 3490, imageClass: 'deal-four' }
        ]
    },
    'Pizza & Drink Combos': {
        count: 6,
        timer: '7:42',
        items: [
            { id: 'pd-1', name: 'Classic Pizza + Cola', serves: 'Serves 2', oldPrice: 2100, newPrice: 1690, imageClass: 'deal-five', includedDrink: 'Cola 345ml' },
            { id: 'pd-2', name: 'Smoky Tikka + Cola', serves: 'Serves 2', oldPrice: 2450, newPrice: 1990, imageClass: 'deal-two', includedDrink: 'Cola 345ml' },
            { id: 'pd-3', name: 'Garden Supreme + 1L Cola', serves: 'Serves 3', oldPrice: 3150, newPrice: 2590, imageClass: 'deal-one', includedDrink: 'Cola 1L' },
            { id: 'pd-4', name: 'Raja Crown + 1.5L Cola', serves: 'Serves 4', oldPrice: 4500, newPrice: 3690, imageClass: 'deal-four', includedDrink: 'Cola 1.5L' },
            { id: 'pd-5', name: 'Two Classic Pizzas + 1.5L', serves: 'Serves 4', oldPrice: 5200, newPrice: 4290, imageClass: 'deal-three', includedDrink: 'Cola 1.5L' },
            { id: 'pd-6', name: 'Cheese Feast + 1L Cola', serves: 'Serves 3', oldPrice: 3400, newPrice: 2790, imageClass: 'deal-five', includedDrink: 'Cola 1L' }
        ]
    },
    'Max Deals': {
        count: 5,
        timer: '10:30',
        items: [
            { id: 'md-1', name: 'Max Value 1', serves: 'Serves 2', oldPrice: 2000, newPrice: 1490, imageClass: 'deal-four' },
            { id: 'md-2', name: 'Max Value 2', serves: 'Serves 3', oldPrice: 2700, newPrice: 2090, imageClass: 'deal-two' },
            { id: 'md-3', name: 'Meal Deal', serves: 'Serves 2', oldPrice: 1800, newPrice: 1290, imageClass: 'deal-one' },
            { id: 'md-4', name: 'Party Box', serves: 'Serves 5', oldPrice: 5200, newPrice: 3890, imageClass: 'deal-three' },
            { id: 'md-5', name: 'Double Max', serves: 'Serves 4', oldPrice: 4700, newPrice: 3490, imageClass: 'deal-five' }
        ]
    },
    'Promo Deals': {
        count: 3,
        timer: '6:15',
        items: [
            { id: 'pd-1', name: 'Lunch Combo', serves: 'Serves 2', oldPrice: 1400, newPrice: 1090, imageClass: 'deal-two' },
            { id: 'pd-2', name: 'Deal Saver', serves: 'Serves 2', oldPrice: 1800, newPrice: 1290, imageClass: 'deal-one' },
            { id: 'pd-3', name: 'Evening Treat', serves: 'Serves 3', oldPrice: 2200, newPrice: 1790, imageClass: 'deal-three' }
        ]
    },
    'Max Value Deals': {
        count: 7,
        timer: '11:12',
        items: [
            { id: 'mvd-1', name: 'Budget Feast', serves: 'Serves 2', oldPrice: 1700, newPrice: 1290, imageClass: 'deal-one' },
            { id: 'mvd-2', name: 'Family Value', serves: 'Serves 4', oldPrice: 3600, newPrice: 2890, imageClass: 'deal-two' },
            { id: 'mvd-3', name: 'Classic Saver', serves: 'Serves 2', oldPrice: 1500, newPrice: 1090, imageClass: 'deal-three' },
            { id: 'mvd-4', name: 'Cheese Saver', serves: 'Serves 3', oldPrice: 2600, newPrice: 1890, imageClass: 'deal-four' },
            { id: 'mvd-5', name: 'Tikka Value', serves: 'Serves 2', oldPrice: 1900, newPrice: 1390, imageClass: 'deal-five' },
            { id: 'mvd-6', name: 'Crust Combo', serves: 'Serves 2', oldPrice: 1700, newPrice: 1190, imageClass: 'deal-two' },
            { id: 'mvd-7', name: 'Raja Value', serves: 'Serves 4', oldPrice: 4200, newPrice: 3290, imageClass: 'deal-four' }
        ]
    },
    '2B2B Deals': {
        count: 4,
        timer: '7:05',
        items: [
            { id: 'b2b-1', name: '2 for 2', serves: 'Serves 2', oldPrice: 1600, newPrice: 1190, imageClass: 'deal-five' },
            { id: 'b2b-2', name: 'B2B Delight', serves: 'Serves 2', oldPrice: 1900, newPrice: 1490, imageClass: 'deal-one' },
            { id: 'b2b-3', name: 'Twin Combo', serves: 'Serves 2', oldPrice: 2100, newPrice: 1790, imageClass: 'deal-three' },
            { id: 'b2b-4', name: 'Pair Meal', serves: 'Serves 2', oldPrice: 2200, newPrice: 1890, imageClass: 'deal-four' }
        ]
    },
    'Royal Crown Pizza': {
        count: 5,
        timer: '9:50',
        items: [
            { id: 'rc-1', name: 'Royal Crown', serves: 'Serves 2', oldPrice: 2500, newPrice: 1890, imageClass: 'deal-two' },
            { id: 'rc-2', name: 'Crown Supreme', serves: 'Serves 3', oldPrice: 3000, newPrice: 2390, imageClass: 'deal-three' },
            { id: 'rc-3', name: 'Royal Chicken', serves: 'Serves 2', oldPrice: 2300, newPrice: 1790, imageClass: 'deal-one' },
            { id: 'rc-4', name: 'Crown Special', serves: 'Serves 4', oldPrice: 3800, newPrice: 2990, imageClass: 'deal-four' },
            { id: 'rc-5', name: 'Royal Combo', serves: 'Serves 4', oldPrice: 4100, newPrice: 3290, imageClass: 'deal-five' }
        ]
    },
    Appetizers: {
        count: 6,
        timer: '8:16',
        items: [
            { id: 'ap-1', name: 'Garlic Bread', serves: 'Serves 2', oldPrice: 500, newPrice: 390, imageClass: 'deal-one' },
            { id: 'ap-2', name: 'Loaded Fries', serves: 'Serves 2', oldPrice: 600, newPrice: 430, imageClass: 'deal-two' },
            { id: 'ap-3', name: 'Onion Rings', serves: 'Serves 2', oldPrice: 550, newPrice: 410, imageClass: 'deal-three' },
            { id: 'ap-4', name: 'Chicken Wings', serves: 'Serves 3', oldPrice: 1100, newPrice: 890, imageClass: 'deal-four' },
            { id: 'ap-5', name: 'Potato Wedges', serves: 'Serves 2', oldPrice: 650, newPrice: 470, imageClass: 'deal-five' },
            { id: 'ap-6', name: 'Cheesy Sticks', serves: 'Serves 2', oldPrice: 700, newPrice: 520, imageClass: 'deal-two' }
        ]
    },
    'Chicken Pizzas': {
        count: 5,
        timer: '10:24',
        items: [
            { id: 'cp-1', name: 'Chicken Tikka', serves: 'Serves 2', oldPrice: 2000, newPrice: 1490, imageClass: 'deal-five' },
            { id: 'cp-2', name: 'Chicken Supreme', serves: 'Serves 2', oldPrice: 2200, newPrice: 1690, imageClass: 'deal-four' },
            { id: 'cp-3', name: 'Fajita Chicken', serves: 'Serves 2', oldPrice: 2400, newPrice: 1790, imageClass: 'deal-three' },
            { id: 'cp-4', name: 'Hot Chicken', serves: 'Serves 3', oldPrice: 2600, newPrice: 1990, imageClass: 'deal-two' },
            { id: 'cp-5', name: 'Raja Chicken', serves: 'Serves 4', oldPrice: 4100, newPrice: 3290, imageClass: 'deal-one' }
        ]
    },
    'Beef & Veggie Pizzas': {
        count: 4,
        timer: '12:00',
        items: [
            { id: 'bv-1', name: 'Beef Deluxe', serves: 'Serves 2', oldPrice: 2100, newPrice: 1590, imageClass: 'deal-two' },
            { id: 'bv-2', name: 'Veggie Burst', serves: 'Serves 2', oldPrice: 1800, newPrice: 1290, imageClass: 'deal-five' },
            { id: 'bv-3', name: 'Garden Feast', serves: 'Serves 3', oldPrice: 2400, newPrice: 1790, imageClass: 'deal-one' },
            { id: 'bv-4', name: 'Cheese Veggie', serves: 'Serves 4', oldPrice: 2900, newPrice: 2190, imageClass: 'deal-four' }
        ]
    },
    'Pizza Pairs': {
        count: 5,
        timer: '5:48',
        items: [
            { id: 'pp-1', name: 'Tikka & Cheese Pair', serves: 'Two personal pizzas', oldPrice: 1950, newPrice: 1590, imageClass: 'deal-three', includedDrink: 'Cola 345ml' },
            { id: 'pp-2', name: 'Classic Pizza Pair', serves: 'Two personal pizzas', oldPrice: 1850, newPrice: 1490, imageClass: 'deal-two', includedDrink: 'Cola 345ml' },
            { id: 'pp-3', name: 'Garden & Crown Pair', serves: 'Serves 3', oldPrice: 3200, newPrice: 2690, imageClass: 'deal-one', includedDrink: 'Cola 1L' },
            { id: 'pp-4', name: 'Smoky Duo + 1.5L', serves: 'Serves 4', oldPrice: 4300, newPrice: 3590, imageClass: 'deal-four', includedDrink: 'Cola 1.5L' },
            { id: 'pp-5', name: 'Raja Signature Pair', serves: 'Serves 4', oldPrice: 4800, newPrice: 3990, imageClass: 'deal-five', includedDrink: 'Cola 1.5L' }
        ]
    },
    'Lasagne And Pastas': {
        count: 3,
        timer: '9:10',
        items: [
            { id: 'lp-1', name: 'Chicken Lasagne', serves: 'Serves 2', oldPrice: 1500, newPrice: 1190, imageClass: 'deal-four' },
            { id: 'lp-2', name: 'White Pasta', serves: 'Serves 2', oldPrice: 1300, newPrice: 990, imageClass: 'deal-one' },
            { id: 'lp-3', name: 'Beef Pasta', serves: 'Serves 2', oldPrice: 1600, newPrice: 1290, imageClass: 'deal-three' }
        ]
    },
    Beverages: {
        count: 4,
        timer: '4:56',
        items: [
            { id: 'bv-1', name: 'Cold Drink', serves: '1 Bottle', oldPrice: 300, newPrice: 210, imageClass: 'deal-two' },
            { id: 'bv-2', name: 'Fresh Lime', serves: '1 Glass', oldPrice: 260, newPrice: 180, imageClass: 'deal-one' },
            { id: 'bv-3', name: 'Mango Shake', serves: '1 Glass', oldPrice: 420, newPrice: 320, imageClass: 'deal-five' },
            { id: 'bv-4', name: 'Mineral Water', serves: '1 Bottle', oldPrice: 200, newPrice: 140, imageClass: 'deal-four' }
        ]
    }
};

const pizzaCarousel = document.getElementById('pizzaCarousel');
const pizzaSlides = Array.from(pizzaCarousel.querySelectorAll('.pizza-slide'));
const pizzaDots = Array.from(pizzaCarousel.querySelectorAll('.pizza-dot'));
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let activePizzaSlide = 0;
let pizzaSlideTimer;

function showPizzaSlide(index) {
    activePizzaSlide = (index + pizzaSlides.length) % pizzaSlides.length;

    pizzaSlides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activePizzaSlide;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        pizzaDots[slideIndex].classList.toggle('active', isActive);
        pizzaDots[slideIndex].setAttribute('aria-current', String(isActive));
    });
}

function stopPizzaAutoplay() {
    clearInterval(pizzaSlideTimer);
}

function startPizzaAutoplay() {
    stopPizzaAutoplay();
    if (!prefersReducedMotion && !document.hidden) {
        pizzaSlideTimer = setInterval(() => showPizzaSlide(activePizzaSlide + 1), 4000);
    }
}

document.getElementById('pizzaPrevious').addEventListener('click', () => {
    showPizzaSlide(activePizzaSlide - 1);
    startPizzaAutoplay();
});
document.getElementById('pizzaNext').addEventListener('click', () => {
    showPizzaSlide(activePizzaSlide + 1);
    startPizzaAutoplay();
});
pizzaDots.forEach((dot) => {
    dot.addEventListener('click', () => {
        showPizzaSlide(Number(dot.dataset.slide));
        startPizzaAutoplay();
    });
});
pizzaCarousel.addEventListener('mouseenter', stopPizzaAutoplay);
pizzaCarousel.addEventListener('mouseleave', startPizzaAutoplay);
pizzaCarousel.addEventListener('focusin', stopPizzaAutoplay);
pizzaCarousel.addEventListener('focusout', startPizzaAutoplay);
document.addEventListener('visibilitychange', startPizzaAutoplay);

const pakistanBounds = { south: 23.4, west: 60.8, north: 37.2, east: 77.9 };
let pakistanBoundary;
let pakistanBoundaryRequest;
const dealDeadlines = new Map(Object.entries(categoryData).map(([categoryName, category]) => {
    const [minutes, seconds] = category.timer.split(':').map(Number);
    return [categoryName, Date.now() + (minutes * 60 + seconds) * 1000];
}));

function getDealRemainingSeconds(categoryName) {
    return Math.max(0, Math.ceil((dealDeadlines.get(categoryName) - Date.now()) / 1000));
}

function formatDealCountdown(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}

function isWithinPakistan(latitude, longitude) {
    if (latitude < pakistanBounds.south || latitude > pakistanBounds.north
        || longitude < pakistanBounds.west || longitude > pakistanBounds.east) return false;
    if (!pakistanBoundary) return true;

    const pointInRing = (ring) => {
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
    };

    const polygons = pakistanBoundary.type === 'Polygon'
        ? [pakistanBoundary.coordinates]
        : pakistanBoundary.coordinates;
    return polygons.some((polygon) => pointInRing(polygon[0], latitude, longitude));
}

const appState = {
    activeCategory: 'Midnight Deals',
    cart: [],
    isLoggedIn: false,
    userName: 'Guest'
};

const mapApiBase = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';

const productGrid = document.getElementById('productGrid');
const dealTitle = document.getElementById('deal-title');
const dealCount = document.getElementById('deal-count');
const dealTimer = document.getElementById('deal-timer');
const cartBtn = document.getElementById('cartBtn');
const loginBtn = document.getElementById('loginBtn');
const accountArea = document.getElementById('accountArea');
const accountMenu = document.getElementById('accountMenu');
const accountMenuName = document.getElementById('accountMenuName');
const accountMenuEmail = document.getElementById('accountMenuEmail');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.querySelector('.close-login');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const cartDrawer = document.getElementById('cartDrawer');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const toast = document.getElementById('toast');
const orderBtn = document.getElementById('orderBtn');
const categoryChips = document.querySelectorAll('.category-chip');
const navButtons = document.querySelectorAll('.nav-btn');
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const menuSearch = document.getElementById('menuSearch');
const accountModal = document.getElementById('accountModal');
const locationModal = document.getElementById('locationModal');
const orderModal = document.getElementById('orderModal');
const locationBtn = document.getElementById('locationBtn');
const locationAddress = document.getElementById('locationAddress');
const locationSearch = document.getElementById('locationSearch');
const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');
const orderTotal = document.getElementById('orderTotal');
const orderProduct = document.getElementById('orderProduct');
let deliveryMap;
let deliveryMarker;
let selectedCoordinates = [24.8607, 67.0011];

function formatCurrency(value) {
    return `Rs. ${value.toLocaleString()}`;
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => { toast.classList.remove('show'); }, 1600);
}

function updateCartButton() {
    const itemCount = appState.cart.reduce((total, item) => total + item.quantity, 0);
    cartBtn.dataset.count = itemCount;
    cartBtn.classList.toggle('has-items', itemCount > 0);
    cartBtn.setAttribute('aria-label', `Cart with ${itemCount} item${itemCount === 1 ? '' : 's'}`);
}

function getUnitPrice(item) {
    return item.unitPrice ?? item.newPrice;
}

function updateAccountUI() {
    const firstName = appState.userName.split(' ')[0] || 'Customer';
    loginBtn.textContent = appState.isLoggedIn ? `Hi, ${firstName}` : 'Sign In';
    loginBtn.setAttribute('aria-expanded', String(!accountMenu.hidden));
    accountMenuName.textContent = appState.userName || 'Customer';
    accountMenuEmail.textContent = appState.userEmail || 'Signed in';
}

function toggleAccountMenu() {
    if (!appState.isLoggedIn) {
        openLoginModal();
        return;
    }

    accountMenu.hidden = !accountMenu.hidden;
    loginBtn.setAttribute('aria-expanded', String(!accountMenu.hidden));
}

function logOut() {
    appState.isLoggedIn = false;
    appState.userName = 'Guest';
    appState.userEmail = '';
    appState.userPhone = '';
    appState.pendingOrder = false;
    accountMenu.hidden = true;
    updateAccountUI();
    showToast('You have signed out');
}

function renderCart() {
    const cartItemsList = appState.cart;

    if (!cartItemsList.length) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        cartTotal.textContent = 'Rs. 0';
        updateCartButton();
        renderOrderSummary();
        return;
    }

    cartItems.innerHTML = cartItemsList.map((item) => `
        <div class="cart-item">
            <div>
                <strong>${item.name}</strong>
                <span class="cart-qty">${item.customizationSummary || 'Standard recipe'} · ${formatCurrency(getUnitPrice(item))} each</span>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control" aria-label="Quantity controls for ${item.name}">
                    <button type="button" data-cart-action="decrease" data-cart-key="${item.cartKey}" aria-label="Remove one ${item.name}">−</button>
                    <span>${item.quantity}</span>
                    <button type="button" data-cart-action="increase" data-cart-key="${item.cartKey}" aria-label="Add one ${item.name}">+</button>
                </div>
                <strong class="cart-item-price">${formatCurrency(getUnitPrice(item) * item.quantity)}</strong>
                <button type="button" class="remove-cart-item" data-cart-action="remove" data-cart-key="${item.cartKey}" aria-label="Remove ${item.name}"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        </div>
    `).join('');

    const grandTotal = cartItemsList.reduce((sum, item) => sum + getUnitPrice(item) * item.quantity, 0);
    cartTotal.textContent = formatCurrency(grandTotal);
    updateCartButton();
    renderOrderSummary();
}

function addToCart(productId, categoryName = appState.activeCategory, customization = {}) {
    const activeProducts = categoryData[categoryName]?.items || [];
    const match = activeProducts.find((product) => product.id === productId);

    if (!match) return;

    const cartKey = `${categoryName}:${productId}:${JSON.stringify(customization)}`;
    const existing = appState.cart.find((item) => item.cartKey === cartKey);

    if (existing) {
        existing.quantity += customization.quantity || 1;
    } else {
        appState.cart.push({
            ...match,
            categoryName,
            cartKey,
            quantity: customization.quantity || 1,
            unitPrice: match.newPrice + (customization.addOnPrice || 0),
            customizationSummary: customization.summary || (match.includedDrink ? `Includes ${match.includedDrink}` : '')
        });
    }

    renderCart();
    showToast(`${match.name} added to cart`);
}

function renderProducts(items = null) {
    const category = categoryData[appState.activeCategory];

    if (!category) return;

    dealTitle.textContent = appState.activeCategory;
    const visibleItems = items || category.items;
    dealCount.textContent = `${visibleItems.length} ${visibleItems.length === 1 ? 'Item' : 'Items'}`;
    const remainingSeconds = getDealRemainingSeconds(appState.activeCategory);
    dealTimer.textContent = remainingSeconds ? formatDealCountdown(remainingSeconds) : 'Deal ended';

    if (!visibleItems.length) {
        productGrid.innerHTML = '<p class="empty-results">No dishes match that search in this category.</p>';
        return;
    }

    productGrid.innerHTML = visibleItems.map((item) => `
        <article class="product-card">
            <div class="product-image ${item.imageClass}">
                <img class="product-photo" src="${getProductImage(item.imageClass)}" alt="${item.name}" loading="lazy" />
                <span class="save-badge">Save 50%</span>
                <div class="countdown"><i class="fa-regular fa-clock"></i> ${remainingSeconds ? formatDealCountdown(remainingSeconds) : 'Deal ended'}</div>
            </div>
            <div class="product-body">
                <h3>${item.name}</h3>
                <p>${item.serves}${item.includedDrink ? ` | Includes ${item.includedDrink}` : ''}</p>
                <div class="price-row">
                    <div>
                        <span class="old-price">${formatCurrency(item.oldPrice)}</span>
                        <span class="new-price">${formatCurrency(item.newPrice)}</span>
                    </div>
                    <button class="add-btn" type="button" data-product-id="${item.id}" data-category="${appState.activeCategory}" ${remainingSeconds ? '' : 'disabled'} aria-label="Add ${item.name} to cart">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </article>
    `).join('');

}

function getProductImage(imageClass) {
    const imageUrls = {
        'deal-one': 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85',
        'deal-two': 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=85',
        'deal-three': 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
        'deal-four': 'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=900&q=85',
        'deal-five': 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85'
    };

    return imageUrls[imageClass] || imageUrls['deal-one'];
}

function setCategory(category) {
    appState.activeCategory = category;
    categoryChips.forEach((chip) => chip.classList.toggle('active', chip.dataset.category === category));
    renderProducts();
}

function updateDealCountdowns() {
    const remainingSeconds = getDealRemainingSeconds(appState.activeCategory);
    const label = remainingSeconds ? formatDealCountdown(remainingSeconds) : 'Deal ended';
    dealTimer.textContent = label;
    productGrid.querySelectorAll('.countdown').forEach((timer) => {
        timer.innerHTML = `<i class="fa-regular fa-clock"></i> ${label}`;
    });
    productGrid.querySelectorAll('.add-btn').forEach((button) => {
        button.disabled = remainingSeconds === 0;
        if (!remainingSeconds) button.setAttribute('aria-label', 'This deal has ended');
    });
}

setInterval(updateDealCountdowns, 1000);

function openLoginModal() {
    loginModal.classList.remove('hidden');
    loginModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => emailInput.focus(), 80);
}

function closeLoginModal() {
    loginModal.classList.add('hidden');
    loginModal.setAttribute('aria-hidden', 'true');
}

function toggleCartDrawer() {
    cartDrawer.classList.toggle('open');
    cartDrawer.setAttribute('aria-hidden', String(!cartDrawer.classList.contains('open')));
}

function openModal(modal) {
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modal) {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
}

function renderOrderSummary() {
    if (!orderSummary) return;

    if (!appState.cart.length) {
        orderSummary.innerHTML = '<p>Your order is empty. Choose an item below or add dishes from the menu.</p>';
        orderTotal.textContent = 'Rs. 0';
        return;
    }

    orderSummary.innerHTML = appState.cart.map((item) => `
        <div class="order-summary-item"><span>${item.name} × ${item.quantity}<small>${item.customizationSummary || 'Standard recipe'}</small></span><strong>${formatCurrency(getUnitPrice(item) * item.quantity)}</strong></div>
    `).join('');
    const total = appState.cart.reduce((sum, item) => sum + getUnitPrice(item) * item.quantity, 0);
    orderTotal.textContent = formatCurrency(total);
}

function openOrderModal() {
    if (!appState.isLoggedIn) {
        appState.pendingOrder = true;
        openLoginModal();
        showToast('Sign in or create an account to place your order');
        return;
    }

    renderOrderSummary();
    if (appState.savedLocation) document.getElementById('orderAddress').value = appState.savedLocation;
    if (appState.userName) orderForm.elements.name.value = appState.userName;
    if (appState.userPhone) orderForm.elements.phone.value = appState.userPhone;
    closeModal(accountModal);
    cartDrawer.classList.remove('open');
    openModal(orderModal);
}

function resumePendingOrder() {
    if (!appState.pendingOrder) return;
    appState.pendingOrder = false;
    openOrderModal();
}

function updateLocationLabel(address) {
    appState.savedLocation = address;
    locationBtn.querySelector('strong').textContent = address.length > 24 ? `${address.slice(0, 21)}...` : address;
    document.getElementById('orderAddress').value = address;
}

async function loadPakistanBoundary() {
    if (pakistanBoundary) return pakistanBoundary;
    if (!pakistanBoundaryRequest) {
        pakistanBoundaryRequest = (async () => {
            try {
                const response = await fetch(`${mapApiBase}/api/map/boundary`);
                if (!response.ok) throw new Error('Map boundary API unavailable');
                pakistanBoundary = await response.json();

                if (pakistanBoundary && deliveryMap) {
                    const boundaryLayer = L.geoJSON(pakistanBoundary, {
                        style: { color: '#b72b24', weight: 3, fillColor: '#e32f2f', fillOpacity: 0.04 }
                    }).addTo(deliveryMap);
                    const boundaryBounds = boundaryLayer.getBounds();
                    deliveryMap.setMaxBounds(boundaryBounds.pad(0.08));
                    deliveryMap.fitBounds(boundaryBounds, { padding: [12, 12] });
                }
            } catch {
                pakistanBoundary = null;
                pakistanBoundaryRequest = null;
                showToast('Map API unavailable. Start the site with npm start, then reopen the map.');
            }
            return pakistanBoundary;
        })();
    }
    return pakistanBoundaryRequest;
}

function setMapPosition(latitude, longitude, address = '') {
    if (!isWithinPakistan(latitude, longitude)) {
        showToast('Choose a delivery location inside Pakistan');
        return false;
    }

    selectedCoordinates = [latitude, longitude];

    if (!deliveryMap) return true;

    deliveryMap.setView(selectedCoordinates, 15);
    if (deliveryMarker) deliveryMarker.setLatLng(selectedCoordinates);
    else deliveryMarker = L.marker(selectedCoordinates).addTo(deliveryMap);

    if (address) locationAddress.value = address;
    return true;
}

function initializeMap() {
    if (deliveryMap || !window.L) return;

    const maxBounds = L.latLngBounds(
        [pakistanBounds.south, pakistanBounds.west],
        [pakistanBounds.north, pakistanBounds.east]
    );
    deliveryMap = L.map('deliveryMap', { maxBounds, maxBoundsViscosity: 1 }).setView([30.3753, 69.3451], 5);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(deliveryMap);
    deliveryMap.setView([30.3753, 69.3451], 5);
    deliveryMarker = L.marker(selectedCoordinates).addTo(deliveryMap);
    loadPakistanBoundary();

    deliveryMap.on('click', async (event) => {
        await loadPakistanBoundary();
        if (!isWithinPakistan(event.latlng.lat, event.latlng.lng)) {
            showToast('Choose a point inside Pakistan');
            return;
        }
        setMapPosition(event.latlng.lat, event.latlng.lng);
        try {
            const query = new URLSearchParams({ lat: event.latlng.lat, lon: event.latlng.lng });
            const response = await fetch(`${mapApiBase}/api/map/reverse?${query}`);
            if (response.ok) {
                const result = await response.json();
                locationAddress.value = result.display_name || '';
            }
        } catch {
            showToast('Pin set. Please type your full address below.');
        }
    });

    setTimeout(() => deliveryMap.invalidateSize(), 100);
}

async function searchMapAddress() {
    const query = locationSearch.value.trim();
    if (!query) return;

    try {
        await loadPakistanBoundary();
        const params = new URLSearchParams({ q: query });
        const response = await fetch(`${mapApiBase}/api/map/search?${params}`);
        if (!response.ok) throw new Error('Address search API unavailable');
        const { results } = await response.json();
        if (!results.length) {
            showToast('Address not found in Pakistan. Try another city or area.');
            return;
        }
        setMapPosition(results[0].latitude, results[0].longitude, results[0].display_name);
    } catch {
        showToast('Map search unavailable. Pin a place or enter the address.');
    }
}

function useDeviceLocation() {
    if (!navigator.geolocation) {
        showToast('Location is not available in this browser');
        return;
    }

    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
        await loadPakistanBoundary();
        if (!setMapPosition(coords.latitude, coords.longitude)) return;
        try {
            const query = new URLSearchParams({ lat: coords.latitude, lon: coords.longitude });
            const response = await fetch(`${mapApiBase}/api/map/reverse?${query}`);
            const result = await response.json();
            locationAddress.value = result.display_name || '';
        } catch {
            showToast('Pin set. Add your street address to continue.');
        }
    }, () => showToast('Location permission was not granted'), { enableHighAccuracy: true, timeout: 10000 });
}

function populateOrderProductOptions() {
    const allItems = Object.entries(categoryData).flatMap(([categoryName, category]) =>
        category.items.map((item) => ({ ...item, categoryName }))
    );
    orderProduct.innerHTML = allItems.map((item) =>
        `<option value="${item.categoryName}::${item.id}">${item.categoryName} - ${item.name} · ${formatCurrency(item.newPrice)}</option>`
    ).join('');
    syncPizzaCustomization();
}

function getSelectedOrderProduct() {
    if (!orderProduct.value) return null;
    const [categoryName, productId] = orderProduct.value.split('::');
    const item = categoryData[categoryName]?.items.find((product) => product.id === productId);
    return item ? { ...item, categoryName } : null;
}

function syncPizzaCustomization() {
    const item = getSelectedOrderProduct();
    const customizationPanel = document.getElementById('pizzaCustomization');
    const drinkSelect = document.getElementById('orderDrink');
    const pizzaCategories = ['Beverages', 'Appetizers', 'Lasagne And Pastas'];
    const supportsPizzaOptions = item && !pizzaCategories.includes(item.categoryName);

    customizationPanel.hidden = !supportsPizzaOptions;
    drinkSelect.querySelectorAll('[data-included-option]').forEach((option) => option.remove());

    if (item?.includedDrink) {
        const includedOption = document.createElement('option');
        includedOption.value = `included:${item.includedDrink}`;
        includedOption.textContent = `Included: ${item.includedDrink}`;
        includedOption.dataset.price = '0';
        includedOption.dataset.includedOption = 'true';
        drinkSelect.insertBefore(includedOption, drinkSelect.firstChild);
        drinkSelect.value = includedOption.value;
    } else {
        drinkSelect.value = 'none';
    }
}

function getOrderCustomization(item) {
    const pizzaCategories = ['Beverages', 'Appetizers', 'Lasagne And Pastas'];
    const supportsPizzaOptions = !pizzaCategories.includes(item.categoryName);
    const size = document.getElementById('pizzaSize').selectedOptions[0];
    const crust = document.getElementById('pizzaCrust').selectedOptions[0];
    const cheese = document.getElementById('pizzaCheese').selectedOptions[0];
    const spice = document.getElementById('pizzaSpice').value;
    const drink = document.getElementById('orderDrink').selectedOptions[0];
    const toppings = Array.from(document.querySelectorAll('[name="topping"]:checked'));
    const quantity = Number(document.getElementById('orderQuantity').value) || 1;

    if (!supportsPizzaOptions) {
        return { quantity, addOnPrice: 0, summary: item.includedDrink ? `Includes ${item.includedDrink}` : '' };
    }

    const addOnPrice = [size, crust, cheese, drink, ...toppings]
        .reduce((total, option) => total + (Number(option.dataset.price) || 0), 0);
    const summary = [
        size.textContent.split(' (+')[0],
        crust.textContent.split(' (+')[0],
        cheese.textContent.split(' (+')[0],
        `${spice} spice`,
        ...toppings.map((topping) => topping.value),
        drink.value.startsWith('included:') ? `Includes ${item.includedDrink}` : drink.value !== 'none' ? drink.value : ''
    ].filter(Boolean).join(' · ');

    return { quantity, addOnPrice, summary };
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        showToast('Please enter your email and password');
        return;
    }

    const name = email.split('@')[0] || 'Customer';
    appState.isLoggedIn = true;
    appState.userName = name.charAt(0).toUpperCase() + name.slice(1);
    appState.userEmail = email;
    updateAccountUI();
    closeLoginModal();
    loginForm.reset();
    showToast('Login successful');
    resumePendingOrder();
}

function handleAccountSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name')).trim();
    const email = String(formData.get('email')).trim();
    const phone = String(formData.get('phone')).trim();
    const password = String(formData.get('password'));

    if (password.length < 8) {
        showToast('Password must be at least 8 characters');
        return;
    }

    appState.isLoggedIn = true;
    appState.userName = name;
    appState.userEmail = email;
    appState.userPhone = phone;
    updateAccountUI();
    event.currentTarget.reset();
    closeModal(accountModal);
    closeLoginModal();
    showToast('Account created and signed in');
    resumePendingOrder();
}

function handleOrderSubmit(event) {
    event.preventDefault();

    if (!appState.isLoggedIn) {
        appState.pendingOrder = true;
        closeModal(orderModal);
        openLoginModal();
        showToast('Sign in before placing an order');
        return;
    }

    if (!appState.cart.length) {
        showToast('Add at least one menu item to your order');
        return;
    }

    const formData = new FormData(event.currentTarget);
    const customerName = String(formData.get('name')).trim();
    const phone = String(formData.get('phone')).trim();
    const address = String(formData.get('address')).trim();
    if (!customerName || !phone || !address) {
        showToast('Please add your name, mobile, and delivery address');
        return;
    }

    const orderNumber = `RJ${Date.now().toString().slice(-6)}`;
    appState.lastOrder = {
        orderNumber,
        customerName,
        phone,
        address,
        instructions: String(formData.get('instructions')).trim(),
        payment: String(formData.get('payment')),
        items: appState.cart.map((item) => ({ ...item })),
        total: appState.cart.reduce((sum, item) => sum + getUnitPrice(item) * item.quantity, 0)
    };
    appState.cart = [];
    renderCart();
    event.currentTarget.reset();
    closeModal(orderModal);
    showToast(`Order ${orderNumber} placed. Cash on delivery available.`);
}

categoryChips.forEach((chip) => {
    chip.addEventListener('click', () => setCategory(chip.dataset.category));
});

navButtons.forEach((button) => {
    button.addEventListener('click', () => {
        navButtons.forEach((item) => item.classList.toggle('active', item === button));
        const action = button.dataset.action;

        if (action === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
        if (action === 'menu') document.getElementById('productGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (action === 'search') {
            document.getElementById('deals-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            menuSearch.focus({ preventScroll: true });
        }
        if (action === 'deals') {
            setCategory('Midnight Deals');
            document.getElementById('deal-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (action === 'location') openLocationModal();
        if (action === 'account') {
            if (appState.isLoggedIn) {
                accountArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
                toggleAccountMenu();
            } else {
                openLoginModal();
            }
        }
    });
});

menuToggle.addEventListener('click', () => sidebar.classList.toggle('collapsed'));
cartBtn.addEventListener('click', toggleCartDrawer);
closeCart.addEventListener('click', toggleCartDrawer);
loginBtn.addEventListener('click', toggleAccountMenu);
logoutBtn.addEventListener('click', logOut);
document.addEventListener('click', (event) => {
    if (!accountArea.contains(event.target)) {
        accountMenu.hidden = true;
        loginBtn.setAttribute('aria-expanded', 'false');
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !accountMenu.hidden) {
        accountMenu.hidden = true;
        loginBtn.setAttribute('aria-expanded', 'false');
        loginBtn.focus();
    }
});
closeLogin.addEventListener('click', closeLoginModal);
orderBtn.addEventListener('click', openOrderModal);
document.getElementById('viewMenuBtn').addEventListener('click', () => document.getElementById('productGrid').scrollIntoView({ behavior: 'smooth' }));
document.getElementById('hotDealsBtn').addEventListener('click', () => {
    setCategory('Midnight Deals');
    document.getElementById('deal-title').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
locationBtn.addEventListener('click', openLocationModal);
document.getElementById('createAccountLink').addEventListener('click', () => {
    closeLoginModal();
    openModal(accountModal);
});
document.getElementById('checkoutBtn').addEventListener('click', openOrderModal);
document.getElementById('addOrderItemBtn').addEventListener('click', () => {
    const item = getSelectedOrderProduct();
    if (!item) return;
    addToCart(item.id, item.categoryName, getOrderCustomization(item));
});
orderProduct.addEventListener('change', syncPizzaCustomization);
document.getElementById('findLocationBtn').addEventListener('click', useDeviceLocation);
locationSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchMapAddress();
    }
});
document.getElementById('locationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const address = locationAddress.value.trim();
    if (!address) return;
    await loadPakistanBoundary();
    if (!isWithinPakistan(selectedCoordinates[0], selectedCoordinates[1])) {
        showToast('Choose a delivery point inside Pakistan');
        return;
    }
    updateLocationLabel(address);
    closeModal(locationModal);
    showToast('Delivery address saved');
});
document.getElementById('accountForm').addEventListener('submit', handleAccountSubmit);
orderForm.addEventListener('submit', handleOrderSubmit);
menuSearch.addEventListener('input', () => {
    const query = menuSearch.value.trim().toLowerCase();
    const products = categoryData[appState.activeCategory].items;
    renderProducts(query ? products.filter((item) => `${item.name} ${item.serves}`.toLowerCase().includes(query)) : null);
});

loginModal.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        closeLoginModal();
    }
});

loginForm.addEventListener('submit', handleLoginSubmit);

function openLocationModal() {
    openModal(locationModal);
    initializeMap();
    if (deliveryMap) setTimeout(() => deliveryMap.invalidateSize(), 120);
    if (appState.savedLocation) locationAddress.value = appState.savedLocation;
}

document.getElementById('productGrid').addEventListener('click', (event) => {
    const button = event.target.closest('.add-btn');
    if (button) addToCart(button.dataset.productId, button.dataset.category);
});

document.getElementById('productGrid').addEventListener('error', (event) => {
    const image = event.target;
    if (!image.matches('.product-photo')) return;

    if (!image.dataset.fallbackUsed) {
        image.dataset.fallbackUsed = 'true';
        image.src = 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85';
    } else {
        image.hidden = true;
    }
}, true);

cartItems.addEventListener('click', (event) => {
    const button = event.target.closest('[data-cart-action]');
    if (!button) return;

    const itemIndex = appState.cart.findIndex((item) => item.cartKey === button.dataset.cartKey);
    if (itemIndex < 0) return;
    const item = appState.cart[itemIndex];

    if (button.dataset.cartAction === 'increase') item.quantity += 1;
    else if (button.dataset.cartAction === 'decrease') item.quantity -= 1;
    if (button.dataset.cartAction === 'remove' || item.quantity <= 0) appState.cart.splice(itemIndex, 1);
    renderCart();
});

document.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', () => closeModal(button.closest('.workflow-modal')));
});

document.querySelectorAll('.workflow-modal').forEach((modal) => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal(modal);
    });
});

renderProducts();
renderCart();
populateOrderProductOptions();
updateCartButton();
showPizzaSlide(0);
startPizzaAutoplay();