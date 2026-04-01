import './App.css'
import Hero from './components/hero'
import Projects from './components/Projects/Projects'
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
    
    </>
  )
}

export default App
