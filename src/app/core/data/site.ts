import { Certification, Project, Service, StrategicAlliance } from './models';
// Solo contenido facilitado en el briefing. Pendiente de cotejar con el brochure.
export const site = {
  name: 'Construcciones MARS, C.A.',
  rif: 'J-30047078-4',
  location: 'Maracaibo, Estado Zulia',
  email: '',
  phone: '',
  origin: '',
  logo: '/assets/images/mars/logo/mars-logo.webp',
  logoDark: '/assets/images/mars/logo/mars-logo.webp',
  socialImage: '/assets/images/mars/logo/mars-open-graph.webp',
};
export const navigation = [
  { path: '/', label: 'Inicio' },
  { path: '/nosotros', label: 'Nosotros' },
  { path: '/servicios', label: 'Servicios' },
  { path: '/gerencia-proyectos', label: 'Gerencia de proyectos' },
  { path: '/gestion-iso', label: 'Gestión ISO' },
  { path: '/proyectos', label: 'Proyectos' },
  { path: '/contacto', label: 'Contacto' },
];
export const services: Service[] = [
  {
    id: 'industriales',
    number: '01',
    title: 'Servicios industriales',
    description: 'Ingeniería, procura y construcción para las necesidades del sector industrial.',
    route: '/servicios',
    capabilities: [
      'Construcción civil e industrial',
      'Suministro y procura',
      'Alquiler de equipos',
      'Electricidad, plomería y albañilería',
      'Preparación y acondicionamiento de terrenos',
      'Excavaciones y pavimentación',
      'Aceras, brocales, vialidad y señalización',
      'Ingeniería, procura y construcción',
    ],
  },
  {
    id: 'gerencia',
    number: '02',
    title: 'Gerencia de proyectos',
    description: 'Planificación, coordinación y seguimiento en cada etapa de tu proyecto.',
    route: '/gerencia-proyectos',
    capabilities: [
      'Planificación y coordinación',
      'Seguimiento y gestión de recursos',
      'Personal profesional y técnico',
      'Ingeniería multidisciplinaria',
      'Administración de proyectos',
      'Alquiler de equipos',
    ],
  },
  {
    id: 'iso',
    number: '03',
    title: 'Gestión ISO y certificaciones',
    description: 'Consultoría y acompañamiento para desarrollar tus sistemas de gestión.',
    route: '/gestion-iso',
    capabilities: [
      'Consultoría y auditorías',
      'Documentación e implementación',
      'Preparación para certificación',
      'Seguridad y salud laboral',
      'Gestión ambiental',
      'Evaluación de riesgos',
    ],
  },
  {
    id: 'logistica',
    number: '04',
    title: 'Servicios logísticos',
    description: 'Suministro, procura y equipos como parte de una solución integral.',
    route: '/servicios',
    capabilities: ['Suministro y procura', 'Alquiler de equipos'],
  },
  {
    id: 'metalmecanica',
    number: '05',
    title: 'Construcción metalmecánica',
    description: 'Fabricación, montaje y mantenimiento de estructuras para la industria.',
    route: '/servicios',
    capabilities: [
      'Estructuras metálicas',
      'Fabricación y montaje',
      'Soldadura y mantenimiento',
      'Oleoductos y gasoductos',
      'Tendidos de líneas',
      'Tanques atmosféricos',
      'Preparación de superficies y recubrimientos',
    ],
  },
  {
    id: 'capacitacion',
    number: '06',
    title: 'Capacitación',
    description: 'Conocimiento aplicado para formar equipos preparados para la industria.',
    route: '/gestion-iso',
    capabilities: [
      'Interpretación e implementación de normas ISO',
      'Indicadores de gestión',
      'Formación de auditores internos',
      'Determinación y control de riesgos',
      'Metodología documental',
      'Preparación para auditorías de certificación',
    ],
  },
];
export const certifications: Certification[] = [
  {
    code: '9001',
    title: 'Gestión de la calidad',
    description:
      'Acompañamiento en la organización y mejora de los sistemas de gestión de la calidad.',
  },
  {
    code: '14001',
    title: 'Gestión ambiental',
    description:
      'Consultoría para integrar la gestión ambiental en los procesos de la organización.',
  },
  {
    code: '45001',
    title: 'Seguridad y salud laboral',
    description: 'Apoyo a la gestión de riesgos y a la seguridad y salud en el trabajo.',
  },
];
export const projects: Project[] = [];
export const alliances: StrategicAlliance[] = [
  {
    name: 'Engineering Maintenance Solutions Inc. (EMSOL)',
    logo: '/assets/images/mars/alianzas/mars-alianza-emsol.webp',
  },
  {
    name: 'Dunlop',
    logo: '/assets/images/mars/alianzas/mars-alianza-dunlop.webp',
  },
  {
    name: 'Geoconsult, C.A.',
    logo: '/assets/images/mars/alianzas/mars-alianza-geoconsult.webp',
  },
  {
    name: 'OPLANCO, C.A.',
    logo: '/assets/images/mars/alianzas/mars-alianza-oplanco.webp',
  },
  {
    name: 'Inteligencia Corporativa, C.A.',
    logo: '/assets/images/mars/alianzas/mars-alianza-inteligencia-corporativa.webp',
  },
  {
    name: 'Molecular de Occidente, C.A.',
    logo: '/assets/images/mars/alianzas/mars-alianza-molecular-occidente.webp',
  },
  {
    name: 'RTR PROY — Proyectos + Construcción',
    logo: '/assets/images/mars/alianzas/mars-alianza-rtr-proy.webp',
  },
  {
    name: 'PolySpec / Thiokol',
    logo: '/assets/images/mars/alianzas/mars-alianza-polyspec-thiokol.webp',
  },
  {
    name: 'Importaciones RML',
    logo: '/assets/images/mars/alianzas/mars-alianza-importaciones-rml.webp',
  },
];
