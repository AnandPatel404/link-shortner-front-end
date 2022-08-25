import React from "react";
import { DropdownToggle, UncontrolledDropdown } from "reactstrap";

import Icon from "../../../../components/icon/Icon";

function mode(props) {
	const { statemode } = props;
	return (
		<UncontrolledDropdown className="user-dropdown">
			<DropdownToggle tag="a" className="dropdown-toggle nk-quick-nav-icon">
				<Icon name="moon" />
			</DropdownToggle>
		</UncontrolledDropdown>
	);
}

export default mode;
