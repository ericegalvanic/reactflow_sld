import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import viteTsconfigPaths from 'vite-tsconfig-paths';

import fs from 'fs';
import path from 'path';

declare module 'vite' {
  function loadEnv(
    mode: string,
    envDir: string,
    prefixes?: string | string[] | undefined
  ): ImportMetaEnv;
}

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) =>
  path.resolve(appDirectory, relativePath);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const port = Number(env.VITE_DEV_SERVER_PORT) || 1864;

  return {
    plugins: [react(), checker({ typescript: true }), viteTsconfigPaths()],
    server: {
      port,
    },
    resolve: {
      alias: {
        '@': resolveApp('src'),
      },
    },
  };
});
