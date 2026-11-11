import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Admission from './Pages/Admission';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import Faculty from './Pages/Faculty';

// Scroll to top automatically on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

// Animated Page Wrapper Helper
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content View with Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Home />
                </AnimatedPage>
              }
            />
            <Route
              path="/about"
              element={
                <AnimatedPage>
                  <About />
                </AnimatedPage>
              }
            />
            <Route
              path="/admission"
              element={
                <AnimatedPage>
                  <Admission />
                </AnimatedPage>
              }
            />
            <Route
              path="/courses"
              element={
                <AnimatedPage>
                  <Courses />
                </AnimatedPage>
              }
            />
            <Route
              path="/contact"
              element={
                <AnimatedPage>
                  <Contact />
                </AnimatedPage>
              }
            />
            <Route
              path="/faculty"
              element={
                <AnimatedPage>
                  <Faculty />
                </AnimatedPage>
              }
            />
            {/* Fallback 404 Route */}
            <Route
              path="*"
              element={
                <AnimatedPage>
                  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-6xl font-extrabold text-blue-500">404</h1>
                    <p className="text-xl font-semibold text-white mt-4">Page Not Found</p>
                    <p className="text-slate-400 text-sm mt-2">The page you are looking for does not exist.</p>
                  </div>
                </AnimatedPage>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;