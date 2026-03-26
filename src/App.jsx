import './App.css'
import HeroSection from './components/hero'
import MobileMenu from './components/MobileMenu'
import SideNavbar from './components/SideNavbar'
import TopNav from './components/TopNavBar'


function App() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <SideNavbar/>
      <TopNav/>
      <HeroSection/>
    </>
  )
}

export default App
