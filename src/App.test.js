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
  const renderPropsSection = screen.getByText(/Render Props Demo/i);
  expect(renderPropsSection).toBeInTheDocument();
});

test('affiche la section Tests Demo', () => {
  render(<App />);
  const testsSection = screen.getByText(/Tests Demo/i);
  expect(testsSection).toBeInTheDocument();
});