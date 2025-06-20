import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/elements/Header';
import AllProjects from './routes/AllProjects';
import About from './routes/About';
import Speaking from './routes/Speaking';
import Footer from '../components/elements/Footer';
import HomePage from './routes/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/about" element={<About />} />
            <Route path="/speaking" element={<Speaking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 