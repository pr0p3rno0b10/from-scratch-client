import "./index.sass";

const StepsBox = ({ title, img, alt, text, number }) => {
	return (
		<div className="step-box">
			<div className="step-box__top-half">
				<div className="step-box__top-half__title-container">
					<div className="step-box__top-half__title-container__step-number">Step {number}:</div>
					<div className="step-box__top-half__title-container__title">{title}</div>
				</div>
				<img className="step-box__top-half__graphic" src={img} alt={alt}/>
			</div>
			<div className="step-box__text">{text}</div>
		</div>
	);
}

export default StepsBox;