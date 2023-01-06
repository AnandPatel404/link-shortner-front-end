import React, { useState, useEffect, lazy } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Route, Switch, Link } from "react-router-dom";
import { Icon } from "../../../components/Component";
import { Card } from "reactstrap";
import WorkSvg from "../../../images/svg/robot.svg";
const CreateNormalLink = lazy(() => import("../apiDocsPages/CreateNormalLink"));
const GetallLinks = lazy(() => import("../apiDocsPages/GetAllLinks"));
const DeleteLinks = lazy(() => import("../apiDocsPages/DeleteLink"));
const PasswordProtectedLink = lazy(() => import("../apiDocsPages/PasswordProtectedLink"));
const ExpirationLink = lazy(() => import("../apiDocsPages/ExpirationLink"));
const ClickLimitLink = lazy(() => import("../apiDocsPages/ClickLimitLink"));

const ApiDocsLayOut = () => {
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
												to={`${process.env.PUBLIC_URL}/create-normal-link`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/create-normal-link` ? "active" : ""
												}
											>
												<Icon name="link-alt"></Icon>
												<span>Create Normal Link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/get-all-link`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/get-all-link` ? "active" : ""}
											>
												<Icon name="link-alt"></Icon>
												<span>Get All Link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/delete-link`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/delete-link` ? "active" : ""}
											>
												<Icon name="link-alt"></Icon>
												<span>Delete Link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/api-password-protected-link`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/api-password-protected-link`
														? "active"
														: ""
												}
											>
												<Icon name="link-alt"></Icon>
												<span>Password Protected Link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/api-expiration-link`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/api-expiration-link` ? "active" : ""
												}
											>
												<Icon name="link-alt"></Icon>
												<span>Expiration Link</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/api-click-limit-link`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/api-click-limit-link` ? "active" : ""
												}
											>
												<Icon name="link-alt"></Icon>
												<span>Click Limit Link</span>
											</Link>
										</li>
									</ul>
								</div>
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
									path={`${process.env.PUBLIC_URL}/create-normal-link`}
									render={() => <CreateNormalLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/get-all-link`}
									render={() => <GetallLinks updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/delete-link`}
									render={() => <DeleteLinks updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/api-password-protected-link`}
									render={() => <PasswordProtectedLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/api-expiration-link`}
									render={() => <ExpirationLink updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/api-click-limit-link`}
									render={() => <ClickLimitLink updateSm={updateSm} sm={sm} />}
								></Route>
							</Switch>
						</div>
					</div>
				</Card>
			</Content>
		</React.Fragment>
	);
};

export default ApiDocsLayOut;
