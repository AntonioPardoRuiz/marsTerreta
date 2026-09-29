import { Component } from '@angular/core';
import { PageHeading } from '../../shared/ui/page-heading';
import { Cta } from '../../shared/ui/cta';
import { certifications, services } from '../../core/data/site';
@Component({
  selector: 'mars-iso',
  imports: [PageHeading, Cta],
  template: `<mars-page-heading
      label="Gestión ISO"
      title="Sistemas que ayudan a mejorar"
      description="Consultoría, implementación, acompañamiento y capacitación en sistemas de gestión ISO."
    />
    <section class="section dark" id="iso">
      <div class="container">
        <div class="iso-grid">
          @for (item of certifications; track item.code) {
            <article>
              <span class="eyebrow">ISO</span>
              <h2>{{ item.code }}</h2>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          }
        </div>
        <p class="iso-note">
          Las normas se presentan como ámbitos de consultoría y acompañamiento para las
          organizaciones. Estos servicios no implican que MARS esté certificada ni que emita
          certificaciones.
        </p>
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow">ACOMPAÑAMIENTO</p>
          <h2>De la documentación a la preparación para auditorías.</h2>
        </div>
        <ul class="capability-list">
          @for (item of consulting; track item) {
            <li>{{ item }}</li>
          }
        </ul>
      </div>
    </section>
    <section class="section light" id="capacitacion">
      <div class="container split">
        <div>
          <p class="eyebrow">CAPACITACIÓN</p>
          <h2>Formamos equipos preparados para la industria.</h2>
          <p>Formación orientada a comprender, implementar y mantener los sistemas de gestión.</p>
        </div>
        <ul class="capability-list">
          @for (item of training; track item) {
            <li>{{ item }}</li>
          }
        </ul>
      </div>
    </section>
    <mars-cta />`,
})
export class Iso {
  certifications = certifications;
  consulting = services[2].capabilities;
  training = services[5].capabilities;
}
