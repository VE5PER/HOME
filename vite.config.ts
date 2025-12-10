import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), viteTsconfigPaths()],
    base: '/HOME/', // Matches the existing homepage field in package.json
    build: {
        outDir: 'build', // Matches the directory expected by gh-pages
    },
    server: {
        open: true, // Opens browser on start, similar to CRA
        port: 3000, // Default to 3000 to match CRA habits
    },
});
