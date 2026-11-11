import React from 'react';
import { motion } from 'framer-motion';

const College_card = ({ 
  title = "Untitled Program", 
  description = "No description available.", 
  image, 
  category = "Academic",
  onLearnMore 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-slate-900 border border-slate-800 rounded-2xl shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Image Preview */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-950">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {category && (
          <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-blue-400 border border-blue-500/30 text-[10px] font-semibold uppercase px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 mb-2">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">
          {description}
        </p>

        {/* Action Button */}
        <motion.button
          onClick={onLearnMore}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full mt-auto bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold py-3 px-4 rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default College_card;