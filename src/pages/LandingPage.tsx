import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Code2, Eye, ChevronRight, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/10 blur-[120px]" />

      {/* Hero Section */}
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          UI Components for the Future
        </h1>
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg sm:text-xl">
          Explore modern, sleek, and high-performance UI elements—ready to use.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-7xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FeatureCard
          icon={<Sparkles className="w-12 h-12 text-cyan-400" />}
          title="Beautiful & Minimal"
          description="Designed for a sleek and futuristic look, perfect for any modern project."
        />
        <FeatureCard
          icon={<Code2 className="w-12 h-12 text-purple-400" />}
          title="Easy to Implement"
          description="Copy-paste the code and integrate seamlessly into your projects."
        />
        <FeatureCard
          icon={<Eye className="w-12 h-12 text-pink-400" />}
          title="Preview in Real-Time"
          description="Instantly see how components adapt to different layouts."
        />
      </motion.div>

      {/* Stats / Testimonials Section */}
      <motion.div
        className="mt-16 w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <StatCard
          icon={<Users className="w-12 h-12 text-cyan-400" />}
          stat="500+"
          description="Developers Using This"
        />
        <StatCard
          icon={<Star className="w-12 h-12 text-yellow-400" />}
          stat="4.9/5"
          description="User Ratings"
        />
        <StatCard
          icon={<Code2 className="w-12 h-12 text-purple-400" />}
          stat="500+"
          description="UI Components"
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
          to="/home"
          className="relative px-8 py-3 text-lg font-semibold rounded-full bg-cyan-500 hover:bg-cyan-600 transition-all shadow-lg 
                     hover:shadow-cyan-400/40 active:scale-95 flex items-center gap-2"
        >
          Explore Components <ChevronRight className="w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    className="p-8 rounded-xl bg-gray-900/50 backdrop-blur-lg border border-gray-800 hover:border-cyan-400 transition-all 
               flex flex-col items-center text-center space-y-6 shadow-lg hover:shadow-cyan-500/20"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 10 }}
  >
    <div className="p-4 bg-gray-800 rounded-full">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

// Stats Card Component
const StatCard = ({
  icon,
  stat,
  description,
}: {
  icon: React.ReactNode;
  stat: string;
  description: string;
}) => (
  <motion.div
    className="p-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-400 transition-all"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h2 className="text-3xl font-bold text-gray-100">{stat}</h2>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

export default LandingPage;
