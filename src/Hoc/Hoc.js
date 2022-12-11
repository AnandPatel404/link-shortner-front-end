import { Route, Redirect } from "react-router-dom";
const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
const HocCom =
	(Component) =>
	({ history, ...props }) => {
		const id = localStorage.getItem("newId");
		return (
			<Route
				rest
				render={() =>
					checkForHexRegExp.test(id) ? (
						<Component {...props}></Component>
					) : (
						<Redirect to={`${process.env.PUBLIC_URL}/auth-register`}></Redirect>
					)
				}
			></Route>
		);
	};

export default HocCom;
