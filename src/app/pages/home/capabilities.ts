import { Reveal } from '../../shared/ui/reveal';
import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/ui/section-title';
import { ServiceCard } from '../../shared/ui/service-card';
import { services } from '../../core/data/site';
@Component({
  selector: 'mars-capabilities',
  imports: [Reveal, SectionTitle, ServiceCard],
  template: `<section marsReveal class="section light" id="capacidades">
    <div class="container">
      <div class="section-top">
        <mars-section-title eyebrow="LO QUE HACEMOS" title="Nuestras capacidades" />
        <p>Una visión integral.<br />La capacidad técnica para hacerla realidad.</p>
      </div>
      <div class="service-grid">
        @for (service of services; track service.id) {
          <mars-service-card [service]="service" />
        }
      </div>
    </div>
  </section>`,
})
export class Capabilities {
  services = services;
}
