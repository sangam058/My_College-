import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', phone: '', course: '' });
    setSubmitted(false);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-20 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background Accent Blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3 mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-widest">
            Admissions Open
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Start Your Academic Journey
          </h1>
          <p className="text-slate-400 text-sm md:text-base">
            Take the first step toward building your future. Fill out the application form below.
          </p>
        </motion.div>

        {/* Animated Container */}
        <AnimatePresence mode="wait">
          {submitted ? (
            /* Success View */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/80 border border-slate-800 backdrop-blur-xl p-10 rounded-3xl text-center shadow-2xl space-y-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400"
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-white">Application Submitted! 🎉</h2>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Thank you, <span className="text-blue-400 font-semibold">{formData.fullName || 'Applicant'}</span>. Our admissions counseling team will review your application and contact you soon.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleReset}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Submit Another Application
              </motion.button>
            </motion.div>
          ) : (
            /* Application Form */
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl space-y-6"
            >
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Student Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                />
              </div>

              {/* Email & Phone Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="student@example.com"
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 9876543210"
                    className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Course Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Select Program
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                >
                  <option value="" disabled className="bg-slate-900 text-slate-400">
                    -- Choose a Degree Program --
                  </option>
                  <option value="B.Sc Computer Science" className="bg-slate-900">B.Sc Computer Science</option>
                  <option value="B.Sc Information Technology" className="bg-slate-900">B.Sc Information Technology</option>
                  <option value="B.Com" className="bg-slate-900">B.Com</option>
                  <option value="B.A" className="bg-slate-900">B.A</option>
                  <option value="BBA" className="bg-slate-900">BBA</option>
                  <option value="M.Sc Computer Science" className="bg-slate-900">M.Sc Computer Science</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all duration-200 mt-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span>Submit Application</span>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Admission;