import { Component } from '@angular/core';
import { PageHeading } from '../../shared/ui/page-heading';
import { Media } from '../../shared/ui/media';
import { Cta } from '../../shared/ui/cta';
import { services } from '../../core/data/site';
@Component({
  selector: 'mars-gerencia',
  imports: [PageHeading, Media, Cta],
  template: `<mars-page-heading
      label="Gerencia de proyectos"
      title="Visión integral en cada etapa"
      description="Gerencia y administración de proyectos que integran planificación, recursos y capacidad técnica."
    />
    <section class="section" id="gerencia">
      <div class="container split">
        <div>
          <p class="eyebrow">GERENCIA DE PROYECTOS</p>
          <h2>Coordinar capacidades. Dar seguimiento al proyecto.</h2>
          <p>
            MARS desarrolla servicios de gerencia y administración de proyectos con personal
            profesional y técnico, ingeniería multidisciplinaria y gestión de recursos.
          </p>
          <ul class="capability-list">
            @for (item of capabilities; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </div>
        <mars-media kind="gerencia" />
      </div>
    </section>
    <section class="section light">
      <div class="container">
        <p class="eyebrow">ÁREAS DE GESTIÓN</p>
        <div class="three-columns">
          @for (step of steps; track step.title; let i = $index) {
            <article>
              <span class="large-number">0{{ i + 1 }}</span>
              <h2>{{ step.title }}</h2>
              <p>{{ step.text }}</p>
            </article>
          }
        </div>
      </div>
    </section>
    <mars-cta />`,
})
export class GerenciaProyectos {
  capabilities = services[1].capabilities;
  steps = [
    {
      title: 'Planificación',
      text: 'Organización y coordinación de las actividades del proyecto.',
    },
    {
      title: 'Recursos',
      text: 'Gestión de personal profesional y técnico, equipos y disciplinas de ingeniería.',
    },
    {
      title: 'Seguimiento',
      text: 'Administración y seguimiento de las actividades durante el desarrollo del proyecto.',
    },
  ];
}
