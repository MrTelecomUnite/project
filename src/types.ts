export type PageId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'services'
  | 'contact'
  | 'privacy';

export interface PageMeta {
  id: PageId;
  label: string;
}

export const PAGES: PageMeta[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Applications' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];
