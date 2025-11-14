export default function BackgroundFX() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(88,28,135,0.25),rgba(0,0,0,0)),radial-gradient(800px_400px_at_80%_120%,rgba(34,197,94,0.2),rgba(0,0,0,0)),radial-gradient(900px_500px_at_-10%_80%,rgba(59,130,246,0.2),rgba(0,0,0,0))]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#0b0b14_0%,#0b0b14_20%,#111827_35%,#0b0b14_55%,#0b0b14_70%,#0b0b14_100%)] opacity-40 animate-gradient-move" />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,rgba(0,0,0,0.6))]" />

      {/* Subtle grid for depth */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`, backgroundSize: '48px 48px', backgroundPosition: '0 0, 0 0' }} />

      {/* Floating glow orbs */}
      <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full blur-3xl bg-fuchsia-500/20 animate-float-slow" />
      <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full blur-3xl bg-blue-500/20 animate-float-slower" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl bg-emerald-500/20 animate-float-slowest" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay animate-noise" style={{ backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'>
          <filter id='n'>
            <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/>
          </filter>
          <rect width='100%' height='100%' filter='url(%23n)'/>
        </svg>
      `)}')` }} />
    </div>
  )
}
