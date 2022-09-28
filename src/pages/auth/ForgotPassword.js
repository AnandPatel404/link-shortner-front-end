import React, { useState, useEffect } from "react";
import axios from "../../axios/axiosconfig";
import { useForm } from "react-hook-form";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard, RSelect } from "../../components/Component";
import { FormGroup, Form } from "reactstrap";
import useUserAuth from "../../zustand/auth/userAuth";
import { Link } from "react-router-dom";

const ForgotPassword = ({ history }) => {
	const [CountryCodes, setCountryCodes] = useState("");
	const [option, setOption] = useState([]);
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
	const countryCode = (e) => {
		setCountryCodes(e.value);
	};
	const sendOtp = useUserAuth((state) => state.forgotPassword);
	const onFormSubmit = async (formData) => {
		const newCode = CountryCodes.slice(1);
		const data = {
			number: formData.number,
			countryCode: newCode,
		};
		await sendOtp(data, history);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Forgot-Password" />
			<PageContainer>
				<Block className="nk-block-middle nk-auth-body  wide-xs">
					<div className="brand-logo pb-4 text-center">
						<Link to={process.env.PUBLIC_URL + "/"} className="logo-link">
							<img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" width={130} />
							<img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
						</Link>
					</div>
					<PreviewCard className="card-bordered" bodyClass="card-inner-lg">
						<BlockHead>
							<BlockContent>
								<BlockTitle tag="h5">Reset password</BlockTitle>
								<BlockDes>
									<p>If you forgot your password, well, then we’ll email you instructions to reset your password.</p>
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
									<RSelect options={option} className="" placeholder="Country Code" onChange={(e) => countryCode(e)}></RSelect>
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
								<Button color="primary" size="lg" className="btn-block" type="submit">
									Send otp
								</Button>
							</FormGroup>
						</Form>
						<div className="form-note-s2 text-center pt-4">
							<Link to={`${process.env.PUBLIC_URL}/auth-login`}>
								<strong>Return to login</strong>
							</Link>
						</div>
					</PreviewCard>
				</Block>
				<AuthFooter />
			</PageContainer>
		</React.Fragment>
	);
};
export default ForgotPassword;
