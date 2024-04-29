import React from 'react'
import styles from './styles'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import PortfolioPage from './pages/PortfolioPage'
import Contact from './pages/Contact'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import Experience from './pages/Experience'
import Portfolio from './pages/Portfolio'
import LeftPanel from './features/LeftPanel'
import Layout from './features/Layout'

const App = () => {
	return (
		<div
			className={`w-full lg:pt-[40px] lg:pb-[40px] ss:pt-[30px] ss:pb-0 xs:py-[20px] md:pb-[30px] min-h-[100vh] bg-[#002E50] bg-[url('./assets/main-bg.png')] bg-cover`}
		>
			<div
				className={`${styles.container} lg:flex-row xs:flex-col flex gap-x-[10px] ss:gap-y-[30px] xs:gap-y-[16px] h-[100%]`}
			>
				<LeftPanel />
				<div className={`content-wrapper w-full lg:w-contentWrapperWidth`}>
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<AboutMe />} />
							<Route path='/services' element={<Services />} />
							<Route path='/experience' element={<Experience />} />
							<Route path='/contact' element={<Contact />} />
							<Route path='/portfolio' element={<Portfolio />} />
						</Route>

						<Route path='/portfolio-page' element={<PortfolioPage />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}

export default App
