import { Component, input } from '@angular/core';
import { Project } from '../../core/data/models';
import { Media } from './media';
@Component({
  selector: 'mars-project-card',
  imports: [Media],
  template: `<article>
    <mars-media [src]="project().image" [alt]="project().title" />
    <h2>{{ project().title }}</h2>
    <p>{{ project().description }}</p>
    @if (project().location) {
      <p>{{ project().location }}</p>
    }
  </article>`,
})
export class ProjectCard {
  project = input.required<Project>();
}
