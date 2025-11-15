import DarkHero from '../components/DarkHero'
import Who from '../components/Who'
import Testimonials from '../components/Testimonials'
import Team from '../components/Team'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <div className="space-y-0">
      <DarkHero />
      <Who />
      <Testimonials />
      <Team />
      <CTA />
    </div>
  )
}
