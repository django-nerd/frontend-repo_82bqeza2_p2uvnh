const steps = [
  {
    k: '1',
    t: 'Discovery',
    d: 'Define goals, constraints, success metrics, and feasibility.'
  },
  {
    k: '2',
    t: 'Prototype',
    d: 'Rapidly validate with working demos and eval harnesses.'
  },
  {
    k: '3',
    t: 'Deploy',
    d: 'Harden for production with monitoring, security, and SLAs.'
  },
  {
    k: '4',
    t: 'Scale',
    d: 'Iterate, optimize cost/latency, and expand capabilities.'
  },
]

export default function Approach() {
  return (
    <section id="approach" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">How we work</h2>
          <p className="mt-3 text-gray-700">Structured, outcome-driven engagement in four phases.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none">
          {steps.map((s) => (
            <li key={s.k} className="relative rounded-2xl bg-gradient-to-b from-white to-gray-50 ring-1 ring-gray-200 p-6">
              <span className="absolute -top-3 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-white text-sm font-semibold shadow">{s.k}</span>
              <h3 className="mt-2 font-semibold text-gray-900">{s.t}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
