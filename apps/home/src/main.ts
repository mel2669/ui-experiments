import "./style.css";

const statCardsUrl =
  import.meta.env.VITE_STAT_CARDS_URL ??
  (import.meta.env.PROD ? "/stat-cards/" : "http://localhost:5173");
const hoverEffectsUrl =
  import.meta.env.VITE_HOVER_EFFECTS_URL ?? (import.meta.env.PROD ? "/hover/" : "http://localhost:5174");
const cardBorderUrl =
  import.meta.env.VITE_CARD_BORDER_URL ??
  (import.meta.env.PROD ? "/card-border-showcase/" : "http://localhost:5175");

const linkTarget = import.meta.env.PROD ? "_self" : "_blank";
const linkRel = import.meta.env.PROD ? "noopener" : "noopener noreferrer";

const arrowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>`;

const hint = import.meta.env.PROD
  ? `Demos: <code>/stat-cards/</code>, <code>/hover/</code>, and <code>/card-border-showcase/</code>.`
  : `This page runs on <code>http://localhost:5170</code> by default. Start the others with
      <code>pnpm run dev:stat-cards</code> (5173), <code>pnpm run dev:hover</code> (5174),
      and <code>pnpm run dev:card-border</code> (5175), or set
      <code>VITE_STAT_CARDS_URL</code>, <code>VITE_HOVER_EFFECTS_URL</code>, and
      <code>VITE_CARD_BORDER_URL</code> in <code>apps/home/.env</code>.`;

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) throw new Error("#app missing");

app.innerHTML = `
  <div class="layout">
    <header class="brand">
      <h1>UI Experiments</h1>
      <p>${
        import.meta.env.PROD
          ? "Pick an experiment below. Everything is served from this site."
          : "Local monorepo gallery. Open each app in its own dev server, or use the links below when those servers are running."
      }</p>
    </header>
    <div class="grid">
      <a class="card" href="${statCardsUrl}" target="${linkTarget}" rel="${linkRel}">
        <h2>Stat card examples</h2>
        <p>Services UX&ndash;aligned stat cards, combined-feature playground, and pattern showcase.</p>
        <span class="cta">Open app ${arrowSvg}</span>
      </a>
      <a class="card" href="${hoverEffectsUrl}" target="${linkTarget}" rel="${linkRel}">
        <h2>Hover effects</h2>
        <p>Card hover gallery with motion and layered shadows.</p>
        <span class="cta">Open app ${arrowSvg}</span>
      </a>
      <a class="card" href="${cardBorderUrl}" target="${linkTarget}" rel="${linkRel}">
        <h2>Card border showcase</h2>
        <p>Shadows, borders, gradients, glows, and combined card treatments.</p>
        <span class="cta">Open app ${arrowSvg}</span>
      </a>
    </div>
    <p class="hint">${hint}</p>
  </div>
`;
