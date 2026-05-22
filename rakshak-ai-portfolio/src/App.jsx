import { lazy, Suspense } from 'react'
import './index.css'
import useScrollSpy from './hooks/useScrollSpy'
import HeroSection from './sections/HeroSection'
import Navbar from './components/Navbar'
import MouseGlowOverlay from './components/MouseGlowOverlay'

const ProblemSection = lazy(() => import('./sections/ProblemSection'))
const FeaturesSection = lazy(() => import('./sections/FeaturesSection'))
const WorkflowSection = lazy(() => import('./sections/WorkflowSection'))
const ScreenshotsSection = lazy(() => import('./sections/ScreenshotsSection'))
const AIEngineSection = lazy(() => import('./sections/AIEngineSection'))
const AnalyticsSection = lazy(() => import('./sections/AnalyticsSection'))
const ImpactSection = lazy(() => import('./sections/ImpactSection'))
const TeamSection = lazy(() => import('./sections/TeamSection'))
const ResourcesSection = lazy(() => import('./sections/ResourcesSection'))
const CTASection = lazy(() => import('./sections/CTASection'))

const SECTION_IDS = ['hero', 'problem', 'features', 'workflow', 'screenshots', 'ai-engine', 'analytics', 'impact', 'team', 'resources', 'cta']

function App() {
  const activeSection = useScrollSpy(SECTION_IDS)

  return (
    <div className="bg-cyber-dark min-h-screen text-white">
      <MouseGlowOverlay />
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-screen" />}>
          <ProblemSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <WorkflowSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <ScreenshotsSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <AIEngineSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <AnalyticsSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <ImpactSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <TeamSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <ResourcesSection />
        </Suspense>
        <Suspense fallback={<div className="h-screen" />}>
          <CTASection />
        </Suspense>
      </main>
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        <p>© 2024 RAKSHAK AI — AI-Powered Defence Cyber Incident &amp; Safety Portal</p>
      </footer>
    </div>
  )
}

export default App
