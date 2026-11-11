import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 'bsc-cs',
      name: 'B.Sc Computer Science',
      category: 'Undergraduate',
      duration: '3 Years',
      desc: 'Master algorithms, software development, full-stack engineering, and core computing principles.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'bsc-it',
      name: 'B.Sc Information Technology',
      category: 'Undergraduate',
      duration: '3 Years',
      desc: 'Focus on modern IT systems, databases, web technologies, networking, and cloud architecture.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'bcom',
      name: 'B.Com',
      category: 'Undergraduate',
      duration: '3 Years',
      desc: 'Gain comprehensive knowledge in financial accounting, taxation, corporate banking, and business analytics.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'ba',
      name: 'B.A',
      category: 'Undergraduate',
      duration: '3 Years',
      desc: 'Explore humanities, literature, social sciences, critical thinking, and media communications.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'bba',
      name: 'BBA',
      category: 'Undergraduate',
      duration: '3 Years',
      desc: 'Build essential leadership, business operations, entrepreneurship, and marketing management skills.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 'msc-cs',
      name: 'M.Sc Computer Science',
      category: 'Postgraduate',
      duration: '2 Years',
      desc: 'Advanced studies in artificial intelligence, distributed systems, software architecture, and research.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const categories = ['All', 'Undergraduate', 'Postgraduate'];

  // Filtered Course Data
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            course.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-widest">
            Curriculum Catalog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Our Academic Programs
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Choose from a diverse range of industry-aligned undergraduate and postgraduate degree programs designed for real-world impact.
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-xl"
        >
          {/* Category Badges */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white text-xs placeholder-slate-500 rounded-xl pl-9 pr-4 py-2.5 outline-none transition-all"
            />
            <svg
              className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-slate-900/80 border border-slate-800/80 rounded-3xl overflow-hidden shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image & Badge Header */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-slate-950/80 backdrop-blur-md text-blue-400 border border-blue-500/30 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                    </div>

                    <span className="absolute bottom-3 right-4 text-xs font-medium text-slate-300 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800">
                      ⏱️ {course.duration}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 mb-2">
                      {course.name}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed flex-grow line-clamp-3 mb-6">
                      {course.desc}
                    </p>

                    <Link
                      to="/admission"
                      className="mt-auto block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm py-3 px-4 rounded-xl shadow-md shadow-blue-500/20 transition-colors"
                    >
                      Apply for Course
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Empty Search State */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 space-y-3 bg-slate-900/40 rounded-3xl border border-slate-800"
            >
              <div className="text-4xl">🔍</div>
              <h3 className="text-lg font-bold text-white">No Programs Found</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                No courses match your current filter or search criteria. Try adjusting your query.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs text-blue-400 hover:underline font-semibold pt-2 inline-block"
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Courses;