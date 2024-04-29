import React from 'react'
import { avatar } from '../assets'

const Avatar = () => {
	return (
		<div
			className={`xs:bg-none ss:bg-[url('./assets/avatar.png')] md:rounded-t-[10px] md:rounded-b-[250px] ss:rounded-l-[10px] ss:rounded-r-[200px] md:mb-[50px] ss:min-w-[220px] bg-cover md:bg-center ss:bg-right bg-no-repeat ss:max-w-[400px] md:min-w-[initial] md:max-w-[initial] lg:h-[520px] md:h-[454px] ss:h-[500px] ss:px-0 xs:h-auto xs:px-[25px] xs:mb-[25px] w-[100%]`}
		>
			<img className='ss:hidden rounded-b-[100px]' src={avatar} alt='avatar' />
		</div>
	)
}

export default Avatar
