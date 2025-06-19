import React from 'react';
import { motion } from 'framer-motion';
import { experiences, careerHighlights } from '../config/experience';
import ExperienceItem from './ExperienceItem';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My professional journey in game development and immersive technologies
        </motion.p>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={experience.id} 
              experience={experience} 
              index={index} 
            />
          ))}
        </div>

        <motion.div
          className="experience-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="summary-card">
            <h3>Career Highlights</h3>
            <div className="highlights-grid">
              {careerHighlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-number">{highlight.number}</span>
                  <span className="highlight-label">{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 