import React, { useState, useEffect, lazy } from "react";
// import imgOne from "../assets/img/svg/reach.svg";
// import imgTwo from "../assets/img/svg/collect.svg";
// import imgThree from "../assets/img/svg/password.svg";
// import imgFour from "../assets/img/svg/time.svg";
// import imgFive from "../assets/img/svg/click.svg";
import NavBar from "./NavBar";
import Head from "../../layout/head/Head";
import { Icon } from "../../components/Component";
import { Card } from "reactstrap";
import Content from "../../layout/content/Content";
import { Route, Switch, Link } from "react-router-dom";
const QRLinkFeature = lazy(() => import("./Features/QRLinkFeature"));
const PasswordProtectedF = lazy(() => import("./Features/PasswordProtectedF"));

function Features() {
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
		<div style={{ backgroundColor: "#ffffff" }}>
			<Head title="Features And Tutorials" />
			<NavBar />
			<section class="">
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
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="eye-off"></Icon>
													<span>Password Protected Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/qr-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/qr-link-features` ? "active" : ""
													}
												>
													<Icon name="qr"></Icon>
													<span>QR Link</span>
												</Link>
											</li>
											{/* <li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="line-chart-down"></Icon>
													<span>User Analytics</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="qr"></Icon>
													<span>Custom QR Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="text-a"></Icon>
													<span>Custom Domain</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="underline"></Icon>
													<span>Unique Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="clipboad-check"></Icon>
													<span>Limited Click Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="clock"></Icon>
													<span>Expiration Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="android"></Icon>
													<span>Device Targeting Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="b-chrome"></Icon>
													<span>Browser Targeting Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="link-alt"></Icon>
													<span>Unique Branded Link</span>
												</Link>
											</li>
											<li onClick={() => updateSm(false)}>
												<Link
													to={`${process.env.PUBLIC_URL}/password-protected-link-features`}
													className={
														window.location.pathname === `${process.env.PUBLIC_URL}/password-protected-link-features`
															? "active"
															: ""
													}
												>
													<Icon name="view-x1"></Icon>
													<span>Custom Link Redirection Page</span>
												</Link>
											</li> */}
										</ul>
									</div>
								</div>
							</div>
							<div className="card-inner card-inner-lg">
								{sm && mobileView && <div className="toggle-overlay" onClick={() => updateSm(!sm)}></div>}
								<Switch>
									<Route
										exact
										path={`${process.env.PUBLIC_URL}/password-protected-link-features`}
										render={() => <PasswordProtectedF updateSm={updateSm} sm={sm} />}
									></Route>
									<Route
										exact
										path={`${process.env.PUBLIC_URL}/qr-link-features`}
										render={() => <QRLinkFeature updateSm={updateSm} sm={sm} />}
									></Route>
								</Switch>
							</div>
						</div>
					</Card>
				</Content>
			</section>
		</div>
	);
}

export default Features;
