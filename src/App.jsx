import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Approach from './components/Approach'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Approach />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
