/**
 * CyberGrid — decorative CSS-animated grid background overlay.
 * Renders an absolutely-positioned div with a cyan grid pattern that
 * subtly pulses in opacity, reinforcing the cyber aesthetic.
 *
 * Requirements: 3.7, 13.3, 14.4
 */

const CyberGrid = ({ className = '' }) => {
  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(0, 245, 255, 0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 245, 255, 0.07) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    animation: 'cyberGridPulse 4s ease-in-out infinite',
  };

  return (
    <>
      <style>{`
        @keyframes cyberGridPulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1;   }
        }
      `}</style>
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={gridStyle}
        aria-hidden="true"
      />
    </>
  );
};

export default CyberGrid;
