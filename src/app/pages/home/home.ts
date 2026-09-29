import { Media } from '../../shared/ui/media';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { Hero } from './hero';
import { Capabilities } from './capabilities';
import { Expertise } from './expertise';
import { Presence } from './presence';
import { SectionTitle } from '../../shared/ui/section-title';
import { Button } from '../../shared/ui/button';
import { Cta } from '../../shared/ui/cta';
@Component({
  selector: 'mars-home',
  imports: [Media, RouterLink, Hero, Capabilities, Expertise, Presence, SectionTitle, Button, Cta],
  template: `<mars-hero />
    <section class="section intro">
      <div class="container">
        <div class="split">
          <mars-section-title
            eyebrow="CONSTRUCCIONES MARS, C.A."
            title="Experiencia que construye confianza"
          />
          <div>
            <p class="lede">
              Construcciones MARS, C.A. es una empresa venezolana constituida en Maracaibo en 1992 y
              especializada en soluciones integrales para el sector industrial.
            </p>
            <mars-button to="/nosotros" variant="outline">Conoce MARS</mars-button>
          </div>
        </div>
        <div class="intro-photo"><mars-media kind="equipo" sizes="100vw" /></div>
        <div class="pillars">
          <div>
            <span>01 /</span>
            <h3>Experiencia</h3>
          </div>
          <div>
            <span>02 /</span>
            <h3>Capacidad técnica</h3>
          </div>
          <div>
            <span>03 /</span>
            <h3>Compromiso</h3>
          </div>
        </div>
      </div>
    </section>
    <mars-capabilities /><mars-expertise />
    <section class="section light">
      <div class="container">
        <mars-section-title
          eyebrow="SOLUCIONES INTEGRALES"
          title="Un único equipo. Múltiples capacidades."
        />
        <div class="solutions-grid solutions-photographic">
          @for (item of solutions; track item; let index = $index) {
            <a [routerLink]="links[index].split('#')[0]" [fragment]="links[index].split('#')[1]"
              ><mars-media
                [kind]="solutionImages[index]"
                sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw"
              /><span>0{{ index + 1 }}</span>
              <h3>{{ item }}</h3>
              <span aria-hidden="true">↗</span></a
            >
          }
        </div>
      </div>
    </section>
    <mars-presence /><mars-cta />`,
})
export class Home {
  solutionImages = [
    'construccion',
    'ingenieria',
    'transporte',
    'estructuras',
    'gerencia',
    'inspeccion',
  ];
  solutions = [
    'Construcción',
    'Ingeniería',
    'Logística',
    'Metalmecánica',
    'Gestión de proyectos',
    'Sistemas de gestión',
  ];
  links = [
    '/servicios#industriales',
    '/servicios#industriales',
    '/servicios#logistica',
    '/servicios#metalmecanica',
    '/gerencia-proyectos',
    '/gestion-iso',
  ];
}
