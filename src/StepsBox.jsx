import "./index.sass";

const StepsBox = ({ title, img, alt, text }) => {
	return (
		<div className="step-box">
			<div className="step-box__top-half">
				<div className="step-box__top-half__title">{title}</div>
				<img className="step-box__top-half__graphic" src={img} alt={alt}/>
			</div>
			<div className="step-box__text">{text}</div>
		</div>
	);
}

export default StepsBox;