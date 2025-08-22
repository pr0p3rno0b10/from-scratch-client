import "./index.sass";

import { Link } from 'react-router-dom';

import RainbowButton from "./RainbowButton";

const IntroductionBox = () => {
	return (
		<div className="introduction-box">
			<div className="introduction-box__left-side">
				<div className="introduction-box__left-side__header">Coding Classes for Kids/Adults/Elderly</div>
				<div className="introduction-box__left-side__list-container">
					<div className="introduction-box__left-side__list-container__list-element">
						<span className="introduction-box__left-side__list-container__list-element__round-check-mark material-icons">check_circle</span>
						<div className="introduction-box__left-side__list-container__list-element__list-text">1:1 beginner coding classes for anyone aged 7-107</div>
					</div>
					<div className="introduction-box__left-side__list-container__list-element">
						<span className="introduction-box__left-side__list-container__list-element__round-check-mark material-icons">check_circle</span>
						<div className="introduction-box__left-side__list-container__list-element__list-text">kid-friendly classes in the block programming-language Scratch</div>
					</div>
					<div className="introduction-box__left-side__list-container__list-element">
						<span className="introduction-box__left-side__list-container__list-element__round-check-mark material-icons">check_circle</span>
						<div className="introduction-box__left-side__list-container__list-element__list-text">taught by carefully-selected experienced coders</div>
					</div>
					<div className="introduction-box__left-side__list-container__list-element">
						<span className="introduction-box__left-side__list-container__list-element__round-check-mark material-icons">check_circle</span>
						<div className="introduction-box__left-side__list-container__list-element__list-text">lorem ipslum</div>
					</div>
					<div className="introduction-box__left-side__list-container__list-element">
						<span className="introduction-box__left-side__list-container__list-element__round-check-mark material-icons">check_circle</span>
						<div className="introduction-box__left-side__list-container__list-element__list-text">lorem ipslum</div>
					</div>
					<RainbowButton/>
				</div>
			</div>
			<div className="introduction-box__right-side">
				<div className="introduction-box__right-side__graphic-image">filler for graphic image</div>
			</div>
		</div>
	);
}

export default IntroductionBox;