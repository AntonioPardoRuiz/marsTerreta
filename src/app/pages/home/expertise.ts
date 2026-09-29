import { Reveal } from '../../shared/ui/reveal';
import { Component } from '@angular/core';
import { SectionTitle } from '../../shared/ui/section-title';
import { Button } from '../../shared/ui/button';
import { Media } from '../../shared/ui/media';
import { certifications } from '../../core/data/site';
@Component({
  selector: 'mars-expertise',
  imports: [Reveal, SectionTitle, Button, Media],
  template: `<section marsReveal class="section">
      <div class="container split">
        <mars-media kind="gerencia" />
        <div>
          <mars-section-title
            eyebrow="VISIÓN GLOBAL. CONTROL EN CADA ETAPA."
            title="Gerencia de proyectos"
          />
          <p>
            Integramos planificación, coordinación y seguimiento con gestión de recursos, personal
            profesional y técnico e ingeniería multidisciplinaria.
          </p>
          <ol class="process">
            <li><span>01</span> Planificación y coordinación</li>
            <li><span>02</span> Administración y recursos</li>
            <li><span>03</span> Seguimiento del proyecto</li>
          </ol>
          <mars-button to="/gerencia-proyectos">Descubre nuestro enfoque</mars-button>
        </div>
      </div>
    </section>
    <section marsReveal class="section dark">
      <div class="container">
        <div class="section-top">
          <mars-section-title eyebrow="SISTEMAS DE GESTIÓN" title="Gestión ISO y certificaciones" />
          <p>Consultoría, implementación y preparación para certificación.</p>
        </div>
        <div class="iso-grid">
          @for (item of certifications; track item.code) {
            <article>
              <span class="eyebrow">ISO</span>
              <h3>{{ item.code }}</h3>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </article>
          }
        </div>
        <div class="section-bottom">
          <p>Acompañamos a tu organización en el desarrollo de sus sistemas de gestión.</p>
          <mars-button to="/gestion-iso" variant="outline"
            >Conoce nuestros servicios ISO</mars-button
          >
        </div>
      </div>
    </section>
    <section marsReveal class="section">
      <div class="container split">
        <div>
          <mars-section-title
            eyebrow="CONOCIMIENTO QUE SE APLICA"
            title="Formamos equipos preparados para la industria"
          />
          <p>
            Interpretación de normas ISO, indicadores de gestión, formación de auditores internos y
            control de riesgos. Capacitación orientada a los sistemas de gestión.
          </p>
          <mars-button to="/gestion-iso">Explora la capacitación</mars-button>
        </div>
        <mars-media kind="capacitacion" />
      </div>
    </section>
    <section marsReveal class="metal-section dark">
      <mars-media kind="soldadura" sizes="100vw" />
      <div class="container">
        <div class="metal-content">
          <p class="eyebrow">PRECISIÓN EN CADA UNIÓN</p>
          <h2>Construcción<br />metalmecánica<span class="orange">.</span></h2>
          <p>
            Estructuras metálicas, fabricación, montaje, soldadura y mantenimiento. Capacidades que
            conectan ingeniería e industria.
          </p>
          <mars-button to="/servicios">Conoce nuestras capacidades</mars-button>
        </div>
      </div>
    </section>`,
})
export class Expertise {
  certifications = certifications;
}
