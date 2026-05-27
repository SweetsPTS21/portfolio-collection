import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

const routeAssetLayers = {
  about: [
    {
      src: '/assets/images/book.png',
      className: 'route-asset-book',
      depth: 0.7,
      rotate: -5,
    },
    {
      src: '/assets/images/quill.png',
      className: 'route-asset-quill',
      depth: 1.1,
      rotate: 8,
    },
    {
      src: '/assets/images/wreath.png',
      className: 'route-asset-wreath',
      depth: 0.45,
      rotate: 0,
    },
  ],
  projects: [
    {
      src: '/assets/images/scale.png',
      className: 'route-asset-scale',
      depth: 0.75,
      rotate: 0,
    },
    {
      src: '/assets/images/pillar.png',
      className: 'route-asset-pillar-left',
      depth: 1,
      rotate: -2,
    },
    {
      src: '/assets/images/pillar.png',
      className: 'route-asset-pillar-right',
      depth: 1,
      rotate: 2,
    },
    {
      src: '/assets/ornaments/legal-marginalia.svg',
      className: 'route-asset-marginalia',
      depth: 0.5,
      rotate: 0,
    },
  ],
  conclusion: [
    {
      src: '/assets/images/hourglass.png',
      className: 'route-asset-hourglass',
      depth: 0.85,
      rotate: -3,
    },
    {
      src: '/assets/images/wreath.png',
      className: 'route-asset-wreath-large',
      depth: 0.5,
      rotate: 0,
    },
    {
      src: '/assets/ornaments/seal-ring.svg',
      className: 'route-asset-seal',
      depth: 0.6,
      rotate: 0,
    },
  ],
};

export default function InteractiveBackground({ currentRoute }) {
  const canvasRef = useRef(null);
  const mouse = useMousePosition();
  const { scrollY } = useScroll();

  const springConfig = { stiffness: 40, damping: 22, mass: 1.2 };
  const parallaxX = useSpring(
    useTransform(scrollY, [0, 1800], [0, -45]),
    springConfig
  );
  const parallaxY = useSpring(
    useTransform(scrollY, [0, 1800], [0, -90]),
    springConfig
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // L2: Colored Pastel Shavings Particle System (Emulating THEME.jpg crayons)
    let particles = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Define colors directly matching colored-pencils of the theme
    const pastelColors = [
      '120, 148, 157', // Dusty Teal
      '89, 116, 109', // Sage Green
      '44, 53, 57', // Graphite charcoal
      '247, 235, 216', // Warm Sand
    ];

    class PastelParticle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = Math.random() * 0.35 + 0.15;
        this.size = Math.random() * 2.2 + 0.6; // Soft pastel flecks
        this.colorIndex = Math.floor(Math.random() * pastelColors.length);
        this.alpha = Math.random() * 0.18 + 0.04;
      }

      update(mouseX, mouseY) {
        this.x += this.vx;
        this.y += this.vy;

        // Interactive gravity pull to mouse
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const attractRadius = 180;

        if (dist < attractRadius) {
          const force = (attractRadius - dist) / attractRadius;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }

        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pastelColors[this.colorIndex]}, ${this.alpha})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new PastelParticle());
    }

    // Dynamic Horizon gradient paint wash (sunset-lake ambient horizon blend)
    const drawHorizon = () => {
      // Create a gorgeous radial gradient in background
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height,
        10,
        canvas.width / 2,
        canvas.height,
        canvas.height * 1.2
      );
      grad.addColorStop(0, 'rgba(247, 235, 216, 0.42)'); // Sand apricot glow bottom center
      grad.addColorStop(0.5, 'rgba(226, 236, 240, 0.35)'); // Dusty sky blue middle
      grad.addColorStop(1, 'rgba(248, 245, 238, 0)'); // Art paper fading

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Paint the sky sunrise wash first
      drawHorizon();

      // Render the colored crayon carvings
      particles.forEach((p) => {
        p.update(mouse.x, mouse.y);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mouse]);

  const morphPaths = {
    about: 'M 150 150 C 450 750, 750 150, 960 540 S 1470 930, 1770 150',
    projects: 'M 100 540 C 400 540, 700 540, 960 540 S 1520 540, 1820 540',
    conclusion: 'M 960 80 C 450 480, 450 780, 960 980 S 1470 480, 960 80',
  };

  return (
    <div className="interactive-background-system fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Layer 1: Art paper thô base breathing wash */}
      <div className="bg-paper-breath" />
      <div className="theme-paper-texture" />
      <div className="paper-grain-overlay" />

      {/* Layer 2: Canvas colored pastel particles & radial horizon gradient washes */}
      <canvas ref={canvasRef} className="absolute inset-0 block" />

      {/* Layer 3: route-specific theme assets used as deep pencil-sketch atmosphere */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="theme-asset-layer absolute inset-0"
      >
        {(routeAssetLayers[currentRoute] || routeAssetLayers.about).map(
          (asset, index) => (
            <motion.img
              key={`${currentRoute}-${asset.src}-${index}`}
              src={asset.src}
              alt=""
              aria-hidden="true"
              className={`theme-route-asset ${asset.className}`}
              initial={{ opacity: 0, scale: 0.94, rotate: asset.rotate }}
              animate={{ opacity: 1, scale: 1, rotate: asset.rotate }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ '--asset-depth': asset.depth }}
            />
          )
        )}
      </motion.div>

      {/* Layer 4: Architectural shapes & Signature Wooden Dock bridge from photo */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute inset-0 opacity-20"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          className="absolute inset-0 overflow-visible"
          fill="none"
        >
          {/* Active morph paths */}
          <motion.path
            animate={{ d: morphPaths[currentRoute] || morphPaths.about }}
            transition={{ type: 'spring', stiffness: 35, damping: 15, mass: 1 }}
            stroke="var(--pencil-stroke)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />

          {/* Guidelines */}
          <circle
            cx="960"
            cy="540"
            r="420"
            stroke="var(--pencil-light)"
            strokeWidth="0.8"
            strokeDasharray="2 4"
          />
          <line
            x1="100"
            y1="540"
            x2="1820"
            y2="540"
            stroke="var(--pencil-light)"
            strokeWidth="0.5"
            strokeDasharray="10 10"
          />
        </svg>
      </motion.div>
    </div>
  );
}
