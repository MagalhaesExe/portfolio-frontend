import { Github, Linkedin, Mail } from 'lucide-react'
import { Container } from '../common/Container'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/MagalhaesExe' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/alexmagalhaesjr' },
    { icon: Mail, label: 'Email', url: 'mailto:alexmagalhaesjr15@gmail.com' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#sobre" className="hover:text-white transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projetos" className="hover:text-white transition">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#habilidades" className="hover:text-white transition">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tech Stack</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Desenvolvido com React + Vite</li>
              <li>Tailwind CSS</li>
              <li>Design by Alex Magalhães</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Alex Magalhães. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
