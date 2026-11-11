import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate async network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
    }, 1000);
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-20 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl w-full relative z-10 space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-3"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 uppercase tracking-widest">
            Reach Out
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Get in Touch With Us
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-lg mx-auto">
            Have questions about admissions, courses, or campus life? We would love to hear from you.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl">
          
          {/* Contact Information Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">College Headquarters</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Visit our campus or connect with our administrative support staff through our official communication channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Location</h3>
                  <p className="text-sm">123 College Road, Mumbai, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Phone</h3>
                  <p className="text-sm">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400 shrink-0">
                  📧
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email</h3>
                  <p className="text-sm">info@mycollege.com</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500">
              Office Hours: Monday – Saturday, 9:00 AM – 5:00 PM IST
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-slate-950/60 border border-emerald-500/30 p-8 rounded-2xl text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    🚀
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-400">
                    Thank you for reaching out, <span className="text-blue-400 font-semibold">{formData.name}</span>. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 px-5 rounded-xl transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-xl px-4 py-3.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="How can we help you?"
                      className="w-full bg-slate-950/60 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-500 rounded-xl p-4 text-sm outline-none transition-all resize-none"
                    ></textarea>
                  </div>

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
                        Sending...
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;