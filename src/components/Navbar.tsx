import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about', sectionId: 'portfolio-about' },
  { name: 'Research', path: '/research', sectionId: 'portfolio-research' },
  { name: 'Projects', path: '/projects', sectionId: 'portfolio-projects' },
  { name: 'Experience', path: '/experience', sectionId: 'portfolio-experience' },
  // { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact', sectionId: 'portfolio-contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePath, setActivePath] = useState(location.pathname);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname !== '/') {
        return;
      }

      let nextActivePath = '/';

      navLinks.forEach((link) => {
        if (!link.sectionId) {
          return;
        }

        const section = document.getElementById(link.sectionId);
        if (!section) {
          return;
        }

        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom > 140) {
          nextActivePath = link.path;
        }
      });

      setActivePath(nextActivePath);
    };

    if (location.pathname !== '/') {
      setActivePath(location.pathname);
    } else {
      handleScroll();
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [location.pathname]);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActivePath('/');
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" onClick={scrollToTop} className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-outfit">
              Saurav Shyju
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={() =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activePath === link.path
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300'
                      : 'text-text-light-secondary hover:bg-zinc-100 hover:text-text-light-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-light-secondary hover:text-text-light-primary dark:text-slate-400 dark:hover:text-slate-200 focus:outline-none transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-light-secondary hover:text-text-light-primary dark:text-slate-400 dark:hover:text-slate-200 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-xl border-t border-zinc-100 dark:border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={() =>
                  `block px-3 py-2 rounded-md text-base font-medium ${activePath === link.path
                    ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                    : 'text-text-light-secondary hover:bg-zinc-50 hover:text-text-light-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
