import React from 'react';
import { GraduationCap, Calendar, MapPin, Languages } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Vardhaman College of Engineering',
      year: '2023 - 2027 (Expected)',
      grade: 'CGPA: 9.65',
      status: 'current'
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Sri Chaithanya Junior Kalasa',
      year: '2021 - 2023',
      grade: 'Percentage: 96.2%',
      status: 'completed'
    },
    {
      degree: 'Secondary School (10th Grade)',
      institution: 'Sri Lakshmi Narsimha High School',
      year: '2020 - 2021',
      grade: 'GPA: 10.0',
      status: 'completed'
    }
  ];

  const languages = ['Telugu', 'Hindi', 'English'];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate about transforming ideas into elegant code solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm Rasmal Gnaneshwar, a dedicated Computer Science Engineering student with an unwavering 
              passion for programming and software development. Currently maintaining an exceptional 9.65 CGPA 
              at Vardhaman College of Engineering, I've consistently demonstrated academic excellence throughout 
              my educational journey.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My fascination with technology began early, leading me to achieve perfect scores in my 
              foundational studies. Today, I'm actively contributing to cutting-edge research at IIT Ropar, 
              working on recommendation systems that could shape the future of personalized technology.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond academics, I'm driven by the challenge of solving complex problems through code. 
              Whether it's mastering data structures and algorithms in C++, building full-stack web applications 
              with the MERN stack, or exploring the frontiers of data science with Python, I approach every 
              challenge with enthusiasm and dedication.
            </p>

            {/* Languages */}
            <div className="bg-gray-900/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Languages className="text-cyan-400 mr-3" size={24} />
                <h4 className="text-xl font-semibold">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {languages.map((language, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Education</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-500"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 pb-8">
                  <div className={`absolute left-2 w-4 h-4 rounded-full ${
                    edu.status === 'current' ? 'bg-cyan-400' : 'bg-blue-500'
                  } shadow-lg`}></div>
                  
                  <div className="bg-gray-900/70 p-6 rounded-lg hover:bg-gray-900 transition-colors duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      {edu.status === 'current' && (
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-2">
                      <GraduationCap size={16} className="mr-2" />
                      <span>{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.year}</span>
                    </div>
                    
                    <div className="text-cyan-400 font-semibold">
                      {edu.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;