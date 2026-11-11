import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faculty = () => {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const faculty = [
    {
      id: 1,
      name: "Dr. Rahul Sharma",
      department: "Computer Science",
      subject: "Computer Science & AI",
      experience: "10 Years Experience",
      degree: "Ph.D. in Artificial Intelligence, IIT Bombay",
      specialization: "Machine Learning, Distributed Computing, Neural Networks",
      teachingStyle: "Hands-on coding labs, real-world case studies, and interactive problem-solving sessions.",
      email: "r.sharma@mycollege.com",
      bio: "Specializes in Machine Learning algorithms, Distributed Computing, and Data Structures research.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Prof. Priya Mehta",
      department: "Information Technology",
      subject: "Information Technology",
      experience: "8 Years Experience",
      degree: "M.Tech in Information Technology, BITS Pilani",
      specialization: "Cloud Architecture, Web Technologies, Cyber Security",
      teachingStyle: "Project-driven framework deployment, collaborative team assignments, and industry tools training.",
      email: "p.mehta@mycollege.com",
      bio: "Passionate about Web Technologies, Cloud Architecture, and Enterprise Systems Security.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Prof. Amit Patel",
      department: "Commerce",
      subject: "Commerce & Finance",
      experience: "7 Years Experience",
      degree: "MBA in Finance & CFA Charterholder",
      specialization: "Corporate Finance, International Trade, Financial Analytics",
      teachingStyle: "Simulation-based financial modeling, market trend discussions, and analytical case breakdowns.",
      email: "a.patel@mycollege.com",
      bio: "Expert in Corporate Finance, International Trade, and Forensic Financial Accounting.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Dr. Neha Singh",
      department: "Sciences",
      subject: "Applied Mathematics",
      experience: "12 Years Experience",
      degree: "Ph.D. in Mathematics, University of Delhi",
      specialization: "Quantum Computing Models, Linear Algebra, Cryptography",
      teachingStyle: "Rigorous logical proof structuring, step-by-step conceptual breakdown, and active Q&A.",
      email: "n.singh@mycollege.com",
      bio: "Focuses on Quantum Computing models, Linear Algebra, and Mathematical Physics research.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      name: "Prof. Arjun Verma",
      department: "Sciences",
      subject: "Physics & Electronics",
      experience: "6 Years Experience",
      degree: "M.Sc. in Physics, IISc Bangalore",
      specialization: "Applied Optics, Semiconductor Devices, Electromagnetic Theory",
      teachingStyle: "Demonstration-heavy lectures, laboratory experiments, and experiential inquiry learning.",
      email: "a.verma@mycollege.com",
      bio: "Researcher in Applied Optics, Semiconductor Materials, and Modern Electromagnetic Theory.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 6,
      name: "Dr. Sneha Kapoor",
      department: "Management",
      subject: "Management Studies",
      experience: "9 Years Experience",
      degree: "Ph.D. in Business Administration & IIM Alum",
      specialization: "Organizational Behavior, Strategic Leadership, Entrepreneurship",
      teachingStyle: "Harvard-style business case study discussions, leadership workshops, and group pitches.",
      email: "s.kapoor@mycollege.com",
      bio: "Focuses on Organizational Behavior, Strategic Brand Leadership, and Entrepreneurship.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const departments = ['All', 'Computer Science', 'Information Technology', 'Commerce', 'Sciences', 'Management'];

  // Filter Logic
  const filteredFaculty = useMemo(() => {
    return faculty.filter((teacher) => {
      const matchesDept = selectedDept === 'All' || teacher.department === selectedDept;
      const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            teacher.subject.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  const handleOpenProfile = (teacher) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Background Accent Gradient */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-widest">
            Academic Mentors
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Meet Our Distinguished Faculty
          </h1>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Learn from renowned professors, researchers, and industry experts committed to student mentorship and academic excellence.
          </p>
        </motion.div>

        {/* Search & Department Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl backdrop-blur-xl"
        >
          {/* Department Pills */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search professor or subject..."
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

        {/* Faculty Grid */}
        <AnimatePresence mode="wait">
          {filteredFaculty.length > 0 ? (
            <motion.div
              key={`${selectedDept}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredFaculty.map((teacher, index) => (
                <motion.div
                  key={teacher.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="group bg-slate-900/80 border border-slate-800/80 rounded-3xl p-6 text-center shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col items-center relative overflow-hidden"
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Profile Avatar */}
                  <div className="relative w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg mb-4">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover rounded-full bg-slate-950"
                    />
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {teacher.name}
                  </h2>
                  <p className="text-blue-400 font-semibold text-xs mt-1 uppercase tracking-wider">
                    {teacher.subject}
                  </p>
                  <p className="text-slate-400 text-xs mt-2 bg-slate-800/60 px-3 py-1 rounded-full border border-slate-700/50">
                    🎖️ {teacher.experience}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOpenProfile(teacher)}
                    className="mt-6 w-full bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold py-2.5 px-4 rounded-xl text-xs border border-slate-700 hover:border-blue-500 transition-all shadow-sm cursor-pointer relative z-20"
                  >
                    View Profile
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 space-y-3 bg-slate-900/40 rounded-3xl border border-slate-800">
              <div className="text-4xl">👨‍🏫</div>
              <h3 className="text-lg font-bold text-white">No Faculty Members Found</h3>
              <p className="text-slate-400 text-sm max-w-sm mx-auto">
                No professors match your search criteria. Try resetting your department filters.
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Faculty Detail Modal */}
      <AnimatePresence>
        {selectedTeacher && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTeacher(null)}
            className="fixed inset-0 z-[9999] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-lg w-full shadow-2xl space-y-6 relative my-8 z-[10000]"
            >
              <button
                onClick={() => setSelectedTeacher(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold cursor-pointer"
              >
                ✕
              </button>

              <div className="text-center space-y-3">
                <img
                  src={selectedTeacher.image}
                  alt={selectedTeacher.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-blue-500"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedTeacher.name}</h3>
                  <p className="text-blue-400 text-xs font-semibold uppercase">{selectedTeacher.subject}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                <p><span className="font-semibold text-slate-400">Department:</span> {selectedTeacher.department}</p>
                <p><span className="font-semibold text-slate-400">Experience:</span> {selectedTeacher.experience}</p>
                <p><span className="font-semibold text-slate-400">Holding Degree:</span> {selectedTeacher.degree}</p>
                <p><span className="font-semibold text-slate-400">Specialization:</span> {selectedTeacher.specialization}</p>
                <p><span className="font-semibold text-slate-400">Teaching Style:</span> {selectedTeacher.teachingStyle}</p>
                <p><span className="font-semibold text-slate-400">Email:</span> {selectedTeacher.email}</p>
                <p className="pt-3 border-t border-slate-800 leading-relaxed"><span className="font-semibold text-slate-400">Bio:</span> {selectedTeacher.bio}</p>
              </div>

              <button
                onClick={() => setSelectedTeacher(null)}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl text-xs transition-colors cursor-pointer shadow-md shadow-blue-500/20"
              >
                Close Profile
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Faculty;