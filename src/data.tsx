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
    title: "Newtons Laws of Motion",
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

export type Chapter = {
  id: string
  title: string
  summary: string
}

export const chapters: Record<string, Chapter[]> = {
  Biology: [
    {
      id: 'bio-1',
      title: 'Cell Structure',
      summary:
        'Every living thing is made of cells. Learn the parts of a cell: nucleus, cytoplasm, cell membrane, mitochondria and vacuole, and what each part does.',
    },
    {
      id: 'bio-2',
      title: 'Photosynthesis',
      summary:
        'How green plants make their own food using sunlight, water and carbon dioxide, and why oxygen is released in the process.',
    },
    {
      id: 'bio-3',
      title: 'Human Heart and Circulation',
      summary:
        'The heart pumps blood around the body through arteries, veins and capillaries, carrying oxygen and food to every cell.',
    },
    {
      id: 'bio-4',
      title: 'Genetics and Inheritance',
      summary:
        'How traits pass from parents to children through genes and chromosomes, and why children resemble their parents.',
    },
  ],
  Physics: [
    {
      id: 'phy-1',
      title: "Newtons Laws of Motion",
      summary:
        'The three laws that explain how forces change motion: inertia, force equals mass times acceleration, and action and reaction.',
    },
    {
      id: 'phy-2',
      title: 'Energy and Work',
      summary:
        'What energy is, its forms such as kinetic and potential energy, and how work is done when a force moves an object.',
    },
    {
      id: 'phy-3',
      title: 'Light and Reflection',
      summary:
        'How light travels in straight lines, reflects from mirrors, and forms images. Includes the laws of reflection.',
    },
    {
      id: 'phy-4',
      title: 'Electricity and Circuits',
      summary:
        'Current, voltage and resistance, series and parallel circuits, and how a simple circuit with a battery and bulb works.',
    },
  ],
  Chemistry: [
    {
      id: 'chem-1',
      title: 'Atoms and Molecules',
      summary:
        'Atoms are the building blocks of matter. Learn about protons, neutrons and electrons, and how atoms join to form molecules.',
    },
    {
      id: 'chem-2',
      title: 'Chemical Bonding',
      summary:
        'How atoms stick together through ionic and covalent bonds, and why water, salt and carbon dioxide behave differently.',
    },
    {
      id: 'chem-3',
      title: 'Acids, Bases and Salts',
      summary:
        'What makes a substance acidic or basic, the pH scale, neutralisation, and everyday examples such as lemon juice and soap.',
    },
    {
      id: 'chem-4',
      title: 'The Periodic Table',
      summary:
        'How elements are arranged by atomic number into groups and periods, and what the table tells us about each element.',
    },
  ],
  Mathematics: [
    {
      id: 'math-1',
      title: 'Algebra Basics',
      summary:
        'Using letters to stand for unknown numbers, simplifying expressions, and solving simple equations step by step.',
    },
    {
      id: 'math-2',
      title: 'Fractions and Decimals',
      summary:
        'What fractions mean, how to add, subtract, multiply and divide them, and how to convert between fractions and decimals.',
    },
    {
      id: 'math-3',
      title: 'Geometry: Triangles and Circles',
      summary:
        'Angles, types of triangles, the area and perimeter of shapes, and the parts of a circle: radius, diameter and circumference.',
    },
    {
      id: 'math-4',
      title: 'Ratios and Percentages',
      summary:
        'Comparing quantities with ratios, converting ratios to percentages, and solving everyday percentage problems.',
    },
  ],
  English: [
    {
      id: 'eng-1',
      title: 'Grammar: Tenses',
      summary:
        'Present, past and future tenses, when to use each one, and how to form them correctly in sentences.',
    },
    {
      id: 'eng-2',
      title: 'Reading Comprehension',
      summary:
        'How to read a passage carefully, find the main idea, and answer questions using evidence from the text.',
    },
    {
      id: 'eng-3',
      title: 'Essay Writing',
      summary:
        'Planning an essay with an introduction, body paragraphs and a conclusion, and writing clearly in your own words.',
    },
    {
      id: 'eng-4',
      title: 'Vocabulary Building',
      summary:
        'Learning new words through roots, prefixes and suffixes, synonyms and antonyms, and using words correctly.',
    },
  ],
  'Computer Science': [
    {
      id: 'cs-1',
      title: 'What is a Computer?',
      summary:
        'The parts of a computer: input, processing, storage and output, and how hardware and software work together.',
    },
    {
      id: 'cs-2',
      title: 'Programming Basics',
      summary:
        'What a program is, variables, inputs and outputs, and how to think in steps like a programmer.',
    },
    {
      id: 'cs-3',
      title: 'Internet and Safety',
      summary:
        'How the internet works, staying safe online, strong passwords, and what to do about strangers and scams.',
    },
    {
      id: 'cs-4',
      title: 'Data and Binary Numbers',
      summary:
        'How computers store everything as 0s and 1s, what bits and bytes are, and how to count in binary.',
    },
  ],
}

export type Lecture = {
  id: string
  subject: string
  title: string
  duration: string
  level: string
  summary: string
  points: string[]
  body: string[]
}

export const lectures: Lecture[] = [
  {
    id: 'lec-1',
    subject: 'Biology',
    title: 'Photosynthesis: How Plants Make Food',
    duration: '12 min',
    level: 'Beginner',
    summary: 'Sunlight, water and carbon dioxide become food and oxygen inside a leaf.',
    points: [
      'Photosynthesis happens in the chloroplast, in a green pigment called chlorophyll.',
      'The word equation is: carbon dioxide + water → glucose + oxygen (with sunlight).',
      'The glucose is used for energy, growth, and stored as starch.',
      'Oxygen is released as a by-product — this is the oxygen we breathe.',
      'The rate increases with more light, up to a point, and needs water and carbon dioxide.',
    ],
    body: [
      'Plants are the only living things that can make their own food. Inside a leaf, tiny green structures called chloroplasts trap sunlight. The green pigment chlorophyll absorbs light energy, mostly red and blue light.',
      'The plant takes in carbon dioxide from the air through tiny holes called stomata, and water from the soil through its roots. Using light energy, it joins these together to make glucose, a simple sugar. Oxygen gas is released at the same time.',
      'The glucose gives the plant energy to grow. Extra glucose is joined into starch and stored in roots and seeds. Without photosynthesis there would be no food chains and almost no free oxygen in the air.',
    ],
  },
  {
    id: 'lec-2',
    subject: 'Biology',
    title: 'The Human Cell, Part by Part',
    duration: '10 min',
    level: 'Beginner',
    summary: 'Nucleus, cytoplasm, membrane, mitochondria and vacuole — what each part does.',
    points: [
      'The nucleus controls the cell and holds the DNA instructions.',
      'The cytoplasm is the jelly where most chemical reactions happen.',
      'The cell membrane controls what enters and leaves the cell.',
      'Mitochondria release energy from food during respiration.',
      'Plant cells also have a cell wall, chloroplasts and a large vacuole.',
    ],
    body: [
      'A cell is the smallest unit of life. An animal cell has a nucleus in the middle, surrounded by cytoplasm, and wrapped in a thin cell membrane. The membrane is partly permeable: it lets some substances through and blocks others.',
      'The nucleus is the control centre. It contains chromosomes made of DNA, which carry the instructions for making proteins and running the cell. The mitochondria are the powerhouses — they release energy from glucose so the cell can work.',
      'Plant cells have three extra parts: a strong cell wall made of cellulose, chloroplasts for photosynthesis, and a large vacuole filled with cell sap that keeps the cell firm.',
    ],
  },
  {
    id: 'lec-3',
    subject: 'Biology',
    title: 'The Human Heart and Blood Flow',
    duration: '11 min',
    level: 'Beginner',
    summary: 'A double pump that sends blood to the lungs and around the body.',
    points: [
      'The heart has four chambers: two atria on top and two ventricles below.',
      'The right side pumps blood to the lungs to pick up oxygen.',
      'The left side pumps oxygen-rich blood to the whole body.',
      'Arteries carry blood away from the heart; veins carry it back.',
      'Valves stop blood flowing backwards. The pulse is the heartbeat you can feel.',
    ],
    body: [
      'Your heart is about the size of your fist and beats around 70 times a minute. It is really two pumps joined together. The right side receives blood low in oxygen from the body and pumps it to the lungs.',
      'In the lungs the blood picks up oxygen and drops off carbon dioxide. The oxygen-rich blood returns to the left side of the heart, which pumps it out through the aorta to every organ in the body.',
      'Blood travels in three kinds of vessels: thick-walled arteries, thin-walled veins, and tiny capillaries where oxygen and food pass into the tissues. One full journey around the body takes about a minute.',
    ],
  },
  {
    id: 'lec-4',
    subject: 'Physics',
    title: "Newtons Laws of Motion",
    duration: '14 min',
    level: 'Beginner',
    summary: 'Three simple laws that explain why things move, stop and push back.',
    points: [
      'First law: a body stays still or keeps moving unless a force acts on it.',
      'Second law: force = mass × acceleration. Bigger force, bigger acceleration.',
      'Third law: every action has an equal and opposite reaction.',
      'Friction is a force that opposes motion between two surfaces.',
      'A heavier object needs a bigger force to get the same acceleration.',
    ],
    body: [
      'The first law is about inertia. A book on a table stays still because no unbalanced force pushes it. A rolling ball keeps rolling until friction slows it down. In space, with no friction, it would roll forever.',
      'The second law links force, mass and acceleration: F = ma. Push a light trolley and a heavy trolley with the same force and the light one accelerates faster. Double the force and the acceleration doubles.',
      'The third law explains rockets and walking. When you push back on the ground, the ground pushes you forward. A rocket pushes hot gas down, and the gas pushes the rocket up. The two forces are equal in size and opposite in direction.',
    ],
  },
  {
    id: 'lec-5',
    subject: 'Physics',
    title: 'Electricity: Current, Voltage and Resistance',
    duration: '13 min',
    level: 'Beginner',
    summary: 'What makes a bulb glow, and how voltage, current and resistance are linked.',
    points: [
      'Current is the flow of electric charge, measured in amperes (A).',
      'Voltage is the push that drives the current, measured in volts (V).',
      'Resistance opposes the flow, measured in ohms (Ω).',
      "Ohms law: V = I × R. Raise the voltage and the current rises too.",
      'In a series circuit the same current flows everywhere; in parallel it splits.',
    ],
    body: [
      'Think of electricity like water in a pipe. Voltage is the pressure pushing the water, current is how much water flows each second, and resistance is a narrow part of the pipe that slows the flow down.',
      'A battery provides voltage. When you connect it to a bulb with wires, charge flows around the loop and the bulb glows. The filament inside the bulb has high resistance, so it gets hot and shines.',
      'If you raise the voltage, more current flows and the bulb gets brighter. If you add resistance, the current falls and the bulb gets dimmer. Try this yourself in the Virtual Lab circuit simulator.',
    ],
  },
  {
    id: 'lec-6',
    subject: 'Physics',
    title: 'Light, Mirrors and Reflection',
    duration: '10 min',
    level: 'Beginner',
    summary: 'Light travels in straight lines and bounces off mirrors in a predictable way.',
    points: [
      'Light travels in straight lines at about 300,000 km per second.',
      'The angle of incidence equals the angle of reflection.',
      'A plane mirror gives an image the same size, upright, and as far behind as the object is in front.',
      'Rough surfaces scatter light; smooth shiny surfaces reflect it clearly.',
      'We see things because light reflects from them into our eyes.',
    ],
    body: [
      'Light is a form of energy that travels as waves in straight lines. When light hits a mirror it bounces off. The incoming ray and the outgoing ray make equal angles with the mirror — this is the law of reflection.',
      'A flat mirror forms a virtual image. It looks the same size as the object and upright, but left and right are swapped. That is why writing looks backwards in a mirror.',
      'Smooth surfaces give clear reflections. Rough surfaces scatter light in all directions, which is why a wall does not work as a mirror even though it reflects light.',
    ],
  },
  {
    id: 'lec-7',
    subject: 'Chemistry',
    title: 'Atoms, Elements and Molecules',
    duration: '12 min',
    level: 'Beginner',
    summary: 'Protons, neutrons and electrons — and how atoms join into molecules.',
    points: [
      'An atom has a nucleus of protons and neutrons, with electrons around it.',
      'The atomic number is the number of protons; it decides which element it is.',
      'An element is made of only one type of atom, like gold or oxygen.',
      'Two or more atoms joined together make a molecule, like H2O or CO2.',
      'Atoms join by sharing or giving away electrons to become stable.',
    ],
    body: [
      'Everything around you is made of atoms. In the centre is the nucleus, containing protons with a positive charge and neutrons with no charge. Electrons with a negative charge move around the nucleus.',
      'The number of protons is the atomic number. Hydrogen has 1, carbon has 6, oxygen has 8. Change the number of protons and you change the element itself.',
      'Atoms are usually not stable alone, so they bond with other atoms. Two hydrogen atoms plus one oxygen atom make a water molecule, H2O. Try building molecules in the Virtual Lab molecule builder.',
    ],
  },
  {
    id: 'lec-8',
    subject: 'Chemistry',
    title: 'Chemical Bonding: Ionic and Covalent',
    duration: '13 min',
    level: 'Intermediate',
    summary: 'Why atoms stick together, and why salt and water behave so differently.',
    points: [
      'Atoms bond to fill their outer electron shell.',
      'In an ionic bond, one atom gives electrons to another — like sodium giving one to chlorine to make salt.',
      'In a covalent bond, atoms share electrons — like the two hydrogen atoms in water sharing with oxygen.',
      'Ionic compounds are usually solids with high melting points; covalent ones are often gases or liquids.',
      'A molecule is a group of atoms joined by covalent bonds.',
    ],
    body: [
      'Atoms want a full outer shell of electrons. Metals like sodium have one loose electron in the outer shell, while non-metals like chlorine need one more. Sodium gives its electron to chlorine, both become charged ions, and opposite charges attract — that is an ionic bond, and the result is table salt.',
      'In a covalent bond, atoms share electrons instead. In water, the oxygen atom shares one electron with each hydrogen atom. The shared electrons hold all three atoms together in one molecule.',
      'Bond type decides properties. Salt is a hard crystal that melts at 801°C. Water is a liquid at room temperature because its molecules are held together only weakly.',
    ],
  },
  {
    id: 'lec-9',
    subject: 'Mathematics',
    title: 'Algebra: Solving Equations Step by Step',
    duration: '12 min',
    level: 'Beginner',
    summary: 'Letters stand for unknown numbers — and you can find them with balance.',
    points: [
      'A variable like x stands for a number we do not know yet.',
      'An equation has two sides that are equal, like a balance scale.',
      'Whatever you do to one side, do the same to the other side.',
      'To solve x + 5 = 12, subtract 5 from both sides: x = 7.',
      'To solve 3x = 15, divide both sides by 3: x = 5.',
    ],
    body: [
      'Algebra is arithmetic with letters. In the expression 3x + 2, x is a variable — it could be any number. If x = 4, then 3x + 2 = 14. The letter is just a box hiding a number.',
      'An equation is a balance. The left side must always equal the right side. To find x in x + 5 = 12, remove 5 from both sides. The left becomes x alone, and the right becomes 7. So x = 7.',
      'For 2x − 3 = 9, first add 3 to both sides to get 2x = 12, then divide both sides by 2 to get x = 6. Always check by putting your answer back into the original equation.',
    ],
  },
  {
    id: 'lec-10',
    subject: 'Mathematics',
    title: 'Fractions Made Simple',
    duration: '11 min',
    level: 'Beginner',
    summary: 'Halves, quarters and thirds — adding, comparing and converting fractions.',
    points: [
      'The top number (numerator) counts parts; the bottom (denominator) is how many parts make a whole.',
      'To add fractions, first make the denominators the same.',
      'Multiply fractions by multiplying top by top and bottom by bottom.',
      'To divide, flip the second fraction and multiply.',
      'A fraction like 3/4 is the same as the decimal 0.75.',
    ],
    body: [
      'A fraction is a part of a whole. In 3/4, the whole is split into 4 equal parts and we have 3 of them. The denominator tells you the size of the parts; the numerator tells you how many you have.',
      'You can only add fractions with the same denominator. For 1/2 + 1/4, change 1/2 into 2/4, then add: 2/4 + 1/4 = 3/4. The denominator stays the same.',
      'Fractions, decimals and percentages are the same idea in different clothes: 1/2 = 0.5 = 50%. Dividing the numerator by the denominator converts a fraction to a decimal.',
    ],
  },
  {
    id: 'lec-11',
    subject: 'English',
    title: 'Tenses: Past, Present and Future',
    duration: '10 min',
    level: 'Beginner',
    summary: 'When something happened decides the tense — and the verb changes with it.',
    points: [
      'Present simple: habits and facts — "She reads every day."',
      'Past simple: finished actions — "She read yesterday."',
      'Future: plans — "She will read tomorrow."',
      'Present continuous: happening now — "She is reading."',
      'Match the tense to the time words: yesterday, today, tomorrow.',
    ],
    body: [
      'Every sentence lives in a time. The present simple talks about habits and facts: "The sun rises in the east." Add -s for he, she and it: "He plays football."',
      'The past simple talks about finished actions. Most verbs add -ed: "She walked home." Some are irregular: go becomes went, see becomes saw, write becomes wrote.',
      'The future uses will: "We will visit Lahore tomorrow." For something happening right now, use am/is/are + verb-ing: "I am reading this lesson."',
    ],
  },
  {
    id: 'lec-12',
    subject: 'Computer Science',
    title: 'Programming Basics: Think in Steps',
    duration: '12 min',
    level: 'Beginner',
    summary: 'A program is a list of instructions — and you already think like a programmer.',
    points: [
      'A program is a set of step-by-step instructions for a computer.',
      'A variable is a named box that stores a value, like score = 0.',
      'An if statement lets a program choose: if the answer is right, add a point.',
      'A loop repeats instructions, like counting from 1 to 10.',
      'Computers follow instructions exactly, so instructions must be precise.',
    ],
    body: [
      'You already write algorithms every day. Making tea is an algorithm: boil water, put tea in the cup, pour the water, add milk, stir. A computer program is the same idea, written so a machine can follow it.',
      'A variable stores a value that can change. In a game, score starts at 0 and grows by 1 every time you answer correctly. The computer remembers the value in the variable.',
      'Programs make decisions with if statements and repeat work with loops. A quiz program might say: if the answer is correct, show "Well done" and add 1 to the score, then move to the next question. That is exactly how the quizzes in this app work.',
    ],
  },
]

export type QuizQuestion = {
  q: string
  options: string[]
  answer: number
  explain: string
}

export type Quiz = {
  id: string
  subject: string
  title: string
  questions: QuizQuestion[]
}

export const quizzes: Quiz[] = [
  {
    id: 'quiz-bio',
    subject: 'Biology',
    title: 'Biology Quiz: Cells and Plants',
    questions: [
      {
        q: 'Which part of the cell controls all activities?',
        options: ['Cytoplasm', 'Nucleus', 'Cell membrane', 'Vacuole'],
        answer: 1,
        explain: 'The nucleus holds the DNA instructions and controls the cell.',
      },
      {
        q: 'Where does photosynthesis take place?',
        options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'],
        answer: 2,
        explain: 'Chloroplasts contain chlorophyll, which traps sunlight.',
      },
      {
        q: 'What gas is released during photosynthesis?',
        options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
        answer: 2,
        explain: 'Plants release oxygen as a by-product of making glucose.',
      },
      {
        q: 'How many chambers does the human heart have?',
        options: ['2', '3', '4', '5'],
        answer: 2,
        explain: 'Two atria on top and two ventricles below make four chambers.',
      },
      {
        q: 'Which part of the cell releases energy from food?',
        options: ['Nucleus', 'Mitochondria', 'Cell wall', 'Chloroplast'],
        answer: 1,
        explain: 'Mitochondria are the powerhouses where respiration releases energy.',
      },
    ],
  },
  {
    id: 'quiz-phy',
    subject: 'Physics',
    title: 'Physics Quiz: Motion and Electricity',
    questions: [
      {
        q: 'What is the unit of force?',
        options: ['Joule', 'Watt', 'Newton', 'Volt'],
        answer: 2,
        explain: 'Force is measured in newtons (N).',
      },
      {
        q: 'Force = mass × ?',
        options: ['Speed', 'Acceleration', 'Distance', 'Time'],
        answer: 1,
        explain: "Newtons second law: F = ma.",
      },
      {
        q: 'What is the unit of electric current?',
        options: ['Volt', 'Ohm', 'Watt', 'Ampere'],
        answer: 3,
        explain: 'Current is measured in amperes (A).',
      },
      {
        q: 'According to Ohms law, V = ?',
        options: ['I + R', 'I × R', 'I ÷ R', 'R ÷ I'],
        answer: 1,
        explain: 'Voltage equals current times resistance: V = IR.',
      },
      {
        q: 'What does a plane mirror image look like?',
        options: [
          'Smaller and upside down',
          'Same size and upright',
          'Bigger and upside down',
          'Blurry and bent',
        ],
        answer: 1,
        explain: 'A plane mirror gives a same-size, upright virtual image.',
      },
    ],
  },
  {
    id: 'quiz-math',
    subject: 'Mathematics',
    title: 'Maths Quiz: Algebra and Fractions',
    questions: [
      {
        q: 'Solve: x + 7 = 15. What is x?',
        options: ['7', '8', '9', '22'],
        answer: 1,
        explain: 'Subtract 7 from both sides: x = 15 − 7 = 8.',
      },
      {
        q: 'What is 3/4 as a decimal?',
        options: ['0.34', '0.75', '0.25', '0.43'],
        answer: 1,
        explain: '3 ÷ 4 = 0.75.',
      },
      {
        q: 'What is 20% of 150?',
        options: ['20', '25', '30', '35'],
        answer: 2,
        explain: '10% of 150 is 15, so 20% is 30.',
      },
      {
        q: 'Solve: 4x = 28. What is x?',
        options: ['6', '7', '8', '24'],
        answer: 1,
        explain: 'Divide both sides by 4: x = 7.',
      },
      {
        q: 'What is the area of a rectangle 5 cm by 3 cm?',
        options: ['8 cm²', '15 cm²', '16 cm²', '12 cm²'],
        answer: 1,
        explain: 'Area = length × width = 5 × 3 = 15 cm².',
      },
    ],
  },
]

export type TeacherTopic = {
  keywords: string[]
  topic: string
  answer: string
}

export const teacherKB: TeacherTopic[] = [
  {
    keywords: ['photosynthesis', 'plant food', 'chlorophyll', 'plants make food'],
    topic: 'Photosynthesis',
    answer:
      'Photosynthesis is how plants make food. In the chloroplast, chlorophyll traps sunlight. The plant uses light energy to join carbon dioxide from the air with water from the roots to make glucose, and oxygen is released. Word equation: carbon dioxide + water → glucose + oxygen (with sunlight).',
  },
  {
    keywords: ['cell', 'nucleus', 'mitochondria', 'cytoplasm', 'cell parts'],
    topic: 'Cell Structure',
    answer:
      'A cell has a nucleus (controls the cell and holds DNA), cytoplasm (jelly where reactions happen), a cell membrane (controls what enters and leaves), and mitochondria (release energy from food). Plant cells also have a cell wall, chloroplasts and a large vacuole.',
  },
  {
    keywords: ['heart', 'blood', 'circulation', 'pulse'],
    topic: 'Human Heart',
    answer:
      'The heart has four chambers: two atria and two ventricles. The right side pumps blood to the lungs to pick up oxygen. The left side pumps oxygen-rich blood around the body. Arteries carry blood away from the heart, veins carry it back, and valves stop it flowing backwards.',
  },
  {
    keywords: ['newton', 'motion', 'force', 'inertia', 'acceleration'],
    topic: "Newtons Laws of Motion",
    answer:
      'First law: a body stays still or keeps moving unless a force acts on it (inertia). Second law: force = mass × acceleration (F = ma). Third law: every action has an equal and opposite reaction — a rocket pushes gas down, and the gas pushes the rocket up.',
  },
  {
    keywords: ['gravity', 'gravitation', 'fall', 'weight'],
    topic: 'Gravity',
    answer:
      'Gravity is the force that pulls objects towards the Earth. It makes things fall down and keeps the Moon going around the Earth. Your weight is the pull of gravity on your mass — on the Moon you would weigh less because its gravity is weaker, even though your mass stays the same.',
  },
  {
    keywords: ['bond', 'bonding', 'ionic', 'covalent', 'salt'],
    topic: 'Chemical Bonding',
    answer:
      'Atoms bond to fill their outer electron shell. In an ionic bond, one atom gives electrons to another — sodium gives one to chlorine to make salt. In a covalent bond, atoms share electrons — in water, oxygen shares electrons with two hydrogen atoms.',
  },
  {
    keywords: ['atom', 'proton', 'neutron', 'electron', 'element'],
    topic: 'Atoms and Elements',
    answer:
      'An atom has a nucleus of protons (positive) and neutrons (no charge), with electrons (negative) around it. The number of protons is the atomic number and decides the element: hydrogen has 1, carbon 6, oxygen 8. Atoms join together to make molecules like H2O.',
  },
  {
    keywords: ['acid', 'base', 'ph', 'alkali', 'neutral'],
    topic: 'Acids and Bases',
    answer:
      'Acids taste sour and turn blue litmus red; examples are lemon juice and vinegar. Bases feel soapy and turn red litmus blue; soap is a base. The pH scale runs from 0 (strong acid) to 14 (strong base), with 7 neutral. Acid + base → salt + water is called neutralisation.',
  },
  {
    keywords: ['periodic table', 'periodic', 'groups', 'periods'],
    topic: 'The Periodic Table',
    answer:
      'The periodic table arranges elements by atomic number. Columns are called groups — elements in a group behave similarly. Rows are called periods. Metals are on the left, non-metals on the right, and the noble gases in group 0 hardly react at all.',
  },
  {
    keywords: ['algebra', 'equation', 'solve x', 'variable'],
    topic: 'Algebra',
    answer:
      'In algebra a letter like x stands for an unknown number. To solve an equation, do the same thing to both sides to leave x alone. For x + 5 = 12, subtract 5 from both sides to get x = 7. For 3x = 15, divide both sides by 3 to get x = 5. Always check by putting your answer back in.',
  },
  {
    keywords: ['fraction', 'numerator', 'denominator', 'half', 'quarter'],
    topic: 'Fractions',
    answer:
      'A fraction is a part of a whole. The numerator (top) counts parts, the denominator (bottom) is how many parts make the whole. To add fractions, make the denominators the same first. To multiply, multiply top by top and bottom by bottom. To divide, flip the second fraction and multiply.',
  },
  {
    keywords: ['percent', 'percentage', 'ratio'],
    topic: 'Percentages and Ratios',
    answer:
      'Percent means out of 100. To find 20% of 150, first find 10% (15), then double it to get 30. A ratio compares quantities: a ratio of 2:3 means 2 parts to 3 parts. Fractions, decimals and percentages are the same idea: 1/2 = 0.5 = 50%.',
  },
  {
    keywords: ['geometry', 'triangle', 'circle', 'angle', 'area', 'perimeter'],
    topic: 'Geometry',
    answer:
      'Angles are measured in degrees. The angles in a triangle always add up to 180°. Area of a rectangle = length × width. Area of a triangle = half × base × height. A circle has a radius (centre to edge), a diameter (twice the radius) and a circumference (distance around it).',
  },
  {
    keywords: ['tense', 'past', 'present', 'future', 'grammar'],
    topic: 'English Tenses',
    answer:
      'Present simple is for habits and facts: "She reads every day." Past simple is for finished actions: "She read yesterday." Future uses will: "She will read tomorrow." Present continuous is for now: "She is reading." Match the tense to time words like yesterday, today and tomorrow.',
  },
  {
    keywords: ['essay', 'writing', 'paragraph'],
    topic: 'Essay Writing',
    answer:
      'A good essay has three parts: an introduction that says what you will write about, body paragraphs that each make one point with an example, and a conclusion that sums up. Plan first, write in your own words, and read it back to check spelling and sense.',
  },
  {
    keywords: ['electric', 'current', 'voltage', 'resistance', 'circuit', 'ohm'],
    topic: 'Electricity',
    answer:
      'Current is the flow of charge, measured in amperes. Voltage is the push, measured in volts. Resistance opposes the flow, measured in ohms. Ohms law says V = I × R. Raise the voltage and the current rises; add resistance and the current falls. Try it in the Virtual Lab circuit simulator.',
  },
  {
    keywords: ['light', 'mirror', 'reflection', 'lens'],
    topic: 'Light and Reflection',
    answer:
      'Light travels in straight lines. When it hits a mirror it reflects, and the angle of incidence equals the angle of reflection. A plane mirror gives a same-size, upright image that is as far behind the mirror as the object is in front. We see things because light reflects from them into our eyes.',
  },
  {
    keywords: ['energy', 'kinetic', 'potential', 'work'],
    topic: 'Energy and Work',
    answer:
      'Energy is the ability to do work. Kinetic energy is the energy of movement, potential energy is stored energy (like a ball held up high). Work is done when a force moves an object: work = force × distance. Energy cannot be made or destroyed, only changed from one form to another.',
  },
  {
    keywords: ['computer', 'cpu', 'hardware', 'software'],
    topic: 'What is a Computer?',
    answer:
      'A computer takes input (keyboard, mouse), processes it (the CPU), stores it (memory and disk) and gives output (screen, printer). Hardware is the physical parts you can touch; software is the programs that tell the hardware what to do.',
  },
  {
    keywords: ['program', 'programming', 'variable', 'loop', 'code'],
    topic: 'Programming Basics',
    answer:
      'A program is a list of step-by-step instructions. A variable is a named box that stores a value, like score = 0. An if statement makes a choice, and a loop repeats instructions. Computers follow instructions exactly, so the steps must be clear and in the right order.',
  },
  {
    keywords: ['binary', 'bit', 'byte', 'data'],
    topic: 'Binary Numbers',
    answer:
      'Computers store everything as 0s and 1s. Each 0 or 1 is a bit. Eight bits make a byte. In binary, 1 = 1, 10 = 2, 11 = 3, 100 = 4. A picture, a song and a word are all just long strings of bits inside the computer.',
  },
  {
    keywords: ['internet', 'online safety', 'password', 'safe', 'scam'],
    topic: 'Internet Safety',
    answer:
      'Stay safe online: use a strong password with letters, numbers and symbols, never share it, and never share personal details with strangers. Do not click strange links, and tell a parent or teacher if anything online makes you uncomfortable.',
  },
  {
    keywords: ['genetics', 'gene', 'dna', 'inherit', 'chromosome'],
    topic: 'Genetics',
    answer:
      'Genes are instructions in DNA that decide traits like eye colour. You inherit half your genes from each parent. Chromosomes are bundles of genes — humans have 46 in most cells. That is why children resemble their parents but are never identical (except identical twins).',
  },
  {
    keywords: ['molecule', 'water', 'h2o', 'co2', 'oxygen'],
    topic: 'Molecules',
    answer:
      'A molecule is two or more atoms joined together. Water is H2O — two hydrogen atoms and one oxygen atom. Carbon dioxide is CO2 — one carbon and two oxygen atoms. Oxygen gas is O2 — two oxygen atoms. You can build these in the Virtual Lab molecule builder.',
  },
]

export type ModelPart = {
  id: string
  label: string
  desc: string
}

export const cellParts: ModelPart[] = [
  { id: 'nucleus', label: 'Nucleus', desc: 'The control centre of the cell. It holds DNA, the instructions for making proteins and running the cell.' },
  { id: 'mito', label: 'Mitochondria', desc: 'The powerhouse of the cell. It releases energy from glucose during respiration so the cell can work.' },
  { id: 'cyto', label: 'Cytoplasm', desc: 'The jelly-like substance filling the cell. Most chemical reactions happen here.' },
  { id: 'membrane', label: 'Cell Membrane', desc: 'The thin skin around the cell. It controls what enters and leaves the cell.' },
  { id: 'vacuole', label: 'Vacuole', desc: 'A storage sac filled with cell sap. In plant cells it is very large and keeps the cell firm.' },
]

export const heartParts: ModelPart[] = [
  { id: 'ra', label: 'Right Atrium', desc: 'Receives blood low in oxygen from the body and passes it to the right ventricle.' },
  { id: 'rv', label: 'Right Ventricle', desc: 'Pumps blood to the lungs, where it picks up oxygen and drops off carbon dioxide.' },
  { id: 'la', label: 'Left Atrium', desc: 'Receives oxygen-rich blood back from the lungs.' },
  { id: 'lv', label: 'Left Ventricle', desc: 'The strongest chamber. It pumps oxygen-rich blood to the whole body.' },
  { id: 'valve', label: 'Valves', desc: 'Flaps that stop blood flowing backwards, so it only moves in one direction.' },
]

export const moleculeParts: ModelPart[] = [
  { id: 'h', label: 'Hydrogen (H)', desc: 'The lightest element, with 1 proton and 1 electron. Two hydrogen atoms plus one oxygen make water.' },
  { id: 'o', label: 'Oxygen (O)', desc: 'The gas we breathe. It has 8 protons. One oxygen atom joins two hydrogen atoms to make water.' },
  { id: 'c', label: 'Carbon (C)', desc: 'The backbone of living things. One carbon plus two oxygen atoms makes carbon dioxide, CO2.' },
]
