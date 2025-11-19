import './App.css'
import NavBar from './components/NavBar'

import Landing from './components/Landing'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './Footer'
import Skills from './components/Skills'


function App() {
  

  return (
    <main className='bg-white'>
      
      <NavBar/>
      <Landing/>
      <About/>
      <Skills/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </main>
  )
}

export default App
