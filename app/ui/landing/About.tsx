'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Delivered', icon: '🚀' },
  { value: '30+', label: 'Happy Clients', icon: '🤝' },
  { value: '4', label: 'Core Team Members', icon: '👥' },
  { value: '8+', label: 'Years Combined Exp.', icon: '⭐' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-open-sans text-sm text-indigo-400 font-medium tracking-widest uppercase">
              Our Story
            </span>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mt-3 mb-6">
              Built on{' '}
              <span className="gradient-text">Collaboration</span>
              {' '}& Craft
            </h2>
            <div className="flex flex-col gap-4 font-open-sans text-gray-400 text-base leading-relaxed">
              <p>
                We started as individual freelancers who kept hiring each other for the same projects.
                It didn't take long to realize that together, we could tackle bigger problems and deliver
                better results than any of us could alone.
              </p>
              <p>
                Today, DevTeam Studio operates as a cohesive micro-agency — combining deep technical
                expertise in frontend, backend, mobile, and design under one roof. We communicate like
                a team, move like a startup, and deliver like a studio.
              </p>
              <p>
                Our clients get the agility of a freelancer with the reliability of an agency. That's
                the DevTeam difference.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 flex flex-col gap-3">
              {[
                { icon: '⚡', text: 'Rapid iteration — from idea to launch in weeks, not months.' },
                { icon: '🔍', text: 'Transparent communication — you always know where things stand.' },
                { icon: '🎯', text: 'Quality over quantity — we only take projects we can nail.' },
              ].map((v) => (
                <div key={v.text} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{v.icon}</span>
                  <span className="font-open-sans text-gray-300 text-sm">{v.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass-card gradient-border rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="font-poppins font-bold text-4xl gradient-text">{stat.value}</div>
                <div className="font-open-sans text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
