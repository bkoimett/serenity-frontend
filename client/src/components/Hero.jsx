// src/components/Hero.jsx (Optimized for Performance)
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Only enable complex animations if user doesn't prefer reduced motion
  const shouldAnimate = !prefersReducedMotion;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simple fade-in animation that's GPU-friendly
  const fadeInUp = {
    hidden: { opacity: 0, y: shouldAnimate ? 20 : 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Stagger animation for trust indicators
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  // Simplified hover effects
  const hoverScale = {
    whileHover: shouldAnimate ? { scale: 1.02 } : {},
    whileTap: shouldAnimate ? { scale: 0.98 } : {},
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Optimized Background - Reduced GPU load */}
      <div className="absolute inset-0">
        {/* Simplified animated gradients */}
        {shouldAnimate ? (
          <>
            <motion.div
              className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1.05, 1, 1.05],
                opacity: [0.2, 0.1, 0.2],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: 5,
              }}
            />
          </>
        ) : (
          // Static fallback for reduced motion
          <>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          </>
        )}

        {/* Geometric pattern overlay for modern look */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32">
        {/* Announcement Banner */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUp}
          className="hidden sm:mb-8 sm:flex sm:justify-center"
        >
          <div className="relative rounded-full px-4 py-2 text-sm/6 text-cyan-300 ring-1 ring-white/20 hover:ring-cyan-400/50 transition-all duration-300 bg-white/5 backdrop-blur-sm cursor-pointer group">
            {shouldAnimate && (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -left-1 -top-1"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
              </motion.div>
            )}
            <span className="group-hover:text-cyan-200 transition-colors">
              Is Social Media to Blame for Increase in Addiction Cases?
            </span>
            <Link
              to="/blog"
              className="ml-2 font-semibold text-white hover:text-cyan-100 transition-colors"
            >
              Read more →
            </Link>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Find Peace at
              <span className="block bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 bg-clip-text text-transparent mt-2">
                The Serenity Place
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              ...fadeInUp,
              visible: {
                ...fadeInUp.visible,
                transition: { ...fadeInUp.visible.transition, delay: 0.1 },
              },
            }}
            className="mb-8 md:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Your journey to recovery begins here. Professional, compassionate
              care in a tranquil environment designed for healing.
            </p>
          </motion.div>

          {/* CTA Buttons - Modern design */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <motion.div {...hoverScale} className="relative">
                <Link
                  to="#contact"
                  className="block bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden group"
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 p-[1px] rounded-lg bg-gradient-to-r from-blue-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center">
                    Get Help Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <motion.div {...hoverScale} className="relative">
                <a
                  href="tel:+254722970951"
                  className="block bg-gradient-to-r from-white/5 to-white/10 text-white border border-white/20 hover:border-white/40 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 flex items-center justify-center shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden group"
                >
                  {shouldAnimate && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                  <span className="relative z-10 flex items-center">
                    <Phone className="mr-2 w-5 h-5" />
                    (+254) 722 970 951
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Trust Indicators - Clean modern design */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              ...fadeInUp,
              visible: {
                ...fadeInUp.visible,
                transition: { ...fadeInUp.visible.transition, delay: 0.4 },
              },
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
              {[
                {
                  number: "24/7",
                  label: "Support Available",
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  number: "100%",
                  label: "Confidential",
                  color: "from-purple-400 to-pink-400",
                },
                {
                  number: "10+",
                  label: "Years Experience",
                  color: "from-cyan-400 to-blue-400",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  >
                    {item.number}
                  </div>
                  <div className="text-sm sm:text-base text-blue-200/80 group-hover:text-blue-100 transition-colors">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator - Simplified */}
        {shouldAnimate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center">
              <div className="text-sm text-blue-300/70 mb-2">
                Scroll to explore
              </div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
              >
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
