/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'gilory': ['Gilory', 'sans-serif'], // Dodaj 'Gilory' jako dostępną czcionkę
			},
			colors: {
				'blue123': '#1fb8ff',
				'orange' : '#FF9700',
				'green' : '#036949',
				'zink' : '#D9D9D9',
				'emerald': '#036949',
				'lightorange': '#F7D29B',
			},
			height: {
				'100vh': '100vh',
			}


		},
	},
	plugins: [],
}
