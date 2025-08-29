import React from 'react'
import './Partners.css'

const logos = [
	{ name: 'TripAdvisor', url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
	{ name: 'Expedia', url: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg" },
	{ name: 'Airbnb', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
	{ name: 'Orbitz', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
	{ name: 'Booking.com', url: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg' },
]

const Partners = () => {
	return (
		<section className="partners">
			<div className="container">
				<div className="partners-grid">
					{logos.map((logo) => (
						<div key={logo.name} className="partner-logo">
							<img src={logo.url} alt={logo.name} />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Partners


