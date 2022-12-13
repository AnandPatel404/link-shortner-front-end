import React, { useState } from "react";

import Content from "../../../layout/content/Content";

import Head from "../../../layout/head/Head";

import { useForm } from "react-hook-form";

import { FormGroup, Row, Col, Form, Spinner } from "reactstrap";

import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";

import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";

import Swal from "sweetalert2";

import userSubStore from "../../../zustand/Subscription/sub";

import { Link } from "react-router-dom";

function AddErrorRedirection({ sm, updateSm }) {
	const [loading, setLoading] = useState(false);

	const { SingleLink, create404Redirection } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,

		create404Redirection: state.create404Redirection,
	}));

	const { sub } = userSubStore((state) => ({
		sub: state.subscription,
	}));

	const s = async (sData) => {
		setLoading(true);

		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			setLoading(false);

			return Swal.fire("Error", "Please select link first", "error");
		}
		const data = {
			linkId: SingleLink.id,
			...sData,
		};

		if (sData.error_404_redirection) {
			data.is_404_enable = true;
		}
		if (sData.error_301_redirection) {
			data.is_301_enable = true;
		}

		create404Redirection(data, setLoading);
	};

	const { handleSubmit, register } = useForm();

	return (
		<React.Fragment>
			<Head title="Error Redirection Link" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Add Error Redirection
							</BlockTitle>
							<p>if in case your destination link is down and not found so link will be redirect in this link</p>
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
											404 redirection link
										</label>
										<span className="form-note">Specify the 404 link </span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="text"
												id="text"
												name="error_404_redirection"
												className="form-control"
												ref={register({ required: "This field is required" })}
											/>
										</div>
									</FormGroup>
								</Col>
							</Row>
							{/* TODO : this is accept all two if client need to enter only one so fixed it in feature */}
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											301 redirection link
										</label>
										<span className="form-note">Specify the 301 link </span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="text" id="text" name="error_301_redirection" className="form-control" />
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

export default AddErrorRedirection;
