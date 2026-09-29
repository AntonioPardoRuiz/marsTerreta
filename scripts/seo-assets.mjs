import { mkdir, writeFile, readFile } from 'node:fs/promises';
const target = 'dist/mars/browser';
const config = await readFile('src/app/core/data/site.ts', 'utf8');
const origin = (config.match(/origin: '([^']*)'/)?.[1] ?? '').replace(/\/$/, '');
if (origin && !/^https:\/\/[a-z0-9.-]+(?::[0-9]+)?$/i.test(origin))
  throw new Error('site.origin debe ser un origen HTTPS sin ruta.');
const routes = [
  '/',
  '/nosotros',
  '/servicios',
  '/gerencia-proyectos',
  '/gestion-iso',
  '/proyectos',
  '/contacto',
];
await mkdir(target, { recursive: true });
await writeFile(
  `${target}/robots.txt`,
  origin
    ? `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n',
);
await writeFile(
  `${target}/sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${origin ? routes.map((path) => `<url><loc>${origin}${path}</loc></url>`).join('') : ''}</urlset>\n`,
);
console.log(
  origin
    ? `SEO generado para ${origin}`
    : 'Vista previa: indexación desactivada; configura site.origin antes de publicar.',
);

await writeFile(
  `${target}/404.html`,
  '<!doctype html><html lang="es"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Página no encontrada | MARS</title><style>body{font:18px/1.6 Arial,sans-serif;background:#101216;color:white;padding:12vw;max-width:800px}a{color:#ff8b5f}h1{font-size:clamp(32px,6vw,64px)}</style><main><p>CONSTRUCCIONES MARS, C.A.</p><h1>Página no encontrada.</h1><p>La dirección que buscas no está disponible.</p><a href="/">Volver al inicio →</a></main></html>',
);
