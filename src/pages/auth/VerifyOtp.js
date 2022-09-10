import React, { useState } from "react";
// import Logo from "../../images/logo.png";
// import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard } from "../../components/Component";
import { Form, FormGroup, Spinner, Alert, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import useUserAuth from "../../zustand/auth/userAuth";
import o from "../../images/svg/otp.svg";

function VerifyOtp({ history }) {
	const [loading] = useState(false);
	const [errorVal] = useState("");
	const verifyOtp = useUserAuth((state) => state.verifyOtp);
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
				<Row>
					<Col xl="8">
						<div className="d-md-flex justify-content-md-center align-items-md-center mt-lg-5 pt-lg-5">
							<img src={o} alt="" width={800} />
						</div>
					</Col>
					<Col xl="4">
						<Block className="nk-auth-body pt-lg-5 mt-lg-5 wide-s">
							<PreviewCard className="border-0 mt-lg-5" bodyClass="card-inner-lg" style={{ backgroundColor: "#f5f6fa" }}>
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

export default VerifyOtp;
