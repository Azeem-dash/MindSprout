'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-12"
      >
        <motion.div 
          className="text-6xl mb-4"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          🌱
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Welcome to <span className="text-purple-600 dark:text-purple-400">MindSprout</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Your AI-powered habit tracker and daily reflection coach. 
          Build better habits, track your progress, and get personalized insights.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/setup"
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started 🚀
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/checkin"
              className="inline-block bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-purple-600 dark:text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors border border-purple-200 dark:border-purple-600 hover:border-purple-300 dark:hover:border-purple-500"
            >
              Daily Check-in ✅
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8 py-12"
      >
        <motion.div 
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="text-3xl mb-4"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            🎯
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Habit Tracking
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Set meaningful goals and track your daily progress with our intuitive interface.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="text-3xl mb-4"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            🧠
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            AI Insights
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Get personalized reflections, tips, and motivation powered by AI to keep you on track.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 group"
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="text-3xl mb-4"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            📊
          </motion.div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            Progress History
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Visualize your journey with detailed analytics and celebrate your achievements.
          </p>
        </motion.div>
      </motion.div>

      {/* How It Works */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <motion.div 
            className="space-y-4"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="bg-purple-100 dark:bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              1️⃣
            </motion.div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Set Your Goal</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Define the habit you want to build</p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="bg-blue-100 dark:bg-blue-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              2️⃣
            </motion.div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Daily Check-in</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Log your progress and mood daily</p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="bg-green-100 dark:bg-green-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              3️⃣
            </motion.div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Get AI Feedback</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Receive personalized insights</p>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div 
              className="bg-pink-100 dark:bg-pink-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-2xl"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              4️⃣
            </motion.div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Track Progress</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">See your growth over time</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
