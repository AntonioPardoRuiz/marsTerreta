import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'mars-button',
  imports: [RouterLink],
  template: `<a class="button" [class.button-outline]="variant() === 'outline'" [routerLink]="to()"
    ><ng-content /> <span aria-hidden="true">↗</span></a
  >`,
})
export class Button {
  to = input('/contacto');
  variant = input('solid');
}
