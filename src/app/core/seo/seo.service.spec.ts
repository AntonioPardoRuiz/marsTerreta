import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';
import { site } from '../data/site';
describe('SEO', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter([])] }));
  afterEach(() => {
    site.origin = '';
    document.querySelector('link[rel=canonical]')?.remove();
    document.querySelector('#organization-schema')?.remove();
  });
  it('actualiza title, descripción y Open Graph al cambiar de página', () => {
    const seo = TestBed.inject(SeoService);
    seo.update('/servicios#industriales');
    expect(TestBed.inject(Title).getTitle()).toContain('Servicios industriales');
    expect(TestBed.inject(Meta).getTag('property="og:title"')?.content).toContain(
      'Servicios industriales',
    );
    seo.update('/gestion-iso');
    expect(TestBed.inject(Title).getTitle()).toContain('Consultoría ISO');
    expect(TestBed.inject(Meta).getTag('name="description"')?.content).toContain('45001');
  });
  it('evita canonical inventado y bloquea indexación sin dominio', () => {
    TestBed.inject(SeoService).update('/');
    expect(document.querySelector('link[rel=canonical]')).toBeNull();
    expect(TestBed.inject(Meta).getTag('name="robots"')?.content).toBe('noindex, nofollow');
  });
  it('genera canonical limpio y un único schema con dominio configurado', () => {
    site.origin = 'https://mars.example';
    const seo = TestBed.inject(SeoService);
    seo.update('/servicios?campaign=test#industriales');
    seo.update('/contacto');
    expect(document.querySelector('link[rel=canonical]')?.getAttribute('href')).toBe(
      'https://mars.example/contacto',
    );
    expect(document.querySelectorAll('#organization-schema').length).toBe(1);
    const schema = JSON.parse(document.querySelector('#organization-schema')!.textContent!);
    expect(schema.name).toBe('Construcciones MARS, C.A.');
    expect(schema.taxID).toBe('J-30047078-4');
    seo.update('/desconocida');
    expect(document.querySelector('link[rel=canonical]')).toBeNull();
    expect(TestBed.inject(Meta).getTag('name="robots"')?.content).toBe('noindex, nofollow');
  });
});
