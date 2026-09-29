import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
const server = spawn(process.execPath, ['scripts/serve-preview.mjs'], {
  stdio: 'ignore',
  env: { ...process.env, MARS_PREVIEW_PORT: '4174' },
});
let chrome;
let ready = false;
try {
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      const response = await fetch('http://127.0.0.1:4174');
      if (!response.ok) throw new Error('Vista previa no disponible');
      ready = true;
      break;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
  if (!ready) throw new Error('No se ha podido iniciar el servidor de auditoría');
  chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--disable-gpu'] });
  const result = await lighthouse('http://127.0.0.1:4174/', {
    port: chrome.port,
    output: ['html', 'json'],
    logLevel: 'error',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
  });
  if (!result) throw new Error('Lighthouse no ha devuelto resultados.');
  if (result.lhr.runtimeError) throw new Error(result.lhr.runtimeError.message);
  await mkdir('artifacts', { recursive: true });
  await writeFile('artifacts/lighthouse.html', result.report[0]);
  await writeFile('artifacts/lighthouse.json', result.report[1]);
  const scores = Object.fromEntries(
    Object.entries(result.lhr.categories).map(([key, value]) => [
      key,
      Math.round(value.score * 100),
    ]),
  );
  console.log(JSON.stringify(scores, null, 2));
  console.log(
    'Auditorías pendientes:',
    Object.values(result.lhr.audits)
      .filter((a) => a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'informative')
      .map((a) => ({ id: a.id, title: a.title, score: a.score })),
  );
} finally {
  await chrome?.kill();
  server.kill();
}
