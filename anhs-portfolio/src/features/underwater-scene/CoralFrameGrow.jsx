import { motion } from 'framer-motion';
import { coralGrow, isReducedMotion } from '../../app/motionConfig';

export default function CoralFrameGrow() {
  if (isReducedMotion) return null;

  return (
    <div className="fixed inset-0 z-[3] pointer-events-none" aria-hidden="true">
      {/* Left coral */}
      <motion.div
        variants={coralGrow}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-24 md:w-36 lg:w-48"
        style={{ transformOrigin: 'bottom center' }}
      >
        <svg viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 300 C20 250 10 200 30 160 C50 120 20 100 40 60 C50 40 35 20 45 10"
            stroke="var(--coral-pink)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            style={{ animation: 'coralSway 7s ease-in-out infinite' }}
          />
          <path
            d="M50 300 C50 260 60 220 45 180 C30 140 55 120 50 80 C48 60 60 40 55 20"
            stroke="var(--jellyfish-pink)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.5"
            style={{ animation: 'coralSway 6s ease-in-out infinite 0.5s' }}
          />
          <path
            d="M80 300 C80 270 70 240 85 200 C100 160 75 130 90 100"
            stroke="var(--anemone-purple)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            style={{ animation: 'coralSway 8s ease-in-out infinite 1s' }}
          />
          {/* Coral dots */}
          <circle cx="45" cy="10" r="5" fill="var(--coral-pink)" opacity="0.7" />
          <circle cx="55" cy="20" r="4" fill="var(--jellyfish-pink)" opacity="0.6" />
          <circle cx="30" cy="60" r="6" fill="var(--coral-pink)" opacity="0.5" />
          <circle cx="90" cy="100" r="4" fill="var(--anemone-purple)" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Right coral */}
      <motion.div
        variants={coralGrow}
        initial="initial"
        animate="animate"
        transition={{ duration: 1.2, delay: 0.6 }}
        className="absolute bottom-0 right-0 w-24 md:w-36 lg:w-48"
        style={{ transformOrigin: 'bottom center', transform: 'scaleX(-1)' }}
      >
        <svg viewBox="0 0 120 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 300 C20 250 10 200 30 160 C50 120 20 100 40 60 C50 40 35 20 45 10"
            stroke="var(--reef-teal)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            style={{ animation: 'coralSway 7.5s ease-in-out infinite 0.3s' }}
          />
          <path
            d="M50 300 C50 260 60 220 45 180 C30 140 55 120 50 80 C48 60 60 40 55 20"
            stroke="var(--deep-aqua)"
            strokeWidth="2.5"
            fill="none"
            opacity="0.5"
            style={{ animation: 'coralSway 6.5s ease-in-out infinite 0.8s' }}
          />
          <path
            d="M80 300 C80 270 70 240 85 200 C100 160 75 130 90 100"
            stroke="var(--reef-teal)"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            style={{ animation: 'coralSway 8.5s ease-in-out infinite 1.2s' }}
          />
          <circle cx="45" cy="10" r="5" fill="var(--reef-teal)" opacity="0.7" />
          <circle cx="55" cy="20" r="4" fill="var(--deep-aqua)" opacity="0.6" />
          <circle cx="30" cy="60" r="6" fill="var(--reef-teal)" opacity="0.5" />
        </svg>
      </motion.div>
    </div>
  );
}
