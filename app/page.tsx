"use client"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Link from "next/link";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Garante que o footer fique na parte inferior */
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1; /* Ocupa o espaço disponível entre o header e o footer */
  padding: 2rem;
`;

const WelcomeText = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #0078B7;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 
    -1px -1px 0 #fff,  
     1px -1px 0 #fff, 
    -1px  1px 0 #fff,  
     1px  1px 0 #fff,
     2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #333;
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
    <PageContainer>
      <Header />
      <MainContainer>
        <WelcomeText>Bem-vindo ao Lacrei Saúde</WelcomeText>
        <Subtitle>Descubra nossas funcionalidades:</Subtitle>
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
    </PageContainer>
  );
};

export default Home;
