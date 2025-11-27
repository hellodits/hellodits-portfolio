export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js'], icon: '🎨' },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'], icon: '⚙️' },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'], icon: '🛠️' },
    { category: 'Mobile', items: ['React Native', 'Android', 'Kotlin', 'Firebase'], icon: '📱' }
  ];

  const experience = [
    { 
    year: '2023 - Present',
    title: 'Full-Stack Developer',
    company: 'Freelance (Remote)',
    desc: 'Developing full-stack systems, landing pages, dashboards, and API services using Golang, React, Node.js, and PostgreSQL.'
  },
  { 
    year: 'Feb 2023 - Aug 2023', 
    title: 'Back End Developer', 
    company: 'PT Code Development Indonesia',
    desc: 'Built and optimized backend services using Golang, Gin, SQLC, and PostgreSQL, improving API and database performance by 30%.'
  },
  { 
    year: 'Feb 2021 - Aug 2021', 
    title: 'Mobile Application Developer', 
    company: 'PT Indocyber Global Teknologi',
    desc: 'Developed 10+ Android Kotlin applications and improved app performance by 50% through optimization and reusable components.'
  },
  { 
    year: 'Jan 2019 - Jun 2019', 
    title: 'Chemistry Teacher', 
    company: 'MAN 1 Kota Tangerang Selatan',
    desc: 'Delivered structured and engaging chemistry lessons and prepared curriculum-based learning materials.'
  },
  { 
    year: 'Oct 2018 - Jun 2018', 
    title: 'Support & Data Analyst', 
    company: 'Pusat Karier UIN Jakarta',
    desc: 'Handled tracer study data collection, reporting, and dashboard creation for alumni analytics.'
  },
  { 
    year: 'Sep 2017 - Jun 2018', 
    title: 'Laboratory Assistant (Analytical)', 
    company: 'UIN Syarif Hidayatullah Jakarta',
    desc: 'Assisted in lab operations, practicum sessions, and safety compliance within the Analytical Chemistry laboratory.'
  }
];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-40 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container-custom max-w-5xl relative z-10 px-6">
          <div className="text-center mb-20 mt-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-[1.15]">
              About Me
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed mt-6">
              Passionate developer crafting digital experiences that make a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden flex items-center justify-center shadow-xl border border-slate-100">
                <img 
                  src="/assets/profile.png" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                  style={{filter: 'saturate(1.1) contrast(0.95)'}}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="text-6xl">👨‍💻</div>';
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border border-slate-100">
                <div className="text-4xl font-bold text-primary">3+</div>
                <div className="text-slate-600 font-semibold text-sm">Years Experience</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h2 className="text-3xl font-bold mb-5 text-slate-900">Hi, I'm Dita Farastika! 👋</h2>
                <div className="max-w-xl">
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed md:leading-loose mb-4">
                    I'm a passionate <span className="text-primary font-semibold">Full-Stack & Mobile Developer</span> with 7+ years of experience 
                    across software development, education, and data analysis. I specialize in Backend Development with <span className="font-semibold">Go & PostgreSQL</span>, 
                    Full-Stack with <span className="font-semibold">MERN stack</span>, and Android development with 
                    <span className="font-semibold"> Kotlin & Java</span>. I love turning complex problems into simple, elegant solutions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <div className="flex-1 bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold mb-1">20+</div>
                  <div className="text-sm opacity-90 font-medium">Projects Completed</div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-primary-light to-accent text-white rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm opacity-90 font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-white border-2 border-slate-100 rounded-2xl p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="font-bold text-xl mb-4 text-slate-800">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
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
      <section className="py-20 bg-slate-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-gray-600">My professional journey</p>
          </div>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-primary"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-2xl text-slate-800 mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold text-lg">{exp.company}</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-semibold whitespace-nowrap">
                    {exp.year}
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed md:leading-loose">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-10">
            Have a project in mind? I'd love to hear about it and see how I can help.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition shadow-xl hover:shadow-2xl"
          >
            Get In Touch →
          </a>
        </div>
      </section>
    </div>
  );
}
