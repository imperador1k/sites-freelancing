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
  const { data, colors } = useLanguage();
  const { company, contact, hero, about, stats, services, gallery, process: processSteps, navLinks, footer } = data;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappMessage)}`;

  const dynamicColorVariables = {
    '--color-primary': colors.primary,
    '--color-primary-dark': colors.primaryDark,
    '--color-dark': colors.dark,
    '--color-dark-lighter': colors.darkLighter,
  };

  return (
    <div className="min-h-screen bg-cream text-dark" style={dynamicColorVariables}>
      <Navbar company={company} navLinks={navLinks} whatsappUrl={whatsappUrl} />
      <Hero hero={hero} whatsappUrl={whatsappUrl} />
      <About about={about} />
      <Stats stats={stats} />
      <Services services={services} whatsappUrl={whatsappUrl} />
      <Gallery gallery={gallery} whatsappUrl={whatsappUrl} />
      <Process steps={processSteps} />
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
