# Guia de Desenvolvimento - Portfolio Frontend

## Contexto do Projeto

**Desenvolvedor**: Alex Magalhães da Silva Junior
**Objetivo**: Portfolio Full-Stack para vagas de Estágio/Júnior em Desenvolvimento Full-Stack
**Stack**: React + Vite + Tailwind CSS + Lucide Icons

## Perfil & Diferencial

- Estudante de Ciência da Computação na UTFPR (Campo Mourão - PR)
- Técnico em Informática para Internet pelo IEMA
- Experiência prévia em Suporte de Redes/Infraestrutura (FTTH, Linux, roteamento)
- Familiaridade com Docker, PostgreSQL/MySQL e desenvolvimento mobile com Flutter

## Arquitetura do Projeto

```
portfolio-frontend/
├── src/
│   ├── components/
│   │   ├── Header/          (Navegação + Toggle tema)
│   │   ├── Hero/            (Apresentação, CTA)
│   │   ├── Projects/        (Grid de projetos com case study DoaUTF)
│   │   ├── Skills/          (Grid interativo: Front-end, Back-end, BD, DevOps)
│   │   ├── Contact/         (Formulário integrado à API)
│   │   └── common/          (Botões, cards reutilizáveis)
│   ├── pages/               (Layouts de página)
│   ├── context/             (ThemeContext, ContactFormContext)
│   ├── services/            (axios instance + chamadas à API)
│   ├── hooks/               (Custom hooks)
│   ├── utils/               (Funções utilitárias)
│   ├── styles/              (CSS global)
│   ├── App.jsx
│   └── main.jsx
├── public/
├── .env.example
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Seções Obrigatórias do Site

1. **Header**
   - Navegação responsiva (links: Sobre, Projetos, Habilidades, Contato)
   - Toggle Dark/Light Mode (salvar em Context)
   - Logo ou nome
   - Menu mobile (hambúrguer em telas pequenas)

2. **Hero Section**
   - Apresentação: "Olá, sou Alex..."
   - CTA principal: "Ver meus projetos"
   - Links sociais (GitHub, LinkedIn)
   - Botão para baixar currículo (PDF)

3. **Sobre Mim**
   - Resumo da trajetória (UTFPR + IEMA)
   - Experiência com infraestrutura (FTTH, Linux, Docker)
   - Diferencial claro

4. **Seção de Projetos**
   - Grid de 2-3 projetos principais
   - **DoaUTF**: Case study detalhado
     - Descrição: App mobile (Flutter) + API (Node.js)
     - Responsabilidades: Autenticação, agendamento, logística, avaliações, admin
     - Stack: Flutter/Dart, Node.js/Express, PostgreSQL
     - Links: GitHub, Demo (se houver)
   - **Gerador de Senhas Seguro**: 
     - Descrição: Web app JavaScript puro + Dark Mode
     - Features: Indicador de força, LocalStorage
     - Stack: HTML/CSS/JavaScript puro
   - Cards com imagens, descrição, tags de tecnologia, links

5. **Habilidades**
   - Grid interativo dividido por categoria:
     - **Front-end**: React, JavaScript, HTML/CSS, Tailwind, Lucide
     - **Back-end**: Node.js, Express, REST APIs
     - **Banco de Dados**: PostgreSQL, MySQL
     - **Ferramentas/DevOps**: Docker, Git, Linux, Vercel, Render

6. **Contato**
   - Formulário (nome, email, mensagem)
   - Integração com API Node.js (POST /api/contact)
   - Feedback visual (loading, sucesso, erro)
   - Links sociais (GitHub, LinkedIn, Email)

## Padrões de Código

### Componentes React

- **Funcional com Hooks**: `useState`, `useContext`, `useEffect`
- **Componentes bem divididos**: Máximo ~200 linhas por componente
- **Props tipadas** (via PropTypes ou JSDoc)
- **Nomes descritivos**: `ProjectCard`, `SkillGrid`, não `Card`, `Grid`

```javascript
// Exemplo
export const ProjectCard = ({ title, description, image, tags, links }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      {/* ... */}
    </div>
  )
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.shape({
    github: PropTypes.string,
    demo: PropTypes.string,
  }),
}
```

### Estilo com Tailwind

- **Mobile-first**: Começar com estilos mobile, usar `md:`, `lg:` para crescer
- **Dark mode**: Usar `dark:` prefix nos elementos necessários
- **Classes bem organizadas**: Ordem: layout → tamanho → cor → efeitos

```javascript
// Exemplo
<div className="p-4 md:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
```

### Context API

- `ThemeContext`: Gerenciar dark/light mode
- `ContactFormContext`: Estado do formulário de contato

```javascript
// ThemeContext.jsx
import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### Serviço de API

- Centralizar chamadas em `src/services/api.js`
- Usar axios com baseURL do `.env`
- Tratamento de erros consistente

```javascript
// services/api.js
import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
})

export const sendContact = async (data) => {
  try {
    const response = await API.post('/contact', data)
    return response.data
  } catch (error) {
    throw error.response?.data || error.message
  }
}
```

### Responsividade

- **Breakpoints Tailwind**: xs (padrão), sm (640px), md (768px), lg (1024px), xl (1280px)
- **Testar em**: Mobile (375px), Tablet (768px), Desktop (1920px)

## Dependências Já Instaladas

```
react@18.3.1
react-dom@18.3.1
axios@1.7.2              (requisições HTTP)
lucide-react@0.376.0     (ícones)
tailwindcss@3.4.1        (estilos)
vite@5.1.6               (bundler)
```

## Ordem de Desenvolvimento Recomendada

1. **Setup inicial** (FEITO ✅)
   - Estrutura de pastas
   - Dependências instaladas

2. **Context & Providers** (PRÓXIMO)
   - ThemeContext (Dark/Light Mode)
   - App.jsx com Provider wrapper
   - index.html + main.jsx linkados

3. **Componentes Comuns**
   - Button, Card, Container reutilizáveis
   - Estilos base

4. **Header & Navegação**
   - Logo
   - Menu responsivo (desktop + mobile)
   - Toggle tema

5. **Hero Section**
   - Apresentação
   - CTAs
   - Links sociais

6. **Seção Sobre**
   - Texto & imagem (opcional)
   - Timeline ou card de experiência

7. **Seção Projetos**
   - ProjectCard component
   - Grid layout
   - DoaUTF case study expandido
   - Gerador de Senhas

8. **Seção Habilidades**
   - SkillGrid interativo
   - Categorias: Front-end, Back-end, BD, DevOps

9. **Seção Contato**
   - Formulário
   - Integração com API (quando backend estiver pronto)
   - Validação básica

10. **Footer**
    - Links adicionais
    - Copyright

11. **Otimizações**
    - SEO (Helmet/meta tags)
    - Performance (lazy loading de imagens)
    - Acessibilidade (alt text, aria labels)

## Convenções de Nomenclatura

- **Componentes**: PascalCase (`Header.jsx`, `ProjectCard.jsx`)
- **Funções/Variáveis**: camelCase (`handleClick`, `isDark`)
- **Constantes**: UPPER_SNAKE_CASE (`API_URL`, `MAX_LENGTH`)
- **CSS classes**: lowercase com hífen (`hero-section`, `project-card`)

## Variáveis de Ambiente

`.env.example`:
```
VITE_API_URL=http://localhost:3000/api
```

Em produção (Vercel):
```
VITE_API_URL=https://seu-backend-render.com/api
```

## Deploy

- **Platform**: Vercel
- **Branch**: `main`
- **Build command**: `npm run build`
- **Output**: `dist`
- **Environment variables**: Configurar no painel Vercel

## Recursos Úteis

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

---

**Quando pronto, avisar para prosseguir com o Backend!** 🚀