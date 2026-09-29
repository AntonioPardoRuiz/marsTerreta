export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  capabilities: string[];
  image?: string;
  route: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  location?: string;
}
export interface Certification {
  code: string;
  title: string;
  description: string;
}
export interface StrategicAlliance {
  name: string;
  logo: string;
}
export interface PageMeta {
  title: string;
  description: string;
}
