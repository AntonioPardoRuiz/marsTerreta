import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PageHeading } from '../../shared/ui/page-heading';
import { site, services } from '../../core/data/site';
@Component({
  selector: 'mars-contacto',
  imports: [PageHeading, FormsModule],
  templateUrl: './contacto.html',
})
export class Contacto {
  site = site;
  services = services;
  copied = signal(false);
  prepared = signal('');
  copyError = signal(false);
  model = { name: '', email: '', company: '', service: '', message: '' };
  prepare(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }
    this.prepared.set(
      `Nombre: ${this.model.name}\nCorreo: ${this.model.email}\nEmpresa: ${this.model.company}\nServicio: ${this.model.service}\n\n${this.model.message}`,
    );
    this.copied.set(false);
  }
  async copy() {
    try {
      await navigator.clipboard.writeText(this.prepared());
      this.copied.set(true);
    } catch {
      this.copyError.set(true);
    }
  }
}
