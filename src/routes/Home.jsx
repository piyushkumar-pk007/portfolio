import About from '../components/About'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ProjectsGrid from '../components/ProjectsGrid'
import Skills from '../components/Skills'

function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectsGrid />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
