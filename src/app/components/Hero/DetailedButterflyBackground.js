'use client';

import { useEffect, useRef } from 'react';

export default function DetailedButterflyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

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

    // Butterfly state
    const butterfly = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: 0,
      vy: 0,
      angle: 0,
      targetAngle: 0,
      size: 40, // Base size
      flapSpeed: 0.8,
      flapTime: 0,
      roamTimeX: Math.random() * 100,
      roamTimeY: Math.random() * 100,
    };

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // 1. Update butterfly position using smooth wandering logic (lissajous + noise simulation)
      butterfly.roamTimeX += 0.01;
      butterfly.roamTimeY += 0.013;

      // Calculate target velocity
      const targetVx = Math.sin(butterfly.roamTimeX) * 3 + Math.sin(butterfly.roamTimeX * 2.5) * 1.5;
      const targetVy = Math.cos(butterfly.roamTimeY) * 3 + Math.sin(butterfly.roamTimeY * 1.8) * 1.5;

      // Smoothly interpolate velocity
      butterfly.vx += (targetVx - butterfly.vx) * 0.02;
      butterfly.vy += (targetVy - butterfly.vy) * 0.02;

      // Keep inside bounds softly
      const margin = 100;
      if (butterfly.x < margin) butterfly.vx += 0.1;
      if (butterfly.x > window.innerWidth - margin) butterfly.vx -= 0.1;
      if (butterfly.y < margin) butterfly.vy += 0.1;
      if (butterfly.y > window.innerHeight - margin) butterfly.vy -= 0.1;

      butterfly.x += butterfly.vx;
      butterfly.y += butterfly.vy;

      // Calculate angle based on velocity
      const speed = Math.sqrt(butterfly.vx * butterfly.vx + butterfly.vy * butterfly.vy);
      if (speed > 0.1) {
        butterfly.targetAngle = Math.atan2(butterfly.vy, butterfly.vx);
      }

      // Smoothly rotate towards target angle
      let angleDiff = butterfly.targetAngle - butterfly.angle;
      // Normalize angle difference to -PI to PI
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      butterfly.angle += angleDiff * 0.1;

      // Flap animation
      // Flap faster when moving faster
      butterfly.flapTime += butterfly.flapSpeed + (speed * 0.05);
      // Wing scale goes from 1 to -0.5 to simulate 3D flapping
      const wingFlap = Math.sin(butterfly.flapTime);
      const isWingUp = wingFlap > 0;

      // 2. Draw Butterfly
      ctx.save();
      ctx.translate(butterfly.x, butterfly.y);
      // Rotate so it faces the direction of travel (add PI/2 because drawing is naturally pointing up)
      ctx.rotate(butterfly.angle + Math.PI / 2); 

      // Draw Shadow (offset based on height simulation)
      ctx.save();
      ctx.translate(15, 20); // Shadow offset
      ctx.scale(0.8, 0.8); // Shadow is slightly smaller
      ctx.globalAlpha = 0.1;
      drawButterflyShape(ctx, butterfly.size, wingFlap, true);
      ctx.restore();

      // Draw Actual Butterfly
      drawButterflyShape(ctx, butterfly.size, wingFlap, false);

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    const drawButterflyShape = (ctx, size, wingFlap, isShadow) => {
      // The amount the wings fold up (compress the X axis)
      // When wingFlap is 1, wings are flat open. When -1, wings are folded up.
      // We limit folding to ~0.1 so they don't completely disappear, and use absolute for visual perspective
      const wingPerspective = Math.max(0.1, Math.abs(wingFlap)); 

      if (!isShadow) {
        // Draw Antennae
        ctx.strokeStyle = '#111';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.3);
        ctx.quadraticCurveTo(-size * 0.2, -size * 0.6, -size * 0.3, -size * 0.7);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.3);
        ctx.quadraticCurveTo(size * 0.2, -size * 0.6, size * 0.3, -size * 0.7);
        ctx.stroke();
      }

      ctx.save();
      // Apply wing flapping perspective
      ctx.scale(wingPerspective, 1);

      // --- Left Wing ---
      drawWing(ctx, size, -1, isShadow);
      
      // --- Right Wing ---
      drawWing(ctx, size, 1, isShadow);
      
      ctx.restore();

      if (!isShadow) {
        // Draw Body (Thorax and Abdomen)
        const bodyGrad = ctx.createLinearGradient(0, -size * 0.4, 0, size * 0.4);
        bodyGrad.addColorStop(0, '#332211');
        bodyGrad.addColorStop(1, '#111111');
        ctx.fillStyle = bodyGrad;
        
        ctx.beginPath();
        ctx.ellipse(0, 0, size * 0.1, size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Head
        ctx.beginPath();
        ctx.arc(0, -size * 0.4, size * 0.12, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawWing = (ctx, size, side, isShadow) => {
      // side is -1 for left, 1 for right
      
      ctx.save();
      ctx.scale(side, 1); // Flip context for right wing

      // Detailed Wing Path (Swallowtail style)
      const path = new Path2D();
      path.moveTo(0, -size * 0.3); // Connect to body top
      path.bezierCurveTo(size * 0.8, -size * 0.8, size * 1.5, -size * 0.2, size * 1.2, size * 0.2); // Top wing outer edge
      path.bezierCurveTo(size * 1.1, size * 0.4, size * 0.8, size * 0.5, size * 0.6, size * 0.4); // Indent between top and bottom wing
      path.bezierCurveTo(size * 0.9, size * 0.8, size * 0.7, size * 1.3, size * 0.5, size * 1.6); // Bottom wing tail
      path.lineTo(size * 0.4, size * 1.2); // Inner tail edge
      path.bezierCurveTo(size * 0.2, size * 1.0, size * 0.1, size * 0.6, 0, size * 0.2); // Inner bottom edge back to body

      if (isShadow) {
        ctx.fillStyle = '#000';
        ctx.fill(path);
      } else {
        // Main Wing Gradient (Matching Website Bronze/Gold theme)
        const wingGrad = ctx.createRadialGradient(size * 0.2, 0, size * 0.1, size * 0.5, 0, size * 1.5);
        wingGrad.addColorStop(0, '#e8c8a8'); // Light gold inner
        wingGrad.addColorStop(0.5, '#c68e61'); // Rich bronze middle
        wingGrad.addColorStop(0.9, '#8c5a35'); // Dark brown outer
        wingGrad.addColorStop(1, '#111111'); // Black edges

        ctx.fillStyle = wingGrad;
        ctx.fill(path);

        // Wing Edge border
        ctx.strokeStyle = '#111111';
        ctx.lineWidth = 2;
        ctx.stroke(path);

        // --- Draw Stunning Details (Veins and Spots) ---
        // Veins
        ctx.strokeStyle = 'rgba(17, 17, 17, 0.4)';
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.1);
        ctx.quadraticCurveTo(size * 0.5, -size * 0.3, size * 1.1, -size * 0.2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, -size * 0.1);
        ctx.quadraticCurveTo(size * 0.4, 0, size * 1.0, size * 0.2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, size * 0.1);
        ctx.quadraticCurveTo(size * 0.3, size * 0.4, size * 0.6, size * 0.9);
        ctx.stroke();

        // Edge Spots (Creamy off-white to match theme)
        ctx.fillStyle = '#f5f3ec';
        const spots = [
          {x: size * 1.1, y: -size * 0.4, r: size * 0.05},
          {x: size * 1.2, y: -size * 0.15, r: size * 0.06},
          {x: size * 1.15, y: size * 0.1, r: size * 0.04},
          {x: size * 0.65, y: size * 0.9, r: size * 0.05},
          {x: size * 0.5, y: size * 1.1, r: size * 0.04},
        ];

        spots.forEach(spot => {
          ctx.beginPath();
          ctx.arc(spot.x, spot.y, spot.r, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      ctx.restore();
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
