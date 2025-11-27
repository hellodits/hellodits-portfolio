import { Wrench } from 'lucide-react';

export default function ToolsCarousel() {
  // Keyframes
  const keyframesStyle = `
    @keyframes slideLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(-33.333%); }
    }
    @keyframes slideRight {
      0% { transform: translateX(-33.333%); }
      100% { transform: translateX(0); }
    }
  `;

  const baseUrl = import.meta.env.BASE_URL;

  // Row 1 Tools - DENGAN GAMBAR
  const row1Tools = [
    { name: 'MongoDB', category: 'Database', icon: `${baseUrl}icons/mongodb.svg`, color: 'from-green-500 to-teal-500' },
    { name: 'TailwindCSS', category: 'Styling', icon: `${baseUrl}icons/tailwindcss.svg`, color: 'from-cyan-400 to-blue-500' },
    { name: 'Express', category: 'Backend', icon: `${baseUrl}icons/express.svg`, color: 'from-gray-600 to-gray-800' },
    { name: 'TypeScript', category: 'Language', icon: `${baseUrl}icons/typescript.svg`, color: 'from-blue-500 to-blue-700' },
    { name: 'Git', category: 'Version Control', icon: `${baseUrl}icons/git.svg`, color: 'from-orange-500 to-red-500' },
    { name: 'Prisma', category: 'ORM', icon: `${baseUrl}icons/prisma.svg`, color: 'from-indigo-400 to-purple-500' },
    { name: 'Java Script', category: 'Frontend', icon: `${baseUrl}icons/javascript.svg`, color: 'from-yellow-500 to-orange-500' },
    { name: 'Go', category: 'Backend', icon: `${baseUrl}icons/go.svg`, color: 'from-blue-500 to-blue-700' },
    { name: 'Kotlin', category: 'Language', icon: `${baseUrl}icons/kotlin.svg`, color: 'from-yellow-500 to-orange-500' },
  ];

  // Row 2 Tools - DENGAN GAMBAR
  const row2Tools = [
    { name: 'React', category: 'Frontend', icon: `${baseUrl}icons/react.svg`, color: 'from-blue-400 to-cyan-400' },
    { name: 'Next.js', category: 'Framework', icon: `${baseUrl}icons/nextdotjs.svg`, color: 'from-slate-700 to-slate-900' },
    { name: 'Docker', category: 'DevOps', icon: `${baseUrl}icons/docker.svg`, color: 'from-blue-400 to-blue-600' },
    { name: 'PostgreSQL', category: 'Database', icon: `${baseUrl}icons/postgresql.svg`, color: 'from-blue-600 to-indigo-600' },
    { name: 'AWS', category: 'Cloud', icon: `${baseUrl}icons/aws.png`, color: 'from-orange-400 to-yellow-500' },
    { name: 'Figma', category: 'UI/UX', icon: `${baseUrl}icons/figma.svg`, color: 'from-purple-400 to-pink-400' },
    { name: 'Node.js', category: 'Backend', icon: `${baseUrl}icons/nodedotjs.svg`, color: 'from-green-400 to-emerald-400' },
    { name: 'Firebase', category: 'Database', icon: `${baseUrl}icons/firebase.svg`, color: 'from-yellow-500 to-orange-500' },
  ];

  const allRow1Tools = [...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools, ...row1Tools];
  const allRow2Tools = [...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools, ...row2Tools];

  return (
    <>
      <style>{keyframesStyle}</style>
      <section className="pt-28 md:pt-32 pb-20 md:pb-28 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
        <div className="container-custom px-6">
          <div className="text-center mb-12 md:mb-16">
            {/* Badge */}
            <div className="flex justify-center mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                <Wrench className="w-3 h-3" />
                Tech Stack
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-slate-900">
              Tools I Use
            </h2>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Daily tools that power my development workflow and bring ideas to life
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {/* Row 1 */}
            <div className="relative overflow-hidden">
              <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-48 lg:w-56 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
              <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-48 lg:w-56 bg-gradient-to-l from-white via-white/95 to-transparent z-10"></div>

              <div 
                className="flex gap-6 md:gap-8" 
                style={{ 
                  animation: 'slideLeft 60s linear infinite',
                  animationPlayState: 'running',
                  width: 'max-content',
                  willChange: 'transform'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} 
                onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
              >
                {allRow1Tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group w-[180px] md:w-[220px] h-[110px] md:h-[120px] bg-white rounded-[20px] shadow-[0_8px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-200 flex items-center gap-4 px-5 md:px-6 py-4 border border-slate-100 hover:scale-[1.02] hover:border-primary/20 cursor-pointer flex-shrink-0"
                  >
                    {/* Icon dengan IMAGE */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 p-2.5`}>
                      <img 
                        src={tool.icon} 
                        alt={tool.name}
                        className="w-full h-full object-contain filter brightness-0 invert"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<span class="text-2xl">🔧</span>';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 text-sm md:text-base group-hover:text-primary transition-colors mb-1 truncate">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 */}
            <div className="relative overflow-hidden">
              <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-48 lg:w-56 bg-gradient-to-r from-white via-white/95 to-transparent z-10"></div>
              <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-48 lg:w-56 bg-gradient-to-l from-white via-white/95 to-transparent z-10"></div>

              <div 
                className="flex gap-6 md:gap-8" 
                style={{ 
                  animation: 'slideRight 65s linear infinite',
                  animationPlayState: 'running',
                  animationDelay: '2s',
                  width: 'max-content',
                  willChange: 'transform'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} 
                onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
              >
                {allRow2Tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group w-[180px] md:w-[220px] h-[110px] md:h-[120px] bg-white rounded-[20px] shadow-[0_8px_28px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-200 flex items-center gap-4 px-5 md:px-6 py-4 border border-slate-100 hover:scale-[1.02] hover:border-primary/20 cursor-pointer flex-shrink-0"
                  >
                    {/* Icon dengan IMAGE */}
                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 p-2.5`}>
                      <img 
                        src={tool.icon} 
                        alt={tool.name}
                        className="w-full h-full object-contain filter brightness-0 invert"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<span class="text-2xl">🔧</span>';
                        }}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800 text-sm md:text-base group-hover:text-primary transition-colors mb-1 truncate">
                        {tool.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium truncate">
                        {tool.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-slate-500 italic">
              Hover to pause • Continuously learning and exploring new technologies
            </p>
          </div>
        </div>
      </section>
    </>
  );
}