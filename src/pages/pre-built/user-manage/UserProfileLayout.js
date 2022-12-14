import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import UserProfileRegularPage from "./UserProfileRegular";
import UserProfileSettingPage from "./UserProfileSetting";
import UserProfileNotificationPage from "./UserProfileNotification";
import UserProfileActivityPage from "./UserProfileActivity";
import { Route, Switch, Link } from "react-router-dom";
import { Icon } from "../../../components/Component";
import { Card } from "reactstrap";
import useUserStore from "../../../zustand/userStore/userStore";
import female from "../../../images/user.png";
import male from "../../../images/user2.png";

const UserProfileLayout = () => {
	const [sm, updateSm] = useState(false);
	const userInfo = useUserStore((state) => state.user);
	const [mobileView, setMobileView] = useState(false);
	const [profileName, setProfileName] = useState(userInfo.name);
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
								<div className="card-inner">
									<div className="user-card">
										<div className="user-avatar">
											{userInfo.gender === "male" ? <img src={male} alt="avatar" /> : <img src={female} alt="avatar" />}
										</div>
										<div className="user-info">
											<span className="lead-text">{profileName}</span>
											<span className="sub-text">{userInfo.email}</span>
										</div>
									</div>
								</div>
								<div className="card-inner p-0">
									<ul className="link-list-menu">
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/user-profile-regular`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-regular` ? "active" : ""
												}
											>
												<Icon name="user-fill-c"></Icon>
												<span>Personal Information</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/user-profile-notification`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-notification` ? "active" : ""
												}
											>
												<Icon name="bell-fill"></Icon>
												<span>Notification</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/user-profile-activity`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-activity` ? "active" : ""
												}
											>
												<Icon name="activity-round-fill"></Icon>
												<span>Account Activity</span>
											</Link>
										</li>
										<li onClick={() => updateSm(false)}>
											<Link
												to={`${process.env.PUBLIC_URL}/user-profile-setting`}
												className={
													window.location.pathname === `${process.env.PUBLIC_URL}/user-profile-setting` ? "active" : ""
												}
											>
												<Icon name="lock-alt-fill"></Icon>
												<span>Security Setting</span>
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
									path={`${process.env.PUBLIC_URL}/user-profile-regular`}
									render={() => <UserProfileRegularPage updateSm={updateSm} sm={sm} setProfileName={setProfileName} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/user-profile-notification`}
									render={() => <UserProfileNotificationPage updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/user-profile-activity`}
									render={() => <UserProfileActivityPage updateSm={updateSm} sm={sm} />}
								></Route>
								<Route
									exact
									path={`${process.env.PUBLIC_URL}/user-profile-setting`}
									render={() => <UserProfileSettingPage updateSm={updateSm} sm={sm} />}
								></Route>
							</Switch>
						</div>
					</div>
				</Card>
			</Content>
		</React.Fragment>
	);
};

export default UserProfileLayout;
