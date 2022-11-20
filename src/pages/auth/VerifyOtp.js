import React, { useState } from "react";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import { Form, FormGroup, Spinner, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import fevIcon from "../../images/svg/fevicon-and-logo.svg";
import useUserAuth from "../../zustand/auth/userAuth";
import o from "../../images/svg/otpTwo.svg";

function VerifyOtp({ history }) {
	const [loading, setLoading] = useState(false);
	const [loadingTwo, setLoadingTwo] = useState(false);
	const verifyOtp = useUserAuth((state) => state.verifyOtp);
	const onFormSubmit = async (formData) => {
		setLoading(true);
		const data = {
			email: localStorage.getItem("email"),
			otp: formData.otp,
		};
		console.log(data);
		await verifyOtp(data, history, setLoading);
	};
	const ReSendOtp = useUserAuth((state) => state.ReSendOtp);
	const reSendOtp = async () => {
		setLoadingTwo(true);
		const data = {
			email: localStorage.getItem("email"),
		};
		await ReSendOtp(data, setLoadingTwo);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Send Otp" />
			<PageContainer>
				<Row>
					<Col lg="8" className="position-relative">
						<img src={fevIcon} alt="" width={50} className="position-absolute mt-3 ml-3  mt-md-5 ml-md-5" />
						<div className="d-md-flex justify-content-md-center align-items-md-center mt-lg-3 pt-lg-5 flex-column text-center">
							<img src={o} alt="" width={650} />
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h3">Please enter your Otp 1️⃣ 2️⃣ 3️⃣ 4️⃣</BlockTitle>
									<BlockDes>
										<p>
											Please enter your otp to verify your account <br />
											👉 feel free we do not share any details with anyone <br /> don't share otp with others 👈
										</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
						</div>
					</Col>
					<Col lg="4" className="d-flex flex-column justify-content-center">
						<Block className="nk-auth-body pt-lg-5 mt-lg-5 wide-s">
							<PreviewCard className="border-1 mt-lg-5" bodyClass="card-inner-lg">
								<div className="brand-logo pb-4">
									<span className="logo-link">
										<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" width={160} />
										<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logodark" />
									</span>
								</div>
								<BlockHead>
									<BlockContent>
										<BlockTitle tag="h3">Verify your Otp</BlockTitle>
										<BlockDes>
											<p>Enter the Otp that sended to your whatsApp mobile number</p>
										</BlockDes>
									</BlockContent>
								</BlockHead>
								<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="password">
												Enter Otp
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="number"
												id="otp"
												name="otp"
												ref={register({ required: "This field is required" })}
												placeholder="Enter Otp"
												className="form-control-lg form-control is-shown"
											/>
											{errors.otp && <span className="invalid">{errors.otp.message}</span>}
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
										{loadingTwo ? <Spinner size="sm" color="light" /> : "Re-send Otp"}
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

export default VerifyOtp;
