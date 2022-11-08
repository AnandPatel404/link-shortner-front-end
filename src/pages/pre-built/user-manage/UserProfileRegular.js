import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import { Modal, ModalBody, FormGroup } from "reactstrap";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon, Row, Col, Button } from "../../../components/Component";
import useUserStore from "../../../zustand/userStore/userStore";
import useUserDashBoard from "../../../zustand/DashBoard/userDashBoard";

const UserProfileRegularPage = ({ sm, updateSm, setProfileName }) => {
	const userState = useUserStore((state) => state.user);
	const sub = useUserDashBoard((state) => state.subscription);
	console.log(sub);
	const [modalTab, setModalTab] = useState("1");
	const [userInfo] = useState(userState);
	const [formData, setFormData] = useState({});
	const [modal, setModal] = useState(false);

	// useEffect(() => {
	// 	setProfileName(formData.name);
	// }, [formData, setProfileName]);

	const onInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const submitForm = () => {
		// let submitData = {
		// 	...formData,
		// };
		// setUserInfo(submitData);
		console.log("submitted");
		setModal(false);
	};

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
					<div className="data-item" onClick={() => setModal(true)}>
						<div className="data-col">
							<span className="data-label">Name</span>
							<span className="data-value">{userInfo.name}</span>
						</div>
						<div className="data-col data-col-end">
							<span className="data-more">
								<Icon name="forward-ios"></Icon>
							</span>
						</div>
					</div>
					<div className="data-item" onClick={() => setModal(true)}>
						<div className="data-col">
							<span className="data-label">Email</span>
							<span className="data-value">{userInfo.email}</span>
						</div>
						<div className="data-col data-col-end">
							<span className="data-more">
								<Icon name="forward-ios"></Icon>
							</span>
						</div>
					</div>
					<div className="data-item" onClick={() => setModal(true)}>
						<div className="data-col">
							<span className="data-label">Number</span>
							<span className="data-value">{userInfo.number}</span>
						</div>
						<div className="data-col data-col-end">
							<span className="data-more">
								<Icon name="forward-ios"></Icon>
							</span>
						</div>
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
						<span className="data-label">Phase</span>
						<span className="data-value">{userInfo.phase}</span>
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

			<Modal isOpen={modal} className="modal-dialog-centered" size="lg" toggle={() => setModal(false)}>
				<ModalBody>
					<a
						href="#dropdownitem"
						onClick={(ev) => {
							ev.preventDefault();
							setModal(false);
						}}
						className="close"
					>
						<Icon name="cross-sm"></Icon>
					</a>
					<div className="p-2">
						<h5 className="title">Update Profile</h5>
						<div className="tab-content">
							<div className={`tab-pane ${modalTab === "1" ? "active" : ""}`} id="personal">
								<Row className="gy-4">
									<Col md="6">
										<FormGroup>
											<label className="form-label" htmlFor="full-name">
												Name
											</label>
											<input
												type="text"
												id="full-name"
												className="form-control"
												name="name"
												onChange={(e) => onInputChange(e)}
												defaultValue={userInfo.name}
												placeholder="Enter Full name"
											/>
										</FormGroup>
									</Col>
									<Col md="6">
										<FormGroup>
											<label className="form-label" htmlFor="phone-no">
												Email
											</label>
											<input
												type="email"
												id="email"
												className="form-control"
												name="email"
												onChange={(e) => onInputChange(e)}
												defaultValue={userInfo.email}
											/>
										</FormGroup>
									</Col>
									<Col md="6">
										<FormGroup>
											<label className="form-label" htmlFor="phone-no">
												Number
											</label>
											<input
												type="email"
												id="email"
												className="form-control"
												name="email"
												onChange={(e) => onInputChange(e)}
												defaultValue={userInfo.number}
											/>
										</FormGroup>
									</Col>
									<Col size="12">
										<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
											<li>
												<Button
													color="primary"
													size="lg"
													onClick={(ev) => {
														ev.preventDefault();
														submitForm();
													}}
												>
													Update Profile
												</Button>
											</li>
											<li>
												<a
													href="#dropdownitem"
													onClick={(ev) => {
														ev.preventDefault();
														setModal(false);
													}}
													className="link link-light"
												>
													Cancel
												</a>
											</li>
										</ul>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</ModalBody>
			</Modal>
		</React.Fragment>
	);
};
export default UserProfileRegularPage;
