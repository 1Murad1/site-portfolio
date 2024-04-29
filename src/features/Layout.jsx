import React from 'react'
import Profile from './Profile'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='flex md:flex-row xs:flex-col'>
			<Profile />
			<div
				className={`layout-content lg:max-h-[814px] md:max-h-[785px] flex flex-1 bg-white bg-opacity-25 md:rounded-b-[0px] md:rounded-r-[10px] md:mx-[0] md:my-[25px] xs:rounded-b-[10px] ss:mb-[25px] lg:p-[50px] md:py-[50px] md:px-[20px] xs:py-[30px] ss:px-[25px] ss:mx-[30px] xs:px-[15px] xs:mx-[10px] md:overflow-y-auto`}
			>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
