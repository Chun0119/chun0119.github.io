import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ 
  project, 
  index = 0, 
  onClick, 
  showClickHint = false,
  className = '' 
}) => {
  const handleCardClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  return (
    <motion.div
      className={`project-card ${project.featured ? 'featured' : ''} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={handleCardClick}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        {project.featured && (
          <div className="featured-badge">Featured</div>
        )}
        {showClickHint && (
          <div className="project-click-hint">Click for details</div>
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Project Tags */}
        <div className="project-tags">
          <span className={`project-type-tag ${project.projectType}`}>{project.projectType === 'personal' ? 'Personal Project' : 'Professional Project'}</span>
          {project.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="project-technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 