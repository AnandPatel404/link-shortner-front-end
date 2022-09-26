import React from "react";
import Head from "../../../layout/head/Head";
import { Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Block, BlockBetween, BlockDes, BlockHead, BlockHeadContent, BlockTitle, Icon, Button } from "../../../components/Component";
import Swal from "sweetalert2";
import userStore from "../../../zustand/userStore/userStore";
import userChnage from "../../../zustand/userChange/userChnage";
const UserProfileSettingPage = ({ sm, updateSm }) => {
	const userDate = userStore((state) => state.user);
	const deleteUserAccount = userChnage((state) => state.deleteAccount);
	const deleteAccount = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					title: "Enter Your password",
					input: "text",
					inputAttributes: {
						autocapitalize: "off",
					},
					showCancelButton: true,
					confirmButtonText: "Look up",
					showLoaderOnConfirm: true,
					preConfirm: (data) => {
						deleteUserAccount({
							password: data,
						});
					},
					allowOutsideClick: () => !Swal.isLoading(),
				});
			}
		});
	};
	// Swal.fire("Deleted!", "Your file has been deleted.", "success");
	return (
		<React.Fragment>
			<Head title="User List - Profile"></Head>

			<BlockHead size="lg">
				<BlockBetween>
					<BlockHeadContent>
						<BlockTitle tag="h4">Security Settings</BlockTitle>
						<BlockDes>
							<p>These settings will help you to keep your account secure.</p>
						</BlockDes>
					</BlockHeadContent>
					<BlockHeadContent className="align-self-start d-lg-none">
						<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
							<Icon name="menu-alt-r"></Icon>
						</Button>
					</BlockHeadContent>
				</BlockBetween>
			</BlockHead>

			<Block>
				<Card className="card-bordered">
					<div className="card-inner-group">
						<div className="card-inner">
							<div className="between-center flex-wrap g-3">
								<div className="nk-block-text">
									<h6>Change Password</h6>
									<p>Set a unique password to protect your account.</p>
								</div>
								<div className="nk-block-actions flex-shrink-sm-0">
									<ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
										<li className="order-md-last">
											<Link to={`${process.env.PUBLIC_URL}/user-profile-change-password/`} className="btn btn-primary">
												Change Password
											</Link>
										</li>
										<li>
											<em className="text-soft text-date fs-12px">
												Last changed: <span>{new Date(userDate.updatedAt).toLocaleString()}</span>
											</em>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card-inner">
							<div className="between-center flex-wrap g-3">
								<div className="nk-block-text">
									<h6>Delete your Account </h6>
									<p>
										<b>Note : </b> if you delete your account then it delete all your work and all links
									</p>
								</div>
								<div className="nk-block-actions flex-shrink-sm-0">
									<ul className="align-center flex-wrap flex-sm-nowrap gx-3 gy-2">
										<li className="order-md-last">
											<Button className="btn btn-danger" type="button" onClick={deleteAccount}>
												Delete Account
											</Button>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="card-body">
							<div className="between-center flex-wrap flex-md-nowrap g-3">
								<div className="nk-block-text">
									<h6>
										2 Factor Auth &nbsp; <span className="badge badge-success ml-0">Enabled</span>
									</h6>
									<p>
										Secure your account with 2FA security. When it is activated you will need to enter not only your password, but
										also a special code using app. You will receive this code via mobile application.{" "}
									</p>
								</div>
								<div className="nk-block-actions">
									{/* <Button color="primary">Disable</Button> */}
									<p>coming soon</p>
								</div>
							</div>
						</div>
					</div>
				</Card>
			</Block>
		</React.Fragment>
	);
};
export default UserProfileSettingPage;
