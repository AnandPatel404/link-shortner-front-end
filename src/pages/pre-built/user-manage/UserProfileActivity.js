import React, { useEffect } from "react";
import Head from "../../../layout/head/Head";
import { BlockBetween, BlockDes, BlockHead, BlockHeadContent, BlockTitle, Icon, LoginLogTable, Button } from "../../../components/Component";
import userActivity from "../../../zustand/DashBoard/userDashBoard";

const UserProfileActivityPage = ({ sm, updateSm }) => {
	const a = userActivity((state) => state.getuserActivity);
	const u = userActivity((state) => state.userActivitys);
	useEffect(() => {
		a();
	}, [a]);

	return (
		<React.Fragment>
			<Head title="User List - Profile"></Head>
			<BlockHead size="lg">
				<BlockBetween>
					<BlockHeadContent>
						<BlockTitle tag="h4">Login Activity</BlockTitle>
						<BlockDes>
							<p>Here is your last login activities log.</p>
						</BlockDes>
					</BlockHeadContent>
					<BlockHeadContent className="align-self-start d-lg-none">
						<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
							<Icon name="menu-alt-r"></Icon>
						</Button>
					</BlockHeadContent>
				</BlockBetween>
			</BlockHead>
			<LoginLogTable activity={u} />
		</React.Fragment>
	);
};
export default UserProfileActivityPage;
