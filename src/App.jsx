import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import TeamPage from './pages/Team'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
