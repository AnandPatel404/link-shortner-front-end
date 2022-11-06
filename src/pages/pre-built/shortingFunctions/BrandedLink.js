import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form, Alert } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userDashBoard from "../../../zustand/DashBoard/userDashBoard";
import { Link } from "react-router-dom";

function BrandedLink({ sm, updateSm }) {
	const { SingleLink, checkBrandedLinkIsExist, checkForBrandedLink, createBrandedLink } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		checkBrandedLinkIsExist: state.checkBrandedLinkIsExist,
		checkForBrandedLink: state.checkForBrandedLink,
		createBrandedLink: state.createBrandedLink,
	}));

	const { sub } = userDashBoard((state) => ({
		sub: state.subscription,
	}));

	const [targetValue, setTargetValue] = useState("");
	const s = async () => {
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			return errorToast("Please select link first", "Error");
		}
		let data = {
			backlink: targetValue,
			linkId: SingleLink.id,
		};
		createBrandedLink(data);
	};

	const brandedLink = () => {
		let data = {
			backlink: targetValue,
		};
		checkBrandedLinkIsExist(data);
	};

	const { handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Create a Link with your words
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				{sub.planId?.unique_link ? (
					<Block size="lg">
						<Form className="gy-3" onSubmit={handleSubmit(s)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Back-link
										</label>
										<span className="form-note">Specify the back link</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap d-flex align-item-center">
											<input
												type="text"
												id="link"
												name="link"
												className="form-control"
												onChange={(e) => {
													setTargetValue(e.target.value);
												}}
											/>
											<Button className="btn-dim mx-2 btn-primary" size="md" type="button" onClick={brandedLink}>
												search
											</Button>
										</div>
										{checkForBrandedLink === "" ? (
											" "
										) : checkForBrandedLink === true ? (
											<Alert className="alert-icon" color="danger">
												<Icon name="cross-circle" />
												<strong>failed</strong>This back link is already exist
											</Alert>
										) : (
											<Alert className="alert-icon" color="success">
												<Icon name="check-fill-c" />
												<strong>success</strong>You can use this back link
											</Alert>
										)}
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3">
								<Col lg="7" className="offset-lg-5">
									<FormGroup className="mt-2">
										<Button color="primary" size="lg" type="submit">
											Save
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

export default BrandedLink;
