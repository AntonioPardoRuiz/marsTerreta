import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
const routes = [
  '/',
  '/nosotros',
  '/servicios',
  '/gerencia-proyectos',
  '/gestion-iso',
  '/proyectos',
  '/contacto',
];
test('todas las páginas funcionan en las siete anchuras solicitadas', async ({ page }) => {
  test.setTimeout(120000);
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const width of [320, 375, 430, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
        `${route} a ${width}px`,
      ).toBe(true);
    }
  }
  expect(errors).toEqual([]);
});
test('navegación móvil, foco y formulario de contacto', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Abrir menú' });
  await toggle.click();
  await expect(page.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute(
    'aria-expanded',
    'true',
  );
  await page
    .locator('#main-navigation')
    .getByRole('link', { name: 'Contacto', exact: true })
    .click();
  await expect(page).toHaveURL(/contacto/);
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
    'aria-expanded',
    'false',
  );
  await page.getByLabel('Nombre *', { exact: true }).fill('Ana Pérez');
  await page.getByLabel('Correo electrónico *').fill('ana@example.com');
  await page.getByLabel('Área de interés *').selectOption('Servicios industriales');
  await page
    .getByLabel('Cuéntanos sobre tu proyecto *')
    .fill('Necesitamos información para un proyecto industrial.');
  await page.getByRole('button', { name: 'Preparar consulta' }).click();
  await expect(page.getByRole('status')).toContainText('No se ha enviado');
});
test('accesibilidad WCAG AA en todas las páginas', async ({ page }) => {
  test.setTimeout(120000);
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      expect(results.violations, `${route} a ${width}px`).toEqual([]);
    }
  }
});
test('capturas de la Home y páginas interiores', async ({ page }) => {
  test.setTimeout(90000);
  const loadImages = async () => {
    await page.locator('img').evaluateAll(async (images) => {
      await Promise.all(
        images.map(async (image) => {
          image.loading = 'eager';
          await image.decode();
          if (!image.naturalWidth) throw new Error(`Imagen no disponible: ${image.currentSrc}`);
        }),
      );
    });
  };
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    await loadImages();
    await expect(page.locator('.technical-art')).toHaveCount(0);
    await page.screenshot({ path: `artifacts/home-${width}.png`, fullPage: true });
  }
  for (const route of ['/servicios', '/contacto']) {
    await page.goto(route);
    await loadImages();
    await page.screenshot({ path: `artifacts/${route.slice(1)}-1440.png`, fullPage: true });
  }
});
