import { Menu, ArrowRight } from 'lucide-react'

export default function DarkNavbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/40 bg-gray-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
            <span className="text-lg font-semibold tracking-tight text-white">Auralabs</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#who" className="hover:text-white">Who we are</a>
            <a href="#testimonials" className="hover:text-white">Testimonials</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-950 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition">
              Talk to an agent <ArrowRight size={16} />
            </a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/5 active:bg-white/10" aria-label="Open menu">
            <Menu size={20} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}
