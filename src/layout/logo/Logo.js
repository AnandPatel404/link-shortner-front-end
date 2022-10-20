import React from "react";
import LogoLight2x from "../../images/svg/darklogo.svg";
import LogoDark2x from "../../images/only-charecter.svg";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/" className="logo-link">
			<img className="logo-light logo-img" src={LogoLight2x} alt="logo" width={120} />
			<img className="logo-dark logo-img" src={LogoDark2x} alt="logo" width={120} />
		</Link>
	);
};

export default Logo;
