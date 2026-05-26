import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import WebImage from '../assets/web.jpg';
import './Projects.css';

const GithubIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'Placement Portal Application',
      description: 'A comprehensive portal built with Vue.js for managing college placements, student profiles, and recruiter interactions seamlessly.',
      tech: ['Vue.js', 'Flask', 'SqlLite3', 'Redis', 'Celery'],
      github: 'https://github.com/NandaKumar-10/Placement-Portal-Application',
      live: '#'
    },
    {
      title: 'UniTrack OD Management System',
      description: 'An On-Duty (OD) management system designed for university students and staff to streamline and digitize leave tracking.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/NandaKumar-10/UniTrack-OD-Management-System',
      live: '#'
    },
    {
      title: 'Comment Category Prediction',
      description: 'A machine learning project utilizing NLP techniques to predict and categorize user comments accurately.',
      tech: ['Jupyter Notebook', 'Python', 'Scikit-learn', 'Pandas', 'Numpy', 'NLP'],
      github: 'https://github.com/NandaKumar-10/Comment-Category-Prediction',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid-modern">
          {projects.map((project, index) => (
            <div key={index} className="project-card-modern">
              <div className="project-image-container">
                <img src={WebImage} alt={project.title} className="project-image" />
              </div>
              <div className="project-content-modern">
                <div className="project-header">
                  <Zap size={22} className="project-zap-icon" />
                  <h3 className="project-title-modern">{project.title}</h3>
                </div>
                <p className="project-desc-modern">{project.description}</p>
                <div className="project-tech-modern">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-tag-modern">{tech}</span>
                  ))}
                </div>
                <div className="project-links-modern">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GithubIcon size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;