import { useEffect, useState, useMemo } from 'react'

// Full-viewport, behind-content background slider with animated transitions
export default function BackgroundSlider({ slides = [], interval = 6000 }) {
  const safeSlides = slides.length ? slides : defaultSlides
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % safeSlides.length), interval)
    return () => clearInterval(id)
  }, [safeSlides.length, interval])

  const current = safeSlides[index]
  const next = safeSlides[(index + 1) % safeSlides.length]

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Crossfade layers */}
      <div className="absolute inset-0">
        {/* current */}
        <SlideLayer key={`cur-${index}`} slide={current} visible />
        {/* next (preloaded for smoother transition) */}
        <SlideLayer key={`nxt-${index}`} slide={next} />
      </div>

      {/* Soft overlays for depth and readability */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,transparent,rgba(0,0,0,0.55))]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`, backgroundSize: '48px 48px', backgroundPosition: '0 0, 0 0' }} />
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

function SlideLayer({ slide, visible = false }) {
  const style = useMemo(() => {
    const bg = slide.type === 'image'
      ? `url(${slide.src})`
      : `radial-gradient(1200px_600px_at_50%_-10%,${slide.colors[0]},rgba(0,0,0,0)),radial-gradient(800px_400px_at_80%_120%,${slide.colors[1]},rgba(0,0,0,0)),radial-gradient(900px_500px_at_-10%_80%,${slide.colors[2]},rgba(0,0,0,0))`
    return {
      backgroundImage: bg,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'opacity 1200ms ease, transform 60000ms linear',
    }
  }, [slide])

  return (
    <div
      className={`absolute inset-0 will-change-transform ${visible ? 'opacity-100' : 'opacity-0'} animate-gradient-move`}
      style={style}
    />
  )
}

const defaultSlides = [
  { type: 'gradient', colors: ['rgba(88,28,135,0.28)', 'rgba(34,197,94,0.22)', 'rgba(59,130,246,0.22)'] },
  { type: 'gradient', colors: ['rgba(236,72,153,0.28)', 'rgba(14,165,233,0.22)', 'rgba(250,204,21,0.20)'] },
  { type: 'gradient', colors: ['rgba(99,102,241,0.28)', 'rgba(34,197,94,0.22)', 'rgba(244,63,94,0.20)'] },
]
