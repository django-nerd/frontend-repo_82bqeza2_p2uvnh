export default function Services() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">What we do</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Agent Strategy & Roadmaps', desc: 'Identify high-ROI agent use-cases, risk profile, and evaluation plans.' },
            { title: 'Voice & Realtime Agents', desc: 'Turn-taking, TTS/STT, latency budgets, and safety guardrails.' },
            { title: 'Tooling & Integrations', desc: 'Action models, function calling, retrieval, and monitoring.' },
            { title: 'Evaluation Harnesses', desc: 'Task suites, adversarial prompts, and human-in-the-loop review.' },
            { title: 'Deployment & Ops', desc: 'Observability, rollback strategies, and policy alignment.' },
            { title: 'Team Enablement', desc: 'Workshops and codebases to upskill your team quickly.' },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-medium text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
