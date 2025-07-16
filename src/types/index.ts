// Habit related types
export interface HabitFormData {
  habitName: string
  description: string
  frequency: 'daily' | 'weekly' | 'custom'
  category: 'health' | 'productivity' | 'mindfulness' | 'learning' | 'social' | 'other'
  reminderTime: string
}

export interface Habit extends HabitFormData {
  id?: string
  createdAt?: string
}

// Check-in related types
export interface CheckInFormData {
  habitCompleted: boolean
  mood: 'great' | 'good' | 'okay' | 'bad' | 'terrible'
  notes: string
}

export interface CheckInData extends CheckInFormData {
  date: string
  timestamp: string
}

// AI Feedback types
export interface AIFeedback {
  reflection: string
  tip: string
  quote: string
}

// Mood option type
export interface MoodOption {
  value: 'great' | 'good' | 'okay' | 'bad' | 'terrible'
  emoji: string
  label: string
}
