import { Code2, Mail, Github } from 'lucide-react';
import { PAGES, type PageId } from '@/types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 font-display font-bold text-slate-900"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sky-400">
                <Code2 size={20} />
              </span>
              <span className="text-lg">Mr Telecom Dev</span>
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              Développeur web &amp; applications mobiles et de bureau indépendant. Je conçois
              des sites et des applications rapides, élégants et fiables avec des
              technologies modernes.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { icon: Github, label: 'Mr Telecom unite' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="https://github.com/MrTelecomUnite"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-900"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Navigation</h4>
            <ul className="mt-4 space-y-2.5">
              {PAGES.map((page) => (
                <li key={page.id}>
                  <button
                    onClick={() => onNavigate(page.id)}
                    className="text-sm text-slate-500 transition-colors hover:text-teal-600"
                  >
                    {page.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="mailto:telecomtelesphore@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-teal-600"
                >
                  <Mail size={16} /> telecomtelesphore@gmail.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-sm text-slate-500 transition-colors hover:text-teal-600"
                >
                  Politique de confidentialité
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {year} Mr Telecom Dev. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-400">
            Conçu avec React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
