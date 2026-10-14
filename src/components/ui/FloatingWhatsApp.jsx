/**
 * Sticky floating WhatsApp button with live brand avatar
 */
export default function FloatingWhatsApp({ whatsappUrl, company }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white pl-2 pr-4 py-2 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 group border-2 border-white/20"
    >
      {/* Brand WhatsApp Avatar with Online Badge */}
      <div className="relative flex-shrink-0">
        <img
          src={company?.logo || '/image.png'}
          alt={company?.name || 'WhatsApp'}
          className="w-9 h-9 rounded-full object-cover bg-white p-0.5 border border-white/40 shadow-sm"
        />
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#25D366] rounded-full animate-pulse" />
      </div>

      {/* Direct Conversion Label */}
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-semibold text-white/80 leading-none">WhatsApp</span>
        <span className="text-xs font-bold text-white leading-tight">Orçamento Rápido</span>
      </div>
    </a>
  );
}
