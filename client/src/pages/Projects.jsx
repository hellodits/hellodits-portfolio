import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../lib/api';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getProjects(filter)
      .then(res => setProjects(res.data))
      .catch(() => setProjects([]));
  }, [filter]);

  const categories = ['All', 'Backend', 'Web', 'Mobile', 'Cloud', 'Data Science', 'Cybersecurity'];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#0E1C30] to-[#13233A] text-white pt-32 pb-24 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="w-full h-full opacity-5" viewBox="0 0 100 100">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="container-custom text-center px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">My Projects</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in full-stack development
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 md:py-8 bg-white border-b sticky top-20 z-10 shadow-sm">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat === 'All' ? '' : cat)}
                className={`px-5 md:px-6 py-2.5 rounded-xl transition-all font-semibold text-sm md:text-base ${
                  (cat === 'All' && !filter) || filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-primary hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="container-custom px-6">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {projects.map(project => (
                <Link
                  key={project._id}
                  to={`/projects/${project.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={project.cover} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-slate-800">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wide">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{project.short}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 4).map(tech => (
                        <span key={tech} className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg font-medium">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
