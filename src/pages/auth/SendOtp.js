import React, { useState, useEffect } from "react";
import axios from "../../axios/axiosconfig";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard, RSelect } from "../../components/Component";
import { Form, FormGroup, Spinner, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { errorToast } from "../../pages/components/misc/ReactToastify";
import fevIcon from "../../images/svg/fevicon-and-logo.svg";
import useUserAuth from "../../zustand/auth/userAuth";
import o from "../../images/svg/oo.svg";

function SendOtp({ history }) {
	const [loading, setLoading] = useState(false);
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
		if (!CountryCodes || CountryCodes === null || CountryCodes === undefined || CountryCodes === " ") {
			return errorToast("Please select the country code");
		}
		setLoading(!loading);
		const newCode = CountryCodes.slice(1);
		const data = {
			number: formData.number,
			countryCode: newCode,
		};
		await sendOtp(data, history, setLoading);
	};
	const countryCode = (e) => {
		setCountryCodes(e.value);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Send Otp" />
			<PageContainer>
				<Row style={{ height: 100 + "vh" }}>
					<Col lg="8" className="position-relative" style={{ backgroundColor: "#f1c40f4a" }}>
						<img src={fevIcon} alt="" width={50} className="position-absolute mt-3 ml-3  mt-md-5 ml-md-5" />
						<div className="d-md-flex justify-content-md-center align-items-md-center flex-column text-center">
							<img src={o} alt="" width={600} />
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h3">Send Otp 📪📪</BlockTitle>
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
					<Col lg="4">
						<Block className="nk-auth-body py-5 my-5 wide-s">
							<PreviewCard className="border-0" bodyClass="card-inner-lg" style={{ backgroundColor: "#f5f6fa" }}>
								<div className="brand-logo pb-4">
									<Link to={`${process.env.PUBLIC_URL}/home`} className="logo-link">
										<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" width={130} />
										<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logodark" />
									</Link>
								</div>
								<BlockHead>
									<BlockContent>
										<BlockTitle tag="h3">Send Otp</BlockTitle>
										<BlockDes>
											<p>Otp will send to your WhatsApp number</p>
										</BlockDes>
									</BlockContent>
								</BlockHead>
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
											<label className="form-label" htmlFor="number">
												Number
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="number"
												id="number"
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
		</React.Fragment>
	);
}

export default SendOtp;
