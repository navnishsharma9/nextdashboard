'use client';

import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  CloudIcon,
  CogIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: CodeBracketIcon,
    title: 'Web Development',
    description: 'Full-stack web apps with React, Next.js, Node.js & modern databases — optimized for performance and scale.',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Mobile Development',
    description: 'Cross-platform iOS & Android apps with Flutter and React Native — native performance, single codebase.',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    icon: PaintBrushIcon,
    title: 'UI/UX Design',
    description: 'User-centered design with pixel-perfect Figma prototypes, design systems and smooth interactions.',
    gradient: 'from-pink-500 to-purple-500',
  },
  {
    icon: CloudIcon,
    title: 'Cloud & DevOps',
    description: 'AWS, GCP, Docker, CI/CD pipelines — we keep your infrastructure reliable, scalable and cost-efficient.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CogIcon,
    title: 'API & Integrations',
    description: 'RESTful & GraphQL APIs, third-party integrations, payment gateways, and real-time systems.',
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'QA & Security',
    description: 'Automated testing, security audits, and performance monitoring to ship with confidence.',
    gradient: 'from-green-500 to-teal-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-open-sans text-sm text-indigo-400 font-medium tracking-widest uppercase">
            What We Do
          </span>
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-white mt-3">
            Services Built for{' '}
            <span className="gradient-text">Modern Products</span>
          </h2>
          <p className="font-open-sans text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            From design to deployment, we cover every layer of your digital product.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card gradient-border rounded-2xl p-6 group cursor-pointer transition-all duration-300 neon-glow-hover"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-poppins font-semibold text-xl text-white mb-3">
                {service.title}
              </h3>
              <p className="font-open-sans text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow line */}
              <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${service.gradient} transition-all duration-500 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
