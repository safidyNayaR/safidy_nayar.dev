import './App.css'

import ParticlesComponent from './components/particles'

import Nav from './pages/nav'
import Hero from './pages/hero'
import Apropos from './pages/Apropos'
import Competences from './pages/competences'
import Projet from './pages/projets'
import Footer from './pages/footer'


function App() {
  return (
    <div className='app'>
      <ParticlesComponent id="particles" />
      <Nav />
      <Hero />
      <Apropos />
      <Competences />
      <Projet />
      <Footer />
    </div>
  )
}

export default App
