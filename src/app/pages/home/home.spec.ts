import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Home } from './home';
describe('Home', () => {
  it('presenta un único H1, seis servicios y el cierre de contacto', () => {
    TestBed.configureTestingModule({ imports: [Home], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('h1').length).toBe(1);
    expect(el.querySelector('h1')?.textContent).toContain('integrales para');
    expect(el.querySelectorAll('mars-service-card').length).toBe(6);
    expect(el.querySelector('mars-cta a')?.getAttribute('href')).toBe('/contacto');
    expect(el.textContent).toContain('+30');
    expect(el.textContent).not.toContain('MARS está certificada');
  });
});
