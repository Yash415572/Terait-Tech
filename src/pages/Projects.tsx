import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, CheckCircle2 } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp } from '../components/ui/Section'

const CASE_STUDIES = [
  {
    client: 'LogiCorp Warehousing',
    industry: 'Logistics',
    location: 'Mumbai, Maharashtra',
    challenge: 'A 12-warehouse logistics company needed a unified surveillance and IT infrastructure overhaul. Security incidents were rising, IT downtime was affecting operations, and there was no centralized monitoring.',
    solution: 'Deployed 340 AI-powered cameras across all 12 sites with centralized NVR and remote monitoring. Upgraded networking with SD-WAN, deployed server infrastructure, and set up 24/7 managed IT services.',
    results: [
      { metric: '78%', label: 'Reduction in security incidents' },
      { metric: '99.9%', label: 'Network uptime achieved' },
      { metric: '₹40L', label: 'Annual IT cost savings' },
      { metric: '3 weeks', label: 'Complete deployment time' },
    ],
    tech: ['Hikvision AI Cameras', 'Cisco SD-WAN', 'Dell PowerEdge Servers', 'Veeam Backup'],
    tag: 'CCTV + Networking + Managed IT',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    client: 'Apollo MedCare Group',
    industry: 'Healthcare',
    location: 'Delhi NCR',
    challenge: 'A multi-hospital healthcare group needed HIPAA-compliant IT infrastructure, secure patient data management, biometric access control across 5 hospitals, and reliable networking for clinical applications.',
    solution: 'Implemented end-to-end HIPAA-compliant IT infrastructure. Deployed biometric access control, installed structured cabling, set up redundant networking, and integrated EMR systems with cloud backup.',
    results: [
      { metric: '100%', label: 'HIPAA compliance achieved' },
      { metric: '99.99%', label: 'Clinical system uptime' },
      { metric: '5 hospitals', label: 'Fully integrated' },
      { metric: '6 weeks', label: 'Full rollout completed' },
    ],
    tech: ['Fortinet Firewall', 'HP ProLiant Servers', 'Biometric Access Systems', 'Azure Backup'],
    tag: 'IT Infrastructure + Compliance + Biometric',
    color: 'from-red-500 to-pink-500',
  },
  {
    client: 'Prestige Hotels Group',
    industry: 'Hospitality',
    location: 'Bengaluru, Karnataka',
    challenge: 'A luxury hotel chain with 6 properties needed hotel-grade Wi-Fi, modern AV for conference halls, comprehensive CCTV, and unified IT management across all properties.',
    solution: 'Deployed Wi-Fi 6 across all properties, installed Dahua CCTV systems in 400+ rooms and common areas, set up AV systems in 12 conference halls, and implemented centralized IT management.',
    results: [
      { metric: '98%', label: 'Guest Wi-Fi satisfaction' },
      { metric: '400+', label: 'Cameras deployed' },
      { metric: '12', label: 'Conference halls upgraded' },
      { metric: '4 weeks', label: 'Project delivery' },
    ],
    tech: ['Aruba Wi-Fi 6', 'Dahua CCTV', 'Crestron AV', 'Palo Alto Firewall'],
    tag: 'CCTV + AV + Networking',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    client: 'Zenith Manufacturing',
    industry: 'Manufacturing',
    location: 'Pune, Maharashtra',
    challenge: 'A large manufacturing plant with 3 facilities faced challenges with production monitoring, worker safety compliance, frequent IT downtime, and no disaster recovery plan.',
    solution: 'Deployed thermal cameras for fire detection and worker safety, installed production line monitoring cameras, built a redundant server infrastructure, and implemented a full disaster recovery plan with cloud backup.',
    results: [
      { metric: '40%', label: 'Reduction in production downtime' },
      { metric: 'Zero', label: 'Data loss incidents post-deployment' },
      { metric: '3 plants', label: 'Fully monitored' },
      { metric: '5 weeks', label: 'Complete infrastructure setup' },
    ],
    tech: ['Hikvision Thermal Cameras', 'VMware vSphere', 'Dell Data Protection', 'Cisco Networking'],
    tag: 'Thermal CCTV + Server + DR',
    color: 'from-gray-400 to-blue-400',
  },
]

export default function Projects() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <FadeUp>
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Case Studies</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Real Projects,
              <span className="block gradient-text">Real Results</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Enterprise deployments across India — from logistics warehouses to healthcare networks.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-xl space-y-12">
          {CASE_STUDIES.map((cs, i) => (
            <FadeUp key={cs.client} delay={0.05}>
              <div className="glass-dark cyber-border rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="p-8 border-b border-white/5">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-mono bg-gradient-to-r ${cs.color} text-white mb-3`}>
                        {cs.industry}
                      </div>
                      <h2 className="font-display font-bold text-2xl md:text-3xl text-white">{cs.client}</h2>
                      <div className="text-white/40 text-sm mt-1 font-mono">{cs.location}</div>
                    </div>
                    <div className="glass border border-white/10 rounded-lg px-4 py-2 text-xs font-mono text-cyber-blue">
                      {cs.tag}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
                  {/* Challenge & Solution */}
                  <div className="p-8 space-y-6">
                    <div>
                      <h4 className="text-white/40 font-mono text-xs tracking-widest uppercase mb-3">THE CHALLENGE</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white/40 font-mono text-xs tracking-widest uppercase mb-3">OUR SOLUTION</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-white/40 font-mono text-xs tracking-widest uppercase mb-3">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {cs.tech.map((t) => (
                          <span key={t} className="glass border border-white/10 rounded-md px-3 py-1 text-xs text-white/60">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="p-8">
                    <h4 className="text-white/40 font-mono text-xs tracking-widest uppercase mb-6">RESULTS ACHIEVED</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {cs.results.map((r) => (
                        <motion.div
                          key={r.label}
                          className="glass border border-white/5 rounded-xl p-5 text-center"
                          whileHover={{ borderColor: 'rgba(14,165,233,0.3)' }}
                        >
                          <div className="font-display font-bold text-2xl gradient-text mb-1">{r.metric}</div>
                          <div className="text-white/40 text-xs leading-tight">{r.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Project delivered on time and on budget</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Let's Build Your <span className="gradient-text">Success Story</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">Ready to transform your IT infrastructure? Let's discuss your project.</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
