import Link from 'next/link';

const footerLinks = {
  Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud & DevOps'],
  Company: ['About', 'Team', 'Work', 'Blog'],
  Contact: ['Start a Project', 'hello@devteam.studio', 'WhatsApp'],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-poppins">D</span>
              </div>
              <span className="font-poppins font-bold text-white text-lg">
                Dev<span className="gradient-text">Team</span>
              </span>
            </Link>
            <p className="font-open-sans text-gray-500 text-sm leading-relaxed mb-6">
              A collaborative team of elite freelance developers building scalable web & mobile products.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {['GitHub', 'Twitter', 'LinkedIn'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/40 transition-all text-xs font-open-sans"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-poppins font-semibold text-white text-sm mb-4">{section}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="font-open-sans text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-open-sans text-sm text-gray-600">
            © {new Date().getFullYear()} DevTeam Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-open-sans text-sm text-gray-600 hover:text-gray-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-open-sans text-sm text-gray-600 hover:text-gray-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
