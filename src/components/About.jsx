import React from 'react';
import './About.css';
import { GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text glass">
            <p>
              I am a final-year student with a deep passion for Full Stack Development and Artificial Intelligence/Machine Learning.
              My journey in tech started with an insatiable curiosity about how things work, and it has evolved into a career path
              focused on creating impactful and intelligent digital solutions.
            </p>
            <p>
              When I'm not coding, I'm usually exploring the latest advancements in AI models, refining my UI/UX skills, or
              collaborating on open-source projects. I believe in writing clean, maintainable code and always strive to learn
              new technologies to stay at the forefront of the industry.
            </p>


          </div>
          <div className="about-stats">
            <div className="education-section">
              <h3 className="education-main-title">
                <GraduationCap className="title-icon" size={28} />
                Education
              </h3>

              <div className="education-cards">
                <div className="education-card glass">
                  <div className="education-header">
                    <GraduationCap className="card-icon" size={24} />
                    <h4>B.E. Computer Science and Engineering</h4>
                  </div>
                  <p className="education-institute">SSN College of Engineering</p>
                  <div className="education-footer">
                    <p className="education-duration">Pre Final Year</p>
                    <span className="education-cgpa">CGPA: 8.719</span>
                  </div>
                </div>

                <div className="education-card glass">
                  <div className="education-header">
                    <GraduationCap className="card-icon" size={24} />
                    <h4>B.Sc. Data Science</h4>
                  </div>
                  <p className="education-institute">IIT Madras</p>
                  <div className="education-footer">
                    <p className="education-duration">Ongoing</p>
                    <span className="education-cgpa">CGPA: 7.75</span>
                  </div>
                </div>
              </div>

              <div className="education-card glass" style={{ marginTop: '3rem' }}>
                <h3 className="education-main-title">
                  <GraduationCap className="title-icon" size={28} />
                  Key Achievements
                </h3>

                <ul className="achievements-list">
                  <li>
                    <span className="achievement-icon">🏆</span>
                    <span className="achievement-text">Runner up of Prediticx ML challenge at CEG,Anna University</span>
                  </li>
                  <li>
                    <span className="achievement-icon">⭐</span>
                    <span className="achievement-text">Won 3rd Place in Blackout Web Challenge at CEG,Anna University</span>
                  </li>
                  <li>
                    <span className="achievement-icon">🚀</span>
                    <span className="achievement-text">Been Orgainzer of Expedition Unknown:ML at Invente'25,SSN</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
