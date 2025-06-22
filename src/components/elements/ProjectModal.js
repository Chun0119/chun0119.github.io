import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Globe, Building, ExternalLink, Github, Play } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../../config/projects';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [zoomedImage, setZoomedImage] = useState(null);
  
  if (!project) return null;

  const embedUrl = project.videoUrl ? getYouTubeEmbedUrl(project.videoUrl) : null;

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
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
                      <span className={`modal-tag project-type-tag ${project.projectType}`}>{project.projectType === 'personal' ? 'Personal Project' : 'Professional Project'}</span>
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
                        Project Video
                      </h3>
                      <div className="video-container">
                        <iframe
                          src={embedUrl}
                          title={`${project.title} Video`}
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
                    {project.details.client && (
                      <div className="detail-item">
                        <Building size={20} />
                        <div>
                          <span className="detail-label">Client</span>
                          <span className="detail-value">{project.details.client}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="modal-features">
                    <h3>Highlights</h3>
                    <ul>
                      {project.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {project.images && project.images.length > 0 && (
                    <div className="modal-gallery">
                      {project.images.map((img, idx) => (
                        <motion.img 
                          key={idx} 
                          src={img} 
                          alt={`${project.title} screenshot ${idx + 1}`} 
                          className="modal-gallery-image"
                          onClick={() => setZoomedImage(img)}
                          whileHover={{ scale: 1.05 }}
                        />
                      ))}
                    </div>
                  )}

                  {project.customSections && project.customSections.length > 0 && (
                    <>
                      {project.customSections.map((section, index) => (
                        <div key={index} className="modal-custom-section">
                          <h3>{section.title}</h3>
                          <p>{section.content}</p>
                        </div>
                      ))}
                    </>
                  )}

                  <div className="modal-technologies">
                    <h3>Technologies Used</h3>
                    <div className="tech-list">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <Github size={20} />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <ExternalLink size={20} />
                        Check it out
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {zoomedImage && (
            <motion.div
              className="zoomed-image-overlay"
              onClick={() => setZoomedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={zoomedImage}
                alt="Zoomed view"
                className="zoomed-image"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              />
              <button className="zoomed-image-close" onClick={() => setZoomedImage(null)}>
                <X size={32} />
              </button>
            </motion.div>
          )}
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal; 