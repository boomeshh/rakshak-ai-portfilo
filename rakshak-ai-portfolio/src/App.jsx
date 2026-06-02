import { lazy, Suspense } from 'react'
import './index.css'
import useScrollSpy from './hooks/useScrollSpy'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import ProblemSection from './sections/ProblemSection'

const SolutionSection = lazy(() => import('./sections/SolutionSection'))
const ResearchSection = lazy(() => import('./sections/ResearchSection'))
const TeamSection = lazy(() => import('./sections/TeamSection'))
const ContactSection = lazy(() => import('./sections/ContactSection'))

const SECTION_IDS = ['hero', 'problem', 'solution', 'research', 'team', 'contact']

function App() {
  const activeSection = useScrollSpy(SECTION_IDS)

  return (
    <div className="min-h-screen bg-white text-ink">
      <Navbar activeSection={activeSection} />
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <Suspense fallback={<div className="h-96" />}>
          <SolutionSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <ResearchSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <TeamSection />
        </Suspense>
        <Suspense fallback={<div className="h-96" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
