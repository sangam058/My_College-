import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stats = [
    { value: '5,000+', label: 'Active Students', icon: '🎓' },
    { value: '100+', label: 'Expert Faculty', icon: '👨‍🏫' },
    { value: '25+', label: 'Academic Courses', icon: '📚' },
    { value: '95%', label: 'Placement Rate', icon: '🚀' },
  ];

  const corePillars = [
    {
      title: 'Our Mission',
      description: 'To foster intellectual growth, technical excellence, and ethical leadership in a dynamic, student-centric learning environment.',
      icon: (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Our Vision',
      description: 'To be a premier institution recognized globally for research, innovative teaching methodologies, and impactful community outreach.',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-20 relative z-10"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-widest">
            Excellence In Education
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Empowering the Leaders of Tomorrow
          </h1>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            Discover our rich heritage of academic achievement, vibrant campus culture, and unwavering commitment to shaping the future.
          </p>
        </motion.div>

        {/* Hero Banner Grid */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Building a World-Class Learning Community
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              My College is committed to delivering transformative education that equips students with real-world skills, critical thinking capabilities, and moral leadership to excel in their professional careers.
            </p>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Our state-of-the-art campus features modern research labs, interactive lecture halls, highly experienced faculty, and a thriving ecosystem for innovation and extracurricular involvement.
            </p>
          </div>

          {/* Styled Image Container */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative group rounded-3xl p-2 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="rounded-2xl overflow-hidden relative h-80 w-full">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                alt="Campus Life"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </motion.div>
        </motion.div>

        {/* Core Pillars: Mission & Vision */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
          {corePillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-xl flex flex-col space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Grid Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-900/40 border border-slate-800 text-center shadow-lg hover:border-blue-500/40 transition-colors"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;