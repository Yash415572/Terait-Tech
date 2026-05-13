import { motion } from 'framer-motion'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import PageTransition from '../components/ui/PageTransition'
import { FadeUp } from '../components/ui/Section'
import { BLOG_POSTS } from '../data/company'

const CATEGORIES = ['All', 'CCTV & Surveillance', 'Cybersecurity', 'Cloud Infrastructure', 'Networking', 'IT Infrastructure', 'Smart Surveillance']

export default function Blog() {
  const featured = BLOG_POSTS[0]
  const rest = BLOG_POSTS.slice(1)

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container-xl relative z-10 text-center">
          <FadeUp>
            <span className="text-cyber-blue font-mono text-sm tracking-widest uppercase">Tech Insights</span>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-white mt-4 mb-6">
              IT Intelligence <span className="gradient-text">Hub</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Expert insights on CCTV, cybersecurity, cloud, networking, and enterprise IT trends.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container-xl">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-mono border transition-colors ${
                  cat === 'All'
                    ? 'bg-cyber-blue text-white border-cyber-blue'
                    : 'glass border-white/10 text-white/50 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-12">
        <div className="container-xl">
          <FadeUp>
            <motion.div
              className="glass-dark cyber-border rounded-2xl overflow-hidden grid md:grid-cols-2"
              whileHover={{ borderColor: 'rgba(14,165,233,0.3)' }}
            >
              <div className="aspect-video md:aspect-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                    FEATURED
                  </span>
                  <span className="flex items-center gap-1.5 text-white/40 text-xs">
                    <Tag className="w-3 h-3" /> {featured.category}
                  </span>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-white/30 text-xs font-mono">
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  </div>
                  <button className="flex items-center gap-2 text-cyber-blue text-sm font-medium hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <FadeUp key={post.id} delay={i * 0.08}>
                <motion.div
                  className="glass-dark cyber-border rounded-2xl overflow-hidden h-full flex flex-col card-hover"
                  whileHover={{ borderColor: 'rgba(14,165,233,0.3)' }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-cyber-blue text-xs font-mono">{post.category}</span>
                    </div>
                    <h3 className="font-display font-semibold text-white mb-3 leading-snug flex-1">{post.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center gap-3 text-white/30 text-xs font-mono">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                      </div>
                      <button className="flex items-center gap-1 text-cyber-blue text-xs hover:gap-2 transition-all">
                        Read <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
