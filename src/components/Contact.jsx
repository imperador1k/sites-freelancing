import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';
import Reveal from './ui/Reveal';
import { useLanguage } from '../context/LanguageContext';

/**
 * Contact Section with interactive quote form and direct business info
 * Fully adapts dynamically to the active language (PT/EN).
 */
export default function Contact({ contact = {}, contactHeader = {} }) {
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

  const t = {
    pt: {
      badge: contactHeader?.badge || 'Fale Connosco',
      title: contactHeader?.title || 'Peça o Seu',
      titleHighlight: contactHeader?.titleHighlight || 'Orçamento Gratuito',
      desc: contactHeader?.desc || 'Tem um projeto em mente? Contacte-nos hoje mesmo por mensagem ou telefone e receba uma resposta rápida.',
      nameLabel: contactHeader?.nameLabel || 'O Seu Nome',
      namePlaceholder: contactHeader?.namePlaceholder || 'ex: João Silva',
      phoneLabel: contactHeader?.phoneLabel || 'Telefone',
      phonePlaceholder: contactHeader?.phonePlaceholder || 'ex: 912 345 678',
      emailLabel: contactHeader?.emailLabel || 'Email',
      emailPlaceholder: contactHeader?.emailPlaceholder || 'ex: joao@email.com',
      messageLabel: contactHeader?.messageLabel || 'Descrição do Projeto ou Obra',
      messagePlaceholder: contactHeader?.messagePlaceholder || 'Indique a localização, tipo de intervenção ou quaisquer detalhes relevantes...',
      submitBtn: contactHeader?.submitBtn || 'Enviar Pedido de Orçamento',
      sentSuccess: contactHeader?.sentSuccess || 'Pedido Enviado com Sucesso!',
      phoneTitle: 'Telefone',
      emailTitle: 'Email',
      locationTitle: 'Localização',
      hoursTitle: 'Horário de Atendimento',
    },
    en: {
      badge: 'Get in Touch',
      title: 'Request a Free',
      titleHighlight: 'Project Quote',
      desc: 'Have a project in mind? Contact us today via WhatsApp or phone for a prompt technical response.',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g. John Smith',
      phoneLabel: 'Phone Number',
      phonePlaceholder: 'e.g. +351 912 345 678',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. john@email.com',
      messageLabel: 'Project Description',
      messagePlaceholder: 'Specify the location, type of work, or any relevant details...',
      submitBtn: 'Send Quote Request',
      sentSuccess: 'Quote Request Sent Successfully!',
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
