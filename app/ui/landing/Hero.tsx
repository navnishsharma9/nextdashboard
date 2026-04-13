'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-open-sans">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-poppins font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight max-w-4xl"
          >
            We build{' '}
            <span className="gradient-text">scalable web</span>
            {' '}
            &amp;{' '}
            <span className="gradient-text">mobile products</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-open-sans text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            A collaborative team of elite freelance developers turning your ideas into
            powerful digital products — from MVP to enterprise scale.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#contact"
              className="group flex items-center gap-2 font-poppins font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-2xl hover:opacity-90 transition-all duration-200 neon-glow text-base"
            >
              Start a Project
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#portfolio"
              className="group flex items-center gap-2 font-poppins font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/30 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-200 text-base"
            >
              <PlayIcon className="w-5 h-5" />
              View Work
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white/10 w-full max-w-lg"
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '8+', label: 'Years Combined Exp.' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-poppins font-bold text-3xl gradient-text">{stat.value}</div>
                <div className="font-open-sans text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating cards */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute hidden lg:block top-32 right-12 glass-card rounded-2xl px-4 py-3 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="font-open-sans text-gray-300">5 projects active</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute hidden lg:block bottom-40 left-12 glass-card rounded-2xl px-4 py-3 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🚀</span>
            <span className="font-open-sans text-gray-300">Shipped last week</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
