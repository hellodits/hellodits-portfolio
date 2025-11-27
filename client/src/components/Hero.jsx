import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import ProfileImageComposition from './ProfileImageComposition';

export default function Hero() {
  return (
    <section className="min-h-[85vh] md:min-h-[90vh] flex items-center relative overflow-hidden bg-white pt-16 md:pt-20">
      {/* Decorative Particles - Circle Dots */}
      <div className="absolute inset-0 pointer-events-none">
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
          <div className="space-y-3 md:space-y-5 text-left">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 w-fit">
                <Sparkles className="w-3 h-3" />
                Welcome
              </span>
            </div>
            
            {/* Headline - Tight line-height - Smaller */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1]">
              I have <span className="text-blue-600">Mobile App</span><br />
              & Web Development<br />
              <span className="text-blue-600">Experience</span>
            </h1>
            
            {/* Description - Faded gray */}
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-md">
              I'm Dita a Full-Stack Developer. Crafting beautiful digital experiences with modern technologies. 
              Specialized in Web & Mobile App stack and clean code.
            </p>
            
            {/* CTA Buttons - Solid Blue + Link */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg shadow-blue-600/20 text-xs md:text-sm"
              >
                Contact Me
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:gap-3 transition-all text-xs md:text-sm group"
              >
                View Portfolio
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Pane - Profile Image Composition */}
          <div className="flex justify-center lg:justify-end">
            <ProfileImageComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
