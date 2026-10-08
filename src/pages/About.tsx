import { Rocket, Users, Award, Heart } from 'lucide-react';
import type { PageId } from '@/types';

interface AboutProps {
  onNavigate: (page: PageId) => void;
}

const values = [
  {
    icon: Rocket,
    title: 'Innovation',
    desc: "J'utilise les technologies les plus récentes pour des produits durables et performants.",
  },
  {
    icon: Users,
    title: 'Proximité',
    desc: 'Communication claire, écoute active et accompagnement à chaque étape du projet.',
  },
  {
    icon: Award,
    title: 'Qualité',
    desc: 'Code propre, tests rigoureux et attention aux détails pour un résultat fiable.',
  },
  {
    icon: Heart,
    title: 'Passion',
    desc: "Chaque projet est traité avec l'enthousiasme d'un artisan qui aime son métier.",
  },
];

const techStack = ['React','JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Android', 'Java', 'Swift', 'MySql',"Firebase",".."];

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="animate-fade-in pt-32">
      {/* Intro */}
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">À propos</span>
            <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl text-balance">
              Un développeur passionné au service de vos idées
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Mr Telecom Dev est l'activité de développement indépendant d'un
              passionné du web et du mobile et de bureau. Mon objectif : transformer vos idées
              en applications concrètes, utiles et agréables à utiliser. Je travaille
              seul ou en collaboration, toujours avec le même souci du détail.
            </p>
          </div>
        </div>
      </section>

      {/* Activity presentation */}
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Mon activité</h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                J'accompagne les particuliers, indépendants et petites entreprises
                dans la création de leur présence digitale. Du simple site vitrine à
                l'application mobile complexe, j'adapte ma méthode à vos besoins et
                à votre budget.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Chaque projet commence par une phase d'écoute et de conseil, suivie
                d'un développement transparent avec des points réguliers. Vous
                gardez le contrôle et la visibilité à chaque étape.
              </p>
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  Technologies utilisées
                </h3>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="card card-hover p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="card p-10 text-center sm:p-14">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Envie d'en savoir plus ?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-slate-600">
              Découvrez mes compétences en détail ou explorez mes applications.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button onClick={() => onNavigate('skills')} className="btn-primary">
                Voir mes compétences
              </button>
              <button onClick={() => onNavigate('projects')} className="btn-secondary">
                Mes applications
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
