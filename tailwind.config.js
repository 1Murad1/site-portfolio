/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx}'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				darkBlue: '#001431',
				blue: '#004D78',
				yellow: '#FFD600',
				gradient: 'linear-gradient(209.12deg, #5E0495 0%, #DE4079 82.27%)',
				lightGray: '#93A8C3',
				darkBlueTransparent1: 'rgba(0, 20, 49, 0.65)',
				darkBlueTransparent2: 'rgba(0, 20, 49, 0.2)',
			},
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
				mulish: ['Mulish', 'sans-serif'],
			},
			backgroundColor: {
				bgMobMenu: 'rgba(255,255,255, .25)',
			},
			maxWidth: {
				calc: 'calc(100% - 40px)',
				calcMob: 'calc(100% - 30px)',
			},
			width: {
				contentWrapperWidth: 'calc(100% - 150px)',
			},
		},
		screens: {
			xs: '320px',
			ss: '560px',
			md: '1000px',
			lg: '1200px',
			xl: '1440px',
		},
	},
	plugins: [],
}
