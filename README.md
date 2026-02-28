# Llull's — Ropa para Galgos

Sitio web estático de **Llull's**, tienda de ropa para galgos y otros lebreles. Incluye catálogo de productos, carrito de la compra, checkout y soporte bilingüe (español e inglés).

## Contenido del proyecto

- **Página principal** (`index.html`): presentación, productos y enlace al armario.
- **Productos** (`productos/`): fichas de jersey sin mangas y jersey manga larga con guía de tallas y detalles.
- **Carrito** (`carrito.html`): listado de productos añadidos, cantidades y resumen.
- **Checkout** (`checkout.html`): formulario de datos y resumen del pedido.
- **Confirmación** (`confirmacion.html`): página de agradecimiento tras el pedido.

## Tecnologías

- HTML y CSS (sin frameworks).
- JavaScript para:
  - **i18n** (`js/i18n.js`): cambio de idioma ES/EN y persistencia en `localStorage`.
  - **Carrito** (`js/cart.js`): gestión del carrito en `localStorage`, badge y flujo hasta checkout.
- Build opcional con Node: conversión de Markdown a HTML y generación de la carpeta `dist`.

## Estructura de carpetas

```
├── index.html          # Página principal
├── carrito.html        # Carrito de la compra
├── checkout.html       # Proceso de pago
├── confirmacion.html   # Confirmación de pedido
├── css/
│   ├── style.css       # Estilos principales (header, intro, productos, etc.)
│   └── cart-checkout.css  # Estilos carrito y checkout
├── js/
│   ├── i18n.js         # Traducciones y selector de idioma
│   └── cart.js         # Lógica del carrito
├── img/                # Imágenes (logo, productos, galgos)
├── productos/          # Páginas de detalle de producto
├── content/            # Contenido en Markdown (blog, about, etc.)
├── templates/          # Plantillas HTML para el build
├── build.js            # Script de build (Markdown → HTML)
├── package.json
└── README.md
```

## Cómo ver el sitio

### Opción 1: Abrir directamente

Abre `index.html` en el navegador. El resto de páginas (carrito, checkout, productos) funcionan con rutas relativas.

### Opción 2: Servir con un servidor local

Para evitar problemas de CORS o rutas al probar en local:

```bash
# Instalar dependencias (solo necesario para build/servidor)
npm install

# Servir la carpeta actual (raíz del proyecto)
npx http-server . -p 8080
```

Luego abre `http://localhost:8080` en el navegador.

### Opción 3: Build y servir `dist`

Si quieres usar el build que procesa Markdown y genera `dist`:

```bash
npm install
npm run build    # Genera dist/ (copia estáticos + convierte content/*.md)
npm start        # Sirve dist/ en http://localhost:8080
```

## Scripts npm

| Comando   | Descripción                                      |
|----------|---------------------------------------------------|
| `npm run build` | Limpia `dist`, convierte Markdown de `content/` a HTML y copia `css`, `js`, `img` e `index.html` a `dist`. |
| `npm start`     | Sirve la carpeta `dist` con `http-server` (cache deshabilitada). |
| `npm run dev`   | Ejecuta `build` y luego `start`.                  |

## Idiomas

El selector de idioma (ES | EN) está en la esquina superior izquierda. La preferencia se guarda en `localStorage` y se aplica a todos los textos con atributos `data-i18n` o `data-i18n-aria`.

## Carrito

El carrito se guarda en `localStorage` bajo la clave `llulls_cart`. Incluye:

- Añadir / quitar productos y cambiar cantidades.
- Badge en el icono del carrito con el número de ítems.
- Flujo: lista de productos → carrito → checkout → confirmación.

## Licencia

Proyecto privado. Todos los derechos reservados.
