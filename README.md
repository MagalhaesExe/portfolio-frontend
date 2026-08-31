# Portfolio Frontend

Portfólio pessoal de Alex Magalhães, desenvolvido com React e Vite. Apresenta trajetória, projetos e habilidades técnicas, com formulário de contato integrado a uma API própria.

**Live:** https://portfolio-frontend-sage-gamma.vercel.app/

## Stack

- React 18
- Vite 5
- Tailwind CSS
- Axios (consumo da API)
- Lucide React / React Icons

## Estrutura do Projeto

```
src/
├── components/
│   ├── Header/       Navegação e toggle de tema (dark/light)
│   ├── Hero/          Apresentação inicial, CTA e links sociais
│   ├── About/         Trajetória e diferencial profissional
│   ├── Projects/      Grid de projetos com cards e case studies
│   ├── Skills/        Habilidades técnicas por categoria
│   ├── Contact/       Formulário de contato integrado à API
│   ├── Footer/        Links adicionais e informações de rodapé
│   └── common/        Componentes reutilizáveis (Button, Card, Container)
├── context/           ThemeContext (persistência do tema em localStorage)
├── services/          Instância Axios e chamadas à API
├── hooks/             Hooks customizados
├── pages/             Composição de páginas
├── utils/             Funções utilitárias
└── styles/            Estilos globais
```

## Funcionalidades

- Alternância de tema claro/escuro, persistida em `localStorage`
- Navegação responsiva com menu mobile
- Seção de projetos com cards de tecnologia e links para repositórios/demos
- Formulário de contato com validação e tratamento de erros da API (incluindo respostas 422)
- Download de currículo em PDF
- Layout responsivo mobile-first

## Setup Local

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173`.

Configure a variável de ambiente antes de rodar (veja `.env.example`):

```
VITE_API_URL=http://localhost:3000/api
```

## Build

```bash
npm run build
```

Gera os arquivos de produção em `dist/`, sem sourcemaps e minificados.

## Deploy

- **Plataforma:** Vercel
- **Branch:** `main`, com deploy automático a cada push
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Variáveis de ambiente:** configuradas diretamente no painel da Vercel (`VITE_API_URL` apontando para a URL do backend em produção)

## Backend

A API que alimenta o formulário de contato está em um repositório separado:

[portfolio-backend](https://github.com/MagalhaesExe/portfolio-backend)

## Contato

- GitHub: [MagalhaesExe](https://github.com/MagalhaesExe)
- Email: alexmagalhaesjr15@gmail.com
- LinkedIn: [Alex Magalhães](https://www.linkedin.com/in/alexmagalhaesjr)
