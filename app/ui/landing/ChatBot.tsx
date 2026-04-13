'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline';

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl w-72 overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-poppins text-sm font-semibold text-white">DevTeam Assistant</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white" aria-label="Close chat">
                <XMarkIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="flex gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-sm">
                  🤖
                </div>
                <div className="glass-card rounded-2xl rounded-tl-none px-3 py-2 text-sm font-open-sans text-gray-300">
                  Hi! 👋 How can we help you today? Tell us about your project idea!
                </div>
              </div>

              {/* Input placeholder */}
              <div className="flex gap-2 mt-4">
                <label htmlFor="chatbot-input" className="sr-only">Chat message</label>
                <input
                  id="chatbot-input"
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 font-open-sans"
                />
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-2 rounded-xl text-sm font-poppins hover:opacity-90 transition-opacity" aria-label="Send message">
                  →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center neon-glow shadow-xl"
        aria-label="Open chat"
      >
        {open ? (
          <XMarkIcon className="w-6 h-6 text-white" />
        ) : (
          <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  );
}
