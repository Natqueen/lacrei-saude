Descrição
O projeto "Lacrei Saúde" é uma plataforma dedicada à promoção da saúde e bem-estar, com foco na inclusão do público LGBTQIA+. Este projeto foi desenvolvido utilizando a biblioteca React e o framework Next.js para construção de uma aplicação web responsiva e otimizada.

Tecnologias Utilizadas
React: Biblioteca JavaScript para construção de interfaces de usuário.
Next.js: Framework React para desenvolvimento de aplicações web que permite renderização no lado do servidor e geração de sites estáticos.
Styled-components: Biblioteca para estilização de componentes React utilizando CSS-in-JS.
TypeScript: Superset do JavaScript que adiciona tipos estáticos e é utilizado para melhorar a qualidade do código.
Tailwind CSS: Framework CSS para estilização rápida e responsiva.
ESLint: Ferramenta para identificar e corrigir problemas em JavaScript e TypeScript.
Jest: Framework de testes em JavaScript para realizar testes automatizados da aplicação.
Estrutura do Projeto
pages: Contém as páginas da aplicação, como a página inicial (index.tsx) e a página "Sobre" (sobre.tsx).
components: Componentes reutilizáveis da interface, como Header e Footer.
styles: Arquivo global de estilos (globals.css).
tests: Contém os testes da aplicação utilizando Jest.
Responsividade
A aplicação foi projetada para ser responsiva, garantindo uma boa experiência em diferentes dispositivos, como desktops, tablets e smartphones. Utilizamos media queries e Flexbox para adaptar o layout às diferentes larguras de tela.

Testes
Foram realizados testes automatizados utilizando Jest para garantir a funcionalidade dos componentes e da aplicação como um todo.

Comandos para Executar os Testes
Para executar os testes, utilize o seguinte comando:

bash
Copiar código
npm run test
Instruções de Instalação
Clone o repositório:

bash
Copiar código
git clone <URL do repositório>
Navegue até o diretório do projeto:

bash
Copiar código
cd lacrei-saude
Instale as dependências:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm run dev
Acesse a aplicação no navegador em http://localhost:3000.





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
