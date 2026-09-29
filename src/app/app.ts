import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/layout/header/header';
import { Footer } from './core/layout/footer/footer';
import { SeoService } from './core/seo/seo.service';
@Component({
  selector: 'mars-app',
  imports: [RouterOutlet, Header, Footer],
  template: `<a class="skip-link" href="#main">Saltar al contenido</a><mars-header />
    <main id="main" tabindex="-1"><router-outlet /></main>
    <mars-footer />`,
})
export class App {
  private readonly seo = inject(SeoService);
}
