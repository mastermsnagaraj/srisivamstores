// Language translations
const translations = {
    en: {
        'store-title': 'SRI SIVAM STORES',
        'lang-toggle': 'தமிழ்',
        'manage-menu': 'Manage Menu',
        'sales-report': 'Monthly Report',
        'products': 'Products',
        'cart': 'Cart',
        'empty-cart': 'Cart is empty',
        'total': 'Total',
        'clear-cart': 'Clear Cart',
        'print-bill': 'Print Bill',
        'share-whatsapp': 'Share on WhatsApp',
        'pay-now': 'Pay Now',
        'make-payment': 'Make Payment',
        'total-amount': 'Total Amount',
        'close': 'Close',
        'add-new-item': 'Add New Item',
        'item-name-placeholder': 'Item Name',
        'item-price-placeholder': 'Price (₹)',
        'item-image-placeholder': 'Image URL',
        'add': 'Add',
        'current-menu': 'Current Menu',
        'select-month': 'Select Month',
        'edit': 'Edit',
        'delete': 'Delete',
        'total-sales': 'Total Sales',
        'total-transactions': 'Total Transactions',
        'total-items': 'Total Items',
        'average-order': 'Average Order',
        'transaction-details': 'Transaction Details',
        'date': 'Date',
        'items': 'Items',
        'no-sales': 'No sales for this month',
        'added-to-cart': 'added to cart',
        'cart-already-empty': 'Cart is already empty',
        'clear-cart-confirm': 'Do you want to clear the cart?',
        'cart-cleared': 'Cart cleared',
        'no-items-in-cart': 'No items in cart',
        'bill-printed': 'Bill printed',
        'enter-all-details': 'Please enter all details correctly',
        'invalid-price': 'Invalid price',
        'item-added': 'Item added',
        'item-updated': 'Item updated',
        'delete-item-confirm': 'Do you want to delete this item?',
        'item-deleted': 'Item deleted',
        'thanks': 'Thank you! Visit again!',
        'bill': 'Bill',
        'stock': 'Stock',
        'in-stock': 'In Stock',
        'out-of-stock': 'Out of Stock',
        'low-stock': 'Low Stock',
        'stock-quantity': 'Stock Quantity',
        'manage-stock': 'Manage Stock',
        'update-stock': 'Update Stock',
        'stock-updated': 'Stock updated',
        'insufficient-stock': 'Insufficient stock available',
        'item-out-of-stock': 'Item is out of stock',
        'add-stock': 'Add Stock',
        'current-stock': 'Current Stock',
        'search-placeholder': 'Search products...',
        'no-results': 'No products found',
        'search': 'Search',
        'daily-stock': 'Daily Stock Report',
        'stock-inventory': 'Stock Inventory',
        'select-date': 'Select Date',
        'opening-stock': 'Opening Stock',
        'closing-stock': 'Closing Stock',
        'stock-added': 'Stock Added',
        'stock-sold': 'Stock Sold',
        'stock-adjustment': 'Stock Adjustment',
        'total-movement': 'Total Movement',
        'stock-movements': 'Stock Movements',
        'item-name': 'Item Name',
        'opening': 'Opening',
        'added': 'Added',
        'sold': 'Sold',
        'adjusted': 'Adjusted',
        'closing': 'Closing',
        'no-stock-data': 'No stock data for this date',
        'view-daily-stock': 'View Daily Stock',
        'upload-image': 'Upload Image',
        'or': 'OR',
        'image-url': 'Image URL',
        'select-image': 'Select Image',
        'image-preview': 'Image Preview',
        'upi-payment': 'UPI Payment',
        'pay-via-upi': 'Pay via UPI',
        'upi-id': 'UPI ID',
        'copy-upi': 'Copy UPI ID',
        'upi-copied': 'UPI ID Copied!',
        'paytm': 'Paytm',
        'phonepe': 'PhonePe',
        'gpay': 'Google Pay',
        'other-upi': 'Other UPI Apps',
        'stock-unit': 'Stock Unit',
        'units': 'Units',
        'grams': 'Grams (g)',
        'kg': 'Kilograms (kg)',
        'select-unit': 'Select Unit Type',
        'qr-settings': 'QR Code Settings',
        'custom-qr-code': 'Custom QR Code',
        'use-custom-qr': 'Use Custom QR Code Image',
        'upload-qr-code': 'Upload QR Code Image',
        'remove-qr-code': 'Remove Custom QR Code',
        'qr-code-settings': 'QR Code Settings',
        'settings': 'Settings'
    },
    ta: {
        'store-title': 'ஸ்ரீ சிவம் ஸ்டோர்ஸ்',
        'lang-toggle': 'English',
        'manage-menu': 'மெனு நிர்வகிக்க',
        'sales-report': 'மாதாந்திர அறிக்கை',
        'products': 'பொருட்கள்',
        'cart': 'வண்டி',
        'empty-cart': 'வண்டி காலியாக உள்ளது',
        'total': 'மொத்தம்',
        'clear-cart': 'வண்டியை அழிக்க',
        'print-bill': 'பில் அச்சிடு',
        'share-whatsapp': 'WhatsApp இல் பகிர்',
        'pay-now': 'இப்போது செலுத்த',
        'make-payment': 'கட்டணம் செலுத்த',
        'total-amount': 'மொத்த தொகை',
        'close': 'மூடு',
        'add-new-item': 'புதிய பொருள் சேர்க்க',
        'item-name-placeholder': 'பொருள் பெயர்',
        'item-price-placeholder': 'விலை (₹)',
        'item-image-placeholder': 'படத்தின் URL',
        'add': 'சேர்க்க',
        'current-menu': 'தற்போதைய மெனு',
        'select-month': 'மாதம் தேர்ந்தெடுக்கவும்',
        'edit': 'திருத்து',
        'delete': 'நீக்கு',
        'total-sales': 'மொத்த விற்பனை',
        'total-transactions': 'மொத்த பரிவர்த்தனைகள்',
        'total-items': 'மொத்த பொருட்கள்',
        'average-order': 'சராசரி ஆர்டர்',
        'transaction-details': 'பரிவர்த்தனை விவரங்கள்',
        'date': 'தேதி',
        'items': 'பொருட்கள்',
        'no-sales': 'இந்த மாதத்திற்கு விற்பனை இல்லை',
        'added-to-cart': 'வண்டியில் சேர்க்கப்பட்டது',
        'cart-already-empty': 'வண்டி ஏற்கனவே காலியாக உள்ளது',
        'clear-cart-confirm': 'வண்டியை அழிக்க விரும்புகிறீர்களா?',
        'cart-cleared': 'வண்டி அழிக்கப்பட்டது',
        'no-items-in-cart': 'வண்டியில் பொருட்கள் இல்லை',
        'bill-printed': 'பில் அச்சிடப்பட்டது',
        'enter-all-details': 'தயவுசெய்து அனைத்து விவரங்களையும் சரியாக உள்ளிடவும்',
        'invalid-price': 'தவறான விலை',
        'item-added': 'பொருள் சேர்க்கப்பட்டது',
        'item-updated': 'பொருள் புதுப்பிக்கப்பட்டது',
        'delete-item-confirm': 'இந்த பொருளை நீக்க விரும்புகிறீர்களா?',
        'item-deleted': 'பொருள் நீக்கப்பட்டது',
        'thanks': 'நன்றி! மீண்டும் வருக!',
        'bill': 'பில்',
        'stock': 'பங்கு',
        'in-stock': 'கையிருப்பில் உள்ளது',
        'out-of-stock': 'கையிருப்பு இல்லை',
        'low-stock': 'குறைந்த பங்கு',
        'stock-quantity': 'பங்கு அளவு',
        'manage-stock': 'பங்கு நிர்வகிக்க',
        'update-stock': 'பங்கு புதுப்பிக்க',
        'stock-updated': 'பங்கு புதுப்பிக்கப்பட்டது',
        'insufficient-stock': 'போதுமான பங்கு இல்லை',
        'item-out-of-stock': 'பொருள் கையிருப்பில் இல்லை',
        'add-stock': 'பங்கு சேர்க்க',
        'current-stock': 'தற்போதைய பங்கு',
        'search-placeholder': 'பொருட்களைத் தேடுங்கள்...',
        'no-results': 'பொருட்கள் கிடைக்கவில்லை',
        'search': 'தேடு',
        'daily-stock': 'தினசரி பங்கு அறிக்கை',
        'stock-inventory': 'பங்கு சரக்கு',
        'select-date': 'தேதியைத் தேர்ந்தெடுக்கவும்',
        'opening-stock': 'தொடக்க பங்கு',
        'closing-stock': 'முடிவு பங்கு',
        'stock-added': 'பங்கு சேர்க்கப்பட்டது',
        'stock-sold': 'பங்கு விற்கப்பட்டது',
        'stock-adjustment': 'பங்கு சரிசெய்தல்',
        'total-movement': 'மொத்த இயக்கம்',
        'stock-movements': 'பங்கு இயக்கங்கள்',
        'item-name': 'பொருள் பெயர்',
        'opening': 'தொடக்கம்',
        'added': 'சேர்க்கப்பட்டது',
        'sold': 'விற்கப்பட்டது',
        'adjusted': 'சரிசெய்யப்பட்டது',
        'closing': 'முடிவு',
        'no-stock-data': 'இந்த தேதிக்கு பங்கு தரவு இல்லை',
        'view-daily-stock': 'தினசரி பங்கு காண்க',
        'upload-image': 'படத்தை பதிவேற்று',
        'or': 'அல்லது',
        'image-url': 'படத்தின் URL',
        'select-image': 'படத்தைத் தேர்ந்தெடுக்கவும்',
        'image-preview': 'பட முன்னோட்டம்',
        'upi-payment': 'UPI கட்டணம்',
        'pay-via-upi': 'UPI மூலம் செலுத்த',
        'upi-id': 'UPI ID',
        'copy-upi': 'UPI ID ஐ நகலெடுக்க',
        'upi-copied': 'UPI ID நகலெடுக்கப்பட்டது!',
        'paytm': 'Paytm',
        'phonepe': 'PhonePe',
        'gpay': 'Google Pay',
        'other-upi': 'மற்ற UPI பயன்பாடுகள்',
        'stock-unit': 'பங்கு அலகு',
        'units': 'அலகுகள்',
        'grams': 'கிராம் (g)',
        'kg': 'கிலோகிராம் (kg)',
        'select-unit': 'அலகு வகையைத் தேர்ந்தெடுக்கவும்',
        'qr-settings': 'QR குறியீடு அமைப்புகள்',
        'custom-qr-code': 'தனிப்பயன் QR குறியீடு',
        'use-custom-qr': 'தனிப்பயன் QR குறியீடு படத்தைப் பயன்படுத்த',
        'upload-qr-code': 'QR குறியீடு படத்தை பதிவேற்று',
        'remove-qr-code': 'தனிப்பயன் QR குறியீட்டை அகற்று',
        'qr-code-settings': 'QR குறியீடு அமைப்புகள்',
        'settings': 'அமைப்புகள்'
    }
};

// Current language (default: Tamil)
let currentLang = localStorage.getItem('language') || 'ta';

// Initialize default menu items with better images and stock
const defaultMenuItems = [
    { id: 1, name: 'துவரம் பருப்பு', nameEn: 'Toor Dal', price: 120, stock: 50, unit: 'kg', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=400&fit=crop' },
    { id: 2, name: 'கொள்ளு', nameEn: 'Horse Gram', price: 150, stock: 30, unit: 'kg', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop' },
    { id: 3, name: 'சோப்பு', nameEn: 'Soap', price: 45, stock: 100, unit: 'units', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop' },
    { id: 4, name: 'சீனி', nameEn: 'Sugar', price: 50, stock: 75, unit: 'kg', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=400&fit=crop' },
    { id: 5, name: 'அரிசி', nameEn: 'Rice', price: 80, stock: 60, unit: 'kg', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=400&fit=crop' }
];

// Initialize data from localStorage or use defaults
let menuItems = JSON.parse(localStorage.getItem('menuItems')) || defaultMenuItems;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let sales = JSON.parse(localStorage.getItem('sales')) || [];
let stockHistory = JSON.parse(localStorage.getItem('stockHistory')) || [];

// Migrate existing items to include stock field and unit if missing
let needsSave = false;
menuItems.forEach(item => {
    if (item.stock === undefined || item.stock === null) {
        item.stock = 0;
        needsSave = true;
    }
    if (!item.unit) {
        item.unit = 'units'; // Default to units if not specified
        needsSave = true;
    }
});
if (needsSave) {
    saveMenuItems();
}

// Search functionality
let searchQuery = '';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    renderMenu();
    renderCart();
    updateTotal();
    
    // Set current month for sales report
    const now = new Date();
    document.getElementById('report-month').value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    
    // Search input event listeners
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', filterMenuItems);
        searchInput.addEventListener('keyup', filterMenuItems);
    }
});

// Language functions
function toggleLanguage() {
    currentLang = currentLang === 'ta' ? 'en' : 'ta';
    localStorage.setItem('language', currentLang);
    updateLanguage();
    renderMenu();
    renderCart();
    updateSalesReport();
}

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Update placeholders
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            element.placeholder = translations[currentLang][key];
        }
    });
    
    // Update HTML direction
    document.documentElement.setAttribute('dir', currentLang === 'ta' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', currentLang);
    
    // Re-render menu to apply language changes
    renderMenu();
}

// Save to localStorage
function saveMenuItems() {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function saveSales() {
    localStorage.setItem('sales', JSON.stringify(sales));
}

function saveStockHistory() {
    localStorage.setItem('stockHistory', JSON.stringify(stockHistory));
}

// Record stock change
function recordStockChange(itemId, itemName, changeType, quantity, previousStock, newStock, notes = '') {
    const change = {
        id: Date.now(),
        date: new Date().toISOString(),
        itemId: itemId,
        itemName: itemName,
        changeType: changeType, // 'added', 'sold', 'adjusted'
        quantity: quantity,
        previousStock: previousStock,
        newStock: newStock,
        notes: notes
    };
    stockHistory.push(change);
    saveStockHistory();
    return change;
}

// Filter Menu Items based on search
function filterMenuItems() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const noResults = document.getElementById('no-results');
    
    if (searchInput) {
        searchQuery = searchInput.value.trim().toLowerCase();
        
        // Show/hide clear button
        if (searchQuery.length > 0) {
            searchClear.style.display = 'block';
        } else {
            searchClear.style.display = 'none';
        }
    }
    
    renderMenu();
}

// Clear Search
function clearSearch() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    
    if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        searchClear.style.display = 'none';
        renderMenu();
    }
}

// Render Menu
function renderMenu() {
    const menuGrid = document.getElementById('menu-grid');
    const noResults = document.getElementById('no-results');
    menuGrid.innerHTML = '';

    // Filter items based on search query
    let filteredItems = menuItems;
    if (searchQuery.length > 0) {
        filteredItems = menuItems.filter(item => {
            const name = (item.name || '').toLowerCase();
            const nameEn = (item.nameEn || '').toLowerCase();
            const price = item.price.toString();
            return name.includes(searchQuery) || 
                   nameEn.includes(searchQuery) || 
                   price.includes(searchQuery);
        });
    }

    // Show no results message if no items match
    if (filteredItems.length === 0 && searchQuery.length > 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }

    filteredItems.forEach(item => {
        const menuItemDiv = document.createElement('div');
        menuItemDiv.className = 'menu-item';
        const itemName = currentLang === 'ta' ? (item.name || item.nameEn) : (item.nameEn || item.name);
        const stock = item.stock || 0;
        const unit = item.unit || 'units';
        const stockStatus = stock > 0 ? (stock <= 10 ? 'low-stock' : 'in-stock') : 'out-of-stock';
        const stockClass = stock > 0 ? (stock <= 10 ? 'stock-low' : 'stock-available') : 'stock-out';
        const stockText = stock > 0 ? (stock <= 10 ? translations[currentLang]['low-stock'] : translations[currentLang]['in-stock']) : translations[currentLang]['out-of-stock'];
        
        // Format stock display based on unit
        let stockDisplay = stock;
        let unitDisplay = '';
        if (unit === 'kg') {
            stockDisplay = stock;
            unitDisplay = ' ' + translations[currentLang]['kg'];
        } else if (unit === 'grams' || unit === 'g') {
            stockDisplay = stock;
            unitDisplay = ' ' + translations[currentLang]['grams'];
        } else {
            unitDisplay = ' ' + translations[currentLang]['units'];
        }
        
        menuItemDiv.innerHTML = `
            <img src="${item.image}" alt="${itemName}" onerror="this.src='https://via.placeholder.com/200?text=${encodeURIComponent(itemName)}'">
            <h3>${itemName}</h3>
            <div class="price">₹${item.price.toFixed(2)}</div>
            <div class="stock-info ${stockClass}">
                <i class="fas ${stock > 0 ? (stock <= 10 ? 'fa-exclamation-triangle' : 'fa-check-circle') : 'fa-times-circle'}"></i>
                <span>${translations[currentLang]['stock']}: ${stockDisplay}${unitDisplay} - ${stockText}</span>
            </div>
            <div class="item-actions">
                <button class="btn btn-primary ${stock === 0 ? 'disabled' : ''}" onclick="addToCart(${item.id})" ${stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-cart-plus"></i> ${translations[currentLang]['add']}
                </button>
            </div>
        `;
        menuGrid.appendChild(menuItemDiv);
    });
}

// Add to Cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const stock = item.stock || 0;
    if (stock === 0) {
        showNotification(translations[currentLang]['item-out-of-stock']);
        renderMenu(); // Refresh menu to show updated stock status
        return;
    }

    const itemName = currentLang === 'ta' ? (item.name || item.nameEn) : (item.nameEn || item.name);
    const cartItem = cart.find(c => c.id === itemId);
    
    if (cartItem) {
        const newQuantity = cartItem.quantity + 1;
        if (newQuantity > stock) {
            showNotification(translations[currentLang]['insufficient-stock'] + ` (Available: ${stock})`);
            renderMenu(); // Refresh to show current stock
            return;
        }
        cartItem.quantity = newQuantity;
    } else {
        cart.push({
            id: item.id,
            name: item.name || item.nameEn,
            nameEn: item.nameEn || item.name,
            price: item.price,
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    updateTotal();
    
    // Show notification
    showNotification(`${itemName} ${translations[currentLang]['added-to-cart']}`);
}

// Render Cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">${translations[currentLang]['empty-cart']}</p>`;
        return;
    }

    cartItems.innerHTML = '';
    cart.forEach(cartItem => {
        const menuItem = menuItems.find(i => i.id === cartItem.id);
        const unit = menuItem ? (menuItem.unit || 'units') : 'units';
        const itemName = currentLang === 'ta' ? (cartItem.name || cartItem.nameEn) : (cartItem.nameEn || cartItem.name);
        
        // Format unit display
        let unitDisplay = '';
        if (unit === 'kg') {
            unitDisplay = ' ' + translations[currentLang]['kg'];
        } else if (unit === 'grams' || unit === 'g') {
            unitDisplay = ' ' + translations[currentLang]['grams'];
        } else {
            unitDisplay = ' ' + translations[currentLang]['units'];
        }
        
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${itemName}</div>
                <div class="cart-item-price">₹${cartItem.price.toFixed(2)} x ${cartItem.quantity}${unitDisplay}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${cartItem.id}, -1)">-</button>
                    <span class="quantity-value">${cartItem.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${cartItem.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${cartItem.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        cartItems.appendChild(cartItemDiv);
    });
}

// Update Quantity
function updateQuantity(itemId, change) {
    const cartItem = cart.find(c => c.id === itemId);
    if (!cartItem) return;

    const item = menuItems.find(i => i.id === itemId);
    const stock = item ? (item.stock || 0) : 0;
    const unit = item ? (item.unit || 'units') : 'units';
    
    // For units, increment by 1; for grams/kg, allow decimal increments
    const increment = (unit === 'units') ? 1 : (unit === 'kg' ? 0.1 : 0.01);
    const newQuantity = parseFloat((cartItem.quantity + (change * increment)).toFixed(2));

    if (newQuantity <= 0) {
        removeFromCart(itemId);
    } else if (newQuantity > stock) {
        const unitDisplay = unit === 'kg' ? translations[currentLang]['kg'] : 
                           (unit === 'grams' || unit === 'g') ? translations[currentLang]['grams'] : 
                           translations[currentLang]['units'];
        showNotification(translations[currentLang]['insufficient-stock'] + ` (Available: ${stock} ${unitDisplay})`);
    } else {
        cartItem.quantity = newQuantity;
        saveCart();
        renderCart();
        updateTotal();
    }
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    saveCart();
    renderCart();
    updateTotal();
}

// Clear Cart
function clearCart() {
    if (cart.length === 0) {
        showNotification(translations[currentLang]['cart-already-empty']);
        return;
    }
    
    if (confirm(translations[currentLang]['clear-cart-confirm'])) {
        cart = [];
        saveCart();
        renderCart();
        updateTotal();
        showNotification(translations[currentLang]['cart-cleared']);
    }
}

// Update Total
function updateTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total-amount').textContent = total.toFixed(2);
    document.getElementById('payment-amount').textContent = total.toFixed(2);
}

// Generate Bill
function generateBill() {
    if (cart.length === 0) {
        showNotification(translations[currentLang]['no-items-in-cart']);
        return;
    }

    // Validate stock availability before generating bill
    let stockIssues = [];
    cart.forEach(cartItem => {
        const menuItem = menuItems.find(i => i.id === cartItem.id);
        if (menuItem) {
            const availableStock = menuItem.stock || 0;
            if (cartItem.quantity > availableStock) {
                const itemName = currentLang === 'ta' ? (menuItem.name || menuItem.nameEn) : (menuItem.nameEn || menuItem.name);
                stockIssues.push(`${itemName}: Requested ${cartItem.quantity}, Available ${availableStock}`);
            }
        }
    });

    if (stockIssues.length > 0) {
        showNotification(translations[currentLang]['insufficient-stock'] + '\n' + stockIssues.join('\n'));
        renderMenu(); // Refresh menu to show current stock
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const billDate = new Date();
    const saleId = Date.now();
    
    // Update stock for sold items BEFORE saving sale
    cart.forEach(cartItem => {
        const menuItem = menuItems.find(i => i.id === cartItem.id);
        if (menuItem) {
            const previousStock = menuItem.stock || 0;
            // Reduce stock by the billed quantity
            menuItem.stock = Math.max(0, previousStock - cartItem.quantity);
            const itemName = currentLang === 'ta' ? (menuItem.name || menuItem.nameEn) : (menuItem.nameEn || menuItem.name);
            recordStockChange(
                menuItem.id,
                itemName,
                'sold',
                cartItem.quantity,
                previousStock,
                menuItem.stock,
                `Sold in bill #${saleId}`
            );
        }
    });
    saveMenuItems(); // Save stock changes first
    
    // Save sale after stock is updated
    const sale = {
        id: saleId,
        date: billDate.toISOString(),
        items: JSON.parse(JSON.stringify(cart)),
        total: total
    };
    sales.push(sale);
    saveSales();

    // Create bill content
    const storeTitle = translations[currentLang]['store-title'];
    const billLabel = translations[currentLang]['bill'];
    const itemLabel = translations[currentLang]['items'];
    const totalLabel = translations[currentLang]['total'];
    const thanksMsg = translations[currentLang]['thanks'];
    
    let billContent = `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
            <h2 style="text-align: center; color: #667eea;">${storeTitle}</h2>
            <p style="text-align: center;">${billLabel} #${sale.id}</p>
            <p style="text-align: center;">${billDate.toLocaleString(currentLang === 'ta' ? 'ta-IN' : 'en-IN')}</p>
            <hr style="margin: 20px 0;">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="background: #667eea; color: white;">
                        <th style="padding: 10px; text-align: ${currentLang === 'ta' ? 'right' : 'left'};">${itemLabel}</th>
                        <th style="padding: 10px; text-align: center;">Qty</th>
                        <th style="padding: 10px; text-align: ${currentLang === 'ta' ? 'left' : 'right'};">Price</th>
                        <th style="padding: 10px; text-align: ${currentLang === 'ta' ? 'left' : 'right'};">Total</th>
                    </tr>
                </thead>
                <tbody>
    `;

    cart.forEach(cartItem => {
        const menuItem = menuItems.find(i => i.id === cartItem.id);
        const unit = menuItem ? (menuItem.unit || 'units') : 'units';
        const itemTotal = cartItem.price * cartItem.quantity;
        const itemName = currentLang === 'ta' ? (cartItem.name || cartItem.nameEn) : (cartItem.nameEn || cartItem.name);
        
        // Format unit display for bill
        let unitDisplay = '';
        if (unit === 'kg') {
            unitDisplay = ' ' + translations[currentLang]['kg'];
        } else if (unit === 'grams' || unit === 'g') {
            unitDisplay = ' ' + translations[currentLang]['grams'];
        } else {
            unitDisplay = ' ' + translations[currentLang]['units'];
        }
        
        billContent += `
            <tr>
                <td style="padding: 8px; text-align: ${currentLang === 'ta' ? 'right' : 'left'};">${itemName}</td>
                <td style="padding: 8px; text-align: center;">${cartItem.quantity}${unitDisplay}</td>
                <td style="padding: 8px; text-align: ${currentLang === 'ta' ? 'left' : 'right'};">₹${cartItem.price.toFixed(2)}</td>
                <td style="padding: 8px; text-align: ${currentLang === 'ta' ? 'left' : 'right'};">₹${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    billContent += `
                </tbody>
            </table>
            <hr style="margin: 20px 0;">
            <div style="text-align: ${currentLang === 'ta' ? 'right' : 'left'}; font-size: 1.5em; font-weight: bold;">
                ${totalLabel}: ₹${total.toFixed(2)}
            </div>
            <p style="text-align: center; margin-top: 30px; color: #666;">
                ${thanksMsg}
            </p>
        </div>
    `;

    // Open print window
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>பில் - ${sale.id}</title>
                <style>
                    @media print {
                        @page { margin: 0; }
                        body { margin: 1cm; }
                    }
                </style>
            </head>
            <body>${billContent}</body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();

    // Clear cart after printing
    cart = [];
    saveCart();
    renderCart();
    updateTotal();
    renderMenu(); // Refresh menu to show updated stock (billed quantities reduced)
    
    showNotification(translations[currentLang]['bill-printed']);
}

// Share on WhatsApp
function shareOnWhatsApp() {
    if (cart.length === 0) {
        showNotification(translations[currentLang]['no-items-in-cart']);
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const storeTitle = translations[currentLang]['store-title'];
    const billLabel = translations[currentLang]['bill'];
    const totalLabel = translations[currentLang]['total'];
    let message = `🛒 *${storeTitle} - ${billLabel}*\n\n`;
    
    cart.forEach(cartItem => {
        const menuItem = menuItems.find(i => i.id === cartItem.id);
        const unit = menuItem ? (menuItem.unit || 'units') : 'units';
        const itemTotal = cartItem.price * cartItem.quantity;
        const itemName = currentLang === 'ta' ? (cartItem.name || cartItem.nameEn) : (cartItem.nameEn || cartItem.name);
        
        // Format unit display
        let unitDisplay = '';
        if (unit === 'kg') {
            unitDisplay = ' ' + translations[currentLang]['kg'];
        } else if (unit === 'grams' || unit === 'g') {
            unitDisplay = ' ' + translations[currentLang]['grams'];
        } else {
            unitDisplay = ' ' + translations[currentLang]['units'];
        }
        
        message += `${itemName} - ${cartItem.quantity}${unitDisplay} x ₹${cartItem.price.toFixed(2)} = ₹${itemTotal.toFixed(2)}\n`;
    });
    
    message += `\n*${totalLabel}: ₹${total.toFixed(2)}*`;
    message += `\n\n${new Date().toLocaleString(currentLang === 'ta' ? 'ta-IN' : 'en-IN')}`;

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Image upload handling
let uploadedImageBase64 = null;

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showNotification('Please select a valid image file');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImageBase64 = e.target.result;
        const previewContainer = document.getElementById('image-preview-container');
        const preview = document.getElementById('image-preview');
        preview.src = uploadedImageBase64;
        previewContainer.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function clearImageUpload() {
    uploadedImageBase64 = null;
    document.getElementById('item-image-upload').value = '';
    document.getElementById('image-preview-container').style.display = 'none';
    document.getElementById('image-preview').src = '';
}

// Payment Tab Functions
function showPaymentTab(tab) {
    // Hide all tabs
    document.querySelectorAll('.payment-tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.payment-tab').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    if (tab === 'qr') {
        document.getElementById('qr-payment-tab').classList.add('active');
        document.querySelectorAll('.payment-tab')[0].classList.add('active');
    } else {
        document.getElementById('upi-payment-tab').classList.add('active');
        document.querySelectorAll('.payment-tab')[1].classList.add('active');
    }
}

// Show Payment Modal
function showPayment() {
    if (cart.length === 0) {
        showNotification(translations[currentLang]['no-items-in-cart']);
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const modal = document.getElementById('payment-modal');
    const qrContainer = document.getElementById('qr-code-container');
    
    // Clear previous QR code
    qrContainer.innerHTML = '';
    
    // Check if custom QR code image is available
    const customQRCode = localStorage.getItem('customQRCode');
    if (customQRCode) {
        // Display custom QR code image
        const qrImage = document.createElement('img');
        qrImage.src = customQRCode;
        qrImage.alt = 'QR Code';
        qrImage.style.maxWidth = '250px';
        qrImage.style.height = 'auto';
        qrImage.style.borderRadius = '10px';
        qrImage.style.border = '2px solid #e0e0e0';
        qrContainer.appendChild(qrImage);
    } else {
        // Generate payment link or UPI ID
        const upiId = document.getElementById('upi-id-input').value || 'departmentalstore@paytm';
        const paymentData = `UPI: ${upiId}\nAmount: ₹${total.toFixed(2)}\nBill ID: ${Date.now()}`;
        
        // Generate QR Code
        new QRCode(qrContainer, {
            text: paymentData,
            width: 200,
            height: 200,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.H
        });
    }
    
    // Reset to QR tab
    showPaymentTab('qr');
    
    modal.style.display = 'block';
}

// UPI Payment Functions
function copyUPIId() {
    const upiInput = document.getElementById('upi-id-input');
    const upiId = upiInput.value || 'departmentalstore@paytm';
    
    navigator.clipboard.writeText(upiId).then(() => {
        showNotification(translations[currentLang]['upi-copied']);
    }).catch(() => {
        // Fallback for older browsers
        upiInput.select();
        document.execCommand('copy');
        showNotification(translations[currentLang]['upi-copied']);
    });
}

function openUPILink(app) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const upiId = document.getElementById('upi-id-input').value || 'departmentalstore@paytm';
    
    let url = '';
    const amount = total.toFixed(2);
    const merchantName = 'SRI SIVAM STORES';
    const transactionNote = `Bill Payment - ₹${amount}`;
    
    switch(app) {
        case 'paytm':
            url = `paytmmp://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
            break;
        case 'phonepe':
            url = `phonepe://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
            break;
        case 'gpay':
            url = `tez://upi/pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
            break;
        case 'other':
            // Generic UPI link
            url = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
            break;
    }
    
    if (url) {
        window.location.href = url;
        // Fallback: show UPI details if app doesn't open
        setTimeout(() => {
            const message = `UPI ID: ${upiId}\nAmount: ₹${amount}\n\nIf UPI app didn't open, please copy the UPI ID and pay manually.`;
            alert(message);
        }, 1000);
    }
}

// Close Payment Modal
function closePayment() {
    document.getElementById('payment-modal').style.display = 'none';
}

// QR Code Settings Functions
let uploadedQRCodeBase64 = null;

function showQRSettings() {
    document.getElementById('qr-settings-modal').style.display = 'block';
    // Load existing QR code if available
    const existingQR = localStorage.getItem('customQRCode');
    if (existingQR) {
        const preview = document.getElementById('qr-code-preview');
        preview.src = existingQR;
        document.getElementById('qr-code-preview-container').style.display = 'block';
        document.getElementById('remove-qr-btn').style.display = 'block';
    } else {
        document.getElementById('qr-code-preview-container').style.display = 'none';
        document.getElementById('remove-qr-btn').style.display = 'none';
    }
}

function closeQRSettings() {
    document.getElementById('qr-settings-modal').style.display = 'none';
    // Clear upload
    uploadedQRCodeBase64 = null;
    document.getElementById('qr-code-upload').value = '';
}

function handleQRCodeUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showNotification('Please select a valid image file');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedQRCodeBase64 = e.target.result;
        const preview = document.getElementById('qr-code-preview');
        preview.src = uploadedQRCodeBase64;
        document.getElementById('qr-code-preview-container').style.display = 'block';
        document.getElementById('remove-qr-btn').style.display = 'block';
    };
    reader.readAsDataURL(file);
}

function saveQRCode() {
    // Check if there's a newly uploaded QR code
    if (uploadedQRCodeBase64) {
        localStorage.setItem('customQRCode', uploadedQRCodeBase64);
        showNotification(translations[currentLang]['qr-code-settings'] + ' - ' + translations[currentLang]['custom-qr-code'] + ' saved');
        closeQRSettings();
        // Refresh payment modal if open
        if (document.getElementById('payment-modal').style.display === 'block') {
            showPayment();
        }
    } else {
        // Check if there's an existing QR code saved
        const existingQR = localStorage.getItem('customQRCode');
        if (existingQR) {
            showNotification('QR code is already saved. Upload a new image to update.');
        } else {
            showNotification('Please upload a QR code image first');
        }
    }
}

function removeCustomQRCode() {
    if (confirm('Are you sure you want to remove the custom QR code?')) {
        localStorage.removeItem('customQRCode');
        uploadedQRCodeBase64 = null;
        document.getElementById('qr-code-upload').value = '';
        document.getElementById('qr-code-preview').src = '';
        document.getElementById('qr-code-preview-container').style.display = 'none';
        document.getElementById('remove-qr-btn').style.display = 'none';
        showNotification(translations[currentLang]['remove-qr-code'] + ' - ' + translations[currentLang]['custom-qr-code'] + ' removed');
        // Refresh payment modal if open
        if (document.getElementById('payment-modal').style.display === 'block') {
            showPayment();
        }
    }
}

// Manage Menu Functions
function showManageMenu() {
    document.getElementById('manage-menu-modal').style.display = 'block';
    renderManageMenuList();
}

function closeManageMenu() {
    document.getElementById('manage-menu-modal').style.display = 'none';
    // Clear form
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-stock').value = '';
    document.getElementById('item-unit').value = 'units';
    document.getElementById('item-image').value = '';
    clearImageUpload();
}

function addMenuItem() {
    const name = document.getElementById('item-name').value.trim();
    const price = parseFloat(document.getElementById('item-price').value);
    const stockInput = document.getElementById('item-stock').value;
    const stock = stockInput ? parseFloat(stockInput) : 0;
    const unit = document.getElementById('item-unit').value || 'units';
    const imageUrl = document.getElementById('item-image').value.trim();
    
    // Use uploaded image if available, otherwise use URL
    const image = uploadedImageBase64 || imageUrl || 'https://via.placeholder.com/200?text=' + encodeURIComponent(name);

    if (!name || !price || price <= 0) {
        showNotification(translations[currentLang]['enter-all-details']);
        return;
    }

    const newItem = {
        id: Date.now(),
        name: currentLang === 'ta' ? name : '',
        nameEn: currentLang === 'en' ? name : '',
        price: price,
        stock: stock,
        unit: unit,
        image: image
    };

    menuItems.push(newItem);
    saveMenuItems();
    clearSearch(); // Clear search to show new item
    renderMenu();
    renderManageMenuList();
    
    // Clear form
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-stock').value = '';
    document.getElementById('item-unit').value = 'units';
    document.getElementById('item-image').value = '';
    clearImageUpload();
    
    showNotification(translations[currentLang]['item-added']);
}

function renderManageMenuList() {
    const manageList = document.getElementById('manage-menu-list');
    manageList.innerHTML = '';

    menuItems.forEach(item => {
        const itemName = currentLang === 'ta' ? (item.name || item.nameEn) : (item.nameEn || item.name);
        const stock = item.stock || 0;
        const unit = item.unit || 'units';
        const stockClass = stock > 0 ? (stock <= 10 ? 'stock-low' : 'stock-available') : 'stock-out';
        
        // Format stock display
        let stockDisplay = stock;
        let unitDisplay = '';
        if (unit === 'kg') {
            unitDisplay = ' ' + translations[currentLang]['kg'];
        } else if (unit === 'grams' || unit === 'g') {
            unitDisplay = ' ' + translations[currentLang]['grams'];
        } else {
            unitDisplay = ' ' + translations[currentLang]['units'];
        }
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'manage-menu-item';
        itemDiv.innerHTML = `
            <div class="manage-menu-item-info">
                <img src="${item.image}" alt="${itemName}" onerror="this.src='https://via.placeholder.com/60?text=${encodeURIComponent(itemName)}'">
                <div>
                    <strong>${itemName}</strong> - ₹${item.price.toFixed(2)}
                    <div class="stock-info ${stockClass}" style="margin-top: 5px; font-size: 0.9em;">
                        ${translations[currentLang]['current-stock']}: <strong>${stockDisplay}${unitDisplay}</strong>
                    </div>
                </div>
            </div>
            <div class="manage-menu-item-actions">
                <button class="btn btn-edit" onclick="editMenuItem(${item.id})">
                    <i class="fas fa-edit"></i> ${translations[currentLang]['edit']}
                </button>
                <button class="btn btn-primary" onclick="updateStock(${item.id})">
                    <i class="fas fa-boxes"></i> ${translations[currentLang]['manage-stock']}
                </button>
                <button class="btn btn-delete" onclick="deleteMenuItem(${item.id})">
                    <i class="fas fa-trash"></i> ${translations[currentLang]['delete']}
                </button>
            </div>
        `;
        manageList.appendChild(itemDiv);
    });
}

// Update Stock Function
function updateStock(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const currentStock = item.stock || 0;
    const unit = item.unit || 'units';
    const unitDisplay = unit === 'kg' ? translations[currentLang]['kg'] : 
                       (unit === 'grams' || unit === 'g') ? translations[currentLang]['grams'] : 
                       translations[currentLang]['units'];
    
    const stockChange = prompt(`${translations[currentLang]['update-stock']}\n${translations[currentLang]['current-stock']}: ${currentStock} ${unitDisplay}\n${translations[currentLang]['add-stock']} (+ve) or Remove (-ve):`, '0');
    
    if (stockChange === null) return;
    
    const change = parseFloat(stockChange);
    if (isNaN(change)) {
        showNotification('Invalid number');
        return;
    }

    const previousStock = currentStock;
    item.stock = Math.max(0, currentStock + change);
    const itemName = currentLang === 'ta' ? (item.name || item.nameEn) : (item.nameEn || item.name);
    const changeType = change > 0 ? 'added' : 'adjusted';
    
    recordStockChange(
        item.id,
        itemName,
        changeType,
        Math.abs(change),
        previousStock,
        item.stock,
        change > 0 ? 'Manual stock addition' : 'Manual stock adjustment'
    );
    
    saveMenuItems();
    renderMenu();
    renderManageMenuList();
    showNotification(translations[currentLang]['stock-updated']);
}

function editMenuItem(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const currentName = currentLang === 'ta' ? (item.name || item.nameEn) : (item.nameEn || item.name);
    const newName = prompt(translations[currentLang]['item-name-placeholder'] + ':', currentName);
    if (!newName) return;

    const newPrice = parseFloat(prompt(translations[currentLang]['item-price-placeholder'] + ':', item.price));
    if (!newPrice || newPrice <= 0) {
        showNotification(translations[currentLang]['invalid-price']);
        return;
    }

    const currentUnit = item.unit || 'units';
    const unitOptions = ['units', 'grams', 'kg'];
    const unitNames = unitOptions.map(u => 
        u === 'kg' ? translations[currentLang]['kg'] : 
        (u === 'grams' ? translations[currentLang]['grams'] : translations[currentLang]['units'])
    );
    const unitPrompt = `${translations[currentLang]['stock-unit']} (1=units, 2=grams, 3=kg):`;
    const unitChoice = prompt(unitPrompt, unitOptions.indexOf(currentUnit) + 1);
    const newUnit = unitChoice ? unitOptions[parseInt(unitChoice) - 1] || currentUnit : currentUnit;

    const newImage = prompt(translations[currentLang]['item-image-placeholder'] + ':', item.image);
    
    if (currentLang === 'ta') {
        item.name = newName;
    } else {
        item.nameEn = newName;
    }
    item.price = newPrice;
    item.unit = newUnit;
    if (newImage) item.image = newImage;
    // Stock is managed separately via updateStock function

    saveMenuItems();
    renderMenu();
    renderManageMenuList();
    showNotification(translations[currentLang]['item-updated']);
}

function deleteMenuItem(itemId) {
    if (!confirm(translations[currentLang]['delete-item-confirm'])) return;

    menuItems = menuItems.filter(i => i.id !== itemId);
    saveMenuItems();
    renderMenu();
    renderManageMenuList();
    showNotification(translations[currentLang]['item-deleted']);
}

// Sales Report Functions
function showSalesReport() {
    document.getElementById('sales-report-modal').style.display = 'block';
    updateSalesReport();
}

function closeSalesReport() {
    document.getElementById('sales-report-modal').style.display = 'none';
}

// Daily Stock Report Functions
function showDailyStockReport() {
    const modal = document.getElementById('daily-stock-modal');
    const dateInput = document.getElementById('stock-date');
    
    // Set today's date as default
    const today = new Date();
    dateInput.value = today.toISOString().split('T')[0];
    
    modal.style.display = 'block';
    updateDailyStockReport();
}

function closeDailyStockReport() {
    document.getElementById('daily-stock-modal').style.display = 'none';
}

function updateDailyStockReport() {
    const selectedDate = document.getElementById('stock-date').value;
    const reportContent = document.getElementById('daily-stock-content');
    
    if (!selectedDate) {
        reportContent.innerHTML = `<p>${translations[currentLang]['select-date']}</p>`;
        return;
    }

    // Get stock data for selected date
    const dateStart = new Date(selectedDate);
    dateStart.setHours(0, 0, 0, 0);
    const dateEnd = new Date(selectedDate);
    dateEnd.setHours(23, 59, 59, 999);

    // Get all stock changes for the selected date
    const dayStockChanges = stockHistory.filter(change => {
        const changeDate = new Date(change.date);
        return changeDate >= dateStart && changeDate <= dateEnd;
    });

    // Get sales for the selected date
    const daySales = sales.filter(sale => {
        const saleDate = new Date(sale.date);
        return saleDate >= dateStart && saleDate <= dateEnd;
    });

    // Calculate stock summary for the selected date
    const stockSummary = {};
    
    // Initialize all items
    menuItems.forEach(item => {
        const itemName = currentLang === 'ta' ? (item.name || item.nameEn) : (item.nameEn || item.name);
        stockSummary[item.id] = {
            itemId: item.id,
            itemName: itemName,
            openingStock: 0,
            added: 0,
            sold: 0,
            adjusted: 0,
            closingStock: 0
        };
    });

    // Process stock changes for the selected date
    dayStockChanges.forEach(change => {
        if (!stockSummary[change.itemId]) {
            stockSummary[change.itemId] = {
                itemId: change.itemId,
                itemName: change.itemName,
                openingStock: 0,
                added: 0,
                sold: 0,
                adjusted: 0,
                closingStock: 0
            };
        }

        if (change.changeType === 'added') {
            stockSummary[change.itemId].added += change.quantity;
        } else if (change.changeType === 'sold') {
            stockSummary[change.itemId].sold += change.quantity;
        } else if (change.changeType === 'adjusted') {
            stockSummary[change.itemId].adjusted += change.quantity;
        }
    });

    // Calculate opening and closing stock
    // For each item, find the last stock change before the selected date to get opening stock
    const today = new Date();
    const isToday = selectedDate === today.toISOString().split('T')[0];
    
    Object.keys(stockSummary).forEach(itemId => {
        const summary = stockSummary[itemId];
        const menuItem = menuItems.find(i => i.id === parseInt(itemId));
        
        if (isToday) {
            // For today: opening = current - net change, closing = current
            const currentStock = menuItem ? (menuItem.stock || 0) : 0;
            const netChange = summary.added - summary.sold + summary.adjusted;
            summary.openingStock = Math.max(0, currentStock - netChange);
            summary.closingStock = currentStock;
        } else {
            // For historical dates: calculate from stock history
            // Get all changes before the selected date for this item
            const previousChanges = stockHistory.filter(change => {
                const changeDate = new Date(change.date);
                return change.itemId == itemId && changeDate < dateStart;
            });
            
            // Calculate opening stock from previous changes
            let openingStock = menuItem ? (menuItem.stock || 0) : 0;
            previousChanges.forEach(change => {
                if (change.changeType === 'added') {
                    openingStock -= change.quantity;
                } else if (change.changeType === 'sold') {
                    openingStock += change.quantity;
                } else if (change.changeType === 'adjusted') {
                    openingStock -= change.quantity;
                }
            });
            summary.openingStock = Math.max(0, openingStock);
            summary.closingStock = summary.openingStock + summary.added - summary.sold + summary.adjusted;
        }
    });

    // Generate report HTML
    let reportHTML = `
        <div class="stock-summary-cards">
            <div class="summary-card">
                <h4>${translations[currentLang]['opening-stock']}</h4>
                <div class="summary-value">${Object.values(stockSummary).reduce((sum, s) => sum + s.openingStock, 0)}</div>
            </div>
            <div class="summary-card">
                <h4>${translations[currentLang]['stock-added']}</h4>
                <div class="summary-value positive">+${Object.values(stockSummary).reduce((sum, s) => sum + s.added, 0)}</div>
            </div>
            <div class="summary-card">
                <h4>${translations[currentLang]['stock-sold']}</h4>
                <div class="summary-value negative">-${Object.values(stockSummary).reduce((sum, s) => sum + s.sold, 0)}</div>
            </div>
            <div class="summary-card">
                <h4>${translations[currentLang]['closing-stock']}</h4>
                <div class="summary-value">${Object.values(stockSummary).reduce((sum, s) => sum + s.closingStock, 0)}</div>
            </div>
        </div>
    `;

    if (Object.keys(stockSummary).length > 0) {
        reportHTML += `
            <h3 style="margin: 20px 0 10px 0;">${translations[currentLang]['stock-inventory']}</h3>
            <table class="sales-table stock-table">
                <thead>
                    <tr>
                        <th>${translations[currentLang]['item-name']}</th>
                        <th>${translations[currentLang]['opening']}</th>
                        <th>${translations[currentLang]['added']}</th>
                        <th>${translations[currentLang]['sold']}</th>
                        <th>${translations[currentLang]['adjusted']}</th>
                        <th>${translations[currentLang]['closing']}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        Object.values(stockSummary).forEach(summary => {
            reportHTML += `
                <tr>
                    <td><strong>${summary.itemName}</strong></td>
                    <td>${summary.openingStock}</td>
                    <td class="positive">+${summary.added}</td>
                    <td class="negative">-${summary.sold}</td>
                    <td>${summary.adjusted > 0 ? '+' : ''}${summary.adjusted}</td>
                    <td><strong>${summary.closingStock}</strong></td>
                </tr>
            `;
        });

        reportHTML += `
                </tbody>
            </table>
        `;
    }

    // Add stock movements log
    if (dayStockChanges.length > 0) {
        reportHTML += `
            <h3 style="margin: 30px 0 10px 0;">${translations[currentLang]['stock-movements']}</h3>
            <div class="stock-movements">
        `;

        dayStockChanges.forEach(change => {
            const changeDate = new Date(change.date);
            const typeClass = change.changeType === 'added' ? 'positive' : change.changeType === 'sold' ? 'negative' : 'neutral';
            const typeIcon = change.changeType === 'added' ? 'fa-plus-circle' : change.changeType === 'sold' ? 'fa-minus-circle' : 'fa-edit';
            
            reportHTML += `
                <div class="movement-item ${typeClass}">
                    <div class="movement-icon">
                        <i class="fas ${typeIcon}"></i>
                    </div>
                    <div class="movement-details">
                        <strong>${change.itemName}</strong>
                        <span class="movement-type">${translations[currentLang][`stock-${change.changeType}`]}</span>
                        <span class="movement-quantity">${change.changeType === 'sold' ? '-' : '+'}${change.quantity}</span>
                        <span class="movement-time">${changeDate.toLocaleTimeString(currentLang === 'ta' ? 'ta-IN' : 'en-IN')}</span>
                    </div>
                    <div class="movement-stock">
                        ${change.previousStock} → ${change.newStock}
                    </div>
                </div>
            `;
        });

        reportHTML += `</div>`;
    } else {
        reportHTML += `<p style="text-align: center; padding: 20px; color: #666;">${translations[currentLang]['no-stock-data']}</p>`;
    }

    reportContent.innerHTML = reportHTML;
}

function updateSalesReport() {
    const selectedMonth = document.getElementById('report-month').value;
    const reportContent = document.getElementById('sales-report-content');
    
    if (!selectedMonth) {
        reportContent.innerHTML = `<p>${translations[currentLang]['select-month']}</p>`;
        return;
    }

    // Filter sales for selected month
    const [year, month] = selectedMonth.split('-');
    const monthSales = sales.filter(sale => {
        const saleDate = new Date(sale.date);
        return saleDate.getFullYear() == year && saleDate.getMonth() + 1 == month;
    });

    // Calculate statistics
    const totalSales = monthSales.reduce((sum, sale) => sum + sale.total, 0);
    const totalItems = monthSales.reduce((sum, sale) => 
        sum + sale.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0);
    const totalTransactions = monthSales.length;
    const averageOrder = totalTransactions > 0 ? totalSales / totalTransactions : 0;

    // Generate report HTML
    let reportHTML = `
        <div class="report-summary">
            <div class="report-card">
                <h4>${translations[currentLang]['total-sales']}</h4>
                <div class="value">₹${totalSales.toFixed(2)}</div>
            </div>
            <div class="report-card">
                <h4>${translations[currentLang]['total-transactions']}</h4>
                <div class="value">${totalTransactions}</div>
            </div>
            <div class="report-card">
                <h4>${translations[currentLang]['total-items']}</h4>
                <div class="value">${totalItems}</div>
            </div>
            <div class="report-card">
                <h4>${translations[currentLang]['average-order']}</h4>
                <div class="value">₹${averageOrder.toFixed(2)}</div>
            </div>
        </div>
    `;

    if (monthSales.length > 0) {
        reportHTML += `
            <h3 style="margin: 20px 0 10px 0;">${translations[currentLang]['transaction-details']}</h3>
            <table class="sales-table">
                <thead>
                    <tr>
                        <th>${translations[currentLang]['date']}</th>
                        <th>${translations[currentLang]['items']}</th>
                        <th>${translations[currentLang]['total']}</th>
                    </tr>
                </thead>
                <tbody>
        `;

        monthSales.forEach(sale => {
            const saleDate = new Date(sale.date);
            const itemsList = sale.items.map(item => {
                const itemName = currentLang === 'ta' ? (item.name || item.nameEn) : (item.nameEn || item.name);
                return `${itemName} (${item.quantity})`;
            }).join(', ');
            reportHTML += `
                <tr>
                    <td>${saleDate.toLocaleString(currentLang === 'ta' ? 'ta-IN' : 'en-IN')}</td>
                    <td>${itemsList}</td>
                    <td>₹${sale.total.toFixed(2)}</td>
                </tr>
            `;
        });

        reportHTML += `
                </tbody>
            </table>
        `;
    } else {
        reportHTML += `<p style="text-align: center; padding: 20px; color: #666;">${translations[currentLang]['no-sales']}</p>`;
    }

    reportContent.innerHTML = reportHTML;
}

// Notification function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #667eea;
        color: white;
        padding: 15px 30px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        font-size: 1.1em;
        animation: slideDown 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// Close modals when clicking outside
window.onclick = function(event) {
    const paymentModal = document.getElementById('payment-modal');
    const manageModal = document.getElementById('manage-menu-modal');
    const salesModal = document.getElementById('sales-report-modal');
    const dailyStockModal = document.getElementById('daily-stock-modal');
    
    if (event.target == paymentModal) {
        closePayment();
    }
    if (event.target == manageModal) {
        closeManageMenu();
    }
    if (event.target == salesModal) {
        closeSalesReport();
    }
    if (event.target == dailyStockModal) {
        closeDailyStockReport();
    }
    const qrSettingsModal = document.getElementById('qr-settings-modal');
    if (event.target == qrSettingsModal) {
        closeQRSettings();
    }
}

