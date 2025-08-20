import './Portal.css';

import { Link } from 'react-router-dom';

import NavigationBar from "./NavigationBar";

const Portal = () => {
	return (
		<div>
			<NavigationBar/>
			<div className="container">
				<div className="introduction-box-container">
					<div className="split">
						<div className="introduction-box-left-side">
							<div className="header">Coding Classes for Kids/Adults/Elderly</div>
							<div className="list-container">
								<div className="list-element">
									<span className="material-icons">check_circle</span>
									<div className="list-text">1:1 beginner coding classes for anyone aged 7-107</div>
								</div>
								<div className="list-element">
									<span className="material-icons">check_circle</span>
									<div className="list-text">kid-friendly classes in the block programming-language Scratch</div>
								</div>
								<div className="list-element">
									<span className="material-icons">check_circle</span>
									<div className="list-text">taught by carefully-selected experienced coders</div>
								</div>
								<div className="list-element">
									<span className="material-icons">check_circle</span>
									<div className="list-text">1:1 coding classes for kids aged 7-18 tailored to your needs</div>
								</div>
								<div className="list-element">
									<span className="material-icons">check_circle</span>
									<div className="list-text">1:1 coding classes for kids aged 7-18 tailored to your needs</div>
								</div>
							</div>
							<Link to="/signup" className="first-class-button">Get your first class free!</Link>
						</div>
						<div className="introduction-box-right-side">
							<div className="graphic-image">filler for graphic image</div>
						</div>
					</div>
				</div>
				<div className="pricing-box-container">
				
				</div>
				<div className="roadmap-box-container">
					
				</div>
			</div>
		</div>
	);
}


export default Portal;
