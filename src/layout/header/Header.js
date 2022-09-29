import React from "react";
import classNames from "classnames";
import Toggle from "../sidebar/Toggle";
import User from "./dropdown/user/User";
// import Notification from "./dropdown/notification/Notification";
import Mode from "./dropdown/mode/mode";
import "./style.css";
import userActivity from "../../zustand/DashBoard/userDashBoard";

const Header = ({ fixed, theme, className, setVisibility, ...props }) => {
	const headerClass = classNames({
		"nk-header": true,
		"nk-header-fixed": false,
		[`is-light`]: theme === "white",
		[`is-${theme}`]: theme !== "white" && theme !== "light",
		[`${className}`]: className,
	});
	const sub = userActivity((state) => state.subscription);
	const date = new Date(sub.expireAt).setDate(new Date(sub.expireAt).getDate() - 6);
	return (
		<div className={`${headerClass} mt-md-2 borderReduis mx-md-4 `}>
			<div className="container-fluid">
				<div className="nk-header-wrap">
					<div className="nk-menu-trigger d-xl-none ml-n1">
						<Toggle className="nk-nav-toggle nk-quick-nav-icon d-xl-none ml-n1" icon="menu" click={props.sidebarToggle} />
					</div>
					{date < new Date() ? (
						<div className="d-none d-md-block">
							<p>{`⏰ Your plan expire in ${new Date(sub.expireAt).toLocaleString()}`}</p>
						</div>
					) : (
						""
					)}
					<div className="nk-header-tools">
						<ul className="nk-quick-nav">
							<li className="user-dropdown" onClick={() => setVisibility(false)}>
								<User />
							</li>
							<li className="notification-dropdown mr-n1" onClick={() => setVisibility(false)}>
								<Mode />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
