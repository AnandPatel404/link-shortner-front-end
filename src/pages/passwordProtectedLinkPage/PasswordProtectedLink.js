import React from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, BlockBetween, PreviewCard } from "../../components/Component";
import passwordProtected from "../../images/svg/passwordProtected.svg";
import useCheckThePassword from "../../zustand/LinkPassowrdCheck/LinkPassowrdCheck";
import Logo from "../../layout/logo/Logo";

function PasswordProtected({ match }) {
	const { checkThePassword } = useCheckThePassword((state) => ({
		checkThePassword: state.checkThePassword,
	}));
	const handleFormSubmit = (sData) => {
		const id = match.params.id;
		let data = {
			password: sData.password,
		};
		checkThePassword(data, id);
	};

	const { handleSubmit, register } = useForm();
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								<Logo />
							</BlockTitle>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block size="lg">
					<PreviewCard>
						<Form className="gy-3" onSubmit={handleSubmit(handleFormSubmit)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<img src={passwordProtected} alt="passwordSvg" />
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-label-group">
											<label className="form-label" htmlFor="default-01">
												Enter Link Password
											</label>
										</div>
										<div className="form-control-wrap d-flex align-item-center">
											<input
												type="password"
												id="password"
												name="password"
												className="form-control"
												placeholder="Enter the Password"
												ref={register({ required: true })}
											/>
										</div>
									</FormGroup>
									<Col lg="12" className="offset-lg-5">
										<FormGroup className="mt-2">
											<Button color="primary" size="lg" type="submit">
												enter
											</Button>
										</FormGroup>
									</Col>
								</Col>
							</Row>
						</Form>
					</PreviewCard>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default PasswordProtected;
