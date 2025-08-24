import "./index.sass";

import { Link } from 'react-router-dom';


const LearnMoreBox = ({ currentPage }) => {
	return (
		<div className="learn-more-box">
			<div className="learn-more-box__header">
				Keep on look around <span className="learn-more-box__header__highlight">From Scratch</span>'s website to learn more!
			</div>
			<div className="learn-more-box__redirection-buttons-container">
				{ currentPage !== "home" && <Link to="/" className="learn-more-box__redirection-buttons-container__redirection-button">Home Page</Link> }
				{ currentPage !== "roadmap" && <Link to="/roadmap" className="learn-more-box__redirection-buttons-container__redirection-button">Roadmap</Link> }
				{ currentPage !== "pricing" && <Link to="/pricing" className="learn-more-box__redirection-buttons-container__redirection-button">Pricing</Link>}
			</div>
		</div>
	);
}

export default LearnMoreBox;