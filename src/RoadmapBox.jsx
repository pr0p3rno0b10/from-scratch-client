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
					image={scratchPhoto}
					alt="Scratch Photo"
				/>
				<span className="roadmap-box__courses-container__arrow-icon material-icons">arrow_right_alt</span>
				<CourseButton
					title="Python"
					image={pythonPhoto}
					alt="Python Photo"
				/>
				<span className="roadmap-box__courses-container__arrow-icon material-icons">arrow_right_alt</span>
				<CourseButton
					title="More Coming Soon..."
					image={questionMarkPhoto}
					alt="Question Mark Photo"
				/>
			</div>
		</div>

	);
}

export default RoadmapBox;