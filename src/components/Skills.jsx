import React from 'react';
import { Code, Layout, Server, Cpu, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { category: 'Programming Languages', icon: <Code size={24} />, items: ['Python', 'JavaScript', 'Java', 'C++', 'C'] },
    { category: 'Frontend Development', icon: <Layout size={24} />, items: ['React.js', 'Vue.js', 'BootStrap', 'Tailwind', 'Vite'] },
    { category: 'Backend Development', icon: <Server size={24} />, items: ['Node.js', 'Express', 'Flask', 'REST APIs'] },
    { category: 'AI / ML', icon: <Cpu size={24} />, items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'] },
    { category: 'Tools & Database', icon: <Wrench size={24} />, items: ['Git/GitHub', 'Docker', 'Azure', 'MongoDB', 'MySQL', 'Redis', 'Postman', 'PostgreSQL', 'Sqlite'] }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="skills-container">
          {skills.map((skillSet, index) => (
            <div key={index} className="skill-card-modern">
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {skillSet.icon}
                </div>
                <h3 className="skill-category-title">{skillSet.category}</h3>
              </div>
              <div className="skill-items-grid">
                {skillSet.items.map((item, idx) => (
                  <div key={idx} className="skill-item-modern">
                    <span className="skill-dot"></span>
                    <span className="skill-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
