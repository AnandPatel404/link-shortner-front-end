import React, { useState } from "react";
// import Logo from "../../images/logo.png";
// import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard } from "../../components/Component";
import { Spinner, FormGroup, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import r from "../../images/svg/r.svg";

const Register = ({ history }) => {
	const [passState, setPassState] = useState(false);
	const [loading, setLoading] = useState(false);
	const { errors, register, handleSubmit } = useForm();

	const handleFormSubmit = () => {
		setLoading(true);
		setTimeout(() => history.push(`${process.env.PUBLIC_URL}/auth-success`), 2000);
	};
	return (
		<React.Fragment>
			<Head title="Register" />
			<PageContainer>
				<Row>
					<Col xl="7">
						<div className="d-md-flex justify-content-md-center align-items-md-center">
							<img src={r} alt="" width={800} />
						</div>
					</Col>
					<Col xl="5">
						<Block className="nk-auth-body py-5 my-4 wide-s">
							<PreviewCard className="border-0" bodyClass="card-inner-lg" style={{ backgroundColor: "#f5f6fa" }}>
								<BlockHead>
									<BlockContent>
										<BlockTitle tag="h3">Register</BlockTitle>
										<BlockDes>
											<p>Create New Shorterme Account</p>
										</BlockDes>
									</BlockContent>
								</BlockHead>
								<form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
									<FormGroup>
										<label className="form-label" htmlFor="name">
											Name
										</label>
										<div className="form-control-wrap">
											<input
												type="text"
												id="name"
												name="name"
												placeholder="Enter your name"
												ref={register({ required: true })}
												className="form-control-lg form-control"
											/>
											{errors.name && <p className="invalid">This field is required</p>}
										</div>
									</FormGroup>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="default-01">
												Email
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="text"
												bssize="lg"
												id="default-01"
												name="email"
												ref={register({ required: true })}
												className="form-control-lg form-control"
												placeholder="Enter your email address "
											/>
											{errors.email && <p className="invalid">This field is required</p>}
										</div>
									</FormGroup>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="default-01">
												Mobile no (WhatsApp no)
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="number"
												bssize="lg"
												id="default-01"
												name="number"
												ref={register({ required: true })}
												className="form-control-lg form-control"
												placeholder="Enter your whatsApp number "
											/>
											{errors.number && <p className="invalid">This field is required</p>}
										</div>
									</FormGroup>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="password">
												Password
											</label>
										</div>
										<div className="form-control-wrap">
											<a
												href="#password"
												onClick={(ev) => {
													ev.preventDefault();
													setPassState(!passState);
												}}
												className={`form-icon lg form-icon-right passcode-switch ${passState ? "is-hidden" : "is-shown"}`}
											>
												<Icon name="eye" className="passcode-icon icon-show"></Icon>

												<Icon name="eye-off" className="passcode-icon icon-hide"></Icon>
											</a>
											<input
												type={passState ? "text" : "password"}
												id="password"
												name="passcode"
												ref={register({ required: "This field is required" })}
												placeholder="Enter your passcode"
												className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
											/>
											{errors.passcode && <span className="invalid">{errors.passcode.message}</span>}
										</div>
									</FormGroup>
									<FormGroup>
										<Button type="submit" color="primary" size="lg" className="btn-block">
											{loading ? <Spinner size="sm" color="light" /> : "Register"}
										</Button>
									</FormGroup>
								</form>
								<div className="form-note-s2 text-center pt-4">
									{" "}
									Already have an account?{" "}
									<Link to={`${process.env.PUBLIC_URL}/auth-login`}>
										<strong>Sign in instead</strong>
									</Link>
								</div>
							</PreviewCard>
						</Block>
					</Col>
				</Row>
				<AuthFooter />
			</PageContainer>
		</React.Fragment>
	);
};
export default Register;
