import { gzipSync } from 'node:zlib';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = resolve('dist/mars/browser');
const port = Number(process.env['MARS_PREVIEW_PORT'] || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.png': 'image/png',
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let path = resolve(root, '.' + decodeURIComponent(url.pathname));
    if (path !== root && !path.startsWith(root + sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    try {
      if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    } catch {
      path = resolve(root, '404.html');
      res.statusCode = 404;
    }
    const content = await readFile(path);
    res.setHeader('Content-Type', types[extname(path)] ?? 'application/octet-stream');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (/\.(js|css|webp|avif)$/.test(path))
      res.setHeader('Cache-Control', 'public,max-age=31536000,immutable');
    if (
      /\.(html|js|css|xml|txt|svg)$/.test(path) &&
      req.headers['accept-encoding']?.includes('gzip')
    ) {
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader('Vary', 'Accept-Encoding');
      res.end(gzipSync(content));
    } else res.end(content);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
}).listen(port, '127.0.0.1', () => console.log(`Vista previa: http://127.0.0.1:${port}`));
