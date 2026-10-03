import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative, not "/": this app is served two ways -- standalone at a
  // domain's root, and embedded under SaveIt KH's bot at /invoice/ (see
  // that project's server.js, which serves this build's dist/ there). A
  // root-absolute base only works for the first; relative asset paths work
  // under either without a post-build patch, which is what silently went
  // stale here before (the previous build was hand-edited after the fact
  // to work at /invoice/).
  base: "./",
  server: {
    host: true,
    port: 5173,
  },
});
