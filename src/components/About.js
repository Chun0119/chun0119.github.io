import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail } from 'lucide-react';
import './About.css';

const About = () => {
  const personalInfo = [
    { icon: <User size={20} />, label: 'Name', value: 'S.Y. Chun' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Your City, Country' },
    { icon: <Calendar size={20} />, label: 'Experience', value: '3+ Years' },
    { icon: <Mail size={20} />, label: 'Email', value: 'your.email@example.com' }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Passionate developer with a love for creating innovative solutions and beautiful user experiences
        </motion.p>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm a dedicated full-stack developer with a passion for creating meaningful digital experiences. 
              With expertise in modern web technologies, I specialize in building scalable applications that 
              solve real-world problems.
            </p>
            <p>
              My journey in software development began with curiosity and has evolved into a deep understanding 
              of both frontend and backend technologies. I believe in writing clean, maintainable code and 
              staying up-to-date with the latest industry trends.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Personal Information</h3>
            <div className="info-grid">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <h4>20+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h4>3+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h4>15+</h4>
              <p>Technologies</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 