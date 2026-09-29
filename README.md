# Construcciones MARS, C.A.

Web corporativa en español con Angular 22.2, TypeScript 6, SCSS, componentes standalone, rutas diferidas y prerenderizado estático para Firebase Hosting.

## Inicio

Requiere Node.js compatible con Angular 22 (verificado con Node 24.18.0) y npm.

```sh
npm install
npm start
```

Desarrollo: http://localhost:4200.

```sh
npm run build
npm test
npm run preview
```

La compilación genera siete páginas HTML en `dist/mars/browser`. La vista previa de producción está en http://127.0.0.1:4173.

```sh
npm run test:e2e
npm run audit
npm run format:check
```

Las pruebas E2E utilizan Chrome instalado (`channel: chrome`). El informe Lighthouse se guarda en `artifacts/`. Las capturas E2E se guardan en esa misma carpeta. Estos artefactos se excluyen del control de versiones.

Resultados y limitaciones de la entrega: [verificación](docs/validation.md).

## Estado del contenido

El repositorio estaba vacío en la primera entrega. Posteriormente se incorporaron 45 imágenes en `src/assets/images/mars/img/`, ahora revisadas e integradas mediante 61 derivados WebP. La Home utiliza las fotografías facilitadas, el logo extraído de la portada, el mapa y nueve logotipos de alianzas. Los originales se conservan y se excluyen de la compilación de producción.

Los textos proceden del briefing y requieren cotejo con el brochure completo antes de publicar. El array de proyectos sigue vacío al no disponer de nombres y alcances documentados. No se ha recreado el logo ni añadido fotografías externas.

El formulario valida los datos y permite preparar/copiar una consulta localmente. No envía, persiste ni registra información personal; no existe un backend ni se muestra un éxito de envío ficticio. Antes de habilitar envío, integrar el canal corporativo autorizado y la información de privacidad correspondiente.

## Estructura

- `src/app/core/layout`: cabecera sticky, menú móvil y pie de página.
- `src/app/core/data`: modelos, contenido, metadatos y catálogo de imágenes.
- `src/app/core/seo`: title, description, canonical, Open Graph, Twitter y Organization JSON-LD.
- `src/app/shared/ui`: botones, títulos, imágenes, tarjetas, cifras, CTA, cabeceras interiores y animación de entrada.
- `src/app/pages/home`: Home compuesta por hero, capacidades, especialidades y presencia.
- `src/app/pages/*`: Nosotros, Servicios, Gerencia de proyectos, Gestión ISO, Proyectos, Contacto y 404.
- `src/styles.scss`: tokens de diseño, rejillas, geometría industrial y responsive.
- `src/assets/images/mars`: estructura para los assets oficiales.
- `scripts`: vista previa estática, generación de robots/sitemap y auditoría.
- `e2e`: pruebas responsive, accesibilidad, contacto y capturas.
- `firebase.json`: hosting estático, cabeceras y caché.

## Configuración y publicación

1. Cotejar el contenido de `src/app/core/data/site.ts` con el brochure.
2. Revisar la selección de imágenes según [el inventario](docs/assets.md). Para regenerar derivados: `npm run assets:optimize` (requiere `cwebp`).
3. Definir `site.origin` en `site.ts` con el dominio real HTTPS, sin ruta ni barra final. Los canonical, Open Graph y sitemap lo reutilizan. Con el campo vacío se conserva `noindex, nofollow` y `robots.txt` bloquea indexación. El sitemap queda vacío para no inventar URLs.
4. Completar teléfono y correo oficiales. Logo, favicon e imagen social ya están configurados. La versión del footer utiliza el logo original sobre blanco.
5. Completar proyectos con documentación validada. Los nueve logos de alianzas disponibles ya están integrados, siempre como alianzas.
6. Ejecutar build, tests, E2E y Lighthouse de nuevo con los assets finales.
7. Seleccionar el proyecto de Firebase del propietario y desplegar con `firebase deploy --only hosting --project ID_REAL` cuando proceda. No se ha creado ningún proyecto remoto ni desplegado la web.

El sitio no necesita un servidor Node en producción. Firebase sirve el HTML prerenderizado y la página `404.html`; no se utiliza una reescritura general que convierta direcciones inexistentes en respuestas 200.

## Diseño y alcance

Paleta provisional del briefing: naranja #F15A24, antracita #101216/#191B20, blanco y gris claro. El texto naranja pequeño utiliza #B5360A sobre blanco para mejorar contraste. El naranja brillante se reserva para acentos, números sobre oscuro y botones con texto oscuro. Fuentes del sistema: no hay solicitudes a proveedores externos.

Se consultó https://www.realterretaia.com como referencia de organización: navegación por áreas, hero con dos acciones, tarjetas de servicios y CTA final. No se copiaron su código, contenidos ni identidad visual.

El objetivo de Lighthouse debe volver a medirse con las imágenes integradas y el dominio definitivo. La vista previa tiene bloqueo de indexación intencional y no representa la evaluación SEO de un sitio publicado.

En este Mac, Sass requiere ejecutar build y tests fuera del sandbox de Codex por una restricción del runtime nativo al consultar la CPU. No se modificó el compilador ni se deshabilitaron sus verificaciones.
# marsTerreta
# marsTerreta
