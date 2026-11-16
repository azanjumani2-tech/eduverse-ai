import { createElement } from 'react'
import type { ReactNode } from 'react'
import { Atom, BookOpen, Calculator, FlaskConical, Microscope } from 'lucide-react'

export interface Subject {
  name: string
  detail: string
  color: string
  icon: ReactNode
}

export interface Lesson {
  title: string
  subject: string
  duration: string
  progress: number
}

// Starter catalog only; textbook resources are added separately.
export const boards: string[] = ['General curriculum']

export const subjects: Subject[] = [
  { name: 'Biology', detail: 'Explore living things', color: 'green', icon: createElement(Microscope, { size: 20 }) },
  { name: 'Physics', detail: 'Discover matter and energy', color: 'blue', icon: createElement(Atom, { size: 20 }) },
  { name: 'Chemistry', detail: 'Understand elements and reactions', color: 'violet', icon: createElement(FlaskConical, { size: 20 }) },
  { name: 'Mathematics', detail: 'Build problem-solving skills', color: 'orange', icon: createElement(Calculator, { size: 20 }) },
  { name: 'English', detail: 'Develop language and reading skills', color: 'pink', icon: createElement(BookOpen, { size: 20 }) },
]

// No lessons or student progress have been added to this starter yet.
export const lessons: Lesson[] = []
