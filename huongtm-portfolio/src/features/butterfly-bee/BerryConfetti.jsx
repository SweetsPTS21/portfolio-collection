import React, { useEffect, useRef } from "react";

export const BerryConfetti = ({ active = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height - 20;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 2 + 1.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        // Types: 'strawberry', 'heart', 'seed', 'circle'
        const types = ["strawberry", "strawberry", "heart", "seed", "circle"];
        this.type = types[Math.floor(Math.random() * types.length)];
        
        // Colors
        const pinkColors = ["#F4A7BE", "#F9C8D8", "#FFE8F0"];
        this.color = pinkColors[Math.floor(Math.random() * pinkColors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        // Reset particle if it falls off bottom
        if (this.y > canvas.height + 20) {
          this.y = -40;
          this.x = Math.random() * canvas.width;
          this.speedY = Math.random() * 2 + 1.5;
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);

        if (this.type === "strawberry") {
          // Draw a small strawberry shape
          ctx.beginPath();
          ctx.fillStyle = "#F4A7BE";
          ctx.strokeStyle = "#4A2535";
          ctx.lineWidth = 1.5;
          ctx.ellipse(0, 0, this.size, this.size * 1.3, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Leaf on top
          ctx.beginPath();
          ctx.fillStyle = "#A8EDCA";
          ctx.ellipse(0, -this.size * 1.1, this.size * 0.4, this.size * 0.2, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === "heart") {
          // Draw a small cute heart
          ctx.beginPath();
          ctx.fillStyle = "#F9C8D8";
          ctx.strokeStyle = "#4A2535";
          ctx.lineWidth = 1.5;
          const h = this.size;
          ctx.moveTo(0, -h / 4);
          ctx.bezierCurveTo(-h / 2, -h, -h, -h / 2, -h / 2, h / 4);
          ctx.lineTo(0, h);
          ctx.lineTo(h / 2, h / 4);
          ctx.bezierCurveTo(h, -h / 2, h / 2, -h, 0, -h / 4);
          ctx.fill();
          ctx.stroke();
        } else if (this.type === "seed") {
          // Seed teardrop
          ctx.beginPath();
          ctx.fillStyle = "#FFE89A";
          ctx.strokeStyle = "#4A2535";
          ctx.lineWidth = 1.2;
          ctx.ellipse(0, 0, this.size * 0.4, this.size * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        } else {
          // Soft pastel pink dot
          ctx.beginPath();
          ctx.fillStyle = "#FBDCE8";
          ctx.arc(0, 0, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Initialize 24 particles (lightweight performance constraint)
    const particleCount = 24;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 99, // Overlay above cards
        pointerEvents: "none",
      }}
    />
  );
};
