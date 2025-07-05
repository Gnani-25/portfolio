import React from 'react';
import { Code, Globe, GraduationCap, Zap, Users, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and MongoDB. From concept to deployment, I create responsive, scalable, and user-friendly web solutions.',
      features: [
        'Custom web application development',
        'Responsive design for all devices',
        'RESTful API development',
        'Database design and optimization',
        'Performance optimization'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TypeScript']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific needs. Expertise in multiple programming languages and frameworks to deliver robust, efficient, and maintainable code.',
      features: [
        'Custom software development',
        'Algorithm design and optimization',
        'Code review and refactoring',
        'System architecture design',
        'Integration solutions'
      ],
      technologies: ['C++', 'Python', 'Java', 'Data Structures', 'Algorithms']
    },
    {
      icon: GraduationCap,
      title: 'Programming Tutoring',
      description: 'Personalized programming education for students and professionals. Share knowledge gained from academic excellence and practical experience to help others master programming concepts.',
      features: [
        'One-on-one programming sessions',
        'Data structures and algorithms coaching',
        'Competitive programming preparation',
        'Project guidance and mentoring',
        'Interview preparation'
      ],
      technologies: ['C++', 'Python', 'Java', 'DSA', 'Problem Solving']
    }
  ];

  const whyChooseMe = [
    {
      icon: Zap,
      title: 'Academic Excellence',
      description: 'Maintaining 9.65 CGPA while actively contributing to research at IIT Ropar'
    },
    {
      icon: Users,
      title: 'Proven Experience',
      description: 'Successfully completed multiple projects and won competitive programming contests'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Committed to delivering high-quality solutions within agreed timelines'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging my technical expertise to deliver exceptional solutions and educational experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover-glow-cyan"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <service.icon size={32} className="text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">What I Offer:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  // Scroll to contact section for service inquiries
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setTimeout(() => { }, 500);
                }}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover-glow-cyan"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Why Choose Me */}
        <div className="bg-gray-800/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            Why Choose <span className="text-cyan-400">Me?</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseMe.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <reason.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{reason.title}</h4>
                <p className="text-gray-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to bring your ideas to life?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you need a web application, custom software solution, or programming guidance,
            I'm here to help you achieve your goals with cutting-edge technology and proven expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover-glow-cyan"
            >
              Start Your Project
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover-glow-cyan"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;