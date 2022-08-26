import React, { useState } from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard } from "../../components/Component";
import { Form, FormGroup, Spinner, Alert } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useUserStore from "../../zustand/userStore/userStore";

const Login = () => {
	const [loading] = useState(false);
	const [passState, setPassState] = useState(false);
	const [errorVal] = useState("");
	const login = useUserStore((state) => state.loginUser);
	const onFormSubmit = (formData) => {
		login(formData);
	};

	const { errors, register, handleSubmit } = useForm();

	return (
		<React.Fragment>
			<Head title="Login" />
			<PageContainer>
				<Block className="nk-block-middle nk-auth-body  wide-xs">
					<div className="brand-logo pb-4 text-center">
						<Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
							<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
							<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
						</Link>
					</div>

					<PreviewCard className="card-bordered" bodyClass="card-inner-lg">
						<BlockHead>
							<BlockContent>
								<BlockTitle tag="h4">Sign-In</BlockTitle>
								<BlockDes>
									<p>Access Shorterme using your email and password.</p>
								</BlockDes>
							</BlockContent>
						</BlockHead>
						{errorVal && (
							<div className="mb-3">
								<Alert color="danger" className="alert-icon">
									{" "}
									<Icon name="alert-circle" /> Unable to login with credentials{" "}
								</Alert>
							</div>
						)}
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
							New on our platform? <Link to={`${process.env.PUBLIC_URL}/auth-register`}>Create an account</Link>
						</div>
					</PreviewCard>
				</Block>
				<AuthFooter />
			</PageContainer>
		</React.Fragment>
	);
};
export default Login;
