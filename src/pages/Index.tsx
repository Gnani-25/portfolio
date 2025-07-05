import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Services />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;