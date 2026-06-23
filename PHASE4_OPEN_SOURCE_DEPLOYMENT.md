# TimeTravel Agency - Phase 4 : Open Source & Deploiement

## Exercice 4.1 - Documentation & code

Documentation creee :

- `README.md`
- `PHASE1_ARCHITECTURE_PLANNING.md`
- `PHASE2_VIBE_CODING.md`
- `PHASE3_AI_AGENTS.md`
- `PHASE4_OPEN_SOURCE_DEPLOYMENT.md`

Le README contient :

- titre du projet ;
- description ;
- membres du groupe a completer ;
- stack technique ;
- features implementees ;
- outils IA utilises ;
- instructions d'installation ;
- commandes de verification ;
- credits ;
- licence pedagogique ;
- indications de deploiement.

## Exercice 4.2 - Deploiement

Type de projet : application statique Vite / React.

Dossier de production :

```text
dist/
```

Commande de build :

```bash
npm run build
```

Parametres de deploiement recommandes :

- Framework : Vite
- Build command : `npm run build`
- Output directory : `dist`
- Node package manager : npm

Plateformes compatibles :

- Cloudflare Pages
- Vercel
- Netlify
- GitHub Pages

Plateforme utilisee pour ce rendu :

- Cloudflare Pages

URL publique :

```text
https://baccassable2-timetravel.pages.dev/
```

Repository GitHub :

```text
https://github.com/Yros-So/TimeTravel-AI-Project.git
```

Commande de deploiement executee :

```bash
npm run build
npx wrangler pages deploy dist --project-name baccassable2-timetravel
```

## Tests avant rendu

Commandes executees :

```bash
npm run build
npm audit --audit-level=low
npm run test:phase3
APP_URL=https://baccassable2-timetravel.pages.dev/ npm run test:phase3
```

Points verifies :

- compilation production ;
- absence de vulnerabilite npm connue au niveau low ;
- 6 questions chatbot ;
- quiz de recommandation ;
- images chargees ;
- menu mobile ;
- absence d'erreur console.

## Checklist Moodle

- [x] URL publique de la webapp
- [x] Export du code ou repository GitHub
- [x] README.md
- [ ] Noms et prenoms de tous les membres du groupe
- [ ] Depot individuel par chaque membre
- [ ] Statut Moodle passe de brouillon a envoye
