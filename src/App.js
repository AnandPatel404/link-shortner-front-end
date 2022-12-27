import React, { lazy } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";
import "./Landing/custom.min.css";
const PrivateRoute = lazy(() => import("./route/PrivateRoute"));
const Error404Classic = lazy(() => import("./pages/error/404-classic"));
const Error404Modern = lazy(() => import("./pages/error/404-modern"));
const Error504Classic = lazy(() => import("./pages/error/504-classic"));
const Error504Modern = lazy(() => import("./pages/error/504-modern"));
const Faq = lazy(() => import("./pages/others/Faq"));
const Terms = lazy(() => import("./pages/others/Terms"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const SendOtp = lazy(() => import("./pages/auth/SendOtp"));
const VerifyOtp = lazy(() => import("./pages/auth/VerifyOtp"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const verifyOtpForResetPassword = lazy(() => import("./pages/auth/verifyOtpForResetPassword"));
const ResetPassword = lazy(() => import("./pages/auth/reSetPassword"));
const PasswordProtected = lazy(() => import("./pages/passwordProtectedLinkPage/PasswordProtectedLink"));
const Pricing = lazy(() => import("./Landing/components/Pricing"));
const SectionOne = lazy(() => import("./Landing/components/SectionOne"));
const Credits = lazy(() => import("./Landing/components/SectionSix"));
const LinkVerification = lazy(() => import("./pages/linkVerification/linkVerification"));
const ContectUs = lazy(() => import("./Landing/components/ContectUs"));
const Layout = lazy(() => import("./layout/Index"));
const Solutions = lazy(() => import("./Landing/components/Solutions"));

const App = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact path={`${process.env.PUBLIC_URL}/pricing`} component={Pricing}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/all-features`} component={Solutions}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/credits`} component={Credits}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/contact-us`} component={ContectUs}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/home`} component={SectionOne}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-reset`} component={ForgotPassword}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-register`} component={Register}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-login`} component={Login}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-send-otp`} component={SendOtp}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-verify-otp`} component={VerifyOtp}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-verify-otp-for-reset-password`} component={verifyOtpForResetPassword}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/auth-reset-password`} component={ResetPassword}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/password-protected-link/:id`} component={PasswordProtected}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/link-verification/:id/:orderId`} component={LinkVerification}></Route>

				{/* Helper pages */}
				<Route exact path={`${process.env.PUBLIC_URL}/pages/terms-policy`} component={Terms}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}></Route>

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
