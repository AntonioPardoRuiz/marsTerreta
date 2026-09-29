import { images } from '../../core/data/assets';
import { Component, computed, input } from '@angular/core';
@Component({
  selector: 'mars-media',
  host: { '[class]': '"media media-" + kind()' },
  template: `@if (imageSrc()) {
      <img
        [src]="imageSrc()"
        [attr.srcset]="imageSet()"
        [attr.sizes]="priority() ? '100vw' : sizes()"
        [alt]="imageAlt()"
        [width]="imageWidth()"
        [height]="imageHeight()"
        [style.object-position]="imagePosition()"
        decoding="async"
        [loading]="priority() ? 'eager' : 'lazy'"
        [attr.fetchpriority]="priority() ? 'high' : 'auto'"
      />
    } @else {
      <div class="technical-art" aria-hidden="true">
        <div class="art-grid"></div>
        <div class="beam beam-one"></div>
        <div class="beam beam-two"></div>
        <div class="beam beam-three"></div>
        <span class="art-cross">+</span><span class="art-coordinate">M / INDUSTRIA</span>
      </div>
    }`,
})
export class Media {
  src = input<string>();
  alt = input('');
  kind = input('default');
  priority = input(false);
  sizes = input('(max-width: 650px) 100vw, 50vw');
  imageWidth = computed(() => images[this.kind()]?.width ?? 1200);
  imageHeight = computed(() => images[this.kind()]?.height ?? 800);
  imagePosition = computed(() => images[this.kind()]?.position ?? '50% 50%');
  imageSrc = computed(() => this.src() || images[this.kind()]?.src);
  imageSet = computed(() => (this.src() ? null : (images[this.kind()]?.srcset ?? null)));
  imageAlt = computed(() => images[this.kind()]?.alt || this.alt());
}
