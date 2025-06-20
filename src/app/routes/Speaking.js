import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { speakingEngagements } from '../../config/speaking';
import './Speaking.css';

const Speaking = () => {
  const webinarDetails = speakingEngagements[0]; // Get the first speaking engagement

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Sharing knowledge and insights with the  community
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
                <span className="detail-icon">📍</span>
                <span className="detail-text">{webinarDetails.location}</span>
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

            {/* LinkedIn post embed */}
            <div style={{ margin: '2rem 0', textAlign: 'center' }}>
              <iframe src={webinarDetails.linkedinPost} height="400" width="100%" frameBorder="0" allowFullScreen="" title="LinkedIn Post"></iframe>
            </div>

            {/* Webinar image */}
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <img src={webinarDetails.image} alt="Webinar" style={{ maxWidth: '100%', borderRadius: '12px', border: '1px solid var(--border-primary)' }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speaking; 