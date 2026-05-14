/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STAT_CARDS_URL?: string;
  readonly VITE_HOVER_EFFECTS_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
