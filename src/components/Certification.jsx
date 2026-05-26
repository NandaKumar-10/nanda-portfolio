import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Certification.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Advanced Certificate in Data Science',
      institution: 'Indian Institute of Technology, Madras',
      period: 'May 2026',
      link: '#'
    },
    {
      title: 'Diploma in Programming & Application Development',
      institution: 'Indian Institute of Technology, Madras',
      period: 'May 2026',
      link: '#'
    },
    {
      title: 'Advanced Certificate in Programming & Application Development',
      institution: 'Indian Institute of Technology, Madras',
      period: 'Jun 2025',
      link: 'https://drive.google.com/file/d/1iRKhTIDDzA2DN-IE80duQt8hjpoIEuGF/view?usp=drive_link'
    },
    {
      title: 'Foundational Level in Programming & Data Science',
      institution: 'Indian Institute of Technology, Madras',
      period: 'Sep 2024',
      link: 'https://drive.google.com/file/d/1NUOjDg_L0nXQmKNkp6wsefsUTvI9lsbW/view?usp=drive_link'
    }
  ];

  return (
    <section id="certification" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="timeline">
          {certifications.map((cert, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <h3 className="timeline-title">
                    {cert.title} <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link" style={{ marginLeft: '8px', display: 'inline-flex', alignItems: 'center', color: 'var(--accent-color)' }}><ExternalLink size={18} /></a>
                  </h3>
                  <span className="timeline-period">{cert.period}</span>
                </div>
                <h4 className="timeline-company">{cert.institution}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
