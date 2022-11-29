import React, { Suspense, useLayoutEffect, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import Loader from "../pages/Loader/Loader";

const Blank = lazy(() => import("../pages/others/Blank"));

const Regularv1 = lazy(() => import("../pages/others/Regular-1"));
const Regularv2 = lazy(() => import("../pages/others/Regular-2"));

const NioIconPage = lazy(() => import("../pages/components/crafted-icons/NioIcon"));

const QrList = lazy(() => import("../pages/pre-built/projects/QrList"));
const UserProfileLayout = lazy(() => import("../pages/pre-built/user-manage/UserProfileLayout"));
const KycDetailsRegular = lazy(() => import("../pages/pre-built/kyc-list-regular/kycDetailsRegular"));
const TransListBasic = lazy(() => import("../pages/pre-built/trans-list/TransListBasic"));
const AllLinks = lazy(() => import("../pages/pre-built/products/ProductList"));
const InvoiceList = lazy(() => import("../pages/pre-built/invoice/InvoiceList"));
const InvoiceDetails = lazy(() => import("../pages/pre-built/invoice/InvoiceDetails"));
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
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Suspense fallback={<Loader />}>
			<Switch>
				{/*Dashboards and used route*/}
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={Invest}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/all-links`} component={AllLinks}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/qr-list`} component={QrList}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/_blank`} component={Blank}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/link/:id`} component={KycDetailsRegular}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/link-details/:id`} component={Editlink}></Route>
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
				<Route exact path={`${process.env.PUBLIC_URL}/create-with-custom-domain`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/create-expiration-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/password-protected-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/create-qr-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/create-qr-link-with-logo`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/create-or-find-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/branded-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/limited-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/device-targeting`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/re-direction-link`} component={FullShort}></Route>

				{/*Pre-built Pages*/}
				<Route exact path={`${process.env.PUBLIC_URL}/transaction-list`} component={TransListBasic}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/invoice-list`} component={InvoiceList}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/invoice-details/:id`} component={InvoiceDetails}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}></Route>

				{/*Demo Pages*/}
				<Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v1`} component={Regularv1}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v2`} component={Regularv2}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/nioicon`} component={NioIconPage}></Route>
				<Route component={RedirectAs404}></Route>
			</Switch>
		</Suspense>
	);
};
export default Pages;
