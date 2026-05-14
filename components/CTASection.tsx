import React, { useMemo, useRef, useState } from 'react';
import { CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

type LeadChannel = 'email' | 'whatsapp';
type LeadService = 'website' | 'landing' | 'ecommerce' | 'other';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: LeadService;
  message: string;
}

interface LeadSubmitResponse {
  success?: boolean;
  error?: string;
}

const COMPANY_EMAIL = 'okapicodeforge@gmail.com';
const COMPANY_WHATSAPP = '5584999952710';
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwN4o59lW6jn6ocI1aveE1dqlw5fbPpWtHPPhe7m5khE-2OjA5Rs3tBj_4-yc8Hb0h5/exec';

const initialFormData: LeadFormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: 'website',
  message: '',
};

const inputClassName =
  'w-full rounded-xl border border-slate-300/70 dark:border-white/15 bg-white/90 dark:bg-space-black/70 px-4 py-3 text-slate-700 dark:text-gray-100 placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-cyan/70 focus:border-neon-cyan/70 transition-colors';

const CTASection: React.FC = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [submittedChannel, setSubmittedChannel] = useState<LeadChannel | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<LeadChannel | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const serviceLabels = useMemo(
    () => ({
      website: t.cta.form.services.website,
      landing: t.cta.form.services.landing,
      ecommerce: t.cta.form.services.ecommerce,
      other: t.cta.form.services.other,
    }),
    [t]
  );

  const buildWhatsAppUrl = (message: string) =>
    `https://api.whatsapp.com/send?phone=${COMPANY_WHATSAPP}&text=${encodeURIComponent(message)}`;

  const directWaLink = buildWhatsAppUrl(t.cta.whatsapp_message);
  const isAppsScriptConfigured =
    APPS_SCRIPT_URL.startsWith('https://') && !APPS_SCRIPT_URL.includes('COLE_AQUI');

  const updateField = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const buildLeadMessage = () => {
    const company = formData.company.trim() || t.cta.form.not_provided;

    return [
      t.cta.form.lead_message.title,
      '',
      `${t.cta.form.lead_message.name}: ${formData.name.trim()}`,
      `${t.cta.form.lead_message.email}: ${formData.email.trim()}`,
      `${t.cta.form.lead_message.phone}: ${formData.phone.trim()}`,
      `${t.cta.form.lead_message.company}: ${company}`,
      `${t.cta.form.lead_message.service}: ${serviceLabels[formData.service]}`,
      `${t.cta.form.lead_message.message}: ${formData.message.trim()}`,
    ].join('\n');
  };

  const handleSend = async (channel: LeadChannel) => {
    const whatsappWindow = channel === 'whatsapp' ? window.open('about:blank', '_blank') : null;

    if (isSubmitting || !formRef.current?.reportValidity()) {
      whatsappWindow?.close();
      return;
    }

    if (!isAppsScriptConfigured) {
      whatsappWindow?.close();
      setSubmitError(t.cta.form.submit_error);
      return;
    }

    const whatsappMessage = channel === 'whatsapp' ? buildLeadMessage() : '';

    setSubmitError(null);
    setIsSubmitting(channel);

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          company: formData.company.trim(),
          service: serviceLabels[formData.service],
          message: formData.message.trim(),
          channel,
        }),
      });

      const rawResponse = await response.text();
      let result: LeadSubmitResponse | null = null;

      if (rawResponse) {
        try {
          result = JSON.parse(rawResponse) as LeadSubmitResponse;
        } catch {
          result = null;
        }
      }

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || t.cta.form.submit_error);
      }

      if (channel === 'whatsapp') {
        const whatsappUrl = buildWhatsAppUrl(whatsappMessage);

        if (whatsappWindow) {
          whatsappWindow.opener = null;
          whatsappWindow.location.href = whatsappUrl;
        } else {
          window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        }
      }

      setSubmittedChannel(channel);
      setFormData(initialFormData);
    } catch (error) {
      whatsappWindow?.close();
      console.error('Lead submission failed:', error);
      setSubmitError(t.cta.form.submit_error);
    } finally {
      setIsSubmitting(null);
    }
  };

  const handleReturnToSite = () => {
    setSubmittedChannel(null);
    setSubmitError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submittedChannel) {
    return (
      <section
        id="lead-form"
        className="py-20 md:py-28 bg-slate-100 dark:bg-gradient-to-b dark:from-space-black dark:to-dark-purple/50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/70 p-8 md:p-12 text-center shadow-xl shadow-primary/5">
            <CheckCircle2 className="w-14 h-14 mx-auto text-neon-cyan mb-5" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-slate-900 dark:text-white mb-4">
              {t.cta.form.thank_you_title}
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
              {submittedChannel === 'email' ? t.cta.form.thank_you_email : t.cta.form.thank_you_whatsapp}
            </p>
            <button
              type="button"
              onClick={handleReturnToSite}
              className="btn-glass btn-glass-primary inline-flex items-center justify-center px-8 py-3 font-semibold transition-all duration-300 hover:scale-105"
            >
              {t.cta.form.send_another}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="lead-form"
      className="py-20 md:py-28 bg-slate-100 dark:bg-gradient-to-b dark:from-space-black dark:to-dark-purple/50"
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
          <div className="rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-dark-purple/30 p-8 md:p-10">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-slate-900 dark:text-white leading-tight">
              {t.cta.form.title1} <span className="text-primary">{t.cta.form.title2}</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 mb-8">{t.cta.form.subtitle}</p>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-gray-400">
                {t.cta.form.direct_title}
              </h3>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200/70 dark:border-white/10 p-4 hover:border-primary/60 hover:bg-white dark:hover:bg-space-black/60 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-xs text-slate-500 dark:text-gray-400">{t.cta.form.direct_email}</p>
                  <p className="text-sm md:text-base font-semibold text-slate-800 dark:text-white">{COMPANY_EMAIL}</p>
                </div>
              </a>
              <a
                href={directWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-slate-200/70 dark:border-white/10 p-4 hover:border-neon-cyan/60 hover:bg-white dark:hover:bg-space-black/60 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-neon-cyan" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-xs text-slate-500 dark:text-gray-400">{t.cta.form.direct_whatsapp}</p>
                  <p className="text-sm md:text-base font-semibold text-slate-800 dark:text-white">+55 84 99995-2710</p>
                </div>
              </a>
            </div>
          </div>

          <form
            ref={formRef}
            className="rounded-3xl border border-slate-200/70 dark:border-white/10 bg-white/90 dark:bg-space-black/70 p-8 md:p-10 shadow-xl shadow-primary/5"
            onSubmit={(e) => {
              e.preventDefault();
              void handleSend('email');
            }}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <label className="block">
                <span className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">{t.cta.form.name_label}</span>
                <input
                  type="text"
                  required
                  name="name"
                  autoComplete="name"
                  className={inputClassName}
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">{t.cta.form.email_label}</span>
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                  className={inputClassName}
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <label className="block">
                <span className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">{t.cta.form.phone_label}</span>
                <input
                  type="tel"
                  required
                  name="tel"
                  autoComplete="tel"
                  className={inputClassName}
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">{t.cta.form.company_label}</span>
                <input
                  type="text"
                  name="organization"
                  autoComplete="organization"
                  className={inputClassName}
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                />
              </label>
            </div>

            <label className="block mb-4">
              <span className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">{t.cta.form.service_label}</span>
              <select
                className={inputClassName}
                value={formData.service}
                onChange={(e) => updateField('service', e.target.value as LeadService)}
              >
                <option value="website">{t.cta.form.services.website}</option>
                <option value="landing">{t.cta.form.services.landing}</option>
                <option value="ecommerce">{t.cta.form.services.ecommerce}</option>
                <option value="other">{t.cta.form.services.other}</option>
              </select>
            </label>

            <label className="block mb-4">
              <span className="block text-sm font-semibold text-slate-700 dark:text-gray-200 mb-2">{t.cta.form.message_label}</span>
              <textarea
                required
                rows={5}
                name="message"
                className={`${inputClassName} resize-none`}
                placeholder={t.cta.form.message_placeholder}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
              />
            </label>

            {submitError ? (
              <p className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {submitError}
              </p>
            ) : null}

            <p className="text-xs text-slate-500 dark:text-gray-400 mb-6">{t.cta.form.privacy_note}</p>

            <div className="grid sm:grid-cols-2 gap-3">
              <button
                type="submit"
                disabled={Boolean(isSubmitting)}
                className="btn-glass btn-glass-primary inline-flex items-center justify-center gap-2 font-bold py-3 px-5 transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {isSubmitting === 'email' ? t.cta.form.submit_email_loading : t.cta.form.submit_email}
              </button>
              <button
                type="button"
                onClick={() => void handleSend('whatsapp')}
                disabled={Boolean(isSubmitting)}
                className="btn-glass btn-glass-cyan inline-flex items-center justify-center gap-2 font-bold py-3 px-5 transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                {isSubmitting === 'whatsapp' ? t.cta.form.submit_whatsapp_loading : t.cta.form.submit_whatsapp}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
