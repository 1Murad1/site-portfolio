import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { projects } from '../constants'
import styles from '../styles'

const PortfolioPage = () => {
	return (
		<div className='relative'>
			<h1
				className={`${styles.headline1} text-darkBlue md:mb-[156px] xs:mb-[90px]`}
			>
				my Portfolio
			</h1>
			<Swiper
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={1}
				autoHeight={true}
				navigation
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
				className='slider-projects'
			>
				{projects?.map(p => {
					return (
						<SwiperSlide key={p.id} className='relative'>
							<p
								className={`${styles.bigHeadline} absolute md:top-[-265px] xs:left-[-8px] ss:left-auto right-0 xs:top-[-100px] text-darkBlueTransparent2`}
							>
								{p.year}
							</p>
							<div className='flex xs:flex-col md:flex-row md:items-center xs: items-end gap-[40px]'>
								<img
									src={p.image}
									alt='project'
									className='md:max-w-[833px] xs:max-w-[720px] w-full lg:min-w-[680px] md:min-w-[620px] md:rounded-r-[140px] md:rounded-l-[0px] xs:rounded-l-[120px]'
								/>
								<div className='md:min-w-[300px] md:max-w-[356px]'>
									<h2 className={`${styles.headline2} mb-[30px] text-white`}>
										{p.title}
									</h2>
									<p
										className={`${styles.text_regular} text-white mb-[30px] xl:w-[350px]`}
									>
										{p.description}
									</p>
									{p.button}
								</div>
							</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}

export default PortfolioPage
