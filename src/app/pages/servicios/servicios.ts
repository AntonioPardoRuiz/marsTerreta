import { Component } from '@angular/core';
import { PageHeading } from '../../shared/ui/page-heading';
import { Media } from '../../shared/ui/media';
import { Cta } from '../../shared/ui/cta';
import { Button } from '../../shared/ui/button';
import { services } from '../../core/data/site';
@Component({
  selector: 'mars-servicios',
  imports: [PageHeading, Media, Cta, Button],
  template: `<mars-page-heading
      label="Servicios"
      title="Capacidad técnica. Soluciones integrales"
      description="Servicios industriales, ingeniería y construcción para acompañar las necesidades de cada proyecto."
    />
    <div class="container">
      @for (service of services; track service.id) {
        <section class="section service-detail split" [id]="service.id">
          <mars-media [src]="service.image" [alt]="service.title" [kind]="service.id" />
          <div>
            <p class="eyebrow">CAPACIDAD / {{ service.number }}</p>
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
            <ul class="capability-list">
              @for (capability of service.capabilities; track capability) {
                <li>{{ capability }}</li>
              }
            </ul>
            <mars-button>Consultar este servicio</mars-button>
          </div>
        </section>
      }
    </div>
    <mars-cta />`,
})
export class Servicios {
  services = services;
}
