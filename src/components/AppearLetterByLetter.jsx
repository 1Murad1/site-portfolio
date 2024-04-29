import React, { useState, useEffect } from 'react'
import styles from '../styles'

const AppearLetterByLetter = ({ word, customStyle }) => {
	const [visibleLetters, setVisibleLetters] = useState('')

	useEffect(() => {
		let isMounted = true

		const animateLetters = () => {
			let index = 0
			const timer = setInterval(() => {
				if (isMounted) {
					setVisibleLetters(prev => {
						if (index < word.length) {
							return prev + word.charAt(index++)
						} else {
							clearInterval(timer)
							setTimeout(() => {
								setVisibleLetters('')
								setTimeout(() => animateLetters(), 1000)
							}, 2000)
							return prev
						}
					})
				}
			}, 200)

			return () => {
				isMounted = false
				clearInterval(timer)
			}
		}

		animateLetters()
	}, [word])

	return (
		<div className={`${styles.text_light} ${customStyle}`}>
			{visibleLetters}
		</div>
	)
}

export default AppearLetterByLetter
