import { useState } from 'react'
import './App.css'
import AbooutMe from './components/AbooutMe'
import ContactMe from './components/ContactMe'
import Footer from './components/footer'
import Hero from './components/hero'
import Projects from './components/Projects/Projects'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/skills'
import TopNavBar from './components/TopNavBar'
import ProgressScrollBar from './components/ProgressScrollBar'

const projectPromise = async()=>{
  const response = await fetch('/projects.json')
  const projects = await response.json()
  return projects;
}

const projects = projectPromise();



function App() {

  const [showFact, setShowFact] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (

    
    <>
      <ProgressScrollBar />
      <TopNavBar showForm={showForm} setShowForm={setShowForm}/>
      <Hero showForm={showForm} setShowForm={setShowForm} />
      <Projects projects={projects} />
      <Skills/>
      <AbooutMe setShowFact={setShowFact} showFact={showFact}/>
      <ContactMe showForm={showForm} setShowForm={setShowForm} />
      <Footer/>
      <ScrollToTop/>
    
    </>
  )
}

export default App
