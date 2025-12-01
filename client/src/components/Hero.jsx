import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import ProfileImageComposition from './ProfileImageComposition';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-[85vh] md:min-h-[90vh] flex items-center relative overflow-hidden bg-white dark:bg-slate-900 pt-12 md:pt-20 transition-colors">
      {/* Decorative Particles - Circle Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blue dots */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-blue-500 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 left-32 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-blue-600 rounded-full opacity-40"></div>
        
        {/* Red/Rose dots */}
        <div className="absolute top-32 right-24 w-3 h-3 bg-rose-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-60 right-40 w-2 h-2 bg-red-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-40 right-16 w-3 h-3 bg-rose-600 rounded-full opacity-50 animate-bounce"></div>
        
        {/* Yellow dots */}
        <div className="absolute top-48 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute top-72 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-yellow-600 rounded-full opacity-60 animate-bounce"></div>
        
        {/* Additional scattered dots */}
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-rose-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-yellow-500 rounded-full opacity-60"></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10 relative z-10">
        {/* Split Screen 50:50 - The Asymmetrical Balance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Pane - Content: Bold & Clean Typography */}
          <div className="space-y-4 md:space-y-5 text-left lg:text-left">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs font-bold flex items-center gap-2 w-fit">
                <Sparkles className="w-3 h-3" />
                {t('hero.welcome')}
              </span>
            </div>
            
            {/* Headline - Better line-height for mobile */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-snug max-w-[90%] lg:max-w-none">
              {t('hero.title.part1')}
              <span className="text-blue-600 dark:text-blue-400">{t('hero.title.highlight1')}</span>
              <br />
              {t('hero.title.part2')}
              <br />
              <span className="text-blue-600 dark:text-blue-400">{t('hero.title.highlight2')}</span>
            </h1>
            
            {/* Description - Better readability */}
            <p className="text-base md:text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-[90%] lg:max-w-md">
              {t('hero.description')}
            </p>
            
            {/* CTA Buttons - Better mobile layout */}
            <div className="flex flex-col gap-3 pt-2 max-w-[85%] sm:max-w-none lg:flex-row lg:gap-3">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-blue-600 dark:bg-blue-500 text-white px-6 py-3.5 rounded-xl hover:bg-blue-700 dark:hover:bg-blue-600 transition-all font-semibold shadow-lg shadow-blue-600/20 text-sm md:text-base"
              >
                {t('hero.contactMe')}
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 font-medium underline underline-offset-2 hover:text-blue-700 dark:hover:text-blue-300 transition-all text-sm md:text-base"
              >
                {t('hero.viewPortfolio')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Pane - Profile Image Composition */}
          <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
            <ProfileImageComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
