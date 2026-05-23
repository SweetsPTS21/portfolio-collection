import React from 'react';
import { MotionConfig } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Mindset from './components/Mindset';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <Background />
        <div className="app-content">
          <Navbar />
          <main>
            <About />
            <Projects />
            <Mindset />
            <Conclusion />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
