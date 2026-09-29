import { readFile, mkdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
const root = 'src/assets/images/mars';
const manifest = JSON.parse(await readFile('scripts/assets-manifest.json', 'utf8'));
let count = 0,
  total = 0;
async function encode(source, destination, width, lossless = false, crop) {
  const output = join(root, destination);
  await mkdir(dirname(output), { recursive: true });
  const args = [
    '-quiet',
    ...(lossless ? ['-lossless', '-z', '6'] : ['-q', '80', '-m', '6']),
    '-metadata',
    'none',
    ...(crop ? ['-crop', ...crop.map(String)] : []),
    '-resize',
    String(width),
    '0',
    join(root, 'img', source),
    '-o',
    output,
  ];
  execFileSync('cwebp', args);
  total += (await stat(output)).size;
  count++;
}
for (const entry of manifest.images)
  for (const width of entry.widths)
    await encode(entry.source, `${entry.destination}-${width}.webp`, width);
for (const entry of manifest.logos) await encode(entry.source, entry.destination, 480, true);
for (const entry of manifest.extracts)
  await encode(entry.source, entry.destination, entry.width, !!entry.crop, entry.crop);
console.log(
  `${count} assets WebP generados: ${(total / 1024 / 1024).toFixed(2)} MB. Originales conservados.`,
);
