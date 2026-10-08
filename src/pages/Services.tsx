import { Check, Globe, Smartphone, Monitor, Wrench, Search } from 'lucide-react';
import type { PageId } from '@/types';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
}

const services = [
  {
    icon: Globe,
    title: 'Sites Web',
    desc: 'Sites vitrines, portfolios et landing pages responsives, optimisés SEO et rapides.',
    features: ['Design sur-mesure', 'Responsive mobile & desktop', 'Optimisation SEO', 'Hébergement & domaine'],
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    desc: 'Applications Android et iOS natives ou hybrides, du prototype au déploiement.',
    features: ['Android (Kotlin/Java)', 'iOS (Swift)', 'React Native', 'Publication Google Play'],
  },
  {
    icon: Monitor,
    title: 'Applications Desktop',
    desc: 'Logiciels de bureau performants pour Windows, macOS et Linux, natifs ou cross-platform.',
    features: ['Windows / macOS / Linux', 'Rust', 'Interface native', 'Installateurs & mises à jour'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Évolution',
    desc: 'Correction de bugs, ajouts de fonctionnalités et maintenance continue de vos projets.',
    features: ['Correction de bugs', 'Nouvelles fonctionnalités', 'Mises à jour techniques', 'Support technique'],
  },
  {
    icon: Search,
    title: 'Conseil & Audit',
    desc: "Analyse de votre existant, recommandations techniques et plan d'action.",
    features: ['Audit de code', 'Audit de performance', 'Recommandations SEO', 'Architecture & conseils'],
  },
];

const process = [
  { step: '01', title: 'Échange & Cadrage', desc: 'On définit ensemble vos besoins, vos objectifs et le périmètre du projet.' },
  { step: '02', title: 'Design & Prototype', desc: "Je propose une maquette interactive pour valider l'orientation visuelle." },
  { step: '03', title: 'Développement', desc: "Je code avec des points réguliers pour suivre l'avancement." },
  { step: '04', title: 'Livraison & Suivi', desc: 'Mise en ligne, formation et support post-lancement.' },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="animate-fade-in pt-32">
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Services</span>
            <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl text-balance">
              Comment je peux vous aider
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Des services de développement complets, adaptés à vos besoins et à
              votre budget. Voici ce que je propose.
            </p>
          </div>

          {/* Services grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} className="card card-hover p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 text-white shadow-lg shadow-sky-500/20">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                        <Check size={13} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Ma méthode</span>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Un process simple et transparent
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="relative card p-7">
                <span className="font-display text-4xl font-bold text-slate-200">{step}</span>
                <h3 className="mt-2 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="card p-10 text-center sm:p-14">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Prêt à démarrer ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Parlons de votre projet. La première discussion est gratuite et sans engagement.
            </p>
            <button onClick={() => onNavigate('contact')} className="mt-7 btn-primary">
              Demander un devis gratuit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}