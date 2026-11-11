import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission', path: '/admission' },
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
    { name: 'LinkedIn', href: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 100 4 2 2 0 000-4z' },
    { name: 'GitHub', href: '#', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 mt-20 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 relative z-10">
        
        {/* Brand & About Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-1"
        >
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Apex College
            </span>
          </Link>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Empowering students through quality education, innovative learning, and modern campus facilities.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                aria-label={social.name}
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={social.icon} />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                  <Link 
                    to={link.path} 
                    className="text-slate-400 hover:text-blue-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 College Road, Mumbai, Maharashtra</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9876543210</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@mycollege.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter Signup Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-4">Stay Updated</h3>
          <p className="text-xs text-slate-400 mb-3">Subscribe to receive admission alerts and updates.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-slate-900 border border-slate-800 focus:border-blue-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs py-2 px-4 rounded-xl shadow-md transition-colors"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} My College. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;