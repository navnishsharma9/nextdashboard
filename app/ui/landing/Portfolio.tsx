'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const filters = ['All', 'Web', 'Mobile', 'Full Stack'];

const projects = [
  {
    title: 'FinTrack Dashboard',
    category: 'Web',
    description: 'Real-time financial analytics platform with Next.js & D3.js.',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'PostgreSQL'],
    color: 'from-indigo-600 to-blue-700',
    emoji: '📊',
  },
  {
    title: 'DeliverEase App',
    category: 'Mobile',
    description: 'Last-mile delivery app with real-time tracking built on Flutter.',
    tech: ['Flutter', 'Firebase', 'Google Maps', 'Node.js'],
    color: 'from-purple-600 to-pink-700',
    emoji: '🚚',
  },
  {
    title: 'SaaS Onboarding Platform',
    category: 'Full Stack',
    description: 'End-to-end user onboarding system with multi-step flows and analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'from-teal-600 to-cyan-700',
    emoji: '🚀',
  },
  {
    title: 'HealthConnect Portal',
    category: 'Web',
    description: 'Patient-doctor telehealth portal with video calls and scheduling.',
    tech: ['Next.js', 'WebRTC', 'Redis', 'Prisma'],
    color: 'from-green-600 to-teal-700',
    emoji: '🏥',
  },
  {
    title: 'EduLearn Mobile',
    category: 'Mobile',
    description: 'Interactive e-learning app with offline mode and progress tracking.',
    tech: ['React Native', 'GraphQL', 'SQLite', 'AWS S3'],
    color: 'from-orange-600 to-red-700',
    emoji: '📚',
  },
  {
    title: 'MarketHub E-commerce',
    category: 'Full Stack',
    description: 'Multi-vendor marketplace with AI-powered recommendations.',
    tech: ['Next.js', 'Python', 'PostgreSQL', 'OpenAI'],
    color: 'from-blue-600 to-indigo-700',
    emoji: '🛒',
  },
];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-24 relative bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-open-sans text-sm text-indigo-400 font-medium tracking-widest uppercase">
            Our Work
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mt-3">
            Projects We're{' '}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="font-open-sans text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Real products shipped for real clients — spanning industries and platforms.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`font-poppins text-sm px-5 py-2 rounded-xl transition-all duration-200 ${
                active === f
                  ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white shadow-lg'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-card rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Project visual */}
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl`}>
                  {project.emoji}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gray-950/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                  <span className="font-poppins font-semibold text-white text-lg">{project.title}</span>
                  <button className="flex items-center gap-2 font-open-sans text-sm bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-xl transition-all border border-white/20">
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    View Case Study
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-poppins font-semibold text-white">{project.title}</h3>
                    <span className="font-open-sans text-xs text-indigo-400 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="font-open-sans text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="font-open-sans text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
