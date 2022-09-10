import React, { useState, useEffect } from "react";
import axios from "../../axios/axiosconfig";
// import Logo from "../../images/logo.png";
// import LogoDark from "../../images/logo-dark.png";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, Icon, PreviewCard, RSelect } from "../../components/Component";
import { Form, FormGroup, Spinner, Alert, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useUserAuth from "../../zustand/auth/userAuth";
import o from "../../images/svg/oo.svg";

function SendOtp() {
	const [loading] = useState(false);
	const [errorVal] = useState("");
	const [option, setOption] = useState([]);
	const [CountryCodes, setCountryCodes] = useState("");
	const getCountryCode = async () => {
		await axios({
			method: "get",
			url: "auth/country-code",
		})
			.then((res) => {
				if (res.data.status === "Success") {
					let a = [];
					res.data.data.forEach((e) => {
						a.push({ value: e.dial_code, label: `${e.dial_code} ${e.name}` });
					});
					setOption(a);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getCountryCode();
	}, []);

	const sendOtp = useUserAuth((state) => state.sendOtp);
	const onFormSubmit = async (formData) => {
		const newCode = CountryCodes.slice(1);
		const data = {
			number: formData.number,
			countryCode: newCode,
		};
		await sendOtp(data);
	};
	const countryCode = (e) => {
		setCountryCodes(e.value);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Send Otp" />
			<PageContainer>
				<Row>
					<Col xl="7">
						<div className="d-md-flex justify-content-md-center align-items-md-center mt-4">
							<img src={o} alt="" height={600} />
						</div>
					</Col>
					<Col xl="5">
						<Block className="nk-auth-body py-lg-5 my-lg-5 wide-s">
							<PreviewCard className="border-0" bodyClass="card-inner-lg" style={{ backgroundColor: "#f5f6fa" }}>
								<BlockHead>
									<BlockContent>
										<BlockTitle tag="h3">Send Otp</BlockTitle>
										<BlockDes>
											<p>Otp will send to your WhatsApp number</p>
										</BlockDes>
									</BlockContent>
								</BlockHead>
								{errorVal && (
									<div className="mb-3">
										<Alert color="danger" className="alert-icon">
											{" "}
											<Icon name="alert-circle" /> Unable to Send Otp credentials{" "}
										</Alert>
									</div>
								)}
								<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="default-01">
												Country Code
											</label>
										</div>
										<div className="form-control-wrap">
											<RSelect
												options={option}
												className=""
												placeholder="Country Code"
												onChange={(e) => countryCode(e)}
											></RSelect>
										</div>
									</FormGroup>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="password">
												Number
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="number"
												id="password"
												name="number"
												ref={register({ required: "This field is required" })}
												placeholder="Enter your WhatsApp number"
												className="form-control-lg form-control is-shown"
											/>
											{errors.number && <span className="invalid">{errors.number.message}</span>}
										</div>
									</FormGroup>
									<FormGroup>
										<Button size="lg" className="btn-block" type="submit" color="primary">
											{loading ? <Spinner size="sm" color="light" /> : "Send Otp"}
										</Button>
									</FormGroup>
								</Form>
								<div className="form-note-s2 text-center pt-4">
									{" "}
									Already have an account? <Link to={`${process.env.PUBLIC_URL}/auth-login`}>Sign in instead</Link>
								</div>
							</PreviewCard>
						</Block>
					</Col>
				</Row>
			</PageContainer>
			<AuthFooter />
		</React.Fragment>
	);
}

export default SendOtp;
