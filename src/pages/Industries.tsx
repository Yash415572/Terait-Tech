import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Package, Building2, Factory, ShoppingCart, Heart, Hotel, GraduationCap, Zap } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp } from '../components/ui/Section'

const INDUSTRIES_DETAIL = [
  {
    icon: Package,
    title: 'Logistics & Warehousing',
    color: 'from-orange-500 to-yellow-500',
    challenges: ['Large area surveillance', 'Asset tracking', 'Worker safety', 'Unauthorized access'],
    solutions: ['200+ camera deployments', 'AI perimeter alerts', 'Inventory monitoring', 'Vehicle tracking', 'Network for WMS/ERP'],
    stats: [{ val: '78%', label: 'Incident Reduction' }, { val: '99.9%', label: 'Camera Uptime' }],
  },
  {
    icon: Building2,
    title: 'Enterprise Offices',
    color: 'from-blue-500 to-cyan-500',
    challenges: ['Access control', 'Multi-floor monitoring', 'IT reliability', 'Data security'],
    solutions: ['Biometric access control', 'Visitor management', 'Managed IT services', 'Enterprise Wi-Fi', 'Server management'],
    stats: [{ val: '99.99%', label: 'IT Uptime' }, { val: '50+', label: 'Offices Served' }],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    color: 'from-gray-400 to-blue-400',
    challenges: ['Production monitoring', 'Safety compliance', 'Equipment downtime', 'Quality control'],
    solutions: ['Thermal camera systems', 'AI safety monitoring', 'Server & data management', 'Rugged networking', 'SCADA integration'],
    stats: [{ val: '40%', label: 'Downtime Reduced' }, { val: '100+', label: 'Plants Served' }],
  },
  {
    icon: ShoppingCart,
    title: 'Retail',
    color: 'from-green-500 to-emerald-500',
    challenges: ['Shoplifting prevention', 'POS reliability', 'Multi-store connectivity', 'Customer analytics'],
    solutions: ['AI loss prevention cameras', 'People counting', 'SD-WAN for branches', 'POS network setup', 'Cloud monitoring'],
    stats: [{ val: '65%', label: 'Theft Reduction' }, { val: '200+', label: 'Stores Covered' }],
  },
  {
    icon: Heart,
    title: 'Healthcare',
    color: 'from-red-500 to-pink-500',
    challenges: ['Patient safety', 'Data compliance (HIPAA)', 'Restricted area security', 'Equipment reliability'],
    solutions: ['HIPAA-compliant IT setup', 'Patient monitoring cameras', 'Biometric access', 'Redundant networking', 'Backup solutions'],
    stats: [{ val: '100%', label: 'Compliance Rate' }, { val: '30+', label: 'Hospitals Served' }],
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    color: 'from-purple-500 to-indigo-500',
    challenges: ['Guest Wi-Fi quality', 'Multi-property management', 'Property surveillance', 'PMS integration'],
    solutions: ['Hotel-grade Wi-Fi 6', 'Multi-site CCTV management', 'PMS/ERP networking', 'AV solutions', 'Guest network security'],
    stats: [{ val: '98%', label: 'Guest Satisfaction' }, { val: '25+', label: 'Hotels Covered' }],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    color: 'from-yellow-500 to-orange-500',
    challenges: ['Campus security', 'Smart classrooms', 'Attendance tracking', 'Network for e-learning'],
    solutions: ['Campus-wide CCTV', 'Smart classroom AV', 'Biometric attendance', 'High-speed campus network', 'LMS infrastructure'],
    stats: [{ val: '50+', label: 'Institutions Served' }, { val: '10K+', label: 'Students Protected' }],
  },
  {
    icon: Zap,
    title: 'Startups',
    color: 'from-cyan-500 to-blue-500',
    challenges: ['Budget constraints', 'Fast scaling needs', 'Flexible infrastructure', 'Zero downtime pressure'],
    solutions: ['Startup IT packages', 'Scalable cloud setup', 'Managed IT support', 'Office CCTV', 'On-demand support'],
    stats: [{ val: '60+', label: 'Startups Scaled' }, { val: '3x', label: 'Average Growth Support' }],
  },
]

export default function Industries() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <FadeUp>
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Industries</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Sectors We <span className="gradient-text">Transform</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Deep domain expertise across 8 industries — we understand your unique challenges and deliver solutions that fit.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-xl space-y-12">
          {INDUSTRIES_DETAIL.map((ind, i) => (
            <FadeUp key={ind.title} delay={0.05}>
              <div className={`grid md:grid-cols-2 gap-8 items-start glass-dark cyber-border rounded-2xl p-8 md:p-12 ${i % 2 !== 0 ? 'md:[&>*:first-child]:order-last' : ''}`}>
                <div>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ind.color} p-0.5 mb-5`}>
                    <div className="w-full h-full rounded-xl bg-navy-900 flex items-center justify-center">
                      <ind.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h2 className="font-display font-bold text-3xl text-white mb-4">{ind.title}</h2>

                  <div className="mb-6">
                    <h4 className="text-white/40 font-mono text-xs tracking-widest uppercase mb-3">KEY CHALLENGES</h4>
                    <div className="space-y-2">
                      {ind.challenges.map((c) => (
                        <div key={c} className="flex items-center gap-3 text-white/60 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400/60 shrink-0" />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-6">
                    {ind.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-display font-bold text-2xl gradient-text">{s.val}</div>
                        <div className="text-white/40 text-xs mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white/40 font-mono text-xs tracking-widest uppercase mb-4">OUR SOLUTIONS</h4>
                  <div className="space-y-3 mb-8">
                    {ind.solutions.map((s) => (
                      <div key={s} className="flex items-center gap-3 text-white/70 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyber-blue shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-primary text-sm">
                    Get Industry Solution <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
