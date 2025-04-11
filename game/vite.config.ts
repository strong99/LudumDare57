import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig(options => ({
    base: '',
    plugins: [solidPlugin()],
    server: {
        port: 58827,
    },
    build: {
        target: 'esnext',
    }
}));
