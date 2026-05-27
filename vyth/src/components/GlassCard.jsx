import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function GlassCard({ children, className = '', asset, assetTone = 'default' }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out coordinate tracking with spring configurations
  const springConfig = { stiffness: 180, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-180, 180], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-180, 180], [-8, 8]), springConfig);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate coordinate centers relative to card dimensions
    const x = event.clientX - rect.left - width / 2;
    const y = event.clientY - rect.top - height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Organic irregular border radius that mimics pencil sketch outline borders
  const handDrawnRadius = "20px 24px 22px 20px / 22px 20px 24px 22px";

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        borderRadius: handDrawnRadius
      }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`glass-card theme-card-paper p-6 flex flex-col justify-between transition-shadow duration-300 ${className}`}
    >
      {/* Glare reflect sweeping overlays */}
      <div className="glass-reflection-glow absolute inset-0 pointer-events-none" />
      <div className="theme-card-marginalia absolute inset-0 pointer-events-none" />
      {asset && (
        <img
          src={asset}
          className={`card-watermark-asset card-watermark-${assetTone}`}
          alt=""
          aria-hidden="true"
        />
      )}
      
      {/* Elevate child content physically inside depth space */}
      <div style={{ transform: 'translateZ(15px)' }} className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
