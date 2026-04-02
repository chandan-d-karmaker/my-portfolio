import './App.css'
import AbooutMe from './components/AbooutMe'
import Hero from './components/hero'
import Projects from './components/Projects/Projects'
import Skills from './components/skills'
import TopNavBar from './components/TopNavBar'

const projectPromise = async()=>{
  const response = await fetch('/projects.json')
  const projects = await response.json()
  return projects;
}

const projects = projectPromise();


function App() {

  return (
    <>
      <TopNavBar/>
      <Hero/>
      <Projects projects={projects} />
      <Skills/>
      <AbooutMe/>
    
    </>
  )
}

export default App
