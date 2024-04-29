import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../constants'
import styles from '../styles'

const Navbar = () => {
	return (
		<div
			className={`xs:hidden md:flex rounded-[10px] lg:bg-[white] lg:bg-opacity-25 lg:flex-col md:flex-row items-center gap-[18px] lg:py-[15px] lg:px-[15px] w-[max-content]`}
		>
			{navLinks?.map(link => {
				return (
					<NavLink
						className={({ isActive, isPending }) =>
							isPending
								? 'pending'
								: isActive
								? `${styles.text_accent} lg:text-blue md:text-white active-nav-link`
								: `${styles.text_accent} lg:text-darkBlue md:text-lightGray`
						}
						key={link.id}
						to={link.path}
					>
						{link.icon}
						{link.name}
					</NavLink>
				)
			})}
		</div>
	)
}

export default Navbar
