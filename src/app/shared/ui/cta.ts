import { Media } from './media';
import { Component } from '@angular/core';
import { Button } from './button';
@Component({
  selector: 'mars-cta',
  imports: [Button, Media],
  template: `<section class="cta">
    <mars-media kind="cierre" alt="" sizes="100vw" />
    <div class="container cta-inner">
      <div>
        <p class="eyebrow">CONSTRUYAMOS EL SIGUIENTE PASO</p>
        <h2>Construimos soluciones<br />que impulsan la industria<span class="orange">.</span></h2>
        <p>
          Cuéntanos las necesidades de tu proyecto y descubre cómo MARS puede aportar experiencia,
          capacidad técnica y gestión integral.
        </p>
      </div>
      <mars-button>Hablemos de tu proyecto</mars-button>
    </div>
  </section>`,
})
export class Cta {}
