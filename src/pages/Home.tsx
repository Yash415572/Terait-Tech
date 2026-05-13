import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import {
  ArrowRight, Shield, Wifi, Server, Camera, Cloud, ChevronRight,
  Star, CheckCircle2, TrendingUp, Users, Award, Zap
} from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp, ScaleIn } from '../components/ui/Section'
import { STATS, SERVICES, INDUSTRIES, TECH_STACK, TESTIMONIALS } from '../data/company'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera, Shield, Wifi, Server, Cloud,
  Settings: Server, Network: Wifi, Database: Server,
  Wrench: Shield, Monitor: Shield, RefreshCw: Shield,
  Tv: Shield, Fingerprint: Shield
}

function HeroCamera({ pan, tilt }: { pan: number; tilt: number }) {
  return (
    <motion.div
      className="hero-video-stage pointer-events-none absolute inset-0"
      animate={{ x: pan * 1.25, y: tilt * 0.9, rotateZ: pan * 0.018 }}
      transition={{ type: 'spring', stiffness: 70, damping: 18, mass: 0.7 }}
    >
      <video
        className="hero-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/cctv-hero.jpg"
      >
        <source src="/cctv-multi-feed.mp4" type="video/mp4" />
      </video>
      <motion.div
        className="absolute left-[28%] top-[38%] hidden h-24 w-24 rounded-full border border-cyber-blue/50 shadow-[0_0_70px_rgba(14,165,233,0.42)] lg:block"
        animate={{ x: pan * 1.25, y: tilt * 0.8, scale: [1, 1.08, 1] }}
        transition={{
          scale: { duration: 2.5, repeat: Infinity },
          x: { type: 'spring', stiffness: 90, damping: 18 },
          y: { type: 'spring', stiffness: 90, damping: 18 },
        }}
      />
      <motion.div
        className="absolute right-[11%] top-[24%] hidden rounded-full border border-cyber-blue/40 px-4 py-2 font-mono text-xs text-cyber-blue backdrop-blur-md lg:block"
        animate={{ opacity: [0.25, 0.9, 0.25], y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        LIVE FEED / AUTO ZOOM
      </motion.div>
      <motion.div
        className="absolute bottom-[18%] right-[16%] hidden h-px w-72 bg-gradient-to-r from-transparent via-cyber-blue/70 to-transparent lg:block"
        animate={{ scaleX: [0.4, 1, 0.4], opacity: [0.25, 0.8, 0.25] }}
        transition={{ type: 'spring', stiffness: 70, damping: 18, mass: 0.7 }}
      />
    </motion.div>
  )
}

function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const [cameraAim, setCameraAim] = useState({ pan: 0, tilt: 0 })
  const frameRef = useRef<number | null>(null)
  const nextAimRef = useRef({ pan: 0, tilt: 0 })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const handlePointerMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const nextPan = ((event.clientX - rect.left) / rect.width - 0.5) * 100
    const nextTilt = ((event.clientY - rect.top) / rect.height - 0.5) * 100
    nextAimRef.current = {
      pan: Math.max(-45, Math.min(45, nextPan)),
      tilt: Math.max(-35, Math.min(35, nextTilt)),
    }

    if (frameRef.current !== null) return

    frameRef.current = window.requestAnimationFrame(() => {
      setCameraAim(nextAimRef.current)
      frameRef.current = null
    })
  }

  const handlePointerLeave = () => {
    setCameraAim({ pan: 0, tilt: 0 })
  }

  return (
    <section
      ref={ref}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative block min-h-screen overflow-hidden bg-slate-50"
    >
      <div className="absolute inset-0">
        <HeroCamera pan={cameraAim.pan} tilt={cameraAim.tilt} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,250,252,0.96)_0%,rgba(248,250,252,0.9)_34%,rgba(248,250,252,0.38)_63%,rgba(248,250,252,0.14)_100%)]" />
        <div className="hero-dark-overlay absolute inset-0" />
        <div className="hero-split-lines absolute inset-0" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        {/* Scan line */}
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/20 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container-xl flex min-h-screen items-center pt-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-cyber-blue/20 rounded-full px-4 py-1.5 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />
            <span className="text-cyber-blue text-sm font-mono font-medium">PAN India IT Infrastructure Partner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-slate-950 leading-[1.05] mb-6"
          >
            Enterprise IT
            <span className="block gradient-text glow-text">Infrastructure</span>
            <span className="block text-slate-800">&amp; Security Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Modern scalable IT, CCTV, cloud, networking, and managed enterprise solutions for next-generation businesses across India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link to="/contact" className="btn-primary text-base px-7 py-3.5">
              Get Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary text-base px-7 py-3.5">
              Explore Services <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl text-slate-950">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-white/30 text-xs font-mono tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyber-blue/50 to-transparent" />
      </motion.div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container-xl relative z-10">
        <FadeUp className="text-center mb-16">
          <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            Complete IT <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            From CCTV surveillance to cloud infrastructure — we deliver end-to-end enterprise technology solutions.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield
            return (
              <FadeUp key={service.id} delay={i * 0.05}>
                <motion.div
                  className="glass-dark cyber-border rounded-2xl p-6 h-full card-hover cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-5`}>
                    <div className="w-full h-full rounded-xl bg-navy-900 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.short}</p>
                  <div className="mt-4 flex items-center gap-1 text-cyber-blue text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              </FadeUp>
            )
          })}
        </div>

        <FadeUp delay={0.2} className="text-center mt-12">
          <Link to="/services" className="btn-secondary">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const points = [
    { icon: Award, title: '15+ Years Experience', desc: 'Proven track record delivering enterprise IT projects across India.' },
    { icon: Zap, title: '24/7 NOC Support', desc: 'Round-the-clock monitoring and incident response by certified engineers.' },
    { icon: TrendingUp, title: 'PAN India Presence', desc: 'On-ground teams in Mumbai, Delhi NCR, Bengaluru and growing.' },
    { icon: Users, title: '200+ Enterprise Clients', desc: 'Trusted by leading enterprises across logistics, healthcare, retail and more.' },
    { icon: Shield, title: 'Certified Expertise', desc: 'Cisco, HP, Dell, Hikvision certified engineers and solution architects.' },
    { icon: CheckCircle2, title: '98% Client Retention', desc: 'Our quality of service keeps clients coming back, year after year.' },
  ]

  return (
    <section className="section-padding">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Why TERAIT</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-6">
              The Trusted IT Partner
              <span className="block gradient-text">for Enterprises</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              We don't just install equipment — we engineer intelligent infrastructure that scales with your business. With deep domain expertise and a commitment to excellence, TERAIT is the technology partner Indian enterprises trust.
            </p>
            <Link to="/about" className="btn-primary">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="glass-dark rounded-xl p-5 cyber-border group hover:border-cyber-blue/40 transition-colors">
                  <p.icon className="w-6 h-6 text-cyber-blue mb-3" />
                  <h4 className="font-display font-semibold text-white text-sm mb-1">{p.title}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IndustriesSection() {
  const iconMapIndustries: Record<string, React.ComponentType<{ className?: string }>> = {
    Package: Server, Building2: Server, Factory: Server,
    ShoppingCart: Server, Heart: Shield, Hotel: Server,
    GraduationCap: Server, Zap: Zap
  }

  return (
    <section className="section-padding bg-navy-900/30">
      <div className="container-xl">
        <FadeUp className="text-center mb-16">
          <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Industries</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3 mb-4">
            Sectors We <span className="gradient-text">Transform</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = iconMapIndustries[ind.icon] || Shield
            return (
              <ScaleIn key={ind.title} delay={i * 0.06}>
                <Link to="/industries">
                  <motion.div
                    className="glass-dark cyber-border rounded-2xl p-6 text-center h-full card-hover group"
                    whileHover={{ borderColor: 'rgba(14,165,233,0.4)' }}
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl bg-cyber-blue/10 flex items-center justify-center mb-4 group-hover:bg-cyber-blue/20 transition-colors">
                      <Icon className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <h3 className="font-display font-semibold text-white text-sm mb-2 group-hover:text-cyber-blue transition-colors">{ind.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{ind.desc}</p>
                  </motion.div>
                </Link>
              </ScaleIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TechMarquee() {
  return (
    <section className="py-16 overflow-hidden border-y border-white/5">
      <div className="container-xl mb-8">
        <FadeUp className="text-center">
          <span className="text-white/30 font-mono text-xs tracking-widest uppercase">Technology Partners & OEM Expertise</span>
        </FadeUp>
      </div>
      <div className="relative flex gap-8 overflow-hidden">
        <motion.div
          className="flex gap-8 shrink-0"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div
              key={i}
              className="glass-dark border border-white/5 rounded-lg px-6 py-3 whitespace-nowrap text-white/40 font-mono text-sm hover:text-cyber-blue hover:border-cyber-blue/20 transition-colors"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-xl">
        <FadeUp className="text-center mb-16">
          <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Client Stories</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
            Trusted by <span className="gradient-text">Enterprise Leaders</span>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="glass-dark cyber-border rounded-2xl p-8 h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-electric flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="section-padding">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-navy-800 to-cyber-electric/10" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-blue/5 blur-3xl rounded-full" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Get Started</span>
            <h2 className="font-display font-bold text-4xl md:text-6xl text-white mt-4 mb-6">
              Ready to Transform
              <span className="block gradient-text">Your IT Infrastructure?</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
              Talk to our enterprise specialists today and get a free infrastructure assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/projects" className="btn-secondary text-base px-8 py-4">
                View Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <TechMarquee />
      <Testimonials />
      <ContactCTA />
    </PageTransition>
  )
}
