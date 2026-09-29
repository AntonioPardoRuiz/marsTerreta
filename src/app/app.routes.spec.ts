import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
describe('Navegación', () => {
  it('carga las siete páginas y sus encabezados', async () => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes)] });
    const harness = await RouterTestingHarness.create();
    for (const path of [
      '/',
      '/nosotros',
      '/servicios',
      '/gerencia-proyectos',
      '/gestion-iso',
      '/proyectos',
      '/contacto',
    ]) {
      await harness.navigateByUrl(path);
      expect(harness.routeNativeElement?.querySelectorAll('h1').length).toBe(1);
    }
    await harness.navigateByUrl('/no-existe');
    expect(harness.routeNativeElement?.textContent).toContain('Página no encontrada');
  });
});
