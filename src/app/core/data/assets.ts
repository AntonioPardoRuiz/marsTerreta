// Derivados de los originales de img/. Correspondencias en scripts/assets-manifest.json.
export interface MarsImage {
  src: string;
  srcset?: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
}
export const images: Record<string, MarsImage | undefined> = {
  hero: {
    src: '/assets/images/mars/hero/mars-construccion-industrial-1448.webp',
    srcset:
      '/assets/images/mars/hero/mars-construccion-industrial-640.webp 640w, /assets/images/mars/hero/mars-construccion-industrial-960.webp 960w, /assets/images/mars/hero/mars-construccion-industrial-1448.webp 1448w',
    alt: 'Montaje de una estructura industrial con grúa y plataforma elevadora.',
    width: 1448,
    height: 1086,
    position: '62% 50%',
  },
  empresa: {
    src: '/assets/images/mars/empresa/mars-oficina-1122.webp',
    srcset:
      '/assets/images/mars/empresa/mars-oficina-480.webp 480w, /assets/images/mars/empresa/mars-oficina-800.webp 800w, /assets/images/mars/empresa/mars-oficina-1122.webp 1122w',
    alt: 'Oficina con planos, muestras y el emblema de Construcciones MARS.',
    width: 1122,
    height: 1402,
    position: '50% 45%',
  },
  equipo: {
    src: '/assets/images/mars/empresa/mars-equipo-industrial-1448.webp',
    srcset:
      '/assets/images/mars/empresa/mars-equipo-industrial-640.webp 640w, /assets/images/mars/empresa/mars-equipo-industrial-960.webp 960w, /assets/images/mars/empresa/mars-equipo-industrial-1448.webp 1448w',
    alt: 'Grupo de profesionales con cascos junto a vehículos de trabajo.',
    width: 1448,
    height: 1086,
    position: '50% 45%',
  },
  industriales: {
    src: '/assets/images/mars/servicios/mars-estructura-industrial-1200.webp',
    srcset:
      '/assets/images/mars/servicios/mars-estructura-industrial-480.webp 480w, /assets/images/mars/servicios/mars-estructura-industrial-800.webp 800w, /assets/images/mars/servicios/mars-estructura-industrial-1200.webp 1200w',
    alt: 'Estructura metálica en construcción y equipos de trabajo.',
    width: 1200,
    height: 900,
    position: '50% 50%',
  },
  gerencia: {
    src: '/assets/images/mars/servicios/mars-gerencia-planos-1200.webp',
    srcset:
      '/assets/images/mars/servicios/mars-gerencia-planos-480.webp 480w, /assets/images/mars/servicios/mars-gerencia-planos-800.webp 800w, /assets/images/mars/servicios/mars-gerencia-planos-1200.webp 1200w',
    alt: 'Revisión de planos técnicos en una mesa de trabajo.',
    width: 1200,
    height: 1200,
    position: '50% 60%',
  },
  iso: {
    src: '/assets/images/mars/iso/mars-equipo-planificacion-1200.webp',
    srcset:
      '/assets/images/mars/iso/mars-equipo-planificacion-480.webp 480w, /assets/images/mars/iso/mars-equipo-planificacion-800.webp 800w, /assets/images/mars/iso/mars-equipo-planificacion-1200.webp 1200w',
    alt: 'Equipo reunido para revisar documentación y planos.',
    width: 1200,
    height: 1173,
    position: '50% 65%',
  },
  logistica: {
    src: '/assets/images/mars/logistica/mars-flota-equipos-1200.webp',
    srcset:
      '/assets/images/mars/logistica/mars-flota-equipos-480.webp 480w, /assets/images/mars/logistica/mars-flota-equipos-800.webp 800w, /assets/images/mars/logistica/mars-flota-equipos-1200.webp 1200w',
    alt: 'Camiones y equipos estacionados en un patio de operaciones.',
    width: 1200,
    height: 900,
    position: '50% 50%',
  },
  metalmecanica: {
    src: '/assets/images/mars/metalmecanica/mars-soldadura-industrial-1200.webp',
    srcset:
      '/assets/images/mars/metalmecanica/mars-soldadura-industrial-480.webp 480w, /assets/images/mars/metalmecanica/mars-soldadura-industrial-800.webp 800w, /assets/images/mars/metalmecanica/mars-soldadura-industrial-1200.webp 1200w',
    alt: 'Trabajador con protección facial realizando labores de soldadura.',
    width: 1200,
    height: 799,
    position: '55% 50%',
  },
  capacitacion: {
    src: '/assets/images/mars/iso/mars-equipo-tecnico-1200.webp',
    srcset:
      '/assets/images/mars/iso/mars-equipo-tecnico-480.webp 480w, /assets/images/mars/iso/mars-equipo-tecnico-800.webp 800w, /assets/images/mars/iso/mars-equipo-tecnico-1200.webp 1200w',
    alt: 'Grupo de profesionales con equipos de protección personal.',
    width: 1200,
    height: 900,
    position: '50% 45%',
  },
  soldadura: {
    src: '/assets/images/mars/metalmecanica/mars-soldadura-tuberia-1448.webp',
    srcset:
      '/assets/images/mars/metalmecanica/mars-soldadura-tuberia-640.webp 640w, /assets/images/mars/metalmecanica/mars-soldadura-tuberia-960.webp 960w, /assets/images/mars/metalmecanica/mars-soldadura-tuberia-1448.webp 1448w',
    alt: 'Soldadura de una tubería con equipos de protección personal.',
    width: 1448,
    height: 1086,
    position: '60% 50%',
  },
  construccion: {
    src: '/assets/images/mars/servicios/mars-obra-civil-1200.webp',
    srcset:
      '/assets/images/mars/servicios/mars-obra-civil-480.webp 480w, /assets/images/mars/servicios/mars-obra-civil-800.webp 800w, /assets/images/mars/servicios/mars-obra-civil-1200.webp 1200w',
    alt: 'Personal trabajando en una excavación y construcción civil.',
    width: 1200,
    height: 993,
    position: '50% 50%',
  },
  ingenieria: {
    src: '/assets/images/mars/servicios/mars-instalacion-tuberias-1200.webp',
    srcset:
      '/assets/images/mars/servicios/mars-instalacion-tuberias-480.webp 480w, /assets/images/mars/servicios/mars-instalacion-tuberias-800.webp 800w, /assets/images/mars/servicios/mars-instalacion-tuberias-1200.webp 1200w',
    alt: 'Tuberías industriales con válvulas y equipos de medición.',
    width: 1200,
    height: 675,
    position: '50% 50%',
  },
  transporte: {
    src: '/assets/images/mars/logistica/mars-transporte-estructura-1200.webp',
    srcset:
      '/assets/images/mars/logistica/mars-transporte-estructura-480.webp 480w, /assets/images/mars/logistica/mars-transporte-estructura-800.webp 800w, /assets/images/mars/logistica/mars-transporte-estructura-1200.webp 1200w',
    alt: 'Camión transportando una estructura metálica.',
    width: 1200,
    height: 900,
    position: '50% 50%',
  },
  estructuras: {
    src: '/assets/images/mars/metalmecanica/mars-estructuras-metalicas-1200.webp',
    srcset:
      '/assets/images/mars/metalmecanica/mars-estructuras-metalicas-480.webp 480w, /assets/images/mars/metalmecanica/mars-estructuras-metalicas-800.webp 800w, /assets/images/mars/metalmecanica/mars-estructuras-metalicas-1200.webp 1200w',
    alt: 'Cerchas y vigas de una estructura metálica a contraluz.',
    width: 1200,
    height: 785,
    position: '50% 50%',
  },
  inspeccion: {
    src: '/assets/images/mars/iso/mars-inspeccion-industrial-1086.webp',
    srcset:
      '/assets/images/mars/iso/mars-inspeccion-industrial-480.webp 480w, /assets/images/mars/iso/mars-inspeccion-industrial-800.webp 800w, /assets/images/mars/iso/mars-inspeccion-industrial-1086.webp 1086w',
    alt: 'Personal con casco revisando una instalación industrial.',
    width: 1086,
    height: 1448,
    position: '50% 55%',
  },
  cierre: {
    src: '/assets/images/mars/hero/mars-tanques-industriales-1535.webp',
    srcset:
      '/assets/images/mars/hero/mars-tanques-industriales-640.webp 640w, /assets/images/mars/hero/mars-tanques-industriales-960.webp 960w, /assets/images/mars/hero/mars-tanques-industriales-1535.webp 1535w',
    alt: 'Tanques industriales, tuberías y equipos en una instalación.',
    width: 1535,
    height: 1024,
    position: '60% 50%',
  },
};
