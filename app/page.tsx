"use client";
import Image from "next/image";
import Header from "../components/Header"; // Certifique-se de que o caminho está correto
import Footer from "../components/Footer"; // Certifique-se de que o caminho está correto
import styled from 'styled-components';

// Estilizando a página
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 150px);
  padding: 2rem;
  background-color: #f0f4f8; /* Cor de fundo suave */
`;

const WelcomeMessage = styled.h2`
  font-size: 2.5rem; /* Aumenta o tamanho da fonte */
  font-weight: bold; /* Torna o texto em negrito */
  color: #0078B7; /* Cor do texto */
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.7), 0 0 25px rgba(0, 0, 0, 0.1); /* Sombra suave */
  margin-bottom: 40px; /* Espaço abaixo do título */
`;

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <WelcomeMessage>Bem-vindo ao Lacrei Saúde</WelcomeMessage>
      <p>Descubra nossas funcionalidades:</p>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://paciente.lacreisaude.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Login Paciente"
            width={20}
            height={20}
          />
          Login paciente
        </a>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://profissional.lacreisaude.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Login Profissional"
            width={20}
            height={20}
          />
          Login Profissional
        </a>
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://lacreisaude.com.br/ajuda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Dúvidas Frequentes"
            width={20}
            height={20}
          />
          Dúvidas frequentes
        </a>
      </div>
      <Footer />
    </MainContainer>
  );
};

export default Home;
