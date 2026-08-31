import { Github, Linkedin, Download } from 'lucide-react'
import { Container } from '../common/Container'
import { Button } from '../common/Button'

export const Hero = () => {
  const handleScrollToProjects = () => {
    document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="py-20 md:py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white dark:from-slate-950 dark:to-black"
    >
      <Container>
        <div className="text-center space-y-6">
          <img
            src="/images/alex-magalhaes.jpeg"
            alt="Alex Magalhães"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto border-4 border-slate-700 dark:border-slate-800"
          />
          <h1 className="text-4xl md:text-6xl font-bold">
            Olá, sou Alex Magalhães
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Desenvolvedor Full-Stack | Ciência da Computação (UTFPR)
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="primary" size="lg" onClick={handleScrollToProjects}>
              Ver meus projetos
            </Button>
            <a href="/CurriculoAlexMagalhaesDevFull.pdf" download>
              <Button variant="outline" size="lg" className="!text-white !border-gray-400 hover:!bg-white/10">
                <Download size={18} />
                Baixar CV
              </Button>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 pt-4">
            <a
              href="https://github.com/MagalhaesExe"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/alexmagalhaesjr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
