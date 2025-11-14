import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
              Agentic AI Consulting
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Design, deploy and scale voice & reasoning agents
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-700">
              We help teams turn ambiguous workflows into automated agent systems — from conversation design and tool orchestration to secure deployment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-gray-800 transition">
                Book a discovery call
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium ring-1 ring-gray-200 text-gray-900 hover:bg-gray-50 transition">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
