import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gnani-25', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gnaneshwar-r-a9aa5228b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rasmalgnaneshwar001@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+919347560270', label: 'Phone' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 animate-gradient"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-bounce-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 hover-lift">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img
                    src="/portfolio/my_img.jpg"
                    alt="Rasmal Gnaneshwar"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-30 animate-pulse-slow"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl animate-float"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-slide-up">
              <p className="text-cyan-400 text-lg mb-2 animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 animate-slide-in-left">
                Rasmal
                <br />
                <span className="text-gradient">
                  Gnaneshwar
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 animate-slide-in-right">
                Passionate Programming Enthusiast & Aspiring Software Developer
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl animate-fade-in">
                B.Tech CSE Student at Vardhaman College of Engineering with a stellar 9.65 CGPA.
                Currently advancing the field through research at IIT Ropar while mastering
                cutting-edge technologies and solving complex algorithmic challenges.
              </p>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 glass-effect rounded-full flex items-center justify-center hover:bg-cyan-600 hover:scale-110 transition-all duration-300 hover-lift"
                    aria-label={social.label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon size={20} className="sm:w-6 sm:h-6" />
                  </a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover-lift border-gradient"
                >
                  View My Work
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 sm:px-8 py-3 border-2 border-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover-lift"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
