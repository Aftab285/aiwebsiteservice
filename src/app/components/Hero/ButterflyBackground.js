'use client';

import { useEffect, useRef } from 'react';

export default function ButterflyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Adjust canvas resolution for high-DPI displays
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', resize);
    resize();

    // Vibrant, colorful palette for the butterflies
    const colors = [
      '#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93',
      '#FF9F1C', '#E71D36', '#2EC4B6', '#FDFFFC'
    ];

    // Particle system
    const particleCount = window.innerWidth < 768 ? 150 : 400; // Less on mobile for performance
    const butterflies = [];

    class Butterfly {
      constructor() {
        this.reset();
        // Start them scattered around the screen initially
        this.y = Math.random() * window.innerHeight;
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        // Start from the bottom of the screen to "suddenly appear" flying upwards
        this.y = window.innerHeight + Math.random() * 500;
        
        this.size = Math.random() * 2.5 + 1.2; // Reduced size (was 2 to 6, now 1.2 to 3.7)
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Velocity (flying generally upwards and slightly sideways)
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = -(Math.random() * 2 + 1);
        
        // Wing animation properties
        this.wingPhase = Math.random() * Math.PI * 2;
        this.wingSpeed = Math.random() * 0.2 + 0.2;
        
        // Swaying motion
        this.swayAngle = Math.random() * Math.PI * 2;
        this.swaySpeed = Math.random() * 0.05 + 0.02;
        this.swayAmount = Math.random() * 1.5 + 0.5;
      }

      update() {
        // Apply swaying to horizontal velocity
        this.swayAngle += this.swaySpeed;
        this.x += this.vx + Math.sin(this.swayAngle) * this.swayAmount;
        this.y += this.vy;

        // Wing flapping
        this.wingPhase += this.wingSpeed;

        // Reset if it flies off the top
        if (this.y < -50) {
          this.reset();
          // Force it to spawn at the bottom so it loops continuously
          this.y = window.innerHeight + 50; 
        }
        // Wrap horizontally
        if (this.x < -50) this.x = window.innerWidth + 50;
        if (this.x > window.innerWidth + 50) this.x = -50;
      }

      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        
        // Rotate slightly based on horizontal movement
        const angle = Math.atan2(this.vy, this.vx + Math.sin(this.swayAngle) * this.swayAmount) + Math.PI / 2;
        ctx.rotate(angle);

        // Wing flap scale factor (creates the 3D flapping illusion)
        const flap = Math.abs(Math.sin(this.wingPhase));
        
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.35; // Reduced prominence (was 0.8)

        // Left wing
        ctx.beginPath();
        ctx.ellipse(-this.size * flap, 0, this.size * flap, this.size * 1.5, Math.PI / 8, 0, Math.PI * 2);
        ctx.fill();

        // Right wing
        ctx.beginPath();
        ctx.ellipse(this.size * flap, 0, this.size * flap, this.size * 1.5, -Math.PI / 8, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.fillStyle = '#333';
        ctx.globalAlpha = 0.45; // Reduced prominence (was 1)
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.3, this.size, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize butterflies
    for (let i = 0; i < particleCount; i++) {
      butterflies.push(new Butterfly());
    }

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Base background color
      ctx.fillStyle = '#f7f5f0'; // var(--neutral-200)
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      butterflies.forEach(butterfly => {
        butterfly.update();
        butterfly.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  );
}
