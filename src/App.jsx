import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/Header/Header'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          {/* Hero, Sobre, Projetos, Habilidades, Contato e Footer entram aqui */}
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
