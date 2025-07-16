'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Formik, Form, Field } from 'formik'
import { motion } from 'framer-motion'
import AIFeedback from '@/components/AIFeedback'

interface CheckInData {
  habitCompleted: boolean
  mood: string
  notes: string
  date: string
}

const CheckInPage = () => {
  const router = useRouter()
  const [habit, setHabit] = useState<any>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [checkInData, setCheckInData] = useState<CheckInData | null>(null)

  useEffect(() => {
    // Check if habit is set up
    const savedHabit = localStorage.getItem('mindsprout_habit')
    if (!savedHabit) {
      router.push('/setup')
      return
    }
    setHabit(JSON.parse(savedHabit))
  }, [router])

  const handleSubmit = async (values: any) => {
    const submitData = {
      ...values,
      date: new Date().toISOString().split('T')[0],
      timestamp: new Date().toISOString(),
    }

    // Store check-in data
    const existingCheckIns = JSON.parse(localStorage.getItem('mindsprout_checkins') || '[]')
    existingCheckIns.push(submitData)
    localStorage.setItem('mindsprout_checkins', JSON.stringify(existingCheckIns))

    setCheckInData(submitData)
    setShowFeedback(true)
  }

  const moodOptions = [
    { value: 'great', emoji: '😊', label: 'Great' },
    { value: 'good', emoji: '🙂', label: 'Good' },
    { value: 'okay', emoji: '😐', label: 'Okay' },
    { value: 'bad', emoji: '😞', label: 'Bad' },
    { value: 'terrible', emoji: '😢', label: 'Terrible' },
  ]

  if (!habit) {
    return (
      <div className="max-w-md mx-auto text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your habit...</p>
      </div>
    )
  }

  if (showFeedback && checkInData) {
    return <AIFeedback checkInData={checkInData} habit={habit} />
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/40 backdrop-blur-sm rounded-xl p-8 border border-white/30 shadow-lg"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Daily Check-In</h1>
          <p className="text-gray-600">How did you do with your habit today?</p>
        </div>

        {/* Habit Display */}
        <div className="bg-purple-100/50 rounded-lg p-4 mb-8">
          <h2 className="text-xl font-semibold text-purple-800 mb-1">
            {habit.habitName}
          </h2>
          <p className="text-purple-600 text-sm">{habit.description}</p>
        </div>

        <Formik
          initialValues={{
            habitCompleted: false,
            mood: '',
            notes: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-6">
              {/* Habit Completion */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Did you complete your habit today?
                </label>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setFieldValue('habitCompleted', true)}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      values.habitCompleted
                        ? 'bg-green-500 text-white shadow-lg transform scale-105'
                        : 'bg-white/50 text-gray-700 hover:bg-green-100'
                    }`}
                  >
                    <div className="text-2xl mb-2">✅</div>
                    <div>Yes, I did it!</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFieldValue('habitCompleted', false)}
                    className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                      !values.habitCompleted && values.habitCompleted !== ''
                        ? 'bg-red-500 text-white shadow-lg transform scale-105'
                        : 'bg-white/50 text-gray-700 hover:bg-red-100'
                    }`}
                  >
                    <div className="text-2xl mb-2">❌</div>
                    <div>No, I missed it</div>
                  </button>
                </div>
              </div>

              {/* Mood Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  How are you feeling today?
                </label>
                <div className="grid grid-cols-5 gap-3">
                  {moodOptions.map((mood) => (
                    <button
                      key={mood.value}
                      type="button"
                      onClick={() => setFieldValue('mood', mood.value)}
                      className={`p-4 rounded-lg text-center transition-all duration-200 ${
                        values.mood === mood.value
                          ? 'bg-purple-500 text-white shadow-lg transform scale-105'
                          : 'bg-white/50 hover:bg-purple-100'
                      }`}
                    >
                      <div className="text-2xl mb-1">{mood.emoji}</div>
                      <div className="text-sm font-medium">{mood.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  Any notes or reflections? (Optional)
                </label>
                <Field
                  as="textarea"
                  name="notes"
                  rows={4}
                  placeholder="How do you feel about your progress? Any challenges or wins to share?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={values.habitCompleted === '' || !values.mood}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  Get AI Feedback 🧠
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  )
}

export default CheckInPage
