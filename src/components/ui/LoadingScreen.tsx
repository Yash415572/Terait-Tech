import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-slate-50 z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="relative">
          <motion.div
            className="h-20 w-48 flex items-center justify-center"
            animate={{ boxShadow: ['0 0 20px rgba(14,165,233,0.3)', '0 0 60px rgba(14,165,233,0.7)', '0 0 20px rgba(14,165,233,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <img src="/teraitlogo_copy.png" alt="TERAIT Technologies" className="h-full w-auto object-contain" />
          </motion.div>
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-cyber-blue/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ margin: '-8px' }}
          />
        </div>

        <div className="text-center">
          <h1 className="font-display font-bold text-2xl text-slate-950 mb-1">TERAIT Technologies</h1>
          <p className="text-slate-500 font-mono text-sm tracking-widest">INITIALIZING SYSTEMS...</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-px bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyber-blue to-cyber-cyan rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>

        {/* Status dots */}
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-cyber-blue"
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
