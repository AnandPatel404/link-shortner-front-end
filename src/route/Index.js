import React, { Suspense, useLayoutEffect, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import { Spinner } from "reactstrap";
import Loader from "../pages/Loader/Loader";

const Component = lazy(() => import("../pages/components/Index"));
const Carousel = lazy(() => import("../pages/components/Carousel"));
const Dropdowns = lazy(() => import("../pages/components/Dropdowns"));
const FormElements = lazy(() => import("../pages/components/forms/FormElements"));
const FormLayouts = lazy(() => import("../pages/components/forms/FormLayouts"));
const FormValidation = lazy(() => import("../pages/components/forms/FormValidation"));
const Modals = lazy(() => import("../pages/components/Modals"));
const Pagination = lazy(() => import("../pages/components/Pagination"));
const Popovers = lazy(() => import("../pages/components/Popovers"));
const Progress = lazy(() => import("../pages/components/Progress"));
const CheckboxRadio = lazy(() => import("../pages/components/forms/CheckboxRadio"));
const InputGroup = lazy(() => import("../pages/components/forms/InputGroup"));
const FormUpload = lazy(() => import("../pages/components/forms/FormUpload"));
const NumberSpinner = lazy(() => import("../pages/components/forms/NumberSpinner"));

const Blank = lazy(() => import("../pages/others/Blank"));
const Faq = lazy(() => import("../pages/others/Faq"));
const Regularv1 = lazy(() => import("../pages/others/Regular-1"));
const Regularv2 = lazy(() => import("../pages/others/Regular-2"));
const Terms = lazy(() => import("../pages/others/Terms"));
const NioIconPage = lazy(() => import("../pages/components/crafted-icons/NioIcon"));

const ProjectListPage = lazy(() => import("../pages/pre-built/projects/ProjectList"));
const UserProfileLayout = lazy(() => import("../pages/pre-built/user-manage/UserProfileLayout"));
const KycDetailsRegular = lazy(() => import("../pages/pre-built/kyc-list-regular/kycDetailsRegular"));
const TransListBasic = lazy(() => import("../pages/pre-built/trans-list/TransListBasic"));
const TransListCrypto = lazy(() => import("../pages/pre-built/trans-list/TransListCrypto"));
const ProductList = lazy(() => import("../pages/pre-built/products/ProductList"));
const InvoiceList = lazy(() => import("../pages/pre-built/invoice/InvoiceList"));
const InvoiceDetails = lazy(() => import("../pages/pre-built/invoice/InvoiceDetails"));
const PricingTable = lazy(() => import("../pages/pre-built/pricing-table/PricingTable"));
const DateTimePicker = lazy(() => import("../pages/components/forms/DateTimePicker"));
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
				<Route exact path={`${process.env.PUBLIC_URL}/all-links`} component={ProductList}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/qr-list`} component={ProjectListPage}></Route>
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
				<Route exact path={`${process.env.PUBLIC_URL}/create-or-find-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/branded-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/limited-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/device-targeting`} component={FullShort}></Route>

				{/*Pre-built Pages*/}
				<Route exact path={`${process.env.PUBLIC_URL}/transaction-basic`} component={TransListBasic}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/transaction-crypto`} component={TransListCrypto}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/invoice-list`} component={InvoiceList}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/invoice-details/:id`} component={InvoiceDetails}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}></Route>

				{/*Demo Pages*/}
				<Route exact path={`${process.env.PUBLIC_URL}/pages/terms-policy`} component={Terms}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v1`} component={Regularv1}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v2`} component={Regularv2}></Route>

				{/*Components*/}
				<Route exact path={`${process.env.PUBLIC_URL}/components`} component={Component}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/carousel`} component={Carousel}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/dropdowns`} component={Dropdowns}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/form-elements`} component={FormElements}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/form-layouts`} component={FormLayouts}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/checkbox-radio`} component={CheckboxRadio}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/input-group`} component={InputGroup}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/form-upload`} component={FormUpload}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/number-spinner`} component={NumberSpinner}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/form-validation`} component={FormValidation}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/datetime-picker`} component={DateTimePicker}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/modals`} component={Modals}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/pagination`} component={Pagination}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/popovers`} component={Popovers}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/progress`} component={Progress}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/spinner`} component={Spinner}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/nioicon`} component={NioIconPage}></Route>
				<Route component={RedirectAs404}></Route>
			</Switch>
		</Suspense>
	);
};
export default Pages;
