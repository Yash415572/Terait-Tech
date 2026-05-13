import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, ArrowRight, CheckCircle2, AlertCircle, Clock, Zap, Building2, ExternalLink } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp } from '../components/ui/Section'
import { COMPANY, OFFICE_LOCATIONS } from '../data/company'

const SERVICES_LIST = [
  'CCTV Surveillance', 'Managed IT Services', 'Networking Solutions',
  'Cloud Infrastructure', 'Server Management', 'Cybersecurity',
  'Data Center Solutions', 'IT AMC', 'Smart Classroom', 'Biometric Systems',
  'Disaster Recovery', 'AV Solutions', 'Other',
]

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  company?: string
  email?: string
  phone?: string
  service?: string
  message?: string
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {}
  if (!data.name || data.name.length < 2) errors.name = 'Name must be at least 2 characters'
  if (!data.company || data.company.length < 2) errors.company = 'Company name required'
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address'
  if (!data.phone || data.phone.length < 10) errors.phone = 'Valid phone number required'
  if (!data.service) errors.service = 'Please select a service'
  if (!data.message || data.message.length < 20) errors.message = 'Please describe your requirement (min 20 characters)'
  return errors
}

const getMapUrl = (query: string) => `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
const getMapLink = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({ name: '', company: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setIsSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-cyber-blue/50 transition-colors"
  const errClass = "text-red-400 text-xs mt-1 flex items-center gap-1"

  return (
    <PageTransition>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <FadeUp>
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Get in Touch</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Let's Build Something
              <span className="block gradient-text">Extraordinary</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Get a free consultation with our enterprise IT specialists. We respond within 24 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <FadeUp>
                <h2 className="font-display font-bold text-2xl text-white mb-6">Contact Details</h2>
              </FadeUp>
              {[
                { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
                { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${COMPANY.whatsapp}` },
              ].map((item, i) => (
                <FadeUp key={item.label} delay={i * 0.1}>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 glass-dark cyber-border rounded-xl p-5 hover:border-cyber-blue/40 transition-colors group">
                    <div className="w-11 h-11 rounded-xl bg-cyber-blue/10 flex items-center justify-center shrink-0 group-hover:bg-cyber-blue/20 transition-colors">
                      <item.icon className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-mono">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </a>
                </FadeUp>
              ))}
              <FadeUp delay={0.3}>
                <div className="space-y-3 mt-8">
                  <h3 className="font-display font-semibold text-white mb-4">Our Offices</h3>
                  {OFFICE_LOCATIONS.slice(0, 3).map((loc) => (
                    <div key={`${loc.title}-${loc.address}`} className="flex items-start gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-cyber-blue mt-0.5 shrink-0" />
                      <div>
                        <div className="text-white font-medium">{loc.title}</div>
                        <div className="text-white/40">{loc.address}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="glass-dark border border-red-500/20 rounded-xl p-5 mt-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-mono text-xs tracking-wider">EMERGENCY SUPPORT</span>
                  </div>
                  <p className="text-white/60 text-sm">Critical IT issues? Our NOC team is available 24/7.</p>
                  <a href={`tel:${COMPANY.phone}`} className="text-red-400 font-semibold text-sm mt-2 block hover:text-red-300">{COMPANY.phone}</a>
                </div>
              </FadeUp>
              <FadeUp delay={0.5}>
                <div className="glass-dark cyber-border rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-cyber-blue" />
                    <span className="text-cyber-blue font-mono text-xs tracking-wider">RESPONSE TIME</span>
                  </div>
                  <p className="text-white/60 text-sm">General inquiries: Within 24 hours</p>
                  <p className="text-white/60 text-sm">Enterprise requests: Within 4 hours</p>
                  <p className="text-white/60 text-sm">Emergency support: Immediate</p>
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-2">
              <FadeUp delay={0.1}>
                <div className="glass-dark cyber-border rounded-2xl p-8 md:p-10">
                  {submitted ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
                        className="w-20 h-20 mx-auto rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                      </motion.div>
                      <h3 className="font-display font-bold text-2xl text-white mb-3">Message Sent!</h3>
                      <p className="text-white/50">Our team will get back to you within 24 hours. For urgent queries, call us directly.</p>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="font-display font-bold text-2xl text-white mb-8">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white/60 text-sm mb-2 font-mono">Full Name *</label>
                            <input name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Smith" />
                            {errors.name && <p className={errClass}><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2 font-mono">Company *</label>
                            <input name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your Company Pvt Ltd" />
                            {errors.company && <p className={errClass}><AlertCircle className="w-3 h-3" />{errors.company}</p>}
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2 font-mono">Email *</label>
                            <input name="email" type="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
                            {errors.email && <p className={errClass}><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                          </div>
                          <div>
                            <label className="block text-white/60 text-sm mb-2 font-mono">Phone *</label>
                            <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" />
                            {errors.phone && <p className={errClass}><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2 font-mono">Service Required *</label>
                          <select name="service" value={formData.service} onChange={handleChange}
                            className="w-full bg-navy-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-cyber-blue/50 transition-colors">
                            <option value="">Select a service...</option>
                            {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                          {errors.service && <p className={errClass}><AlertCircle className="w-3 h-3" />{errors.service}</p>}
                        </div>
                        <div>
                          <label className="block text-white/60 text-sm mb-2 font-mono">Requirement Details *</label>
                          <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className={inputClass}
                            placeholder="Describe your IT infrastructure needs, number of locations, approximate scale, and any specific requirements..." />
                          {errors.message && <p className={errClass}><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed">
                          {isSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>
                          ) : (
                            <>Send Message <ArrowRight className="w-5 h-5" /></>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Office Network</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
              Visit Our <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-4">
              Reach TERAIT across Bangalore, Chennai, and the USA. Our Bangalore head office is mapped below for quick navigation.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 glass-dark cyber-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div>
                    <div className="text-cyber-blue font-mono text-xs tracking-widest uppercase">Bangalore Map</div>
                    <h3 className="font-display font-bold text-2xl text-white mt-1">Bangalore Head Office</h3>
                    <p className="text-white/50 text-sm mt-1">{OFFICE_LOCATIONS[0].address}</p>
                  </div>
                </div>
              </div>
              <iframe
                title="TERAIT Bangalore Head Office Map"
                src={getMapUrl(OFFICE_LOCATIONS[0].mapQuery)}
                className="w-full h-[420px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lg:col-span-2 grid gap-4">
              {OFFICE_LOCATIONS.map((office) => (
                <FadeUp key={`${office.title}-${office.address}`}>
                  <div className="glass-dark cyber-border rounded-2xl p-5 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-cyber-blue/10 flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-cyber-blue" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-cyber-blue font-mono text-xs tracking-widest uppercase">{office.city} {office.type}</div>
                        <h3 className="font-display font-bold text-white mt-1">{office.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed mt-2">{office.address}</p>
                        <div className="mt-4 space-y-2 text-sm">
                          <a href={`tel:${office.phone}`} className="flex items-center gap-2 text-white/60 hover:text-cyber-blue transition-colors">
                            <Phone className="w-4 h-4 text-cyber-blue" />
                            {office.phone}
                          </a>
                          <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-white/60 hover:text-cyber-blue transition-colors">
                            <Mail className="w-4 h-4 text-cyber-blue" />
                            {office.email}
                          </a>
                          <a
                            href={getMapLink(office.mapQuery)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-cyber-blue font-semibold hover:text-cyber-electric transition-colors"
                          >
                            Open in Maps <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
