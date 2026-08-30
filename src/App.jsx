import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Header, Hero, Sobre, Projetos, Habilidades, Contato e Footer entram aqui */}
      </div>
    </ThemeProvider>
  )
}

export default App
