import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiArrowUp, FiCheckCircle } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

/**
 * High-End Bilingual Footer Component
 * Includes high-converting pre-footer CTA banner, structured contacts, and back-to-top interaction.
 */
export default function Footer({ company, contact, navLinks, services, footer, whatsappUrl }) {
  const { lang } = useLanguage();
  const isPt = lang === 'pt';

  const t = {
    badge: footer?.bannerBadge || (isPt ? 'Consulta Jurídica Confidencial' : 'Confidential Legal Consultation'),
    bannerTitle: footer?.bannerTitle || (isPt ? 'Precisa de apoio jurídico para a sua situação?' : 'Need dedicated legal counsel for your matter?'),
    bannerDesc: footer?.bannerDesc || (isPt
      ? 'Fale diretamente com o nosso escritório e obtenha aconselhamento jurídico dedicado, rigoroso e transparente em Vila Nova de Gaia.'
      : 'Contact our practice directly for dedicated, rigorous, and transparent legal counsel in Vila Nova de Gaia and Porto.'),
    whatsappBtn: isPt ? 'Falar no WhatsApp' : 'Chat on WhatsApp',
    callBtn: isPt ? 'Ligar Agora' : 'Call Now',
    trustBadge: footer?.trustBadge || (isPt ? 'Advocacia & Consultoria Jurídica em Gaia' : 'Law Firm & Legal Consultancy in Gaia'),
    navTitle: isPt ? 'Navegação' : 'Navigation',
    servicesTitle: isPt ? 'Áreas de Atuação' : 'Practice Areas',
    contactTitle: isPt ? 'Contactos' : 'Contact Us',
    topBtn: isPt ? 'Topo' : 'Top',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream/80 border-t border-black/8 pt-20 pb-12 text-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* ═══════════════ PRE-FOOTER CONVERSION BANNER ═══════════════ */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 mb-16 border border-black/8 shadow-xl shadow-black/5 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-primary font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">
              <FiCheckCircle className="text-sm" />
              <span>{t.badge}</span>
            </div>
            <h3 className="font-heading font-black text-3xl sm:text-4xl text-dark mb-3">
              {t.bannerTitle}
            </h3>
            <p className="text-warm-gray text-sm sm:text-base leading-relaxed">
              {t.bannerDesc}
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5 group text-sm active:scale-98"
            >
              <FiMessageCircle className="text-lg group-hover:rotate-12 transition-transform" />
              <span>{t.whatsappBtn}</span>
            </a>
            {contact?.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-3 bg-steel hover:bg-steel-dark/40 text-dark font-heading font-semibold px-6 py-3.5 rounded-full border border-black/5 transition-all duration-300 hover:-translate-y-0.5 text-sm active:scale-98"
              >
                <FiPhone className="text-base text-primary" />
                <span>{t.callBtn}</span>
              </a>
            )}
          </div>
        </div>

        {/* ═══════════════ MAIN FOOTER GRID ═══════════════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-xs border border-black/5 flex-shrink-0">
                <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-black text-xl text-dark tracking-tight">
                  {company.name} {company.titleHighlight && <span className="text-primary">{company.titleHighlight}</span>}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-primary font-bold uppercase -mt-0.5">{company.tagline}</span>
              </div>
            </div>

            <p className="text-warm-gray text-sm leading-relaxed max-w-sm">
              {company.slogan}
            </p>

            <div className="inline-flex items-center gap-2 bg-white border border-black/8 rounded-xl px-3.5 py-2 text-xs text-dark/75 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{t.trustBadge}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-heading font-bold text-dark text-xs uppercase tracking-[0.2em] mb-5">
              {t.navTitle}
            </h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-warm-gray hover:text-primary hover:translate-x-1 inline-block text-sm transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-bold text-dark text-xs uppercase tracking-[0.2em] mb-5">
              {t.servicesTitle}
            </h5>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service, i) => (
                <li key={i}>
                  <a
                    href="#servicos"
                    className="text-warm-gray hover:text-primary hover:translate-x-1 inline-block text-sm transition-all duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h5 className="font-heading font-bold text-dark text-xs uppercase tracking-[0.2em] mb-5">
              {t.contactTitle}
            </h5>
            <ul className="space-y-3 text-sm text-warm-gray">
              {contact?.phoneDisplay && (
                <li className="flex items-start gap-2.5">
                  <FiPhone className="text-primary mt-1 flex-shrink-0" />
                  <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                    {contact.phoneDisplay}
                  </a>
                </li>
              )}
              {contact?.email && (
                <li className="flex items-start gap-2.5">
                  <FiMail className="text-primary mt-1 flex-shrink-0" />
                  <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors break-all">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact?.address && (
                <li className="flex items-start gap-2.5">
                  <FiMapPin className="text-primary mt-1 flex-shrink-0" />
                  <span className="leading-snug">{contact.address}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ═══════════════ BOTTOM BAR ═══════════════ */}
        <div className="border-t border-black/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-gray text-xs text-center sm:text-left">
            {footer.copyright}
          </p>

          <div className="flex items-center gap-6">
            <span className="text-warm-gray/70 text-xs hidden sm:inline">
              {footer.tagline}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-warm-gray hover:text-primary transition-colors cursor-pointer group"
            >
              <span>{t.topBtn}</span>
              <div className="w-7 h-7 rounded-full bg-steel flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <FiArrowUp className="text-xs" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
