import React from 'react'
import styles from '../styles'
import { experience } from '../constants'

const Experience = () => {
	return (
		<div>
			<h1 className={`${styles.headline1} mb-[30px] text-darkBlue`}>
				Experience
			</h1>
			{experience?.map((e, ind) => {
				return (
					<div key={e.id} className='pb-[40px] relative'>
						{ind !== experience.length - 1 && (
							<span className='w-full absolute bottom-[30px] h-[1px] bg-lightGray'></span>
						)}
						<div className='flex items-center ss:flex-row ss:gap-[30px] xs:gap-[15px] xs:flex-col mb-[20px]'>
							<div className='flex ss:gap-[15px] xs:w-[100%] xs:flex-row ss:w-auto ss:flex-col'>
								<h2 className={`${styles.headline2} text-white`}>
									{e.startWork}
									<span className='ss:hidden xs:mr-[5px]'> - </span>
								</h2>
								<h2 className={`${styles.headline2} text-white`}>
									{e.finishWork}
								</h2>
							</div>
							<p className={`${styles.text_accent} text-white`}>
								{e.speciality}
							</p>
						</div>
						<p className={`${styles.text_accent} text-white mb-[15px]`}>
							Tasks:
						</p>
						<ul>
							{e.tasks?.map(task => {
								return (
									<li
										key={task}
										className={`${styles.text_regular} mb-[20px] text-white relative pl-[24px]`}
									>
										<span className='absolute left-[10px] top-[14px] w-[4px] h-[4px] bg-white rounded-[50%]'></span>
										{task}
									</li>
								)
							})}
						</ul>
						{e?.technology && (
							<p className={`${styles.text_regular} mb-[15px] text-white`}>
								Technology stack that was used
							</p>
						)}
						<ul className='flex flex-wrap gap-[20px] mb-[10px]'>
							{e?.technology?.map(t => {
								return (
									<li
										key={t}
										className='text-darkBlueTransparent1 text-[16px] leading-[22px] font-manrope font-medium tracking-[0.32px] uppercase'
									>
										{t}
									</li>
								)
							})}
						</ul>
					</div>
				)
			})}
		</div>
	)
}

export default Experience
