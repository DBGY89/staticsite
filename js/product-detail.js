document.addEventListener('DOMContentLoaded', function() {
    // Size button selection
    const sizeButtons = document.querySelectorAll('.size-btn-detail');
    
    sizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Add to cart button
    const addToCartBtn = document.querySelector('.add-to-cart-detail');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const selectedSize = document.querySelector('.size-btn-detail.selected');
            
            if (!selectedSize) {
                const selectSizeMsg = typeof i18n !== 'undefined' ? i18n.t('products.selectSize') : 'Por favor, selecciona una talla';
                showToast(selectSizeMsg, 'error');
                return;
            }

            const productTitle = document.querySelector('.product-title').textContent;
            const productPrice = parseInt(document.querySelector('.product-price-detail').textContent);
            const productImage = document.getElementById('mainImage').src;
            const size = selectedSize.dataset.size;
            
            // Generate product ID from title
            const productId = productTitle.toLowerCase().replace(/\s+/g, '-');
            
            // Add to cart
            Cart.addItem({
                id: productId,
                name: productTitle,
                price: productPrice,
                size: size,
                image: productImage
            });
            
            const sizeLabel = typeof i18n !== 'undefined' ? i18n.t('products.size') : 'Talla';
            const addedMsg = typeof i18n !== 'undefined' ? i18n.t('products.addedToCart') : 'añadido a la cesta!';
            showToast(`¡${productTitle} (${sizeLabel} ${size}) ${addedMsg}`);
        });
    }

    // Update cart badge on load
    if (typeof Cart !== 'undefined') {
        Cart.updateCartBadge();
    }
});

// Change main image when clicking thumbnails
function changeImage(thumbnail) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    mainImage.src = thumbnail.src;
    mainImage.alt = thumbnail.alt;
    
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
}

// Toast notification function (in case cart.js is not loaded)
if (typeof showToast === 'undefined') {
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
}
