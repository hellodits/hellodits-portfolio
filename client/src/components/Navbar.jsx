import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="grid grid-cols-3 items-center h-20 gap-4">
            {/* Logo - Left */}
            <div className="flex justify-start">
              <Link 
                to="/" 
                className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity group"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}logo.png`}
                  alt="hellodits logo" 
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform"
                />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
                  hellodits
                </span>
              </Link>
            </div>

            {/* Menu - Center (Desktop) */}
            <div className="hidden md:flex items-center justify-center gap-8">
              {menuItems.map(({ path, label }) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`px-4 py-2 font-medium transition-all relative ${
                    isActive(path) 
                      ? 'text-primary' 
                      : 'text-slate-700 hover:text-primary'
                  }`}
                >
                  {label}
                  {isActive(path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-primary rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* CTA - Right (Desktop) */}
            <div className="hidden md:flex justify-end">
              <a 
                href="/CV-hellodits.pdf" 
                download
                className="border-2 border-blue-600 text-blue-600 px-7 py-2.5 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Download CV
              </a>
            </div>

            {/* Hamburger Button - Right (Mobile) */}
            <div className="md:hidden flex justify-end col-span-2">
              <button 
                className="relative w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-5 flex flex-col justify-between">
                    {/* Top line */}
                    <span 
                      className={`block h-0.5 w-full bg-slate-700 rounded-full transition-all duration-300 ease-in-out ${
                        isOpen ? 'rotate-45 translate-y-2' : ''
                      }`}
                    ></span>
                    {/* Middle line */}
                    <span 
                      className={`block h-0.5 w-full bg-slate-700 rounded-full transition-all duration-300 ease-in-out ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                      }`}
                    ></span>
                    {/* Bottom line */}
                    <span 
                      className={`block h-0.5 w-full bg-slate-700 rounded-full transition-all duration-300 ease-in-out ${
                        isOpen ? '-rotate-45 -translate-y-2' : ''
                      }`}
                    ></span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-20 left-0 right-0 bg-white z-40 md:hidden shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom px-6 py-6">
          <div className="space-y-2">
            {menuItems.map(({ path, label }) => (
              <Link 
                key={path}
                to={path} 
                className={`block py-4 px-5 rounded-xl font-semibold transition-all ${
                  isActive(path) 
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg' 
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <a 
              href="/cv.pdf"
              download
              className="block mt-4 py-4 px-5 border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-center hover:bg-blue-600 hover:text-white transition-all"
              onClick={() => setIsOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
