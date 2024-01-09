/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAIN_VITE_SECRET: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
