export default function Contact() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">Let’s talk</h1>
        <p className="mt-4 text-gray-300">Tell us about your goals and we’ll propose a path to value in weeks, not months.</p>
        <form className="mt-8 grid gap-4 max-w-2xl">
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-400" placeholder="Name" />
          <input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-400" placeholder="Email" type="email" />
          <textarea className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-400" placeholder="How can we help?" rows={5} />
          <button className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-5 py-3 font-medium hover:bg-gray-200 transition">Send</button>
        </form>
      </div>
    </section>
  )
}
