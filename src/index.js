import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./assets/scss/dashlite.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Error404Modern = lazy(() => import("./pages/error/404-modern"));

ReactDOM.render(
	<React.Fragment>
		<ToastContainer />
		<Suspense fallback={<div />}>
			<Router basename={`/`}>
				<Route render={({ location }) => (location.state && location.state.is404 ? <Error404Modern /> : <App />)} />
			</Router>
		</Suspense>
	</React.Fragment>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
