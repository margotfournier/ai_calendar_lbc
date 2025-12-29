# After-Calendar — January 2026

Un petit projet React + Vite qui affiche un "after-calendar" interactif pour janvier 2026.

Points clés
- Chaque case du calendrier peut être "grattée" pour révéler du contenu (composant `ScratchReveal`).
- Les cases de weekend affichent une illustration de fenêtre avec un animal endormi (`SleepingAnimal` / `WinterIllustration`).
- Effets visuels : neige (`Snowfall`, rendu global en overlay), et feux d'artifice ajoutés pour le 1er janvier — rendus à l'intérieur du SVG de la fenêtre pour apparaître "à l'extérieur" (derrière les barreaux du cadre).

Installer et lancer

Prérequis : Node.js (version moderne), npm

1. Installer les dépendances

```bash
npm install
```

2. Lancer le serveur de développement

```bash
npm run dev
```

3. Ouvrir l'app (généralement http://localhost:5173)

Faits techniques
- `Snowfall` est rendu globalement dans `App.tsx` comme un overlay fixe (`fixed inset-0`) — il crée des particules de neige qui tombent sur toute la page.
- Les feux d'artifice ont été ajoutés dans `components/WinterIllustration.tsx` : ils sont dessinés dans le même SVG que le ciel et se situent avant les traits du cadre de la fenêtre, ce qui les fait apparaître "à l'extérieur" et derrière les barreaux.
- Il y a aussi un composant `components/Fireworks.tsx` (overlay HTML/CSS) dans le projet — utile pour des explosions globales — mais pour obtenir l'effet "derrière les barreaux" on privilégie l'intégration SVG dans `WinterIllustration`.

Personnalisation
- Couleurs / positions des feux : modifiez `components/WinterIllustration.tsx` (groupes `.fw-bloom` / `.fw-spark`).
- Si vous préférez des feux plus réalistes et performants pour de nombreuses particules, je peux remplacer l'implémentation SVG par un rendu canvas.

Besoin d'aide ?
Si tu veux que je :
- ajoute un son quand les feux explosent, ou
- rende le composant paramétrable (couleurs, densité, s'il apparaît sur d'autres jours),
je peux l'implémenter rapidement.

---
Petit rappel : pour vérifier le typage TypeScript : `npx tsc --noEmit` — je l'ai exécuté après les changements et il n'y avait pas d'erreur.
