import React, { useState, useEffect } from "react";
import UserAvatar from "../../../../components/user/UserAvatar";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { Button, Icon } from "../../../../components/Component";
import { LinkList, LinkItem } from "../../../../components/links/Links";
import useUserStore from "../../../../zustand/userStore/userStore";
import useUserAuth from "../../../../zustand/auth/userAuth";

const User = () => {
	const userData = useUserStore((state) => state.user);
	const [open, setOpen] = useState(false);
	const [user, setuser] = useState({});
	const toggle = () => setOpen((prevState) => !prevState);
	const LogOut = useUserAuth((state) => state.LogOut);
	const handleSignout = async () => {
		await LogOut();
	};

	useEffect(() => {
		setuser(userData);
	}, [userData]);

	return (
		<Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
			<DropdownToggle
				tag="a"
				href="#toggle"
				className="dropdown-toggle"
				onClick={(ev) => {
					ev.preventDefault();
				}}
			>
				<div className="user-toggle">
					<UserAvatar icon="user-alt" className="sm" theme="warning" />
					<div className="user-info d-none d-md-block">
						<div className="user-name dropdown-indicator">{user.name}</div>
					</div>
				</div>
			</DropdownToggle>
			<DropdownMenu right className="dropdown-menu-md ">
				<div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
					<div className="user-card sm">
						<div className="user-avatar bg-warning">
							<span>AB</span>
						</div>
						<div className="user-info">
							<span className="lead-text">{user.name}</span>
							<span className="sub-text">{user.email}</span>
						</div>
					</div>
				</div>
				<div className="dropdown-inner">
					<LinkList>
						<LinkItem link="/user-profile-regular" icon="user-alt" onClick={toggle}>
							View Profile
						</LinkItem>
						<LinkItem link="/user-profile-setting" icon="setting-alt" onClick={toggle}>
							Account Setting
						</LinkItem>
						<LinkItem link="/user-profile-activity" icon="activity-alt" onClick={toggle}>
							Login Activity
						</LinkItem>
					</LinkList>
				</div>
				<div className="dropdown-inner">
					<LinkList>
						<Button type="button" onClick={handleSignout} className="p-0">
							<Icon name="signout"></Icon>
							<span>Sign Out</span>
						</Button>
					</LinkList>
				</div>
			</DropdownMenu>
		</Dropdown>
	);
};

export default User;
