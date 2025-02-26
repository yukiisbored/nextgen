/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				yuki: "#aa00ff",
				"yuki-dark": "#7c00c8",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
