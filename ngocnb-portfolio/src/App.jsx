import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './app/AnimatedRoutes';
import CoffeeScene from './components/layout/CoffeeScene';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <CoffeeScene />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
