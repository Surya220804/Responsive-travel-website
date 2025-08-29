import React from 'react'
import './TopSearched.css'

const destinations = [
	{ name: 'Thailand', tours: 24,img:"https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1632&auto=format&fit=crop" },
	{ name: 'New Zealand', tours: 18,img:"https://images.unsplash.com/photo-1502786129293-79981df4e689?q=80&w=1200&auto=format&fit=crop" },
	{ name: 'Australia', tours: 32,img:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop" },
	{ name: 'France', tours: 21,img:"https://images.unsplash.com/photo-1488747279002-c8523379faaa?q=80&w=1200&auto=format&fit=crop" },
	{ name: 'Norway', tours: 15,img:"https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1974&auto=format&fit=crop" },
	{ name: 'Maldives', tours: 12,img:"https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop" },
	{ name: 'Canada', tours: 19,img:"https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1632&auto=format&fit=crop" },
	{ name: 'Italy', tours: 28,img:"https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1632&auto=format&fit=crop" },
]

const TopSearched = () => {
	return (
		<section className="section" id="destinations">
			<div className="container">
				<h2>Explore Top Searched Spots 🔥</h2>
				<p>Uncover popular travel destinations that are trending right now — from adventure to relaxation.
					Uncover popular travel destinations that are trending right now from adventure to relaxation.Uncover popular travel destinations
				</p>
				<div className="grid cards-destination-container">
					{destinations.map((des) => (
						<div className="card card-destination" key={des.name}>
							<div className="card-img"><img src={des.img} alt="" /></div>
							<div className="card-head">
								<h3>{des.name}</h3>
								<span className="muted">🏴{des.tours} tours</span>
							</div>
							<button className="icon-button">
								→
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TopSearched


