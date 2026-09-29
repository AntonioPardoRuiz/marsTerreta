import { Component } from '@angular/core';
import { Button } from '../shared/ui/button';
@Component({
  selector: 'mars-not-found',
  imports: [Button],
  template: `<section class="section">
    <div class="container empty-state">
      <p class="eyebrow">ERROR 404</p>
      <h1>Página no encontrada.</h1>
      <p>La dirección que buscas no está disponible.</p>
      <mars-button to="/">Volver al inicio</mars-button>
    </div>
  </section>`,
})
export class NotFound {}
