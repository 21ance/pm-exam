/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Source Sans"],
				sansSemiBold: ["Source Sans SemiBold"],
				sansBold: ["Source Sans Bold"],
			},
			colors: {
				gray01: "#333333",
				gray02: "#eeeeee",
				gray03: "#444444",
				gray04: "#999999",
				blue01: "#017bc1",
			},
		},
	},
	plugins: [],
};
