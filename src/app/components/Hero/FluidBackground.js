'use client';

import { useEffect, useRef } from 'react';

export default function FluidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Wave parameters
    const waves = [
      { amplitude: 100, frequency: 0.002, speed: 0.015, color: 'rgba(255, 255, 255, 0.4)', yOffset: 0.4 },
      { amplitude: 150, frequency: 0.0015, speed: 0.01, color: 'rgba(247, 245, 240, 0.6)', yOffset: 0.5 },
      { amplitude: 80, frequency: 0.003, speed: 0.02, color: 'rgba(235, 216, 195, 0.3)', yOffset: 0.6 },
      { amplitude: 120, frequency: 0.001, speed: 0.008, color: 'rgba(198, 142, 97, 0.15)', yOffset: 0.7 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Base background color
      ctx.fillStyle = '#f7f5f0'; // var(--neutral-200)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 1;

      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);

        for (let x = 0; x <= canvas.width; x += 10) {
          // Complex wave calculation combining multiple sines for organic fluid motion
          const y1 = Math.sin(x * wave.frequency + time * wave.speed);
          const y2 = Math.sin(x * wave.frequency * 0.5 - time * wave.speed * 0.8);
          
          const y = (y1 + y2) * wave.amplitude + (canvas.height * wave.yOffset);
          
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = wave.color;
        ctx.fill();
        ctx.closePath();
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
