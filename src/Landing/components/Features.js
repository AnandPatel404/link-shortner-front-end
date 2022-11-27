import React, { useState, useEffect } from "react";
import imgOne from "../assets/img/svg/reach.svg";
import imgTwo from "../assets/img/svg/collect.svg";
import imgThree from "../assets/img/svg/password.svg";
import imgFour from "../assets/img/svg/time.svg";
import imgFive from "../assets/img/svg/click.svg";
import NavBar from "./NavBar";
import { Icon } from "../../components/Component";
import { Card } from "reactstrap";
import Content from "../../layout/content/Content";
import { Route, Switch, Link } from "react-router-dom";
import PasswordProtectedF from "./Features/PasswordProtectedF";

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
		<div class="content-wrapper" style={{ backgroundColor: "#ffffff" }}>
			<NavBar />
			<section class="wrapper container">
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
													<Icon name="link-alt"></Icon>
													<span>Password Protected Link</span>
												</Link>
											</li>
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
