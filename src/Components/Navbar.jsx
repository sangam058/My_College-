import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission', path: '/admission' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' },
  ];

  // Scroll detection for dynamic elevation styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 transition-all duration-200">
      <nav
        className={`w-full transition-all duration-200 ${
          scrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800/80 py-3'
            : 'bg-slate-900/70 backdrop-blur-sm border-b border-slate-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Brand Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-2 group">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Apex College
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-1 items-center font-medium bg-slate-800/50 p-1.5 rounded-full border border-slate-700/50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm rounded-full transition-colors duration-150 z-10 ${
                    isActive ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {/* Snappy, Lag-Free Sliding Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-md shadow-blue-500/30"
                      transition={{ type: 'spring', stiffness: 600, damping: 25 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/admission">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-blue-500/20 transition-all"
              >
                Apply Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Animated Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-6 py-4"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <div className="pt-2">
                  <Link to="/admission" onClick={() => setIsOpen(false)}>
                    <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-md shadow-blue-500/20">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;