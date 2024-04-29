import React from 'react'
import { Controller } from 'react-hook-form'
import styles from '../styles'

const Input = ({ name, type, placeholder, control, customStyle, rules }) => {
	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field, fieldState }) => (
				<div className={`${customStyle}`}>
					<input
						className={`outline-none ${
							styles.text_light
						} text-white border-[1px] bg-[transparent] w-full px-[17px] py-[14px] ${
							fieldState.error && 'border-red-400'
						} `}
						type={type}
						{...field}
						placeholder={placeholder}
					/>
					{fieldState.error && (
						<p className='mt-[8px] text-[12px] text-red-400 pl-[8px] pr-[8px]'>
							{fieldState.error.message}
						</p>
					)}
				</div>
			)}
		/>
	)
}

export default Input
