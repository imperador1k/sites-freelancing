import { FiMessageCircle } from 'react-icons/fi';

/**
 * Sticky floating WhatsApp button for direct lead conversion
 */
export default function FloatingWhatsApp({ whatsappUrl }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
    >
      <FiMessageCircle className="text-2xl" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-semibold pl-0 group-hover:pl-2">
        Orçamento Rápido
      </span>
    </a>
  );
}
