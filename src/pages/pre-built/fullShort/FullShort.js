import React, { useState, useEffect, lazy } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Route, Switch, Link } from "react-router-dom";
import { Icon, BlockTitle, Button } from "../../../components/Component";
import { Card } from "reactstrap";
import WorkSvg from "../../../images/svg/www.svg";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";

const CoustomDomain = lazy(() => import("../shortingFunctions/shortingFuncationality"));
const PasswordProtectedLink = lazy(() => import("../shortingFunctions/PasswordProtectedLink"));
const Expirationlink = lazy(() => import("../shortingFunctions/Expirationlink"));
const ProjectCardPage = lazy(() => import("../projects/ProjectCard"));
const ShortLink = lazy(() => import("../shortingFunctions/shortLink"));
const LimitedLink = lazy(() => import("../shortingFunctions/LimitedLink"));
const BrandedLink = lazy(() => import("../shortingFunctions/BrandedLink"));
const QrWithLogo = lazy(() => import("../projects/QrWithLogo"));
const DeviceTargetingLink = lazy(() => import("../shortingFunctions/DeviceTargetingLink"));
const ReDirectionPage = lazy(() => import("../shortingFunctions/ReDirectionPage"));
const BrowserTargetingLink = lazy(() => import("../shortingFunctions/BrowserTargetingLink"));

const FullShort = () => {
	const { SingleLink, applyChanges } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		applyChanges: state.applyChanges,
	}));
	const [sm, updateSm] = useState(false);
	const [mobileView, setMobileView] = useState(false);

	const viewChange = () => {
		if (window.innerWidth < 990) {
			setMobileView(true);
		} else {
			setMobileView(false);
			updateSm(false);
		}
	};

	const applyChange = async () => {
		await applyChanges();
	};

	useEffect(() => {
		viewChange();
		window.addEventListener("load", viewChange);
		window.addEventListener("resize", viewChange);
		document.getElementsByClassName("nk-header")[0].addEventListener("click", function () {
			updateSm(false);
		});
		return () => {
			window.removeEventListener("resize", viewChange);
			window.removeEventListener("load", viewChange);
		};
	}, []);

	return (
		<React.Fragment>
			<Head title="Create Link With Full Functionality" />
			<Content>
				<Card className="card-bordered">
					<div className="card-aside-wrap">
						<div
							className={`card-aside card-aside-left user-aside toggle-slide toggle-slide-left toggle-break-lg ${
								sm ? "content-active" : ""
							}`}
						>
							<div className="card-inner-group">
								<div className="card-inner p-0">
									<ul className="link-list-menu">
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/create-or-find-link`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/create-or-find-link` ? "active" : ""
												}
											>
												<Icon name="link-alt"></Icon>
												<span>Create or find link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/create-with-custom-domain`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/create-with-custom-domain` ? "active" : ""
												}
											>
												<Icon name="list-thumb-alt"></Icon>
												<span>Custom domain</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/branded-link`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/branded-link` ? "active" : ""}
											>
												<Icon name="info-i"></Icon>
												<span>Branded-link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/password-protected-link`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link` ? "active" : ""
												}
											>
												<Icon name="eye-off"></Icon>
												<span>Password-protected-link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/create-expiration-link`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/create-expiration-link` ? "active" : ""
												}
											>
												<Icon name="clock"></Icon>
												<span>Expiration-link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/create-qr-link`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/create-qr-link` ? "active" : ""}
											>
												<Icon name="qr"></Icon>
												<span>Qr</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/create-qr-link-with-logo`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/create-qr-link-with-logo` ? "active" : ""
												}
											>
												<Icon name="qr"></Icon>
												<span>Qr With Logo</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/limited-link`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/limited-link` ? "active" : ""}
											>
												<Icon name="meter"></Icon>
												<span>click limit</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/device-targeting`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/device-targeting` ? "active" : ""}
											>
												<Icon name="android"></Icon>
												<span>Device & Os targeting</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/browser-targeting`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/browser-targeting` ? "active" : ""}
											>
												<Icon name="b-chrome"></Icon>
												<span>Browser targeting</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/re-direction-link`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/re-direction-link` ? "active" : ""}
											>
												<Icon name="curve-up-right"></Icon>
												<span>Re-Direction Page</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="d-flex justify-content-center align-item-center mt-3">
									<BlockTitle tag="h6" className="text-primary">
										{SingleLink
											? `${SingleLink.coustomDomain ? SingleLink.coustomDomain.domain : "shortedurl.link"}/${
													SingleLink.shorterLink
											  }`
											: ""}
									</BlockTitle>
								</div>
								{SingleLink.shorterLink ? (
									<div className="d-flex justify-content-center my-4">
										<Button type="button" color="primary" size="lg" className="btn-dim" onClick={applyChange}>
											Apply Changes
										</Button>
									</div>
								) : (
									""
								)}
								<div className="d-flex justify-content-center mt-5 pt-5">
									<img src={WorkSvg} alt="work" width={250} />
								</div>
							</div>
						</div>
						<div className="card-inner card-inner-lg">
							{sm && mobileView && <div className="toggle-overlay" onClick={() => updateSm(!sm)}></div>}
							<Switch>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/create-or-find-link`}
									render={() => <ShortLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/create-with-custom-domain`}
									render={() => <CoustomDomain updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/branded-link`}
									render={() => <BrandedLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/create-expiration-link`}
									render={() => <Expirationlink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/password-protected-link`}
									render={() => <PasswordProtectedLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/create-qr-link`}
									render={() => <ProjectCardPage updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/create-qr-link-with-logo`}
									render={() => <QrWithLogo updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/limited-link`}
									render={() => <LimitedLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/device-targeting`}
									render={() => <DeviceTargetingLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/browser-targeting`}
									render={() => <BrowserTargetingLink updateSm={updateSm} sm={sm} />}
								></Route>

								<Route
									exact
									path={`${process.env.PUBLIC_URL}/re-direction-link`}
									render={() => <ReDirectionPage updateSm={updateSm} sm={sm} />}
								></Route>
							</Switch>
						</div>
					</div>
				</Card>
			</Content>
		</React.Fragment>
	);
};

export default FullShort;
