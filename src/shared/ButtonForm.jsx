import React from 'react'
import styles from '../styles'

const ButtonForm = ({ text, type, callback, customStyle }) => {
	return (
		<button
			type={type}
			className={`${styles.text_button} w-[fit-content] text-white z-[1] relative flex justify-center items-center button `}
			onClick={callback}
		>
			{text}
			<svg className={`absolute top-0 left-0 w-full h-full z-[-1]`}>
				<defs>
					<linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
						<stop
							offset='0%'
							style={{ stopColor: '#5E0495', stopOpacity: 1 }}
						/>
						<stop
							offset='100%'
							style={{ stopColor: '#DE4079', stopOpacity: 1 }}
						/>
					</linearGradient>
				</defs>
				<rect
					width='100%'
					height='100%'
					fill='none'
					stroke='url(#gradient)'
					className='svg_border stroke-[2px] w-full h-full'
				></rect>
				<rect
					width='100%'
					height='100%'
					fill='url(#gradient)'
					className='svg_bg transition-all delay-100 translate-y-[100%]'
				></rect>
			</svg>
		</button>
	)
}

export default ButtonForm
