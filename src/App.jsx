import DarkNavbar from './components/DarkNavbar'
import DarkHero from './components/DarkHero'
import Who from './components/Who'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CTA from './components/CTA'
import DarkFooter from './components/DarkFooter'

function App() {
  return (
    <div className="bg-gray-950 text-white snap-y snap-mandatory h-full overflow-x-hidden">
      <DarkNavbar />
      <main className="[scroll-snap-type:y_mandatory]">
        <DarkHero />
        <Who />
        <Testimonials />
        <Team />
        <CTA />
      </main>
      <DarkFooter />
    </div>
  )
}

export default App
