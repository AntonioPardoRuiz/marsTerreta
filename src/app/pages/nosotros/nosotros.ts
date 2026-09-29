import { Component } from '@angular/core';
import { PageHeading } from '../../shared/ui/page-heading';
import { Media } from '../../shared/ui/media';
import { StatCard } from '../../shared/ui/stat-card';
import { Cta } from '../../shared/ui/cta';
import { Presence } from '../home/presence';
@Component({
  selector: 'mars-nosotros',
  imports: [PageHeading, Media, StatCard, Cta, Presence],
  template: `<mars-page-heading
      label="Nosotros"
      title="Experiencia que construye confianza"
      description="Desde Maracaibo, al servicio de la industria."
    />
    <section class="section">
      <div class="container split">
        <mars-media kind="empresa" />
        <div>
          <p class="eyebrow">NUESTRA EMPRESA</p>
          <h2>Ingeniería y compromiso desde 1992.</h2>
          <p class="lede">
            Construcciones MARS, C.A. es una empresa venezolana constituida en Maracaibo en 1992,
            especializada en soluciones integrales para el sector industrial.
          </p>
          <p>
            Servicios industriales, gerencia de proyectos, logística, construcción metalmecánica y
            sistemas de gestión integran nuestras áreas de trabajo.
          </p>
          <div class="stats-row">
            <mars-stat-card value="+30" label="Años de experiencia" /><mars-stat-card
              value="1992"
              label="Constitución en Maracaibo"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="section light">
      <div class="container">
        <p class="eyebrow">NUESTROS PILARES</p>
        <div class="three-columns">
          <article>
            <h2>Experiencia</h2>
            <p>Una trayectoria vinculada al sector industrial venezolano.</p>
          </article>
          <article>
            <h2>Capacidad técnica</h2>
            <p>Integración de personal profesional y técnico e ingeniería multidisciplinaria.</p>
          </article>
          <article>
            <h2>Compromiso</h2>
            <p>Calidad, seguridad y sostenibilidad como orientación de nuestros servicios.</p>
          </article>
        </div>
      </div>
    </section>
    <mars-presence /><mars-cta />`,
})
export class Nosotros {}
