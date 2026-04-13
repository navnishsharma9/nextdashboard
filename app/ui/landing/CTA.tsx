'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-950">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-indigo-600/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-purple-600/25 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card gradient-border rounded-3xl px-8 py-16"
        >
          <div className="text-5xl mb-6">💡</div>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mb-4">
            Have an idea?
          </h2>
          <p className="font-poppins font-semibold text-2xl sm:text-3xl gradient-text mb-6">
            Let's build it together.
          </p>
          <p className="font-open-sans text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Whether it's a brand new product or scaling what you have — we're ready to jump in and
            make it happen fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group flex items-center gap-2 font-poppins font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-10 py-4 rounded-2xl hover:opacity-90 transition-all neon-glow text-base"
            >
              Start a Project
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#team"
              className="font-poppins font-medium text-gray-300 hover:text-white border border-white/10 hover:border-white/30 px-10 py-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all text-base"
            >
              Meet the Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
