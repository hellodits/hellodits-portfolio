import { Star, Quote, TrendingUp, Users, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TestimonialsCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = testimonials?.length || 0;
  const averageRating = testimonials?.length ? 4.9 : 0;

  useEffect(() => {
    if (totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const goToSlide = (index) => setCurrentIndex(index);

  const stats = [
    { icon: Users, value: `${testimonials.length}+`, label: 'Clients' },
    { icon: Award, value: '100%', label: 'Satisfaction' },
    { icon: TrendingUp, value: averageRating, label: 'Rating' }
  ];

  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Light decorative elements - Blue only */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      {/* Decorative Particles - Circle Dots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Blue dots */}
        <div className="absolute top-24 left-20 w-3 h-3 bg-blue-500 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-28 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        
        {/* Red/Rose dots */}
        <div className="absolute top-32 right-28 w-3 h-3 bg-rose-500 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-36 right-1/3 w-2 h-2 bg-red-400 rounded-full opacity-60 animate-bounce"></div>
        
        {/* Yellow dots */}
        <div className="absolute top-40 left-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute bottom-24 right-24 w-3 h-3 bg-yellow-500 rounded-full opacity-50"></div>
      </div>
      
      <div className="container-custom px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Modern Split Layout 50:50 - Light Theme */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Pane - Modern Trust Display */}
            <div className="text-center lg:text-left space-y-4 md:space-y-5">
              {/* Badge - Same style as others */}
              <div className="inline-block">
                <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 w-fit mx-auto lg:mx-0">
                  <Star className="w-3 h-3 fill-blue-700" />
                  Client Reviews
                </span>
              </div>
              
              {/* Bold title with blue accent */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-slate-900">What Clients</span><br />
                <span className="text-blue-600">
                  Say About Us
                </span>
              </h2>
              
              {/* Rating display - Compact version */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-20"></div>
                <div className="relative bg-white p-5 md:p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                  <div className="flex items-end justify-center lg:justify-start gap-2 mb-3">
                    <span className="text-5xl md:text-6xl font-black text-blue-600 leading-none">
                      {averageRating}
                    </span>
                    <span className="text-2xl font-bold text-gray-400 pb-1">/5</span>
                  </div>
                  
                  <div className="flex gap-1 justify-center lg:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-xs md:text-sm text-gray-600 font-medium">
                    Average from {testimonials.length}+ reviews
                  </p>
                </div>
              </div>

              {/* Mini stats grid - Compact */}
              <div className="grid grid-cols-3 gap-2 md:gap-3 pt-2">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm p-2 md:p-3 rounded-lg border border-blue-100 shadow-sm">
                      <Icon className="w-4 h-4 text-blue-600 mb-1 mx-auto lg:mx-0" />
                      <div className="text-base md:text-lg font-bold text-slate-900">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Pane - Compact Review Cards */}
            <div className="relative">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-2">
                      {/* Compact card with subtle glow */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <div className="relative bg-white p-4 md:p-6 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                          {/* Floating quote icon - Smaller */}
                          <div className="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 rotate-6 group-hover:rotate-12 transition-transform duration-300">
                            <Quote className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          
                          {/* Stars - Smaller */}
                          <div className="flex gap-1 mb-3 md:mb-4 pt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>

                          {/* Review text - Compact */}
                          <p className="text-xs md:text-sm text-gray-700 leading-relaxed mb-4 md:mb-5 font-serif italic">
                            "{testimonial.quote}"
                          </p>

                          {/* User profile - Compact with Initial Placeholder */}
                          <div className="flex items-center gap-3 pt-3 md:pt-4 border-t border-gray-200">
                            <div className="relative">
                              <div className="absolute inset-0 bg-blue-500 rounded-full blur-md opacity-30"></div>
                              {/* Initial Placeholder */}
                              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center ring-2 ring-blue-500 shadow-lg">
                                <span className="text-white font-bold text-sm md:text-base">
                                  {testimonial.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                                </span>
                              </div>
                              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-sm md:text-base">{testimonial.name}</div>
                              <div className="text-xs md:text-sm text-gray-600">{testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modern dot indicators - Compact */}
              {totalSlides > 1 && (
                <div className="flex justify-center gap-2 mt-6">
                  {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToSlide(idx)}
                      className={`transition-all duration-300 ${
                        idx === currentIndex 
                          ? 'w-10 h-2.5 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30' 
                          : 'w-2.5 h-2.5 bg-gray-300 rounded-full hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
