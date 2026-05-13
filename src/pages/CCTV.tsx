import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Eye, Wifi, Shield, Zap, Monitor, CheckCircle2, Play } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp, ScaleIn } from '../components/ui/Section'

const CAMERAS = [
  {
    name: 'Dome Camera',
    type: 'Indoor Security',
    features: ['4K Resolution', '360° Coverage', 'IR Night Vision', 'Vandal-proof'],
    color: 'from-blue-500 to-cyan-500',
    use: 'Offices & Retail',
  },
  {
    name: 'Bullet Camera',
    type: 'Outdoor Long-Range',
    features: ['8MP / 4K', '100m Night Vision', 'Weatherproof IP67', 'Wide Angle'],
    color: 'from-purple-500 to-blue-500',
    use: 'Perimeter & Parking',
  },
  {
    name: 'PTZ Camera',
    type: 'Pan-Tilt-Zoom',
    features: ['30x Optical Zoom', '360° Pan', 'Auto-tracking AI', 'Smart Motion'],
    color: 'from-cyan-500 to-teal-500',
    use: 'Warehouses & Factories',
  },
  {
    name: 'Thermal Camera',
    type: 'Heat Detection',
    features: ['Thermal Imaging', 'Fire Detection', '24/7 Monitoring', 'No-light Vision'],
    color: 'from-orange-500 to-red-500',
    use: 'Industrial & Critical Sites',
  },
  {
    name: 'AI Smart Camera',
    type: 'Intelligence Built-in',
    features: ['Face Recognition', 'People Counting', 'Behavior Analysis', 'Edge AI'],
    color: 'from-green-500 to-emerald-500',
    use: 'Retail & Airports',
  },
  {
    name: 'Fisheye Camera',
    type: '360° Panoramic',
    features: ['180°/360° View', 'No Blind Spots', '12MP Sensor', 'De-warp Display'],
    color: 'from-indigo-500 to-purple-500',
    use: 'Open Spaces & Lobbies',
  },
]

const ANALYTICS = [
  { icon: Eye, title: 'People Counting', desc: 'Real-time foot traffic analysis for retail and enterprise spaces.' },
  { icon: Shield, title: 'Intrusion Detection', desc: 'AI-powered boundary crossing and unauthorized access alerts.' },
  { icon: Zap, title: 'Behavior Analytics', desc: 'Detect suspicious behavior patterns automatically.' },
  { icon: Monitor, title: 'License Plate Recognition', desc: 'Automated vehicle identification and access control.' },
  { icon: Camera, title: 'Facial Recognition', desc: 'Fast, accurate identity verification at entry points.' },
  { icon: Wifi, title: 'Remote Monitoring', desc: 'View and manage all cameras from any device, anywhere.' },
]

const INDUSTRIES = [
  { name: 'Warehouses', cameras: '50–200+', desc: 'Complete perimeter, dock, and interior coverage with AI analytics.' },
  { name: 'Offices', cameras: '10–50', desc: 'Entry control, floor monitoring, and visitor management.' },
  { name: 'Manufacturing', cameras: '30–150', desc: 'Production line monitoring, safety compliance, and quality control.' },
  { name: 'Schools & Colleges', cameras: '20–100', desc: 'Campus security, classroom monitoring, and attendance tracking.' },
  { name: 'Healthcare', cameras: '20–80', desc: 'Patient safety, restricted area control, and incident recording.' },
  { name: 'Retail', cameras: '10–60', desc: 'Loss prevention, customer analytics, and POS monitoring.' },
]

export default function CCTV() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-navy-950">
          <div className="absolute inset-0 grid-bg opacity-40" />
          {/* Scan overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-cyber-blue/5 via-transparent to-transparent"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent"
            animate={{ y: ['0vh', '100vh'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
          {/* Camera grid visual */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="grid grid-cols-3 gap-32">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                >
                  <Camera className="w-16 h-16 text-cyber-blue" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-xl relative z-10 pt-24">
          <div className="max-w-3xl">
            {/* REC badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-3 mb-8"
            >
              <motion.div
                className="w-3 h-3 rounded-full bg-red-500"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-red-400 font-mono text-sm tracking-widest">REC • LIVE MONITORING</span>
            </motion.div>

            <FadeUp>
              <h1 className="font-display font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
                AI-Powered
                <span className="block gradient-text glow-text">CCTV Surveillance</span>
                <span className="block text-white/80 text-4xl md:text-5xl">Solutions</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-white/60 text-xl leading-relaxed mb-10">
                Enterprise-grade surveillance systems with intelligent analytics, remote monitoring, and AI-driven insights — protecting what matters most.
              </p>
            </FadeUp>

            <FadeUp delay={0.25} className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base px-7 py-3.5">
                Get a Surveillance Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#camera-portfolio" className="btn-secondary text-base px-7 py-3.5">
                <Play className="w-4 h-4" /> Watch Demo
              </a>
            </FadeUp>
          </div>
        </div>

        {/* Camera monitor UI */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-dark cyber-border rounded-2xl p-4 w-80"
          >
            <div className="flex items-center gap-2 mb-3">
              <motion.div className="w-2 h-2 rounded-full bg-red-500" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              <span className="text-white/60 font-mono text-xs">LIVE FEED — CAMERA GRID</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {[
                { label: 'CAM-01 LOBBY', active: true },
                { label: 'CAM-02 ENTRY', active: true },
                { label: 'CAM-03 FLOOR', active: false },
                { label: 'CAM-04 EXIT', active: true },
              ].map((cam) => (
                <div key={cam.label} className="relative rounded-lg overflow-hidden bg-navy-800 aspect-video flex items-end p-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-navy-900" />
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-cyber-blue/30"
                    animate={cam.active ? { y: ['0%', '100%'] } : {}}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  />
                  <span className="relative z-10 text-white/50 font-mono text-[9px]">{cam.label}</span>
                  <div className={`absolute top-1 right-1 w-1.5 h-1.5 rounded-full ${cam.active ? 'bg-green-400' : 'bg-red-500'}`} />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-green-400">4/4 CAMERAS ONLINE</span>
              <span className="text-white/30">30 FPS • H.265</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Camera types */}
      <section id="camera-portfolio" className="section-padding">
        <div className="container-xl">
          <FadeUp className="text-center mb-16">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Camera Portfolio</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
              Camera Types We <span className="gradient-text">Deploy</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMERAS.map((cam, i) => (
              <FadeUp key={cam.name} delay={i * 0.08}>
                <motion.div
                  className="glass-dark cyber-border rounded-2xl p-8 h-full card-hover group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cam.color} p-0.5 mb-5`}>
                    <div className="w-full h-full rounded-xl bg-navy-900 flex items-center justify-center">
                      <Camera className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="text-cyber-blue font-mono text-xs mb-2">{cam.type}</div>
                  <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:text-cyber-blue transition-colors">{cam.name}</h3>
                  <div className="space-y-2 mb-5">
                    {cam.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-white/60 text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyber-blue shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-white/5 pt-4">
                    <span className="text-white/30 text-xs font-mono">IDEAL FOR: </span>
                    <span className="text-cyber-blue text-xs font-mono">{cam.use}</span>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* AI Analytics */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-xl">
          <FadeUp className="text-center mb-16">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Smart Analytics</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
              AI-Powered <span className="gradient-text">Intelligence</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mt-4">
              Transform your surveillance from passive recording to active intelligence with our AI analytics platform.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ANALYTICS.map((a, i) => (
              <ScaleIn key={a.title} delay={i * 0.08}>
                <div className="glass-dark cyber-border rounded-2xl p-7 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 flex items-center justify-center mb-5">
                    <a.icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">{a.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-xl">
          <FadeUp className="text-center mb-16">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Applications</span>
            <h2 className="font-display font-bold text-4xl text-white mt-3">
              Industry <span className="gradient-text">Deployments</span>
            </h2>
          </FadeUp>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white/50 font-mono text-sm font-normal">INDUSTRY</th>
                  <th className="text-left py-4 px-6 text-white/50 font-mono text-sm font-normal">CAMERA RANGE</th>
                  <th className="text-left py-4 px-6 text-white/50 font-mono text-sm font-normal">DEPLOYMENT SCOPE</th>
                </tr>
              </thead>
              <tbody>
                {INDUSTRIES.map((ind, i) => (
                  <motion.tr
                    key={ind.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="border-b border-white/5 hover:bg-white/2 transition-colors"
                  >
                    <td className="py-5 px-6 font-display font-semibold text-white">{ind.name}</td>
                    <td className="py-5 px-6 font-mono text-cyber-blue text-sm">{ind.cameras}</td>
                    <td className="py-5 px-6 text-white/50 text-sm">{ind.desc}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden text-center p-16"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative z-10">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
                Get a Free <span className="gradient-text">Site Survey</span>
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto">Our surveillance experts will assess your premises and recommend the optimal camera placement and system architecture.</p>
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Book Free Survey <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
