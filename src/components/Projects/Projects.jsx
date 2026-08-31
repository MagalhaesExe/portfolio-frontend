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
    tags: ['Flutter', 'Dart', 'Node.js', 'Express', 'PostgreSQL', 'REST API'],
    links: {
      github: 'https://github.com/Dev-movel',
      demo: null,
    },
    featured: true,
  },
  {
    id: 'cryptochannel',
    title: 'CryptoChannel - Módulo de Kernel Linux',
    description:
      'Character device driver em C com criptografia XOR transparente e interface via /proc. Projeto em dupla com Gabriel Pereira.',
    longDescription:
      'Ecossistema de IPC mediado pelo Kernel Linux: módulo (cryptochannel_dev.ko) que cria um dispositivo de caractere em /dev/cryptochannel com criptografia simétrica XOR, exclusão mútua via mutex para segurança em concorrência, protocolo de mensagens fixas de 64 bytes e monitoramento de estatísticas via /proc. Inclui programas de espaço de usuário (produtor/consumidor) e script de teste de estresse. Desenvolvido em dupla com Gabriel Pereira.',
    tags: ['C', 'Linux', 'Kernel', 'IPC', 'Criptografia', 'Mutex'],
    links: {
      github: 'https://github.com/MagalhaesExe/linux-cryptochannel-module.git',
      demo: null,
    },
    featured: true,
  },
  {
    id: 'ans-dashboard',
    title: 'Dashboard Analítico de Operadoras de Saúde (ANS)',
    description:
      'Dashboard fullstack para análise de despesas de operadoras de planos de saúde com dados abertos da ANS. Vue.js + FastAPI + PostgreSQL, com pipeline de ETL próprio.',
    longDescription:
      'Aplicação fullstack para visualização e busca de dados públicos de Operadoras de Planos de Saúde (ANS). Pipeline de ETL com processamento incremental (evita estouro de memória em arquivos históricos), validação híbrida de CNPJ/Registro ANS, deduplicação e enriquecimento via merge com dataset cadastral. Modelagem de banco desnormalizada para performance de leitura (DECIMAL para valores monetários, evitando erros de arredondamento). Backend em FastAPI com paginação e busca server-side; frontend em Vue 3 com Composition API e Chart.js para visualização. Ambiente containerizado com Docker Compose.',
    tags: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'ETL'],
    links: {
      github: 'https://github.com/MagalhaesExe/teste-intuitive-care.git',
      demo: null,
    },
    featured: true,
  },
  {
    id: 'sinuca-magalhaes',
    title: 'Sinuca Magalhães - Gestão de Finanças',
    description:
      'Sistema de gestão financeira com geração automatizada de talões de consumo em PDF. React + FastAPI + SQLAlchemy, containerizado com Docker.',
    tags: ['React', 'Vite', 'FastAPI', 'SQLAlchemy', 'Nginx', 'Docker'],
    links: {
      github: 'https://github.com/MagalhaesExe/gestao_sinuca.git',
      demo: null,
    },
    featured: false,
  },
  {
    id: 'gerador-senhas',
    title: 'Gerador de Senhas Seguro',
    description:
      'Aplicação web para gerar senhas seguras com indicador de força e Dark Mode persistente.',
    tags: ['JavaScript', 'HTML/CSS', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/MagalhaesExe/Password_generator.git',
      demo: null,
    },
    featured: false,
  },
  {
    id: 'curso-javascript',
    title: 'Curso de JavaScript',
    description:
      'Repositório de estudos do curso de JavaScript iniciante ao avançado, da plataforma Dev Samurai.',
    tags: ['JavaScript'],
    links: {
      github: 'https://github.com/MagalhaesExe/Curso_JavaScript.git',
      demo: null,
    },
    featured: false,
  },
]

export const Projects = () => {
  const featuredProjects = PROJECTS.filter((project) => project.featured)
  const otherProjects = PROJECTS.filter((project) => !project.featured)

  return (
    <section id="projetos" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Meus Projetos
        </h2>

        <div className="space-y-8">
          {featuredProjects.length > 0 && (
            <div className="space-y-8 max-w-3xl mx-auto">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
