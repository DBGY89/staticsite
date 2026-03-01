// Internationalization System
const translations = {
    es: {
        // Header
        "cart.label": "Carrito",
        
        // Intro Section
        "intro.title": "Ropa para galgos",
        "intro.subtitle": "Diseñada para galgos. Inspirada por Llull.",
        "intro.cta": "Abrir armario perruno",
        
        // Products Section
        "products.title": "El armario de Llull",
        "products.sleeveless": "Jersey sin mangas",
        "products.longsleeve": "Jersey manga larga",
        "products.addToCart": "Añadir a la cesta",
        "products.viewProduct": "Ver producto",
        "products.selectSize": "Por favor, selecciona una talla",
        "products.addedToCart": "añadido a la cesta!",
        "products.size": "Talla",
        
        // Stories Section
        "stories.title": "Historias felices",
        
        // About Section
        "about.title": "Sobre Llull's",
        "about.text": "En Octubre de 2021 adoptamos a Llull, un galgo de tres años con un corazón enorme... y cuello aún más largo. En la protectora nos dijeron que le gustaban los gatos, y ahí supimos que sería el hermano perfecto para nuestra gata Dottir. Con la llegada del frío, nació una necesidad: encontrar ropa que de verdad abrigara su cuerpo delgado, sin apretar, sin estorbarle, respetando su silueta esbelta y elegante. Como no la encontramos, la creamos. Así nació Llull's.",
        "about.cta": "Abrir armario perruno",
        
        // Product Detail Page
        "detail.features": "Características",
        "detail.materials": "Materiales",
        "detail.care": "Cuidados",
        "detail.selectSize": "Selecciona tu talla",
        "detail.breedFit": "Razas compatibles",
        "detail.breedList": "Galgo español, Galgo inglés (Greyhound), Whippet grande, Lurcher, Podenco, Galgo italiano grande",
        
        // Size Chart
        "size.title": "Guía de tallas",
        "size.howToMeasure": "Cómo medir a tu galgo",
        "size.chest": "Pecho",
        "size.chestDesc": "Mide alrededor del pecho de tu galgo, justo debajo de las patas delanteras. Hazlo ajustado ya que es una prenda elástica que se estirará para adaptarse.",
        "size.length": "Largo",
        "size.lengthDesc": "Mide desde la base del cuello (con la cabeza levantada) hasta el inicio de la cola. Imagina una línea invisible en su trasero y mide hasta ese punto.",
        "size.measureA": "A: medida desde la punta del cuello hasta la punta de la cola.",
        "size.measureB": "B: circunferencia del pecho por el lado que sea más grande.",
        "size.tips": "Consejos de ajuste",
        "size.tip1": "Elige la talla basándote en la medida del pecho de tu galgo.",
        "size.tip2": "Si tu galgo está entre dos tallas, elige la talla superior.",
        "size.tip3": "Los jerseys están diseñados con un ajuste más holgado para permitir el movimiento.",
        "size.tip4Sleeveless": "Las prendas sin mangas son ideales para galgos que no les gustan las mangas o para usar debajo de otras capas.",
        "size.tip4Longsleeve": "Para poner las mangas, sujeta la pata de tu galgo y guíala suavemente por la manga hasta el puño.",
        "size.weight": "Peso aprox.",
        
        // Warmth Factor
        "warmth.title": "Factor de calidez",
        "warmth.light": "Ligero",
        "warmth.soft": "Suave",
        "warmth.medium": "Medio",
        "warmth.warm": "Cálido",
        "warmth.veryWarm": "Muy cálido",
        "warmth.descSleeveless": "Una capa ligera y transpirable para días frescos o protección solar. Perfecta para galgos que no les gustan las mangas o para usar debajo de otras prendas.",
        "warmth.descLongsleeve": "Mayor cobertura para días frescos. Una opción ligera y acogedora perfecta para paseos casuales o para relajarse en casa.",
        
        // Sleeveless Product
        "sleeveless.desc": "Diseñado especialmente para galgos y otros lebreles de pecho profundo. Este jersey sin mangas ofrece la calidez que tu galgo necesita sin restringir el movimiento de sus patas delanteras.",
        "sleeveless.feature1": "Ajuste perfecto:",
        "sleeveless.feature1Desc": "Diseño oversized que se adapta al cuerpo esbelto del galgo",
        "sleeveless.feature2": "Súper elástico:",
        "sleeveless.feature2Desc": "Tejido de algodón con elastano que se estira sin perder forma",
        "sleeveless.feature3": "Cuello apilado:",
        "sleeveless.feature3Desc": "Protege el cuello largo y elegante de tu galgo",
        "sleeveless.feature4": "Un solo agujero frontal:",
        "sleeveless.feature4Desc": "Fácil de poner y quitar",
        "sleeveless.materials": "95% Algodón orgánico, 5% Elastano. Tejido de punto suave y transpirable.",
        "sleeveless.care": "Lavar en frío. Secar al aire. No usar secadora.",
        
        // Longsleeve Product
        "longsleeve.desc": "Mayor cobertura y calidez para los días más frescos. El jersey de manga larga ofrece protección completa para las patas delanteras de tu galgo, ideal para paseos en días fríos o para descansar en casa.",
        "longsleeve.feature1": "Cobertura completa:",
        "longsleeve.feature1Desc": "Mangas largas que protegen las patas delanteras",
        "longsleeve.feature2": "Tejido premium:",
        "longsleeve.feature2Desc": "Algodón orgánico con elastano para máximo confort",
        "longsleeve.feature3": "Diseño ergonómico:",
        "longsleeve.feature3Desc": "Corte especial para el pecho profundo del galgo",
        "longsleeve.feature4": "Fácil de poner:",
        "longsleeve.feature4Desc": "Abertura amplia que facilita vestir a tu galgo",
        "longsleeve.materials": "95% Algodón orgánico, 5% Elastano. French terry de peso medio, suave por dentro.",
        "longsleeve.care": "Lavar en frío. Secar al aire. No usar secadora.",
        
        // Cart Page
        "cart.title": "Tu carrito",
        "cart.empty": "Tu carrito está vacío",
        "cart.emptyDesc": "¡Añade alguna prenda para tu galgo!",
        "cart.viewProducts": "Ver productos",
        "cart.subtotal": "Subtotal",
        "cart.shipping": "Envío",
        "cart.shippingCalc": "Calculado en checkout",
        "cart.total": "Total",
        "cart.checkout": "Proceder al pago",
        "cart.continueShopping": "← Seguir comprando",
        "cart.removeItem": "Producto eliminado del carrito",
        
        // Checkout Page
        "checkout.secure": "Pago seguro",
        "checkout.step1": "Envío",
        "checkout.step2": "Pago",
        "checkout.step3": "Confirmar",
        "checkout.shippingInfo": "Información de envío",
        "checkout.firstName": "Nombre",
        "checkout.lastName": "Apellidos",
        "checkout.email": "Email",
        "checkout.phone": "Teléfono",
        "checkout.address": "Dirección",
        "checkout.addressPlaceholder": "Calle y número",
        "checkout.address2": "Piso, puerta, etc. (opcional)",
        "checkout.address2Placeholder": "Apartamento, piso, etc.",
        "checkout.city": "Ciudad",
        "checkout.postalCode": "Código postal",
        "checkout.province": "Provincia",
        "checkout.selectProvince": "Selecciona provincia",
        "checkout.shippingMethod": "Método de envío",
        "checkout.standard": "Envío estándar",
        "checkout.standardTime": "3-5 días laborables",
        "checkout.express": "Envío express",
        "checkout.expressTime": "1-2 días laborables",
        "checkout.freeShipping": "Envío gratis",
        "checkout.freeShippingMin": "Pedidos +60€",
        "checkout.continueToPayment": "Continuar al pago",
        "checkout.paymentMethod": "Método de pago",
        "checkout.card": "Tarjeta de crédito/débito",
        "checkout.cardNumber": "Número de tarjeta",
        "checkout.cardName": "Nombre en la tarjeta",
        "checkout.cardNamePlaceholder": "Como aparece en la tarjeta",
        "checkout.expiry": "Fecha de expiración",
        "checkout.cvv": "CVV",
        "checkout.redirectInfo": "Serás redirigido a",
        "checkout.redirectEnd": "para completar tu pago de forma segura.",
        "checkout.back": "← Volver",
        "checkout.reviewOrder": "Revisar pedido",
        "checkout.review": "Revisa tu pedido",
        "checkout.shippingAddress": "Dirección de envío",
        "checkout.edit": "Editar",
        "checkout.products": "Productos",
        "checkout.terms": "He leído y acepto los",
        "checkout.termsLink": "términos y condiciones",
        "checkout.privacyLink": "política de privacidad",
        "checkout.and": "y la",
        "checkout.placeOrder": "Confirmar y pagar",
        "checkout.acceptTerms": "Por favor, acepta los términos y condiciones",
        "checkout.processing": "Procesando...",
        "checkout.validCard": "Por favor, introduce un número de tarjeta válido",
        "checkout.validName": "Por favor, introduce el nombre de la tarjeta",
        "checkout.validExpiry": "Por favor, introduce la fecha de expiración",
        "checkout.validCvv": "Por favor, introduce el CVV",
        "checkout.orderSummary": "Resumen del pedido",
        "checkout.free": "Gratis",
        
        // Confirmation Page
        "confirm.thanks": "¡Gracias por tu pedido!",
        "confirm.order": "Pedido",
        "confirm.emailSent": "Hemos enviado un email de confirmación a",
        "confirm.shippingMethod": "Método de envío",
        "confirm.yourOrder": "Tu pedido",
        "confirm.continueShopping": "Seguir comprando",
        "confirm.needHelp": "¿Necesitas ayuda?",
        "confirm.helpText": "Si tienes alguna pregunta sobre tu pedido, no dudes en contactarnos:",
        
        // Language
        "lang.es": "ES",
        "lang.en": "EN"
    },
    
    en: {
        // Header
        "cart.label": "Cart",
        
        // Intro Section
        "intro.title": "Greyhound clothing",
        "intro.subtitle": "Designed for greyhounds. Inspired by Llull.",
        "intro.cta": "Open doggy wardrobe",
        
        // Products Section
        "products.title": "Llull's wardrobe",
        "products.sleeveless": "Sleeveless sweater",
        "products.longsleeve": "Long sleeve sweater",
        "products.addToCart": "Add to cart",
        "products.viewProduct": "View product",
        "products.selectSize": "Please select a size",
        "products.addedToCart": "added to cart!",
        "products.size": "Size",
        
        // Stories Section
        "stories.title": "Happy stories",
        
        // About Section
        "about.title": "About Llull's",
        "about.text": "In October 2021, we adopted Llull, a three-year-old greyhound with a huge heart... and an even longer neck. At the shelter, they told us he liked cats, and that's when we knew he would be the perfect brother for our cat Dottir. With the arrival of cold weather, a need was born: to find clothes that would truly keep his slender body warm, without squeezing, without bothering him, respecting his elegant silhouette. Since we couldn't find it, we created it. That's how Llull's was born.",
        "about.cta": "Open doggy wardrobe",
        
        // Product Detail Page
        "detail.features": "Features",
        "detail.materials": "Materials",
        "detail.care": "Care",
        "detail.selectSize": "Select your size",
        "detail.breedFit": "Compatible breeds",
        "detail.breedList": "Spanish Greyhound, English Greyhound, Large Whippet, Lurcher, Podenco, Large Italian Greyhound",
        
        // Size Chart
        "size.title": "Size guide",
        "size.howToMeasure": "How to measure your greyhound",
        "size.chest": "Chest",
        "size.chestDesc": "Measure around your greyhound's chest, just below the front legs. Do it snugly as this is a stretchy garment that will stretch to fit.",
        "size.length": "Length",
        "size.lengthDesc": "Measure from the base of the neck (with head raised) to the start of the tail. Imagine an invisible line at their backside and measure to that point.",
        "size.measureA": "A: measure from the base of the neck to the tip of the tail.",
        "size.measureB": "B: chest circumference at the widest point.",
        "size.tips": "Fitting tips",
        "size.tip1": "Choose size based on your greyhound's chest measurement.",
        "size.tip2": "If your greyhound is between two sizes, choose the larger size.",
        "size.tip3": "Sweaters are designed with a looser fit to allow movement.",
        "size.tip4Sleeveless": "Sleeveless garments are ideal for greyhounds who don't like sleeves or for wearing under other layers.",
        "size.tip4Longsleeve": "To put on the sleeves, hold your greyhound's paw and gently guide it through the sleeve to the cuff.",
        "size.weight": "Approx. weight",
        
        // Warmth Factor
        "warmth.title": "Warmth factor",
        "warmth.light": "Light",
        "warmth.soft": "Soft",
        "warmth.medium": "Medium",
        "warmth.warm": "Warm",
        "warmth.veryWarm": "Very warm",
        "warmth.descSleeveless": "A light and breathable layer for cool days or sun protection. Perfect for greyhounds who don't like sleeves or for wearing under other garments.",
        "warmth.descLongsleeve": "More coverage for cool days. A cozy, lightweight option perfect for casual walks or relaxing at home.",
        
        // Sleeveless Product
        "sleeveless.desc": "Specially designed for greyhounds and other deep-chested sighthounds. This sleeveless sweater offers the warmth your greyhound needs without restricting front leg movement.",
        "sleeveless.feature1": "Perfect fit:",
        "sleeveless.feature1Desc": "Oversized design that adapts to the greyhound's slender body",
        "sleeveless.feature2": "Super stretchy:",
        "sleeveless.feature2Desc": "Cotton with elastane fabric that stretches without losing shape",
        "sleeveless.feature3": "Stacked neck:",
        "sleeveless.feature3Desc": "Protects your greyhound's long, elegant neck",
        "sleeveless.feature4": "Single front hole:",
        "sleeveless.feature4Desc": "Easy to put on and take off",
        "sleeveless.materials": "95% Organic cotton, 5% Elastane. Soft and breathable knit fabric.",
        "sleeveless.care": "Cold wash. Air dry. Do not tumble dry.",
        
        // Longsleeve Product
        "longsleeve.desc": "More coverage and warmth for cooler days. The long sleeve sweater offers complete protection for your greyhound's front legs, ideal for walks on cold days or resting at home.",
        "longsleeve.feature1": "Full coverage:",
        "longsleeve.feature1Desc": "Long sleeves that protect the front legs",
        "longsleeve.feature2": "Premium fabric:",
        "longsleeve.feature2Desc": "Organic cotton with elastane for maximum comfort",
        "longsleeve.feature3": "Ergonomic design:",
        "longsleeve.feature3Desc": "Special cut for the greyhound's deep chest",
        "longsleeve.feature4": "Easy to put on:",
        "longsleeve.feature4Desc": "Wide opening makes dressing your greyhound easy",
        "longsleeve.materials": "95% Organic cotton, 5% Elastane. Medium weight French terry, soft inside.",
        "longsleeve.care": "Cold wash. Air dry. Do not tumble dry.",
        
        // Cart Page
        "cart.title": "Your cart",
        "cart.empty": "Your cart is empty",
        "cart.emptyDesc": "Add some clothes for your greyhound!",
        "cart.viewProducts": "View products",
        "cart.subtotal": "Subtotal",
        "cart.shipping": "Shipping",
        "cart.shippingCalc": "Calculated at checkout",
        "cart.total": "Total",
        "cart.checkout": "Proceed to checkout",
        "cart.continueShopping": "← Continue shopping",
        "cart.removeItem": "Item removed from cart",
        
        // Checkout Page
        "checkout.secure": "Secure payment",
        "checkout.step1": "Shipping",
        "checkout.step2": "Payment",
        "checkout.step3": "Confirm",
        "checkout.shippingInfo": "Shipping information",
        "checkout.firstName": "First name",
        "checkout.lastName": "Last name",
        "checkout.email": "Email",
        "checkout.phone": "Phone",
        "checkout.address": "Address",
        "checkout.addressPlaceholder": "Street and number",
        "checkout.address2": "Apt, suite, etc. (optional)",
        "checkout.address2Placeholder": "Apartment, floor, etc.",
        "checkout.city": "City",
        "checkout.postalCode": "Postal code",
        "checkout.province": "Province/State",
        "checkout.selectProvince": "Select province",
        "checkout.shippingMethod": "Shipping method",
        "checkout.standard": "Standard shipping",
        "checkout.standardTime": "3-5 business days",
        "checkout.express": "Express shipping",
        "checkout.expressTime": "1-2 business days",
        "checkout.freeShipping": "Free shipping",
        "checkout.freeShippingMin": "Orders over €60",
        "checkout.continueToPayment": "Continue to payment",
        "checkout.paymentMethod": "Payment method",
        "checkout.card": "Credit/debit card",
        "checkout.cardNumber": "Card number",
        "checkout.cardName": "Name on card",
        "checkout.cardNamePlaceholder": "As it appears on the card",
        "checkout.expiry": "Expiry date",
        "checkout.cvv": "CVV",
        "checkout.redirectInfo": "You will be redirected to",
        "checkout.redirectEnd": "to complete your payment securely.",
        "checkout.back": "← Back",
        "checkout.reviewOrder": "Review order",
        "checkout.review": "Review your order",
        "checkout.shippingAddress": "Shipping address",
        "checkout.edit": "Edit",
        "checkout.products": "Products",
        "checkout.terms": "I have read and accept the",
        "checkout.termsLink": "terms and conditions",
        "checkout.privacyLink": "privacy policy",
        "checkout.and": "and the",
        "checkout.placeOrder": "Confirm and pay",
        "checkout.acceptTerms": "Please accept the terms and conditions",
        "checkout.processing": "Processing...",
        "checkout.validCard": "Please enter a valid card number",
        "checkout.validName": "Please enter the name on the card",
        "checkout.validExpiry": "Please enter the expiry date",
        "checkout.validCvv": "Please enter the CVV",
        "checkout.orderSummary": "Order summary",
        "checkout.free": "Free",
        
        // Confirmation Page
        "confirm.thanks": "Thank you for your order!",
        "confirm.order": "Order",
        "confirm.emailSent": "We have sent a confirmation email to",
        "confirm.shippingMethod": "Shipping method",
        "confirm.yourOrder": "Your order",
        "confirm.continueShopping": "Continue shopping",
        "confirm.needHelp": "Need help?",
        "confirm.helpText": "If you have any questions about your order, don't hesitate to contact us:",
        
        // Language
        "lang.es": "ES",
        "lang.en": "EN"
    }
};

// i18n System
const i18n = {
    currentLang: 'es',
    storageKey: 'llulls_language',

    init() {
        // Get saved language or detect from browser
        const savedLang = localStorage.getItem(this.storageKey);
        if (savedLang && translations[savedLang]) {
            this.currentLang = savedLang;
        } else {
            // Detect browser language
            const browserLang = navigator.language || navigator.userLanguage;
            const langCode = browserLang.split('-')[0].toLowerCase();
            this.currentLang = translations[langCode] ? langCode : 'es';
        }
        
        this.applyTranslations();
        this.updateLanguageSelector();
    },

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem(this.storageKey, lang);
            this.applyTranslations();
            this.updateLanguageSelector();
            
            // Update HTML lang attribute
            document.documentElement.lang = lang;
        }
    },

    t(key) {
        return translations[this.currentLang][key] || translations['es'][key] || key;
    },

    applyTranslations() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.placeholder) {
                    el.placeholder = translation;
                }
            } else {
                el.textContent = translation;
            }
        });

        // Update elements with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Update elements with data-i18n-aria
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            el.setAttribute('aria-label', this.t(key));
        });

        // Update page title if data attribute exists
        const titleKey = document.body.getAttribute('data-i18n-title');
        if (titleKey) {
            document.title = this.t(titleKey) + " - Llull's";
        }

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    },

    updateLanguageSelector() {
        const selectors = document.querySelectorAll('.lang-selector');
        selectors.forEach(selector => {
            const buttons = selector.querySelectorAll('.lang-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.lang === this.currentLang) {
                    btn.classList.add('active');
                }
            });
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    i18n.init();
    
    // Setup language selector clicks
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            i18n.setLanguage(this.dataset.lang);
        });
    });
});
