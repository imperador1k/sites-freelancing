import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiArrowUp, FiCheckCircle } from 'react-icons/fi';

/**
 * High-End Footer Component
 * Includes high-converting pre-footer CTA banner, structured contacts, and back-to-top interaction.
 */
export default function Footer({ company, contact, navLinks, services, footer, whatsappUrl }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark border-t border-white/10 pt-20 pb-12 text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* ═══════════════ PRE-FOOTER CONVERSION BANNER ═══════════════ */}
        <div className="bg-gradient-to-br from-dark-lighter via-dark to-dark-lighter rounded-3xl p-8 sm:p-12 mb-16 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-primary font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">
              <FiCheckCircle className="text-sm" />
              <span>Orçamento Sem Compromisso</span>
            </div>
            <h3 className="font-heading font-black text-3xl sm:text-4xl text-white mb-3">
              Pronto para dar vida à sua obra?
            </h3>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed">
              Fale diretamente connosco e obtenha aconselhamento técnico personalizado e transparente para o seu projeto.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white font-heading font-bold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group text-sm"
            >
              <FiMessageCircle className="text-lg group-hover:rotate-12 transition-transform" />
              <span>Falar no WhatsApp</span>
            </a>
            {contact?.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold px-6 py-3.5 rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <FiPhone className="text-base text-primary" />
                <span>Ligar Agora</span>
              </a>
            )}
          </div>
        </div>

        {/* ═══════════════ MAIN FOOTER GRID ═══════════════ */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 shadow-sm flex-shrink-0">
                <img src={company.logo} alt={company.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-tight">
                  {company.name} {company.titleHighlight && <span className="text-primary">{company.titleHighlight}</span>}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-white/50 uppercase -mt-0.5">{company.tagline}</span>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed max-w-sm">
              {company.slogan}
            </p>

            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Empresa Especializada em Portugal</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-[0.2em] mb-5 text-primary">
              Navegação
            </h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white hover:translate-x-1 inline-block text-sm transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-[0.2em] mb-5 text-primary">
              Serviços
            </h5>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service, i) => (
                <li key={i}>
                  <a
                    href="#servicos"
                    className="text-white/50 hover:text-white hover:translate-x-1 inline-block text-sm transition-all duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div>
            <h5 className="font-heading font-bold text-white text-xs uppercase tracking-[0.2em] mb-5 text-primary">
              Contactos
            </h5>
            <ul className="space-y-3 text-sm text-white/60">
              {contact?.phoneDisplay && (
                <li className="flex items-start gap-2.5">
                  <FiPhone className="text-primary mt-1 flex-shrink-0" />
                  <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                    {contact.phoneDisplay}
                  </a>
                </li>
              )}
              {contact?.email && (
                <li className="flex items-start gap-2.5">
                  <FiMail className="text-primary mt-1 flex-shrink-0" />
                  <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors break-all">
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
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            {footer.copyright}
          </p>

          <div className="flex items-center gap-6">
            <span className="text-white/30 text-xs hidden sm:inline">
              {footer.tagline}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-primary transition-colors cursor-pointer group"
            >
              <span>Topo</span>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <FiArrowUp className="text-xs" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
