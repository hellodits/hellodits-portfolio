import { Github, Instagram, Linkedin } from 'lucide-react';

export default function ProfileImageComposition() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/hellodits', label: 'Github' },
    { icon: Instagram, href: 'https://instagram.com/ditafrstk', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ditafarastika/', label: 'LinkedIn' }
  ];

  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[260px] lg:max-w-sm">
      {/* Layer 1 - Background Outline (Wireframe) */}
      <div className="absolute top-6 right-6 w-full h-full border-2 border-gray-900 rounded-2xl"></div>
      
      {/* Layer 2 - Main Solid Frame (Blue Background) */}
      <div className="relative bg-blue-600 rounded-2xl overflow-hidden shadow-2xl shadow-blue-600/50">
        {/* Layer 3 - The Image */}
        <img 
          src="/assets/profile.png" 
          alt="Profile" 
          className="w-full h-auto aspect-[4/5] object-cover object-top"
        />
      </div>

      {/* Layer 4 - Floating Sidebar (Right Side) */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        {/* Rotated Label */}
        <div className="rotate-90 origin-center whitespace-nowrap">
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
            Follow me
          </span>
        </div>
        
        {/* Social Icons - Vertical Stack */}
        <div className="flex flex-col gap-3 mt-12">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-blue-50 group"
              >
                <Icon className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
