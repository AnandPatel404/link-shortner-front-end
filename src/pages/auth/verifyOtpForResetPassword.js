import React, { useState } from "react";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard } from "../../components/Component";
import { Form, FormGroup, Spinner, Alert, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import fevIcon from "../../images/svg/fevicon-and-logo.svg";
import useUserAuth from "../../zustand/auth/userAuth";
import o from "../../images/svg/otp.svg";

function VerifyOtpForResetPassword({ history }) {
	const [loading] = useState(false);
	const [errorVal] = useState("");
	const verifyOtp = useUserAuth((state) => state.verifyOtpForResetPassword);
	const onFormSubmit = async (formData) => {
		const data = {
			number: localStorage.getItem("number"),
			otp: formData.otp,
		};
		await verifyOtp(data, history);
	};
	const ReSendOtp = useUserAuth((state) => state.ReSendOtp);
	const reSendOtp = async () => {
		const data = {
			number: localStorage.getItem("number"),
			countryCode: localStorage.getItem("countryCode"),
		};
		await ReSendOtp(data);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Send Otp" />
			<PageContainer>
				<Row style={{ height: 100 + "vh" }}>
					<Col lg="8" className="position-relative" style={{ backgroundColor: "#f1c40f4a" }}>
						<img src={fevIcon} alt="" width={50} className="position-absolute mt-3 ml-3  mt-md-5 ml-md-5" />
						<div className="d-md-flex justify-content-md-center align-items-md-center mt-lg-3 pt-lg-5 flex-column text-center">
							<img src={o} alt="" width={800} />
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h3">Please enter your Otp</BlockTitle>
									<BlockDes>
										<p>
											Please enter your otp to verify your account <br />
											👉 feel free we do not share any details with anyone 👈
										</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
						</div>
					</Col>
					<Col lg="4">
						<Block className="nk-auth-body pt-lg-5 mt-lg-5 wide-s">
							<PreviewCard className="border-0 mt-lg-5" bodyClass="card-inner-lg" style={{ backgroundColor: "#f5f6fa" }}>
								<div className="brand-logo pb-4">
									<Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
										<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" width={160} />
										<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logodark" />
									</Link>
								</div>
								<BlockHead>
									<BlockContent>
										<BlockTitle tag="h3">Verify Otp</BlockTitle>
										<BlockDes>
											<p>Enter the Otp</p>
										</BlockDes>
									</BlockContent>
								</BlockHead>
								{errorVal && (
									<div className="mb-3">
										<Alert color="danger" className="alert-icon">
											{" "}
											<Icon name="alert-circle" /> Unable to verify Otp credentials{" "}
										</Alert>
									</div>
								)}
								<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="password">
												Otp
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="number"
												id="Otp"
												name="otp"
												ref={register({ required: "This field is required" })}
												placeholder="Enter Otp"
												className="form-control-lg form-control is-shown"
											/>
											{errors.number && <span className="invalid">{errors.number.message}</span>}
										</div>
									</FormGroup>
									<FormGroup>
										<Button size="lg" className="btn-block" type="submit" color="primary">
											{loading ? <Spinner size="sm" color="light" /> : "Verify Otp"}
										</Button>
									</FormGroup>
								</Form>
								<div className="form-note-s2 text-center pt-2">
									<Button size="lg" className="link link-primary" type="button" onClick={reSendOtp}>
										Resend Otp
									</Button>
								</div>
							</PreviewCard>
						</Block>
					</Col>
				</Row>
			</PageContainer>
		</React.Fragment>
	);
}

export default VerifyOtpForResetPassword;
