// Function to load and convert Markdown content
async function loadMarkdownContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to load content');
        const markdown = await response.text();
        return marked.parse(markdown);
    } catch (error) {
        console.error('Error loading content:', error);
        return '<p>Error loading content. Please try again later.</p>';
    }
}

// Function to update page content
async function updateContent() {
    const contentSection = document.querySelector('.content');
    if (!contentSection) return;

    // Get the current page name from the URL
    const page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    
    // Skip loading markdown content for index page
    if (page === 'index') return;
    
    // Load the appropriate markdown file
    const markdownUrl = `content/${page}.md`;
    const htmlContent = await loadMarkdownContent(markdownUrl);
    contentSection.innerHTML = htmlContent;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', updateContent);

// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            if (index >= currentIndex && index < currentIndex + 4) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        if (currentIndex + 4 < items.length) {
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

    // Initialize the carousel
    updateCarousel();

    // --- PRODUCT CARD FUNCTIONALITY ---
    document.querySelectorAll('.product-card').forEach(card => {
        const sizeButtons = card.querySelectorAll('.size-btn');
        let selectedSize = null;

        sizeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedSize = btn.dataset.size;
            });
        });

        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', () => {
            const productName = card.querySelector('.product-info-row h3').textContent;
            if (!selectedSize) {
                alert('Por favor, selecciona una talla antes de añadir al carrito.');
                return;
            }
            alert(`Producto: ${productName}\nTalla: ${selectedSize}\nAñadido al carrito.`);
        });
    });
}); 