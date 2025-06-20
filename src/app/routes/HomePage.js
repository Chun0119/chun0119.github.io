import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/home/Hero';
import Projects from '../../components/home/Projects';
import Experience from '../../components/home/Experience';
import Contact from '../../components/home/Contact';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);

    // Handle scroll to section if coming from another page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

export default HomePage;