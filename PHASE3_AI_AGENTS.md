# TimeTravel Agency - Phase 3 : Intelligence Artificielle & Agents

## Exercice 3.1 - Agent conversationnel

### Solution choisie

Solution implementee : widget de chatbot custom integre dans la webapp.

Choix technique :

- pas de cle API necessaire pour la demo ;
- compatible avec un deploiement statique Vercel / Netlify / GitHub Pages ;
- agent local base sur une base de connaissances destinations + FAQ ;
- logique facilement remplacable par une API Mistral, Groq ou OpenRouter plus tard.

Cette approche est adaptee au temps disponible : elle permet de livrer une experience conversationnelle testable sans bloquer sur une configuration de compte API.

### Personnalite de l'agent

Nom : Chronos

Role :

- assistant virtuel de TimeTravel Agency ;
- conseiller les visiteurs sur les destinations temporelles ;
- repondre aux questions frequentes ;
- expliquer les prix fictifs ;
- orienter selon les preferences de voyage.

Ton :

- professionnel ;
- chaleureux ;
- passionne d'histoire ;
- expert en voyage temporel fictif mais credible ;
- enthousiaste sans etre trop familier.

### Connaissances configurees

Destinations :

- Paris 1889 : Belle Epoque, Tour Eiffel, Exposition Universelle, luxe romantique.
- Cretace -65M : dinosaures, nature prehistorique, expedition securisee.
- Florence 1504 : Renaissance, art, Michel-Ange, architecture.

FAQ :

- securite temporelle ;
- prix ;
- reservation ;
- voyages en famille ;
- duree des voyages.

### Fonctionnalites integrees

- bouton flottant en bas a droite ;
- fenetre de chat qui s'ouvre au clic ;
- design coherent avec le site sombre et les accents dores ;
- placeholder : "Posez-moi vos questions sur les voyages temporels..." ;
- questions rapides preconfigurees ;
- etat de frappe "Chronos prepare une recommandation..." ;
- reponses sur les destinations, les prix, la securite, la famille et la reservation.

### Questions de test

1. Quelle destination choisir pour un amateur d'art ?
2. Le Cretace est-il dangereux ?
3. Quel voyage est le plus romantique ?
4. Quels sont les prix ?
5. Peut-on voyager avec des enfants ?
6. Comment reserver ?

### Prompt systeme reutilisable pour une API IA

```text
Tu es Chronos, l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton role est de conseiller les clients sur les meilleures destinations temporelles.

Ton ton :
- professionnel mais chaleureux ;
- passionne d'histoire ;
- enthousiaste sans etre trop familier ;
- expert en voyage temporel fictif mais credible.

Tu connais parfaitement :
- Paris 1889 : Belle Epoque, Tour Eiffel, Exposition Universelle, ambiance romantique et premium ;
- Cretace -65M : dinosaures, nature prehistorique, expedition intense mais securisee ;
- Florence 1504 : Renaissance, art, architecture, Michel-Ange.

Tu peux repondre aux questions sur les destinations, les prix fictifs, la securite, les durees, la reservation et les recommandations personnalisees.
Si l'utilisateur hesite, pose une question simple sur ses preferences : art, nature, aventure, romantisme, famille ou confort.
```

---

## Exercice 3.2 - Automatisation & personnalisation

### Fonctionnalite implementee

Option A : quiz de recommandation personnalisee.

Le quiz pose 4 questions :

1. type d'experience recherchee ;
2. periode preferee ;
3. environnement prefere ;
4. activite ideale.

Chaque reponse ajoute des points a Paris 1889, Cretace -65M ou Florence 1504.

### Resultat

Quand les 4 questions sont completees, la webapp affiche :

- la destination recommandee ;
- une explication personnalisee ;
- le prix ;
- la duree conseillee ;
- un bouton pour afficher directement la destination.

### Scenarios coherents

- Profil art + Renaissance + architecture + musees -> Florence 1504.
- Profil aventure + origines + nature sauvage + faune -> Cretace -65M.
- Profil elegance + histoire moderne + ville + monuments -> Paris 1889.

---

## Verification

Commandes de verification :

```bash
npm run build
npm audit --audit-level=low
```

Verification navigateur automatisee :

- chargement du titre principal ;
- presence des 3 cards ;
- ouverture du chatbot ;
- test des 6 questions types ;
- completion du quiz ;
- verification du menu mobile ;
- verification des images chargees.
