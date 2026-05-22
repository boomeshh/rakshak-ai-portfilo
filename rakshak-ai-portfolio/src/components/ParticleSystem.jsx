/**
 * ParticleSystem — canvas-based floating particle animation overlay.
 * Renders 50 small cyan particles that drift around the canvas, wrapping
 * at edges. Cleans up on unmount.
 *
 * Requirements: 3.8, 13.3, 14.3, 15.3
 */

import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 50;

function createParticle(width, height) {
  const opacity = 0.1 + Math.random() * 0.5; // 0.1 – 0.6
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5), // -0.5 – 0.5
    vy: (Math.random() - 0.5),
    radius: 1 + Math.random(), // 1 – 2
    opacity,
  };
}

const ParticleSystem = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let rafId = null;
    let particles = [];

    const resize = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas.parentElement || canvas;
      canvas.width = w;
      canvas.height = h;
      // Re-initialise particles so they stay within the new bounds
      particles = Array.from({ length: PARTICLE_COUNT }, () =>
        createParticle(canvas.width, canvas.height)
      );
    };

    const draw = () => {
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    // Initial size + particles
    resize();

    // Watch for container size changes
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement || canvas);

    // Start loop
    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
};

export default ParticleSystem;
