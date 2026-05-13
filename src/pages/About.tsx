import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, MapPin, Users, TrendingUp, Award } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp, ScaleIn } from '../components/ui/Section'
import { STATS } from '../data/company'

const TIMELINE = [
  { year: '2009', title: 'Founded', desc: 'TERAIT Technologies established in Mumbai with a vision to democratize enterprise IT.' },
  { year: '2012', title: 'First 50 Clients', desc: 'Crossed 50 enterprise clients milestone across Maharashtra.' },
  { year: '2015', title: 'Delhi Expansion', desc: 'Opened Delhi NCR office, beginning our PAN India journey.' },
  { year: '2017', title: 'CCTV Division', desc: 'Launched dedicated CCTV & surveillance division with Hikvision partnership.' },
  { year: '2019', title: 'Cloud Services', desc: 'Added AWS, Azure, and GCP cloud services. Became 100+ client company.' },
  { year: '2021', title: 'Bengaluru Launch', desc: 'South India operations started from Bengaluru tech hub.' },
  { year: '2023', title: '200+ Clients', desc: 'Surpassed 200 enterprise clients. Launched 24/7 NOC operations.' },
  { year: '2024', title: 'AI Surveillance', desc: 'Launched AI-powered surveillance and smart analytics solutions.' },
]

const VALUES = [
  { icon: Target, title: 'Excellence', desc: 'We deliver nothing short of the highest quality in every project, every time.' },
  { icon: Eye, title: 'Transparency', desc: 'Open communication, honest pricing, and clear deliverables — always.' },
  { icon: Heart, title: 'Client-First', desc: 'Your success is our success. We invest in long-term partnerships, not transactions.' },
  { icon: TrendingUp, title: 'Innovation', desc: 'Constantly evolving our offerings to stay ahead of technology trends.' },
]

export default function About() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-950 grid-bg opacity-30" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyber-blue/5 blur-3xl rounded-full" />
        <div className="container-xl relative z-10">
          <FadeUp className="max-w-3xl">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">About TERAIT</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6 leading-tight">
              15 Years of Building
              <span className="block gradient-text">Enterprise IT Excellence</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              TERAIT Technologies is India's trusted enterprise IT infrastructure partner — delivering CCTV, networking, cloud, and managed IT solutions to 200+ businesses across the country.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-white/5">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <ScaleIn key={stat.label} delay={i * 0.1} className="text-center">
                <motion.div
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', delay: i * 0.1 }}
                >
                  <div className="font-display font-bold text-5xl gradient-text mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeUp>
              <div className="glass-dark cyber-border rounded-2xl p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-cyber-blue" />
                </div>
                <h2 className="font-display font-bold text-3xl text-white mb-4">Our Mission</h2>
                <p className="text-white/60 leading-relaxed text-lg">
                  To empower Indian enterprises with world-class IT infrastructure — making enterprise-grade technology accessible, reliable, and scalable for every business, regardless of size.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="glass-dark cyber-border rounded-2xl p-10 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-cyber-cyan" />
                </div>
                <h2 className="font-display font-bold text-3xl text-white mb-4">Our Vision</h2>
                <p className="text-white/60 leading-relaxed text-lg">
                  To become India's most trusted and innovative technology infrastructure company — one that sets the benchmark for enterprise IT excellence, security, and digital transformation.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-xl">
          <FadeUp className="text-center mb-16">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Core Values</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
              What <span className="gradient-text">Drives Us</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.1}>
                <div className="glass-dark cyber-border rounded-2xl p-8 text-center h-full card-hover">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-cyber-blue/10 flex items-center justify-center mb-5">
                    <v.icon className="w-7 h-7 text-cyber-blue" />
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mb-3">{v.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-xl">
          <FadeUp className="text-center mb-16">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Our Journey</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mt-3">
              Growth <span className="gradient-text">Milestones</span>
            </h2>
          </FadeUp>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue/50 via-cyber-blue/20 to-transparent hidden md:block" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <FadeUp key={item.year} delay={i * 0.08}>
                  <div className={`flex gap-8 items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="glass-dark cyber-border rounded-xl p-6 inline-block max-w-sm">
                        <div className="text-cyber-blue font-mono text-sm font-bold mb-2">{item.year}</div>
                        <h3 className="font-display font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-cyber-blue border-4 border-navy-950 z-10 shrink-0" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Presence</span>
            <h2 className="font-display font-bold text-4xl text-white mt-3">
              PAN India <span className="gradient-text">Operations</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { city: 'Mumbai', role: 'Headquarters', desc: 'Main office, NOC center, and technical training facility.' },
              { city: 'Delhi NCR', role: 'North India Hub', desc: 'Regional sales, support, and field operations center.' },
              { city: 'Bengaluru', role: 'South India Hub', desc: 'Cloud services, software, and tech solutions center.' },
            ].map((loc, i) => (
              <FadeUp key={loc.city} delay={i * 0.1}>
                <div className="glass-dark cyber-border rounded-2xl p-8 text-center card-hover">
                  <div className="w-12 h-12 mx-auto rounded-full bg-cyber-blue/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-1">{loc.city}</h3>
                  <div className="text-cyber-blue text-sm font-mono mb-3">{loc.role}</div>
                  <p className="text-white/50 text-sm">{loc.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="font-display font-bold text-4xl text-white mb-6">
              Ready to work with <span className="gradient-text">TERAIT?</span>
            </h2>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
