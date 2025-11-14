const people = [
  { name: 'Maya Chen', role: 'Principal, Agents', bio: 'Multi-agent planning, evals, and tool-use.' },
  { name: 'Jon Rivera', role: 'Head of Voice', bio: 'Streaming speech, turn-taking, and UX.' },
  { name: 'Leila Kapoor', role: 'Security Lead', bio: 'Safety, governance, and compliance.' },
  { name: 'Arman Patel', role: 'Integrations', bio: 'CRMs, data infra, and realtime APIs.' },
]

export default function Team() {
  return (
    <section id="team" className="snap-start py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-violet-300/80">Meet the team</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">Operators who ship</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {people.map((p) => (
            <article key={p.name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
              <h3 className="mt-4 font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-gray-400">{p.role}</p>
              <p className="mt-3 text-sm text-gray-300">{p.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
