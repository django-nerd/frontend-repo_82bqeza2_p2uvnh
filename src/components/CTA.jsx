export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-amber-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Ready to ship agents?</h2>
            <p className="mt-3 text-white/90 max-w-lg">Tell us about your use case. Well respond within one business day with next steps and a proposed path.</p>
          </div>
          <form className="bg-white/95 backdrop-blur rounded-2xl p-6 ring-1 ring-white/60 shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Full name" required />
              <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Work email" type="email" required />
            </div>
            <input className="mt-4 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Company" />
            <textarea className="mt-4 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Briefly describe your goals" rows={4}></textarea>
            <button className="mt-4 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition">Request consultation</button>
          </form>
        </div>
      </div>
    </section>
  )
}
