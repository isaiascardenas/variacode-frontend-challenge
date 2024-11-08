/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_TITLE: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
