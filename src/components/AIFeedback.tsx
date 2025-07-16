'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const AIFeedback = ({ checkInData, habit }: { checkInData: any; habit: any }) => {
  const [feedback, setFeedback] = useState({
    reflection: '',
    tip: '',
    quote: '',
  })

  useEffect(() => {
    // Mock AI response with dynamic content based on check-in data
    const fetchFeedback = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // Generate dynamic responses based on habit completion and mood
      const { habitCompleted, mood, notes } = checkInData
      
      let reflection = ''
      let tip = ''
      let quote = ''
      
      // Dynamic reflection based on completion and mood
      if (habitCompleted) {
        if (mood === 'great' || mood === 'good') {
          reflection = `Fantastic! You completed your habit and you're feeling ${mood}. This positive momentum will help you build lasting change. Keep celebrating these wins!`
        } else if (mood === 'okay') {
          reflection = `Great job completing your habit today! Even though you're feeling okay, you still showed up and that's what matters. Tomorrow might feel even better!`
        } else {
          reflection = `I'm proud of you for completing your habit despite feeling ${mood}. This shows incredible resilience and commitment to your goals.`
        }
      } else {
        if (mood === 'great' || mood === 'good') {
          reflection = `You missed your habit today but you're still feeling ${mood} - that's a positive sign! Don't let one day derail your progress. Tomorrow is a fresh start.`
        } else {
          reflection = `It's okay to have off days. You're feeling ${mood} and missed your habit, but this doesn't define your journey. Be kind to yourself and try again tomorrow.`
        }
      }
      
      // Dynamic tips based on habit category and performance
      const tipOptions = {
        health: [
          'Try setting out your workout clothes the night before to remove barriers.',
          'Start with just 5 minutes if the full routine feels overwhelming.',
          'Find a workout buddy for accountability and motivation.',
          'Consider tracking your energy levels to see how exercise affects your mood.'
        ],
        productivity: [
          'Use the Pomodoro Technique: 25 minutes focused work, 5-minute break.',
          'Eliminate distractions by putting your phone in another room.',
          'Start with your most challenging task when your energy is highest.',
          'Create a dedicated workspace that signals "work mode" to your brain.'
        ],
        mindfulness: [
          'Try a 2-minute breathing exercise if full meditation feels too long.',
          'Use guided meditation apps when you need extra support.',
          'Practice mindfulness during daily activities like eating or walking.',
          'Set a gentle reminder on your phone for meditation time.'
        ],
        learning: [
          'Break large topics into smaller, manageable chunks.',
          'Teach someone else what you learned to reinforce your understanding.',
          'Use the spaced repetition technique to improve retention.',
          'Connect new information to things you already know.'
        ],
        social: [
          'Quality over quantity - one meaningful conversation beats many shallow ones.',
          'Practice active listening to deepen your connections.',
          'Schedule regular check-ins with friends and family.',
          'Join groups or communities aligned with your interests.'
        ],
        other: [
          'Break your habit into smaller, more manageable steps.',
          'Track your progress visually with a habit tracker or calendar.',
          'Reward yourself for consistency, not just completion.',
          'Identify your habit triggers and optimize your environment.'
        ]
      }
      
      const categoryTips = tipOptions[habit.category as keyof typeof tipOptions] || tipOptions.other
      tip = categoryTips[Math.floor(Math.random() * categoryTips.length)]
      
      // Inspirational quotes
      const quotes = [
        '"Success is the sum of small efforts, repeated day in and day out." – Robert Collier',
        '"We are what we repeatedly do. Excellence, then, is not an act, but a habit." – Aristotle',
        '"The secret of getting ahead is getting started." – Mark Twain',
        '"A goal without a plan is just a wish." – Antoine de Saint-Exupéry',
        '"Don\'t watch the clock; do what it does. Keep going." – Sam Levenson',
        '"The journey of a thousand miles begins with one step." – Lao Tzu',
        '"Progress, not perfection." – Unknown',
        '"Fall seven times, stand up eight." – Japanese Proverb'
      ]
      
      quote = quotes[Math.floor(Math.random() * quotes.length)]
      
      setFeedback({ reflection, tip, quote })
    }

    fetchFeedback()
  }, [checkInData, habit])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto bg-white/40 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-lg"
    >
      <div className="text-center mb-8">
        <div className="text-3xl mb-4">🧠</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">AI Feedback</h1>
        <p className="text-gray-600">Here is some insightful feedback for you based on today’s check-in.</p>
      </div>

      {/* Feedback Content */}
      <div className="space-y-6">
        <div className="bg-green-100/50 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-green-800">Reflection</h2>
          <p className="text-green-700">{feedback.reflection}</p>
        </div>

        <div className="bg-blue-100/50 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-blue-800">Tip</h2>
          <p className="text-blue-700">{feedback.tip}</p>
        </div>

        <div className="bg-purple-100/50 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-purple-800">Quote</h2>
          <p className="text-purple-700">{feedback.quote}</p>
        </div>
      </div>

      <button
        onClick={() => window.location.href = '/history'}
        className="mt-8 w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
      >
        View Your Progress 📊
      </button>
    </motion.div>
  )
}

export default AIFeedback

