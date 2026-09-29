# Assets integrados en MARS

Se revisaron visualmente los 45 PNG de `src/assets/images/mars/img/` mediante hojas de contacto y ampliaciones de logotipos. Los originales se conservan intactos. La compilación los excluye para evitar publicar 128 MB; utiliza derivados WebP con nombres semánticos.

## Selección para la web

| Uso           | Original                    | Derivado                                                |
| ------------- | --------------------------- | ------------------------------------------------------- |
| hero          | `mars_p03_04_1448x1086.png` | `hero/mars-construccion-industrial-<ancho>.webp`        |
| empresa       | `mars_p05_11_1122x1402.png` | `empresa/mars-oficina-<ancho>.webp`                     |
| equipo        | `mars_p06_14_1448x1086.png` | `empresa/mars-equipo-industrial-<ancho>.webp`           |
| industriales  | `mars_p04_06_1448x1086.png` | `servicios/mars-estructura-industrial-<ancho>.webp`     |
| gerencia      | `mars_p06_13_1200x1200.png` | `servicios/mars-gerencia-planos-<ancho>.webp`           |
| iso           | `mars_p07_16_1269x1240.png` | `iso/mars-equipo-planificacion-<ancho>.webp`            |
| logistica     | `mars_p07_19_1448x1086.png` | `logistica/mars-flota-equipos-<ancho>.webp`             |
| metalmecanica | `mars_p04_09_1537x1023.png` | `metalmecanica/mars-soldadura-industrial-<ancho>.webp`  |
| capacitacion  | `mars_p06_14_1448x1086.png` | `iso/mars-equipo-tecnico-<ancho>.webp`                  |
| soldadura     | `mars_p08_20_1448x1086.png` | `metalmecanica/mars-soldadura-tuberia-<ancho>.webp`     |
| construccion  | `mars_p10_30_1379x1141.png` | `servicios/mars-obra-civil-<ancho>.webp`                |
| ingenieria    | `mars_p10_32_1672x941.png`  | `servicios/mars-instalacion-tuberias-<ancho>.webp`      |
| transporte    | `mars_p10_34_1448x1086.png` | `logistica/mars-transporte-estructura-<ancho>.webp`     |
| estructuras   | `mars_p08_21_1550x1014.png` | `metalmecanica/mars-estructuras-metalicas-<ancho>.webp` |
| inspeccion    | `mars_p10_33_1086x1448.png` | `iso/mars-inspeccion-industrial-<ancho>.webp`           |
| cierre        | `mars_p04_08_1535x1024.png` | `hero/mars-tanques-industriales-<ancho>.webp`           |

La Home utiliza fotografías en el hero, introducción, seis tarjetas de servicios, gerencia, capacitación, metalmecánica, soluciones integrales y CTA final. Los componentes compartidos también actualizan las páginas interiores. Los textos ALT describen lo visible, sin atribuir ubicaciones, clientes ni proyectos no documentados.

## Identidad y alianzas

El logotipo se extrae directamente de `mars_p01_03_1537x1023.png`, sin reconstruir letras ni alterar sus colores. El footer lo presenta sobre un soporte blanco porque no se ha proporcionado una versión oficial invertida. El favicon se extrae del símbolo de esa misma portada; la imagen social conserva la composición de portada.

El mapa usa la silueta de `mars_p09_28_309x244.png`; los puntos siguen siendo orientativos.

Los nueve logotipos de la página 11 se presentan como alianzas estratégicas, conforme a la clasificación del briefing:

- Engineering Maintenance Solutions Inc. (EMSOL): `mars_p11_37_1024x559.png`.
- Dunlop: `mars_p11_38_1280x285.png`.
- Geoconsult, C.A.: `mars_p11_39_1455x1081.png`.
- OPLANCO, C.A.: `mars_p11_40_2172x724.png`.
- Inteligencia Corporativa, C.A.: `mars_p11_41_1962x801.png`.
- Molecular de Occidente, C.A.: `mars_p11_42_1983x793.png`.
- RTR PROY — Proyectos + Construcción: `mars_p11_43_1536x1024.png`.
- PolySpec / Thiokol: `mars_p11_44_1774x887.png`.
- Importaciones RML: `mars_p11_45_1774x887.png`.

Se preserva el aspecto de los logos, incluidos los efectos y fondos presentes en los originales. Su inclusión no implica que las empresas sean clientes o entidades certificadoras de MARS.

## Generación y mantenimiento

```sh
npm run assets:optimize
```

Requiere `cwebp`, disponible en el entorno utilizado. Los 61 derivados generados ocupan aproximadamente 5,28 MB en total, incluidas todas las resoluciones y logos. Los WebP quedan en el repositorio: `npm install` y `npm run build` no necesitan ejecutar el optimizador.

- `scripts/assets-manifest.json`: origen, destino, recorte, resoluciones y asignación visual.
- `scripts/optimize-assets.mjs`: generación reproducible mediante cwebp.
- `src/app/core/data/assets.ts`: catálogo para Angular, ALT, dimensiones y encuadres.
- `src/app/core/data/site.ts`: logo, imagen social y alianzas.

Las fotografías tienen variantes entre 480 y 1535 px según el original, `srcset`, `sizes`, dimensiones explícitas y carga diferida. Solo el hero tiene carga prioritaria. Los logos se exportan sin pérdida y preservan su transparencia. Los PNG no seleccionados, imágenes repetidas y elementos decorativos se conservan como material de reserva.

Los nombres y resultados de proyectos siguen pendientes de documentación; no se han creado fichas de proyectos a partir de fotografías sin contexto.
