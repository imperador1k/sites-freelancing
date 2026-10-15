import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

/**
 * Main Layout connected to the reactive Language Context
 */
function MainLayout() {
  const { data = {}, colors = {} } = useLanguage();
  const {
    company = {},
    contact = {},
    hero = {},
    about = {},
    stats = [],
    services = [],
    gallery = [],
    gallerySection = {},
    process: processSteps = [],
    processSection = {},
    navLinks = [],
    footer = {},
  } = data || {};

  const whatsappNumber = contact?.whatsappNumber || '351913450515';
  const whatsappMessage = contact?.whatsappMessage || 'Olá! Gostaria de pedir um orçamento gratuito.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const dynamicColorVariables = {
    '--color-primary': colors?.primary || '#F58220',
    '--color-primary-dark': colors?.primaryDark || '#D96509',
    '--color-dark': colors?.dark || '#14181F',
    '--color-dark-lighter': colors?.darkLighter || '#1E2530',
  };

  return (
    <div className="min-h-screen bg-cream text-dark" style={dynamicColorVariables}>
      <Navbar company={company} navLinks={navLinks} whatsappUrl={whatsappUrl} />
      <Hero hero={hero} whatsappUrl={whatsappUrl} />
      <About about={about} />
      <Stats stats={stats} />
      <Services services={services} whatsappUrl={whatsappUrl} />
      <Gallery gallery={gallery} galleryConfig={gallerySection} whatsappUrl={whatsappUrl} />
      <Process steps={processSteps} processConfig={processSection} />
      <Contact contact={contact} />
      <FloatingWhatsApp whatsappUrl={whatsappUrl} company={company} />
      <Footer
        company={company}
        contact={contact}
        navLinks={navLinks}
        services={services}
        footer={footer}
        whatsappUrl={whatsappUrl}
      />
    </div>
  );
}

/**
 * Root Application Component with Global Language Provider
 */
export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
