import { useContactForm } from '../../hooks/useContactForm'
import { Button } from '../common/Button'
import { Container } from '../common/Container'

export const Contact = () => {
  const { formData, handleChange, handleSubmit, loading, success, error } = useContactForm()

  return (
    <section id="contato" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Entre em Contato
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Tem uma oportunidade? Quer discutir um projeto? Me envie uma mensagem!
        </p>

        <div className="max-w-2xl mx-auto">
          {success && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
              ✓ Mensagem enviada com sucesso! Vou responder em breve.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Nome
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                minLength="3"
                maxLength="100"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="João Silva"
              />
              {error?.name && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-1">{error.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="joao@example.com"
              />
              {error?.email && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-1">{error.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minLength="10"
                maxLength="1000"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Sua mensagem aqui..."
              />
              {error?.message && (
                <p className="text-red-600 dark:text-red-400 text-sm mt-1">{error.message}</p>
              )}
            </div>

            {error?.general && (
              <div className="p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                {error.general}
              </div>
            )}

            <Button type="submit" disabled={loading} loading={loading} variant="primary" size="lg" className="w-full">
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>

          <p className="text-center text-gray-600 dark:text-gray-400 mt-8 text-sm">
            Ou envie direto para:{' '}
            <a
              href="mailto:alexmagalhaesjr15@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              alexmagalhaesjr15@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}
