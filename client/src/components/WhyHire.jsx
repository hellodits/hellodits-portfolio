import { Link } from 'react-router-dom';
import { Code2, Smartphone, Zap, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhyHire() {
  const { t } = useLanguage();
  const skills = [
    {
      icon: Code2,
      title: t('whyHire.skills.fullstack.title'),
      description: t('whyHire.skills.fullstack.desc')
    },
    {
      icon: Smartphone,
      title: t('whyHire.skills.mobile.title'),
      description: t('whyHire.skills.mobile.desc')
    },
    {
      icon: Zap,
      title: t('whyHire.skills.performance.title'),
      description: t('whyHire.skills.performance.desc')
    }
  ];

  return (
    <section className="pt-16 md:pt-20 pb-12 md:pb-20 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors">
      {/* Decorative Particles - Circle Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue dots */}
        <div className="absolute top-16 left-12 w-3 h-3 bg-blue-500 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-blue-600 rounded-full opacity-40 animate-bounce"></div>
        
        {/* Red/Rose dots */}
        <div className="absolute top-24 right-1/3 w-3 h-3 bg-rose-500 rounded-full opacity-50"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-pulse"></div>
        
        {/* Yellow dots */}
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute bottom-16 right-1/4 w-3 h-3 bg-yellow-500 rounded-full opacity-50"></div>
      </div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Split Layout 50:50 - Persuasion vs Evidence */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Left Pane - The Hook */}
            <div className="space-y-4 md:space-y-5">
              {/* Badge */}
              <div className="inline-block">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 w-fit">
                  <Target className="w-3 h-3" />
                  {t('whyHire.badge')}
                </span>
              </div>
              
              {/* Contrasting hierarchy - Black vs Blue */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-slate-900 dark:text-white">{t('whyHire.title.part1')}</span>
                <span className="text-blue-600 dark:text-blue-400">{t('whyHire.title.highlight')}</span>
              </h2>
              
              {/* Persuasive narrative */}
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                {t('whyHire.description')}
              </p>
              
              {/* Minimalist CTA */}
              <div className="pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-slate-900 dark:bg-slate-700 text-white px-6 py-3 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-all font-semibold text-sm md:text-base"
                >
                  {t('whyHire.hireMe')}
                </Link>
              </div>
            </div>

            {/* Right Pane - The Proof: Clean Card Grid (1 Column Vertical) */}
            <div className="space-y-4">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-800 p-4 md:p-5 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon in blue circle */}
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      
                      {/* Text content on the right */}
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white mb-1">
                          {skill.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
