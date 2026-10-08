import { Smartphone, Calendar, Tag, ExternalLink, Globe } from 'lucide-react';

type Status = 'published' | 'coming-soon';

interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Site Web' | 'Application Web' | 'Application Mobile' | 'Application Desktop';
  platforms: string[];
  date: string;
  url?: string;
  technologies: string[];
  playStoreUrl?: string;
  status: Status;
}

const projects: Project[] = [
  {
    id: 'mia-burundi',
    name: 'MIA Burundi',
    tagline: 'La plateforme éducative pour apprendre et progresser',
    description:
      "Plateforme éducative réunissant cours, ressources pédagogiques et outils d'apprentissage pour les élèves et étudiants. Un espace centralisé pour réviser, s'entraîner et suivre sa progression.",
    category: 'Application Web',
    platforms: ['Web', 'Mobile'],
    date: '2023',
    url: 'https://miaburundi.org',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'published',
  },
  {
    id: 'ku-meza',
    name: 'Ku Meza',
    tagline: 'La solution de gestion pour restaurants',
    description:
      'Plateforme de gestion pour restaurants : prise de commandes, suivi des tables, gestion du menu et des stocks. Conçue pour simplifier le quotidien des équipes en salle comme en cuisine.',
    category: 'Application Web',
    platforms: ['Web', 'Mobile', 'Desktop'],
    date: '2026',
    url: 'https://ku-meza.com',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Java', 'Rust'],
    status: 'published',
  },
  {
    id: 'burundi-temps-reel',
    name: 'Burundi en temps réel',
    tagline: "Développement d'applications, formation & télécoms",
    description:
      "Société spécialisée dans le développement d'applications web, mobiles et desktop, la formation et les services réseau & télécom. Une offre complète pour digitaliser votre activité.",
    category: 'Site Web',
    platforms: ['Web'],
    date: '2024',
    url: 'https://burundientempsreel.com',
    technologies: ['React', 'Node.js', 'Réseau & Télécom'],
    status: 'coming-soon',
  },
  {
    id: 'burundi-paradise',
    name: 'Burundi Paradise',
    tagline: 'Média dédié à la photographie et aux shootings',
    description:
      'Plateforme média spécialisée dans la photographie : galeries, reportages de shootings et mise en relation avec des photographes professionnels. Un espace dédié aux créatifs et à leurs œuvres.',
    category: 'Site Web',
    platforms: ['Web'],
    date: '2024',
    url: 'https://paradise.bi',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    status: 'published',
  },
  {
    id: 'cabinet-hatha',
    name: 'Cabinet HATHA',
    tagline: 'Cabinet d’avocats — conseil et défense juridique',
    description:
      "Site vitrine d'un cabinet d'avocats présentant ses domaines d'expertise, son équipe et ses services juridiques. Un espace clair pour présenter les prestations et faciliter la prise de contact.",
    category: 'Site Web',
    platforms: ['Web'],
    date: '2026',
    url: 'https://eac-advisor.org/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    status: 'published',
  },
  {
    id: 'ipat-cosmos',
    name: 'IPAT',
    tagline: "Promotion de l'attractivité des territoires",
    description:
      "Initiative pour la Promotion de l'Attractivité des Territoires : une plateforme qui explore le patrimoine naturel, culturel et mixte dans le contexte de la promotion de l'attractivité territoriale. Voyages, tourisme, culture, hôtellerie et arts créatifs.",
    category: 'Site Web',
    platforms: ['Web'],
    date: '2025',
    url: 'https://ipatcosmos.com',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    status: 'published',
  },
];


export default function Projects() {
  return (
    <div className="animate-fade-in pt-32">
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">
              <Smartphone size={14} /> Applications &amp; Projets
            </span>
            <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl text-balance">
              Mes réalisations
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Une sélection d'applications et de sites web que j'ai conçus et
              développés.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="card card-hover overflow-hidden flex flex-col"
              >
                {/* Visual header */}
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-sky-500/20 blur-2xl" />
                  <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-teal-500/20 blur-2xl" />
                  <div className="relative flex h-full items-center justify-center">
                    <span className="font-display text-2xl font-bold text-white/90">
                      {project.name}
                    </span>
                  </div>

                  {project.status === 'coming-soon' && (
                    <span className="absolute right-3 top-3 rounded-full bg-amber-400/90 px-3 py-1 text-xs font-semibold text-amber-900">
                      Bientôt disponible
                    </span>
                  )}
                  {project.status === 'published' && (
                    <span className="absolute right-3 top-3 rounded-full bg-teal-400/90 px-3 py-1 text-xs font-semibold text-teal-900">
                      En ligne
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Tag size={13} /> {project.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} /> {project.date}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-slate-900">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-teal-600">
                    {project.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
                      >
                        <Globe size={15} /> Voir le site
                      </a>
                    )}
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 transition-colors hover:text-sky-700"
                      >
                        <ExternalLink size={15} /> Google Play
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-400">
            Certaines applications seront bientôt disponibles sur le Google Play Store.
          </p>
        </div>
      </section>
    </div>
  );
}