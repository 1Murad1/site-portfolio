import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { BurgerIcoSvg, CloseIcoSvg, logo } from '../assets'
import MobileMenu from './MobileMenu'

const LeftPanel = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className='lg:w-[max-content] flex lg:flex-col relative lg:justify-center xs:justify-between items-center'>
			<Link
				className={`w-[fit-content] lg:absolute z-[100] ${
					isOpen && 'ss:fixed top-[30px] left-[20px]'
				} lg:top-0`}
				to={'/'}
			>
				<img src={logo} alt='logo' />
			</Link>
			<Navbar />
			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} fixed inset-0 bg-black opacity-50 z-50 transition-opacity duration-500`}
				onClick={toggleMenu}
			></div>
			<MobileMenu toggleMenu={toggleMenu} isOpen={isOpen} />
			<button
				onClick={toggleMenu}
				className={`justify-center items-center xs:flex md:hidden w-[45px] ${
					isOpen && 'fixed top-[40px] right-[20px]'
				} z-[100]`}
			>
				{isOpen ? <CloseIcoSvg /> : <BurgerIcoSvg />}
			</button>
		</div>
	)
}

export default LeftPanel
