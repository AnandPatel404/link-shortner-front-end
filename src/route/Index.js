import React, { Suspense, useLayoutEffect, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { RedirectAs404 } from "../utils/Utils";
import { Spinner } from "reactstrap";

import Component from "../pages/components/Index";
import Accordian from "../pages/components/Accordions";
import Alerts from "../pages/components/Alerts";
import Avatar from "../pages/components/Avatar";
import Badges from "../pages/components/Badges";
import Breadcrumbs from "../pages/components/Breadcrumbs";
import ButtonGroup from "../pages/components/ButtonGroup";
import Buttons from "../pages/components/Buttons";
import Cards from "../pages/components/Cards";
import Carousel from "../pages/components/Carousel";
import Dropdowns from "../pages/components/Dropdowns";
import FormElements from "../pages/components/forms/FormElements";
import FormLayouts from "../pages/components/forms/FormLayouts";
import FormValidation from "../pages/components/forms/FormValidation";
import DataTablePage from "../pages/components/table/DataTable";
import Modals from "../pages/components/Modals";
import Pagination from "../pages/components/Pagination";
import Popovers from "../pages/components/Popovers";
import Progress from "../pages/components/Progress";
// import Spinner from "../pages/components/Spinner";
import Tabs from "../pages/components/Tabs";
import Toast from "../pages/components/Toast";
import Tooltips from "../pages/components/Tooltips";
import Typography from "../pages/components/Typography";
import CheckboxRadio from "../pages/components/forms/CheckboxRadio";
import AdvancedControls from "../pages/components/forms/AdvancedControls";
import InputGroup from "../pages/components/forms/InputGroup";
import FormUpload from "../pages/components/forms/FormUpload";
import NumberSpinner from "../pages/components/forms/NumberSpinner";
import NouiSlider from "../pages/components/forms/nouislider";
import WizardForm from "../pages/components/forms/WizardForm";
import UtilBorder from "../pages/components/UtilBorder";
import UtilColors from "../pages/components/UtilColors";
import UtilDisplay from "../pages/components/UtilDisplay";
import UtilEmbeded from "../pages/components/UtilEmbeded";
import UtilFlex from "../pages/components/UtilFlex";
import UtilOthers from "../pages/components/UtilOthers";
import UtilSizing from "../pages/components/UtilSizing";
import UtilSpacing from "../pages/components/UtilSpacing";
import UtilText from "../pages/components/UtilText";

const Blank = lazy(()=>import("../pages/others/Blank"))
const Faq = lazy(()=>import("../pages/others/Faq"))
const Regularv1 = lazy(()=>import("../pages/others/Regular-1"))
const Regularv2 = lazy(()=>import("../pages/others/Regular-2"))
const Terms = lazy(()=>import("../pages/others/Terms"))
const BasicTable = lazy(()=>import("../pages/components/table/BasicTable"))
const SpecialTablePage = lazy(()=>import("../pages/components/table/SpecialTable"))
const ChartPage = lazy(()=>import("../pages/components/charts/Charts"))
const NioIconPage = lazy(()=>import("../pages/components/crafted-icons/NioIcon"))
const SVGIconPage = lazy(()=>import("../pages/components/crafted-icons/SvgIcons"))

const ProjectListPage = lazy(()=>import("../pages/pre-built/projects/ProjectList"))
const UserProfileLayout = lazy(()=>import("../pages/pre-built/user-manage/UserProfileLayout"))
const KycListRegular = lazy(()=>import("../pages/pre-built/kyc-list-regular/KycListRegular"))
const KycDetailsRegular = lazy(()=>import("../pages/pre-built/kyc-list-regular/kycDetailsRegular"))
const TransListBasic = lazy(()=>import("../pages/pre-built/trans-list/TransListBasic"))
const TransListCrypto = lazy(()=>import("../pages/pre-built/trans-list/TransListCrypto"))
const ProductList = lazy(() => import("../pages/pre-built/products/ProductList"));
const InvoiceList = lazy(() => import("../pages/pre-built/invoice/InvoiceList"));
const InvoiceDetails = lazy(() => import("../pages/pre-built/invoice/InvoiceDetails"));
const PricingTable = lazy(() => import("../pages/pre-built/pricing-table/PricingTable"));
const GalleryPreview = lazy(() => import("../pages/pre-built/gallery/GalleryCardPreview"));
const Inbox = lazy(() => import("../pages/app/inbox/Inbox"));
const Kanban = lazy(() => import("../pages/app/kanban/Kanban"));
const DateTimePicker = lazy(() => import("../pages/components/forms/DateTimePicker"));
const CardWidgets = lazy(() => import("../pages/components/widgets/CardWidgets"));
const ChartWidgets = lazy(() => import("../pages/components/widgets/ChartWidgets"));
const RatingWidgets = lazy(() => import("../pages/components/widgets/RatingWidgets"));
const SlickPage = lazy(() => import("../pages/components/misc/Slick"));
const SweetAlertPage = lazy(() => import("../pages/components/misc/SweetAlert"));
const BeautifulDnd = lazy(() => import("../pages/components/misc/BeautifulDnd"));
const DualListPage = lazy(() => import("../pages/components/misc/DualListbox"));
const JsTreePreview = lazy(() => import("../pages/components/misc/JsTree"));
const QuillPreview = lazy(() => import("../pages/components/forms/rich-editor/QuillPreview"));
const TinymcePreview = lazy(() => import("../pages/components/forms/rich-editor/TinymcePreview"));
const KnobPreview = lazy(() => import("../pages/components/charts/KnobPreview"));
const ChangePassword = lazy(() => import("../pages/auth/changePassword"));
const Editlink = lazy(() => import("../pages/pre-built/editLink/editlink"));
const AddDomain = lazy(() => import("../pages/pre-built/domain/addDomain"));
const SetErrorPage = lazy(() => import("../pages/pre-built/errorPage/SetErrorPage"));
const ClientDetails = lazy(() => import("../pages/pre-built/products/ClientDetails"));
const FullShort = lazy(() => import("../pages/pre-built/fullShort/FullShort"));
const Invest = lazy(() => import("../pages/Invest"));
const Pages = () => {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<Suspense fallback={<Spinner />}>
			<Switch>
				{/*Dashboards and used route*/}
				<Route exact path={`${process.env.PUBLIC_URL}/`} component={Invest}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/_blank`} component={Blank}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/link/:id`} component={KycDetailsRegular}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/link-details/:id`} component={Editlink}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/all-shorten-links`} component={ProductList}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/add-custom-domain`} component={AddDomain}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/set-error-page`} component={SetErrorPage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-change-password`} component={ChangePassword}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-setting/`} component={UserProfileLayout}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/project-list`} component={ProjectListPage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-regular/`} component={UserProfileLayout}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-notification/`} component={UserProfileLayout}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/user-profile-activity/`} component={UserProfileLayout}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/client-details/:id/:page`} component={ClientDetails}></Route>

				{/* custom page */}
				<Route exact path={`${process.env.PUBLIC_URL}/create-full-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/create-with-custom-domain`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/create-expiration-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/password-protected-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/project-card`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/create-or-find-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/branded-link`} component={FullShort}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/limited-link`} component={FullShort}></Route>

				{/*Pre-built Pages*/}

				<Route exact path={`${process.env.PUBLIC_URL}/kyc-list-regular`} component={KycListRegular}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/transaction-basic`} component={TransListBasic}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/transaction-crypto`} component={TransListCrypto}></Route>

				<Route exact path={`${process.env.PUBLIC_URL}/invoice-list`} component={InvoiceList}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/invoice-details/:id`} component={InvoiceDetails}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/image-gallery`} component={GalleryPreview}></Route>

				{/*Demo Pages*/}
				<Route exact path={`${process.env.PUBLIC_URL}/pages/terms-policy`} component={Terms}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v1`} component={Regularv1}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/pages/regular-v2`} component={Regularv2}></Route>

				{/*Application*/}
				<Route exact path={`${process.env.PUBLIC_URL}/app-inbox`} component={Inbox}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/app-kanban`} component={Kanban}></Route>

				{/*Components*/}
				<Route exact path={`${process.env.PUBLIC_URL}/components`} component={Component}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/accordions`} component={Accordian}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/alerts`} component={Alerts}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/avatar`} component={Avatar}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/badges`} component={Badges}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/breadcrumbs`} component={Breadcrumbs}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/button-group`} component={ButtonGroup}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/buttons`} component={Buttons}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/cards`} component={Cards}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/carousel`} component={Carousel}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/dropdowns`} component={Dropdowns}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/form-elements`} component={FormElements}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/form-layouts`} component={FormLayouts}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/checkbox-radio`} component={CheckboxRadio}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/advanced-control`} component={AdvancedControls}></Route>
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
				<Route exact path={`${process.env.PUBLIC_URL}/components/tabs`} component={Tabs}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/toast`} component={Toast}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/tooltips`} component={Tooltips}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/typography`} component={Typography}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/noUislider`} component={NouiSlider}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/wizard-basic`} component={WizardForm}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/quill`} component={QuillPreview}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/tinymce`} component={TinymcePreview}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/widgets/cards`} component={CardWidgets}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/widgets/charts`} component={ChartWidgets}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/widgets/rating`} component={RatingWidgets}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/misc/slick-slider`} component={SlickPage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/misc/sweet-alert`} component={SweetAlertPage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/misc/beautiful-dnd`} component={BeautifulDnd}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/misc/dual-list`} component={DualListPage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/misc/jsTree`} component={JsTreePreview}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-border`} component={UtilBorder}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-colors`} component={UtilColors}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-display`} component={UtilDisplay}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-embeded`} component={UtilEmbeded}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-flex`} component={UtilFlex}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-others`} component={UtilOthers}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-sizing`} component={UtilSizing}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-spacing`} component={UtilSpacing}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/components/util-text`} component={UtilText}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/table-basic`} component={BasicTable}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/table-datatable`} component={DataTablePage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/table-special`} component={SpecialTablePage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/charts/chartjs`} component={ChartPage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/charts/knobs`} component={KnobPreview}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/nioicon`} component={NioIconPage}></Route>
				<Route exact path={`${process.env.PUBLIC_URL}/svg-icons`} component={SVGIconPage}></Route>
				<Route component={RedirectAs404}></Route>
				{/* <Route exact path={`${process.env.PUBLIC_URL}/app-messages`} component={AppMessages}></Route>
			<Route exact path={`${process.env.PUBLIC_URL}/app-chat`} component={Chat}></Route>
			<Route exact path={`${process.env.PUBLIC_URL}/app-calender`} component={Calender}></Route>*/}
			</Switch>
		</Suspense>
	);
};
export default Pages;
