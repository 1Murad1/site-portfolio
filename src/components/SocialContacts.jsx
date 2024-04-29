import React from 'react'
import { Link } from 'react-router-dom'
import { socialContactLinks } from '../constants'

const SocialContacts = () => {
	return (
		<div
			className={`flex items-center justify-center gap-[20px] ss:mb-[50px] xs:mb-[25px]`}
		>
			{socialContactLinks?.map(sl => {
				return (
					<Link
						key={sl.id}
						className='social-contact-link'
						to={sl.path}
						target={sl.target}
					>
						{sl.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default SocialContacts
