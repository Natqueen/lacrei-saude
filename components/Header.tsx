// components/Header.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #0078B7, #00A895, #8232FF);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: Arial, sans-serif;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: absolute;
  left: 1rem;
`;

const Navbar = styled.nav`
  display: flex;
  gap: 2rem;
`;

interface HeaderProps {
  style?: React.CSSProperties; // Permitir passar estilos
}

const Header: React.FC<HeaderProps> = ({ style }) => {
  return (
    <HeaderContainer style={style}>
      <Logo>LS</Logo>
      <Navbar>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
