import "./style.css";

const statCardsUrl = import.meta.env.VITE_STAT_CARDS_URL ?? "http://localhost:5173";
const hoverEffectsUrl = import.meta.env.VITE_HOVER_EFFECTS_URL ?? "http://localhost:5174";

const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>`;

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app missing");

app.innerHTML = `
  <div class="layout">
    <header class="brand">
      <h1>UI Experiments</h1>
      <p>Local monorepo gallery. Open each app in its own dev server, or use the links below when those servers are running.</p>
    </header>
    <div class="grid">
      <a class="card" href="${statCardsUrl}" target="_blank" rel="noopener noreferrer">
        <h2>Stat card examples</h2>
        <p>Services UX&ndash;aligned stat cards, combined-feature playground, and pattern showcase.</p>
        <span class="cta">Open app ${arrowSvg}</span>
      </a>
      <a class="card" href="${hoverEffectsUrl}" target="_blank" rel="noopener noreferrer">
        <h2>Hover effects</h2>
        <p>Card hover gallery with motion and layered shadows.</p>
        <span class="cta">Open app ${arrowSvg}</span>
      </a>
    </div>
    <p class="hint">
      This page runs on <code>http://localhost:5170</code> by default. Start the others with
      <code>pnpm run dev:stat-cards</code> (5173) and <code>pnpm run dev:hover</code> (5174), or set
      <code>VITE_STAT_CARDS_URL</code> and <code>VITE_HOVER_EFFECTS_URL</code> in <code>apps/home/.env</code>.
    </p>
  </div>
`;
