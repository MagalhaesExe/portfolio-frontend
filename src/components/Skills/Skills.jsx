import { Container } from '../common/Container'
import { SkillCategory } from './SkillCategory'

const SKILLS = [
  {
    category: 'Frontend',
    items: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
      'Tailwind CSS',
      'Vite',
      'Responsive Design',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Autenticação JWT',
      'PostgreSQL',
      'MySQL',
      'Nodemailer',
    ],
  },
  {
    category: 'Banco de Dados',
    items: ['PostgreSQL', 'MySQL', 'Queries SQL', 'Design relacional'],
  },
  {
    category: 'Ferramentas & DevOps',
    items: [
      'Docker',
      'Git/GitHub',
      'Linux',
      'FTTH',
      'Roteamento',
      'Vercel',
      'Render/Railway',
    ],
  },
]

export const Skills = () => {
  return (
    <section id="habilidades" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Habilidades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {SKILLS.map(({ category, items }) => (
            <SkillCategory key={category} category={category} items={items} />
          ))}
        </div>
      </Container>
    </section>
  )
}
