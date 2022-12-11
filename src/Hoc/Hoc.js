import axios from "../axios/axiosconfig";
import { Route, Redirect } from "react-router-dom";
import React, { useEffect } from "react";
// TODO : Hoc is not done yet
// const HocCom = async (Component) => {
// 	console.log("hoc is running");

// 	const data = {
// 		createdId: localStorage.getItem("newId"),
// 	};
// 	if (!data.createdId) {
// 		return <Redirect to={`${process.env.PUBLIC_URL}/auth-send-otp`}></Redirect>;
// 	}
// 	await axios({
// 		method: "get",
// 		url: "auth/check-for-hoc",
// 		data,
// 	})
// 		.then((res) => {
// 			if (res.data.status === "Success") {
// 				return ({ history, ...props }) => {
// 					return <Route rest render={() => <Component {...props}></Component>}></Route>;
// 				};
// 			} else {
// 				return <Redirect to={`${process.env.PUBLIC_URL}/auth-send-otp`}></Redirect>;
// 			}
// 		})
// 		.catch((err) => {
// 			return <Redirect to={`${process.env.PUBLIC_URL}/auth-send-otp`}></Redirect>;
// 		});
// };

const HocCom = (Component) => {};
export default HocCom;
