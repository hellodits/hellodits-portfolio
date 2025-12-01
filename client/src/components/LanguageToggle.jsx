import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, changeLanguage } = useLanguage();

  return (
    <button
      onClick={() => changeLanguage(language === 'en' ? 'id' : 'en')}
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      aria-label="Toggle language"
    >
      <Globe className="w-5 h-5 text-slate-700 dark:text-slate-300" />
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase">
        {language}
      </span>
    </button>
  );
}
