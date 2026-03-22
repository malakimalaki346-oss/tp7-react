# TP React - JSX, HOC, Render Props et Tests

**Auteur : Malak Nait Haddou**


## Captures d'écran :

Page d'accueil
<img width="1920" height="1080" alt="Capture d&#39;écran 2026-03-21 191101" src="https://github.com/user-attachments/assets/5daec8e8-6e98-4170-96db-9faba1206287" />


JSX Demo et HOC Demo
<img width="1902" height="735" alt="Capture d&#39;écran 2026-03-22 141547" src="https://github.com/user-attachments/assets/850386a2-9f64-4963-87c3-d908710ea1d1" />

Boutton avec HOC Logging 

<img width="1184" height="460" alt="Capture d&#39;écran 2026-03-22 141607" src="https://github.com/user-attachments/assets/d3b88aed-ab05-474e-85d8-36df4de04d89" />
<img width="968" height="410" alt="Capture d&#39;écran 2026-03-22 141612" src="https://github.com/user-attachments/assets/7e3f3375-b33f-40d7-8332-6adee29d3fda" />
<img width="857" height="420" alt="Capture d&#39;écran 2026-03-22 141621" src="https://github.com/user-attachments/assets/64f4cc90-c5bb-42f2-99a3-316370e371b1" />


Render Props Demo et Tests Demo

<img width="1899" height="660" alt="Capture d&#39;écran 2026-03-22 141635" src="https://github.com/user-attachments/assets/250f88d2-6ee0-4a71-be7f-9fe3e96417fc" />

Interface complète

<img width="770" height="429" alt="Capture d&#39;écran 2026-03-22 141649" src="https://github.com/user-attachments/assets/151e1d65-89ca-4703-b3f5-9de5192fa185" />

<img width="720" height="402" alt="Capture d&#39;écran 2026-03-22 141708" src="https://github.com/user-attachments/assets/b6648bac-0385-4295-b73d-c59392359e90" />

## Résultats des tests

### Tests unitaires et d'intégration

Tous les tests ont été exécutés avec succès :

<img width="799" height="824" alt="image" src="https://github.com/user-attachments/assets/dc5fd36f-e3fe-42ee-9605-307896683bbd" />

<img width="676" height="889" alt="Capture d&#39;écran 2026-03-22 132109" src="https://github.com/user-attachments/assets/b8a248a1-f3b7-4092-89dd-2062ced384cf" />

<img width="628" height="849" alt="Capture d&#39;écran 2026-03-22 132120" src="https://github.com/user-attachments/assets/a99418ab-e067-4acb-81ba-461021ac5bae" />

<img width="707" height="830" alt="Capture d&#39;écran 2026-03-22 132130" src="https://github.com/user-attachments/assets/f823bd71-71c9-4850-9c24-b2a652c6ff23" />

<img width="674" height="852" alt="Capture d&#39;écran 2026-03-22 132142" src="https://github.com/user-attachments/assets/28f170c7-6a7c-400a-a566-6b5d2d4033e3" />

<img width="652" height="710" alt="image" src="https://github.com/user-attachments/assets/60b5b34d-95a2-42b1-8f45-c2850af7b260" />

<img width="810" height="275" alt="image" src="https://github.com/user-attachments/assets/e59d94a8-5b40-47ee-8a5c-e31e56a1ccd1" />


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



