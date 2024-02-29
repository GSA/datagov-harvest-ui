import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy'

export default defineConfig({
	plugins: [
		sveltekit(),
		copy({
			targets: [
				{
					src: "node_modules/@uswds/uswds/dist/css",
					dest: "static/vendor/uswds",
				},
				{
					src: "node_modules/@uswds/uswds/dist/js",
					dest: "static/vendor/uswds",
				},
				{
					src: "node_modules/@uswds/uswds/dist/fonts",
					dest: "static/vendor/uswds",
				},
				{
					src: "node_modules/@uswds/uswds/dist/img",
					dest: "static/vendor/uswds",
				},
				{
					src: "node_modules/chart.js/dist/chart.umd.js",
					dest: "static/vendor/chartjs",
				},
				{
					src: "node_modules/chart.js/dist/chart.umd.js.map",
					dest: "static/vendor/chartjs",
				},
			],
			hook: 'writeBundle' // TODO: is this the right hook?
		})
	]
});
