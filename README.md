# Hotel Management Frontend - IFSP Capivari

Este repositório contém o frontend da aplicação de gerenciamento de hotel, desenvolvido como trabalho da disciplina de Orientação a Objetos do IFSP Capivari. A aplicação permite que usuários interajam com o sistema de reservas, check-ins, check-outs, gerenciamento de quartos e hóspedes, de forma simples, intuitiva e responsiva.

## 🛠️ Tecnologias Utilizadas

- Next.js (React)
- TypeScript
- SCSS Modules
- TailwindCSS
- Docker
- Vercel (Deploy)

## 🎨 Estilo e Design

O projeto utiliza TailwindCSS em conjunto com SCSS Modules, proporcionando uma interface moderna, responsiva e com alta performance. Foram aplicadas boas práticas de UI/UX para garantir uma ótima experiência para os usuários.

## 🚀 Deploy

O deploy do frontend é realizado na Vercel, que oferece CI/CD automático a cada push na branch principal. A aplicação é otimizada para performance, escalabilidade e disponibilidade global.

## 🔧 Funcionalidades da Interface

- Dashboard de gestão para hóspedes, quartos e reservas
- Visualização e controle de disponibilidade dos quartos
- Realização de reservas, check-ins e check-outs
- Feedback visual sobre o status dos quartos (livre, ocupado, manutenção)
- Tabelas, filtros e listagens dinâmicas dos dados
- Integração completa com a API backend

## 📦 Como Executar Localmente

1. Clone este repositório
2. Instale as dependências com `npm install` ou `yarn install`
3. Configure as variáveis de ambiente no arquivo `.env.local` (URLs da API e demais configs)
4. Execute o projeto com `npm run dev` ou `yarn dev`

A aplicação estará disponível em `http://localhost:3000`

## 🐳 Executando com Docker

- Para gerar a imagem: `docker build -t hotel-frontend .`
- Para executar o container: `docker run -p 3000:3000 --env-file .env.local hotel-frontend`

## ☁️ Deploy na Vercel

O deploy é feito diretamente pela Vercel, integrado ao GitHub. Cada push na branch principal gera uma nova build automaticamente. As variáveis de ambiente são configuradas diretamente no painel da Vercel.

## 🤝 Contribuições

Este projeto foi desenvolvido como trabalho acadêmico, mas contribuições, melhorias e feedbacks são bem-vindos.
