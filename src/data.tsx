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
  body: string[]
}

export const lessons: Lesson[] = [
  {
    title: 'Human Cell Structure',
    subject: 'Biology',
    duration: '12 min',
    progress: 65,
    body: [
      'Your body is made of trillions of cells, and every cell is a tiny living factory. Each cell takes in food and oxygen, releases energy, gets rid of waste, and can divide to make new cells. Understanding the cell is the first step to understanding the whole human body.',
      'The nucleus is the control centre: it holds DNA, the instructions for making proteins. The cytoplasm is the jelly where most chemical reactions happen, and the cell membrane controls what enters and leaves. The mitochondria release energy from glucose so the cell can work.',
      'Plant cells have three extra parts that animal cells do not: a strong cell wall, chloroplasts that trap sunlight for photosynthesis, and a large vacuole filled with cell sap. Open the 3D Learning section and tap each part of the animal cell to see what it does.',
    ],
  },
  {
    title: "Newtons Laws of Motion",
    subject: 'Physics',
    duration: '18 min',
    progress: 40,
    body: [
      'Motion seems simple — things move or they stop — but Isaac Newton found three rules behind it all. The first law, inertia, says a body keeps doing what it is doing unless a force acts on it. A book stays on a table until you push it, and a ball keeps rolling until friction slows it down.',
      'The second law says force equals mass times acceleration. The same push gives a light trolley a big acceleration and a heavy trolley a small one. Double the force and you double the acceleration — that is why a small car speeds up faster than a loaded truck with the same engine.',
      'The third law says every action has an equal and opposite reaction. You push back on the ground and the ground pushes you forward. A rocket pushes hot gas downwards and the gas pushes the rocket upwards. Try the Motion and Gravity model in 3D Learning to see gravity at work.',
    ],
  },
  {
    title: 'Chemical Bonding Basics',
    subject: 'Chemistry',
    duration: '15 min',
    progress: 80,
    body: [
      'Atoms join together because they want a full outer shell of electrons, and the forces that hold them together are called chemical bonds. There are two main kinds: ionic bonds, where electrons are given away, and covalent bonds, where electrons are shared.',
      'In an ionic bond, a metal atom gives an electron to a non-metal atom. Both become charged particles called ions, and opposite charges attract — this is how sodium and chlorine become common salt. In a covalent bond, atoms share pairs of electrons: two hydrogen atoms share to make H2, and oxygen shares with two hydrogens to make water.',
      'The type of bond changes how a substance behaves. Salt forms hard crystals that dissolve in water, while water itself is a covalent molecule that is liquid at room temperature. Open the Molecule Builder in Virtual Labs and build water, carbon dioxide and methane yourself.',
    ],
  },
]

export type Subject = {
  name: string
  detail: string
  color: string
  icon: ReactNode
  overview: string
}

export const subjects: Subject[] = [
  {
    name: 'Biology',
    detail: 'Cells, human body and living things',
    color: 'green',
    icon: <Microscope size={18} />,
    overview: 'Biology is the study of living things — from tiny cells to whole ecosystems. In this subject you will learn how cells work, how plants make food, how the human heart pumps blood, and how traits pass from parents to children. These ideas explain your own body and the world around you. Start with Cell Structure, then move through Photosynthesis, the Heart, and Genetics.',
  },
  {
    name: 'Physics',
    detail: 'Motion, energy and forces',
    color: 'blue',
    icon: <Atom size={18} />,
    overview: 'Physics is the study of matter, energy and how things move. You will learn Newton\'s laws of motion, what energy and work really mean, how light reflects from mirrors, and how electricity flows in a circuit. Physics explains everything from a falling ball to the lights in your home. Start with Newton\'s Laws, then try Energy, Light and Electricity.',
  },
  {
    name: 'Chemistry',
    detail: 'Atoms, molecules and reactions',
    color: 'violet',
    icon: <FlaskConical size={18} />,
    overview: 'Chemistry is the study of what things are made of and how they change. You will learn about atoms and molecules, the bonds that hold them together, acids and bases, and the periodic table that organises every element. Chemistry explains cooking, cleaning, medicines and the air you breathe. Start with Atoms and Molecules, then Chemical Bonding, Acids and Bases, and the Periodic Table.',
  },
  {
    name: 'Mathematics',
    detail: 'Algebra, geometry and problem solving',
    color: 'orange',
    icon: <Calculator size={18} />,
    overview: 'Mathematics is the language of patterns and numbers. Here you will practise algebra, fractions and decimals, the geometry of triangles and circles, and ratios and percentages. These skills are used every day — in shopping, in exams, and in science. Start with Algebra Basics, then Fractions, Geometry and Ratios.',
  },
  {
    name: 'English',
    detail: 'Reading, grammar and writing',
    color: 'cyan',
    icon: <BookOpen size={18} />,
    overview: 'English is about reading, writing and speaking clearly. You will practise verb tenses, reading comprehension, essay writing and building a strong vocabulary. Good English helps you in every other subject, because every subject needs you to read questions carefully and explain your answers. Start with Tenses, then Reading, Essay Writing and Vocabulary.',
  },
  {
    name: 'Computer Science',
    detail: 'Programming and digital skills',
    color: 'pink',
    icon: <Cpu size={18} />,
    overview: 'Computer Science is about how computers work and how to make them do new things. You will learn the parts of a computer, the basics of programming, how to stay safe online, and how computers store everything as binary numbers. These skills are useful in almost every job today. Start with What is a Computer, then Programming, Internet Safety and Binary Numbers.',
  },
]

export type Chapter = {
  id: string
  title: string
  summary: string
  body: string[]
}

export const chapters: Record<string, Chapter[]> = {
  Biology: [
    {
      id: 'bio-1',
      title: 'Cell Structure',
      summary:
        'Every living thing is made of cells. Learn the parts of a cell: nucleus, cytoplasm, cell membrane, mitochondria and vacuole, and what each part does.',
      body: [
        'Every living thing, from a tiny bacterium to a blue whale, is made of cells. A cell is the smallest unit of life: it can take in food, release energy, grow and divide to make new cells. Some living things have only one cell, while your body has trillions of them working together.',
        'Inside an animal cell, the nucleus is the control centre. It holds DNA, the instructions that tell the cell how to make proteins and how to behave. Around it is the cytoplasm, a jelly where most of the cell\'s chemical reactions happen, and the cell membrane, a thin skin that controls what enters and leaves.',
        'The mitochondria are the powerhouses of the cell: they release energy from glucose during respiration. Plant cells have three extra parts — a strong cell wall, chloroplasts that trap sunlight for photosynthesis, and a large vacuole filled with cell sap that keeps the cell firm.',
      ],
    },
    {
      id: 'bio-2',
      title: 'Photosynthesis',
      summary:
        'How green plants make their own food using sunlight, water and carbon dioxide, and why oxygen is released in the process.',
      body: [
        'Photosynthesis is how green plants make their own food. A plant takes in carbon dioxide from the air through tiny holes in its leaves called stomata, and water from the soil through its roots. Using sunlight, it joins them together to make glucose, a sugar that stores energy.',
        'The reaction happens in chloroplasts, tiny green structures inside leaf cells. The green pigment chlorophyll absorbs light energy, mostly red and blue light. The word equation is simple: carbon dioxide + water gives glucose + oxygen, with sunlight providing the energy.',
        'Oxygen is released as a by-product — this is the oxygen we breathe. The glucose gives the plant energy to grow, and extra glucose is stored as starch in roots and seeds. Without photosynthesis there would be almost no food chains and no free oxygen in the air.',
      ],
    },
    {
      id: 'bio-3',
      title: 'Human Heart and Circulation',
      summary:
        'The heart pumps blood around the body through arteries, veins and capillaries, carrying oxygen and food to every cell.',
      body: [
        'Your heart is about the size of your fist and beats around 70 times every minute, pumping blood around your body day and night without ever stopping. It is really two pumps joined together: the right side sends blood to the lungs, and the left side sends it to the whole body.',
        'The heart has four chambers. The two upper chambers are the atria, which receive blood, and the two lower chambers are the ventricles, which pump it out. The right ventricle pumps blood low in oxygen to the lungs, where it picks up oxygen and drops off carbon dioxide.',
        'The left ventricle is the strongest chamber: it pumps oxygen-rich blood through the aorta to every organ. Blood travels in arteries away from the heart, in veins back towards it, and in tiny capillaries where oxygen and food pass into the tissues. Valves inside the heart stop blood flowing backwards.',
      ],
    },
    {
      id: 'bio-4',
      title: 'Genetics and Inheritance',
      summary:
        'How traits pass from parents to children through genes and chromosomes, and why children resemble their parents.',
      body: [
        'Genetics is the study of how traits pass from parents to children. The instructions for building a living thing are carried in genes, sections of DNA that sit on thread-like structures called chromosomes inside the nucleus of every cell.',
        'Humans have 46 chromosomes in most cells, in 23 pairs — one set from the mother and one from the father. Each gene comes in versions called alleles. Some alleles are dominant and show their effect even with one copy, while recessive alleles only show when a child gets two copies.',
        'This is why children resemble their parents but are never identical to them: each child gets a different mix of genes. Small differences in genes also explain eye colour, height and many other traits. Understanding genetics helps doctors explain inherited diseases and helps farmers breed better crops.',
      ],
    },
  ],
  Physics: [
    {
      id: 'phy-1',
      title: "Newtons Laws of Motion",
      summary:
        'The three laws that explain how forces change motion: inertia, force equals mass times acceleration, and action and reaction.',
      body: [
        'Isaac Newton described three laws that explain how forces change motion. The first law is about inertia: a body stays still, or keeps moving at the same speed in a straight line, unless an unbalanced force acts on it. A book stays on a table until you push it, and a rolling ball slows down only because friction pushes against it.',
        'The second law links force, mass and acceleration: force = mass times acceleration. Push a light trolley and a heavy trolley with the same force, and the light one accelerates faster. Double the force and the acceleration doubles too.',
        'The third law says every action has an equal and opposite reaction. When you walk, you push backwards on the ground and the ground pushes you forwards. A rocket pushes hot gas down, and the gas pushes the rocket up with the same size of force in the opposite direction.',
      ],
    },
    {
      id: 'phy-2',
      title: 'Energy and Work',
      summary:
        'What energy is, its forms such as kinetic and potential energy, and how work is done when a force moves an object.',
      body: [
        'Energy is the ability to do work, and work is done when a force moves an object. If you lift a bag onto a table, you do work against gravity, and the bag gains gravitational potential energy. Push a box across the floor and you do work against friction.',
        'Energy comes in many forms. Kinetic energy is the energy of movement: a moving car has more kinetic energy than a slow one, and a heavy object has more than a light one at the same speed. Potential energy is stored energy, such as a stretched spring or water held behind a dam.',
        'Energy cannot be created or destroyed, only changed from one form to another. A falling ball turns potential energy into kinetic energy. A bulb turns electrical energy into light and heat. In every change, some energy is wasted as heat, which is why machines are never 100 percent efficient.',
      ],
    },
    {
      id: 'phy-3',
      title: 'Light and Reflection',
      summary:
        'How light travels in straight lines, reflects from mirrors, and forms images. Includes the laws of reflection.',
      body: [
        'Light travels in straight lines at about 300,000 kilometres per second in empty space. We see objects because light bounces off them and into our eyes. When light hits a smooth surface like a mirror, it reflects in a regular way and forms a clear image.',
        'The laws of reflection are simple. The angle of incidence — the angle between the incoming ray and the normal line — equals the angle of reflection. The incoming ray, the reflected ray and the normal all lie in the same plane. That is why a mirror image looks the same size as you and the same distance behind the mirror.',
        'A plane mirror makes a virtual image: it looks real, but no light actually comes from behind the mirror. Curved mirrors behave differently — a concave mirror can focus light to a point, which is why it is used in car headlights and telescopes, while a convex mirror spreads light out and is used as a safety mirror in shops.',
      ],
    },
    {
      id: 'phy-4',
      title: 'Electricity and Circuits',
      summary:
        'Current, voltage and resistance, series and parallel circuits, and how a simple circuit with a battery and bulb works.',
      body: [
        'Electricity is the flow of electric charge, usually electrons moving through a metal wire. Three ideas describe any circuit: current, the amount of charge flowing each second, measured in amperes; voltage, the push that drives the current, measured in volts; and resistance, which opposes the flow, measured in ohms.',
        'They are linked by Ohm\'s law: voltage = current times resistance (V = I x R). Raise the voltage and more current flows, so a bulb glows brighter. Add resistance and the current falls, so the bulb gets dimmer. That is exactly what you can test in the Virtual Lab circuit simulator.',
        'In a series circuit the same current flows through every part, so if one bulb breaks, all of them go out. In a parallel circuit the current splits between branches, so each bulb gets the full voltage and one bulb can fail while the others stay lit. That is why the lights in a house are wired in parallel.',
      ],
    },
  ],
  Chemistry: [
    {
      id: 'chem-1',
      title: 'Atoms and Molecules',
      summary:
        'Atoms are the building blocks of matter. Learn about protons, neutrons and electrons, and how atoms join to form molecules.',
      body: [
        'Everything around you is made of atoms, the tiny building blocks of matter. An atom has a small, heavy nucleus at its centre, made of protons with a positive charge and neutrons with no charge, and electrons with a negative charge moving around it.',
        'The number of protons is the atomic number, and it decides which element the atom is: 1 proton is hydrogen, 6 is carbon, 8 is oxygen. Atoms of the same element have the same number of protons but can have different numbers of neutrons; those versions are called isotopes.',
        'Atoms rarely stay alone. They join together to form molecules, such as two hydrogen atoms and one oxygen atom making a water molecule, H2O. A molecule is the smallest unit of a substance that still has that substance\'s properties — break it apart and the properties change.',
      ],
    },
    {
      id: 'chem-2',
      title: 'Chemical Bonding',
      summary:
        'How atoms stick together through ionic and covalent bonds, and why water, salt and carbon dioxide behave differently.',
      body: [
        'Atoms join together because they want a full outer shell of electrons. They do this in two main ways. In an ionic bond, one atom gives an electron to another, so both become charged ions that attract each other — this is how sodium and chlorine form salt.',
        'In a covalent bond, atoms share electrons instead of giving them away. Two hydrogen atoms share one pair of electrons to form H2, and in water each hydrogen shares a pair with oxygen. Covalent bonds hold together most of the molecules in living things, from sugar to DNA.',
        'The kind of bond decides how a substance behaves. Ionic compounds like salt are hard crystals that dissolve in water and conduct electricity when melted. Covalent molecules like water and carbon dioxide are usually gases or liquids, and they do not conduct electricity.',
      ],
    },
    {
      id: 'chem-3',
      title: 'Acids, Bases and Salts',
      summary:
        'What makes a substance acidic or basic, the pH scale, neutralisation, and everyday examples such as lemon juice and soap.',
      body: [
        'Acids are substances that release hydrogen ions in water and taste sour — lemon juice contains citric acid and vinegar contains acetic acid. Bases are the opposite: they feel soapy and can neutralise acids. Alkalis are bases that dissolve in water, such as soap solution.',
        'The pH scale measures how acidic or basic a solution is, from 0 to 14. A pH below 7 is acidic, 7 is neutral, and above 7 is basic. Strong acids like stomach acid have a very low pH, while washing soda has a high pH. Litmus paper turns red in acid and blue in a base.',
        'When an acid and a base mix, they neutralise each other and make a salt and water. For example, hydrochloric acid plus sodium hydroxide gives sodium chloride — common salt — plus water. Farmers use lime, a base, to neutralise acidic soil, and antacid tablets calm excess stomach acid the same way.',
      ],
    },
    {
      id: 'chem-4',
      title: 'The Periodic Table',
      summary:
        'How elements are arranged by atomic number into groups and periods, and what the table tells us about each element.',
      body: [
        'The periodic table arranges all known elements by atomic number, from hydrogen (1) to the heaviest elements. Elements in the same vertical column, called a group, have similar properties because their atoms have the same number of electrons in the outer shell.',
        'Rows are called periods. As you move across a period, the atoms get one more proton and one more electron, and the properties change gradually from metals on the left to non-metals on the right. The table also separates metals, non-metals and the noble gases, which barely react at all.',
        'The table is a map, not just a list. Find an element and you can predict its behaviour: Group 1 metals like sodium react violently with water, Group 17 halogens like chlorine are reactive non-metals, and Group 18 noble gases like argon are unreactive. Mendeleev built the first version in 1869 and even left gaps for elements nobody had found yet.',
      ],
    },
  ],
  Mathematics: [
    {
      id: 'math-1',
      title: 'Algebra Basics',
      summary:
        'Using letters to stand for unknown numbers, simplifying expressions, and solving simple equations step by step.',
      body: [
        'Algebra is arithmetic with letters standing for unknown numbers. The letter, called a variable, can stand for any value: in x + 5 = 12, x must be 7. Using letters lets us write rules that work for many numbers at once, such as the area of a rectangle, A = l x w.',
        'The first skill is simplifying expressions. Terms with the same letter can be combined: 3x + 2x = 5x, but 3x + 2y stays as it is. Brackets are expanded by multiplying each term inside, so 2(x + 3) = 2x + 6.',
        'To solve an equation, do the same thing to both sides until the letter stands alone. For 2x + 3 = 11, subtract 3 from both sides to get 2x = 8, then divide both sides by 2 to get x = 4. Always check your answer by putting it back into the original equation.',
      ],
    },
    {
      id: 'math-2',
      title: 'Fractions and Decimals',
      summary:
        'What fractions mean, how to add, subtract, multiply and divide them, and how to convert between fractions and decimals.',
      body: [
        'A fraction is a part of a whole: in 3/4, the bottom number (the denominator) says the whole is split into 4 equal parts, and the top number (the numerator) says we have 3 of them. The same value can be written in many ways — 1/2, 2/4 and 3/6 are all the same.',
        'To add or subtract fractions you need the same denominator. For 1/3 + 1/6, change 1/3 to 2/6, then add the tops: 2/6 + 1/6 = 3/6 = 1/2. To multiply, multiply the tops and the bottoms: 2/3 x 3/5 = 6/15 = 2/5. To divide, flip the second fraction and multiply.',
        'Fractions and decimals are two ways of writing the same idea. Divide the top by the bottom: 1/4 = 0.25, 3/10 = 0.3. Some fractions never end as decimals — 1/3 = 0.333... — so we round them. Use fractions when you need an exact answer and decimals when you need a quick estimate.',
      ],
    },
    {
      id: 'math-3',
      title: 'Geometry: Triangles and Circles',
      summary:
        'Angles, types of triangles, the area and perimeter of shapes, and the parts of a circle: radius, diameter and circumference.',
      body: [
        'Geometry is the study of shapes and angles. A triangle has three sides and its three interior angles always add up to 180 degrees. Triangles are named by their sides and angles: equilateral (all sides equal), isosceles (two sides equal) and scalene (all sides different).',
        'The area of a triangle is half x base x height, and the perimeter is the sum of its sides. For a rectangle, area is length x width. For a circle, the radius is the distance from the centre to the edge, the diameter is twice the radius, and the circumference is pi x diameter.',
        'The most famous circle rule is that the area of a circle is pi x r squared, where r is the radius. Angles on a straight line add to 180 degrees, and angles around a point add to 360 degrees. Knowing these facts lets you work out missing angles without measuring them.',
      ],
    },
    {
      id: 'math-4',
      title: 'Ratios and Percentages',
      summary:
        'Comparing quantities with ratios, converting ratios to percentages, and solving everyday percentage problems.',
      body: [
        'A ratio compares two quantities: the ratio 2:3 means for every 2 of one thing there are 3 of another. Ratios must use the same units, and they are usually written in simplest form — 10:15 simplifies to 2:3 by dividing both sides by 5.',
        'Percent means out of 100. To turn a fraction into a percentage, multiply by 100: 3/4 = 75%. To find 20% of 80, work out 0.20 x 80 = 16. Percentages are everywhere in real life — discounts in shops, marks in exams and interest in banks.',
        'Ratios and percentages work together in problems. If a class has boys and girls in the ratio 3:2 and there are 30 students, split 30 into 5 parts (3 + 2), so each part is 6 — that gives 18 boys and 12 girls. Always check that your answer adds up to the total.',
      ],
    },
  ],
  English: [
    {
      id: 'eng-1',
      title: 'Grammar: Tenses',
      summary:
        'Present, past and future tenses, when to use each one, and how to form them correctly in sentences.',
      body: [
        'English verbs change their form to show time, and these forms are called tenses. The present tense talks about now or about habits: \'She plays football every Sunday.\' The past tense talks about finished time: \'She played yesterday.\' The future tense talks about what will happen: \'She will play tomorrow.\'',
        'Each tense also has a continuous form for actions in progress and a perfect form for completed actions. \'I am reading\' is present continuous, \'I was reading\' is past continuous, and \'I have read\' is present perfect. Choosing the right form tells the reader exactly when something happened.',
        'The most common mistake is mixing tenses in one sentence. Keep the time the same unless the meaning changes: \'When I arrived, she was cooking\' uses past simple for the arrival and past continuous for the action already in progress. Read your sentences aloud — if the time jumps around, the tense probably has too.',
      ],
    },
    {
      id: 'eng-2',
      title: 'Reading Comprehension',
      summary:
        'How to read a passage carefully, find the main idea, and answer questions using evidence from the text.',
      body: [
        'Reading comprehension means understanding a passage, not just reading the words. Start by reading the whole passage once without stopping, to get the main idea. Then read the questions so you know what to look for, and read the passage again slowly.',
        'Find the main idea first — what is the writer really trying to say? Then look for supporting details: facts, examples and reasons. Many questions ask you to find evidence in the text, so underline the sentence that proves your answer instead of guessing from memory.',
        'Some questions ask you to infer — to work out what the writer means without saying it directly. Use the clues in the text plus what you already know. If two answers both look possible, choose the one the text supports with evidence, not the one that sounds clever.',
      ],
    },
    {
      id: 'eng-3',
      title: 'Essay Writing',
      summary:
        'Planning an essay with an introduction, body paragraphs and a conclusion, and writing clearly in your own words.',
      body: [
        'A good essay has three parts. The introduction tells the reader what you will write about and gives your main idea in one clear sentence. The body paragraphs each make one point, with an example or reason to support it. The conclusion sums up the points and restates the main idea.',
        'Plan before you write. Write a short outline: your main idea, then two or three points with an example for each. This takes five minutes but saves you from getting stuck halfway. One paragraph should contain one idea — when the idea changes, start a new paragraph.',
        'Write in your own words and keep sentences short and clear. After writing, read your essay aloud and fix any sentence that sounds wrong. Check spelling and punctuation last, and ask yourself: does every paragraph support my main idea? If a sentence does not, cut it out.',
      ],
    },
    {
      id: 'eng-4',
      title: 'Vocabulary Building',
      summary:
        'Learning new words through roots, prefixes and suffixes, synonyms and antonyms, and using words correctly.',
      body: [
        'A bigger vocabulary makes reading easier and writing stronger. The best way to learn new words is to read widely and to look up every word you do not know. Write it down with its meaning and one example sentence of your own — that is how the word sticks.',
        'Word parts are shortcuts. A prefix comes at the start: \'un-\' means not (unhappy), \'re-\' means again (rewrite). A suffix comes at the end: \'-ful\' means full of (careful), \'-less\' means without (careless). If you know the parts, you can guess many new words.',
        'Synonyms are words with similar meanings, like happy and joyful, and antonyms are opposites, like hot and cold. But synonyms are rarely exact: \'big\', \'huge\' and \'enormous\' all mean large, but each fits a different sentence. Use a new word three times in real sentences and it becomes yours.',
      ],
    },
  ],
  'Computer Science': [
    {
      id: 'cs-1',
      title: 'What is a Computer?',
      summary:
        'The parts of a computer: input, processing, storage and output, and how hardware and software work together.',
      body: [
        'A computer is a machine that follows instructions to process information. It works in four stages: input, processing, storage and output. You give it data through input devices like a keyboard or mouse, it processes the data, stores the results, and shows them on an output device like a screen.',
        'Hardware is the parts you can touch — the processor (CPU), memory (RAM), hard drive and screen. The CPU is the brain: it carries out billions of tiny instructions every second. RAM is short-term memory that is wiped when the computer switches off, while the hard drive keeps your files permanently.',
        'Software is the programs that tell the hardware what to do, from the operating system to apps and games. Without software, hardware is just metal and plastic. Together they let you write, calculate, draw, play music and talk to people on the other side of the world.',
      ],
    },
    {
      id: 'cs-2',
      title: 'Programming Basics',
      summary:
        'What a program is, variables, inputs and outputs, and how to think in steps like a programmer.',
      body: [
        'A program is a set of step-by-step instructions that tells a computer exactly what to do. Writing a program is called coding, and the most important skill is not typing — it is thinking in steps, breaking a big problem into small steps the computer can follow.',
        'Programs are built from a few basic ideas. Variables store values, such as a player\'s score. An \'if\' statement lets the program make a choice, and a loop repeats instructions, such as drawing the same shape ten times. Inputs and outputs let the program talk to the user.',
        'Programs almost never work first time, and fixing them is called debugging. Good programmers test small pieces, read error messages carefully, and fix one thing at a time. Every app on your phone, from games to maps, was built this way — one small step at a time.',
      ],
    },
    {
      id: 'cs-3',
      title: 'Internet and Safety',
      summary:
        'How the internet works, staying safe online, strong passwords, and what to do about strangers and scams.',
      body: [
        'The internet connects computers all over the world, so a message can travel from your phone to another country in less than a second. It works through networks of cables, Wi-Fi and servers — big computers that store websites and send them to you when you ask.',
        'Staying safe online starts with strong passwords: long, different for every account, and never shared with friends. Never share your full name, address, school or photos with strangers online, and remember that people can pretend to be someone else.',
        'If a message, link or offer feels wrong, stop and tell an adult you trust. Do not click links from strangers, do not download files you were not expecting, and be kind online — anything you post can be copied and kept forever, even if you delete it.',
      ],
    },
    {
      id: 'cs-4',
      title: 'Data and Binary Numbers',
      summary:
        'How computers store everything as 0s and 1s, what bits and bytes are, and how to count in binary.',
      body: [
        'Computers store everything as 0s and 1s, because their circuits can only be on or off. This system is called binary. Each 0 or 1 is called a bit, and eight bits together make one byte — enough to store one character, such as the letter A.',
        'Counting in binary works like counting in decimal, but each place is worth twice the one before it: 1, 2, 4, 8, 16 and so on. The binary number 101 means 4 + 0 + 1 = 5, and 1010 means 8 + 0 + 2 + 0 = 10. Try it: what is 1101 in decimal? (It is 13.)',
        'Everything in a computer is built from binary: numbers, letters, pictures and sound. A picture is a grid of pixels, and each pixel\'s colour is stored as binary numbers. A song is thousands of tiny binary samples of sound. That is why more storage and faster memory make a computer better.',
      ],
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
  videoId?: string
  videoNote?: string
}

export const lectures: Lecture[] = [
  {
    id: 'lec-1',
    subject: 'Biology',
    title: 'Photosynthesis: How Plants Make Food',
    duration: '12 min',
    level: 'Beginner',
    videoId: 'uixA8ZXx0KU',
    videoNote: 'Watch: Photosynthesis by Amoeba Sisters on YouTube. Also see the Khan Academy overview: https://www.youtube.com/watch?v=-rsYk4eCKnA',
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

export type ModelInfo = {
  title: string
  intro: string
  points: string[]
}

export const modelInfo: Record<'cell' | 'heart' | 'molecule' | 'motion', ModelInfo> = {
  cell: {
    title: 'Animal Cell',
    intro: 'An animal cell is the smallest unit of animal life. Every cell takes in food, releases energy, gets rid of waste and can divide to make new cells. Tap each part of the diagram to learn what it does.',
    points: [
      'Nucleus — the control centre. It holds DNA, the instructions for making proteins and running the cell.',
      'Mitochondria — the powerhouse. They release energy from glucose during respiration.',
      'Cell membrane — the thin skin around the cell. It controls what enters and leaves.',
      'Cytoplasm — the jelly filling the cell, where most chemical reactions happen.',
      'Vacuole — a storage sac filled with cell sap.',
    ],
  },
  heart: {
    title: 'Human Heart',
    intro: 'Your heart is about the size of your fist and beats around 70 times a minute. It is really two pumps joined together: the right side sends blood to the lungs, and the left side sends it to the whole body.',
    points: [
      'Right atrium — receives blood low in oxygen from the body.',
      'Right ventricle — pumps that blood to the lungs to pick up oxygen.',
      'Left atrium — receives oxygen-rich blood back from the lungs.',
      'Left ventricle — the strongest chamber. It pumps oxygen-rich blood to the whole body.',
      'Valves — flaps that stop blood flowing backwards, so it only moves in one direction.',
    ],
  },
  molecule: {
    title: 'Water Molecule',
    intro: 'A molecule is two or more atoms joined by a chemical bond. Water is the most important molecule for life: two hydrogen atoms joined to one oxygen atom, written H2O.',
    points: [
      'Oxygen (O) — the large red atom in the middle.',
      'Hydrogen (H) — the two small white atoms.',
      'Covalent bonds — the atoms share electrons to stay together.',
      'H2O has a bent shape, about 104.5 degrees between the hydrogen atoms.',
    ],
  },
  motion: {
    title: 'Motion and Gravity',
    intro: 'Gravity pulls everything towards the Earth at 9.8 metres per second squared. Drop any object and it speeds up as it falls — a heavier object does not fall faster than a light one.',
    points: [
      'Fall time = square root of (2 x height / 9.8).',
      'Landing speed = square root of (2 x 9.8 x height).',
      'Double the height and the landing speed grows — but not by double.',
      'Try the slider: compare a 2 m drop with an 8 m drop.',
    ],
  },
}

export type LabGuide = {
  title: string
  intro: string
  steps: string[]
  tryThis: string
}

export const labGuides: Record<'circuit' | 'cell' | 'molecule', LabGuide> = {
  circuit: {
    title: 'Circuit Simulator',
    intro: 'A battery, a wire and a bulb. Change the voltage and flip the switch — the bulb brightness and the current change with it. Resistance is fixed at 10 ohms.',
    steps: [
      'Move the voltage slider to 6 V.',
      'Make sure the switch is ON and watch the bulb glow.',
      'Raise the voltage to 12 V — the bulb gets brighter and the current rises.',
      'Lower it to 2 V — the bulb goes dim.',
      'Flip the switch OFF — the circuit breaks and the current becomes 0 A.',
    ],
    tryThis: 'Set 12 V, then 3 V. How much dimmer is the bulb? Current = voltage / 10 ohms, so at 12 V it is 1.2 A and at 3 V only 0.3 A.',
  },
  cell: {
    title: 'Cell Explorer',
    intro: 'Explore a living cell without a microscope. Tap each part of the diagram to learn what it does.',
    steps: [
      'Tap the large purple circle — the nucleus.',
      'Tap the orange ovals — the mitochondria.',
      'Tap the blue circle — the vacuole.',
      'Tap the edge of the cell — the membrane.',
    ],
    tryThis: 'Find the part that releases energy from food. That is the mitochondria — the powerhouse of the cell.',
  },
  molecule: {
    title: 'Molecule Builder',
    intro: 'Build molecules atom by atom and see which molecule you made. Atoms join by sharing or giving away electrons.',
    steps: [
      'Tap + Hydrogen twice, then + Oxygen once.',
      'Read the formula — you built water, H2O.',
      'Tap Clear and add 1 carbon + 2 oxygen for carbon dioxide.',
      'Try 1 carbon + 4 hydrogen for methane, CH4.',
    ],
    tryThis: 'Can you build oxygen gas, O2? Add two oxygen atoms and nothing else.',
  },
}
