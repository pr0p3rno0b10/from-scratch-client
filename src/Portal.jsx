import './index.sass';

import { Link } from 'react-router-dom';

import NavigationBar from "./NavigationBar";
import IntroductionBox from "./IntroductionBox";
import RoadmapBox from "./RoadmapBox";

const Portal = () => {
	return (
		<div>
			<NavigationBar/>
			<div className="portal-container">
				<IntroductionBox/>
				<RoadmapBox/>
				<div className="pricing-box-container">
				
				</div>
			</div>
		</div>
	);
}


export default Portal;
