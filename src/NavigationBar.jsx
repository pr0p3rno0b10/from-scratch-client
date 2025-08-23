import "./index.sass";

import { Link } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<div className="navbar">
			<Link to="/" className="navbar__title">From Scratch</Link>
			<div className="navbar__links-container">
				<Link to="/roadmap" className="navbar__links-container__button">
					Roadmap
				</Link>
				<Link to="/pricing" className="navbar__links-container__button">
					Pricing
				</Link>
				<Link to="/about" className="navbar__links-container__button">
					About
				</Link>
				<Link to="/signin" className="navbar__links-container__button">
					Sign-In
				</Link>
				<Link to="/signup" className="navbar__links-container__button">
					Sign-Up
				</Link>
			</div>
		</div>
	);
}

export default NavigationBar;