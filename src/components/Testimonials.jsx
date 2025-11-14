const quotes = [
  {
    q: "They built and launched our support agent in weeks. Latency, guardrails, and handoffs were all dialed in.",
    a: "Head of CX, Fintech"
  },
  {
    q: "The evaluation setup gave us clarity on quality and safety. We finally moved from demo to production.",
    a: "VP Engineering, SaaS"
  },
  {
    q: "Voice UX felt natural and on-brand. Our completion rates jumped immediately.",
    a: "Product Lead, Marketplace"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="snap-start py-24 bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-300/80">What clients say</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">Testimonials</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-gray-200">“{t.q}”</p>
              <p className="mt-4 text-sm text-gray-400">{t.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
