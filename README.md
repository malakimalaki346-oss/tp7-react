# TP React - JSX, HOC, Render Props et Tests

**Auteur : Malak Nait Haddou**


## Captures d'écran :

Page d'accueil
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-03-21 191101" src="https://github.com/user-attachments/assets/5daec8e8-6e98-4170-96db-9faba1206287" />


JSX Demo et HOC Demo
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-03-21 191111" src="https://github.com/user-attachments/assets/7e8b2101-4005-4438-a570-823b14f2841a" />


Render Props Demo et Tests Demo
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-03-21 191118" src="https://github.com/user-attachments/assets/0d99c40f-5e21-40b5-a363-8a6be8492a7a" />


Interface complète
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-03-21 191220" src="https://github.com/user-attachments/assets/db71d7e3-adf9-40e6-9e38-f96caee7220b" />

## Description

Ce projet a été réalisé dans le cadre d'un TP visant à maîtriser les concepts fondamentaux de React :
- Compréhension de JSX et sa transformation en JavaScript
- Création de composants réutilisables avec Higher-Order Components (HOC)
- Implémentation du pattern Render Props
- Écriture de tests unitaires et d'intégration avec Jest et React Testing Library

## Fonctionnalités

### 1. JSX Demo
Démonstration de la syntaxe JSX avec :
- Affichage dynamique du nom "Malak Nait Haddou"
- Champ de saisie avec valeur par défaut
- Expression conditionnelle intégrée

### 2. Higher-Order Component Demo
- Composant `withLogging` qui ajoute des logs de cycle de vie (mount, unmount, render)
- Application sur les composants `Greeting` et `Counter`
- Valeurs initiales : compteur à 8

### 3. Render Props Demo
- Composant `DataLoader` utilisant le pattern Render Props
- Gestion des états : chargement, succès, erreur
- Affichage immédiat des données simulées sans état de chargement intermédiaire

### 4. Tests Demo
- Composant `Greeting` avec tests unitaires
- Composant `Counter` avec tests d'intégration et interactions utilisateur
- Valeur initiale du compteur : 3

## Structure du projet
src/
├── App.js # Composant principal
├── JSXDemo.js # Démonstration JSX
├── withLogging.js # HOC pour le logging
├── DataLoader.js # Composant avec Render Props
├── Greeting.js # Composant d'affichage
├── Greeting.test.js # Tests unitaires Greeting
├── Counter.js # Composant compteur
├── Counter.test.js # Tests d'intégration Counter
└── ...

## Installation et démarrage

1. Installer les dépendances :
```bash
npm install

Technologies utilisées
React 18 - Bibliothèque UI

Create React App - Configuration du projet

Jest - Framework de test

React Testing Library - Tests des composants

ESLint - Linting du code

Concepts abordés
Concept	Implémentation
JSX	Expressions JavaScript, attributs, enfants
HOC	withLogging - ajout de fonctionnalités transverses
Render Props	DataLoader - partage de logique asynchrone
Tests unitaires	Vérification du rendu des composants
Tests d'intégration	Interactions utilisateur (clics, saisies)
Résultats attendus
Affichage dynamique du nom dans JSX Demo

Logs dans la console pour les composants enveloppés par le HOC

Données simulées affichées immédiatement dans Render Props Demo

Compteurs fonctionnels avec valeurs initiales : 8 (HOC) et 3 (Tests)

Tests passant avec succès

Captures d'écran
Page d'accueil
Technologies utilisées
React 18 - Bibliothèque UI

Create React App - Configuration du projet

Jest - Framework de test

React Testing Library - Tests des composants

ESLint - Linting du code

Concepts abordés
Concept	Implémentation
JSX	Expressions JavaScript, attributs, enfants
HOC	withLogging - ajout de fonctionnalités transverses
Render Props	DataLoader - partage de logique asynchrone
Tests unitaires	Vérification du rendu des composants
Tests d'intégration	Interactions utilisateur (clics, saisies)
Résultats attendus
Affichage dynamique du nom dans JSX Demo

Logs dans la console pour les composants enveloppés par le HOC

Données simulées affichées immédiatement dans Render Props Demo

Compteurs fonctionnels avec valeurs initiales : 8 (HOC) et 3 (Tests)

Tests passant avec succès

Auteur
Malak Nait Haddou

Projet réalisé dans le cadre de la formation React



