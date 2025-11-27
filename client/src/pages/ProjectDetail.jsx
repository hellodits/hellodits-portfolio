import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectBySlug } from '../lib/api';
import { getAssetUrl } from '../lib/utils';

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectBySlug(slug)
      .then(res => setProject(res.data))
      .catch(() => setProject(null));
  }, [slug]);

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-2xl text-gray-500">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={getAssetUrl(project.cover)} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom max-w-5xl">
            <Link to="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                {project.category}
              </span>
              <span className="bg-white/20 backdrop-blur text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                {project.year}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{project.short}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-md mb-8">
                <h2 className="text-3xl font-bold mb-6">About the Project</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Screenshots */}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h2 className="text-3xl font-bold mb-6">Screenshots</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.screenshots.map((screenshot, idx) => (
                      <img 
                        key={idx}
                        src={getAssetUrl(screenshot)} 
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full rounded-lg shadow-md hover:shadow-xl transition"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Tech Stack */}
              <div className="bg-white rounded-xl p-6 shadow-md mb-6 sticky top-6">
                <h3 className="text-2xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map(tech => (
                    <span key={tech} className="bg-slate-100 text-slate-800 px-4 py-2 rounded-lg font-medium text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links - Card Style */}
                <h3 className="text-xl font-bold mb-4">Project Links</h3>
                <div className="space-y-3">
                  {(project.repo || true) && (
                    <a 
                      href={project.repo || 'https://github.com'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white mb-1 group-hover:text-blue-300 transition">View Source Code</div>
                          <div className="text-sm text-gray-400">Check out the repository on GitHub</div>
                        </div>
                        <svg className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  )}
                  {(project.live || true) && (
                    <a 
                      href={project.live || 'https://example.com'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-white mb-1 group-hover:text-blue-100 transition">Visit Live Website</div>
                          <div className="text-sm text-blue-100">See the project in action</div>
                        </div>
                        <svg className="w-5 h-5 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
