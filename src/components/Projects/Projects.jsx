import { Container } from '../common/Container'
import { ProjectCard } from './ProjectCard'

const PROJECTS = [
  {
    id: 'doautf',
    title: 'DoaUTF',
    description:
      'Plataforma de doações mobile com agendamento e logística. Aplicação Flutter + API Node.js com autenticação, painel administrativo e sistema de avaliações.',
    longDescription:
      'Projeto full-stack desenvolvido para UTFPR. Mobile em Flutter/Dart integrado a API RESTful em Node.js/Express. Responsável por: autenticação JWT, lógica de agendamento, fluxo de entrega, sistema de avaliações e painel administrativo.',
    image: '/images/doautf.png',
    tags: ['Flutter', 'Dart', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    links: {
      github: 'https://github.com/seu-usuario/doautf',
      demo: null,
    },
    featured: true,
  },
  {
    id: 'gerador-senhas',
    title: 'Gerador de Senhas Seguro',
    description:
      'Aplicação web para gerar senhas seguras com indicador de força e Dark Mode persistente.',
    image: '/images/gerador-senhas.png',
    tags: ['JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/seu-usuario/gerador-senhas',
      demo: null,
    },
    featured: false,
  },
]

export const Projects = () => {
  const featuredProject = PROJECTS.find((project) => project.featured)
  const otherProjects = PROJECTS.filter((project) => !project.featured)

  return (
    <section id="projetos" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Meus Projetos
        </h2>

        <div className="space-y-8">
          {featuredProject && (
            <div className="max-w-3xl mx-auto">
              <ProjectCard project={featuredProject} />
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
