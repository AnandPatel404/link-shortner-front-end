import React, { useState} from "react";
import { useForm } from "react-hook-form";
import Logo from "../../images/only-charecter.svg";
import LogoDark from "../../images/only-charecter.svg";
import PageContainer from "../../layout/page-container/PageContainer";
import Head from "../../layout/head/Head";
import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../components/Component";
import { FormGroup, Form, Spinner } from "reactstrap";
import useUserAuth from "../../zustand/auth/userAuth";
import { Link } from "react-router-dom";

const ForgotPassword = ({ history }) => {
	const [loading, setLoading] = useState(false);
	const sendOtp = useUserAuth((state) => state.forgotPassword);
	const onFormSubmit = async (formData) => {
		setLoading(!loading);
		const data = {};
		await sendOtp(data, history, setLoading);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Forgot-Password" />
			<PageContainer>
				<Block className="nk-block-middle nk-auth-body  wide-xs">
					<div className="brand-logo pb-4 text-center">
						<Link to={`${process.env.PUBLIC_URL}/home`} className="logo-link">
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
										placeholder="Enter your Email"
										className="form-control-lg form-control is-shown"
									/>
									{errors.email && <span className="invalid">{errors.email.message}</span>}
								</div>
							</FormGroup>
							<FormGroup>
								<Button color="primary" size="lg" className="btn-block" type="submit">
									{loading ? <Spinner size="sm" color="light" /> : "Send Otp"}
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
