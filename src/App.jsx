import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Partners from './components/Partners.jsx'
import TopSearched from './components/TopSearched.jsx'
import IconicLocations from './components/IconicLocations.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
	return (
		<div className="app">
			<Header />
			<main>
				<Hero />
				<Partners />
				<TopSearched />
				<IconicLocations />
			</main>
			<Footer />
		</div>
	)
}

export default App


