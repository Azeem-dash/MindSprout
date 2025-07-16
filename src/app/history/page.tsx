'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const HistoryPage = () => {
  const [checkIns, setCheckIns] = useState<any[]>([])
  const [habit, setHabit] = useState<any>(null)

  useEffect(() => {
    // Load data from localStorage
    const savedCheckIns = JSON.parse(localStorage.getItem('mindsprout_checkins') || '[]')
    const savedHabit = JSON.parse(localStorage.getItem('mindsprout_habit') || '{}')
    
    setCheckIns(savedCheckIns.reverse()) // Most recent first
    setHabit(savedHabit)
  }, [])

  const getMoodEmoji = (mood: string) => {
    const moodMap: { [key: string]: string } = {
      great: '😊',
      good: '🙂',
      okay: '😐',
      bad: '😞',
      terrible: '😢',
    }
    return moodMap[mood] || '😐'
  }

  const getSuccessRate = () => {
    if (checkIns.length === 0) return 0
    const completed = checkIns.filter(checkIn => checkIn.habitCompleted).length
    return Math.round((completed / checkIns.length) * 100)
  }

  const getStreakCount = () => {
    let streak = 0
    for (const checkIn of checkIns) {
      if (checkIn.habitCompleted) {
        streak++
      } else {
        break
      }
    }
    return streak
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="text-4xl mb-4">📊</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Progress</h1>
        <p className="text-gray-600">Track your habit journey and celebrate your wins</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-6 mb-8"
      >
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg text-center">
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-2xl font-bold text-gray-800">{getSuccessRate()}%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg text-center">
          <div className="text-3xl mb-2">🔥</div>
          <div className="text-2xl font-bold text-gray-800">{getStreakCount()}</div>
          <div className="text-sm text-gray-600">Current Streak</div>
        </div>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg text-center">
          <div className="text-3xl mb-2">📅</div>
          <div className="text-2xl font-bold text-gray-800">{checkIns.length}</div>
          <div className="text-sm text-gray-600">Total Check-ins</div>
        </div>
      </motion.div>

      {/* Habit Info */}
      {habit && habit.habitName && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-purple-100/50 rounded-xl p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-purple-800 mb-2">
            Current Habit: {habit.habitName}
          </h2>
          <p className="text-purple-600">{habit.description}</p>
          <div className="mt-2 flex items-center space-x-4 text-sm text-purple-700">
            <span>📅 {habit.frequency}</span>
            <span>⏰ {habit.reminderTime}</span>
            <span>🏷️ {habit.category}</span>
          </div>
        </motion.div>
      )}

      {/* Check-in History */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white/40 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Check-ins</h2>
        
        {checkIns.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-4">🌱</div>
            <p>No check-ins yet. Start your journey today!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {checkIns.map((checkIn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">
                      {checkIn.habitCompleted ? '✅' : '❌'}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800">
                        {new Date(checkIn.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                      <div className="text-sm text-gray-600">
                        {checkIn.habitCompleted ? 'Completed' : 'Missed'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl mb-1">{getMoodEmoji(checkIn.mood)}</div>
                    <div className="text-sm text-gray-600 capitalize">{checkIn.mood}</div>
                  </div>
                </div>
                
                {checkIn.notes && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{checkIn.notes}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <button
          onClick={() => window.location.href = '/checkin'}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
        >
          Daily Check-in ✅
        </button>
        <button
          onClick={() => window.location.href = '/setup'}
          className="bg-white/50 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-white/70 transition-colors border border-purple-200 hover:border-purple-300"
        >
          Change Habit ⚙️
        </button>
      </motion.div>
    </div>
  )
}

export default HistoryPage
