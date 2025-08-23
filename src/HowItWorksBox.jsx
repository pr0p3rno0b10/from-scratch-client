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
					title="Sign-up"
					img=""
					alt="sign-up graphic"
					text="First, you sign up! We will ask you a bit about yourself and your past programming knowledge. Then place you in an appropriate level of programming. You'll be assigned to one of our instructors for your first class."
					number="1"
				/>
				<StepsBox
					title="First Lesson"
					img=""
					alt="first lesson graphic"
					text="First, you sign up!"
					number="2"
				/>
				<StepsBox
					title="Learn!"
					img=""
					alt="learn graphic"
					text="First, you sign up!"
					number="3"
				/>
			</div>
		</div>
	);
}

export default HowItWorksBox;