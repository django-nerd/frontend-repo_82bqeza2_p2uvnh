const logos = [
  { name: 'OpenAI', w: 72 },
  { name: 'Anthropic', w: 96 },
  { name: 'Pinecone', w: 88 },
  { name: 'AWS', w: 52 },
  { name: 'Azure', w: 64 },
  { name: 'GCP', w: 56 },
]

export default function Logos() {
  return (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium text-gray-500">
          Trusted tooling and platforms we implement
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {logos.map((l) => (
            <div key={l.name} className="font-semibold text-gray-700" style={{ width: l.w }}>
              {l.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
