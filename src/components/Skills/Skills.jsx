import { Container } from '../common/Container'
import { SkillCategory } from './SkillCategory'

const SKILLS = [
  {
    category: 'Frontend',
    items: [
      'React',
      'Vue.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Vite',
      'Responsive Design',
    ],
  },
  {
    category: 'Mobile',
    items: ['Flutter', 'Dart'],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'SQLAlchemy',
      'REST APIs',
      'Nodemailer',
      'Python',
    ],
  },
  {
    category: 'Sistemas & Kernel',
    items: ['C', 'C++', 'Linux'],
  },
  {
    category: 'Banco de Dados',
    items: [
      'PostgreSQL',
      'MySQL',
      'Queries SQL',
      'Design relacional',
    ],
  },
  {
    category: 'Redes & Infraestrutura',
    items: ['FTTH', 'Roteamento'],
  },
  {
    category: 'Ferramentas & DevOps',
    items: ['Docker', 'Git/GitHub', 'Nginx', 'Vercel'],
  },
]

export const Skills = () => {
  return (
    <section id="habilidades" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map(({ category, items }) => (
            <SkillCategory key={category} category={category} items={items} />
          ))}
        </div>
      </Container>
    </section>
  )
}
