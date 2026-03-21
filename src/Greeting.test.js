import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('affiche le message de bienvenue avec le nom fourni', () => {
    render(<Greeting name="Malak" />);
    expect(screen.getByText('Bonjour, Malak!')).toBeInTheDocument();
    expect(screen.getByText('Bienvenue dans l\'application React')).toBeInTheDocument();
  });
  
  test('affiche "invité" quand aucun nom n\'est fourni', () => {
    render(<Greeting />);
    expect(screen.getByText('Bonjour, invité!')).toBeInTheDocument();
  });
});