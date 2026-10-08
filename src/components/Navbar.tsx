import { useEffect, useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { PAGES, type PageId } from '@/types';

interface NavbarProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
}

export default function Navbar({ current, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-sm border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 font-display font-bold text-slate-900 transition-opacity hover:opacity-80"
          aria-label="Retour à l'accueil"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sky-400">
            <Code2 size={20} />
          </span>
          <span className="text-lg">Mr Telecom Dev</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {PAGES.map((page) => (
            <li key={page.id}>
              <button
                onClick={() => handleNav(page.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  current === page.id
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {page.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button onClick={() => handleNav('contact')} className="btn-primary">
            Démarrer un projet
          </button>
        </div>

        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-md">
          <ul className="container-page py-4 space-y-1">
            {PAGES.map((page) => (
              <li key={page.id}>
                <button
                  onClick={() => handleNav(page.id)}
                  className={`w-full text-left rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    current === page.id
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {page.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="btn-primary w-full justify-center"
              >
                Démarrer un projet
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
