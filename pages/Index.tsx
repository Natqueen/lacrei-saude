// pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Link from "next/link";

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 150px);
  padding: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

const ActionButton = styled.button`
  background-color: #00A895;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #0078B7;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  }
`;

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <h2 style={{ fontWeight: 'bold', fontSize: '2rem', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)', color: 'white' }}>Bem-vindo ao Lacrei Saúde</h2>
        <p>Descubra nossas funcionalidades:</p>
        <ButtonContainer>
          <Link href="https://paciente.lacreisaude.com.br/" passHref target="_blank" rel="noopener noreferrer">
            <ActionButton>Login paciente</ActionButton>
          </Link>
          <Link href="https://profissional.lacreisaude.com.br/" passHref target="_blank" rel="noopener noreferrer">
            <ActionButton>Login Profissional</ActionButton>
          </Link>
          <Link href="https://lacreisaude.com.br/ajuda/" passHref target="_blank" rel="noopener noreferrer">
            <ActionButton>Dúvidas frequentes</ActionButton>
          </Link>
        </ButtonContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Home;
