/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/preline/dist/*.js'],
	theme: {
		extend: {
			backgroundImage: {
				coupon: "url('$lib/coupon.jpg')"
			}
		}
	},
	plugins: [require('@preline/accordion')]
};
