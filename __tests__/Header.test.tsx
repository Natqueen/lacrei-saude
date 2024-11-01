import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('Header', () => {
  test('renders header with title', () => {
    render(<Header />);
    const titleElement = screen.getByText(/Lacrei Saúde/i); // Ajuste conforme o título do seu Header
    expect(titleElement).toBeInTheDocument();
  });
});
