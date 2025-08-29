	import React from 'react'
import './IconicLocations.css'
import { FaHeart } from 'react-icons/fa';
const featured = [
	{ name: 'Maldives', img: 'https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1632&auto=format&fit=crop', price: 360, desc: 'Tropical paradise with crystal-clear waters Lush rice water terraces and serene temples.' },
	{ name: 'New Zealand', img: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1200&auto=format&fit=crop', price: 420, desc: 'Dramatic landscapes and adventure sports Tropical paradise with crystal-clear waters.' },
	{ name: 'Australia', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop', price: 380, desc: 'Beaches, reefs, and bustling cities.Romance, art, and exquisite cuisine Beaches' },
	{ name: 'France', img: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?q=80&w=1200&auto=format&fit=crop', price: 300, desc: 'Romance, art, and exquisite cuisine Beaches, reefs, and bustling cities.' },
	{ name: 'Norway', img: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1974&auto=format&fit=crop', price: 410, desc: 'Fjords, northern lights, and scenic drives Beaches, reefs, and bustling cities.' },
	{ name: 'Bali', img: 'https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop', price: 290, desc: 'Lush rice terraces and serene temples Fjords, northern lights, and scenic drives.' },
]

const IconicLocations = () => {
	return (
		<section className="section" id="tours">
			<div className="container">
				<h2>Explore Iconic Locations ✈️</h2>
				<p>Uncover popular travel destinations that are trending right now — from adventure to relaxation.
					Uncover popular travel destinations that are trending right now from adventure to relaxation.Uncover popular travel destinations
				</p>
				<div className="grid cards">
					{featured.map((feature) => (
						<div className="card" >
							<div className="card-media">
								<img src={feature.img} alt={feature.name} />
								<span className="badge">⭐ 5.0</span>
							</div>
							<div className="card-body">
								<h3>{feature.name}</h3>
								<p className="muted">{feature.desc}</p>
								<div className="card-footer">
									<span className="price">${feature.price}</span>
									<button className="iconic-btn">See More</button>
								</div>
							</div>
							<div className="icon"><FaHeart  size={20}style={{ fill: 'white', stroke: 'black',strokeWidth:10}}/></div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default IconicLocations


