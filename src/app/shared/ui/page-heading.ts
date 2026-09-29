import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'mars-page-heading',
  imports: [RouterLink],
  template: `<section class="page-heading">
    <div class="container">
      <nav aria-label="Ruta de navegación" class="breadcrumbs">
        <a routerLink="/">Inicio</a><span aria-hidden="true">/</span
        ><span aria-current="page">{{ label() }}</span>
      </nav>
      <p class="eyebrow">CONSTRUCCIONES MARS</p>
      <h1>{{ title() }}<span class="orange">.</span></h1>
      <p class="lede">{{ description() }}</p>
    </div>
  </section>`,
})
export class PageHeading {
  label = input('');
  title = input('');
  description = input('');
}
