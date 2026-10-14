import { useLanguage } from '../../context/LanguageContext';

/**
 * Responsive Segmented Language Switcher [ PT | EN ]
 */
export default function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center rounded-full bg-white/10 p-0.5 border border-white/20 backdrop-blur-md ${className}`}>
      <button
        type="button"
        onClick={() => setLang('pt')}
        className={`px-2.5 py-1 text-xs font-heading font-bold rounded-full transition-all duration-200 cursor-pointer ${
          lang === 'pt'
            ? 'bg-primary text-white shadow-sm'
            : 'text-white/70 hover:text-white'
        }`}
        aria-label="Mudar para Português"
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 text-xs font-heading font-bold rounded-full transition-all duration-200 cursor-pointer ${
          lang === 'en'
            ? 'bg-primary text-white shadow-sm'
            : 'text-white/70 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
