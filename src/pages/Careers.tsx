import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Briefcase, Heart, TrendingUp, Users, Award, Zap } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp, ScaleIn } from '../components/ui/Section'
import { OPEN_POSITIONS } from '../data/company'

const BENEFITS = [
  { icon: TrendingUp, title: 'Career Growth', desc: 'Clear progression paths and leadership development programs.' },
  { icon: Award, title: 'Certifications', desc: 'Company-sponsored Cisco, HP, Azure, AWS certifications.' },
  { icon: Heart, title: 'Health Benefits', desc: 'Comprehensive medical insurance for you and your family.' },
  { icon: Users, title: 'Great Team', desc: 'Work with experienced engineers in a collaborative culture.' },
  { icon: Zap, title: 'Latest Tech', desc: 'Hands-on with cutting-edge enterprise IT and AI systems.' },
  { icon: Briefcase, title: 'Flexible Work', desc: 'Hybrid work options for applicable roles.' },
]

export default function Careers() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <FadeUp>
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Join TERAIT</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              Build the Future of
              <span className="block gradient-text">Enterprise IT</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Join a team of passionate engineers and technology leaders transforming Indian enterprises.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Our Culture</span>
              <h2 className="font-display font-bold text-4xl text-white mt-3 mb-6">
                Where Experts
                <span className="block gradient-text">Thrive Together</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                At TERAIT, we believe great technology is built by great people. Our culture is built on collaboration, continuous learning, and the shared mission of delivering excellence to every client we serve.
              </p>
              <p className="text-white/50 leading-relaxed">
                Whether you're a seasoned network engineer or just starting your IT career, you'll find a community that invests in your growth and celebrates your wins.
              </p>
            </FadeUp>
            <div className="grid grid-cols-2 gap-4">
              {BENEFITS.map((b, i) => (
                <ScaleIn key={b.title} delay={i * 0.08}>
                  <div className="glass-dark cyber-border rounded-xl p-5 h-full">
                    <b.icon className="w-6 h-6 text-cyber-blue mb-3" />
                    <h4 className="font-display font-semibold text-white text-sm mb-1">{b.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-xl">
          <FadeUp className="text-center mb-12">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Open Roles</span>
            <h2 className="font-display font-bold text-4xl text-white mt-3">
              Current <span className="gradient-text">Openings</span>
            </h2>
          </FadeUp>

          <div className="space-y-4">
            {OPEN_POSITIONS.map((pos, i) => (
              <FadeUp key={pos.title} delay={i * 0.06}>
                <motion.div
                  className="glass-dark cyber-border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
                  whileHover={{ borderColor: 'rgba(14,165,233,0.4)' }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-blue/10 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-cyber-blue" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white">{pos.title}</h3>
                      <div className="flex flex-wrap gap-4 mt-1">
                        <span className="flex items-center gap-1.5 text-white/50 text-xs">
                          <Briefcase className="w-3 h-3" /> {pos.dept}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/50 text-xs">
                          <MapPin className="w-3 h-3" /> {pos.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-white/50 text-xs">
                          <Clock className="w-3 h-3" /> {pos.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {pos.type === 'Internship' && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/20">
                        Internship
                      </span>
                    )}
                    <Link to="/contact" className="btn-primary text-sm px-5 py-2">
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="section-padding">
        <div className="container-xl">
          <FadeUp className="text-center mb-16">
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Hiring Process</span>
            <h2 className="font-display font-bold text-4xl text-white mt-3">
              Simple &amp; <span className="gradient-text">Transparent</span>
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Apply', desc: 'Submit your resume via our contact form or email.' },
              { step: '02', title: 'Screening', desc: 'HR call to understand your background and goals.' },
              { step: '03', title: 'Technical Round', desc: 'Domain-specific interview with our senior engineers.' },
              { step: '04', title: 'Offer', desc: 'Competitive package discussion and onboarding.' },
            ].map((s, i) => (
              <FadeUp key={s.step} delay={i * 0.1}>
                <div className="glass-dark cyber-border rounded-2xl p-7 text-center relative">
                  <div className="font-display font-bold text-5xl gradient-text opacity-20 mb-4">{s.step}</div>
                  <h3 className="font-display font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-white/50 text-sm">{s.desc}</p>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-cyber-blue/30" />
                  )}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-900/30">
        <div className="container-xl text-center">
          <FadeUp>
            <h2 className="font-display font-bold text-4xl text-white mb-4">
              Don't See Your Role? <span className="gradient-text">Reach Out</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">We're always looking for talented IT professionals. Send us your resume and we'll keep you in mind.</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Send Your Resume <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </PageTransition>
  )
}
