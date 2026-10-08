import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import type { PageId } from '@/types';

const App: React.FC = () => {
  const [page, setPage] = useState<PageId>('home');

  const navigate = (next: PageId) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title =
      page === 'home'
        ? 'Mr Telecom Dev — Développeur Web & Applications Mobiles & Applications de bureau'
        : `${PAGES_TITLE[page]} — Mr Telecom Dev`;
  }, [page]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar current={page} onNavigate={navigate} />
      <main className="flex-1">
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About onNavigate={navigate} />}
        {page === 'skills' && <Skills />}
        {page === 'projects' && <Projects />}
        {page === 'services' && <Services onNavigate={navigate} />}
        {page === 'contact' && <Contact />}
        {page === 'privacy' && <Privacy onNavigate={navigate} />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

const PAGES_TITLE: Record<PageId, string> = {
  home: 'Accueil',
  about: 'À propos',
  skills: 'Compétences',
  projects: 'Applications',
  services: 'Services',
  contact: 'Contact',
  privacy: 'Politique de confidentialité',
};

export default App;
