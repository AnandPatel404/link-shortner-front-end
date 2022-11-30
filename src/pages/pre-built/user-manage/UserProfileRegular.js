import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon, Button } from "../../../components/Component";
import useUserStore from "../../../zustand/userStore/userStore";
import userSubStore from "../../../zustand/Subscription/sub";

const UserProfileRegularPage = ({ sm, updateSm, setProfileName }) => {
	const userState = useUserStore((state) => state.user);
	const sub = userSubStore((state) => state.subscription);
	const [userInfo] = useState(userState);

	return (
		<React.Fragment>
			<Head title="User List - Profile"></Head>
			<BlockHead size="lg">
				<BlockBetween>
					<BlockHeadContent>
						<BlockTitle tag="h4">Personal Information</BlockTitle>
					</BlockHeadContent>
					<BlockHeadContent className="align-self-start d-lg-none">
						<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
							<Icon name="menu-alt-r"></Icon>
						</Button>
					</BlockHeadContent>
				</BlockBetween>
			</BlockHead>

			<Block>
				<div className="nk-data data-list">
					<div className="data-head">
						<h6 className="overline-title">Basics</h6>
					</div>
					<div className="data-item">
						<div className="data-col">
							<span className="data-label">Name</span>
							<span className="data-value">{userInfo.name}</span>
						</div>
						<div className="data-col data-col-end"></div>
					</div>
					<div className="data-item">
						<div className="data-col">
							<span className="data-label">Email</span>
							<span className="data-value">{userInfo.email}</span>
						</div>
						<div className="data-col data-col-end"></div>
					</div>
				</div>
				<div className="data-item">
					<div className="data-col">
						<span className="data-label">Active plan</span>
						<span className="data-value">{sub.planId?.plan_name}</span>
					</div>
					<div className="data-col data-col-end"></div>
				</div>
				<div className="data-item">
					<div className="data-col">
						<span className="data-label">Gender</span>
						<span className="data-value">{userInfo.gender}</span>
					</div>
					<div className="data-col data-col-end"></div>
				</div>
				<div className="data-item">
					<div className="data-col">
						<span className="data-label">plan expired date</span>
						<span className="data-value">{new Date(sub.expireAt).toLocaleString()}</span>
					</div>
					<div className="data-col data-col-end"></div>
				</div>
			</Block>
		</React.Fragment>
	);
};
export default UserProfileRegularPage;
