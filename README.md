# taskmanagement
Un gestionnaire de tâches simple avec une interface web (frontend) et une API Node.js (backend). Ce projet utilise une architecture modulaire et un workflow Git standard pour faciliter la collaboration.

📁 Structure du Projet
bash
Copier
Modifier
projet-gestionnaire-taches/
├── frontend/         # Application web (React, par exemple)
├── backend/          # API REST et logique serveur (Node.js / Express)
├── tests/            # Tests automatisés (unitaires et d’intégration)
└── .github/          # Workflows CI/CD GitHub Actions

⚙️ Installation
🔑 Prérequis

Node.js (v14 ou +)
npm

🚀 Lancement de l'application
1. Lancer le Backend
bash
Copier
Modifier
cd backend
npm install
npm run dev

2. Lancer le Frontend
bash
Copier
Modifier
cd frontend
npm install
npm start

🔐 Identifiants de Connexion (par défaut)
Username : admin@test.com

Password : password

🔄 Workflow de Développement
📌 Branches Principales
main : Contient la version de production de l'application.

develop : Contient les fonctionnalités en cours de développement, une fois fini on merge avec main.

🌱 Branches de Travail
feature/* : Pour les nouvelles fonctionnalités que chacun de nous va faire qu'on merge avec develop

hotfix/* : Pour les corrections urgentes ( on a pas utiliser cette branche)

