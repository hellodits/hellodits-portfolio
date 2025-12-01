import { useState } from 'react';
import { submitContact } from '../lib/api';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      title: t('contactSection.form.emailLabel'),
      value: t('footer.email'),
      link: 'mailto:hellodits19@gmail.com'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      ),
      title: t('contactSection.form.location'),
      value: t('footer.location'),
      link: null
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: t('contact.responseTime'),
      value: t('contact.responseValue'),
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-slate-800/30 transition-colors">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/5 dark:bg-blue-300/5 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl opacity-70"></div>
        </div>

        <div className="container-custom max-w-6xl relative z-10 px-6">
          <div className="text-center mb-20 mt-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white leading-[1.15]">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mt-5">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl px-6 py-6 shadow-lg hover:shadow-xl transition-all text-center group border border-slate-100 dark:border-slate-700"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {info.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-2 text-slate-800 dark:text-white">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="text-center mb-16">
            <a 
              href="mailto:hellodits19@gmail.com" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-600/30 dark:hover:shadow-blue-500/30 font-bold transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t('contact.sendEmail')}
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 border border-slate-100 dark:border-slate-700">
              <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{t('contact.formTitle')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">{t('contact.yourName')}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition"
                    placeholder={t('contact.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">{t('contact.yourEmail')}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition"
                    placeholder={t('contact.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">{t('contact.yourMessage')}</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3.5 border-2 border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder={t('contact.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sending')}
                    </span>
                  ) : (
                    t('contact.sendMessage')
                  )}
                </button>

                {status === 'success' && (
                  <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-200 dark:border-green-700 text-green-700 dark:text-green-400 p-4 rounded-xl flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{t('contact.successMessage')}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 dark:bg-red-900/30 border-2 border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 p-4 rounded-xl flex items-center gap-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{t('contact.errorMessage')}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-3xl p-10">
                <h3 className="text-3xl font-bold mb-4">{t('contact.ctaTitle')}</h3>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  {t('contact.ctaDescription')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('contact.quickResponse')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('contact.professionalService')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{t('contact.qualityGuaranteed')}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-10 border border-slate-100 dark:border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{t('contact.connectTitle')}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{t('contact.connectDescription')}</p>
                <div className="flex gap-4">
                  {[
                    { name: 'GitHub', url: 'https://github.com/hellodits' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ditafarastika/' },
                    { name: 'Twitter', url: 'https://twitter.com/hellodits' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-slate-700 dark:text-slate-300 py-3 rounded-xl font-semibold text-center transition-all"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
