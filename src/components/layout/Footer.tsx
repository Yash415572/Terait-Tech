import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from 'lucide-react'
import { COMPANY, OFFICE_LOCATIONS, SERVICES } from '../../data/company'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-white border-t border-slate-200">
      {/* Newsletter bar */}
      <div className="border-b border-slate-200">
        <div className="container-xl py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-white text-lg">Stay Updated with TERAIT</h3>
              <p className="text-white/50 text-sm mt-1">IT insights, security trends, and enterprise tech news.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="flex-1 md:w-72 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyber-blue/50 transition-colors"
              />
              <button className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap">
                {subscribed ? 'Subscribed' : 'Subscribe'} <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <span className="logo-shell flex h-14 w-44 items-center justify-center rounded-xl px-3">
                <img
                  src="/teraitlogo_copy.png"
                  alt="TERAIT Technologies"
                  className="h-full w-auto object-contain"
                />
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Enterprise IT Infrastructure & Security Solutions across India. Transforming businesses with cutting-edge technology.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: COMPANY.linkedin, label: 'TERAIT Technologies on LinkedIn' },
                { icon: Twitter, href: '#', label: 'TERAIT Technologies on Twitter' },
                { icon: Youtube, href: '#', label: 'TERAIT Technologies on YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-cyber-blue hover:border-cyber-blue/30 border border-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm tracking-wider uppercase">Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 8).map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="text-white/50 hover:text-cyber-blue text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyber-blue/40 rounded-full group-hover:bg-cyber-blue transition-colors" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm tracking-wider uppercase">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Industries', path: '/industries' },
                { label: 'Case Studies', path: '/projects' },
                { label: 'Blog', path: '/blog' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-white/50 hover:text-cyber-blue text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-cyber-blue/40 rounded-full group-hover:bg-cyber-blue transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                  <Phone className="w-4 h-4 text-cyber-blue mt-0.5 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors group">
                  <Mail className="w-4 h-4 text-cyber-blue mt-0.5 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              {OFFICE_LOCATIONS.slice(0, 2).map((office) => (
                <li key={`${office.title}-${office.address}`} className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-cyber-blue/60 mt-0.5 shrink-0" />
                  <span>{office.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container-xl py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} TERAIT Technologies Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/30 text-sm">Privacy Policy</span>
            <span className="text-white/30 text-sm">Terms of Service</span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/30 text-xs font-mono">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
