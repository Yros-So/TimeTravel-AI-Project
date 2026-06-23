# TimeTravel Agency - Phase 1 : Architecture & Planning

## Objectif de la webapp

Creer une webapp immersive pour une agence fictive de voyage temporel. L'utilisateur doit pouvoir decouvrir les 3 destinations, comparer les experiences, obtenir des conseils via un agent conversationnel et, si le temps le permet, commencer une reservation.

Destinations retenues :

- Paris 1889 : Belle Epoque, Tour Eiffel, Exposition Universelle
- Cretace -65M : dinosaures, nature prehistorique, expedition sauvage
- Florence 1504 : Renaissance, art, architecture, Michel-Ange

---

## Exercice 1.1 - Fonctionnalites cles

### 1. Page d'accueil immersive

La page d'accueil sert de vitrine principale de l'agence.

Elements prevus :

- Header fixe avec logo TimeTravel Agency
- Navigation : Accueil, Destinations, Assistant IA, Reservation
- Hero section avec video ou animation de fond
- Titre fort : "Voyagez dans le temps, vivez l'histoire"
- Texte court de presentation
- CTA principal : "Explorer les destinations"
- CTA secondaire : "Demander conseil a l'assistant"

Priorite : essentielle.

### 2. Presentation de l'agence

Section courte pour installer l'univers premium et rassurer l'utilisateur.

Contenu prevu :

- Promesse : voyages temporels encadres, securises et personnalises
- Ton : luxe, aventure, expertise historique
- 3 arguments rapides : immersion, securite temporelle, accompagnement IA

Priorite : essentielle.

### 3. Galerie des destinations

Section centrale de la webapp avec 3 cards interactives.

Cards prevues :

- Paris 1889
- Cretace -65M
- Florence 1504

Chaque card contient :

- Visuel genere pendant le premier projet TimeTravel Agency
- Nom de la destination
- Periode historique
- Tags d'experience : culture, aventure, art, nature, luxe
- Court resume
- Bouton "Voir le voyage"

Interactions :

- Effet hover sur desktop
- Ouverture d'un panneau detaille ou scroll vers une section detail
- Animation douce d'apparition au scroll

Priorite : essentielle.

### 4. Informations detaillees par destination

Chaque destination doit avoir assez d'informations pour aider au choix.

Informations prevues :

- Description immersive
- Points forts de l'experience
- Activites recommandees
- Niveau d'aventure
- Public conseille
- Prix fictif coherent
- CTA : "Choisir cette destination"

Exemples :

- Paris 1889 : diner Belle Epoque, visite de l'Exposition Universelle, premiere decouverte de la Tour Eiffel
- Cretace -65M : observation encadree des dinosaures, exploration de paysages prehistoriques, capsule securisee
- Florence 1504 : ateliers Renaissance, rencontre avec l'univers de Michel-Ange, visite des lieux artistiques majeurs

Priorite : essentielle.

### 5. Agent conversationnel IA

Widget de chatbot integre en bas a droite.

Roles de l'agent :

- Repondre aux questions frequentes
- Conseiller une destination selon les preferences
- Expliquer les differences entre les epoques
- Donner des informations sur les prix, la securite et les activites
- Aider l'utilisateur avant une reservation

Personnalite :

- Professionnel
- Chaleureux
- Passionne d'histoire
- Expert en voyages temporels fictifs

Questions types a tester :

- "Quelle destination conseillez-vous pour un amateur d'art ?"
- "Le Cretace est-il dangereux ?"
- "Combien coute un voyage a Paris 1889 ?"
- "Quelle destination choisir pour une experience romantique ?"
- "Puis-je voyager avec des enfants ?"

Priorite : essentielle.

### 6. FAQ automatisee

La FAQ peut etre integree dans le chatbot ou presentee sous forme d'accordeon.

Themes :

- Securite temporelle
- Duree des voyages
- Prix
- Conditions de reservation
- Equipement fourni
- Restrictions selon les epoques

Priorite : essentielle si integree au chatbot, secondaire si section separee.

### 7. Formulaire de reservation

Fonctionnalite optionnelle selon le temps disponible.

Champs prevus :

- Nom
- Email
- Destination
- Dates souhaitees
- Nombre de voyageurs
- Preferences ou demandes speciales

Validation automatisee :

- Email obligatoire et valide
- Destination obligatoire
- Date obligatoire
- Message de confirmation apres envoi

Priorite : optionnelle.

---

## Priorisation MVP

### A faire absolument

- Header + navigation
- Hero immersif
- Presentation agence
- Galerie des 3 destinations
- Details de chaque destination
- Chatbot IA ou simulation de chatbot
- Responsive mobile-first

### A faire si le temps le permet

- Formulaire de reservation complet
- Animations avancees
- Quiz de recommandation personnalisee
- Video de fond reelle
- FAQ separee en accordeon

---

## Exercice 1.2 - Maquette rapide

## Structure de navigation

Navigation recommandee :

1. Header
2. Hero
3. Presentation de l'agence
4. Destinations
5. Details / recommandations
6. Assistant conversationnel
7. Reservation optionnelle
8. Footer

Menu desktop :

- Logo : TimeTravel Agency
- Accueil
- Destinations
- Assistant IA
- Reservation
- CTA : "Planifier un voyage"

Menu mobile :

- Logo
- Bouton menu burger
- Liens empiles en plein ecran ou drawer
- CTA visible sous les liens

---

## Wireframe desktop

```text
------------------------------------------------------------
HEADER
[TimeTravel Agency]   Accueil | Destinations | Assistant | Reservation   [Planifier]
------------------------------------------------------------

HERO - plein ecran partiel avec video / animation de fond
------------------------------------------------------------
Voyagez dans le temps, vivez l'histoire
Une agence premium pour explorer les epoques les plus fascinantes.

[Explorer les destinations]   [Demander conseil a l'IA]
------------------------------------------------------------

PRESENTATION AGENCE
------------------------------------------------------------
Immersion historique     Securite temporelle     Conseil personnalise
------------------------------------------------------------

DESTINATIONS
------------------------------------------------------------
[Card Paris 1889]      [Card Cretace -65M]      [Card Florence 1504]
Image                  Image                    Image
Resume                 Resume                   Resume
[Voir le voyage]       [Voir le voyage]         [Voir le voyage]
------------------------------------------------------------

DETAIL DESTINATION / SECTION DYNAMIQUE
------------------------------------------------------------
Image large + description + activites + prix + CTA
------------------------------------------------------------

ASSISTANT IA
------------------------------------------------------------
Bloc court : "Besoin d'aide pour choisir ?"
[Ouvrir le chatbot]

Widget flottant en bas a droite
------------------------------------------------------------

RESERVATION OPTIONNELLE
------------------------------------------------------------
Destination | Dates | Voyageurs | Email | [Valider]
------------------------------------------------------------

FOOTER
------------------------------------------------------------
Mentions projet pedagogique | Credits IA | Equipe
------------------------------------------------------------
```

---

## Wireframe mobile-first

```text
--------------------------------
HEADER
[Logo]                  [Menu]
--------------------------------

HERO
Video / animation fond
Titre court sur 2 lignes
Texte descriptif court
[Explorer]
[Assistant IA]
--------------------------------

AGENCE
3 arguments en colonne
--------------------------------

DESTINATIONS
[Card Paris 1889]
[Card Cretace -65M]
[Card Florence 1504]
--------------------------------

DETAILS
Une destination affichee a la fois
Image
Description
Activites
[Choisir]
--------------------------------

CHATBOT
Bouton flottant bas droite
Fenetre plein ecran ou panneau bas
--------------------------------

RESERVATION
Formulaire en une colonne
--------------------------------

FOOTER
Credits + membres du groupe
--------------------------------
```

---

## Direction artistique

Style recommande :

- Theme sombre premium
- Accents dores ou cuivre pour le cote luxe
- Typographies elegantes et lisibles
- Cards sobres avec visuels forts
- Animations subtiles, pas trop nombreuses
- Interface moderne, immersive, mais simple a comprendre

Palette possible :

- Fond principal : noir bleute ou anthracite
- Texte principal : blanc casse
- Accent : or / cuivre
- Etats secondaires : gris froid
- CTA : dore avec texte sombre

---

## Prompt de maquette pour v0.dev / Uizard / Framer AI

```text
Create a responsive landing page for a luxury fictional time travel agency called TimeTravel Agency.

The page should feel immersive, premium and modern, with a dark elegant theme and gold accents.

Structure:
- Sticky header with logo, navigation links and primary CTA
- Hero section with animated or video-style background, large headline, short agency description and two CTA buttons
- Agency presentation section with three value propositions: historical immersion, temporal safety, personalized AI guidance
- Destination gallery with three interactive cards:
  1. Paris 1889 - Belle Epoque, Eiffel Tower, Exposition Universelle
  2. Cretaceous -65M - dinosaurs, prehistoric nature, secured expedition
  3. Florence 1504 - Renaissance, art, Michelangelo, architecture
- Detailed destination section with image, description, activities, price and CTA
- Floating AI chatbot widget in the bottom right corner
- Optional booking form with destination, dates, travelers and email
- Footer with credits and team members

Design requirements:
- Mobile-first responsive layout
- Premium dark mode
- Elegant spacing
- Interactive destination cards
- Subtle scroll and hover animations
- Chatbot design consistent with the website
```

---

## Definition du parcours utilisateur

1. L'utilisateur arrive sur la page d'accueil.
2. Il comprend immediatement le concept grace au hero.
3. Il explore les 3 destinations dans la galerie.
4. Il ouvre les details d'une destination.
5. Il demande conseil au chatbot si besoin.
6. Il choisit une destination.
7. Il complete le formulaire de reservation si la fonctionnalite est implementee.

---

## Repartition possible du travail en groupe

- Personne 1 : structure React / navigation / responsive
- Personne 2 : design, hero, cards destinations, animations
- Personne 3 : chatbot IA, prompt systeme, FAQ
- Personne 4 : formulaire, README, tests, deploiement

---

## Checklist Phase 1

- [x] Fonctionnalites essentielles definies
- [x] Fonctionnalites optionnelles identifiees
- [x] Navigation definie
- [x] Sections principales identifiees
- [x] Maquette desktop preparee
- [x] Maquette mobile-first preparee
- [x] Prompt de generation IA prepare
