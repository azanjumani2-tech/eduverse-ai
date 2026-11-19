import { useEffect, useMemo, useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import {
  Atom, BookOpen, BrainCircuit, ChartNoAxesColumnIncreasing, FlaskConical,
  GraduationCap, LayoutDashboard, Menu, NotebookPen, Search, Settings,
  ShieldCheck, Sparkles, Video, X, ChevronRight, Play, Clock3, Bell,
  Microscope, MessageCircle, Send, CircleHelp, LogIn, UserPlus,
  Check, Trash2, Pencil, Plus, RotateCcw, Zap, ArrowLeft, Lightbulb,
} from 'lucide-react'
import { boards, chapters, lectures, lessons, quizzes, subjects, teacherKB, cellParts, heartParts, moleculeParts } from './data'
import type { Lecture, ModelPart } from './data'

/* ---------- localStorage helpers ---------- */
function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}
function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable */
  }
}
function todayStr() {
  return new Date().toISOString().slice(0, 10)
}
function touchStreak() {
  const s = load<{ last: string; count: number }>('ev_streak', { last: '', count: 0 })
  const today = todayStr()
  if (s.last === today) return
  const y = new Date()
  y.setDate(y.getDate() - 1)
  const yesterday = y.toISOString().slice(0, 10)
  const count = s.last === yesterday ? s.count + 1 : 1
  save('ev_streak', { last: today, count })
}
function getCompleted(): string[] {
  return load<string[]>('ev_completed', [])
}
function toggleCompleted(id: string): string[] {
  const cur = getCompleted()
  const next = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
  save('ev_completed', next)
  if (!cur.includes(id)) touchStreak()
  return next
}
function totalChapters(): number {
  return Object.values(chapters).reduce((n, list) => n + list.length, 0)
}

type Note = { id: string; title: string; body: string; subject: string; created: string }
type ChatMsg = { from: 'you' | 'ai'; text: string }
type CustomLesson = { id: string; subject: string; title: string; summary: string }
type QuizRecord = Record<string, { best: number; attempts: number }>

function getNotes(): Note[] {
  return load<Note[]>('ev_notes', [])
}
function getCustomLessons(): CustomLesson[] {
  return load<CustomLesson[]>('ev_custom_lessons', [])
}
function getQuizRecords(): QuizRecord {
  return load<QuizRecord>('ev_quiz', {})
}

const navItems = [
  { to: '/', label: 'Overview', icon: LayoutDashboard },
  { to: '/library', label: 'Textbook Library', icon: BookOpen },
  { to: '/lectures', label: 'Video Lectures', icon: Video },
  { to: '/teacher', label: 'AI Teacher', icon: BrainCircuit },
  { to: '/notes', label: 'My Notes', icon: NotebookPen },
  { to: '/quizzes', label: 'Quizzes & Tests', icon: CircleHelp },
  { to: '/3d-learning', label: '3D Learning', icon: Atom },
  { to: '/labs', label: 'Virtual Labs', icon: FlaskConical },
  { to: '/progress', label: 'My Progress', icon: ChartNoAxesColumnIncreasing },
  { to: '/admin', label: 'Admin Preview', icon: ShieldCheck },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [showNotif, setShowNotif] = useState(false)
  const navigate = useNavigate()
  const completed = getCompleted()
  const notes = getNotes()
  const records = getQuizRecords()
  const bestQuiz = Object.values(records).length
    ? Math.max(...Object.values(records).map((r) => r.best))
    : 0
  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><GraduationCap size={23} /></div>
          <div><strong>EduVerse <span>AI</span></strong><small>LEARN WITHOUT LIMITS</small></div>
          <button className="icon-btn close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
        </div>
        <div className="side-label">LEARNING SPACE</div>
        <nav>{navItems.map((item) => {
          const Icon = item.icon
          return <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><Icon size={18} /><span>{item.label}</span>{item.to === '/teacher' && <i className="new-dot" />}</NavLink>
        })}</nav>
        <div className="sidebar-bottom">
          <div className="help-card"><Sparkles size={17} /><strong>Keep exploring</strong><p>Small steps every day lead to big discoveries.</p></div>
          <div className="profile-mini"><div className="avatar">S</div><div><strong>Student Account</strong><small>Learning profile</small></div><button className="icon-btn" onClick={() => navigate('/admin')} aria-label="Admin"><Settings size={17} /></button></div>
        </div>
      </aside>
      {menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />}
      <main className="main-area">
        <header className="topbar">
          <button className="icon-btn menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
          <div className="breadcrumb">Learning Space <ChevronRight size={14} /> <span>EduVerse AI</span></div>
          <div className="top-actions">
            <label className="search-box"><Search size={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search lessons..." /></label>
            <div style={{ position: 'relative' }}>
              <button className="icon-btn notification" aria-label="Notifications" onClick={() => setShowNotif((v) => !v)}><Bell size={18} /><i /></button>
              {showNotif && (
                <div className="notif-panel">
                  <strong>Your updates</strong>
                  <p>Chapters read: {completed.filter((c) => c.startsWith('ch-')).length} of {totalChapters()}</p>
                  <p>Lectures completed: {completed.filter((c) => c.startsWith('lec-')).length} of {lectures.length}</p>
                  <p>Notes saved: {notes.length} · Best quiz score: {bestQuiz}%</p>
                  <button className="text-btn" onClick={() => { setShowNotif(false); navigate('/progress') }}>View full progress <ChevronRight size={15} /></button>
                </div>
              )}
            </div>
            <div className="avatar top-avatar">S</div>
          </div>
        </header>
        <div className="page-wrap">
          <Routes>
            <Route path="/" element={<Dashboard search={search} />} />
            <Route path="/library" element={<Library />} />
            <Route path="/lectures" element={<Lectures />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/3d-learning" element={<Models3D />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Dashboard search={search} />} />
          </Routes>
        </div>
        <footer className="footer">© 2026 EduVerse AI <span>Learn Beyond Textbooks · Experience Every Concept</span></footer>
      </main>
    </div>
  )
}

function PageHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{subtitle}</p></div></div>
}

function Stat({ icon, label, value, note }: { icon: React.ReactNode; label: string; value: string; note: string }) {
  return <div className="stat-card"><div className="stat-top">{icon}<span>{label}</span></div><strong>{value}</strong><small>{note}</small></div>
}

/* ---------- Dashboard ---------- */
function Dashboard({ search }: { search: string }) {
  const navigate = useNavigate()
  const [completed, setCompleted] = useState<string[]>(() => getCompleted())
  const [notes] = useState<Note[]>(() => getNotes())
  const records = getQuizRecords()
  const q = search.trim().toLowerCase()
  const filteredSubjects = q ? subjects.filter((s) => (s.name + ' ' + s.detail).toLowerCase().includes(q)) : subjects
  const filteredLessons = q
    ? [...lessons.map((l) => ({ title: l.title, subject: l.subject, duration: l.duration })), ...lectures.map((l) => ({ title: l.title, subject: l.subject, duration: l.duration }))].filter((l) => (l.title + ' ' + l.subject).toLowerCase().includes(q))
    : []
  const lessonsDone = lessons.filter((l) => completed.includes(`lesson:${l.title}`)).length
  const lecturesDone = lectures.filter((l) => completed.includes(`lec-${l.id}`)).length
  const chaptersDone = completed.filter((c) => c.startsWith('ch-')).length
  const bestQuiz = Object.values(records).length ? Math.max(...Object.values(records).map((r) => r.best)) : 0
  const markLesson = (title: string) => setCompleted(toggleCompleted(`lesson:${title}`))
  return (
    <>
      <section className="hero">
        <div className="hero-content"><div className="eyebrow light"><Sparkles size={14} /> YOUR LEARNING UNIVERSE</div><h1>Learn beyond<br /><span>the textbook.</span></h1><p>Explore ideas, understand difficult concepts and discover a more visual way to learn.</p><div className="hero-actions"><button className="btn-primary" onClick={() => navigate('/library')}>Explore learning <ChevronRight size={17} /></button><button className="btn-ghost" onClick={() => navigate('/teacher')}><BrainCircuit size={17} /> Meet AI Teacher</button></div></div>
        <div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet"><Atom size={70} /></div><div className="float-card float-top"><Microscope size={17} /> Discover science</div><div className="float-card float-bottom"><Sparkles size={17} /> Learn by exploring</div></div>
        <div className="hero-glow" />
      </section>
      {q && (
        <section className="panel" style={{ marginTop: 16 }}>
          <div className="panel-heading"><div><h3>Search results for “{search}”</h3><p>{filteredSubjects.length} subjects · {filteredLessons.length} lessons found</p></div></div>
          {filteredSubjects.length === 0 && filteredLessons.length === 0 && <p className="muted-note">Nothing found. Try Biology, Newton, fractions or cell.</p>}
          <div className="subject-grid">
            {filteredSubjects.map((s) => (
              <button className="subject-card" key={s.name} onClick={() => navigate('/library')}><div className={`subject-icon ${s.color}`}>{s.icon}</div><strong>{s.name}</strong><small>{s.detail}</small><ChevronRight className="subject-arrow" size={16} /></button>
            ))}
          </div>
          {filteredLessons.map((l) => (
            <div className="lesson-row" key={l.title}><div className="lesson-play"><Play size={15} fill="currentColor" /></div><div className="lesson-info"><strong>{l.title}</strong><small>{l.subject} · {l.duration}</small></div><button className="outline-btn" onClick={() => navigate('/lectures')}>Open</button></div>
          ))}
        </section>
      )}
      <div className="section-head"><div><div className="eyebrow">YOUR WORKSPACE</div><h2>Welcome back, learner</h2><p>Pick up where you left off or explore something new.</p></div><div className="board-pill"><GraduationCap size={16} /> Select your board</div></div>
      <div className="stats-grid">
        <Stat icon={<BookOpen />} label="Lessons completed" value={`${lessonsDone + lecturesDone}`} note={`${lecturesDone} lectures · ${lessonsDone} lessons`} />
        <Stat icon={<ChartNoAxesColumnIncreasing />} label="Chapters read" value={`${chaptersDone} / ${totalChapters()}`} note="Across all subjects" />
        <Stat icon={<NotebookPen />} label="Saved notes" value={`${notes.length}`} note="Your study library" />
        <Stat icon={<CircleHelp />} label="Best quiz score" value={bestQuiz ? `${bestQuiz}%` : 'Not taken'} note={bestQuiz ? 'Keep it up!' : 'Take a quiz to start'} />
      </div>
      <div className="content-grid">
        <section className="panel subjects-panel"><div className="panel-heading"><div><h3>Explore subjects</h3><p>Choose a subject to begin</p></div><button className="text-btn" onClick={() => navigate('/library')}>View library <ChevronRight size={15} /></button></div><div className="subject-grid">{subjects.map((s) => <button className="subject-card" key={s.name} onClick={() => navigate('/library')}><div className={`subject-icon ${s.color}`}>{s.icon}</div><strong>{s.name}</strong><small>{s.detail}</small><ChevronRight className="subject-arrow" size={16} /></button>)}</div></section>
        <section className="panel continue-panel"><div className="panel-heading"><div><h3>Continue learning</h3><p>Pick up a topic</p></div><BookOpen size={19} className="muted-icon" /></div>
          {lessons.map((l) => {
            const done = completed.includes(`lesson:${l.title}`)
            return (
              <div className="lesson-row" key={l.title}>
                <div className="lesson-play"><Play size={15} fill="currentColor" /></div>
                <div className="lesson-info"><strong>{l.title}</strong><small>{l.subject} · {l.duration}</small><div className="progress-track"><div style={{ width: `${done ? 100 : l.progress}%` }} /></div></div>
                <button className={done ? 'check-btn done' : 'check-btn'} onClick={() => markLesson(l.title)}>{done ? <><Check size={14} /> Done</> : 'Mark complete'}</button>
              </div>
            )
          })}
        </section>
      </div>
      <section className="wide-cta"><div className="cta-icon"><BrainCircuit size={25} /></div><div><strong>Have a question? Ask your AI Teacher.</strong><p>Get a concept explained in simple steps.</p></div><button className="btn-primary" onClick={() => navigate('/teacher')}>Ask a question <ChevronRight size={16} /></button></section>
    </>
  )
}

/* ---------- Library ---------- */
function Library() {
  const [board, setBoard] = useState(boards[0])
  const [expanded, setExpanded] = useState<string | null>(null)
  const [completed, setCompleted] = useState<string[]>(() => getCompleted())
  const [custom] = useState<CustomLesson[]>(() => getCustomLessons())
  const markChapter = (id: string) => setCompleted(toggleCompleted(`ch-${id}`))
  return (
    <>
      <PageHeading eyebrow="YOUR DIGITAL BOOKSHELF" title="Textbook Library" subtitle="Find books and learning material organized for your education board." />
      <div className="filter-row"><label>Education board</label><select value={board} onChange={(e) => setBoard(e.target.value)}>{boards.map((b) => <option key={b}>{b}</option>)}</select><span className="muted-note">Showing content for {board}</span></div>
      <div className="subject-grid library-grid">
        {subjects.map((s, i) => {
          const list = chapters[s.name] || []
          const mine = custom.filter((c) => c.subject === s.name)
          const total = list.length + mine.length
          const done = list.filter((c) => completed.includes(`ch-${c.id}`)).length + mine.filter((c) => completed.includes(`ch-${c.id}`)).length
          const open = expanded === s.name
          return (
            <div className="book-card" key={s.name}>
              <div className={`book-cover cover-${i % 4}`}><BookOpen size={34} /><span>{s.name}</span></div>
              <div className="book-meta"><small>{board}</small><h3>{s.name}</h3><p>{s.detail}</p>
                <div className="progress-track"><div style={{ width: `${total ? Math.round((done / total) * 100) : 0}%` }} /></div>
                <small className="muted-note">{done} of {total} chapters read</small><br />
                <button className="outline-btn" onClick={() => setExpanded(open ? null : s.name)}>{open ? 'Hide chapters' : 'View chapters'} <ChevronRight size={15} /></button>
              </div>
              {open && (
                <div className="chapter-list">
                  {list.map((c) => {
                    const read = completed.includes(`ch-${c.id}`)
                    return (
                      <div className="chapter-row" key={c.id}>
                        <div><strong>{c.title}</strong><p>{c.summary}</p></div>
                        <button className={read ? 'check-btn done' : 'check-btn'} onClick={() => markChapter(c.id)}>{read ? <><Check size={14} /> Read</> : 'Mark read'}</button>
                      </div>
                    )
                  })}
                  {mine.map((c) => {
                    const read = completed.includes(`ch-${c.id}`)
                    return (
                      <div className="chapter-row" key={c.id}>
                        <div><strong>{c.title} <span className="status-label">Added by Admin</span></strong><p>{c.summary}</p></div>
                        <button className={read ? 'check-btn done' : 'check-btn'} onClick={() => markChapter(c.id)}>{read ? <><Check size={14} /> Read</> : 'Mark read'}</button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </>
  )
}

/* ---------- Lectures ---------- */
function Lectures() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState<Lecture | null>(null)
  const [completed, setCompleted] = useState<string[]>(() => getCompleted())
  const shown = filter === 'All' ? lectures : lectures.filter((l) => l.subject === filter)
  if (selected) {
    const done = completed.includes(`lec-${selected.id}`)
    return (
      <>
        <button className="outline-btn" onClick={() => setSelected(null)}><ArrowLeft size={15} /> Back to lectures</button>
        <PageHeading eyebrow={selected.subject.toUpperCase()} title={selected.title} subtitle={`${selected.duration} · ${selected.level} · ${selected.summary}`} />
        <div className="panel lesson-detail">
          <h3>Key points</h3>
          <ul>{selected.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <h3>Full lesson</h3>
          {selected.body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
          <button className={done ? 'check-btn done big' : 'check-btn big'} onClick={() => setCompleted(toggleCompleted(`lec-${selected.id}`))}>
            {done ? <><Check size={16} /> Completed — tap to undo</> : 'Mark lecture complete'}
          </button>
        </div>
      </>
    )
  }
  return (
    <>
      <PageHeading eyebrow="WATCH AND LEARN" title="Video Lectures" subtitle="Full written lessons organized by subject — read, learn and mark each one complete." />
      <div className="filter-chips">
        {['All', ...subjects.map((s) => s.name)].map((s) => (
          <button key={s} className={filter === s ? 'chip chip-active' : 'chip'} onClick={() => setFilter(s)}>{s}</button>
        ))}
      </div>
      <div className="feature-grid">
        {shown.map((l, i) => {
          const done = completed.includes(`lec-${l.id}`)
          return (
            <div className="feature-card" key={l.id}>
              <div className="feature-icon"><Video /></div>
              <div className="eyebrow">{l.subject.toUpperCase()} · LESSON {String(i + 1).padStart(2, '0')}</div>
              <h3>{l.title}</h3>
              <p>{l.summary}</p>
              <span className="status-label"><Clock3 size={12} /> {l.duration} · {l.level}</span>
              {done && <span className="status-label done-label"><Check size={12} /> Completed</span>}
              <br /><button className="btn-primary" style={{ marginTop: 12 }} onClick={() => setSelected(l)}><Play size={15} /> Open lesson</button>
            </div>
          )
        })}
      </div>
      {shown.length === 0 && <p className="muted-note">No lectures for this subject yet.</p>}
    </>
  )
}

/* ---------- AI Teacher ---------- */
const suggestedQuestions = [
  'What is photosynthesis?',
  'Explain Newtons laws',
  'How do I solve an algebra equation?',
  'What is a chemical bond?',
  'Explain fractions',
  'What is the human heart?',
  'What is electricity?',
  'How do computers store data?',
]

function answerQuestion(raw: string): string {
  const q = raw.toLowerCase().replace(/[^a-z0-9 ]/g, ' ')
  let best: { score: number; answer: string } | null = null
  for (const t of teacherKB) {
    let score = 0
    for (const k of t.keywords) {
      if (q.includes(k)) score += 3
      else if (k.split(' ').some((w) => w.length > 3 && q.includes(w))) score += 1
    }
    if (!best || score > best.score) best = { score, answer: t.answer }
  }
  if (best && best.score > 0) return best.answer
  return 'I do not have a lesson on that exact question yet. Try asking about photosynthesis, cells, Newtons laws, chemical bonding, algebra, fractions, electricity, the heart, or computers — or tap a suggested question below.'
}

function Teacher() {
  const [messages, setMessages] = useState<ChatMsg[]>(() =>
    load<ChatMsg[]>('ev_chat', [{ from: 'ai', text: 'Hello! I am your EduVerse AI Teacher. Ask me a question about a school subject and I will explain the concept in simple steps. My answers come from a built-in lesson library on this device.' }]),
  )
  const [value, setValue] = useState('')
  useEffect(() => save('ev_chat', messages), [messages])
  const send = (text?: string) => {
    const q = (text ?? value).trim()
    if (!q) return
    setMessages((m) => [...m, { from: 'you', text: q }, { from: 'ai', text: answerQuestion(q) }])
    setValue('')
  }
  const clearChat = () => {
    const fresh: ChatMsg[] = [{ from: 'ai', text: 'Hello! I am your EduVerse AI Teacher. Ask me a question about a school subject and I will explain the concept in simple steps.' }]
    setMessages(fresh)
  }
  return (
    <>
      <PageHeading eyebrow="YOUR PERSONAL STUDY ASSISTANT" title="AI Teacher" subtitle="Ask questions, explore concepts and get help with your studies." />
      <p className="demo-note"><Lightbulb size={14} /> Built-in teacher: answers come from a lesson library saved on this device — not live GPT and no internet needed. Chat history is saved on your device.</p>
      <div className="chat-panel">
        <div className="chat-top"><div className="ai-avatar"><BrainCircuit /></div><div><strong>EduVerse AI Teacher</strong><small><i className="online-dot" /> Built-in · answers instantly</small></div><button className="outline-btn" style={{ marginLeft: 'auto' }} onClick={clearChat}><RotateCcw size={14} /> Clear chat</button></div>
        <div className="chat-messages">{messages.map((m, i) => <div key={i} className={`message ${m.from === 'you' ? 'mine' : ''}`}><div className="message-avatar">{m.from === 'ai' ? <Sparkles size={15} /> : 'S'}</div><p>{m.text}</p></div>)}</div>
        <div className="suggest-row">{suggestedQuestions.map((s) => <button key={s} className="chip" onClick={() => send(s)}>{s}</button>)}</div>
        <div className="chat-compose"><input value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder="Ask a question about your lesson..." /><button className="send-btn" onClick={() => send()} aria-label="Send message"><Send size={18} /></button></div>
        <small className="demo-warning">Built-in answers only. For a live AI tutor, a secure AI backend would be needed — this version works fully offline.</small>
      </div>
    </>
  )
}

/* ---------- Notes ---------- */
function Notes() {
  const [notes, setNotes] = useState<Note[]>(() => getNotes())
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [subject, setSubject] = useState(subjects[0].name)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  useEffect(() => save('ev_notes', notes), [notes])
  const resetForm = () => { setTitle(''); setBody(''); setSubject(subjects[0].name); setEditingId(null) }
  const saveNote = () => {
    if (!title.trim() || !body.trim()) return
    if (editingId) {
      setNotes((ns) => ns.map((n) => (n.id === editingId ? { ...n, title: title.trim(), body: body.trim(), subject } : n)))
    } else {
      setNotes((ns) => [{ id: `n${Date.now()}`, title: title.trim(), body: body.trim(), subject, created: new Date().toLocaleDateString() }, ...ns])
      touchStreak()
    }
    resetForm()
  }
  const editNote = (n: Note) => { setTitle(n.title); setBody(n.body); setSubject(n.subject); setEditingId(n.id) }
  const shown = notes.filter((n) => (n.title + ' ' + n.body + ' ' + n.subject).toLowerCase().includes(query.toLowerCase()))
  return (
    <>
      <PageHeading eyebrow="YOUR STUDY NOTES" title="My Notes" subtitle="Create, organize, search and revise your learning notes — saved on your device." />
      <div className="panel note-form">
        <h3>{editingId ? 'Edit note' : 'Write a new note'}</h3>
        <div className="form-row"><input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title, e.g. Photosynthesis summary" /><select className="select" value={subject} onChange={(e) => setSubject(e.target.value)}>{subjects.map((s) => <option key={s.name}>{s.name}</option>)}</select></div>
        <textarea className="textarea" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Write your note here..." rows={4} />
        <div className="form-row"><button className="btn-primary" onClick={saveNote}><Plus size={15} /> {editingId ? 'Save changes' : 'Save note'}</button>{editingId && <button className="outline-btn" onClick={resetForm}>Cancel edit</button>}</div>
      </div>
      <div className="filter-row" style={{ marginTop: 16 }}><label>Search notes</label><input className="input" style={{ flex: 1 }} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by title, subject or text..." /><span className="muted-note">{shown.length} of {notes.length} notes</span></div>
      <div className="notes-grid">
        {shown.map((n) => (
          <div className="note-card" key={n.id}>
            <div className="panel-heading"><div><h3>{n.title}</h3><p>{n.subject} · {n.created}</p></div></div>
            <p>{n.body}</p>
            <div className="form-row"><button className="outline-btn" onClick={() => editNote(n)}><Pencil size={14} /> Edit</button><button className="outline-btn danger" onClick={() => setNotes((ns) => ns.filter((x) => x.id !== n.id))}><Trash2 size={14} /> Delete</button></div>
          </div>
        ))}
      </div>
      {shown.length === 0 && <div className="panel empty-panel"><NotebookPen size={36} /><h3>No notes yet</h3><p>Write your first note above — it will be saved on this device.</p></div>}
    </>
  )
}

/* ---------- Quizzes ---------- */
function Quizzes() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [qIndex, setQIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answers, setAnswers] = useState<number[]>([])
  const [finished, setFinished] = useState(false)
  const [records, setRecords] = useState<QuizRecord>(() => getQuizRecords())
  const active = quizzes.find((q) => q.id === activeId) || null
  const startQuiz = (id: string) => { setActiveId(id); setQIndex(0); setSelected(null); setAnswers([]); setFinished(false) }
  const choose = (i: number) => setSelected(i)
  const next = () => {
    if (selected === null || !active) return
    const newAnswers = [...answers, selected]
    setAnswers(newAnswers)
    setSelected(null)
    if (qIndex + 1 >= active.questions.length) {
      const score = Math.round((newAnswers.filter((a, i) => a === active.questions[i].answer).length / active.questions.length) * 100)
      const prev = records[active.id] || { best: 0, attempts: 0 }
      const nextRec = { ...records, [active.id]: { best: Math.max(prev.best, score), attempts: prev.attempts + 1 } }
      setRecords(nextRec)
      save('ev_quiz', nextRec)
      touchStreak()
      setFinished(true)
    } else {
      setQIndex(qIndex + 1)
    }
  }
  if (active && finished) {
    const score = Math.round((answers.filter((a, i) => a === active.questions[i].answer).length / active.questions.length) * 100)
    return (
      <>
        <button className="outline-btn" onClick={() => setActiveId(null)}><ArrowLeft size={15} /> Back to quizzes</button>
        <PageHeading eyebrow="YOUR RESULT" title={`${active.title} — ${score}%`} subtitle={`You got ${answers.filter((a, i) => a === active.questions[i].answer).length} of ${active.questions.length} correct. Best score for this quiz: ${records[active.id]?.best ?? score}%.`} />
        <div className="panel">
          {active.questions.map((qq, i) => (
            <div className="review-row" key={qq.q}>
              <strong>{i + 1}. {qq.q}</strong>
              <p>Your answer: <b className={answers[i] === qq.answer ? 'good' : 'bad'}>{qq.options[answers[i]]}</b>{answers[i] !== qq.answer && <> · Correct answer: <b className="good">{qq.options[qq.answer]}</b></>}</p>
              <p className="muted-note">{qq.explain}</p>
            </div>
          ))}
          <div className="form-row"><button className="btn-primary" onClick={() => startQuiz(active.id)}><RotateCcw size={15} /> Try again</button><button className="outline-btn" onClick={() => setActiveId(null)}>Choose another quiz</button></div>
        </div>
      </>
    )
  }
  if (active) {
    const qq = active.questions[qIndex]
    return (
      <>
        <button className="outline-btn" onClick={() => setActiveId(null)}><ArrowLeft size={15} /> Quit quiz</button>
        <PageHeading eyebrow={active.subject.toUpperCase()} title={active.title} subtitle={`Question ${qIndex + 1} of ${active.questions.length}`} />
        <div className="panel">
          <h3>{qq.q}</h3>
          <div className="quiz-options">
            {qq.options.map((opt, i) => (
              <button key={opt} className={selected === i ? 'quiz-option quiz-option-selected' : 'quiz-option'} onClick={() => choose(i)}>
                <span className="quiz-letter">{String.fromCharCode(65 + i)}</span> {opt}
              </button>
            ))}
          </div>
          <button className="btn-primary" disabled={selected === null} onClick={next}>{qIndex + 1 === active.questions.length ? 'Finish quiz' : 'Next question'} <ChevronRight size={16} /></button>
        </div>
      </>
    )
  }
  return (
    <>
      <PageHeading eyebrow="PRACTICE MAKES PERFECT" title="Quizzes & Tests" subtitle="Practice questions and review your understanding. Your best score is saved." />
      <div className="feature-grid">
        {quizzes.map((q, i) => {
          const rec = records[q.id]
          return (
            <div className="feature-card" key={q.id}>
              <div className="feature-icon"><CircleHelp /></div>
              <div className="eyebrow">{q.subject.toUpperCase()} · QUIZ {String(i + 1).padStart(2, '0')}</div>
              <h3>{q.title}</h3>
              <p>5 multiple-choice questions with answers and explanations at the end.</p>
              <span className="status-label">{rec ? `Best: ${rec.best}% · Attempts: ${rec.attempts}` : 'Not attempted yet'}</span>
              <br /><button className="btn-primary" style={{ marginTop: 12 }} onClick={() => startQuiz(q.id)}><Play size={15} /> Start quiz</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

/* ---------- 3D Learning ---------- */
function PartButtons({ parts, selected, onSelect }: { parts: ModelPart[]; selected: ModelPart | null; onSelect: (p: ModelPart) => void }) {
  return (
    <div className="part-list">
      {parts.map((p) => (
        <button key={p.id} className={selected?.id === p.id ? 'chip chip-active' : 'chip'} onClick={() => onSelect(p)}>{p.label}</button>
      ))}
    </div>
  )
}

function InfoPanel({ part, fallback }: { part: ModelPart | null; fallback: string }) {
  return (
    <div className="info-panel">
      {part ? (<><h3>{part.label}</h3><p>{part.desc}</p></>) : (<><h3>Tap a part</h3><p>{fallback}</p></>)}
    </div>
  )
}

function Models3D() {
  const [tab, setTab] = useState<'cell' | 'heart' | 'molecule' | 'motion'>('cell')
  const [part, setPart] = useState<ModelPart | null>(null)
  const [height, setHeight] = useState(5)
  const fallTime = Math.sqrt((2 * height) / 9.8)
  const finalSpeed = Math.sqrt(2 * 9.8 * height)
  const pick = (p: ModelPart) => setPart(p)
  return (
    <>
      <PageHeading eyebrow="LEARN BY EXPLORING" title="3D Learning" subtitle="Tap the parts of each model to learn what they do — all drawn in the app, no downloads needed." />
      <div className="filter-chips">
        <button className={tab === 'cell' ? 'chip chip-active' : 'chip'} onClick={() => { setTab('cell'); setPart(null) }}>Animal Cell</button>
        <button className={tab === 'heart' ? 'chip chip-active' : 'chip'} onClick={() => { setTab('heart'); setPart(null) }}>Human Heart</button>
        <button className={tab === 'molecule' ? 'chip chip-active' : 'chip'} onClick={() => { setTab('molecule'); setPart(null) }}>Molecule</button>
        <button className={tab === 'motion' ? 'chip chip-active' : 'chip'} onClick={() => { setTab('motion'); setPart(null) }}>Motion and Gravity</button>
      </div>
      {tab === 'cell' && (
        <div className="model-wrap">
          <svg viewBox="0 0 340 240" className="model-svg" role="img" aria-label="Animal cell diagram">
            <ellipse cx="170" cy="120" rx="150" ry="100" fill="#14264d" stroke="#4d8dff" strokeWidth="2" onClick={() => pick(cellParts[3])} style={{ cursor: 'pointer' }} />
            <circle cx="170" cy="115" r="38" fill="#6b4ab5" stroke="#b3a1ff" strokeWidth="2" onClick={() => pick(cellParts[0])} style={{ cursor: 'pointer' }} />
            <text x="170" y="120" textAnchor="middle" fill="#fff" fontSize="11">Nucleus</text>
            <ellipse cx="90" cy="80" rx="26" ry="12" fill="#c77c34" stroke="#f0b070" strokeWidth="1.5" onClick={() => pick(cellParts[1])} style={{ cursor: 'pointer' }} />
            <text x="90" y="84" textAnchor="middle" fill="#fff" fontSize="9">Mitochondria</text>
            <ellipse cx="255" cy="75" rx="26" ry="12" fill="#c77c34" stroke="#f0b070" strokeWidth="1.5" onClick={() => pick(cellParts[1])} style={{ cursor: 'pointer' }} />
            <circle cx="255" cy="165" r="24" fill="#2a9da5" stroke="#7dd8e0" strokeWidth="1.5" onClick={() => pick(cellParts[4])} style={{ cursor: 'pointer' }} />
            <text x="255" y="169" textAnchor="middle" fill="#fff" fontSize="9">Vacuole</text>
            <text x="80" y="190" fill="#9fc9ff" fontSize="11" onClick={() => pick(cellParts[2])} style={{ cursor: 'pointer' }}>Cytoplasm</text>
          </svg>
          <PartButtons parts={cellParts} selected={part} onSelect={pick} />
          <InfoPanel part={part} fallback="Tap the nucleus, mitochondria, vacuole or the cell edge to learn what each part does." />
        </div>
      )}
      {tab === 'heart' && (
        <div className="model-wrap">
          <svg viewBox="0 0 340 240" className="model-svg" role="img" aria-label="Human heart diagram">
            <rect x="70" y="40" width="90" height="70" rx="14" fill="#244b8b" stroke="#71b9ff" strokeWidth="2" onClick={() => pick(heartParts[0])} style={{ cursor: 'pointer' }} />
            <text x="115" y="80" textAnchor="middle" fill="#fff" fontSize="11">Right Atrium</text>
            <rect x="180" y="40" width="90" height="70" rx="14" fill="#7a2e3a" stroke="#ff8a9a" strokeWidth="2" onClick={() => pick(heartParts[2])} style={{ cursor: 'pointer' }} />
            <text x="225" y="80" textAnchor="middle" fill="#fff" fontSize="11">Left Atrium</text>
            <rect x="70" y="130" width="90" height="70" rx="14" fill="#1d3a6e" stroke="#71b9ff" strokeWidth="2" onClick={() => pick(heartParts[1])} style={{ cursor: 'pointer' }} />
            <text x="115" y="170" textAnchor="middle" fill="#fff" fontSize="11">Right Ventricle</text>
            <rect x="180" y="130" width="90" height="70" rx="14" fill="#8b2f3d" stroke="#ff8a9a" strokeWidth="2" onClick={() => pick(heartParts[3])} style={{ cursor: 'pointer' }} />
            <text x="225" y="170" textAnchor="middle" fill="#fff" fontSize="11">Left Ventricle</text>
            <line x1="170" y1="40" x2="170" y2="200" stroke="#9fc9ff" strokeWidth="2" strokeDasharray="5 4" onClick={() => pick(heartParts[4])} style={{ cursor: 'pointer' }} />
            <text x="170" y="225" textAnchor="middle" fill="#9fc9ff" fontSize="10">Valves — tap the centre line</text>
          </svg>
          <PartButtons parts={heartParts} selected={part} onSelect={pick} />
          <InfoPanel part={part} fallback="Tap each chamber to see what it does. Blood flows: body → right atrium → right ventricle → lungs → left atrium → left ventricle → body." />
        </div>
      )}
      {tab === 'molecule' && (
        <div className="model-wrap">
          <svg viewBox="0 0 340 200" className="model-svg" role="img" aria-label="Water molecule diagram">
            <circle cx="170" cy="100" r="42" fill="#d43a3a" stroke="#ff8a8a" strokeWidth="2" onClick={() => pick(moleculeParts[1])} style={{ cursor: 'pointer' }} />
            <text x="170" y="105" textAnchor="middle" fill="#fff" fontSize="16">O</text>
            <circle cx="95" cy="55" r="26" fill="#e8f1ff" stroke="#9fc9ff" strokeWidth="2" onClick={() => pick(moleculeParts[0])} style={{ cursor: 'pointer' }} />
            <text x="95" y="60" textAnchor="middle" fill="#0b1222" fontSize="15">H</text>
            <circle cx="245" cy="55" r="26" fill="#e8f1ff" stroke="#9fc9ff" strokeWidth="2" onClick={() => pick(moleculeParts[0])} style={{ cursor: 'pointer' }} />
            <text x="245" y="60" textAnchor="middle" fill="#0b1222" fontSize="15">H</text>
            <line x1="130" y1="75" x2="150" y2="85" stroke="#9fc9ff" strokeWidth="3" />
            <line x1="210" y1="75" x2="190" y2="85" stroke="#9fc9ff" strokeWidth="3" />
            <text x="170" y="185" textAnchor="middle" fill="#9fc9ff" fontSize="12">Water — H2O: 2 hydrogen + 1 oxygen</text>
          </svg>
          <PartButtons parts={moleculeParts} selected={part} onSelect={pick} />
          <InfoPanel part={part} fallback="Tap the red oxygen atom or a white hydrogen atom. Water is H2O, carbon dioxide is CO2, and oxygen gas is O2 — build them all in Virtual Labs." />
        </div>
      )}
      {tab === 'motion' && (
        <div className="model-wrap">
          <svg viewBox="0 0 340 200" className="model-svg" role="img" aria-label="Falling ball experiment">
            <line x1="20" y1="180" x2="320" y2="180" stroke="#4d8dff" strokeWidth="3" />
            <line x1="170" y1="20" x2="170" y2="180" stroke="#26354d" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="170" cy={180 - height * 14} r="18" fill="#4d8dff" stroke="#b3d0ff" strokeWidth="2" />
            <text x="170" y="195" textAnchor="middle" fill="#9fc9ff" fontSize="11">Ground</text>
          </svg>
          <div className="lab-controls">
            <label>Drop height: <strong>{height} m</strong></label>
            <input type="range" min={1} max={10} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
            <p>Time to fall: <strong>{fallTime.toFixed(2)} seconds</strong> · Speed on landing: <strong>{finalSpeed.toFixed(1)} m/s</strong></p>
            <p className="muted-note">Gravity pulls everything down at 9.8 m/s². Double the height and the speed grows — but not by double. Try it: height 2 m vs 8 m.</p>
          </div>
          <InfoPanel part={part} fallback="Move the slider to change the drop height and watch the fall time and landing speed change. This is gravity in action — the same force that keeps us on the ground." />
        </div>
      )}
    </>
  )
}

/* ---------- Virtual Labs ---------- */
function Labs() {
  const [tab, setTab] = useState<'circuit' | 'cell' | 'molecule'>('circuit')
  const [voltage, setVoltage] = useState(6)
  const [on, setOn] = useState(true)
  const [part, setPart] = useState<ModelPart | null>(null)
  const [atoms, setAtoms] = useState({ H: 0, O: 0, C: 0 })
  const resistance = 10
  const current = on ? voltage / resistance : 0
  const brightness = on ? voltage / 12 : 0
  const moleculeName = (() => {
    const { H, O, C } = atoms
    if (H === 2 && O === 1 && C === 0) return 'Water — H2O'
    if (C === 1 && O === 2 && H === 0) return 'Carbon dioxide — CO2'
    if (O === 2 && H === 0 && C === 0) return 'Oxygen gas — O2'
    if (H === 2 && O === 0 && C === 0) return 'Hydrogen gas — H2'
    if (C === 1 && H === 4 && O === 0) return 'Methane — CH4'
    if (H === 0 && O === 0 && C === 0) return 'No atoms yet — add some below'
    return 'Unknown combination — try 2 H + 1 O for water'
  })()
  const formula = `${atoms.C ? `C${atoms.C > 1 ? atoms.C : ''}` : ''}${atoms.H ? `H${atoms.H > 1 ? atoms.H : ''}` : ''}${atoms.O ? `O${atoms.O > 1 ? atoms.O : ''}` : ''}`
  return (
    <>
      <PageHeading eyebrow="SAFE HANDS-ON SCIENCE" title="Virtual Labs" subtitle="Try real experiments on screen — change the values and watch what happens." />
      <div className="filter-chips">
        <button className={tab === 'circuit' ? 'chip chip-active' : 'chip'} onClick={() => setTab('circuit')}><Zap size={14} /> Circuit Simulator</button>
        <button className={tab === 'cell' ? 'chip chip-active' : 'chip'} onClick={() => setTab('cell')}><Microscope size={14} /> Cell Explorer</button>
        <button className={tab === 'molecule' ? 'chip chip-active' : 'chip'} onClick={() => setTab('molecule')}><Atom size={14} /> Molecule Builder</button>
      </div>
      {tab === 'circuit' && (
        <div className="panel">
          <h3>Circuit simulator</h3>
          <p className="muted-note">A battery, a wire and a bulb. Change the voltage and flip the switch — the bulb brightness and current change with it. Resistance is fixed at 10 Ω.</p>
          <svg viewBox="0 0 340 170" className="model-svg" role="img" aria-label="Circuit diagram">
            <rect x="20" y="60" width="60" height="50" rx="6" fill="#14264d" stroke="#4d8dff" strokeWidth="2" />
            <text x="50" y="90" textAnchor="middle" fill="#fff" fontSize="12">Battery</text>
            <line x1="80" y1="85" x2="140" y2="85" stroke="#9fc9ff" strokeWidth="3" />
            <line x1="200" y1="85" x2="260" y2="85" stroke="#9fc9ff" strokeWidth="3" />
            <line x1="260" y1="85" x2="260" y2="140" stroke="#9fc9ff" strokeWidth="3" />
            <line x1="260" y1="140" x2="50" y2="140" stroke="#9fc9ff" strokeWidth="3" />
            <line x1="50" y1="140" x2="50" y2="110" stroke="#9fc9ff" strokeWidth="3" />
            <circle cx="170" cy="85" r="26" fill={brightness > 0 ? '#ffd94d' : '#26354d'} opacity={0.35 + brightness * 0.65} stroke="#ffd94d" strokeWidth="2" />
            <text x="170" y="90" textAnchor="middle" fill={brightness > 0.5 ? '#0b1222' : '#fff'} fontSize="11">Bulb</text>
            <text x="170" y="160" textAnchor="middle" fill="#9fc9ff" fontSize="11">{on ? 'Switch: ON — current is flowing' : 'Switch: OFF — circuit is broken'}</text>
          </svg>
          <div className="lab-controls">
            <label>Voltage: <strong>{voltage} V</strong></label>
            <input type="range" min={0} max={12} value={voltage} onChange={(e) => setVoltage(Number(e.target.value))} />
            <div className="form-row">
              <button className={on ? 'check-btn done big' : 'check-btn big'} onClick={() => setOn((v) => !v)}>{on ? 'Switch OFF' : 'Switch ON'}</button>
              <span className="status-label">Current: {current.toFixed(2)} A (V ÷ 10 Ω)</span>
              <span className="status-label">Brightness: {Math.round(brightness * 100)}%</span>
            </div>
          </div>
        </div>
      )}
      {tab === 'cell' && (
        <div className="panel">
          <h3>Cell explorer</h3>
          <p className="muted-note">Tap any part of the cell to learn what it does.</p>
          <svg viewBox="0 0 340 240" className="model-svg" role="img" aria-label="Cell explorer diagram">
            <ellipse cx="170" cy="120" rx="150" ry="100" fill="#14264d" stroke="#4d8dff" strokeWidth="2" onClick={() => setPart(cellParts[3])} style={{ cursor: 'pointer' }} />
            <circle cx="170" cy="115" r="38" fill="#6b4ab5" stroke="#b3a1ff" strokeWidth="2" onClick={() => setPart(cellParts[0])} style={{ cursor: 'pointer' }} />
            <text x="170" y="120" textAnchor="middle" fill="#fff" fontSize="11">Nucleus</text>
            <ellipse cx="90" cy="80" rx="26" ry="12" fill="#c77c34" stroke="#f0b070" strokeWidth="1.5" onClick={() => setPart(cellParts[1])} style={{ cursor: 'pointer' }} />
            <text x="90" y="84" textAnchor="middle" fill="#fff" fontSize="9">Mitochondria</text>
            <circle cx="255" cy="165" r="24" fill="#2a9da5" stroke="#7dd8e0" strokeWidth="1.5" onClick={() => setPart(cellParts[4])} style={{ cursor: 'pointer' }} />
            <text x="255" y="169" textAnchor="middle" fill="#fff" fontSize="9">Vacuole</text>
            <text x="80" y="190" fill="#9fc9ff" fontSize="11" onClick={() => setPart(cellParts[2])} style={{ cursor: 'pointer' }}>Cytoplasm</text>
          </svg>
          <PartButtons parts={cellParts} selected={part} onSelect={setPart} />
          <InfoPanel part={part} fallback="Tap the nucleus, mitochondria, vacuole or the cell edge." />
        </div>
      )}
      {tab === 'molecule' && (
        <div className="panel">
          <h3>Molecule builder</h3>
          <p className="muted-note">Add atoms and see which molecule you built. Try 2 hydrogen + 1 oxygen for water, or 1 carbon + 2 oxygen for carbon dioxide.</p>
          <div className="form-row">
            <button className="btn-primary" onClick={() => setAtoms((a) => ({ ...a, H: a.H + 1 }))}>+ Hydrogen (H)</button>
            <button className="btn-primary" onClick={() => setAtoms((a) => ({ ...a, O: a.O + 1 }))}>+ Oxygen (O)</button>
            <button className="btn-primary" onClick={() => setAtoms((a) => ({ ...a, C: a.C + 1 }))}>+ Carbon (C)</button>
            <button className="outline-btn" onClick={() => setAtoms({ H: 0, O: 0, C: 0 })}><RotateCcw size={14} /> Clear</button>
          </div>
          <div className="molecule-result">
            <div><small>ATOMS</small><strong>H: {atoms.H} · O: {atoms.O} · C: {atoms.C}</strong></div>
            <div><small>FORMULA</small><strong>{formula || '—'}</strong></div>
            <div><small>MOLECULE</small><strong>{moleculeName}</strong></div>
          </div>
        </div>
      )}
    </>
  )
}

/* ---------- Progress ---------- */
function Progress() {
  const [completed, setCompleted] = useState<string[]>(() => getCompleted())
  const notes = getNotes()
  const records = getQuizRecords()
  const streak = load<{ last: string; count: number }>('ev_streak', { last: '', count: 0 })
  const chaptersDone = completed.filter((c) => c.startsWith('ch-')).length
  const lecturesDone = completed.filter((c) => c.startsWith('lec-')).length
  const lessonsDone = completed.filter((c) => c.startsWith('lesson:')).length
  const attempts = Object.values(records).reduce((n, r) => n + r.attempts, 0)
  const bestAvg = Object.values(records).length
    ? Math.round(Object.values(records).reduce((n, r) => n + r.best, 0) / Object.values(records).length)
    : 0
  const reset = () => {
    save('ev_completed', [])
    save('ev_streak', { last: '', count: 0 })
    setCompleted([])
  }
  return (
    <>
      <PageHeading eyebrow="YOUR LEARNING JOURNEY" title="My Progress" subtitle="Everything you have completed, in one place — saved on your device." />
      <div className="stats-grid">
        <Stat icon={<BookOpen />} label="Chapters read" value={`${chaptersDone} / ${totalChapters()}`} note="Across all subjects" />
        <Stat icon={<Video />} label="Lectures completed" value={`${lecturesDone} / ${lectures.length}`} note={`${lessonsDone} starter lessons done`} />
        <Stat icon={<CircleHelp />} label="Quiz average (best)" value={attempts ? `${bestAvg}%` : '—'} note={`${attempts} quiz attempts`} />
        <Stat icon={<NotebookPen />} label="Notes written" value={`${notes.length}`} note={`Study streak: ${streak.count} day${streak.count === 1 ? '' : 's'}`} />
      </div>
      <div className="panel" style={{ marginTop: 16 }}>
        <div className="panel-heading"><div><h3>Progress by subject</h3><p>Chapters read in each subject</p></div><span className="status-label">Streak: {streak.count} day{streak.count === 1 ? '' : 's'}{streak.last ? ` · last active ${streak.last}` : ''}</span></div>
        {subjects.map((s) => {
          const list = chapters[s.name] || []
          const done = list.filter((c) => completed.includes(`ch-${c.id}`)).length
          const pct = list.length ? Math.round((done / list.length) * 100) : 0
          return (
            <div className="subject-progress" key={s.name}>
              <div className="subject-progress-head"><strong>{s.name}</strong><span>{done} / {list.length} · {pct}%</span></div>
              <div className="progress-track"><div style={{ width: `${pct}%` }} /></div>
            </div>
          )
        })}
        <div className="form-row" style={{ marginTop: 16 }}>
          <button className="outline-btn danger" onClick={reset}><RotateCcw size={14} /> Reset all progress</button>
          <span className="muted-note">Reset clears completed lessons, chapters and your streak — notes and quiz scores stay.</span>
        </div>
      </div>
    </>
  )
}

/* ---------- Admin ---------- */
function Admin() {
  const [subject, setSubject] = useState(subjects[0].name)
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [custom, setCustom] = useState<CustomLesson[]>(() => getCustomLessons())
  const [savedMsg, setSavedMsg] = useState('')
  const notes = getNotes()
  const records = getQuizRecords()
  const attempts = Object.values(records).reduce((n, r) => n + r.attempts, 0)
  const addLesson = () => {
    if (!title.trim() || !summary.trim()) return
    const item: CustomLesson = { id: `custom-${Date.now()}`, subject, title: title.trim(), summary: summary.trim() }
    const next = [...custom, item]
    setCustom(next)
    save('ev_custom_lessons', next)
    setTitle('')
    setSummary('')
    setSavedMsg(`Saved! “${item.title}” now appears in the Library under ${subject}.`)
    touchStreak()
  }
  const deleteLesson = (id: string) => {
    const next = custom.filter((c) => c.id !== id)
    setCustom(next)
    save('ev_custom_lessons', next)
  }
  return (
    <>
      <PageHeading eyebrow="CONTENT CONTROL CENTER" title="Admin Preview" subtitle="A real overview of the app content — add a lesson and it appears in the Library." />
      <div className="stats-grid">
        <Stat icon={<BookOpen />} label="Subjects" value={`${subjects.length}`} note={`${totalChapters()} chapters`} />
        <Stat icon={<Video />} label="Lectures" value={`${lectures.length}`} note={`${quizzes.length} quizzes · ${quizzes.reduce((n, q) => n + q.questions.length, 0)} questions`} />
        <Stat icon={<NotebookPen />} label="Student notes" value={`${notes.length}`} note={`${attempts} quiz attempts`} />
        <Stat icon={<ShieldCheck />} label="Admin lessons" value={`${custom.length}`} note="Added by you, saved on device" />
      </div>
      <div className="panel" style={{ marginTop: 16 }}>
        <div className="panel-heading"><div><h3>Add a lesson</h3><p>It will appear in the Textbook Library under the subject you choose.</p></div></div>
        <div className="form-row"><input className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Lesson title" /><select className="select" value={subject} onChange={(e) => setSubject(e.target.value)}>{subjects.map((s) => <option key={s.name}>{s.name}</option>)}</select></div>
        <textarea className="textarea" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Short summary of the lesson..." rows={3} />
        <button className="btn-primary" onClick={addLesson}><Plus size={15} /> Add lesson</button>
        {savedMsg && <p className="good" style={{ marginTop: 10 }}>{savedMsg}</p>}
      </div>
      {custom.length > 0 && (
        <div className="panel" style={{ marginTop: 16 }}>
          <div className="panel-heading"><div><h3>Lessons you added</h3><p>{custom.length} lesson(s)</p></div></div>
          {custom.map((c) => (
            <div className="chapter-row" key={c.id}>
              <div><strong>{c.title}</strong><p>{c.subject} — {c.summary}</p></div>
              <button className="outline-btn danger" onClick={() => deleteLesson(c.id)}><Trash2 size={14} /> Delete</button>
            </div>
          ))}
        </div>
      )}
      <div className="panel admin-note" style={{ marginTop: 16 }}><ShieldCheck /><div><h3>Admin access is local only</h3><p>This admin area works on this device only. Real logins, student accounts and a shared database would need a secure backend (Supabase) — nothing here is a real login.</p></div></div>
      <div className="panel" style={{ marginTop: 16, display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <LogIn size={18} /><div><strong>Accounts are not real yet</strong><p className="muted-note" style={{ margin: 0 }}>Student Account in the sidebar is a local profile. Real sign-in needs a backend.</p></div>
        <MessageCircle size={18} /><div><strong>About the AI Teacher</strong><p className="muted-note" style={{ margin: 0 }}>AI Teacher uses a built-in lesson library, not live GPT.</p></div>
      </div>
    </>
  )
}

export default App
