import { ArrowRight, Star, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#F0EDFF] to-white overflow-hidden pt-24"
    >
      {/* ================= BACKGROUND FLOATING ICONS ================= */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-12"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star className="w-8 h-8 text-[#FDB64E] fill-current" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-24"
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-10 h-10 text-[#FF6B9D] fill-current" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-24"
          animate={{ y: [0, -25, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-12 h-12 text-[#4A9FD8]" />
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full
bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8]
text-white font-semibold shadow-lg">
  Welcome to Purple Asters
</span>

<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold
leading-tight mb-6 text-[#FFC527]">
  WHERE LITTLE{" "}
  <span
    className="text-transparent bg-clip-text
    bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8]"
  >
    DREAMS
  </span>{" "}
  BLOOM
</h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Nurturing young minds through play, learning, and exploration in a
              safe and loving environment.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("contact")}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#5B4FBF] to-[#4A9FD8] text-white font-semibold text-lg shadow-xl"
              >
                Enroll Now
                <ArrowRight />
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  backgroundColor: "#5B4FBF",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate("about")}
                className="px-8 py-4 rounded-full border-2 border-[#5B4FBF] text-[#5B4FBF] font-semibold text-lg"
              >
                Learn More
              </motion.button>
            </div>

            {/* STATS */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[
                { value: "250+", label: "Happy Kids", color: "#5B4FBF" },
                { value: "15+", label: "Years Experience", color: "#4A9FD8" },
                { value: "25+", label: "Expert Teachers", color: "#FDB64E" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div
                    className="text-3xl font-bold"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
<div className="w-full h-[420px] sm:h-[480px] flex items-center justify-center">
  <motion.img
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.6 }}
    src="School.Logo.jpg"
    alt="Happy children learning"
    className="max-w-full max-h-full object-contain rounded-3xl shadow-2xl"
  />
</div>



            <motion.div
              className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-[#5B4FBF]/20 to-[#4A9FD8]/20 rounded-3xl -z-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
