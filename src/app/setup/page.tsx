'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'

// Validation schema
const HabitSchema = Yup.object().shape({
  habitName: Yup.string()
    .min(3, 'Habit name must be at least 3 characters')
    .max(50, 'Habit name must be less than 50 characters')
    .required('Habit name is required'),
  description: Yup.string()
    .max(200, 'Description must be less than 200 characters')
    .required('Description is required'),
  frequency: Yup.string()
    .oneOf(['daily', 'weekly', 'custom'])
    .required('Frequency is required'),
  category: Yup.string()
    .oneOf(['health', 'productivity', 'mindfulness', 'learning', 'social', 'other'])
    .required('Category is required'),
  reminderTime: Yup.string()
    .matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format')
    .required('Reminder time is required'),
})

const HabitSetupPage = () => {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Store in localStorage
    localStorage.setItem('mindsprout_habit', JSON.stringify(values))
    
    setIsSubmitting(false)
    router.push('/checkin')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-white/30 dark:border-gray-700/30 shadow-lg"
      >
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">⚙️</div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Set Your Habit Goal</h1>
          <p className="text-gray-600 dark:text-gray-400">Define the habit you want to build and track</p>
        </div>

        <Formik
          initialValues={{
            habitName: '',
            description: '',
            frequency: 'daily',
            category: 'health',
            reminderTime: '09:00',
          }}
          validationSchema={HabitSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form className="space-y-6">
              {/* Habit Name */}
              <div>
                <label htmlFor="habitName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Habit Name
                </label>
                <Field
                  type="text"
                  name="habitName"
                  placeholder="e.g., Daily meditation, Morning workout"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <ErrorMessage name="habitName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  rows={3}
                  placeholder="Describe your habit and why it's important to you..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm resize-none"
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <Field
                  as="select"
                  name="category"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                >
                  <option value="health">🏃‍♂️ Health & Fitness</option>
                  <option value="productivity">📈 Productivity</option>
                  <option value="mindfulness">🧘‍♂️ Mindfulness</option>
                  <option value="learning">📚 Learning</option>
                  <option value="social">👥 Social</option>
                  <option value="other">🌟 Other</option>
                </Field>
                <ErrorMessage name="category" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frequency
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="frequency"
                      value="daily"
                      className="mr-2 text-purple-600"
                    />
                    <span className="text-sm">Daily</span>
                  </label>
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="frequency"
                      value="weekly"
                      className="mr-2 text-purple-600"
                    />
                    <span className="text-sm">Weekly</span>
                  </label>
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="frequency"
                      value="custom"
                      className="mr-2 text-purple-600"
                    />
                    <span className="text-sm">Custom</span>
                  </label>
                </div>
                <ErrorMessage name="frequency" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Reminder Time */}
              <div>
                <label htmlFor="reminderTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Daily Reminder Time
                </label>
                <Field
                  type="time"
                  name="reminderTime"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/50 backdrop-blur-sm"
                />
                <ErrorMessage name="reminderTime" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Setting up your habit...
                    </div>
                  ) : (
                    'Create Habit Goal 🎯'
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>
    </div>
  )
}

export default HabitSetupPage
