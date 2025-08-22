import "./index.sass";

import { Link } from 'react-router-dom';

const CourseButton = ({ title, img, alt, language }) => {
	return (
		<Link to={`/roadmap/${language}`} className="course-button">
			<div className="course-button__title">
				{title}
			</div>
			<img className="course-button__image" src={img} alt={alt}/>
		</Link>
	);
}


export default CourseButton;