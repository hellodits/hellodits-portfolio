import { useState } from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-12">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
              <MessageSquare className="w-3 h-3" />
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 md:mb-4">
            Let's Work Together
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? Get in touch
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
          
          {/* Contact Info - Compact */}
          <div className="space-y-4 md:space-y-5">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-xs md:text-sm mb-0.5">Email</div>
                <a href="mailto:hellodits19@gmail.com" className="text-xs md:text-sm text-slate-600 hover:text-blue-600">
                  hellodits19@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-900 text-xs md:text-sm mb-0.5">Location</div>
                <p className="text-xs md:text-sm text-slate-600">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Form - Compact */}
          <div className="bg-white p-5 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-slate-900 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-slate-900 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-semibold text-slate-900 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 md:px-4 md:py-3 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2.5 md:py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
