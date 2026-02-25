// Cart Management System
const Cart = {
    storageKey: 'llulls_cart',

    getCart() {
        const cart = localStorage.getItem(this.storageKey);
        return cart ? JSON.parse(cart) : [];
    },

    saveCart(cart) {
        localStorage.setItem(this.storageKey, JSON.stringify(cart));
        this.updateCartBadge();
    },

    addItem(product) {
        const cart = this.getCart();
        const existingIndex = cart.findIndex(
            item => item.id === product.id && item.size === product.size
        );

        if (existingIndex > -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        this.saveCart(cart);
        return cart;
    },

    removeItem(productId, size) {
        let cart = this.getCart();
        cart = cart.filter(item => !(item.id === productId && item.size === size));
        this.saveCart(cart);
        return cart;
    },

    updateQuantity(productId, size, quantity) {
        const cart = this.getCart();
        const item = cart.find(item => item.id === productId && item.size === size);
        
        if (item) {
            if (quantity <= 0) {
                return this.removeItem(productId, size);
            }
            item.quantity = quantity;
            this.saveCart(cart);
        }
        return cart;
    },

    getTotal() {
        const cart = this.getCart();
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    },

    getItemCount() {
        const cart = this.getCart();
        return cart.reduce((count, item) => count + item.quantity, 0);
    },

    clearCart() {
        localStorage.removeItem(this.storageKey);
        this.updateCartBadge();
    },

    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.getItemCount();
        
        badges.forEach(badge => {
            if (count > 0) {
                badge.textContent = count;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        });
    }
};

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', function() {
    Cart.updateCartBadge();
});

// Show toast notification
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : 'ℹ'}</span>
        <span class="toast-message">${message}</span>
    `;
    
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
