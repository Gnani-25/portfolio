import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Recommendation System Research',
      organization: 'IIT Ropar',
      description: 'Currently developing an advanced recommendation system as part of a research internship at IIT Ropar. This project involves implementing machine learning algorithms to create personalized content recommendations, utilizing collaborative filtering and content-based approaches. The system is being built with a modern MERN stack architecture and TypeScript for type safety and better development experience.',
      technologies: ['Python', 'Machine Learning', 'Data Science', 'Research', 'TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js'],
      status: 'ongoing',
      type: 'Research Internship',
      highlights: [
        'Working with cutting-edge ML algorithms',
        'Collaborating with IIT faculty and researchers',
        'Contributing to academic research publications',
        'Building full-stack application with MERN stack',
        'Implementing TypeScript for enhanced code quality'
      ]
    },
    {
      title: 'Advanced Data Structures Implementation',
      description: 'Comprehensive implementation of complex data structures and algorithms in C++, focusing on optimization and real-world applications. This project demonstrates mastery of algorithmic thinking and efficient code design.',
      technologies: ['C++', 'Data Structures', 'Algorithms', 'Optimization'],
      status: 'completed',
      type: 'Academic Project',
      highlights: [
        'Custom implementations of AVL trees, graphs, and hash tables',
        'Performance analysis and optimization',
        'Comprehensive testing and documentation'
      ]
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Modern web application built with the MERN stack, featuring user authentication, real-time data updates, and responsive design. Demonstrates proficiency in both frontend and backend development.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'TypeScript'],
      status: 'completed',
      type: 'Personal Project',
      highlights: [
        'RESTful API design and implementation',
        'Modern React with hooks and TypeScript',
        'Responsive design with mobile-first approach'
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-cyan-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing my journey through code, research, and innovation
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    {project.status === 'ongoing' && (
                      <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full">
                        Ongoing
                      </span>
                    )}
                    {project.organization && (
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full">
                        {project.organization}
                      </span>
                    )}
                  </div>

                  <p className="text-cyan-400 font-semibold mb-3">{project.type}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    {project.status === 'completed' && (
                      <>
                        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors duration-300">
                          <Github size={16} />
                          View Code
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 rounded-lg transition-all duration-300">
                          <ExternalLink size={16} />
                          Live Demo
                        </button>
                      </>
                    )}
                    {project.status === 'ongoing' && (
                      <div className="text-gray-400 italic">
                        Project details will be updated upon completion
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Visual/Stats */}
                <div className="lg:w-80 flex-shrink-0">
                  <div className="bg-gray-900/50 rounded-lg p-6 h-full">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">
                          {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Project Status</h4>
                      <p className="text-gray-400 capitalize mb-4">{project.status}</p>
                      
                      {project.status === 'ongoing' && (
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-cyan-400">75%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            More projects coming soon! Follow my journey on GitHub.
          </p>
          <a
            href="https://github.com/Gnani-25"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300"
          >
            <Github size={20} />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;