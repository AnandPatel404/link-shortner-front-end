import React from "react";
import { Route, Redirect } from "react-router-dom";

const auth = localStorage.getItem("id");

//TODO : check the user id is right or not

const PrivateRoute = ({ exact, component: Component, ...rest }) => (
	<Route
		exact={exact ? true : false}
		rest
		render={(props) => (auth ? <Component {...props} {...rest}></Component> : <Redirect to="/home"></Redirect>)}
	></Route>
);

export default PrivateRoute;
