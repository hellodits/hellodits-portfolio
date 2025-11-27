import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { getAssetUrl } from '../lib/utils';

export default function PortfolioCarousel({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  if (!projects || projects.length === 0) {
    return null;
  }

  const displayProjects = projects.slice(0, 6);
  const categories = ['All', ...new Set(displayProjects.map(p => p.category))];
  const filteredProjects = selectedCategory === 'All' 
    ? displayProjects 
    : displayProjects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Modern decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-200/30 rounded-full blur-3xl"></div>
      
      {/* Decorative Particles - Circle Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue dots */}
        <div className="absolute top-20 left-16 w-3 h-3 bg-blue-500 rounded-full opacity-50"></div>
        <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        
        {/* Red/Rose dots */}
        <div className="absolute top-28 right-24 w-3 h-3 bg-rose-500 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-red-400 rounded-full opacity-60"></div>
        
        {/* Yellow dots */}
        <div className="absolute top-36 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-yellow-500 rounded-full opacity-50 animate-pulse"></div>
      </div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Modern Split Layout 50:50 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Pane - Clean Context (No Card) */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
              {/* Badge */}
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 w-fit">
                  <Sparkles className="w-3 h-3" />
                  Featured Works
                </span>
              </div>
              
              {/* Section title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                My Digital<br />
                <span className="text-blue-600">Development Works</span>
              </h2>
              
              {/* Elegant description */}
              <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
                Explore my latest projects showcasing modern web and mobile development with cutting-edge technologies.
              </p>
              
              {/* Category tabs - Modern pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                        : 'bg-white text-gray-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Stats - Clean version */}
              <div className="flex gap-8 pt-2">
                <div>
                  <div className="text-3xl font-bold text-blue-600">{filteredProjects.length}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">{categories.length - 1}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wider">Categories</div>
                </div>
              </div>
              
              {/* Show More Button */}
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm md:text-base">View All Projects</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs opacity-80">({projects.length}+)</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Right Pane - Modern Gallery Grid (4 Projects) */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {filteredProjects.slice(0, 4).map((project, idx) => (
                <Link
                  key={project._id}
                  to={`/projects/${project.slug}`}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative overflow-hidden rounded-2xl bg-slate-100 aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image with zoom effect */}
                  <img 
                    src={getAssetUrl(project.cover)} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Modern gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent transition-opacity duration-500 ${
                    hoveredProject === idx ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Category badge */}
                      <div className="inline-block bg-blue-600 text-white px-2 py-1 rounded-md text-[9px] md:text-xs font-bold uppercase tracking-wider mb-2">
                        {project.category}
                      </div>
                      
                      {/* Project title */}
                      <h3 className="text-xs md:text-sm font-bold text-white leading-tight mb-2">
                        {project.title}
                      </h3>
                      
                      {/* View link */}
                      <div className="flex items-center gap-1 text-blue-400 text-xs font-semibold">
                        View Project
                        <ExternalLink className="w-3 h-3" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-2 right-2 w-8 h-8 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
