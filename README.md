# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat, focado em criar uma aplicação web para gerenciamento de salas e perguntas.

## 🚀 Tecnologias

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Linguagem de programação tipada
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento da aplicação
- **React Query (TanStack Query)** - Gerenciamento de estado e cache
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Day.js** - Manipulação de datas
- **Biome** - Linter e formatter

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── http/          # Hooks e tipos para requisições HTTP
├── lib/           # Utilitários e configurações
└── app.tsx        # Componente principal
```

## 🛠️ Setup e Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd web
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Build para produção**
   ```bash
   npm run build
   ```

## 📋 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção

## 🎯 Funcionalidades

- Criação de salas
- Gerenciamento de perguntas
- Gravação de áudio
- Interface responsiva e moderna

## 📝 Padrões de Projeto

- **Componentes Funcionais** com hooks do React
- **TypeScript** para tipagem estática
- **React Query** para gerenciamento de estado e cache
- **React Hook Form** com Zod para validação
- **Tailwind CSS** para estilização
- **Path aliases** (@/) para imports organizados
- **Biome** para linting e formatação de código 