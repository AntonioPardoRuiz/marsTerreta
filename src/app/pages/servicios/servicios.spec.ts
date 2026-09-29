import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Servicios } from './servicios';
describe('Servicios', () => {
  it('desarrolla capacidades y permite enlazar a cada área', () => {
    TestBed.configureTestingModule({ imports: [Servicios], providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(Servicios);
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.service-detail').length).toBe(6);
    expect(el.querySelector('#metalmecanica')?.textContent).toContain('Oleoductos y gasoductos');
    expect(el.querySelector('#industriales')?.textContent).toContain(
      'Excavaciones y pavimentación',
    );
    expect(el.querySelector('#logistica')).not.toBeNull();
  });
});
