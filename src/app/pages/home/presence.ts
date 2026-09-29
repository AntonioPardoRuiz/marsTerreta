import { Reveal } from '../../shared/ui/reveal';
import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/ui/section-title';
import { alliances } from '../../core/data/site';
@Component({
  selector: 'mars-presence',
  imports: [Reveal, SectionTitle],
  template: `<section marsReveal class="section">
      <div class="container split presence">
        <div>
          <mars-section-title eyebrow="CONEXIÓN Y CERCANÍA" title="Capacidad de atención" />
          <p>
            Nuestra sede principal se encuentra en Maracaibo, Estado Zulia. El alcance se
            complementa con alianzas estratégicas en Maturín, Puerto Ordaz y Puerto La Cruz.
          </p>
          <div class="location-list">
            <p><span class="dot"></span><strong>Maracaibo</strong> <span>Sede principal</span></p>
            <p>Maturín · Puerto Ordaz · Puerto La Cruz<br /><span>Alianzas estratégicas</span></p>
          </div>
        </div>
        <figure class="venezuela-map">
          <svg viewBox="0 0 600 400" role="img" aria-labelledby="map-title map-description">
            <title id="map-title">Presencia en Venezuela</title>
            <desc id="map-description">
              Esquema orientativo: sede en Maracaibo y alianzas en Maturín, Puerto La Cruz y Puerto
              Ordaz. No representa límites geográficos.
            </desc>
            <image
              href="/assets/images/mars/empresa/mars-mapa-venezuela.webp"
              x="45"
              y="20"
              width="510"
              height="350"
              opacity="0.13"
            />
            <path class="map-line" d="M125 112L349 125 406 147 381 205" />
            <g class="map-points">
              <circle cx="125" cy="112" r="7" />
              <circle cx="349" cy="125" r="5" />
              <circle cx="406" cy="147" r="5" />
              <circle cx="381" cy="205" r="5" />
            </g>
            <g class="map-labels">
              <text x="64" y="91">Maracaibo</text>
              <text x="282" y="107">Puerto La Cruz</text>
              <text x="420" y="145">Maturín</text>
              <text x="391" y="231">Puerto Ordaz</text>
              <text x="210" y="185" class="country-label">VENEZUELA</text>
            </g>
          </svg>
          <figcaption>Esquema de presencia · ubicación orientativa</figcaption>
        </figure>
      </div>
    </section>
    <section marsReveal class="alliances section light">
      <div class="container">
        <mars-section-title eyebrow="COLABORACIÓN INDUSTRIAL" title="Alianzas estratégicas" />
        @if (alliances.length) {
          <div class="alliance-grid">
            @for (alliance of alliances; track alliance.name) {
              <div class="alliance-logo">
                <img
                  [src]="alliance.logo"
                  [alt]="alliance.name"
                  width="180"
                  height="90"
                  loading="lazy"
                />
              </div>
            }
          </div>
        } @else {
          <p>
            Un enfoque de colaboración para integrar capacidades y acompañar las necesidades de la
            industria.
          </p>
        }
      </div>
    </section>`,
})
export class Presence {
  alliances = alliances;
}
