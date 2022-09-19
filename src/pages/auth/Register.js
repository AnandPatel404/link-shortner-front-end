import React, { useState } from "react";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard } from "../../components/Component";
import { FormGroup, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import r from "../../images/svg/rr.svg";
import { Link } from "react-router-dom";
import useUserAuth from "../../zustand/auth/userAuth";
import fevIcon from "../../images/svg/fevicon-and-logo.svg";

const Register = ({ history }) => {
	const [passState, setPassState] = useState(false);
	const { errors, register, handleSubmit } = useForm();

	const registerUser = useUserAuth((state) => state.Register);
	const handleFormSubmit = async (formData) => {
		const data = {
			...formData,
			number: localStorage.getItem("number"),
			countryCode: localStorage.getItem("countryCode"),
		};
		await registerUser(data, history);
	};
	return (
		<React.Fragment>
			<Head title="Register" />
			<PageContainer>
				<Row>
					<Col xl="7" className="position-relative" style={{ backgroundColor: "#f1c40f4a" }}>
						<img src={fevIcon} alt="" width={50} className="position-absolute mt-3 ml-3  mt-md-5 ml-md-5" />
						<div className="d-md-flex justify-content-md-center align-items-md-center flex-column text-center">
							<img src={r} alt="" width={600} />
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h3">privacy & security 😊😊</BlockTitle>
									<BlockDes>
										<p>
											feel free we do not share any details with anyone <br />
											👉 Please enter your whatApp number for receive otp 👈
										</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
						</div>
					</Col>
					<Col xl="5">
						<Block className="nk-auth-body py-5 my-4 wide-s">
							<PreviewCard className="border-0" bodyClass="card-inner-lg" style={{ backgroundColor: "#f5f6fa" }}>
								<div className="brand-logo pb-4">
									<Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
										<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" width={160} />
										<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logodark" />
									</Link>
								</div>
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
												name="password"
												ref={register({ required: "This field is required" })}
												placeholder="Enter your password"
												className={`form-control-lg form-control ${passState ? "is-hidden" : "is-shown"}`}
											/>
											{errors.password && <span className="invalid">{errors.password.message}</span>}
										</div>
									</FormGroup>
									<FormGroup>
										<Button type="submit" color="primary" size="lg" className="btn-block">
											Register
										</Button>
									</FormGroup>
								</form>
							</PreviewCard>
						</Block>
					</Col>
				</Row>
			</PageContainer>
		</React.Fragment>
	);
};
export default Register;
