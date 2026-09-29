import { Component, input } from '@angular/core';
@Component({
  selector: 'mars-section-title',
  template: `<p class="eyebrow"><span aria-hidden="true"></span>{{ eyebrow() }}</p>
    <h2>{{ title() }}</h2>
    <ng-content />`,
})
export class SectionTitle {
  eyebrow = input('');
  title = input('');
}
