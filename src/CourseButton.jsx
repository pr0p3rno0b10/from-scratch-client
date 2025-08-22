import "./index.sass";

const CourseButton = ({ title, img, alt }) => {
	return (
		<div className="course-button">
			<div className="course-button__title">
				{title}
			</div>
			<img className="course-button__image" src={img} alt={alt}/>
		</div>
	);
}


export default CourseButton;