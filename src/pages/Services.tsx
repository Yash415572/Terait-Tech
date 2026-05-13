import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Shield, Camera, Server, Cloud, Wifi, Database, Wrench, Monitor, Fingerprint, Tv, RefreshCw } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp, ScaleIn } from '../components/ui/Section'
import { SERVICES } from '../data/company'

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera, Shield, Server, Cloud,
  Settings: Wrench, Network: Wifi, Database, Wrench, Monitor, Fingerprint, Tv, RefreshCw
}

const SERVICE_DETAILS = [
  {
    id: 'cctv',
    features: ['AI-powered analytics', 'Night vision & thermal cameras', 'Remote monitoring 24/7', 'Cloud video storage', 'Motion detection alerts', 'Multi-site management'],
  },
  {
    id: 'managed-it',
    features: ['24/7 NOC monitoring', 'Proactive maintenance', 'Help desk support', 'SLA-backed response times', 'IT asset management', 'Remote & on-site support'],
  },
  {
    id: 'networking',
    features: ['Structured cabling', 'LAN/WAN design', 'SD-WAN solutions', 'Wi-Fi 6 deployments', 'Network security', 'Performance monitoring'],
  },
  {
    id: 'cloud',
    features: ['AWS, Azure, GCP expertise', 'Cloud migration', 'Cost optimization', 'Hybrid cloud setup', 'DevOps & automation', 'Cloud security'],
  },
  {
    id: 'server',
    features: ['Server deployment', 'Virtualization (VMware)', 'Performance tuning', 'Patch management', 'Hardware upgrades', 'Hybrid server management'],
  },
  {
    id: 'cybersecurity',
    features: ['Firewall management', 'Endpoint protection', 'Threat monitoring', 'Penetration testing', 'Compliance audits', 'Security awareness training'],
  },
  {
    id: 'datacenter',
    features: ['DC design & build', 'Power & cooling systems', 'Rack & stack services', 'Cabling management', 'DR planning', 'Colocation support'],
  },
  {
    id: 'amc',
    features: ['Annual maintenance contracts', 'All hardware covered', 'Priority response SLA', 'Preventive maintenance', 'Spare parts included', 'Quarterly health checks'],
  },
  {
    id: 'smartclass',
    features: ['Interactive flat panels', 'Document cameras', 'AV integration', 'LMS setup', 'Video conferencing', 'Teacher training'],
  },
  {
    id: 'biometric',
    features: ['Fingerprint & face recognition', 'Access control systems', 'Attendance management', 'Time tracking reports', 'Integration with HRMS', 'Multi-location management'],
  },
  {
    id: 'disaster',
    features: ['BCP consulting', 'Backup solutions', 'Failover systems', 'RTO/RPO planning', 'Cloud backup', 'Recovery testing'],
  },
  {
    id: 'av',
    features: ['Conference room AV', 'Video walls', 'Digital signage', 'Projector systems', 'Audio systems', 'Control systems'],
  },
]

export default function Services() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <FadeUp>
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Our Services</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Complete Enterprise
              <span className="block gradient-text">IT Solutions</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              End-to-end technology services — from CCTV surveillance to cloud infrastructure, all under one roof.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="space-y-8">
            {SERVICES.map((service, i) => {
              const Icon = iconComponents[service.icon] || Shield
              const detail = SERVICE_DETAILS.find(d => d.id === service.id)
              const isEven = i % 2 === 0

              return (
                <FadeUp key={service.id} delay={0.05}>
                  <motion.div
                    className="glass-dark cyber-border rounded-2xl p-8 md:p-10"
                    whileHover={{ borderColor: 'rgba(14,165,233,0.3)' }}
                  >
                    <div className={`grid md:grid-cols-2 gap-8 items-center ${!isEven ? 'md:[&>*:first-child]:order-last' : ''}`}>
                      <div>
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5`}>
                          <div className="w-full h-full rounded-xl bg-navy-900 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                        </div>
                        <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">{service.title}</h2>
                        <p className="text-white/60 leading-relaxed mb-6">{service.short}</p>
                        <Link to="/contact" className="btn-primary text-sm">
                          Get a Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                      <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {detail?.features.map((f) => (
                            <div key={f} className="flex items-center gap-3 text-white/70 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-cyber-blue shrink-0" />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Need a Custom <span className="gradient-text">IT Solution?</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">Our architects will design a solution tailored to your exact requirements and budget.</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
