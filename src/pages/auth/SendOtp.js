import React, { useState } from "react";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import { Form, FormGroup, Spinner, Row, Col } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import fevIcon from "../../images/svg/fevicon-and-logo.svg";
import useUserAuth from "../../zustand/auth/userAuth";
import o from "../../images/svg/oo.svg";

function SendOtp({ history }) {
	const [loading, setLoading] = useState(false);
	const sendOtp = useUserAuth((state) => state.sendOtp);
	const onFormSubmit = async (formData) => {
		setLoading(!loading);
		const data = {
			email: formData.email,
		};
		await sendOtp(data, history, setLoading);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Send Otp" />
			<PageContainer style={{ backgroundColor: "#f5f6fa" }}>
				<Row>
					<Col lg="8" className="position-relative">
						<img src={fevIcon} alt="" width={50} className="position-absolute mt-3 ml-3  mt-md-5 ml-md-5" />
						<div className="d-md-flex justify-content-md-center align-items-md-center flex-column text-center">
							<img src={o} alt="" width={600} />
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h3">Send Otp 📪📪</BlockTitle>
									<BlockDes>
										<p>
											feel free we do not share any details with anyone <br />
											Please enter your Email for receive otp
										</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
						</div>
					</Col>
					<Col lg="4" className="d-flex flex-column justify-content-center">
						<Block className="nk-auth-body py-5 my-5 wide-s">
							<PreviewCard className="border-1" bodyClass="card-inner-lg">
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
											<p>Otp Will Send To Your Email</p>
										</BlockDes>
									</BlockContent>
								</BlockHead>
								<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="email">
												Email
											</label>
										</div>
										<div className="form-control-wrap">
											<input
												type="email"
												id="email"
												name="email"
												ref={register({ required: "This field is required" })}
												placeholder="Enter Your Email"
												className="form-control-lg form-control is-shown"
											/>
											{errors.email && <span className="invalid">{errors.email.message}</span>}
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
