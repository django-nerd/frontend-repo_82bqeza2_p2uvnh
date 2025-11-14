import Spline from '@splinetool/react-spline'

export default function DarkHero() {
  return (
    <section id="home" className="snap-start relative h-[100vh] min-h-[680px] w-full overflow-hidden bg-gray-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/50 to-gray-950/90 pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/10 px-3 py-1 text-xs font-medium text-violet-200 shadow-sm backdrop-blur">
              Agentic AI Consulting
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Design, deploy, and scale voice & reasoning agents
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-300">
              We turn ambiguous workflows into automated agent systems—from conversation design and tool orchestration to secure deployment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white text-gray-950 px-6 py-3 text-sm font-medium shadow hover:bg-gray-200 transition">
                Book a discovery call
              </a>
              <a href="#who" className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium ring-1 ring-white/10 text-white hover:bg-white/15 transition">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
