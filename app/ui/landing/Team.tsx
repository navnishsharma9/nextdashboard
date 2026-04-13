'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

const members = [
  {
    name: 'Alex Rivera',
    role: 'Frontend Developer',
    avatar: '🧑‍💻',
    avatarBg: 'from-indigo-500 to-blue-600',
    bio: 'Crafting pixel-perfect UIs with React & Next.js. Passionate about performance and accessibility.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://example.com',
    detailedBio:
      'Alex is a senior frontend engineer with 6+ years of experience building high-performance web applications. Specializes in React ecosystems, design systems, and web vitals optimization.',
    experience: '6+ years',
    keyProjects: ['FinTrack Dashboard', 'SaaS Onboarding Platform', 'HealthConnect Portal'],
    skills: [
      { name: 'React/Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'CSS/Tailwind', level: 88 },
      { name: 'Performance', level: 85 },
    ],
  },
  {
    name: 'Sarah Chen',
    role: 'Backend Developer',
    avatar: '👩‍💻',
    avatarBg: 'from-purple-500 to-indigo-600',
    bio: 'Building robust APIs and microservices with Node.js, Laravel & cloud-native architectures.',
    tech: ['Node.js', 'Laravel', 'PostgreSQL', 'AWS'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://example.com',
    detailedBio:
      'Sarah is a backend architect who loves building scalable systems. She has shipped over 20 API products and led multiple cloud migration projects.',
    experience: '7+ years',
    keyProjects: ['MarketHub E-commerce', 'SaaS Onboarding Platform', 'HealthConnect Portal'],
    skills: [
      { name: 'Node.js/Express', level: 95 },
      { name: 'Laravel/PHP', level: 88 },
      { name: 'Databases', level: 92 },
      { name: 'AWS/Cloud', level: 80 },
    ],
  },
  {
    name: 'Marcus Johnson',
    role: 'Mobile Developer',
    avatar: '🧑‍🎨',
    avatarBg: 'from-pink-500 to-purple-600',
    bio: 'Shipping beautiful iOS & Android apps with Flutter and React Native since 2017.',
    tech: ['Flutter', 'React Native', 'Firebase', 'Dart'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://example.com',
    detailedBio:
      'Marcus builds cross-platform mobile apps that feel truly native. He has published 12+ apps on both the App Store and Google Play.',
    experience: '7+ years',
    keyProjects: ['DeliverEase App', 'EduLearn Mobile'],
    skills: [
      { name: 'Flutter/Dart', level: 96 },
      { name: 'React Native', level: 88 },
      { name: 'Firebase', level: 85 },
      { name: 'App Store Optimization', level: 75 },
    ],
  },
  {
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    avatar: '👩‍🎨',
    avatarBg: 'from-teal-500 to-cyan-600',
    bio: 'Designing intuitive experiences from wireframes to polished Figma prototypes. Design systems advocate.',
    tech: ['Figma', 'Framer', 'Adobe XD', 'Prototyping'],
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://example.com',
    detailedBio:
      'Priya leads UX research and design across all products. She creates design systems that scale and conducts user testing to validate every decision.',
    experience: '5+ years',
    keyProjects: ['EduLearn Mobile', 'FinTrack Dashboard', 'DeliverEase App'],
    skills: [
      { name: 'UI Design', level: 97 },
      { name: 'User Research', level: 88 },
      { name: 'Design Systems', level: 90 },
      { name: 'Prototyping', level: 93 },
    ],
  },
];

type Member = (typeof members)[number];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-open-sans text-sm text-gray-400">{name}</span>
        <span className="font-open-sans text-sm text-indigo-400">{level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-full"
        />
      </div>
    </div>
  );
}

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.3 }}
        className="glass-card rounded-3xl max-w-lg w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white p-1"
          aria-label="Close modal"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Avatar & basic */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarBg} flex items-center justify-center text-3xl flex-shrink-0`}>
            {member.avatar}
          </div>
          <div>
            <h3 className="font-poppins font-bold text-xl text-white">{member.name}</h3>
            <p className="font-open-sans text-indigo-400 text-sm">{member.role}</p>
            <p className="font-open-sans text-gray-500 text-xs mt-0.5">{member.experience} experience</p>
          </div>
        </div>

        {/* Detailed bio */}
        <p className="font-open-sans text-gray-300 text-sm leading-relaxed mb-6">
          {member.detailedBio}
        </p>

        {/* Key projects */}
        <div className="mb-6">
          <h4 className="font-poppins font-semibold text-white text-sm mb-3">Key Projects</h4>
          <div className="flex flex-wrap gap-2">
            {member.keyProjects.map((p) => (
              <span key={p} className="font-open-sans text-xs text-purple-300 border border-purple-500/30 bg-purple-500/10 px-3 py-1 rounded-full">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6">
          <h4 className="font-poppins font-semibold text-white text-sm mb-3">Skills</h4>
          <div className="flex flex-col gap-3">
            {member.skills.map((s) => (
              <SkillBar key={s.name} name={s.name} level={s.level} />
            ))}
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex-1 text-center font-open-sans text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 py-2 rounded-xl transition-all">
            GitHub
          </a>
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 text-center font-open-sans text-sm text-gray-400 hover:text-white border border-white/10 hover:border-white/30 py-2 rounded-xl transition-all">
            LinkedIn
          </a>
          <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="flex-1 text-center font-poppins text-sm font-medium bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white py-2 rounded-xl hover:opacity-90 transition-all">
            Portfolio
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MemberCard({ member, index, onClick }: { member: Member; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative glass-card gradient-border rounded-2xl p-6 cursor-pointer neon-glow-hover transition-all duration-300"
      onClick={onClick}
    >
      {/* Avatar */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.avatarBg} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {member.avatar}
      </div>

      <h3 className="font-poppins font-bold text-lg text-white">{member.name}</h3>
      <p className="font-open-sans text-indigo-400 text-sm mb-3">{member.role}</p>
      <p className="font-open-sans text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {member.tech.map((t) => (
          <span key={t} className="font-open-sans text-xs text-gray-400 bg-white/5 border border-white/10 px-2 py-1 rounded-lg">
            {t}
          </span>
        ))}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* CTA */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <a href={member.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="font-open-sans text-xs text-gray-500 hover:text-white transition-colors">GitHub</a>
        <span className="text-gray-700">·</span>
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="font-open-sans text-xs text-gray-500 hover:text-white transition-colors">LinkedIn</a>
        <span className="ml-auto font-poppins text-xs text-indigo-400 group-hover:text-indigo-300 transition-colors">
          View Profile →
        </span>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <section id="team" className="py-24 relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-12 mb-12"
        >
          {[
            { val: '4+', label: 'Expert Developers' },
            { val: '26+', label: 'Years Combined Exp.' },
            { val: '50+', label: 'Products Shipped' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-poppins font-bold text-2xl gradient-text">{s.val}</div>
              <div className="font-open-sans text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-open-sans text-sm text-indigo-400 font-medium tracking-widest uppercase">
            The Team
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mt-3">
            Meet the Team Behind{' '}
            <span className="gradient-text">the Work</span>
          </h2>
          <p className="font-open-sans text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            A tight-knit squad of specialists who collaborate like a studio but move like a startup.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, i) => (
            <MemberCard
              key={member.name}
              member={member}
              index={i}
              onClick={() => setSelected(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <MemberModal member={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
