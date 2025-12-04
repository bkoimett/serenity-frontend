// src/components/WhatsAppButton.jsx
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const phoneNumber = "+254722970951";
  const defaultMessage =
    "Hello! I'm interested in learning more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(defaultMessage)}`;

  // Hide button on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Auto-hide after 5 seconds if not interacted with
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isHovered) {
        setIsVisible(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute right-full mr-3 bottom-1/2 translate-y-1/2"
              >
                <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
                  <div className="text-sm font-semibold">Chat with us</div>
                  <div className="text-xs text-green-300">
                    Typically replies in minutes
                  </div>
                </div>
                {/* Tooltip arrow */}
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-2 h-2 bg-slate-900 rotate-45" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main WhatsApp button */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="relative"
              animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
              transition={{ duration: 0.5 }}
            >
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 bg-green-500 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Second pulsing ring */}
              <motion.div
                className="absolute inset-0 bg-green-400 rounded-full opacity-10"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.1, 0, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Main button */}
              <div className="relative bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 group">
                <MessageCircle className="w-6 h-6 text-white" />

                {/* Unread message indicator */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">1</span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
              />
            </motion.div>
          </motion.a>

          {/* Floating message count (optional) */}
          <motion.div
            className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            1
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Alternative simpler version if you want minimal animations:
export function WhatsAppButtonSimple() {
  const phoneNumber = "+254722970951";
  const defaultMessage =
    "Hello! I'm interested in learning more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Tooltip */}
      <div className="absolute right-full mr-3 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
          <div className="text-sm font-semibold">Chat with us</div>
          <div className="text-xs text-green-300">
            Typically replies in minutes
          </div>
        </div>
        {/* Tooltip arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
          <div className="w-2 h-2 bg-slate-900 rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-green-500/30 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6 text-white" />

        {/* Unread indicator */}
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">1</span>
        </div>
      </a>
    </div>
  );
}
