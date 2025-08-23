import "./index.sass";

import StepsBox from "./StepsBox";

const HowItWorksBox = () => {
	return (
		<div className="how-it-works-box">
			<div className="how-it-works-box__medium-title">
				How <span className="how-it-works-box__medium-title__highlight">From Scratch</span> Works
			</div>
			<div className="how-it-works-box__paragraph">need to work on this</div>
			<div className="how-it-works-box__steps-box-container">
				<StepsBox
					title="Step 1: Sign-up"
					img=""
					alt="sign-up graphic"
					text="First, you sign up!"
				/>
				<StepsBox
					title="Step 2: First Lesson"
					img=""
					alt="sign-up graphic"
					text="First, you sign up!"
				/>
				<StepsBox
					title="Step 3: Learn"
					img=""
					alt="sign-up graphic"
					text="First, you sign up!"
				/>
			</div>
		</div>
	);
}

export default HowItWorksBox;