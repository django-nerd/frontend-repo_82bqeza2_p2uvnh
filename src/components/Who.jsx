export default function Who() {
  return (
    <section id="who" className="snap-start relative py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-violet-300/80">Who we are</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">Agents-first builders with production rigor</h2>
          <p className="mt-4 text-gray-300">We’re a senior team of engineers, designers, and researchers focused on agentic systems for voice and reasoning. We’ve shipped assistants that book, troubleshoot, and reason across complex tools—safely and reliably.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">• 0→1 prototyping and evaluation harnesses</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">• Secure, policy-aligned deployments</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">• Tool orchestration, memory, and monitoring</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">• Voice UX, turn-taking, and guardrails</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
