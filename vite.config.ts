import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	mode: 'test',
	test: {
		globals: true,
		include: ['src/**/*.test.{ts,tsx}'],
		environment: 'jsdom',
		coverage: {
			reporter: ['json', 'html'],
		},
	},
});
