import React, { useState } from "react";
import classNames from "classnames";
import SimpleBar from "simplebar-react";
import Menu from "../menu/Menu";
import Toggle from "./Toggle";
import LogoLight2x from "../../images/svg/darklogo.svg";
import LogoDark2x from "../../images/only-charecter.svg";
import { Link } from "react-router-dom";

const Sidebar = ({ fixed, theme, className, sidebarToggle, mobileView, ...props }) => {
	const [collapseSidebar, setSidebar] = useState(false);
	const [mouseEnter, setMouseEnter] = useState(false);

	const toggleCollapse = () => {
		setSidebar(!collapseSidebar);
	};

	const handleMouseEnter = () => setMouseEnter(true);
	const handleMouseLeave = () => setMouseEnter(false);

	const classes = classNames({
		"nk-sidebar": true,
		"nk-sidebar-fixed": fixed,
		"is-compact": collapseSidebar,
		"has-hover": collapseSidebar && mouseEnter,
		[`is-light`]: theme === "white",
		[`is-${theme}`]: theme !== "white" && theme !== "light",
		[`${className}`]: className,
	});

	return (
		<div className={`${classes}`}>
			<div className="nk-sidebar-element nk-sidebar-head  mt-xl-2 justify-content-between">
				<div className="nk-menu-trigger">
					<Toggle className="nk-nav-toggle nk-quick-nav-icon d-xl-none mr-n2" icon="arrow-left" click={sidebarToggle} />
					<Toggle
						className={`nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex ${collapseSidebar ? "compact-active" : ""}`}
						click={toggleCollapse}
						icon="menu"
					/>
				</div>
				<Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
					<img className="logo-light logo-img" src={LogoLight2x} alt="logo" width={120} />
					<img className="logo-dark logo-img" src={LogoDark2x} alt="logo" width={120} />
				</Link>
			</div>
			<div className="nk-sidebar-content" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
				<SimpleBar className="nk-sidebar-menu">
					<Menu sidebarToggle={sidebarToggle} mobileView={mobileView} />
				</SimpleBar>
			</div>
		</div>
	);
};
export default Sidebar;
