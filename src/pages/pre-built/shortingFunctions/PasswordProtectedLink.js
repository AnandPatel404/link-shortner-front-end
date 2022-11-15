import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form, Spinner } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userSubStore from "../../../zustand/Subscription/sub";
import { Link } from "react-router-dom";
function PasswordProtectedLink({ sm, updateSm }) {
	const [loading, setLoading] = useState(false);
	const { SingleLink, passwordProtectedLink } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		passwordProtectedLink: state.passwordProtectedLink,
	}));

	const { sub } = userSubStore((state) => ({
		sub: state.subscription,
	}));

	const s = async (sData) => {
		setLoading(true);
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			setLoading(false);
			return errorToast("Please select link first", "Error");
		}
		const data = {
			linkId: SingleLink.id,
			password: sData.password,
		};
		passwordProtectedLink(data, setLoading);
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
								Create a Link with your Password
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				{sub.planId?.password_protected_link ? (
					<Block size="lg">
						<Form className="gy-3" onSubmit={handleSubmit(s)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Link Password
										</label>
										<span className="form-note">Specify the link password</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="password"
												id="password"
												name="password"
												className="form-control"
												ref={register({ required: "This field is required" })}
											/>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3">
								<Col lg="7" className="offset-lg-5">
									<FormGroup className="mt-2">
										<Button color="primary" size="lg" type="submit">
											{loading ? <Spinner /> : "Save"}
										</Button>
									</FormGroup>
								</Col>
							</Row>
						</Form>
					</Block>
				) : (
					<Link to={`${process.env.PUBLIC_URL}/pricing-table`}>Upgrade Your Plan To Use This Functionality</Link>
				)}
			</Content>
		</React.Fragment>
	);
}

export default PasswordProtectedLink;
