import React from 'react'
import styles from '../styles'
import { services } from '../constants'

const Services = () => {
	return (
		<div>
			<h1 className={`${styles.headline1} mb-[30px] text-darkBlue`}>
				Services
			</h1>
			<div
				className={`flex flex-wrap justify-between items-stretch gap-[30px] md:pb-[50px]`}
			>
				{services?.map(service => {
					return (
						<div
							key={service.id}
							className='flex items-center gap-[20px] flex-1'
						>
							{service.icon}
							<div>
								<h2
									className={`${styles.headline2} mb-[10px] text-white md:text-[22px] md:leading-[28px]`}
								>
									{service.name}
								</h2>
								{service.rating}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Services
