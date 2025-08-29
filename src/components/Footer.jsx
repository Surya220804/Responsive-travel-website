import React from 'react'
import './Footer.css'
import { FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
	return (
		<footer className="footer" id="contact">
			<div className="container footer-container">
				<div className="footer-links">
					<a href="#about">About</a>
					<a href="#services">Services</a>
					<a href="#privacy">Privacy</a>
					<a href="#terms">Terms</a>
				</div>
				<div className="social-icons">
					<a aria-label="Twitter" href="#"><FaTwitter/></a>
					<a aria-label="Instagram" href="#"><FaInstagram/></a>
					<a aria-label="YouTube" href="#"><FaYoutube/></a>
				</div>
			</div>
			<div className="container copyright">&copy; {new Date().getFullYear()} TravelBest. All rights reserved.</div>
		</footer>
	)
}

export default Footer


