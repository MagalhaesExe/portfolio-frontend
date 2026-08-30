import { Container } from '../common/Container'

export const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Sobre Mim
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
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

          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-600 text-sm">
              Foto / Avatar
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
