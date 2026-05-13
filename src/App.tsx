import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Suspense, lazy, useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import LoadingScreen from './components/ui/LoadingScreen'
import { CursorGlow, ScrollProgress, WhatsAppButton } from './components/ui/CursorGlow'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const CCTV = lazy(() => import('./pages/CCTV'))
const Industries = lazy(() => import('./pages/Industries'))
const Projects = lazy(() => import('./pages/Projects'))
const Careers = lazy(() => import('./pages/Careers'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  if (loading) return <LoadingScreen />

  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className={`${theme === 'dark' ? 'site-dark bg-navy-950 text-white' : 'site-light bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-300`}>
      <CursorGlow />
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main>
        <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-navy-950 flex items-center justify-center"><div className="w-8 h-8 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin" /></div>}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      </div>
    </BrowserRouter>
  )
}
