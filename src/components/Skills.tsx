import React from 'react';
import { Code, Database, Globe, Award, Trophy, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'C++', level: 95, description: 'Expert in DSA and competitive programming' },
        { name: 'Python', level: 90, description: 'Data Science and Machine Learning' },
        { name: 'Java', level: 85, description: 'Object-oriented programming' },
        { name: 'C', level: 80, description: 'System programming fundamentals' },
        { name: 'JavaScript', level: 88, description: 'Modern ES6+ and frameworks' },
        { name: 'TypeScript', level: 85, description: 'Type-safe JavaScript development' }
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 90, description: 'Modern component-based development' },
        { name: 'Node.js', level: 85, description: 'Server-side JavaScript' },
        { name: 'Express.js', level: 85, description: 'RESTful API development' },
        { name: 'HTML/CSS', level: 92, description: 'Semantic markup and responsive design' },
        { name: 'MongoDB', level: 80, description: 'NoSQL database management' },
        { name: 'MERN Stack', level: 87, description: 'Full-stack web development' }
      ]
    },
    {
      title: 'Data Science & Algorithms',
      icon: Database,
      skills: [
        { name: 'Data Structures', level: 95, description: 'Advanced DSA with C++' },
        { name: 'Algorithms', level: 93, description: 'Problem-solving and optimization' },
        { name: 'Machine Learning', level: 82, description: 'ML algorithms and implementation' },
        { name: 'Data Analysis', level: 80, description: 'Python-based data processing' },
        { name: 'Research Methods', level: 85, description: 'Academic research at IIT level' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'NPTEL Gold Certificate',
      description: 'Programming and Data Structures',
      icon: Trophy,
      category: 'Academic Excellence'
    },
    {
      title: 'NPTEL Silver Certificate',
      description: 'Advanced Algorithms',
      icon: Award,
      category: 'Academic Excellence'
    },
    {
      title: 'Code Quest Winner',
      description: 'Competitive programming contest',
      icon: Star,
      category: 'Competitive Programming'
    },
    {
      title: 'Treasure Hunt Champion',
      description: 'Problem-solving competition',
      icon: Trophy,
      category: 'Problem Solving'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mastering the technologies that power modern software development
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                      <div 
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Achievements & <span className="text-cyan-400">Certifications</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gray-900/50 rounded-lg p-6 text-center hover:bg-gray-900/70 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <achievement.icon size={24} className="text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 mb-3">{achievement.description}</p>
                
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                  {achievement.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to tackle any challenge
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              With a strong foundation in computer science fundamentals, hands-on experience with modern technologies, 
              and a passion for continuous learning, I'm equipped to contribute effectively to any development team 
              or research project. My academic excellence and practical experience make me a valuable asset for 
              innovative software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
