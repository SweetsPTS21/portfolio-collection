import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const particles = [];
    let animationFrame;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const addSparkle = (event) => {
      particles.push({
        x: event.clientX,
        y: event.clientY,
        size: 5 + Math.random() * 7,
        life: 1,
        rotation: Math.random() * Math.PI,
        hue: Math.random() > 0.5 ? '#F9A8D4' : '#93C5FD',
      });
      if (particles.length > 42) particles.shift();
    };

    const drawStar = (particle) => {
      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.rotation);
      context.globalAlpha = particle.life;
      context.fillStyle = particle.hue;
      context.strokeStyle = 'rgba(255,255,255,.82)';
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(0, -particle.size);
      context.lineTo(particle.size * 0.28, -particle.size * 0.28);
      context.lineTo(particle.size, 0);
      context.lineTo(particle.size * 0.28, particle.size * 0.28);
      context.lineTo(0, particle.size);
      context.lineTo(-particle.size * 0.28, particle.size * 0.28);
      context.lineTo(-particle.size, 0);
      context.lineTo(-particle.size * 0.28, -particle.size * 0.28);
      context.closePath();
      context.fill();
      context.stroke();
      context.restore();
    };

    const tick = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach((particle, index) => {
        particle.y -= 0.22;
        particle.rotation += 0.035;
        particle.life -= 0.018;
        drawStar(particle);
        if (particle.life <= 0) particles.splice(index, 1);
      });
      animationFrame = window.requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', addSparkle);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', addSparkle);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />;
}
