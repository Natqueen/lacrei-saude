// components/Footer.tsx
"use client";
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0078B7;
  color: white;
  text-align: center;
  padding: 1rem;
  width: 100%;
`;

interface FooterProps {
  style?: React.CSSProperties; // Adicionando a prop style para permitir estilos
}

const Footer: React.FC<FooterProps> = ({ style }) => {
  return (
    <FooterContainer style={style}>
      <p>&copy; 2024 Lacrei Saúde. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
