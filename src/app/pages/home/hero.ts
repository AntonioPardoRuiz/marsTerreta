import { Component } from '@angular/core';
import { Button } from '../../shared/ui/button';
import { Media } from '../../shared/ui/media';
@Component({
  selector: 'mars-hero',
  imports: [Button, Media],
  template: `<section class="hero">
    <mars-media kind="hero" [priority]="true" />
    <div class="container hero-content">
      <p class="eyebrow"><span></span> INGENIERÍA · CONSTRUCCIÓN · INDUSTRIA</p>
      <h1>Soluciones<br />integrales para<br /><span>la industria.</span></h1>
      <p class="hero-description">
        Experiencia, ingeniería y capacidad técnica para desarrollar proyectos industriales con
        altos estándares de calidad, seguridad y sostenibilidad.
      </p>
      <div class="actions">
        <mars-button to="/servicios">Conoce nuestros servicios</mars-button
        ><mars-button variant="outline">Contacta con nosotros</mars-button>
      </div>
      <div class="hero-bottom">
        <div>
          <strong>+30</strong><span>AÑOS DE<br />EXPERIENCIA</span>
        </div>
        <p>DESDE MARACAIBO.<br />AL SERVICIO DE LA INDUSTRIA.</p>
        <a href="#capacidades" aria-label="Explorar nuestras capacidades">↓</a>
      </div>
    </div>
    <span class="hero-side" aria-hidden="true">CONSTRUCCIONES MARS / DESDE 1992</span>
  </section>`,
})
export class Hero {}
