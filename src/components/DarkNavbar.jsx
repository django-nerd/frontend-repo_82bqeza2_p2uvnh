import { Menu, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function DarkNavbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-950/40 bg-gray-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400" />
            <span className="text-lg font-semibold tracking-tight text-white">REvamp</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/team" className="hover:text-white">Team</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-gray-950 px-4 py-2 text-sm font-medium hover:bg-gray-200 transition">
              Talk to an agent <ArrowRight size={16} />
            </Link>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/5 active:bg-white/10" aria-label="Open menu">
            <Menu size={20} className="text-white" />
          </button>
        </div>
      </div>
    </header>
  )
}
