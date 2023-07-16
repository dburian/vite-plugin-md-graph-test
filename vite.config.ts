import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { mdGraph } from 'vite-plugin-md-graph'

export default defineConfig({
	plugins: [sveltekit(), mdGraph({rootDir: '/home/dburian/docs/private_notes/'})]
});
