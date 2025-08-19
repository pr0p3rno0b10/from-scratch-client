import "./NavigationBar.css";

import { Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<div className="navbar">
			<div className="title">From Scratch</div>
			<div className="links-container">
				<Link to="/roadmap" className="navbar-button">
					Roadmap
				</Link>
				<Link to="/pricing" className="navbar-button">
					Pricing
				</Link>
				<Link to="/about" className="navbar-button">
					About
				</Link>
				<Link to="/signin" className="navbar-button">
					Sign-In
				</Link>
				<Link to="/signup" className="navbar-button">
					Sign-Up
				</Link>
			</div>
		</div>
	);
}

export default NavigationBar;