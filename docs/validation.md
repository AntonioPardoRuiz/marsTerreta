# Verificación de la entrega

Verificado el 28 de septiembre de 2026 en macOS, Node.js 24.18.0 y Chrome instalado.

| Comprobación          | Resultado                                                                                                        |
| --------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `npm install`         | Correcto, dependencias y lockfile generados                                                                      |
| `npm run build`       | Correcto, 7 rutas prerenderizadas                                                                                |
| Bundle inicial        | 320,27 kB; transferencia estimada por Angular: 87,85 kB                                                          |
| `npm test`            | 6 archivos de pruebas, 10 pruebas aprobadas                                                                      |
| `npm run test:e2e`    | 4 pruebas aprobadas en la última ejecución completa                                                              |
| Responsive            | 7 páginas × 7 anchuras, sin desbordamiento horizontal                                                            |
| Accesibilidad con axe | Sin infracciones detectadas en 7 páginas a 375 y 1440 px, con las reglas WCAG A/AA configuradas en esa ejecución |
| Contacto              | Validación y preparación local verificadas; no existe envío remoto                                               |
| HTML estático         | Un H1, idioma español y descripción por página                                                                   |
| Prettier              | Formato uniforme comprobado                                                                                      |

Las anchuras comprobadas son 320, 375, 430, 768, 1024, 1440 y 1920 px. La prueba de navegador también comprueba ausencia de errores JavaScript no capturados, navegación móvil y estado del formulario. La revisión automatizada no sustituye una auditoría manual completa de accesibilidad.

## Integración de imágenes

Se integraron los assets de `src/assets/images/mars/img/`: fotografías, logo extraído de portada, favicon, imagen social, mapa y nueve logos de alianzas. Se generaron 61 WebP (5,28 MB con todas sus variantes). Los PNG originales se conservan, pero no se copian a producción.

Build, 10 pruebas unitarias y 4 pruebas E2E pasan con estas imágenes. Las capturas comprueban la decodificación de todas las imágenes y la ausencia de gráficos provisionales en la Home. Se revisaron visualmente el hero de escritorio y móvil y la composición completa.

## Lighthouse (medición histórica, anterior a las imágenes)

Última medición válida disponible de la Home, con perfil móvil simulado y antes de las últimas correcciones:

| Categoría        | Puntuación |
| ---------------- | ---------- |
| Rendimiento      | 76         |
| Accesibilidad    | 100        |
| Buenas prácticas | 96         |
| SEO              | 63         |

Estos resultados **no alcanzan todavía todos los objetivos del briefing**. El informe original está en `artifacts/lighthouse.html` y `artifacts/lighthouse.json`.

Después de esta medición se corrigieron el nombre accesible de la marca y la solicitud de un favicon inexistente. La vista previa incorporó compresión gzip y cabeceras de caché para aproximar la entrega de hosting. La compilación posterior pasó. La repetición de Lighthouse fue denegada por el usuario; no se asignan puntuaciones a esos cambios sin medirlos.

El SEO está condicionado por `noindex, nofollow` y el bloqueo de robots de la vista previa sin dominio real. No se ha desactivado este bloqueo para mejorar una puntuación. Las fotografías ya están integradas. No se ha repetido Lighthouse en esta actualización; las puntuaciones anteriores no representan el rendimiento de esta versión.

Las cuatro pruebas E2E, las diez unitarias y el build se han ejecutado sobre la versión con imágenes integradas.

## Archivos creados

El repositorio original estaba vacío: todos los archivos del proyecto son nuevos.

- Configuración: `package.json`, `package-lock.json`, `angular.json`, `tsconfig*.json`, `firebase.json`, `.gitignore` y `.prettierrc.json`.
- Entrada y estilos: `src/index.html`, `src/main.ts`, `src/main.server.ts`, `src/styles.scss`.
- Aplicación: `src/app/app.ts`, `src/app/app.routes.ts`, layout, SEO, datos tipados y catálogo de imágenes en `src/app/core/`.
- Interfaz compartida: botones, títulos, imágenes, tarjetas, CTA, cifras, cabeceras interiores y animaciones en `src/app/shared/ui/`.
- Páginas: Home modular, Nosotros, Servicios, Gerencia de proyectos, Gestión ISO, Proyectos, Contacto y 404 en `src/app/pages/`.
- Assets: originales en `src/assets/images/mars/img/` y derivados optimizados en las carpetas semánticas.
- Pruebas: seis archivos `*.spec.ts` de Angular y `e2e/site.spec.ts`, con `playwright.config.ts`.
- Herramientas: `scripts/seo-assets.mjs`, `scripts/serve-preview.mjs`, `scripts/audit.mjs`.
- Documentación: `README.md`, `docs/assets.md`, este documento.

## Pendientes externos

Brochure completo para cotejar los textos, proyectos documentados, dominio definitivo y canales corporativos de contacto. Los assets gráficos facilitados ya están integrados. No se ha desplegado a Firebase ni conectado un formulario a servicios externos.
