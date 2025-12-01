import { TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Statistics() {
  const { t } = useLanguage();
  
  const stats = [
    { number: '80+', label: t('stats.clients') },
    { number: '200+', label: t('stats.projects') },
    { number: '99+', label: t('stats.reviews') }
  ];

  return (
    <section className="py-12 md:py-12 bg-white dark:bg-slate-900 relative overflow-hidden mt-12 transition-colors">
      {/* Decorative Particles - Circle Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue dots */}
        <div className="absolute top-8 left-16 w-2 h-2 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-12 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
        
        {/* Red/Rose dots */}
        <div className="absolute top-10 left-1/3 w-2 h-2 bg-rose-500 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-14 right-1/4 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
        
        {/* Yellow dots */}
        <div className="absolute top-6 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-16 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-50 animate-pulse"></div>
      </div>
      
      <div className="container-custom px-4 relative z-10">
        {/* Badge - Centered - Smaller on mobile */}
        <div className="flex justify-center mb-5">
          <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
            <TrendingUp className="w-3 h-3" />
            {t('stats.achievements')}
          </span>
        </div>
        
        {/* 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-sm md:max-w-3xl mx-auto px-4">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center p-5 md:p-5 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-100 dark:border-slate-600"
            >
              <div className="text-3xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm md:text-sm text-slate-700 dark:text-slate-300 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
