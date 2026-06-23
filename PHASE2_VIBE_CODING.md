# TimeTravel Agency - Phase 2 : Generation de code avec Vibe Coding

## Exercice 2.1 - Setup & generation initiale

### Outil choisi

Outil utilise : Codex dans l'environnement local du projet.

Raison du choix :

- generation rapide d'une base React exploitable ;
- edition directe dans le repository ;
- possibilite de tester le rendu localement ;
- integration immediate des assets du premier projet.

### Stack technique generee

- Vite
- React
- CSS responsive custom
- lucide-react pour les icones
- Animations CSS + IntersectionObserver pour les apparitions au scroll

### Structure creee

```text
Baccassable2/
|-- index.html
|-- package.json
|-- public/
|   `-- assets/
|       |-- paris-1889-hero-16x9.png
|       |-- cretace-65m-hero-16x9.png
|       |-- florence-1504-hero-16x9.png
|       `-- teaser-storyboard-contact-sheet.png
`-- src/
    |-- App.jsx
    |-- main.jsx
    `-- styles.css
```

### Prompts / iterations de vibe coding

Iteration 1 - base :

```text
Genere une landing page React pour TimeTravel Agency avec header, hero immersif,
presentation agence, galerie de 3 destinations, section details, assistant IA
et formulaire de reservation.
```

Iteration 2 - design :

```text
Ameliore le design en theme sombre premium avec accents dores, cards interactives,
hero avec animation de fond, responsive mobile-first et micro-interactions.
```

Iteration 3 - integration :

```text
Integre les visuels du premier projet TimeTravel Agency dans les cards et le hero,
ajoute le lazy loading sur les images et prepare une navigation fluide entre les sections.
```

---

## Exercice 2.2 - Integration des assets

Assets recuperes depuis le premier projet :

- `paris-1889-hero-16x9.png`
- `cretace-65m-hero-16x9.png`
- `florence-1504-hero-16x9.png`
- `teaser-storyboard-contact-sheet.png`

Integration :

- images copiees dans `public/assets` ;
- images utilisees dans les cards de destinations ;
- image storyboard utilisee comme fond anime du hero ;
- attribut `loading="lazy"` ajoute sur les images de galerie et details.

Note : aucune video `.mp4` n'a ete trouvee dans les assets disponibles. Le hero utilise donc une animation de fond CSS combinee a un visuel storyboard.

---

## Exercice 2.3 - Animations optionnelles

Animations ajoutees :

- apparition progressive des sections au scroll ;
- mouvement lent du visuel de hero ;
- anneaux temporels animes en fond ;
- hover effects sur les cards ;
- micro-interactions sur les boutons ;
- scroll fluide via la navigation.

Les animations restent courtes et sobres pour conserver une interface lisible.

---

## Commandes utiles

Installer les dependances :

```bash
npm install
```

Lancer en local :

```bash
npm run dev
```

Generer le build :

```bash
npm run build
```
