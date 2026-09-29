import { Routes } from '@angular/router';
import { pageMeta } from './core/data/page-meta';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    data: pageMeta['/'],
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/nosotros/nosotros').then((m) => m.Nosotros),
    data: pageMeta['/nosotros'],
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/servicios/servicios').then((m) => m.Servicios),
    data: pageMeta['/servicios'],
  },
  {
    path: 'gerencia-proyectos',
    loadComponent: () =>
      import('./pages/gerencia-proyectos/gerencia-proyectos').then((m) => m.GerenciaProyectos),
    data: pageMeta['/gerencia-proyectos'],
  },
  {
    path: 'gestion-iso',
    loadComponent: () => import('./pages/iso/iso').then((m) => m.Iso),
    data: pageMeta['/gestion-iso'],
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/proyectos/proyectos').then((m) => m.Proyectos),
    data: pageMeta['/proyectos'],
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto').then((m) => m.Contacto),
    data: pageMeta['/contacto'],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found').then((m) => m.NotFound),
    data: {
      title: 'Página no encontrada | MARS',
      description:
        'Esta página no está disponible. Vuelve al inicio para conocer Construcciones MARS.',
    },
  },
];
