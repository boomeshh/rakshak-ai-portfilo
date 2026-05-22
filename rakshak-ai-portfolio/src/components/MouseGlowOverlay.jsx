import useMouseGlow from '../hooks/useMouseGlow'

function MouseGlowOverlay() {
  const { x, y } = useMouseGlow()

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(0,245,255,0.04), transparent 80%)`,
      }}
    />
  )
}

export default MouseGlowOverlay
