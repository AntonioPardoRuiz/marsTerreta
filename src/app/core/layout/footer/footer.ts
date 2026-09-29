import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { site, navigation } from '../../data/site';
@Component({
  selector: 'mars-footer',
  imports: [RouterLink],
  template: `<footer>
    <div class="container footer-grid">
      <div>
        @if (site.logoDark) {
          <img
            [src]="site.logoDark"
            alt="Construcciones MARS"
            width="356"
            height="224"
            class="footer-logo"
          />
        }
        <p class="footer-name">Construcciones MARS, C.A.</p>
        <p>Experiencia, ingeniería<br />y soluciones integrales.</p>
      </div>
      <div>
        <h2>Explora MARS</h2>
        @for (link of links; track link.path) {
          <a [routerLink]="link.path">{{ link.label }}</a>
        }
      </div>
      <div>
        <h2>Desde Venezuela</h2>
        <p>{{ site.location }}</p>
        <a routerLink="/contacto">Hablemos de tu proyecto ↗</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© {{ year }} Construcciones MARS, C.A.</span><span>RIF {{ site.rif }}</span
      ><span>Ingeniería que construye confianza.</span>
    </div>
  </footer>`,
})
export class Footer {
  site = site;
  links = navigation.slice(1);
  year = new Date().getFullYear();
}
