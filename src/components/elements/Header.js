import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path, sectionId = null) => {
    if (sectionId) {
      // Handle sections on home page
      if (location.pathname !== '/') {
        // If not on home page, navigate to home first
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        // If on home page, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Handle separate routes
      if (location.pathname === path) {
        // If already on the page, scroll to top
        window.scrollTo(0, 0);
      } else {
        // Navigate to the page
        navigate(path);
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navItems = [
    { path: '/projects', label: 'Projects', sectionId: null },
    { path: '/', label: 'Experience', sectionId: 'experience' },
    { path: '/speaking', label: 'Speaking', sectionId: null },
    { path: '/about', label: 'About', sectionId: null },
    { path: '/', label: 'Contact', sectionId: 'contact' }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span onClick={handleLogoClick}>S.Y. Chun</span>
        </motion.div>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <motion.li
                key={item.path + item.sectionId}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  className="nav-link"
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header; 