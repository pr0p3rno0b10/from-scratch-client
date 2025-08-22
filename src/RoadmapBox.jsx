import "./index.sass";

import CourseButton from "./CourseButton";

import scratchPhoto from './images/scratch-logo.png';
import pythonPhoto from "./images/python-photo.png";
import questionMarkPhoto from "./images/question-mark-photo.png";

const RoadmapBox = () => {
	return (
		<div className="roadmap-box">
			<div className="roadmap-box__header">Roadmap</div>
			<div className="roadmap-box__courses-container">
				<CourseButton
					title="Scratch"
					img={scratchPhoto}
					alt="Scratch Photo"
					language="scratch"
				/>
				<span className="roadmap-box__courses-container__arrow-icon material-icons">arrow_right_alt</span>
				<CourseButton
					title="Python"
					img={pythonPhoto}
					alt="Python Photo"
					language="python"
				/>
				<span className="roadmap-box__courses-container__arrow-icon material-icons">arrow_right_alt</span>
				<CourseButton
					title="More Coming Soon..."
					img={questionMarkPhoto}
					alt="Question Mark Photo"
					language="more_coming_soon"
				/>
			</div>
		</div>

	);
}

export default RoadmapBox;