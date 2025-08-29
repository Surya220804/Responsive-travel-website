import React from 'react'
import './Header.css'

const Header = () => {
	return (
		<header className="header">
			<div className="container header-container">
				<div className="logo">TravelBest</div>
				<nav className="nav">
					<a href="#home">Home</a>
					<a href="#destinations">Destinations</a>
					<a href="#tours">Tours</a>
					<a href="#contact">Contact</a>
				</nav>
				<button className="btn btn-primary">Get Started</button>
			</div>
		</header>
	)
}

export default Header


