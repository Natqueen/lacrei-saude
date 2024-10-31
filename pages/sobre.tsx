// pages/sobre.tsx
"use client";
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const AboutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 150px);
  padding: 2rem;
`;

const AboutText = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const About: React.FC = () => {
  return (
    <>
      <Header />
      <AboutContainer>
        <h2>Sobre a Lacrei Saúde</h2>
        <AboutText>
          <p>
            A Lacrei Saúde é uma plataforma dedicada a promover a saúde e o bem-estar, com foco na inclusão do público LGBTQIA+.
          </p>
          <p>
            A construção desta plataforma foi realizada com o apoio de trabalho voluntário e a colaboração de diversas pessoas.
          </p>
        </AboutText>
      </AboutContainer>
      <Footer />
    </>
  );
};

export default About;
