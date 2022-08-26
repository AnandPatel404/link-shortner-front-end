import React, { useState } from "react";
import { DropdownToggle, UncontrolledDropdown } from "reactstrap";
import useUserMode from "../../../../zustand/userMode/userMode";
import Icon from "../../../../components/icon/Icon";

function Mode() {
	const [Icons, setIcons] = useState(false);
	const userMode = useUserMode((state) => state.darkMode);
	const lightMode = useUserMode((state) => state.lightMode);
	const changeIntodark = () => {
		setIcons(true);
		userMode();
	};
	const changeIntoLight = () => {
		setIcons(false);
		lightMode();
	};
	return (
		<UncontrolledDropdown className="user-dropdown">
			<DropdownToggle tag="a" className="dropdown-toggle nk-quick-nav-icon">
				{Icons === false ? <Icon name="moon" onClick={changeIntodark} /> : <Icon name="sun" onClick={changeIntoLight} />}
			</DropdownToggle>
		</UncontrolledDropdown>
	);
}

export default Mode;
