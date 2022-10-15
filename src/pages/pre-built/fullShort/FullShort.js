import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import CoustomDomain from "../shortingFunctions/shortingFuncationality";
import PasswordProtectedLink from "../shortingFunctions/PasswordProtectedLink";
import Expirationlink from "../shortingFunctions/Expirationlink";
import ProjectCardPage from "../projects/ProjectCard";
import ShortLink from "../shortingFunctions/shortLink";
import { Route, Switch, Link } from "react-router-dom";
import { Icon } from "../../../components/Component";
import { Card } from "reactstrap";
import WorkSvg from "../../../images/svg/www.svg";

const FullShort = () => {
	const [sm, updateSm] = useState(false);
	const [mobileView, setMobileView] = useState(false);
	// function to change the design view under 990 px
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
												<Icon name="list-thumb-alt"></Icon>
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
												to={`${process.env.PUBLIC_URL}/project-card`}
												className={window.location.pathname === `${process.env.PUBLIC_URL}/project-card` ? "active" : ""}
											>
												<Icon name="qr"></Icon>
												<span>Qr</span>
											</Link>
										</li>
										{/* <li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/user-profile-setting`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-setting` ? "active" : ""
												}
											>
												<Icon name="bar-chart"></Icon>
												<span>click limit</span>
											</Link>
										</li> */}
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
									path={`${process.env.PUBLIC_URL}/project-card`}
									render={() => <ProjectCardPage updateSm={updateSm} sm={sm} />}
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
