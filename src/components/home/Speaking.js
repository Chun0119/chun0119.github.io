import React from 'react';
import { motion } from 'framer-motion';
import { speakingEngagements } from '../../config/speaking';
import './Speaking.css';

const Speaking = () => {
  const webinarDetails = speakingEngagements[0]; // Get the first speaking engagement

  return (
    <section id="speaking" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Speaking Engagement
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sharing knowledge and insights with the developer community
        </motion.p>

        <motion.div
          className="speaking-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="speaking-header">
            <div className="speaking-badge">
              <span className="badge-icon">🎤</span>
              <span className="badge-text">Featured Speaker</span>
            </div>
            <div className="speaking-status">
              {webinarDetails.isUpcoming ? (
                <span className="status-upcoming">Upcoming</span>
              ) : (
                <span className="status-past">Past Event</span>
              )}
            </div>
          </div>

          <div className="speaking-content">
            <h3 className="webinar-title">{webinarDetails.title}</h3>
            <p className="webinar-organizer">{webinarDetails.organizer}</p>
            
            <div className="webinar-details">
              <div className="detail-item">
                <span className="detail-icon">📅</span>
                <span className="detail-text">{webinarDetails.date}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⏰</span>
                <span className="detail-text">{webinarDetails.time}</span>
              </div>
              <div className="detail-item">
                <span className="detail-icon">⏱️</span>
                <span className="detail-text">{webinarDetails.duration}</span>
              </div>
            </div>

            <div className="webinar-topic">
              <h4>Topic: {webinarDetails.topic}</h4>
              <p>{webinarDetails.description}</p>
            </div>

            <div className="webinar-points">
              <h4>Key Points:</h4>
              <ul className="points-list">
                {webinarDetails.keyPoints.map((point, index) => (
                  <li key={index} className="point-item">
                    <span className="point-bullet">•</span>
                    <span className="point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {webinarDetails.isUpcoming && (
              <motion.div
                className="registration-section"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <a 
                  href={webinarDetails.registrationLink} 
                  className="register-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="button-icon">🎯</span>
                  Register for Webinar
                </a>
                <p className="registration-note">
                  Free registration • Limited seats available
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking; 