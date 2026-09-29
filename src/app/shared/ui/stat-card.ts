import { Component, input } from '@angular/core';
@Component({
  selector: 'mars-stat-card',
  template: `<div class="stat">
    <strong>{{ value() }}</strong
    ><span>{{ label() }}</span>
  </div>`,
})
export class StatCard {
  value = input('');
  label = input('');
}
