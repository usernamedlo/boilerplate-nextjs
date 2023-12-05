
# Titre du Projet

Ce projet est un boilerplate Next.js intégrant ShadcnUI, NextAuth pour l'authentification, un thème sombre, et une authentification via GitHub.

## Fonctionnalités

- **ShadcnUI** : Intégration d'un framework UI pour une interface utilisateur moderne et réactive.
- **NextAuth** : Implémentation de l'authentification, y compris la connexion via GitHub.
- **Thème Sombre** : Prise en charge d'un thème sombre pour une meilleure expérience utilisateur.
- **Authentification GitHub** : Permet aux utilisateurs de se connecter via leur compte GitHub.

## Prérequis

- Node.js
- npm ou yarn
- Compte GitHub (pour la configuration OAuth)

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone [lien-du-dépôt]
cd [nom-du-dossier]
npm install
```

## Configuration

### Configuration de l'Environnement

Créez un fichier `.env.local` à la racine du projet et ajoutez les variables suivantes :

```env
GITHUB_ID=VotreClientIDGitHub
GITHUB_SECRET=VotreSecretGitHub
```

### ShadcnUI

(Instructions d'installation de ShadcnUI, si c'est un package séparé)

## Démarrage

Pour démarrer le serveur de développement :

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le résultat.

## Structure du Projet

Décrivez ici la structure de votre projet, y compris les dossiers principaux et leur utilité.

## Contribution

Les contributions sont les bienvenues. Pour les contributions majeures, veuillez ouvrir une issue d'abord pour discuter de ce que vous aimeriez changer.

## Licence

[MIT](https://choosealicense.com/licenses/mit/)
