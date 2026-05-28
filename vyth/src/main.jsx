import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Cinematic smooth inertial scrolling wrapper */}
    <ReactLenis
      root
      options={{
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Seamless soft logarithmic deceleration curve
        smoothTouch: false,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
      }}
    >
      <App />
    </ReactLenis>
  </React.StrictMode>
);
