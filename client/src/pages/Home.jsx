import { useEffect, useState } from 'react';
import { getProjects, getTestimonials } from '../lib/api';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import ToolsCarousel from '../components/ToolsCarousel';
import WhyHire from '../components/WhyHire';
import PortfolioCarousel from '../components/PortfolioCarousel';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    getProjects()
      .then(res => setProjects(res.data.slice(0, 6)))
      .catch(() => setProjects([]));
    getTestimonials()
      .then(res => setTestimonials(res.data))
      .catch(() => setTestimonials([]));
  }, []);

  return (
    <div>
      <Hero />
      <Statistics />
      <ToolsCarousel />
      <WhyHire />
      <PortfolioCarousel projects={projects} />
      <TestimonialsCarousel testimonials={testimonials} />
      <ContactSection />
    </div>
  );
}
