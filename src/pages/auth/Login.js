import React, { useState } from "react";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard } from "../../components/Component";
import { Form, FormGroup, Spinner, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useUserStore from "../../zustand/userStore/userStore";
import l from "../../images/svg/l.svg";
// import fevIcon from "../../images/svg/fevicon-and-logo.svg";

const Login = ({ history }) => {
	const [loading] = useState(false);
	const [passState, setPassState] = useState(false);
	const login = useUserStore((state) => state.loginUser);
	const onFormSubmit = (formData) => {
		login(formData);
	};

	const { errors, register, handleSubmit } = useForm();

	return (
		<React.Fragment>
			<Head title="Login" />
			<PageContainer>
				<Row>
					<Col xl="7" className="position-relative" style={{ backgroundColor: "#f1c40f4a" }}>
						{/* <img
							src={fevIcon}
							alt=""
							width={50}
							className="position-absolute d-none d-lg-block"
							style={{ top: 80 + "px", left: 220 + "px" }}
						/> */}
						<div className="d-md-flex justify-content-md-center align-items-md-center flex-column text-center">
							<img src={l} alt="" width={600} />
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h3">Get start with us 😊😊</BlockTitle>
									<BlockDes>
										<p>
											Create engaging customer experiences boost your business with ShorterMe <br /> No extra charge on our
											plan. Start your 7 days free trial now
										</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
						</div>
					</Col>
					<Col xl="5">
						<Block className="nk-auth-body py-lg-5 my-lg-5 wide-s">
							<PreviewCard className="border-0" bodyClass="card-inner-lg" style={{ backgroundColor: "#f5f6fa" }}>
								<div className="brand-logo pb-4">
									<Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
										<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" width={130} />
										<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logodark" />
									</Link>
								</div>
								<BlockHead>
									<BlockContent>
										<BlockTitle tag="h3">Sign-In</BlockTitle>
										<BlockDes>
											<p>Access Shorterme using your email and password.</p>
										</BlockDes>
									</BlockContent>
								</BlockHead>
								<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="default-01">
												Email
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="text"
												id="default-01"
												name="email"
												ref={register({ required: "This field is required" })}
												placeholder="Enter your email address"
												className="form-control-lg form-control"
											/>
											{errors.name && <span className="invalid">{errors.name.message}</span>}
										</div>
									</FormGroup>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="password">
												Password
											</label>
											<Link className="link link-primary link-sm" to={`${process.env.PUBLIC_URL}/auth-reset`}>
												Forgot Password?
											</Link>
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
												name="password"
												ref={register({ required: "This field is required" })}
												placeholder="Enter your password"
												className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
											/>
											{errors.password && <span className="invalid">{errors.password.message}</span>}
										</div>
									</FormGroup>
									<FormGroup>
										<Button size="lg" className="btn-block" type="submit" color="primary">
											{loading ? <Spinner size="sm" color="light" /> : "Sign in"}
										</Button>
									</FormGroup>
								</Form>
								<div className="form-note-s2 text-center pt-4">
									{" "}
									New on our platform? <Link to={`${process.env.PUBLIC_URL}/auth-send-otp`}>Create an account</Link>
								</div>
							</PreviewCard>
						</Block>
					</Col>
				</Row>
			</PageContainer>
		</React.Fragment>
	);
};
export default Login;
