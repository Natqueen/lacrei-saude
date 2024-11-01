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

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Lacrei Saúde. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
