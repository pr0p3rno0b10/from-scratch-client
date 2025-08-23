import './index.sass';

import { Link } from 'react-router-dom';

import NavigationBar from "./NavigationBar";
import IntroductionBox from "./IntroductionBox";
import RoadmapBox from "./RoadmapBox";
import HowItWorksBox from "./HowItWorksBox.jsx"

const Portal = () => {
	return (
		<div>
			<NavigationBar/>
			<div className="portal-container">
				<IntroductionBox/>
				<RoadmapBox/>
				<HowItWorksBox/>
			</div>
		</div>
	);
}


export default Portal;
