import { useState } from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
              <MessageSquare className="w-3 h-3" />
              {t('contactSection.badge')}
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
            {t('contactSection.title.part1')}
            <span className="text-blue-600 dark:text-blue-400">{t('contactSection.title.highlight')}</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('contactSection.description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          
          {/* Contact Info - Compact */}
          <div className="space-y-4 md:space-y-5">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-xs md:text-sm mb-0.5">{t('contactSection.form.emailLabel')}</div>
                <a href="mailto:hellodits19@gmail.com" className="text-xs md:text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">
                  {t('footer.email')}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white text-xs md:text-sm mb-0.5">{t('contactSection.form.location')}</div>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">{t('footer.location')}</p>
              </div>
            </div>
          </div>

          {/* Form - Compact */}
          <div className="bg-white dark:bg-slate-800 p-5 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                  {t('contactSection.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder={t('contactSection.form.namePlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                  {t('contactSection.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder={t('contactSection.form.emailPlaceholder')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-slate-900 dark:text-white mb-1.5">
                  {t('contactSection.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border border-slate-300 dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder={t('contactSection.form.messagePlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-2.5 md:py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-semibold shadow-lg text-sm md:text-base"
              >
                {t('contactSection.button')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
