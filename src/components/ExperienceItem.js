import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import './ExperienceItem.css';

const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      className="experience-item"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="experience-content">
        <div className="experience-header">
          <div className="company-logo">
            <img src={experience.logo} alt={experience.company} />
          </div>
          <div className="experience-info">
            <h3 className="company-name">{experience.company}</h3>
            <h4 className="position-title">{experience.position}</h4>
            <div className="experience-meta">
              <div className="meta-item">
                <Calendar size={16} />
                <span>{experience.duration}</span>
              </div>
              <div className="meta-item">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="experience-description">
          <p>{experience.description}</p>
        </div>

        <div className="experience-achievements">
          <h5>Key Achievements:</h5>
          <ul>
            {experience.achievements.map((achievement, achievementIndex) => (
              <li key={achievementIndex}>{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="experience-technologies">
          {experience.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem; 