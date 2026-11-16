export interface Subject {
  name: string
  detail: string
  color: 'green' | 'blue' | 'violet' | 'orange' | 'cyan' | 'pink'
  icon: string
}

export interface Lesson {
  title: string
  subject: string
  duration: string
  progress: number
}

// Starter content for the dashboard and library previews.
export const boards: string[] = [
  'Federal Board',
  'Punjab Board',
  'Sindh Board',
  'Cambridge',
]

export const subjects: Subject[] = [
  { name: 'Biology', detail: 'Explore living systems', color: 'green', icon: '🧬' },
  { name: 'Physics', detail: 'Discover matter and motion', color: 'blue', icon: '⚛️' },
  { name: 'Chemistry', detail: 'Understand elements and reactions', color: 'violet', icon: '🧪' },
  { name: 'Mathematics', detail: 'Build your problem-solving skills', color: 'orange', icon: '📐' },
  { name: 'Computer Science', detail: 'Explore computing concepts', color: 'cyan', icon: '💻' },
  { name: 'English', detail: 'Develop language skills', color: 'pink', icon: '📖' },
]

export const lessons: Lesson[] = [
  { title: 'Cell structure', subject: 'Biology', duration: 'Starter topic', progress: 0 },
  { title: 'Motion and gravity', subject: 'Physics', duration: 'Starter topic', progress: 0 },
  { title: 'Molecular structure', subject: 'Chemistry', duration: 'Starter topic', progress: 0 },
]
