import { Component } from '@angular/core';
import { PageHeading } from '../../shared/ui/page-heading';
import { ProjectCard } from '../../shared/ui/project-card';
import { Button } from '../../shared/ui/button';
import { projects } from '../../core/data/site';
@Component({
  selector: 'mars-proyectos',
  imports: [PageHeading, ProjectCard, Button],
  template: `<mars-page-heading
      label="Proyectos"
      title="Ingeniería aplicada a la industria"
      description="Un espacio para conocer los proyectos de Construcciones MARS."
    />
    <section class="section">
      <div class="container">
        @if (projects.length) {
          <div class="service-grid">
            @for (project of projects; track project.id) {
              <mars-project-card [project]="project" />
            }
          </div>
        } @else {
          <div class="empty-state">
            <span class="eyebrow">PORTAFOLIO</span>
            <h2>Próximamente, nuestros proyectos.</h2>
            <p>
              Estamos preparando la información de esta sección. Mientras tanto, conoce nuestras
              áreas de servicio.
            </p>
            <mars-button to="/servicios">Explorar servicios</mars-button>
          </div>
        }
      </div>
    </section>`,
})
export class Proyectos {
  projects = projects;
}
