import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Hero />
          <About />
          <Projects />
          <Skills />
          {/* Contato e Footer entram aqui */}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
