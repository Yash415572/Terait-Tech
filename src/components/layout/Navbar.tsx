import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Moon, Sun } from 'lucide-react'
import { COMPANY } from '../../data/company'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Services',
    path: '/services',
    mega: [
      { label: 'CCTV Surveillance', path: '/cctv' },
      { label: 'Managed IT Services', path: '/services' },
      { label: 'Networking Solutions', path: '/services' },
      { label: 'Cloud Infrastructure', path: '/services' },
      { label: 'Cybersecurity', path: '/services' },
      { label: 'Server Management', path: '/services' },
      { label: 'Data Center Solutions', path: '/services' },
      { label: 'IT AMC', path: '/services' },
      { label: 'Smart Classroom', path: '/services' },
      { label: 'Biometric Systems', path: '/services' },
    ],
  },
  { label: 'Industries', path: '/industries' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
]

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-200/60' : 'bg-white/80 backdrop-blur-xl border-b border-transparent'
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="TERAIT Technologies home">
            <motion.div
              className="logo-shell h-12 w-40 flex items-center justify-center rounded-xl px-3"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="/teraitlogo_copy.png"
                alt="TERAIT Technologies"
                className="h-full w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.mega && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'nav-link-active' : ''}`}
                >
                  {item.label}
                  {item.mega && <ChevronDown className="w-3 h-3" />}
                </Link>

                {item.mega && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="glass-dark rounded-xl border border-slate-200 p-2 shadow-2xl shadow-slate-300/50">
                          {item.mega.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path}
                              className="nav-dropdown-link"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-950 text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link to="/contact" className="btn-primary text-sm px-4 py-2">
              Free Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              className="p-2 text-slate-700 hover:text-slate-950"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 overflow-hidden"
          >
            <div className="container-xl py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className="mobile-nav-link"
                  >
                    {item.label}
                  </Link>
                  {item.mega && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.mega.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.path}
                          className="mobile-nav-link py-2 text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-200">
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
