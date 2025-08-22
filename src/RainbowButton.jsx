import "./index.sass";

import { Link } from 'react-router-dom';

const RainbowButton = () => {
	return (
		<>
			<Link to="/signup" className="rainbow-button">Get your first class free!</Link>
		</>
	);
}

export default RainbowButton;