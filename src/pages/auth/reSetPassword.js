import React, { useState } from "react";
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

const ResetPassword = ({ history }) => {
	const [loading, setLoading] = useState(false);
	const passwordReset = useUserAuth((state) => state.setNewPassword);
	const onFormSubmit = async (formData) => {
		setLoading(true);
		const data = {
			number: localStorage.getItem("number"),
			password: formData.password,
		};
		await passwordReset(data, history, setLoading);
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
								<BlockTitle tag="h5">Enter new password</BlockTitle>
								<BlockDes>
									<p>Please enter strong password </p>
								</BlockDes>
							</BlockContent>
						</BlockHead>
						<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
							<FormGroup>
								<div className="form-label-group">
									<label className="form-label" htmlFor="password">
										New password
									</label>
								</div>
								<div className="form-control-wrap">
									<input
										type="password"
										id="password"
										name="password"
										ref={register({ required: "This field is required" })}
										placeholder="Enter your new password"
										className="form-control-lg form-control is-shown"
									/>
									{errors.passowrd && <span className="invalid">{errors.password.message}</span>}
								</div>
							</FormGroup>
							<FormGroup>
								<Button size="lg" className="btn-block" type="submit" color="primary">
									{loading ? <Spinner size="sm" color="light" /> : "Submit"}
								</Button>
							</FormGroup>
						</Form>
					</PreviewCard>
				</Block>
				<AuthFooter />
			</PageContainer>
		</React.Fragment>
	);
};
export default ResetPassword;
