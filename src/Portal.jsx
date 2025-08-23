import './index.sass';

import { Link } from 'react-router-dom';

import NavigationBar from "./NavigationBar";
import IntroductionBox from "./IntroductionBox";
import RoadmapBox from "./RoadmapBox";
import HowItWorksBox from "./HowItWorksBox";
import LearnMoreBox from "./LearnMoreBox";


const Portal = () => {
	return (
		<div>
			<NavigationBar/>
			<div className="portal-container">
				<IntroductionBox/>
				<RoadmapBox/>
				<HowItWorksBox/>
				<LearnMoreBox/>
			</div>
		</div>
	);
}


export default Portal;
