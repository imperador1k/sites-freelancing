import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiArrowRight, FiX } from 'react-icons/fi';
import LanguageSwitcher from './ui/LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

/**
 * High-End Responsive Navigation Header
 * Features scroll-reactive glassmorphism, bilingual language toggle,
 * and an ultra-smooth, lock-proof mobile menu overlay.
 */
export default function Navbar({ company, navLinks, whatsappUrl }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang } = useLanguage();

  const ctaLabel = lang === 'pt' ? 'Pedir Orçamento' : 'Request a Quote';
  const mobileCtaText = lang === 'pt' ? 'Pedir Orçamento Gratuito' : 'Request Free Quote (WhatsApp)';
  const navSectionTitle = lang === 'pt' ? 'Navegação' : 'Navigation';
  const mobileNotice = lang === 'pt'
    ? 'Atendimento rápido por WhatsApp e chamada telefónica.'
    : 'Quick response via WhatsApp and direct call.';

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
            ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-3 shadow-xs'
            : 'bg-cream/80 backdrop-blur-md border-b border-black/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Brand Logo with High Contrast */}
          <a href="#acasa" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 flex-shrink-0">
            <div className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-xs border border-black/5 flex-shrink-0">
              <img src={company.logo} alt={`${company.name} Logo`} className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0">
              <span className="font-heading font-black text-base sm:text-xl text-dark tracking-tight whitespace-nowrap block">
                {company.name} {company.titleHighlight && <span className="text-primary">{company.titleHighlight}</span>}
              </span>
              <span className="hidden sm:block text-[10px] tracking-[0.15em] xl:tracking-[0.2em] text-primary font-bold uppercase -mt-0.5 truncate max-w-[200px] xl:max-w-none">
                {company.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Links + Language Switcher + CTA (Prevent word wrap) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-7 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-dark/75 hover:text-primary transition-colors duration-300 relative group whitespace-nowrap flex-shrink-0"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Desktop Language Switcher */}
            <div className="flex-shrink-0">
              <LanguageSwitcher />
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-xs xl:text-sm font-semibold px-4 xl:px-5 py-2 xl:py-2.5 rounded-full transition-all duration-300 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 group whitespace-nowrap flex-shrink-0"
            >
              <span className="whitespace-nowrap">{ctaLabel}</span>
              <div className="w-5 h-5 xl:w-6 xl:h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                <FiMessageCircle className="text-xs" />
              </div>
            </a>
          </div>

          {/* Mobile Right Controls: Hamburger Button (Clean & Spacious) */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              aria-label="Abrir Menu de Navegação"
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col items-center justify-center w-11 h-11 rounded-xl bg-black/5 hover:bg-black/10 transition-colors p-2.5 gap-1.5 active:scale-95"
            >
              <span className="w-6 h-0.5 bg-dark rounded-full transition-transform" />
              <span className="w-4 h-0.5 bg-primary self-end rounded-full transition-transform" />
              <span className="w-6 h-0.5 bg-dark rounded-full transition-transform" />
            </button>
          </div>
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
            className="fixed inset-0 z-[100] h-[100dvh] w-screen bg-cream/98 backdrop-blur-2xl text-dark flex flex-col justify-between p-6 sm:p-8 lg:hidden overflow-hidden overscroll-none select-none"
          >
            {/* Top Bar with Brand, Language Switcher & Close Button */}
            <div className="flex items-center justify-between border-b border-black/10 pb-5 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-xs border border-black/5 flex-shrink-0">
                  <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-heading font-black text-lg text-dark tracking-tight">
                    {company.name} {company.titleHighlight && <span className="text-primary">{company.titleHighlight}</span>}
                  </span>
                  <span className="block text-[9px] tracking-[0.2em] text-primary font-bold uppercase">{company.tagline}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LanguageSwitcher />
                <button
                  type="button"
                  aria-label="Fechar Menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-11 h-11 rounded-full bg-black/5 hover:bg-black/10 active:scale-90 flex items-center justify-center text-dark transition-all"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Hidden-scrollbar Links Container */}
            <div className="flex flex-col gap-4 py-6 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden overscroll-contain my-auto">
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary">
                {navSectionTitle}
              </span>
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.href}
                  type="button"
                  variants={menuItemVariants}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left font-heading font-black text-2xl sm:text-3xl text-dark/90 hover:text-primary active:text-primary transition-colors flex items-center justify-between group py-1.5 cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-semibold text-dark/30 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    0{idx + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom Conversion Card & Contacts */}
            <motion.div variants={menuItemVariants} className="space-y-3 pt-5 border-t border-black/10 flex-shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm flex items-center justify-between shadow-xl shadow-primary/30 active:scale-98 transition-all"
              >
                <div className="flex items-center gap-3">
                  <FiMessageCircle className="text-lg" />
                  <span>{mobileCtaText}</span>
                </div>
                <FiArrowRight className="text-base" />
              </a>

              <p className="text-[11px] text-warm-gray text-center">
                {mobileNotice}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
