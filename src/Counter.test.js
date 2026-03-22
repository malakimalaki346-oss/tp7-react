import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './Counter';

describe('Counter Component', () => {
  test('affiche la valeur initiale par défaut (0)', () => {
    render(<Counter />);
    expect(screen.getByText('Compteur: 0')).toBeInTheDocument();
  });
  
  test('affiche la valeur initiale personnalisée', () => {
    render(<Counter initialValue={5} />);
    expect(screen.getByText('Compteur: 5')).toBeInTheDocument();
  });
  
  test('incrémente le compteur quand on clique sur +', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    expect(screen.getByText('Compteur: 1')).toBeInTheDocument();
  });
  
  test('décrémente le compteur quand on clique sur -', () => {
    render(<Counter initialValue={3} />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    expect(screen.getByText('Compteur: 2')).toBeInTheDocument();
  });
  
  test('réinitialise le compteur quand on clique sur Réinitialiser', () => {
    render(<Counter initialValue={10} />);
    const incrementButton = screen.getByText('+');
    const resetButton = screen.getByText('Réinitialiser');
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('Compteur: 11')).toBeInTheDocument();
    
    fireEvent.click(resetButton);
    expect(screen.getByText('Compteur: 10')).toBeInTheDocument();
  });
  
  test('gère les interactions utilisateur avec plusieurs clics', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    
    expect(screen.getByText('Compteur: 2')).toBeInTheDocument();
  });
});