import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';
describe('Header', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [Header], providers: [provideRouter([])] }),
  );
  it('expone las siete rutas y un enlace a contacto', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('nav a').length).toBe(8);
    expect(fixture.nativeElement.querySelector('.header-cta').getAttribute('href')).toBe(
      '/contacto',
    );
  });
  it('abre el menú y permite cerrarlo con Escape', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
