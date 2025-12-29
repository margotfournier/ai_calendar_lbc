# After-Calendar — January 2026

A small React + Vite project that renders an interactive "after-calendar" for January 2026.

Key points
- Each calendar tile can be "scratched" to reveal content (component `ScratchReveal`).
- Weekend tiles display a window illustration with a sleeping animal (`SleepingAnimal` / `WinterIllustration`).
- Visual effects: snowfall (`Snowfall`, rendered as a global overlay) and fireworks added for January 1 — the fireworks are drawn inside the window SVG so they appear "outside" (behind the window frame).

Install and run

Prerequisites: Node.js (modern), npm

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open the app (usually http://localhost:5173)

Technical notes
- `Snowfall` is rendered globally in `App.tsx` as a fixed overlay (`fixed inset-0`) and generates snow particles across the page.
- Fireworks are implemented in `components/WinterIllustration.tsx`: they are drawn in the same SVG as the sky and positioned before the window stroke so they visually appear outside the window frame.
- There is also an optional `components/Fireworks.tsx` (HTML/CSS overlay) in the project — useful for full-screen explosions — but for the "behind the frame" effect the SVG integration is preferred.

Customization
- To adjust colors/positions for the fireworks, edit `components/WinterIllustration.tsx` (groups `.fw-bloom` / `.fw-spark`).
- If you want more realistic or performant fireworks for many particles, I can switch the SVG implementation to a canvas renderer.

Need help?
If you want me to:
- add sound when fireworks explode, or
- make the component configurable (colors, density, show on other days),
I can implement that quickly.

---
Note: to check TypeScript types run `npx tsc --noEmit`. I ran it after the changes and there were no type errors.
