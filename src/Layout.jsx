import { Outlet } from 'react-router-dom'
import DarkNavbar from './components/DarkNavbar'
import DarkFooter from './components/DarkFooter'
import BackgroundSlider from './components/BackgroundSlider'

const slides = [
  { type: 'gradient', colors: ['rgba(99,102,241,0.28)', 'rgba(34,197,94,0.22)', 'rgba(244,63,94,0.20)'] },
  { type: 'gradient', colors: ['rgba(236,72,153,0.28)', 'rgba(14,165,233,0.22)', 'rgba(250,204,21,0.20)'] },
  { type: 'gradient', colors: ['rgba(88,28,135,0.28)', 'rgba(34,197,94,0.22)', 'rgba(59,130,246,0.22)'] },
]

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <BackgroundSlider slides={slides} />
      <DarkNavbar />
      <main className="pt-16">{/* offset for fixed navbar */}
        <Outlet />
      </main>
      <DarkFooter />
    </div>
  )
}
