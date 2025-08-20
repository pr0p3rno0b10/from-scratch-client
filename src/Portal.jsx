import './Portal.css';

import React, { useEffect, useState } from 'react';

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
							<div className="paragraph-text">1:1 coding classes for kids aged 7-18 tailored to your needs</div>
							<div className="first-class-button">Get your first class free!</div>
						</div>
						<div className="introduction-box-right-side">
							<div className="graphic-image"></div>
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
