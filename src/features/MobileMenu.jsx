import React from 'react'
import styles from '../styles'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../constants'

const MobileMenu = ({ toggleMenu, isOpen }) => {
	return (
		<div
			className={`md:hidden fixed inset-y-0 top-0 bottom-auto right-0 left-0 flex items-center justify-center backdrop-blur-[35px] min-h-[500px] w-full transition bg-bgMobMenu z-50 ${
				isOpen ? 'translate-y-0' : 'translate-y-[-100%]'
			}`}
		>
			<ul className='flex items-center justify-center flex-wrap max-w-[470px] px-[20px] w-full gap-y-[50px] gap-x-[50px]'>
				{navLinks?.map(link => {
					return (
						<li key={link.id} className=''>
							<NavLink
								className={({ isActive, isPending }) =>
									isPending
										? 'pending'
										: isActive
										? `${styles.text_accent} xs:text-blue active-nav-link`
										: `${styles.text_accent} xs:text-darkBlue`
								}
								to={link.path}
							>
								{link.icon}
								{link.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default MobileMenu
