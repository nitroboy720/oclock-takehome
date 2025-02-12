# Générateur de quotes - Test Technique

Ceci est un template de départ pour un test technique.

## Stack Technique
- Sveltekit sans SSR ni Prerendering
- TypeScript
- Bulma

## Description du Projet

Vous devez créer un générateur de quotes permettant aux utilisateurs de créer et visualiser des quotes pour des produits ou services.

#### Exigences Principales
- Créer les types requis dans $lib/types.ts
- Créer les composants requis dans $lib/components
- Créer les pages requises dans $lib/routes
- Documenter les hypothèses et décisions
- Coder en anglais

#### Création de quotes
- Les utilisateurs doivent pouvoir ajouter plusieurs lignes au quotes
- Chaque ligne doit inclure :
  - Nom du produit/service
  - Prix unitaire
  - Quantité
- Les utilisateurs doivent pouvoir supprimer des lignes
- Les utilisateurs doivent pouvoir modifier des lignes existantes
- OPTIONNEL : Section informations société/client

#### Génération de quotes
- Un bouton pour générer le quotes final
- Le quotes généré doit afficher :
  - Sous-total
  - Montant de la TVA (20%)
  - Montant total
  - Date de création
  - Numéro/référence unique de quotes

#### Exigences UI/UX
- Utiliser Bulma pour le style (CSS personnalisé minimal ou inexistant)
- Interface claire et intuitive

### Fonctionnalités Bonus (Optionnelles)
- Possibilité de sauvegarder les quotes (localStorage suffisant)
- Génération PDF/Impression

## Suggestions
Conseils pour les Candidats
- Se concentrer d'abord sur les exigences principales
- Planifier la structure des types et des composants avant de coder, tu peux valider avec moi si tu veux
- Garder l'interface simple en utilisant les composants intégrés de Bulma

- Bulma, sveltekit et svelte sont déjà installés
- Documentation Bulma : https://bulma.io/documentation/
- Documentation Svelte : https://svelte.dev/docs
- Tutoriel SvelteKit : https://svelte.dev/docs/kit/tutorial
- Documentation SvelteKit : https://svelte.dev/docs/kit
- Je m'attends à ce que tu me poses des questions s'il y a quoi que ce soit de pas clair ou que tu aimerais un coup de main

