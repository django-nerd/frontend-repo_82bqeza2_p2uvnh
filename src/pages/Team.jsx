export default function TeamPage() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Meet the team</h1>
        <p className="mt-4 text-gray-300 max-w-3xl">Small, senior, and hands-on. We bring backgrounds from top product companies and research labs to ship durable, measurable value.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: 'Ava Chen', role: 'Founder, Systems' },
            { name: 'Mason Lee', role: 'Founder, Product' },
            { name: 'Sam Patel', role: 'Research Engineer' },
            { name: 'Riley Brooks', role: 'Design Lead' },
            { name: 'Jordan Kim', role: 'Voice Engineer' },
            { name: 'Quinn Rivera', role: 'Solutions Architect' },
          ].map((m) => (
            <div key={m.name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
              <h3 className="mt-4 text-white font-medium">{m.name}</h3>
              <p className="text-sm text-gray-300">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
