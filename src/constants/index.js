import {
	AboutMeIco,
	ExperienceIco,
	ServicesIco,
	PortfolioIco,
	ContactsIco,
	TelegramSvg,
	LinkedinSvg,
	GithubSvg,
	EmailSvg,
	PhoneSvg,
	UnivercitySvg,
	ComputerSvg,
	HtmlSvg,
	PugSvg,
	CssSvg,
	GulpSvg,
	ScssSvg,
	SocketIoSvg,
	JavascriptSvg,
	JwtSvg,
	TypescriptSvg,
	TailwindSvg,
	ReactSvg,
	FluxSvg,
	WebpackSvg,
	StarFullSvg,
	StarEmptySvg,
	burgerImage,
	sculptureImage,
	loungeImage,
	project1,
	project2,
	project11,
	project10,
	project9,
	project8,
	project7,
	project6,
	project5,
	project4,
	project3,
} from '../assets'
import Button from '../shared/Button'
import styles from '../styles'

//navLinks
export const navLinks = [
	{
		id: 1,
		name: 'About me',
		path: '/',
		icon: (
			<AboutMeIco className={`${styles.elemCenter} ${styles.navLinksStyle}`} />
		),
	},
	{
		id: 2,
		name: 'Experience',
		path: 'experience',
		icon: (
			<ExperienceIco
				className={`${styles.elemCenter} ${styles.navLinksStyle}`}
			/>
		),
	},
	{
		id: 3,
		name: 'Services',
		path: 'services',
		icon: (
			<ServicesIco className={`${styles.elemCenter} ${styles.navLinksStyle}`} />
		),
	},
	{
		id: 4,
		name: 'Portfolio',
		path: 'portfolio',
		icon: (
			<PortfolioIco
				className={`${styles.elemCenter} ${styles.navLinksStyle}`}
			/>
		),
	},
	{
		id: 5,
		name: 'Contacts',
		path: 'contact',
		icon: (
			<ContactsIco className={`${styles.elemCenter} ${styles.navLinksStyle}`} />
		),
	},
]

//social contact links
export const socialContactLinks = [
	{
		id: 1,
		target: '_blank',
		path: 'https://t.me/wrest11',
		icon: <TelegramSvg />,
	},
	{
		id: 2,
		target: '_blank',
		path: 'https://www.linkedin.com/in/muradabdulaev/',
		icon: <LinkedinSvg />,
	},
	{
		id: 3,
		target: '_blank',
		path: 'https://github.com/1Murad1?tab=repositories',
		icon: <GithubSvg />,
	},
	{
		id: 4,
		target: '_parent',
		path: 'mailto: muradabdulaev1998borec@gmail.com',
		icon: <EmailSvg />,
	},
	{
		id: 5,
		target: '_parent',
		path: 'tel: +380668910804',
		icon: <PhoneSvg />,
	},
]

//Education
export const education = [
	{
		id: 1,
		title: 'V. N. Karazin Kharkiv National University 2015 - 2019',
		description:
			"Faculty of Radiophysics and Computer Systems, Micro and Nanotechnologies specialization, Bachelor's degree (higher technical education).",
		icon: (
			<UnivercitySvg className='ss:min-w-[80px] xs:min-w-[60px] xs:w-[60px]' />
		),
	},
	{
		id: 2,
		title: 'V. N. Karazin Kharkiv National University 2019 - 2020',
		description:
			"Faculty of Radiophysics and Computer Systems, Micro and Nanotechnologies specialization, Master's degree (higher technical education).",
		icon: (
			<UnivercitySvg className='ss:min-w-[80px] xs:min-w-[60px] xs:w-[60px]' />
		),
	},
	{
		id: 3,
		title: 'A-level 2018',
		description: 'Completed Front end-advanced courses',
		icon: (
			<ComputerSvg className='ss:min-w-[80px] xs:min-w-[60px] xs:w-[60px]' />
		),
	},
]

// Qualities
export const qualities = [
	{
		id: 1,
		name: 'active',
	},
	{
		id: 2,
		name: 'Hardworking',
	},
	{
		id: 3,
		name: 'responsible',
	},
	{
		id: 4,
		name: 'communicative',
	},
	{
		id: 5,
		name: 'determined',
	},
	{
		id: 6,
		name: 'persevering',
	},
	{
		id: 7,
		name: 'diligent',
	},
	{
		id: 8,
		name: 'Love sports',
	},
]

//Services

export const services = [
	{
		id: 1,
		icon: (
			<HtmlSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'HTML5',
		rating: <StarFullSvg />,
	},
	{
		id: 2,
		icon: (
			<PugSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'Pug',
		rating: <StarFullSvg />,
	},
	{
		id: 3,
		icon: (
			<CssSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'CSS3',
		rating: <StarFullSvg />,
	},
	{
		id: 4,
		icon: (
			<GulpSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'Gulp',
		rating: <StarFullSvg />,
	},
	{
		id: 5,
		icon: (
			<ScssSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'SCSS',
		rating: <StarFullSvg />,
	},
	{
		id: 6,
		icon: (
			<SocketIoSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'Socket.IO',
		rating: <StarEmptySvg />,
	},
	{
		id: 7,
		icon: (
			<JavascriptSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'JavaScript',
		rating: <StarEmptySvg />,
	},
	{
		id: 8,
		icon: (
			<JwtSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'JWT',
		rating: <StarEmptySvg />,
	},
	{
		id: 9,
		icon: (
			<TypescriptSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'TypeScript',
		rating: <StarEmptySvg />,
	},
	{
		id: 10,
		icon: (
			<TailwindSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'Tailwind',
		rating: <StarEmptySvg />,
	},
	{
		id: 11,
		icon: (
			<ReactSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'React.js',
		rating: <StarEmptySvg />,
	},
	{
		id: 12,
		icon: (
			<FluxSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'Flux-architecture',
		rating: <StarEmptySvg />,
	},
	{
		id: 13,
		icon: (
			<WebpackSvg className='lg:min-w-[80px] md:min-w-[60px] lg:w-[80px] md:w-[60px]' />
		),
		name: 'Webpack',
		rating: <StarFullSvg />,
	},
]

//experience
export const experience = [
	{
		id: 1,
		startWork: '07/2018',
		finishWork: '06/2019',
		speciality:
			'Worked for about a year as a Markup Developer on freelance projects',
		project: '',
		tasks: [
			'Primarily worked on the markup of landing pages, corporate websites, and online stores, utilizing technologies such as HTML5, CSS3 (Sass), Gulp, JavaScript (ES6), and Pug',
			'Have experience in email template markup, worked on a project using the Pug templating engine',
		],
	},
	{
		id: 2,
		startWork: '08/2019',
		finishWork: '05/2020',
		speciality:
			'Worked for AntHouse company in the FrontEnd React developer position.',
		project: 'Project - online cinema',
		tasks: [
			'Utilized React.js with Redux, Redux-thunk in a Flux architecture, implemented JWT authentication',
			'Worked with Ajax for asynchronous requests, used Rest API, and performed webpack bundling',
		],
	},
	{
		id: 3,
		startWork: '06/2020',
		finishWork: '01/2021',
		speciality:
			'Worked for IT Panda company in the FrontEnd developer position.',
		project: '',
		tasks: [
			'Developing websites from PSD to HTML',
			'Development of slider, parallax background, CSS3/JS animations, svg animations using jQuery in combination with JavaScript',
			'Debugging projects on JavaScript',
			'Creating lightweight web pages in JavaScript using Bootstrap 4, HTML5/CSS3',
		],
	},
	{
		id: 4,
		startWork: '03/2021',
		finishWork: '05/2021',
		speciality: 'Worked for Yllo company in the FrontEnd(Svelte.js) position.',
		project: '',
		tasks: [
			'Developing functionality for the Yllo Messenger social network on Svelte.js, project work (developing settings module)',
		],
	},
	{
		id: 5,
		startWork: '06/2021',
		finishWork: '09/2021',
		speciality:
			'Worked for Alliance company in the FrontEnd (Wordpress) developer position.',
		project: '',
		tasks: [
			'Website development on WordPress',
			'Adding Wow, parallax animations',
		],
	},
	{
		id: 6,
		startWork: '10/2021',
		finishWork: '02/2022',
		speciality: 'Worked for XADO company in the FrontEnd developer position.',
		project: '',
		tasks: [
			'Support for an online store',
			'Adding products, working with OpenCart CMS (Admin Panel), page layout according to the design',
		],
	},
	{
		id: 7,
		startWork: '04/2022',
		finishWork: '08/2023',
		speciality:
			'Worked for QLAB company in the FrontEnd React developer position.',
		project:
			'Development of the functionality of the ESCROW financial operations system',
		tasks: [
			'Component and page layout, project dependencies configuration',
			'Interacting with backend API (Swagger)',
			'User registration and authentication',
			'Creating money transfer requests to users, transferring funds within the system, depositing funds, withdrawing funds, issuing invoices to users, currency conversion',
			'Adding cryptocurrencies, exchange rates, commission calculation',
			'Creating virtual, real, and system accounts',
			'Linking wallets to each account in different currencies',
			'Creating accounts for any country and in any currency, configuring fields of credentials for each account variation',
		],
		technology: [
			'Typescript',
			'React-Router',
			'React.js',
			'Redux-Saga',
			'HTML5',
			'JavaScript',
			'Material UI',
			'React-Redux',
			'React-hook-from',
			'signalr',
			'Redux-persist',
			'CSS3',
		],
	},
]

//contacts

export const contacts = [
	{
		id: 1,
		title: '+380 (66) 891 08 04',
		path: 'tel: +380668910804',
		target: '_parent',
		icon: <PhoneSvg className='contact-icon' />,
	},
	{
		id: 2,
		title: 'LinkedIn',
		path: 'https://www.linkedin.com/in/muradabdulaev/',
		target: '_blank',
		icon: <LinkedinSvg className='contact-icon' />,
	},
	{
		id: 3,
		title: 'wrest11',
		path: 'https://t.me/wrest11',
		target: '_blank',
		icon: <TelegramSvg className='contact-icon' />,
	},
	{
		id: 4,
		title: 'muradabdulaev1998borec@gmail.com',
		path: 'mailto: muradabdulaev1998borec@gmail.com',
		target: '_parent',
		icon: <EmailSvg className='contact-icon' />,
	},
]

//Portfolio

export const portfolio = [
	{
		id: 1,
		title: 'Yudgin Burger',
		description:
			"The online store designed in a unique style corresponding to the establishment's style. The main goal was to create a website that stands out among others, can promote the brand, and boost sales.",
		image: burgerImage,
		button: (
			<Button
				path={'https://youdgin.com.ua/'}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 2,
		title: 'Universal Sculpture',
		description:
			"A comprehensively designed website for a Polish sculpture manufacturing company. The goal was to create an impressive and simple website for showcasing the sculptors' works.",
		image: sculptureImage,
		button: (
			<Button
				path={'https://genkogroup.github.io/candless/'}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 3,
		title: 'Marmelad',
		description:
			'Marmelad Lounge is a network of premium hookah lounges targeting a VIP audience. Our task was to completely create a comprehensive franchise sales landing page from scratch.',
		image: loungeImage,
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
]

export const projects = [
	{
		id: 1,
		year: 2020,
		title: 'Yudgin Burger',
		image: project1,
		description:
			'The online store designed in a unique style corresponding to the ambience of the establishment. The main goal was to create a website that would stand out among others, promote the brand, and increase sales.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 2,
		year: 2020,
		title: 'ADScreen',
		image: project10,
		description:
			'The redesign of the website for a Polish digital signage company was aimed at creating a modern version of the site and expanding the number of service pages to increase the number of inquiries. As a result, a multilingual website was developed in three languages, totaling over 100 pages, and the number of inquiries from the website increased from 2 per month to 30-40.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 3,
		year: 2020,
		title: 'Universal Sculpture',
		image: project11,
		description:
			"A comprehensively developed website for a Polish sculpture manufacturing company. The goal was to create a striking and straightforward site for showcasing the sculptors' work.",
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 4,
		year: 2019,
		title: 'Trevoga',
		image: project9,
		description:
			'Complex landing page showcasing online courses in psychology. This website has made it possible to fully automate the sales process.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 5,
		year: 2018,
		title: 'Cryptoboss',
		image: project2,
		description:
			'The client approached us with a desire to package and franchise their project. We have developed a comprehensive landing page with a thematic design and animation.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 6,
		year: 2018,
		title: 'BitBon',
		image: project3,
		description:
			'Bitbon is a digital asset that represents a share in the ownership of specific assets or resources. It is a type of cryptocurrency that is traded on a digital exchange platform. Clients receive daily requests from various CIS countries to purchase Bitbon.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 7,
		year: 2018,
		title: 'ProofBot',
		image: project4,
		description:
			'The client approached us with a request to package their product for sale in the US market. We designed a corporate website with automated subscription sales for a Telegram bot.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 8,
		year: 2018,
		title: 'Brave GK',
		image: project5,
		description:
			'The Brave equipment is quite well-known in the CIS and is now being promoted to the global market. The main task was to create a full-fledged online store that would stand out in the market and attract more customers.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 9,
		year: 2018,
		title: 'Marmelad',
		image: project6,
		description:
			'Marmelad Lounge is a premium hookah lounge chain targeting a VIP clientele. We were tasked with creating a comprehensive franchise sales landing page from scratch.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 10,
		year: 2018,
		title: 'Talisant',
		image: project7,
		description:
			"Talissant is an international company that provides trust management services for finances and multiplies client's money using innovative blockchain algorithms.",
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
	{
		id: 11,
		year: 2018,
		title: 'BORZ',
		image: project8,
		description:
			'The redesign of the website for a Polish digital signage company was aimed at creating a modern version of the site and expanding the number of service pages to increase the number of inquiries. As a result, a multilingual website was developed in three languages, totaling over 100 pages, and the number of inquiries from the website increased from 2 per month to 30-40.',
		button: (
			<Button
				path={''}
				text={'Go to the website'}
				target={'_blank'}
				download={false}
			/>
		),
	},
]
