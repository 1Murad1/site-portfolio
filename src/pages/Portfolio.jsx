import React from 'react'
import styles from '../styles'
import { portfolio } from '../constants'
import Button from '../shared/Button'

const Portfolio = () => {
	return (
		<div>
			<h1 className={`${styles.headline1} mb-[30px] text-darkBlue`}>
				Portfolio
			</h1>
			<div className='md:pb-[50px]'>
				{portfolio?.map((project, ind) => {
					return (
						<div key={project.id} className='ss:mb-[50px] xs:mb-[30px]'>
							<h2
								className={`${ind % 2 === 0 ? 'text-right' : 'text-left'} ${
									styles.headline2
								} mb-[20px] text-darkBlue`}
							>
								{project.title}
							</h2>
							<div
								className={`${
									ind % 2 === 0 ? '' : 'flex-row-reverse'
								} flex justify-between items-end gap-[20px] flex-wrap-reverse`}
							>
								<div className='flex-1 ss:min-w-[250px] xs:min-w-[240px]'>
									<p className={`${styles.text_regular} text-white mb-[25px]`}>
										{project.description}
									</p>
									<div
										className={`flex ${
											ind % 2 === 0 ? 'justify-start' : 'justify-end'
										} `}
									>
										{project.button}
									</div>
								</div>
								<div
									className={`flex-1 ss:min-w-[250px] max-w-[330px] xs:min-w-[240px] ${
										ind % 2 === 0 ? 'ml-auto' : 'mr-auto'
									}`}
								>
									<img className='w-full' src={project.image} alt='project' />
								</div>
							</div>
						</div>
					)
				})}
				<div className='flex justify-center'>
					<Button
						path={'/portfolio-page'}
						text={'view all works'}
						target={''}
						download={false}
					/>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
