import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function useWindSimulation() {
  const windRaw = useMotionValue(0);
  const wind = useSpring(windRaw, { stiffness: 15, damping: 10, mass: 2 });

  const leafRotation = useTransform(wind, [-1, 1], [-8, 8]);
  const vineRotation = useTransform(wind, [-1, 1], [-4, 4]);
  const petalDrift = useTransform(wind, [-1, 1], [-40, 40]);
  const pollenDrift = useTransform(wind, [-1, 1], [-20, 20]);

  useEffect(() => {
    let frame;
    let time = 0;

    const simulate = () => {
      time += 0.016;
      const base = Math.sin(time * 0.3) * 0.4;
      const gust = Math.sin(time * 1.7) * Math.sin(time * 0.7) * 0.6;
      windRaw.set(base + gust);
      frame = requestAnimationFrame(simulate);
    };

    frame = requestAnimationFrame(simulate);
    return () => cancelAnimationFrame(frame);
  }, [windRaw]);

  return { wind, leafRotation, vineRotation, petalDrift, pollenDrift };
}
