import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiArrowRight, FiX } from 'react-icons/fi';

/**
 * High-End Responsive Navigation Header
 * Dark glassmorphism with high contrast typography ensures crystal-clear readability
 * over any background (dark heroes, bright photos, and light sections).
 */
export default function Navbar({ company, navLinks, whatsappUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Robust scroll-lock to eliminate mobile scroll jumping or double scrollbars
  useEffect(() => {
    if (isMenuOpen) {
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      return () => {
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overflow = originalBodyOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const menuContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, when: 'beforeChildren', staggerChildren: 0.06 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
            : 'bg-dark/60 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Brand Logo with High Contrast */}
          <a href="#acasa" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-white/10 p-1">
              <img src={company.logo} alt={`${company.name} Logo`} className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-heading font-black text-xl text-white tracking-tight drop-shadow-sm">{company.name}</span>
              <span className="block text-[10px] tracking-[0.2em] text-primary font-bold uppercase -mt-0.5">{company.tagline}</span>
            </div>
          </a>

          {/* Desktop Links with Crisp Contrast */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-white/85 hover:text-primary transition-colors duration-300 relative group drop-shadow-sm"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 group"
            >
              <span>Pedir Orçamento</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <FiMessageCircle className="text-xs" />
              </div>
            </a>
          </div>

          {/* Mobile Hamburger Morph Button */}
          <button
            type="button"
            aria-label="Abrir Menu de Navegação"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-white/10 hover:bg-white/15 transition-colors p-2.5 gap-1.5 active:scale-95"
          >
            <span className="w-6 h-0.5 bg-white rounded-full transition-transform" />
            <span className="w-4 h-0.5 bg-primary self-end rounded-full transition-transform" />
            <span className="w-6 h-0.5 bg-white rounded-full transition-transform" />
          </button>
        </div>
      </motion.nav>

      {/* ═══════════════════ BUG-FREE FULL-SCREEN MOBILE MENU OVERLAY ═══════════════════ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[100] h-[100dvh] w-screen bg-dark/98 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-hidden overscroll-none select-none"
          >
            {/* Top Bar with Brand & Close Button */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center overflow-hidden rounded-lg bg-white/10 p-1">
                  <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-heading font-black text-lg text-white tracking-tight">{company.name}</span>
                  <span className="block text-[9px] tracking-[0.2em] text-primary font-bold uppercase">{company.tagline}</span>
                </div>
              </div>

              <button
                type="button"
                aria-label="Fechar Menu"
                onClick={() => setIsMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 flex items-center justify-center text-white transition-all"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Hidden-scrollbar Links Container */}
            <div className="flex flex-col gap-4 py-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain my-auto">
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary">
                Navegação
              </span>
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.href}
                  type="button"
                  variants={menuItemVariants}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left font-heading font-black text-2xl sm:text-3xl text-white/90 hover:text-primary active:text-primary transition-colors flex items-center justify-between group py-1.5 cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-semibold text-white/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    0{idx + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom Conversion Card & Contacts */}
            <motion.div variants={menuItemVariants} className="space-y-3 pt-5 border-t border-white/10 flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm flex items-center justify-between shadow-xl shadow-primary/30 active:scale-98 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FiMessageCircle className="text-lg" />
                  <span>Pedir Orçamento Gratuito</span>
                </div>
                <FiArrowRight className="text-base" />
              </a>

              <p className="text-[11px] text-white/50 text-center">
                Atendimento rápido por WhatsApp e chamada telefónica.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
