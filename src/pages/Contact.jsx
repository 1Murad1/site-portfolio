import React from 'react'
import styles from '../styles'
import { contacts } from '../constants'
import { Link } from 'react-router-dom'
import Input from '../shared/Input'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import {
	emailValidation,
	messageValidation,
	nameValidation,
	phoneValidation,
} from '../helpers/rules'
import Button from '../shared/Button'
import ButtonForm from '../shared/ButtonForm'
import Textarea from '../shared/Textarea'

const Contact = () => {
	const {
		handleSubmit,
		clearErrors,
		reset,
		watch,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: { name: '', email: '', phone: '', message: '' },
	})

	const submit = data => console.log(data)

	const error = data => console.log(data)

	const message = watch('message')

	return (
		<div className='w-full'>
			<h1 className={`${styles.headline1} mb-[30px] text-darkBlue`}>
				Contact me
			</h1>
			<form
				onSubmit={handleSubmit(submit, error)}
				className={`mb-[50px] w-full flex flex-wrap gap-[20px] items-start`}
			>
				<Input
					control={control}
					type='text'
					name='name'
					placeholder='Name'
					customStyle={'flex-1'}
					rules={nameValidation}
				/>
				<Input
					control={control}
					type='text'
					name='phone'
					placeholder='Phone number'
					customStyle={'flex-1'}
					rules={phoneValidation}
				/>
				<Input
					control={control}
					type='text'
					name='email'
					placeholder='Email'
					customStyle={'w-full'}
					rules={emailValidation}
				/>
				<Textarea
					control={control}
					type='text'
					name='message'
					placeholder='Your message'
					customStyle={'w-full'}
					rules={messageValidation}
				/>
				<ButtonForm
					type='submit'
					text='Send'
					callback={() => {}}
					customStyle='hover:bg-[#fff] hover:text-[#316FEA] border-[#316FEA] text-white bg-[#316FEA]'
				/>
				<p
					className={`text-lightGray ${styles.text_light} ml-auto ${
						message.length > 235 && 'alert'
					}`}
				>
					{message.length}/235
				</p>
			</form>
			<div className='pb-[50px]'>
				<h2 className={`${styles.headline2} pl-[13px] mb-[20px] text-darkBlue`}>
					my contacts
				</h2>
				<ul className='flex flex-wrap gap-x-[70px] gap-y-[20px]'>
					{contacts?.map(contact => {
						return (
							<li
								key={contact.id}
								className='flex items-center gap-[10px] cursor-pointer'
							>
								{contact.icon}
								<Link
									to={contact.path}
									className={`${styles.text_regular} text-darkBlue ${
										contact.id === 4 &&
										'email-link xs:text-ellipsis xs:whitespace-nowrap xs:overflow-hidden'
									}`}
									target={contact.target}
								>
									{contact.title}
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Contact
