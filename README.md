# TimeTravel Agency - Webapp Interactive

Webapp interactive pour une agence fictive de voyage temporel. Le site permet de decouvrir trois destinations immersives, de consulter un agent conversationnel et d'obtenir une recommandation personnalisee via un quiz.

Repository GitHub :

```text
https://github.com/Yros-So/TimeTravel-AI-Project.git
```

## Auteur

- Ibrahima Sory SOW

## Stack technique

- React
- Vite
- CSS custom responsive
- lucide-react pour les icones
- Playwright pour la verification automatisee
- Hebergement vise : Cloudflare Pages, Vercel, Netlify ou GitHub Pages
- Hebergement utilise pour ce rendu : Cloudflare Pages

## Features implementees

- Landing page immersive avec hero anime
- Presentation de TimeTravel Agency
- Galerie de 3 destinations temporelles
- Cards interactives avec visuels du premier projet
- Detail dynamique par destination
- Widget chatbot flottant
- Agent conversationnel local nomme Chronos
- FAQ automatisee : prix, securite, reservation, famille, duree
- Quiz de recommandation personnalisee en 4 questions
- Formulaire de reservation avec validation simple
- Responsive mobile-first
- Animations au scroll et micro-interactions

## Destinations

- Paris 1889 : Belle Epoque, Tour Eiffel, Exposition Universelle
- Cretace -65M : dinosaures, nature prehistorique, expedition securisee
- Florence 1504 : Renaissance, art, architecture, Michel-Ange

## IA utilisees et transparence

- Code et structuration : assistance IA avec Codex
- Chatbot : agent local simule, sans appel API externe
- Prompt systeme : prepare pour une future integration Mistral, Groq ou OpenRouter
- Visuels : assets generes pendant le premier projet TimeTravel Agency
- Tests : scenarios automatises avec Playwright

Le chatbot ne transmet pas de donnees a une API externe dans cette version. Il utilise une base de connaissances locale integree au code.

## Installation

Prerequis :

- Node.js
- npm

Installer les dependances :

```bash
npm install
```

Lancer le projet en local :

```bash
npm run dev
```

URL locale par defaut :

```text
http://127.0.0.1:5173
```

Generer le build de production :

```bash
npm run build
```

Previsualiser le build :

```bash
npm run preview
```

## Verification

Verifier la compilation :

```bash
npm run build
```

Verifier les vulnerabilites npm :

```bash
npm audit --audit-level=low
```

Tester le chatbot, le quiz, les images et le responsive :

```bash
npm run test:phase3
```

Note : `npm run test:phase3` attend que l'application soit lancee sur `http://127.0.0.1:5173`.

## Deploiement

Le projet est une app statique Vite. Le dossier a deployer est :

```text
dist/
```

Commande de build :

```bash
npm run build
```

Parametres pour une plateforme d'hebergement :

- Build command : `npm run build`
- Output directory : `dist`
- Framework preset : Vite / React

URL publique :

```text
https://baccassable2-timetravel.pages.dev/
```

Commande utilisee pour le deploiement Cloudflare Pages :

```bash
npm run build
npx wrangler pages deploy dist --project-name baccassable2-timetravel
```

## Credits

- Assets visuels : projet TimeTravel Agency precedent
- Icones : lucide-react
- Framework : React + Vite
- Verification : Playwright

## Licence

Projet pedagogique - M1/M2 Digital & IA.
