import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Service } from '../../core/data/models';
import { Media } from './media';
@Component({
  selector: 'mars-service-card',
  imports: [RouterLink, Media],
  template: `<article class="service-card">
    <a [routerLink]="service().route" [fragment]="service().id"
      ><mars-media
        [src]="service().image"
        [kind]="service().id"
        sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw"
        [alt]="service().title"
      />
      <div class="card-body">
        <span class="card-number">{{ service().number }}</span>
        <h3>{{ service().title }}</h3>
        <p>{{ service().description }}</p>
        <span class="card-link"
          >Descubrir servicio <span aria-hidden="true">↗</span
          ><span class="sr-only">: {{ service().title }}</span></span
        >
      </div></a
    >
  </article>`,
})
export class ServiceCard {
  service = input.required<Service>();
}
