import type { ReactNode } from 'react'

interface Subject {
  name: string
  detail: string
  color: string
  icon: ReactNode
}

interface Lesson {
  title: string
  subject: string
  duration: string
  progress: number
}

// Static starter content; board-specific resources are not connected yet.
export const boards: string[] = ['General curriculum']

export const subjects: Subject[] = [
  { name: 'Biology', detail: 'Explore living things', color: 'green', icon: '🧬' },
  { name: 'Physics', detail: 'Discover matter and motion', color: 'blue', icon: '⚛️' },
  { name: 'Chemistry', detail: 'Understand elements and reactions', color: 'cyan', icon: '🧪' },
  { name: 'Mathematics', detail: 'Build problem-solving skills', color: 'violet', icon: '∑' },
  { name: 'English', detail: 'Develop language and literacy', color: 'orange', icon: '📖' },
  { name: 'Computer Science', detail: 'Explore computing concepts', color: 'pink', icon: '💻' },
]

// Populate when lesson resources are available.
export const lessons: Lesson[] = []
