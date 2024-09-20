/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				'custom-width': 'calc((100% - 1440px)/2)',
			},
			backgroundImage: {
				'gradient-to-b-transparent-f2f2f2': 'linear-gradient(to bottom, transparent, #F2F2F2)'
			},

			colors: {
				'blue123': '#1fb8ff',
				'orange' : '#FF9700',
				'green' : '#036949',
				'zink' : '#D9D9D9',
				'emerald': '#036949',
				'lightorange': '#F7D29B',
				'lightgrey'  : '#C9C9C9'
			},
			height: {
				'100vh': '100vh',
			}


		},
	},
	plugins: [],
}
