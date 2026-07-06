/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RUGIX_ADMIN_MARKETING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
