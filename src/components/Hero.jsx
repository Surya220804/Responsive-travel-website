import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import './Hero.css'

const Hero = () => {
	return (
		<section className="hero" id="home">
			<div className="container hero-container">
				<div className="hero-text">
                <div className="hero-heading">Discover the World! 🌍</div>
					<h1 className='hero-title'>Travel the Best It's a Big World, Go Explore! 🚀</h1>
					<p className="subtitle">Find unforgettable experiences and curated tours across the globe. Discover hidden gems, iconic landmarks, and make memories that last a lifetime.</p>
					<div className="hero-actions">
						<button className=" hero-primary-btn">Get Started <FaTelegramPlane/></button>
						<button className="hero-secondary-btn">Watch Demo</button>
					</div>
					<div className="rating-card">
						<div className="avatars">
							<span className="avatar" />
							<span className="avatar" />
							<span className="avatar" />
						</div>
						<div className="rating-text">
						<span>Our Happy customers</span>
						⭐4.5 (10.2k reviews)
						</div>
					</div>
				</div>
				<div className="hero-image">
					<img src="https://img.freepik.com/premium-photo/traveling-girl-white-background_1015182-1506.jpg" alt="Traveler with backpack and map" />
				</div>
			</div>
		</section>
	)
}

export default Hero;

