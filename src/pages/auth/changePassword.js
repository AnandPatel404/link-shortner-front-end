import React, { useState } from "react";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard } from "../../components/Component";
import { Form, FormGroup, Spinner, Alert, Row, Col } from "reactstrap";
import Head from "../../layout/head/Head";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import o from "../../images/svg/changePassword.svg";
import useUserAuth from "../../zustand/auth/userAuth";

const ChangePassword = ({ history }) => {
	const [loading] = useState(false);
	const [passState, setPassState] = useState(false);
	const [errorVal] = useState("");
	const changePassword = useUserAuth((state) => state.changePassword);
	const onFormSubmit = async (formData) => {
		changePassword(formData);
	};
	const { errors, handleSubmit, register } = useForm();

	return (
		<React.Fragment>
			<Head title="Change Password" />
			<Row>
				<Col xl="7">
					<div className="d-md-flex justify-content-md-center align-items-md-center mt-5 pt-5">
						<img src={o} alt="" width={550} />
					</div>
				</Col>
				<Col xl="5">
					<Block className="nk-auth-body pt-lg-5 mt-lg-4 wide-s">
						<PreviewCard className="border-0 mt-5" bodyClass="card-inner-lg">
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h4">Change Password</BlockTitle>
									<BlockDes>
										<p>Change a old password to new password</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
							{errorVal && (
								<div className="mb-3">
									<Alert color="danger" className="alert-icon">
										{" "}
										<Icon name="alert-circle" /> {errorVal}{" "}
									</Alert>
								</div>
							)}
							<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="default-01">
											Old Password
										</label>
									</div>
									<div className="form-control-wrap">
										<input
											type="password"
											id="oldPassword"
											name="oldPassword"
											ref={register({ required: "This field is required" })}
											placeholder="Enter your old password "
											className="form-control-lg form-control"
										/>
										{errors.oldPassword && <span className="invalid">{errors.oldPassword.message}</span>}
									</div>
								</FormGroup>
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="password">
											New Password
										</label>
									</div>
									<div className="form-control-wrap">
										<Link
											to="#newPassword"
											onClick={(ev) => {
												ev.preventDefault();
												setPassState(!passState);
											}}
											className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
										>
											<Icon name="eye" className="passcode-icon icon-show"></Icon>

											<Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
										</Link>
										<input
											type={passState ? "text" : "password"}
											id="newPassword"
											name="newPassword"
											ref={register({ required: "This field is required" })}
											placeholder="Enter your New Password"
											className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
										/>
										{errors.newPassword && <span className="invalid">{errors.newPassword.message}</span>}
									</div>
								</FormGroup>
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="password">
											Confirm Password
										</label>
									</div>
									<div className="form-control-wrap">
										<Link
											to="#confirmPassword"
											onClick={(ev) => {
												ev.preventDefault();
												setPassState(!passState);
											}}
											className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
										>
											<Icon name="eye" className="passcode-icon icon-show"></Icon>

											<Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
										</Link>
										<input
											type={passState ? "text" : "password"}
											id="confirmPassword"
											name="confirmPassword"
											ref={register({ required: "This field is required" })}
											placeholder="Enter your Confirm Password"
											className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
										/>
										{errors.confirmPassword && <span className="invalid">{errors.confirmPassword.message}</span>}
									</div>
								</FormGroup>
								<FormGroup>
									<Button size="lg" className="btn-block" type="submit" color="primary">
										{loading ? <Spinner size="sm" color="light" /> : "Submit"}
									</Button>
								</FormGroup>
							</Form>
						</PreviewCard>
					</Block>
				</Col>
			</Row>
		</React.Fragment>
	);
};
export default ChangePassword;
