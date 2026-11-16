import { useState } from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import {
  Atom, BookOpen, BrainCircuit, ChartNoAxesColumnIncreasing, FlaskConical,
  GraduationCap, LayoutDashboard, Menu, NotebookPen, Search, Settings,
  ShieldCheck, Sparkles, Video, X, ChevronRight, Play, Clock3, Bell,
  Microscope, MessageCircle, Send, CircleHelp, LogIn, UserPlus
} from 'lucide-react'
import { boards, lessons, subjects } from './data'

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
  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <div className="brand-mark"><GraduationCap size={23} /></div>
          <div><strong>EduVerse <span>AI</span></strong><small>LEARN WITHOUT LIMITS</small></div>
          <button className="icon-btn close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
        </div>
        <div className="side-label">LEARNING SPACE</div>
        <nav>{navItems.map(item => {
          const Icon = item.icon
          return <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setMenuOpen(false)} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}><Icon size={18} /><span>{item.label}</span>{item.to === '/teacher' && <i className="new-dot" />}</NavLink>
        })}</nav>
        <div className="sidebar-bottom">
          <div className="help-card"><Sparkles size={17}/><strong>Keep exploring</strong><p>Small steps every day lead to big discoveries.</p></div>
          <div className="profile-mini"><div className="avatar">S</div><div><strong>Student Account</strong><small>Learning profile</small></div><Settings size={17} /></div>
        </div>
      </aside>
      {menuOpen && <button className="scrim" onClick={() => setMenuOpen(false)} aria-label="Close navigation" />}
      <main className="main-area">
        <header className="topbar">
          <button className="icon-btn menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
          <div className="breadcrumb">Learning Space <ChevronRight size={14}/> <span>EduVerse AI</span></div>
          <div className="top-actions">
            <label className="search-box"><Search size={16}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search lessons..." /></label>
            <button className="icon-btn notification" aria-label="Notifications"><Bell size={18}/><i /></button>
            <div className="avatar top-avatar">S</div>
          </div>
        </header>
        <div className="page-wrap">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/library" element={<Library />} />
            <Route path="/lectures" element={<SimplePage title="Video Lectures" subtitle="Watch lessons organized by subject and chapter." icon={<Video/>} items={['Biology chapter lectures','Physics concept lessons','Chemistry topic explanations']} />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/notes" element={<SimplePage title="My Notes" subtitle="Create, organize and revise your learning notes." icon={<NotebookPen/>} items={['Chapter summaries','Important definitions','Short and long questions','Revision notes']} />} />
            <Route path="/quizzes" element={<SimplePage title="Quizzes & Tests" subtitle="Practice questions and review your understanding." icon={<CircleHelp/>} items={['Chapter-wise MCQs','Timed practice quiz','Board-pattern test']} />} />
            <Route path="/3d-learning" element={<SimplePage title="3D Learning" subtitle="Explore concepts through interactive visual models." icon={<Atom/>} items={['Human heart model','Cell structure explorer','Molecular structure','Motion and gravity']} />} />
            <Route path="/labs" element={<SimplePage title="Virtual Labs" subtitle="Explore safe, guided educational simulations." icon={<FlaskConical/>} items={['Biology: Cell explorer','Physics: Circuit simulator','Chemistry: Molecule builder']} />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<Dashboard />} />
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

function Dashboard() {
  const navigate = useNavigate()
  return <>
    <section className="hero">
      <div className="hero-content"><div className="eyebrow light"><Sparkles size={14}/> YOUR LEARNING UNIVERSE</div><h1>Learn beyond<br/><span>the textbook.</span></h1><p>Explore ideas, understand difficult concepts and discover a more visual way to learn.</p><div className="hero-actions"><button className="btn-primary" onClick={() => navigate('/library')}>Explore learning <ChevronRight size={17}/></button><button className="btn-ghost" onClick={() => navigate('/teacher')}><BrainCircuit size={17}/> Meet AI Teacher</button></div></div>
      <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="planet"><Atom size={70}/></div><div className="float-card float-top"><Microscope size={17}/> Discover science</div><div className="float-card float-bottom"><Sparkles size={17}/> Learn by exploring</div></div>
      <div className="hero-glow"/>
    </section>
    <div className="section-head"><div><div className="eyebrow">YOUR WORKSPACE</div><h2>Welcome back, learner</h2><p>Pick up where you left off or explore something new.</p></div><div className="board-pill"> <GraduationCap size={16}/> Select your board</div></div>
    <div className="stats-grid">
      <Stat icon={<BookOpen/>} label="Lessons available" value="Explore" note="Across subjects"/>
      <Stat icon={<ChartNoAxesColumnIncreasing/>} label="Learning progress" value="Getting started" note="Your journey begins here"/>
      <Stat icon={<NotebookPen/>} label="Saved notes" value="0" note="Your study library"/>
      <Stat icon={<CircleHelp/>} label="Quiz practice" value="Ready" note="Build your confidence"/>
    </div>
    <div className="content-grid">
      <section className="panel subjects-panel"><div className="panel-heading"><div><h3>Explore subjects</h3><p>Choose a subject to begin</p></div><button className="text-btn" onClick={() => navigate('/library')}>View library <ChevronRight size={15}/></button></div><div className="subject-grid">{subjects.map(s => <button className="subject-card" key={s.name} onClick={() => navigate('/library')}><div className={`subject-icon ${s.color}`}>{s.icon}</div><strong>{s.name}</strong><small>{s.detail}</small><ChevronRight className="subject-arrow" size={16}/></button>)}</div></section>
      <section className="panel continue-panel"><div className="panel-heading"><div><h3>Continue learning</h3><p>Pick up a topic</p></div><BookOpen size={19} className="muted-icon"/></div>{lessons.map((l) => <div className="lesson-row" key={l.title}><div className="lesson-play"><Play size={15} fill="currentColor"/></div><div className="lesson-info"><strong>{l.title}</strong><small>{l.subject} · {l.duration}</small><div className="progress-track"><div style={{width:`${l.progress}%`}}/></div></div><span className="lesson-percent">{l.progress}%</span></div>)}</section>
    </div>
    <section className="wide-cta"><div className="cta-icon"><BrainCircuit size={25}/></div><div><strong>Have a question? Ask your AI Teacher.</strong><p>Get a concept explained in simple steps.</p></div><button className="btn-primary" onClick={() => navigate('/teacher')}>Ask a question <ChevronRight size={16}/></button></section>
  </>
}
function Stat({icon,label,value,note}:{icon:React.ReactNode;label:string;value:string;note:string}) { return <div className="stat-card"><div className="stat-top">{icon}<span>{label}</span></div><strong>{value}</strong><small>{note}</small></div> }

function Library() {
  const [board,setBoard] = useState(boards[0])
  return <><PageHeading eyebrow="YOUR DIGITAL BOOKSHELF" title="Textbook Library" subtitle="Find books and learning material organized for your education board."/><div className="filter-row"><label>Education board</label><select value={board} onChange={e=>setBoard(e.target.value)}>{boards.map(b=><option key={b}>{b}</option>)}</select><span className="muted-note">Showing starter content for {board}</span></div><div className="subject-grid library-grid">{subjects.map((s,i)=><div className="book-card" key={s.name}><div className={`book-cover cover-${i%4}`}><BookOpen size={34}/><span>{s.name}</span></div><div className="book-meta"><small>{board}</small><h3>{s.name}</h3><p>Textbook and chapter resources will appear here when added by an administrator.</p><button className="outline-btn">View chapters <ChevronRight size={15}/></button></div></div>)}</div></>
}

function Teacher() {
  const [messages,setMessages] = useState([{from:'ai',text:'Hello! I’m your EduVerse AI Teacher. Ask me a question about a school subject and I’ll help explain the concept. This starter version uses demo replies.'}])
  const [value,setValue] = useState('')
  const send = () => { if(!value.trim()) return; const q=value.trim(); setMessages(m=>[...m,{from:'you',text:q},{from:'ai',text:`Thanks for your question: “${q}”\\n\\nThe live AI connection is not configured yet. Once a secure AI backend is connected, I can provide chapter-aware explanations, examples and step-by-step help.`}]); setValue('') }
  return <><PageHeading eyebrow="YOUR PERSONAL STUDY ASSISTANT" title="AI Teacher" subtitle="Ask questions, explore concepts and get help with your studies."/><div className="chat-panel"><div className="chat-top"><div className="ai-avatar"><BrainCircuit/></div><div><strong>EduVerse AI Teacher</strong><small><i className="online-dot"/> Demo mode · AI connection pending</small></div></div><div className="chat-messages">{messages.map((m,i)=><div key={i} className={`message ${m.from==='you'?'mine':''}`}><div className="message-avatar">{m.from==='ai'?<Sparkles size={15}/>: 'S'}</div><p>{m.text}</p></div>)}</div><div className="chat-compose"><input value={value} onChange={e=>setValue(e.target.value)} onKeyDown={e=>e.key==='Enter'&&send()} placeholder="Ask a question about your lesson..."/><button className="send-btn" onClick={send} aria-label="Send message"><Send size={18}/></button></div><small className="demo-warning">Demo interface only. Connect a secure AI service to enable real AI answers.</small></div></>
}

function SimplePage({title,subtitle,icon,items}:{title:string;subtitle:string;icon:React.ReactNode;items:string[]}) {
  return <><PageHeading eyebrow="EXPLORE EDUVERSE" title={title} subtitle={subtitle}/><div className="feature-grid">{items.map((item,i)=><div className="feature-card" key={item}><div className="feature-icon">{icon}</div><div className="eyebrow">LEARNING MODULE {String(i+1).padStart(2,'0')}</div><h3>{item}</h3><p>This module is prepared for content integration. Add approved lessons and resources through the admin system.</p><span className="status-label">Setup starter</span></div>)}</div></>
}
function Progress(){return <><PageHeading eyebrow="YOUR LEARNING JOURNEY" title="My Progress" subtitle="Your activity and achievements will appear here as you learn."/><div className="panel empty-panel"><ChartNoAxesColumnIncreasing size={36}/><h3>Your progress starts here</h3><p>Complete lessons and quizzes to build your learning history.</p></div></>}
function Admin(){return <><PageHeading eyebrow="CONTENT CONTROL CENTER" title="Admin Preview" subtitle="A starter overview of the content management area."/><div className="stats-grid"><Stat icon={<UserPlus/>} label="Registered students" value="—" note="Connect Supabase to load data"/><Stat icon={<BookOpen/>} label="Textbooks" value="—" note="Add board content"/><Stat icon={<Video/>} label="Lectures" value="—" note="Manage video links"/><Stat icon={<ShieldCheck/>} label="Security" value="Review" note="Configure admin permissions"/></div><div className="panel admin-note"><ShieldCheck/><div><h3>Admin access is not enabled</h3><p>This is a visual preview only. Add verified admin authentication and database policies before allowing content changes.</p></div></div></>}
export default App
