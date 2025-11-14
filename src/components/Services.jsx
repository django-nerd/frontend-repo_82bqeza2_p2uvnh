import { Cpu, MessageSquare, Workflow, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: MessageSquare,
    title: 'Conversation design',
    desc: 'Intent modeling, guardrails, and voice UX for natural interactions.',
  },
  {
    icon: Workflow,
    title: 'Agent orchestration',
    desc: 'Multi-agent planning, tools, memory, and evaluation loops.',
  },
  {
    icon: Cpu,
    title: 'Integrations & data',
    desc: 'CRMs, knowledge bases, vector search, and realtime APIs.',
  },
  {
    icon: ShieldCheck,
    title: 'Governance & security',
    desc: 'PII handling, red-teaming, and policy-aligned deployment.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-purple-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">What we build</h2>
          <p className="mt-3 text-gray-700">We craft production systems from first prototype to scale.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/80 ring-1 ring-gray-200 p-6 hover:shadow-lg transition shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
