import React, { Suspense, useLayoutEffect, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import userSubStore from "../zustand/Subscription/sub";

const Blank = lazy(() => import("../pages/others/Blank"));

const QrList = lazy(() => import("../pages/pre-built/projects/QrList"));

const UserProfileLayout = lazy(() => import("../pages/pre-built/user-manage/UserProfileLayout"));

const KycDetailsRegular = lazy(() => import("../pages/pre-built/kyc-list-regular/kycDetailsRegular"));

const TransListBasic = lazy(() => import("../pages/pre-built/trans-list/TransListBasic"));

const AllLinks = lazy(() => import("../pages/pre-built/products/ProductList"));

const PricingTable = lazy(() => import("../pages/pre-built/pricing-table/PricingTable"));

const ChangePassword = lazy(() => import("../pages/auth/changePassword"));

const Editlink = lazy(() => import("../pages/pre-built/editLink/editlink"));

const AddDomain = lazy(() => import("../pages/pre-built/domain/addDomain"));

const SetErrorPage = lazy(() => import("../pages/pre-built/errorPage/SetErrorPage"));

const ClientDetails = lazy(() => import("../pages/pre-built/products/ClientDetails"));

const FullShort = lazy(() => import("../pages/pre-built/fullShort/FullShort"));

const ApiCred = lazy(() => import("../pages/pre-built/apiCred/apiCred"));

const Invest = lazy(() => import("../pages/Invest"));

const Pages = () => {
	const { subscription } = userSubStore((state) => ({
		subscription: state.subscription,
	}));

	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Suspense fallback={<div></div>}>
			<Switch>
				{/*Dashboards and used route*/}
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={Invest}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/all-links`} component={AllLinks}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/qr-list`} component={QrList}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/_blank`} component={Blank}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/link/:id`} component={KycDetailsRegular}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/update-link/:id`} component={Editlink}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/add-custom-domain`} component={AddDomain}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/set-error-page`} component={SetErrorPage}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-change-password`} component={ChangePassword}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-setting/`} component={UserProfileLayout}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-regular/`} component={UserProfileLayout}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-notification/`} component={UserProfileLayout}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-activity/`} component={UserProfileLayout}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/client-details/:id/:page`} component={ClientDetails}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/api-credentials`} component={ApiCred}></Route>

				{/* custom page */}
				<Route exact path={`${process.env.PUBLIC_URL}/create-full-link`} component={FullShort}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/create-or-find-link`} component={FullShort}></Route>

				{subscription.planId?.browser_targeting_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/browser-targeting`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.custom_domain === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/create-with-custom-domain`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.expiration_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/create-expiration-link`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.password_protected_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/password-protected-link`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.qr_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/create-qr-link`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.custom_qr_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/create-qr-link-with-logo`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.unique_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/branded-link`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.limited_click_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/limited-link`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.device_targeting_link === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/device-targeting`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.custom_link_redirection_page === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/re-direction-link`} component={FullShort}></Route>
				) : null}

				{subscription.planId?.error_redirect === true ? (
					<Route exact path={`${process.env.PUBLIC_URL}/add-error-redirection`} component={FullShort}></Route>
				) : null}

				{/*Pre-built Pages*/}
				<Route exact path={`${process.env.PUBLIC_URL}/transaction-list`} component={TransListBasic}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}></Route>

				<Route component={RedirectAs404}></Route>
			</Switch>
		</Suspense>
	);
};
export default Pages;
