/**
 * Single-site Netlify output: /, /stat-cards/, /hover/, /card-border-showcase/.
 */
import { execSync } from "node:child_process";
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));

function run(cmd) {
  execSync(cmd, { cwd: root, stdio: "inherit", env: { ...process.env, FORCE_COLOR: "1" } });
}

run("pnpm --filter @ui-experiments/stat-card-examples exec vite build --base /stat-cards/");
run("pnpm --filter @ui-experiments/hover-effects-showcase exec vite build --base /hover/");
run(
  "pnpm --filter @ui-experiments/card-border-showcase exec vite build --base /card-border-showcase/",
);
run("pnpm --filter @ui-experiments/home build");

const deploy = join(root, "deploy");
rmSync(deploy, { recursive: true, force: true });
mkdirSync(deploy, { recursive: true });

cpSync(join(root, "apps/home/dist"), deploy, { recursive: true });
mkdirSync(join(deploy, "stat-cards"), { recursive: true });
cpSync(join(root, "apps/stat-cards/dist"), join(deploy, "stat-cards"), { recursive: true });
mkdirSync(join(deploy, "hover"), { recursive: true });
cpSync(join(root, "apps/hover-effects/dist"), join(deploy, "hover"), { recursive: true });
mkdirSync(join(deploy, "card-border-showcase"), { recursive: true });
cpSync(
  join(root, "apps/card-border-showcase/dist"),
  join(deploy, "card-border-showcase"),
  { recursive: true },
);

console.log(
  "Netlify bundle ready at deploy/ (/, /stat-cards/, /hover/, /card-border-showcase/)",
);
