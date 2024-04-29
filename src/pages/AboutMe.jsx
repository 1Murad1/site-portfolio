import React, { useState } from 'react'
import styles from '../styles'
import { education, qualities } from '../constants'

const AboutMe = () => {
	const [paragraphs] = useState([
		'FrontEnd (React.js) developer with over 4 years of experience in developing web applications, developing and managing complex e-commerce sites, CMS, and internal frameworks.',
		'Proficient in HTML5, CSS5 markup languages, JavaScript, TypeScript programming languages, modern libraries and frameworks such as React.js and the entire React ecosystem: React/Redux, Redux-saga, Redux-toolkit, etc. Familiar with Vue.js. English proficiency level: intermediate.',
	])

	const [qualitiesBottomText] = useState([
		'enjoy learning new technologies',
		'serious attitude towards work',
		'aspiring to become a Full Stack developer',
	])

	return (
		<div>
			<h1
				className={`${styles.headline1} md:mb-[30px] xs:mb-[20px] text-darkBlue`}
			>
				About me
			</h1>
			{paragraphs?.map((p, ind) => {
				return (
					<p
						key={ind}
						className={`${styles.text_regular} ${
							ind === 0 ? 'mb-[20px]' : 'lg:mb-[70px] ss:mb-[40px] xs:mb-[30px]'
						} text-white`}
					>
						{p}
					</p>
				)
			})}
			<h2 className={`${styles.headline2} mb-[20px] text-darkBlue`}>
				Education
			</h2>
			{education?.map(item => {
				return (
					<div
						key={item.id}
						className={`flex lg:items-center md:items-start ss:gap-[25px] xs:gap-[15px] ss:flex-row xs:flex-col mb-[30px]`}
					>
						{item.icon}
						<div>
							<p className={`${styles.text_accent} text-white`}>{item.title}</p>
							<p className={`${styles.text_regular} text-white`}>
								{item.description}
							</p>
						</div>
					</div>
				)
			})}
			<h2 className={`${styles.headline2} mb-[23px] text-darkBlue`}>
				my qualities
			</h2>
			<div className={`flex flex-wrap mb-[30px]`}>
				{qualities?.map(q => {
					return (
						<div key={q.id} className='flex-1 flex justify-center'>
							<p
								className={`whitespace-nowrap	 text-[16px] leading-[22px] font-manrope font-medium tracking-[0.32px] uppercase px-[25px] py-[25px] text-darkBlueTransparent1`}
							>
								{q.name}
							</p>
						</div>
					)
				})}
			</div>
			<div className='flex flex-wrap items-center justify-between gap-[23px] md:pb-[50px]'>
				{qualitiesBottomText?.map((q, ind) => {
					return (
						<p
							key={ind}
							className={`text-[16px] leading-[22px] font-manrope font-medium tracking-[0.32px] uppercase text-darkBlue py-[0px] px-[0px]`}
						>
							{q}
						</p>
					)
				})}
			</div>
		</div>
	)
}

export default AboutMe
