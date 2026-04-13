'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-open-sans text-sm text-indigo-400 font-medium tracking-widest uppercase">
              Get in Touch
            </span>
            <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mt-3 mb-6">
              Let's Start a{' '}
              <span className="gradient-text">Conversation</span>
            </h2>
            <p className="font-open-sans text-gray-400 text-lg leading-relaxed mb-8">
              Have a project in mind? Fill in the form or reach out directly via email or
              WhatsApp — we typically respond within a few hours.
            </p>

            {/* Quick contact links */}
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@devteam.studio"
                className="flex items-center gap-4 glass-card rounded-2xl px-5 py-4 hover:border-indigo-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-poppins text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">
                    hello@devteam.studio
                  </div>
                  <div className="font-open-sans text-xs text-gray-500">Drop us an email</div>
                </div>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card rounded-2xl px-5 py-4 hover:border-green-500/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-poppins text-sm font-medium text-white group-hover:text-green-300 transition-colors">
                    WhatsApp
                  </div>
                  <div className="font-open-sans text-xs text-gray-500">Quick chat, fast response</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card gradient-border rounded-3xl p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="font-poppins font-bold text-2xl text-white mb-2">Message Sent!</h3>
                  <p className="font-open-sans text-gray-400">
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="font-open-sans text-sm text-gray-400 mb-2 block" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 font-open-sans text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-open-sans text-sm text-gray-400 mb-2 block" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 font-open-sans text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-open-sans text-sm text-gray-400 mb-2 block" htmlFor="details">
                      Project Details
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={5}
                      value={form.details}
                      onChange={handleChange}
                      placeholder="Tell us about your project — what you're building, timeline, and budget..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 font-open-sans text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="font-poppins font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-4 rounded-2xl hover:opacity-90 transition-opacity neon-glow text-base"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
