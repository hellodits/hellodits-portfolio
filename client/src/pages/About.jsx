import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const baseUrl = import.meta.env.BASE_URL;
  const { t, language } = useLanguage();
  
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js'], icon: '🎨' },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'], icon: '⚙️' },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'], icon: '🛠️' },
    { category: 'Mobile', items: ['React Native', 'Android', 'Kotlin', 'Firebase'], icon: '📱' }
  ];

  const experience = t('about.experiences');

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30 dark:from-slate-900 dark:to-slate-800/30 transition-colors">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container-custom max-w-5xl relative z-10 px-6">
          <div className="text-center mb-20 mt-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white leading-[1.15]">
              {t('about.title.part1')}
              <span className="text-blue-600 dark:text-blue-400">{t('about.title.highlight')}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed mt-6">
              {t('about.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-blue-900/20 dark:to-blue-800/20 overflow-hidden flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-700">
                <img 
                  src={`${baseUrl}assets/profile.png`}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{filter: 'saturate(1.1) contrast(0.95)'}}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-6 border border-slate-100 dark:border-slate-700">
                <div className="text-4xl font-bold text-primary dark:text-blue-400">3+</div>
                <div className="text-slate-600 dark:text-slate-300 font-semibold text-sm">{t('about.yearsExp')}</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-100 dark:border-slate-700 transition-colors">
                <h2 className="text-3xl font-bold mb-5 text-slate-900 dark:text-white">{t('about.greeting')}</h2>
                <div className="max-w-xl">
                  <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed md:leading-loose mb-4">
                    {t('about.bio')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="flex-1 bg-gradient-to-br from-primary to-accent dark:from-blue-600 dark:to-blue-700 text-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold mb-1">20+</div>
                  <div className="text-sm opacity-90 font-medium">{t('about.projectsCompleted')}</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-primary-light to-accent dark:from-blue-500 dark:to-blue-600 text-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-90 font-medium">{t('about.happyClients')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">{t('about.skillsTitle')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t('about.skillsSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 border-2 border-slate-100 dark:border-slate-600 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 dark:hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-blue-400"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 transition-colors">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">{t('about.experienceTitle')}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t('about.experienceSubtitle')}</p>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-primary dark:border-blue-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-2xl text-slate-800 dark:text-white mb-2">{exp.title}</h3>
                    <p className="text-primary dark:text-blue-400 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="bg-primary/10 dark:bg-blue-900/30 text-primary dark:text-blue-400 px-4 py-2 rounded-lg font-semibold whitespace-nowrap">
                    {exp.year}
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed md:leading-loose">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white transition-colors">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-5xl font-bold mb-6">
            {t('contactSection.title.part1')}
            <span className="text-blue-400">{t('contactSection.title.highlight')}</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-10">
            {t('contactSection.description')}
          </p>
          <a 
            href="/contact"
            className="inline-block bg-primary dark:bg-blue-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 dark:hover:bg-blue-600 transition shadow-xl hover:shadow-2xl"
          >
            {t('contactSection.button')} →
          </a>
        </div>
      </section>
    </div>
  );
}
