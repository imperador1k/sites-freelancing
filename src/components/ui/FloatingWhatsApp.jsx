import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiChevronRight } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Interactive WhatsApp Chatbot Widget
 * - Circular floating button with clean static design and official WhatsApp icon.
 * - Dismissible floating greeting balloon (speech bubble) with official WhatsApp icon.
 * - Interactive AI Assistant modal with simulated conversation, quick-select chips,
 *   and direct input that redirects to WhatsApp with customized prompt.
 */
export default function FloatingWhatsApp({ whatsappUrl, company }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { lang } = useLanguage();
  const isPt = lang === 'pt';

  // Base WhatsApp URL (e.g. https://wa.me/351912345678)
  const baseWaUrl = whatsappUrl ? whatsappUrl.split('?')[0] : 'https://wa.me/351912345678';

  // Display greeting bubble after 2.8 seconds on page
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const t = {
    bubbleTitle: isPt ? 'Precisa de Ajuda?' : 'Need Assistance?',
    bubbleText: isPt
      ? `Olá! Fale com a equipa da ${company?.name || 'empresa'} no WhatsApp.`
      : `Hello! Chat with ${company?.name || 'our team'} on WhatsApp.`,
    onlineStatus: isPt ? 'Online agora · Resposta rápida' : 'Online now · Quick response',
    aiGreeting: company?.aiGreeting || (isPt
      ? `Olá! 👋 Sou o assistente virtual da ${company?.name || 'nossa equipa'}. Como podemos ajudar o seu projeto hoje?`
      : `Hello! 👋 I am the virtual assistant for ${company?.name || 'our team'}. How can we assist you today?`),
    quickOptions: company?.whatsappOptions || (isPt
      ? [
          { label: '📋 Pedir Orçamento Gratuito', msg: 'Olá! Gostaria de pedir um orçamento gratuito para um projeto.' },
          { label: '⏱️ Consultar Prazos & Valores', msg: 'Olá! Gostaria de saber prazos estimados e condições de pagamento.' },
          { label: '💬 Falar com um Especialista', msg: 'Olá! Gostaria de esclarecer dúvidas sobre os vossos serviços.' },
        ]
      : [
          { label: '📋 Request Free Quote', msg: 'Hello! I would like to request a free quote for a project.' },
          { label: '⏱️ Check Timelines & Rates', msg: 'Hello! I would like to check estimated timelines and terms.' },
          { label: '💬 Speak with an Expert', msg: 'Hello! I have some questions about your services.' },
        ]),
    inputPlaceholder: isPt ? 'Escreva a sua mensagem...' : 'Type your message...',
    chatDirectBtn: isPt ? 'Abrir no WhatsApp' : 'Open in WhatsApp',
  };

  const handleSendCustomMessage = (e) => {
    e.preventDefault();
    const message = userInput.trim() || t.quickOptions[0].msg;
    const targetUrl = `${baseWaUrl}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setUserInput('');
    setIsOpen(false);
  };

  const handleSelectOption = (msg) => {
    const targetUrl = `${baseWaUrl}?text=${encodeURIComponent(msg)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <aside aria-label="Suporte WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* ═══════════════ INTERACTIVE AI CHAT MODAL ═══════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[340px] sm:w-[360px] max-w-[calc(100vw-2rem)] rounded-3xl bg-white shadow-2xl border border-black/8 overflow-hidden flex flex-col text-dark"
          >
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-[#128C7E] to-[#075E54] text-white p-4 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white p-1 overflow-hidden shadow-xs flex items-center justify-center">
                    <img
                      src={company?.logo || '/logo.png'}
                      alt={company?.name || 'WhatsApp'}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#075E54] rounded-full" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm leading-tight text-white flex items-center gap-1.5">
                    {company?.name || 'Assistente'}
                    <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full font-medium">AI Bot</span>
                  </h4>
                  <span className="text-[11px] text-white/80 block mt-0.5">{t.onlineStatus}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-colors"
                aria-label="Fechar Chat"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Chat Body (Conversation area) */}
            <div className="p-4 bg-[#F8F9FA] space-y-3.5 max-h-[320px] overflow-y-auto">
              <div className="text-center">
                <span className="text-[10px] text-warm-gray bg-black/5 px-2.5 py-1 rounded-full font-medium uppercase tracking-wider">
                  {isPt ? 'Hoje' : 'Today'}
                </span>
              </div>

              {/* Incoming Bot Message */}
              <div className="flex items-start gap-2 max-w-[90%]">
                <div className="w-7 h-7 rounded-full bg-[#128C7E] text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold shadow-xs">
                  AI
                </div>
                <div className="bg-white p-3.5 rounded-2xl rounded-tl-xs shadow-xs border border-black/5 text-xs text-dark/90 leading-relaxed">
                  {t.aiGreeting}
                </div>
              </div>

              {/* Quick Option Buttons */}
              <div className="space-y-2 pt-1 pl-9">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-warm-gray block mb-1">
                  {isPt ? 'Escolha uma opção rápida:' : 'Quick options:'}
                </span>
                {t.quickOptions.map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectOption(opt.msg)}
                    className="w-full text-left bg-white hover:bg-cream border border-black/8 hover:border-primary/40 rounded-xl p-2.5 text-xs font-heading font-semibold text-dark/85 hover:text-primary transition-all duration-200 flex items-center justify-between group shadow-xs cursor-pointer active:scale-98"
                  >
                    <span>{opt.label}</span>
                    <FiChevronRight className="text-warm-gray group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Input & Submit */}
            <form onSubmit={handleSendCustomMessage} className="p-3 bg-white border-t border-black/5 flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="flex-grow px-3.5 py-2 text-xs bg-cream rounded-full border border-black/8 focus:outline-none focus:border-[#128C7E] text-dark placeholder:text-warm-gray"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center transition-all flex-shrink-0 shadow-sm"
                aria-label="Enviar mensagem para WhatsApp"
              >
                <FiSend className="text-sm ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════ DISMISSIBLE GREETING BALLOON ═══════════════ */}
      <AnimatePresence>
        {!isOpen && showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-3 max-w-[260px] bg-white rounded-2xl p-3.5 shadow-xl border border-black/8 text-dark relative flex items-start gap-2.5 cursor-pointer hover:shadow-2xl transition-shadow group"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-8 h-8 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center flex-shrink-0 text-base">
              <FaWhatsapp className="text-lg text-[#25D366]" />
            </div>

            <div className="min-w-0 pr-3">
              <span className="font-heading font-bold text-xs text-dark block leading-tight">
                {t.bubbleTitle}
              </span>
              <p className="text-[11px] text-warm-gray mt-0.5 leading-snug">
                {t.bubbleText}
              </p>
            </div>

            {/* Close Button on Bubble */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
              }}
              className="absolute top-2 right-2 text-warm-gray/60 hover:text-dark p-0.5 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Fechar aviso"
            >
              <FiX className="text-xs" />
            </button>

            {/* Speech bubble pointer triangle */}
            <div className="absolute -bottom-2 right-6 w-3 h-3 bg-white border-r border-b border-black/8 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════════ CIRCULAR FLOATING WHATSAPP BUTTON ═══════════════ */}
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowBubble(false);
        }}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center transition-all relative cursor-pointer active:scale-95"
        aria-label={isOpen ? 'Fechar chat' : 'Abrir chat WhatsApp'}
      >
        {/* Live Notification Indicator */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-xs">
            1
          </span>
        )}

        {isOpen ? (
          <FiX className="text-2xl transition-transform" />
        ) : (
          <FaWhatsapp className="text-3xl" />
        )}
      </button>
    </aside>
  );
}
