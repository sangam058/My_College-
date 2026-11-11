import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CollegeCard from '../Components/College_card';

// Sequential 3-Sentence Typewriter Headline (Dark-mode extension safe solid colors)
const SequentialHeadline = () => {
  const lines = [
    "Shape Your Future",
    "With World-Class Learning",
    "At our College"
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(['', '', '']);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const currentFullText = lines[lineIndex];
    const currentTyped = displayedText[lineIndex];

    if (currentTyped.length < currentFullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => {
          const next = [...prev];
          next[lineIndex] = currentFullText.slice(0, currentTyped.length + 1);
          return next;
        });
      }, 70);
      return () => clearTimeout(timer);
    } else {
      const lineTimer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(lineTimer);
    }
  }, [displayedText, lineIndex]);

  return (
    <div className="space-y-2 font-extrabold tracking-tight text-white leading-tight">
      {/* Line 1 */}
      <div className="text-4xl sm:text-6xl md:text-7xl">
        <span>{displayedText[0]}</span>
        {lineIndex === 0 && <span className="animate-pulse ml-1 text-blue-400">|</span>}
      </div>

      {/* Line 2 - Fixed with high-contrast solid text and drop-shadow for dark-mode extensions */}
      <div className="text-3xl sm:text-5xl md:text-6xl text-sky-400 font-bold drop-shadow-md">
        <span>{displayedText[1]}</span>
        {lineIndex === 1 && <span className="animate-pulse ml-1 text-sky-300">|</span>}
      </div>

      {/* Line 3 */}
      <div className="text-2xl sm:text-4xl md:text-5xl text-blue-300">
        <span>{displayedText[2]}</span>
        {lineIndex >= 2 && <span className="animate-pulse ml-1 text-blue-400">|</span>}
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 border-b border-slate-800/80 overflow-hidden">
        {/* Campus Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1600"
            alt="My College Campus"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          {/* Explicit College Name Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest"
          >
             <span>College Official Portal</span>
          </motion.div>

          {/* Sequential 3-Sentence Typewriter Headline */}
          <div className="min-h-[220px] flex items-center justify-center">
            <SequentialHeadline />
          </div>

          {/* Clean Subtitle Without Typewriter Loop */}
          <p className="text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto pt-2">
            Empowering Future Leaders through excellence in education, innovative research, and state-of-the-art campus facilities.
          </p>

          {/* Clearly Visible Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-20"
          >
            <Link to="/admission" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all border border-blue-400/30"
              >
                Apply For Admission
              </motion.button>
            </Link>

            <Link to="/courses" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-8 py-4 rounded-xl border border-slate-700 shadow-md transition-all"
              >
                Explore Courses
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our College Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-2"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Our College
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Discover what makes My College an exceptional choice for higher education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <CollegeCard
            title="Experienced Faculty"
            description="Learn from highly experienced professors and industry veterans dedicated to student academic success."
            image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600"
            category="Faculty"
            onLearnMore={() => navigate('/faculty')}
          />
          <CollegeCard
            title="Modern Campus & Labs"
            description="Access cutting-edge computer labs, well-stocked libraries, and modern interactive classrooms."
            image="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600"
            category="Infrastructure"
            onLearnMore={() => navigate('/about')}
          />
          <CollegeCard
            title="Career Support"
            description="Benefit from dedicated placement cell training, resume workshops, and campus recruitment drives."
            image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600"
            category="Placements"
            onLearnMore={() => navigate('/courses')}
          />
        </div>
      </section>

    </div>
  );
};

export default Home;