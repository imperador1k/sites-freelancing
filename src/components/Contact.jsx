import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

/**
 * Contact Section with interactive quote form and direct business info
 * Fully adapts dynamically to the active language (PT/EN).
 */
export default function Contact({ contact = {} }) {
  const { lang } = useLanguage();
  const safeContact = {
    phone: '+351 913 450 515',
    phoneDisplay: '+351 913 450 515',
    email: 'contacto@kingconstrucoes.pt',
    address: 'Portugal',
    workingHours: [],
    ...contact,
  };
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const fl = contact?.formLabels || {};

  const t = {
    pt: {
      badge: fl.badge || 'Fale Connosco',
      title: fl.title || 'Agende a Sua',
      titleHighlight: fl.titleHighlight || 'Consulta Jurídica',
      desc: fl.desc || 'Tem uma questão jurídica a resolver? Contacte-nos hoje mesmo por mensagem ou telefone e receba uma resposta atempada.',
      nameLabel: fl.nameLabel || 'O Seu Nome',
      namePlaceholder: fl.namePlaceholder || 'ex: Maria Santos',
      phoneLabel: fl.phoneLabel || 'Telefone',
      phonePlaceholder: fl.phonePlaceholder || 'ex: 912 345 678',
      emailLabel: fl.emailLabel || 'Email',
      emailPlaceholder: fl.emailPlaceholder || 'ex: maria@email.com',
      messageLabel: fl.messageLabel || 'Assunto ou Questão Jurídica',
      messagePlaceholder: fl.messagePlaceholder || 'Descreva sumariamente a sua situação ou matéria a tratar...',
      submitBtn: fl.submitBtn || 'Enviar Pedido de Consulta',
      sentSuccess: fl.sentSuccess || 'Pedido Enviado com Sucesso!',
      phoneTitle: 'Telefone',
      emailTitle: 'Email',
      locationTitle: 'Localização',
      hoursTitle: 'Horário de Atendimento',
    },
    en: {
      badge: fl.badge || 'Get in Touch',
      title: fl.title || 'Schedule a Legal',
      titleHighlight: fl.titleHighlight || 'Consultation',
      desc: fl.desc || 'Have a legal matter to address? Contact us today via WhatsApp or email for confidential assistance.',
      nameLabel: fl.nameLabel || 'Your Full Name',
      namePlaceholder: fl.namePlaceholder || 'e.g. Sarah Jenkins',
      phoneLabel: fl.phoneLabel || 'Phone Number',
      phonePlaceholder: fl.phonePlaceholder || 'e.g. +351 912 345 678',
      emailLabel: fl.emailLabel || 'Email Address',
      emailPlaceholder: fl.emailPlaceholder || 'e.g. sarah@email.com',
      messageLabel: fl.messageLabel || 'Matter Description',
      messagePlaceholder: fl.messagePlaceholder || 'Briefly describe your situation or legal inquiry...',
      submitBtn: fl.submitBtn || 'Request Legal Consultation',
      sentSuccess: fl.sentSuccess || 'Consultation Request Sent Successfully!',
      phoneTitle: 'Phone',
      emailTitle: 'Email',
      locationTitle: 'Location',
      hoursTitle: 'Working Hours',
    },
  }[lang] || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4500);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-steel relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-heading font-bold text-sm tracking-[0.2em] uppercase mb-4">
              {t.badge}
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-dark mb-6">
              {t.title} <span className="text-primary">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-warm-gray text-lg max-w-2xl mx-auto">
              {t.desc}
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-dark/5">
              <div className="space-y-6">
                <div>
                  <label className="block text-dark font-heading font-semibold text-sm mb-2">{t.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-steel-dark/30 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-dark placeholder-warm-gray/50 bg-cream/40"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-dark font-heading font-semibold text-sm mb-2">{t.phoneLabel}</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t.phonePlaceholder}
                      className="w-full px-5 py-3.5 rounded-xl border-2 border-steel-dark/30 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-dark placeholder-warm-gray/50 bg-cream/40"
                    />
                  </div>
                  <div>
                    <label className="block text-dark font-heading font-semibold text-sm mb-2">{t.emailLabel}</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-5 py-3.5 rounded-xl border-2 border-steel-dark/30 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-dark placeholder-warm-gray/50 bg-cream/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-dark font-heading font-semibold text-sm mb-2">{t.messageLabel}</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-steel-dark/30 focus:border-primary focus:ring-0 outline-none transition-colors duration-300 text-dark placeholder-warm-gray/50 bg-cream/40 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-bold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {formSent ? (
                    <>
                      <FiCheck className="text-xl" /> {t.sentSuccess}
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" /> {t.submitBtn}
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </Reveal>

          {/* Direct Contact info */}
          <Reveal direction="right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-6 h-full flex flex-col justify-between">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-400 flex-shrink-0">
                    <FiPhone />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-dark mb-1">{t.phoneTitle}</h4>
                    <a href={`tel:${safeContact.phone}`} className="text-warm-gray hover:text-primary transition-colors text-sm font-semibold">
                      {safeContact.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-400 flex-shrink-0">
                    <FiMail />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-dark mb-1">{t.emailTitle}</h4>
                    <a href={`mailto:${safeContact.email}`} className="text-warm-gray hover:text-primary transition-colors text-sm font-semibold">
                      {safeContact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-all duration-400 flex-shrink-0">
                    <FiMapPin />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-dark mb-1">{t.locationTitle}</h4>
                    <p className="text-warm-gray text-sm leading-relaxed">{safeContact.address}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-dark to-dark-lighter rounded-2xl p-6 text-white">
                <h4 className="font-heading font-bold mb-3">{t.hoursTitle}</h4>
                <div className="space-y-2 text-sm">
                  {(safeContact.workingHours || []).map((schedule, idx) => (
                    <div key={idx} className="flex justify-between text-white/70">
                      <span>{schedule.days}</span>
                      <span className="text-white font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
