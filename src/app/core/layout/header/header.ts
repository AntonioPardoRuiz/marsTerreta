import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { navigation, site } from '../../data/site';
@Component({
  selector: 'mars-header',
  imports: [RouterLink, RouterLinkActive],
  template: `<header [class.scrolled]="scrolled()">
    <div class="header-inner">
      <a class="brand" routerLink="/" aria-label="Construcciones MARS, C.A., inicio">
        @if (site.logo) {
          <img [src]="site.logo" alt="Construcciones MARS" width="356" height="224" />
        } @else {
          <span class="brand-placeholder">Construcciones<br /><strong>MARS, C.A.</strong></span>
        }</a
      ><button
        class="menu-toggle"
        (click)="open.set(!open())"
        [attr.aria-expanded]="open()"
        aria-controls="main-navigation"
        [attr.aria-label]="open() ? 'Cerrar menú' : 'Abrir menú'"
      >
        <span>{{ open() ? 'Cerrar' : 'Menú' }}</span
        ><span aria-hidden="true">{{ open() ? '×' : '☰' }}</span>
      </button>
      <nav id="main-navigation" aria-label="Navegación principal" [class.is-open]="open()">
        @for (item of links; track item.path) {
          <a
            [routerLink]="item.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            ariaCurrentWhenActive="page"
            (click)="open.set(false)"
            >{{ item.label }}</a
          >
        }
        <a class="header-cta" routerLink="/contacto" (click)="open.set(false)"
          >Solicitar información <span aria-hidden="true">↗</span></a
        >
      </nav>
    </div>
  </header>`,
  styleUrl: './header.scss',
})
export class Header {
  links = navigation;
  site = site;
  open = signal(false);
  scrolled = signal(false);
  constructor() {
    inject(Router)
      .events.pipe(takeUntilDestroyed())
      .subscribe((event) => {
        if (event instanceof NavigationEnd) this.open.set(false);
      });
  }
  @HostListener('window:scroll') onScroll() {
    this.scrolled.set(window.scrollY > 24);
  }
  @HostListener('document:keydown.escape') close() {
    if (this.open()) {
      this.open.set(false);
      document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();
    }
  }
}
