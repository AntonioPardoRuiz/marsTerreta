import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Contacto } from './contacto';
describe('Contacto', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [Contacto], providers: [provideRouter([])] }),
  );
  it('rechaza una consulta vacía sin simular envío', async () => {
    const fixture = TestBed.createComponent(Contacto);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.prepared()).toBe('');
    expect(fixture.nativeElement.querySelectorAll('.error').length).toBeGreaterThan(0);
  });
  it('prepara los datos válidos e informa que no se enviaron', async () => {
    const fixture = TestBed.createComponent(Contacto);
    fixture.detectChanges();
    await fixture.whenStable();
    const inputs: Record<string, string> = {
      name: 'Ana Pérez',
      email: 'ana@example.com',
      company: 'Empresa',
      service: 'Servicios industriales',
      message: 'Necesitamos información sobre construcción industrial.',
    };
    for (const [id, value] of Object.entries(inputs)) {
      const input = fixture.nativeElement.querySelector('#' + id);
      input.value = value;
      input.dispatchEvent(new Event(id === 'service' ? 'change' : 'input', { bubbles: true }));
    }
    await fixture.whenStable();
    fixture.nativeElement
      .querySelector('form')
      .dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();
    expect(fixture.componentInstance.prepared()).toContain('ana@example.com');
    expect(fixture.nativeElement.querySelector('[role=status]').textContent).toContain(
      'No se ha enviado',
    );
  });
});
