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

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    window.addEventListener('resize', () => {
        itemsToShow = getItemsToShow();
        if (currentIndex + itemsToShow > items.length) {
            currentIndex = Math.max(0, items.length - itemsToShow);
        }
        updateCarousel();
    });

    // Inicializar el carrusel
    updateCarousel();

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
}); 