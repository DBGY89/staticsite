document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;
    let itemsToShow = getItemsToShow();

    function getItemsToShow() {
        if (window.innerWidth <= 768) {
            return 1;
        } else if (window.innerWidth <= 900) {
            return 2;
        } else {
            return 4;
        }
    }

    function updateCarousel() {
        items.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + itemsToShow) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        if (currentIndex + itemsToShow < items.length) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    }

    window.addEventListener('resize', () => {
        itemsToShow = getItemsToShow();
        if (currentIndex + itemsToShow > items.length) {
            currentIndex = Math.max(0, items.length - itemsToShow);
        }
        updateCarousel();
    });

    // Inicializar el carrusel
    if (items.length > 0) {
        updateCarousel();
    }

    // Scroll suave al armario de Llull desde el CTA
    const ctaArmario = document.getElementById('cta-armario');
    const ctaIntro = document.getElementById('cta-intro');
    
    function scrollToArmario() {
        const armarioSection = document.querySelector('.armario-section');
        if (armarioSection) {
            armarioSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    if (ctaArmario) {
        ctaArmario.addEventListener('click', scrollToArmario);
    }
    if (ctaIntro) {
        ctaIntro.addEventListener('click', scrollToArmario);
    }

    // Product cards - Size selection and Add to Cart
    const productCards = document.querySelectorAll('.product-card[data-product-id]');
    
    productCards.forEach(card => {
        const sizeButtons = card.querySelectorAll('.size-btn');
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        
        // Size button selection
        sizeButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                // Remove selected from all size buttons in this card
                sizeButtons.forEach(b => b.classList.remove('selected'));
                // Add selected to clicked button
                this.classList.add('selected');
            });
        });
        
        // Add to cart
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const selectedSize = card.querySelector('.size-btn.selected');
                
                if (!selectedSize) {
                    const selectSizeMsg = typeof i18n !== 'undefined' ? i18n.t('products.selectSize') : 'Por favor, selecciona una talla';
                    if (typeof showToast === 'function') {
                        showToast(selectSizeMsg, 'error');
                    } else {
                        alert(selectSizeMsg);
                    }
                    return;
                }
                
                const productId = card.dataset.productId;
                const productNameKey = card.dataset.productNameKey;
                const productName = typeof i18n !== 'undefined' && productNameKey ? i18n.t(productNameKey) : card.dataset.productName;
                const productPrice = parseInt(card.dataset.productPrice);
                const productImage = card.dataset.productImage;
                const size = selectedSize.dataset.size;
                
                if (typeof Cart !== 'undefined' && Cart.addItem) {
                    Cart.addItem({
                        id: productId,
                        name: productName,
                        price: productPrice,
                        size: size,
                        image: productImage
                    });
                    
                    if (typeof showToast === 'function') {
                        const sizeLabel = typeof i18n !== 'undefined' ? i18n.t('products.size') : 'Talla';
                        const addedMsg = typeof i18n !== 'undefined' ? i18n.t('products.addedToCart') : 'añadido a la cesta!';
                        showToast('¡' + productName + ' (' + sizeLabel + ' ' + size + ') ' + addedMsg);
                    }
                } else {
                    console.error('Cart no está disponible');
                }
            });
        }
        
        // Make card clickable (except for buttons and size selectors)
        card.addEventListener('click', function(e) {
            // Only navigate if click is not on a button or link
            if (!e.target.closest('.size-btn') && 
                !e.target.closest('.add-to-cart-btn') && 
                !e.target.closest('.product-image-link')) {
                const url = card.dataset.productUrl;
                if (url) {
                    window.location.href = url;
                }
            }
        });
    });
}); 