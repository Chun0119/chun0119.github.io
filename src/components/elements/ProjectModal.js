import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Globe, ExternalLink, Github, Play } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../../config/projects';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const embedUrl = project.videoUrl ? getYouTubeEmbedUrl(project.videoUrl) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <img src={project.image} alt={project.title} />
                <div className="modal-title-section">
                  <h2>{project.title}</h2>
                  <div className="modal-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="modal-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-body">
                {/* Video Section */}
                {embedUrl && (
                  <div className="modal-video">
                    <h3>
                      <Play size={20} />
                      Project Demo
                    </h3>
                    <div className="video-container">
                      <iframe
                        src={embedUrl}
                        title={`${project.title} Demo`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}

                <div className="modal-description">
                  <h3>Project Overview</h3>
                  <p>{project.detailedDescription}</p>
                </div>

                <div className="modal-details">
                  <div className="detail-item">
                    <Calendar size={20} />
                    <div>
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{project.details.duration}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Users size={20} />
                    <div>
                      <span className="detail-label">Team</span>
                      <span className="detail-value">{project.details.team}</span>
                    </div>
                  </div>
                  <div className="detail-item">
                    <Globe size={20} />
                    <div>
                      <span className="detail-label">Role</span>
                      <span className="detail-value">{project.details.role}</span>
                    </div>
                  </div>
                </div>

                <div className="modal-challenges">
                  <h3>Challenges & Solutions</h3>
                  <div className="challenge-section">
                    <h4>Key Challenges</h4>
                    <p>{project.details.challenges}</p>
                  </div>
                  <div className="solution-section">
                    <h4>Solutions Implemented</h4>
                    <p>{project.details.solutions}</p>
                  </div>
                </div>

                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul>
                    {project.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-technologies">
                  <h3>Technologies Used</h3>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    <Github size={20} />
                    View Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 