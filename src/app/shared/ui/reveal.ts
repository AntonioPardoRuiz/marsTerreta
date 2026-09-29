import { afterNextRender, DestroyRef, Directive, ElementRef, inject } from '@angular/core';
@Directive({ selector: '[marsReveal]' })
export class Reveal {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroy = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      if (
        !('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      )
        return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.element.nativeElement.classList.add('reveal-in');
              observer.disconnect();
            }
          }
        },
        { threshold: 0.08 },
      );
      observer.observe(this.element.nativeElement);
      this.destroy.onDestroy(() => observer.disconnect());
    });
  }
}
