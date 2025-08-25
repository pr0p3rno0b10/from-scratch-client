const calcTransform = ({ top, bottom, height, side }) => {
	const unit = (bottom - top) / 19
	// buffer = 0
	// first padding = 1
	// 1st content = 2-4
	// 2nd padding = 5
	// 2nd content = 6-8
	// 3rd padding = 9
	// 3rd content = 10-12
	// 4th padding = 13
	// 4th content = 14-16
	// bottom padding = 17
	// buffer = 18
	const transform = 0
	if ((height - top) > unit * 2 && (height - top) <= unit * 5) transform = (height - top - unit * 2) / (unit * 3) * 0.25
	else if ((height - top) < unit * 6) transform = 0.25
	else if ((height - top) <= unit * 9) transform = (height - top - unit * 6) / (unit * 3) * 0.5
	else if ((height - top) < unit * 10) transform = 0.5
	else if ((height - top) <= unit * 13) transform = (height - top - unit * 10) / (unit * 3) * 0.75
	else transform = 0.75
	return `0px, ${"-" + side === "right" ? 0.75 - transform : transform + "%"}, 0px`
}

const Section = ({ children, attrs }) => (
	<div style={{
		willChange: "transform",
		transform: `translate3d(${calcTransform(attrs)}) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
		transformStyle: "preserve-3d"
	}}>
		{ children }
	</div>
)

const RightSection = ({ children, top, bottom, height }) => (

)

const ParallaxBox = height => (
	<div className="parallax-viewbox">
		<div className="parallax-viewbox__box">
			<div className="parallax-viewbox__box__left">
				
			</div>
			<div className="parallax-viewbox__box__right">
				
			</div>
		</div>
	</div>
)
