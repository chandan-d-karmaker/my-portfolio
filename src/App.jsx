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

const projectPromise = async()=>{
  const response = await fetch('/projects.json')
  const projects = await response.json()
  return projects;
}

const projects = projectPromise();



function App() {

  const [showFact, setShowFact] = useState(false);
  

  return (

    
    <>
      <TopNavBar/>
      <Hero setShowFact={setShowFact} showFact={showFact}/>
      <Projects projects={projects} />
      <Skills/>
      <AbooutMe setShowFact={setShowFact} showFact={showFact}/>
      <ContactMe  />
      <Footer/>
      <ScrollToTop/>
    
    </>
  )
}

export default App
