const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					DEFAULT: "#09B451",
					soft: "#E7FAEF", 
				},
				secondary: {
					DEFAULT: "#E4FFFF"
				}
			}
		},
	},
	plugins: [],
}
