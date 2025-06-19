import Hero from '../../components/home/Hero';
import About from '../../components/home/About';
import Projects from '../../components/home/Projects';
import Experience from '../../components/home/Experience';
import Contact from '../../components/home/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default HomePage;