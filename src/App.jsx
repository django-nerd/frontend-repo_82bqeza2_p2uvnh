import DarkNavbar from './components/DarkNavbar'
import DarkHero from './components/DarkHero'
import Who from './components/Who'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import CTA from './components/CTA'
import DarkFooter from './components/DarkFooter'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="relative bg-gray-950 text-white snap-y snap-mandatory h-full overflow-x-hidden">
      <BackgroundFX />
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
