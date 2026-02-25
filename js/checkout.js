// Checkout functionality
let currentStep = 1;
let checkoutData = {
    shipping: {},
    shippingMethod: 'standard',
    shippingCost: 4.95,
    paymentMethod: 'card',
    card: {}
};

document.addEventListener('DOMContentLoaded', function() {
    // Check if cart is empty
    const cart = Cart.getCart();
    if (cart.length === 0) {
        window.location.href = 'carrito.html';
        return;
    }

    renderOrderSummary();
    setupFormListeners();
    setupPaymentMethodListeners();
    setupCardFormatting();
    updateTotals();
    checkFreeShipping();
});

function renderOrderSummary() {
    const cart = Cart.getCart();
    const summaryItems = document.getElementById('summaryItems');
    
    let html = '';
    cart.forEach(item => {
        html += `
            <div class="summary-item">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                    <span class="item-qty">${item.quantity}</span>
                </div>
                <div class="item-details">
                    <span class="item-name">${item.name}</span>
                    <span class="item-size">Talla: ${item.size}</span>
                </div>
                <span class="item-price">${item.price * item.quantity}€</span>
            </div>
        `;
    });
    
    summaryItems.innerHTML = html;
}

function setupFormListeners() {
    // Shipping form
    const shippingForm = document.getElementById('shippingForm');
    shippingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect shipping data
        checkoutData.shipping = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            address2: document.getElementById('address2').value,
            city: document.getElementById('city').value,
            postalCode: document.getElementById('postalCode').value,
            province: document.getElementById('province').value
        };

        // Get shipping method
        const selectedShipping = document.querySelector('input[name="shipping"]:checked');
        checkoutData.shippingMethod = selectedShipping.value;
        checkoutData.shippingCost = parseFloat(selectedShipping.dataset.price);

        goToStep(2);
    });

    // Shipping method change
    document.querySelectorAll('input[name="shipping"]').forEach(radio => {
        radio.addEventListener('change', function() {
            checkoutData.shippingCost = parseFloat(this.dataset.price);
            updateTotals();
        });
    });
}

function setupPaymentMethodListeners() {
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const cardForm = document.getElementById('cardForm');
    const altPaymentInfo = document.getElementById('altPaymentInfo');
    const paymentProviderName = document.getElementById('paymentProviderName');

    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            checkoutData.paymentMethod = this.value;
            
            if (this.value === 'card') {
                cardForm.style.display = 'block';
                altPaymentInfo.style.display = 'none';
            } else {
                cardForm.style.display = 'none';
                altPaymentInfo.style.display = 'block';
                
                const providerNames = {
                    'paypal': 'PayPal',
                    'googlepay': 'Google Pay',
                    'applepay': 'Apple Pay'
                };
                paymentProviderName.textContent = providerNames[this.value];
            }
        });
    });
}

function setupCardFormatting() {
    // Card number formatting
    const cardNumber = document.getElementById('cardNumber');
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        e.target.value = formattedValue;

        // Detect card type
        const cardTypeIcon = document.getElementById('cardTypeIcon');
        if (value.startsWith('4')) {
            cardTypeIcon.innerHTML = '<span style="color:#1A1F71;font-weight:bold;">VISA</span>';
        } else if (value.startsWith('5') || value.startsWith('2')) {
            cardTypeIcon.innerHTML = '<span style="color:#EB001B;font-weight:bold;">MC</span>';
        } else {
            cardTypeIcon.innerHTML = '';
        }
    });

    // Expiry date formatting
    const expiry = document.getElementById('expiry');
    expiry.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.slice(0, 2) + '/' + value.slice(2, 4);
        }
        e.target.value = value;
    });

    // CVV - numbers only
    const cvv = document.getElementById('cvv');
    cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '');
    });
}

function checkFreeShipping() {
    const subtotal = Cart.getTotal();
    const freeShippingOption = document.getElementById('freeShipping');
    
    if (subtotal >= 60) {
        freeShippingOption.disabled = false;
        freeShippingOption.checked = true;
        checkoutData.shippingCost = 0;
        updateTotals();
    }
}

function updateTotals() {
    const subtotal = Cart.getTotal();
    const shipping = checkoutData.shippingCost;
    const total = subtotal + shipping;

    document.getElementById('checkoutSubtotal').textContent = subtotal + '€';
    document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'Gratis' : shipping.toFixed(2).replace('.', ',') + '€';
    document.getElementById('checkoutTotal').textContent = total.toFixed(2).replace('.', ',') + '€';
    
    const finalAmount = document.getElementById('finalAmount');
    if (finalAmount) {
        finalAmount.textContent = total.toFixed(2).replace('.', ',') + '€';
    }
}

function goToStep(step) {
    // Validate before moving to next step
    if (step > currentStep) {
        if (currentStep === 2 && checkoutData.paymentMethod === 'card') {
            // Validate card form
            const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
            const cardName = document.getElementById('cardName').value;
            const expiry = document.getElementById('expiry').value;
            const cvv = document.getElementById('cvv').value;

            if (!cardNumber || cardNumber.length < 15) {
                showToast('Por favor, introduce un número de tarjeta válido', 'error');
                return;
            }
            if (!cardName) {
                showToast('Por favor, introduce el nombre de la tarjeta', 'error');
                return;
            }
            if (!expiry || expiry.length < 5) {
                showToast('Por favor, introduce la fecha de expiración', 'error');
                return;
            }
            if (!cvv || cvv.length < 3) {
                showToast('Por favor, introduce el CVV', 'error');
                return;
            }

            checkoutData.card = {
                number: cardNumber,
                name: cardName,
                expiry: expiry,
                cvv: cvv
            };
        }
    }

    // Update step
    currentStep = step;

    // Update progress bar
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        el.classList.remove('active', 'completed');
        if (index + 1 < step) {
            el.classList.add('completed');
        } else if (index + 1 === step) {
            el.classList.add('active');
        }
    });

    // Show current step
    document.querySelectorAll('.checkout-step').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById(`step${step}`).classList.add('active');

    // If going to review step, populate review data
    if (step === 3) {
        populateReview();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateReview() {
    // Shipping review
    const shipping = checkoutData.shipping;
    const shippingMethods = {
        'standard': 'Envío estándar (3-5 días)',
        'express': 'Envío express (1-2 días)',
        'free': 'Envío gratis (3-5 días)'
    };
    
    document.getElementById('reviewShipping').innerHTML = `
        <p><strong>${shipping.firstName} ${shipping.lastName}</strong></p>
        <p>${shipping.address}${shipping.address2 ? ', ' + shipping.address2 : ''}</p>
        <p>${shipping.postalCode} ${shipping.city}</p>
        <p>${shipping.phone}</p>
        <p>${shipping.email}</p>
        <p class="shipping-method">${shippingMethods[checkoutData.shippingMethod]}</p>
    `;

    // Payment review
    const paymentMethods = {
        'card': `Tarjeta terminada en ${checkoutData.card.number?.slice(-4) || '****'}`,
        'paypal': 'PayPal',
        'googlepay': 'Google Pay',
        'applepay': 'Apple Pay'
    };
    
    document.getElementById('reviewPayment').innerHTML = `
        <p>${paymentMethods[checkoutData.paymentMethod]}</p>
    `;

    // Products review
    const cart = Cart.getCart();
    let productsHtml = '';
    cart.forEach(item => {
        productsHtml += `
            <div class="review-product">
                <img src="${item.image}" alt="${item.name}">
                <div class="product-details">
                    <span class="product-name">${item.name}</span>
                    <span class="product-variant">Talla: ${item.size} × ${item.quantity}</span>
                </div>
                <span class="product-price">${item.price * item.quantity}€</span>
            </div>
        `;
    });
    document.getElementById('reviewProducts').innerHTML = productsHtml;

    updateTotals();
}

function placeOrder() {
    const acceptTerms = document.getElementById('acceptTerms');
    
    if (!acceptTerms.checked) {
        showToast('Por favor, acepta los términos y condiciones', 'error');
        return;
    }

    // Show loading state
    const placeOrderBtn = document.querySelector('.place-order-btn');
    const originalContent = placeOrderBtn.innerHTML;
    placeOrderBtn.innerHTML = '<span class="loading-spinner"></span> Procesando...';
    placeOrderBtn.disabled = true;

    // Simulate payment processing
    setTimeout(() => {
        // Generate order number
        const orderNumber = 'LL-' + Date.now().toString().slice(-8);
        
        // Store order details for confirmation page
        const orderDetails = {
            orderNumber: orderNumber,
            date: new Date().toLocaleDateString('es-ES'),
            shipping: checkoutData.shipping,
            shippingMethod: checkoutData.shippingMethod,
            shippingCost: checkoutData.shippingCost,
            paymentMethod: checkoutData.paymentMethod,
            items: Cart.getCart(),
            subtotal: Cart.getTotal(),
            total: Cart.getTotal() + checkoutData.shippingCost
        };
        
        localStorage.setItem('llulls_last_order', JSON.stringify(orderDetails));
        
        // Clear cart
        Cart.clearCart();
        
        // Redirect to confirmation
        window.location.href = 'confirmacion.html';
    }, 2000);
}
