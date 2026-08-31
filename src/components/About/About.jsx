import { Container } from '../common/Container'

export const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Sobre Mim
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Sou estudante de Ciência da Computação na{' '}
            <strong className="text-gray-900 dark:text-white">UTFPR</strong>{' '}
            (Campo Mourão - PR) e Técnico em Informática para Internet pelo{' '}
            <strong className="text-gray-900 dark:text-white">IEMA</strong>.
          </p>
          <p>
            Tenho experiência prévia em suporte de redes e infraestrutura
            (FTTH, Linux, roteamento), o que me deu uma base sólida em
            ambientes de produção antes de migrar para o desenvolvimento
            full-stack.
          </p>
          <p>
            Tenho familiaridade com Docker, PostgreSQL/MySQL e
            desenvolvimento mobile com Flutter, unindo conhecimento de
            infraestrutura ao desenvolvimento de software.
          </p>
        </div>
      </Container>
    </section>
  )
}
