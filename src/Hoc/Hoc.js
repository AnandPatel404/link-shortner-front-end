import { Route, Redirect } from "react-router-dom";
import React from "react";
const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

const verifying = async (id) => {
	const s = id.split("_");
	if (s[0] === "s" && s[2] === "me" && checkForHexRegExp.test(id)) {
		return true;
	}
	return false;
};

const HocCom =
	(Component) =>
	({ ...props }) => {
		const id = localStorage.getItem("newId");
		return (
			<Route
				rest
				render={() =>
					verifying(id) === true ? <Component {...props}></Component> : <Redirect to={`${process.env.PUBLIC_URL}/auth-send-otp`}></Redirect>
				}
			></Route>
		);
	};
export default HocCom;
