import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form, Spinner } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userSubStore from "../../../zustand/Subscription/sub";
import { Link } from "react-router-dom";
function ReDirectionPage({ sm, updateSm }) {
	const [loading, setLoading] = useState(false);
	const [colorCodes, setColorsCode] = useState("#000000");
	const [colorCodesTwo, setColorsCodeTwo] = useState("#000000");
	const [title, setTitle] = useState("");

	const { SingleLink, createLinkReDirectionPage } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		createLinkReDirectionPage: state.createLinkReDirectionPage,
	}));

	const colorCode = (e) => {
		setColorsCode(e);
	};
	const colorCodeTwo = (e) => {
		setColorsCodeTwo(e);
	};

	const { sub } = userSubStore((state) => ({
		sub: state.subscription,
	}));

	const setTitleOfLink = (e) => {
		setTitle(e);
	};

	const s = async (formData) => {
		setLoading(true);
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			setLoading(false);
			return errorToast("Please select link first", "Error");
		}
		const data = {
			linkId: SingleLink.id,
			title,
			pageLink: formData.pageLink,
			PageButtonColor: colorCodes,
			verificationButtonColor: colorCodesTwo,
		};
		await createLinkReDirectionPage(data, setLoading);
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
								Create a Link with Re-Direction Page
							</BlockTitle>
							<BlockDes>
								<p className="lead">create a link with your Page With verification</p>
							</BlockDes>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				{sub.planId?.custom_domain ? (
					<Block size="lg">
						<Form className="gy-3" onSubmit={handleSubmit(s)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											pageLink
										</label>
										<span className="form-note">Specify the link that render on the verification page</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="text"
												id="link"
												name="pageLink"
												className="form-control"
												ref={register({ required: "This field is required" })}
											/>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Title
										</label>
										<span className="form-note">
											Specify the title of link (if you don't Specify automatically title add to link)
										</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="text"
												id="title"
												name="title"
												className="form-control"
												onChange={(e) => {
													setTitleOfLink(e.target.value);
												}}
											/>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Page Button Name
										</label>
										<span className="form-note">Specify the Button Name that render on page</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="text"
												id="title"
												name="pageButton"
												className="form-control"
												ref={register({ required: "This field is required" })}
											/>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Page Button Name Color
										</label>
										<span className="form-note">Specify the Button Color</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input type="color" className="" name="PageButtonColor" onChange={(e) => colorCode(e.target.value)} />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Verification Button Name
										</label>
										<span className="form-note">Specify the Verification Button Name</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="text"
												id="title"
												name="verificationButton"
												className="form-control"
												ref={register({ required: "This field is required" })}
											/>
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Verification Button Color
										</label>
										<span className="form-note">Specify the Verification Button Color</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											{/* TODO : change on change */}
											<input type="color" className="" name="backGroundColor" onChange={(e) => colorCodeTwo(e.target.value)} />
										</div>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Count Down
										</label>
										<span className="form-note">Specify the Count Down of After Verification</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="number"
												id="countDown"
												name="countDown"
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

export default ReDirectionPage;
