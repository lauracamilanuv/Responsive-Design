# Portafolio Responsivo — Curso de Responsive Design (Platzi -2026)

Proyecto práctico del curso **Diseño Web Responsivo** de [Platzi](https://platzi.com/cursos/mobile-first/). Consiste en maquetar un portafolio personal ficticio [Flora Sheen, Frontend Developer](https://www.figma.com/design/zPMCnnlPAZNlis5Wcb3J7Z/Illustration-Based-Portfolio-Website-Template--Community-?node-id=410-1471&t=C7POIbkIZWYcm1gQ-1) aplicando los fundamentos de diseño responsivo con HTML, CSS y JavaScript mínimo.

## Objetivo del curso

Aprender a construir interfaces que se adapten correctamente a cualquier tamaño de pantalla, sin frameworks CSS, partiendo de un diseño en Figma.

## Estructura del proyecto

```
├── index.html         # Documento principal
├── css/
│   ├── reset.css      # Normalización de estilos del navegador
│   ├── variables.css  # Custom properties (colores, tipografía, espaciado)
│   └── global.css     # Estilos de todos los componentes y secciones
├── js/
│   └── main.js        # Toggle del menú hamburguesa en mobile
└── assets/            # Imágenes, íconos y SVGs
```

## Secciones del portfolio

| Sección | Descripción |
|---------|-------------|
| Header | Navegación con menú hamburguesa en mobile |
| Hero | Presentación principal con foto y redes sociales |
| Skills | Grid de tecnologías (TypeScript, React, Next.js, etc.) |
| Experience | Historial laboral con tarjetas (Google, YouTube, Apple) |
| About Me | Texto descriptivo con imagen lateral |
| Projects | Listado de proyectos con imágenes responsivas (`<picture>`) |
| Testimonials | Tarjetas de testimonios con avatares |
| Contact | Formulario de contacto + datos de contacto |
| Footer | Logo y copyright |

## Conceptos practicados

- **CSS Custom Properties** para sistema de tokens (colores, fuentes, espaciado)
- **Flexbox y CSS Grid** para layouts de secciones
- **Media queries** para adaptar el layout a mobile, tablet y desktop
- **`<picture>` + `srcset`** para imágenes responsivas y optimizadas (WebP con fallback JPG)
- **`fetchpriority`, `loading="lazy"`** para optimización de carga
- **Accesibilidad básica**: `aria-label`, `aria-expanded`, roles semánticos
- **Toggle menu** en mobile con JavaScript puro

## Tecnologías

- HTML5 semántico
- CSS3 (sin frameworks)
- JavaScript vanilla
- Google Fonts (Sora)
