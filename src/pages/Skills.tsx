import {
  Code2, Smartphone, Database, Palette, GitBranch, Cloud,
} from 'lucide-react';

const categories = [
  {
    icon: Code2,
    title: 'Développement Web',
    color: 'from-sky-500 to-blue-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML5 / CSS3 / JAVASCRIPT', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
    ],
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    color: 'from-teal-500 to-emerald-500',
    skills: [
      { name: 'Android (Java)', level: 85 },
      { name: 'React Native', level: 80 },
      { name: 'Swift / iOS', level: 50 },
      { name: 'PWA', level: 88 },
    ],
  },
  {
    icon: Database,
    title: 'Backend & Bases de données',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'Firebase', level: 88 },
      { name: 'REST ', level: 80 },
    ],
  },
  {
    icon: Palette,
    title: 'Design & UX',
    color: 'from-rose-500 to-pink-500',
    skills: [
      { name: 'UI/UX Design', level: 78 },
      { name: 'Responsive Design', level: 92 },
      { name: 'Accessibilité', level: 80 },
    ],
  },
  {
    icon: GitBranch,
    title: 'Outils & DevOps',
    color: 'from-violet-500 to-indigo-500',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'CI/CD', level: 75 },
      { name: 'Testing (Jest, Vitest)', level: 78 },
    ],
  },
  {
    icon: Cloud,
    title: 'Déploiement & Hébergement',
    color: 'from-cyan-500 to-sky-500',
    skills: [
      { name: 'Vercel / Netlify / Cloudflare', level: 88 },
      { name: 'Cpanel / Linux', level: 75 },
      { name: 'Google Play Console', level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <div className="animate-fade-in pt-32">
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Compétences</span>
            <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl text-balance">
              Un large éventail technique
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Des technologies front-end aux applications mobiles en passant par le
              backend et le déploiement, je couvre l'ensemble du cycle de
              développement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon: Icon, title, color, skills }) => (
              <div key={title} className="card card-hover p-7">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <ul className="mt-5 space-y-4">
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-xs font-semibold text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
