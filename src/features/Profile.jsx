import React from 'react'
import Avatar from '../components/Avatar'
import SocialContacts from '../components/SocialContacts'
import styles from '../styles'
import AppearLetterByLetter from '../components/AppearLetterByLetter'
import Button from '../shared/Button'
import { resume } from '../assets'

const Profile = () => {
	return (
		<div
			className={`profile lg:w-[495px] md:w-[430px] flex md:flex-col md:h-[100%] ss:h-[500px] ss:flex-row ss:pb-0 xs:flex-col xs:pb-[45px] rounded-[10px] shadow-[4px_0px_26px_0px_rgba(1,0,67,0.15)] bg-[white] bg-opacity-25`}
		>
			<Avatar />
			<div className='flex-1 ss:flex ss:flex-col ss:justify-center'>
				<SocialContacts />
				<div className={`px-[18px] lg:pb-[70px] md:pb-[50px] md:mt-auto`}>
					<h1
						className={`${styles.headline1} mb-[10px] text-darkBlue text-center`}
					>
						murad abdulaev
					</h1>
					<AppearLetterByLetter
						customStyle='text-darkBlue text-center mb-[20px] h-[25.6px]'
						word={'Frontend React developer'}
					/>
					<div
						className={`flex flex-wrap items-center gap-[20px] justify-center`}
					>
						<Button
							path={resume}
							text={'Download CV'}
							target={'_blank'}
							download={true}
						/>
						<Button
							path={'/contact'}
							text={'contact me'}
							target={''}
							download={false}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
