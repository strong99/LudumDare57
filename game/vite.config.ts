import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig(options => ({
    base: options.mode === 'production' ? '/ld57/' : undefined,
    plugins: [solidPlugin()],
    server: {
        port: 58827,
    },
    build: {
        target: 'esnext',
    }
}));
