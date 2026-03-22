import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('affiche le titre principal avec le nom de l\'auteur', () => {
  render(<App />);
  const titleElement = screen.getByText(/TP React - Malak Nait Haddou/i);
  expect(titleElement).toBeInTheDocument();
});

test('affiche la section JSX Demo', () => {
  render(<App />);
  const jsxSection = screen.getByText(/JSX Demo/i);
  expect(jsxSection).toBeInTheDocument();
});

test('affiche la section Higher-Order Component Demo', () => {
  render(<App />);
  const hocSection = screen.getByText(/Higher-Order Component Demo/i);
  expect(hocSection).toBeInTheDocument();
});

test('affiche la section Render Props Demo', () => {
  render(<App />);
  // Utiliser getAllByText et prendre le premier élément (le titre h2)
  const renderPropsSections = screen.getAllByText(/Render Props Demo/i);
  expect(renderPropsSections[0]).toBeInTheDocument();
});

test('affiche la section Tests Demo', () => {
  render(<App />);
  const testsSection = screen.getByText(/Tests Demo/i);
  expect(testsSection).toBeInTheDocument();
});

test('affiche le contenu en français du Render Props Demo', () => {
  render(<App />);
  const frenchContent = screen.getByText(/Bienvenue dans Render Props Demo/i);
  expect(frenchContent).toBeInTheDocument();
});

test('affiche les boutons avec HOC Logging', () => {
  render(<App />);
  const buttonPrimary = screen.getByText(/Bouton Primaire/i);
  const buttonSecondary = screen.getByText(/Bouton Secondaire/i);
  const buttonDanger = screen.getByText(/Bouton Danger/i);
  
  expect(buttonPrimary).toBeInTheDocument();
  expect(buttonSecondary).toBeInTheDocument();
  expect(buttonDanger).toBeInTheDocument();
});