import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";
import PrivateRoute from "./route/PrivateRoute";

import Layout from "./layout/Index";

import Error404Classic from "./pages/error/404-classic";
import Error404Modern from "./pages/error/404-modern";
import Error504Modern from "./pages/error/504-modern";
import Error504Classic from "./pages/error/504-classic";

import Faq from "./pages/others/Faq";
import Terms from "./pages/others/Terms";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import SendOtp from "./pages/auth/SendOtp";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import verifyOtpForResetPassword from "./pages/auth/verifyOtpForResetPassword";
import ResetPassword from "./pages/auth/reSetPassword";
import Success from "./pages/auth/Success";
import InvoicePrint from "./pages/pre-built/invoice/InvoicePrint";
import PasswordProtected from "./pages/passwordProtectedLinkPage/PasswordProtectedLink";
import Pricing from "./Landing/components/Pricing";
import Features from "./Landing/components/Features";
import SectionOne from "./Landing/components/SectionOne";
const App = () => {
	return (
		<React.Fragment>
			<Switch>
				{/* Auth Pages */}
				<Route exact path="/pricing" component={Pricing}></Route>
				<Route exact path="/features" component={Features}></Route>
				<Route exact path="/home" component={SectionOne}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-success`} component={Success}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-reset`} component={ForgotPassword}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-register`} component={Register}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-login`} component={Login}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-send-otp`} component={SendOtp}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-verify-otp`} component={VerifyOtp}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-verify-otp-for-reset-password`} component={verifyOtpForResetPassword}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-reset-password`} component={ResetPassword}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/password-protected-link/:id`} component={PasswordProtected}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/invoice-print/:id`} component={InvoicePrint}></Route>

				{/* Helper pages */}
				<Route exact path={`${process.env.PUBLIC_URL}/auths/terms`} component={Terms}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auths/faq`} component={Faq}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/invoice-print`} component={InvoicePrint}></Route>

				{/*Error Pages*/}
				<Route exact path={`${process.env.PUBLIC_URL}/errors/404-classic`} component={Error404Classic}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/errors/504-modern`} component={Error504Modern}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/errors/404-modern`} component={Error404Modern}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/errors/504-classic`} component={Error504Classic}></Route>

				{/*Main Routes*/}
				<PrivateRoute exact path="" component={Layout}></PrivateRoute>

				<Route component={RedirectAs404}></Route>
			</Switch>
		</React.Fragment>
	);
};
export default withRouter(App);
