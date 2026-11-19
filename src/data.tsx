import type { ReactNode } from 'react'
import { Atom, BookOpen, Calculator, Cpu, FlaskConical, Microscope } from 'lucide-react'

export const boards: string[] = [
  'Federal Board',
  'Punjab Board',
  'Sindh Board',
  'KPK Board',
  'Balochistan Board',
]

export type Lesson = {
  title: string
  subject: string
  duration: string
  progress: number
}

export const lessons: Lesson[] = [
  {
    title: 'Human Cell Structure',
    subject: 'Biology',
    duration: '12 min',
    progress: 65,
  },
  {
    title: 'Newtons Laws of Motion',
    subject: 'Physics',
    duration: '18 min',
    progress: 40,
  },
  {
    title: 'Chemical Bonding Basics',
    subject: 'Chemistry',
    duration: '15 min',
    progress: 80,
  },
]

export type Subject = {
  name: string
  detail: string
  color: string
  icon: ReactNode
}

export const subjects: Subject[] = [
  {
    name: 'Biology',
    detail: 'Cells, human body and living things',
    color: 'green',
    icon: <Microscope size={18} />,
  },
  {
    name: 'Physics',
    detail: 'Motion, energy and forces',
    color: 'blue',
    icon: <Atom size={18} />,
  },
  {
    name: 'Chemistry',
    detail: 'Atoms, molecules and reactions',
    color: 'violet',
    icon: <FlaskConical size={18} />,
  },
  {
    name: 'Mathematics',
    detail: 'Algebra, geometry and problem solving',
    color: 'orange',
    icon: <Calculator size={18} />,
  },
  {
    name: 'English',
    detail: 'Reading, grammar and writing',
    color: 'cyan',
    icon: <BookOpen size={18} />,
  },
  {
    name: 'Computer Science',
    detail: 'Programming and digital skills',
    color: 'pink',
    icon: <Cpu size={18} />,
  },
]
