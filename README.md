# AI-Powered Financial News Analysis Platform

Une plateforme d'analyse de nouvelles financières alimentée par l'intelligence artificielle, construite avec NestJS et TypeScript.

## 🏗️ Architecture

Ce projet utilise une architecture monorepo basée sur Nx avec une séparation claire entre les applications, les bibliothèques et les distributions.

### Structure du Projet

```
├── apps/                    # Applications principales
│   └── chipeur/            # Service de collecte de nouvelles financières
├── libs/                   # Bibliothèques partagées
│   ├── env-utils/          # Utilitaires pour la gestion des environnements
│   └── utilities/          # Utilitaires généraux (arrays, classes, dates, enums, etc.)
└── dist/                   # Fichiers compilés et distribués
```

## 📱 Applications

### Chipeur
Service principal de collecte et d'analyse de nouvelles financières qui inclut :
- **Crawlers** : Collecte automatisée de nouvelles depuis différentes sources (Billy, Forbes)
- **Filtres d'exception gRPC** : Gestion robuste des erreurs
- **Modèles de données** : Structures TypeScript pour les articles financiers
- **Module Impact JSON** : Traitement des données d'impact financier


### Env-Utils
Utilitaires pour la gestion des configurations d'environnement.

## 🛠️ Technologies

- **TypeScript** : Langage principal
- **NestJS** : Framework backend
- **gRPC** : Communication inter-services
- **Protocol Buffers** : Sérialisation des données
- **Jest** : Tests unitaires
- **Webpack** : Bundling
- **Nx** : Monorepo tooling
- **Docker** : Containerisation

## 🚀 Fonctionnalités Principales

- ✅ Collecte automatisée de nouvelles financières
- ✅ Analyse de sentiment et d'impact
- ✅ Architecture microservices avec gRPC
- ✅ Gestion robuste des erreurs
- ✅ Types TypeScript stricts
- ✅ Tests unitaires complets
- ✅ Containerisation Docker


## 📋 Prérequis

- Node.js (version LTS recommandée)
- npm ou yarn
- Docker (optionnel, pour la containerisation)

## 🔮 Développement

Ce projet utilise Nx pour la gestion du monorepo, permettant :
- Builds incrémentaux
- Tests parallélisés
- Génération de code
- Gestion des dépendances inter-packages

## 📄 Licence

Ce projet est privé et propriétaire.

---

*Développé avec ❤️ pour l'analyse financière moderne*
