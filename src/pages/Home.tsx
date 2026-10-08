import { ArrowRight, Sparkles, Smartphone, Globe, Zap, Monitor } from 'lucide-react';
import type { PageId } from '@/types';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const highlights = [
  { icon: Globe, title: 'Sites Web', desc: 'Rapides, responsives et optimisés SEO.' },
  { icon: Smartphone, title: 'Applications Mobiles', desc: 'Android & iOS natifs ou hybrides.' },
  {
    icon: Monitor,
    title: 'Applications de bureau',
    desc: 'Windows, macOS et Linux — natifs ou cross-platform.',
  },

  { icon: Zap, title: 'Performance', desc: 'Code propre, tests rigoureux, livraison fiable.' },
];

const stats = [
  { value: '5+', label: "Années d'expérience" },
  { value: '5+', label: 'Projets livrés' },
  { value: '100%', label: 'Clients satisfaits' },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="container-page relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow animate-fade-up">
              <Sparkles size={14} /> Disponible pour vos projets
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 text-balance animate-fade-up sm:text-5xl lg:text-6xl">
              Développeur Web &amp;{' '}
              <span className="bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                Applications Mobiles
              </span>{' '}
              &amp;{' '}
              <span className="bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
                de bureau
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600 animate-fade-up-delay">
              Je conçois et développe des sites web modernes et des applications
              mobiles et  de bureau performantes avec React, TypeScript et des technologies de
              pointe. Du concept au déploiement.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 animate-fade-up-delay sm:flex-row">
              <button onClick={() => onNavigate('projects')} className="btn-primary">
                Voir mes applications <ArrowRight size={17} />
              </button>
              <button onClick={() => onNavigate('contact')} className="btn-secondary">
                Me contacter
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 animate-fade-up-delay">
            {stats.map((s) => (
              <div key={s.label} className="card text-center py-6">
                <div className="text-3xl font-bold text-slate-900">{s.value}</div>
                <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Ce que je fais</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Des solutions digitales sur-mesure
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4 grid-cols-2">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card card-hover p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-500/20">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
                Un projet en tête ? Donnons-lui vie.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-slate-300">
                Que ce soit un site vitrine, une application mobile ou une refonte
                complète, je vous accompagne de A à Z.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Discutons de votre projet <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
