import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { site } from '../data/site';
import { pageMeta } from '../data/page-meta';
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly platform = inject(PLATFORM_ID);
  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        this.update(event.urlAfterRedirects);
        if (isPlatformBrowser(this.platform)) {
          setTimeout(() => this.document.getElementById('main')?.focus({ preventScroll: true }), 0);
        }
      });
  }
  update(url: string) {
    const path = url.split(/[?#]/)[0];
    const known = !!pageMeta[path];
    const page = pageMeta[path] ?? {
      title: 'Página no encontrada | MARS',
      description: 'La página solicitada no está disponible.',
    };
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({
      name: 'robots',
      content: site.origin && known ? 'index, follow' : 'noindex, nofollow',
    });
    for (const [property, content] of Object.entries({
      'og:title': page.title,
      'og:description': page.description,
      'og:type': 'website',
      'og:locale': 'es_VE',
      'og:site_name': site.name,
    })) {
      this.meta.updateTag({ property, content });
    }
    this.meta.updateTag({
      name: 'twitter:card',
      content: site.socialImage ? 'summary_large_image' : 'summary',
    });
    this.meta.updateTag({ name: 'twitter:title', content: page.title });
    this.meta.updateTag({ name: 'twitter:description', content: page.description });
    const origin = site.origin.replace(/\/$/, '');
    if (origin && known) {
      let canonical = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!canonical) {
        canonical = this.document.createElement('link');
        canonical.rel = 'canonical';
        this.document.head.appendChild(canonical);
      }
      canonical.href = origin + path;
      this.meta.updateTag({ property: 'og:url', content: origin + path });
    } else {
      this.document.querySelector('link[rel="canonical"]')?.remove();
      this.meta.removeTag('property="og:url"');
    }
    if (site.socialImage && origin) {
      const image = new URL(site.socialImage, origin).href;
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:image', content: image });
    }
    let schema = this.document.querySelector<HTMLScriptElement>('#organization-schema');
    if (!schema) {
      schema = this.document.createElement('script');
      schema.type = 'application/ld+json';
      schema.id = 'organization-schema';
      this.document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: site.name,
      taxID: site.rif,
      ...(origin ? { url: origin } : {}),
      ...(site.logo && origin ? { logo: new URL(site.logo, origin).href } : {}),
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Maracaibo',
        addressRegion: 'Zulia',
        addressCountry: 'VE',
      },
    });
  }
}
