import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userDashBoard from "../../../zustand/DashBoard/userDashBoard";
import { Link } from "react-router-dom";

function LimitedLink({ sm, updateSm }) {
	const { SingleLink, createLimitedLink } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		createLimitedLink: state.createLimitedLink,
	}));
	const { sub } = userDashBoard((state) => ({
		sub: state.subscription,
	}));
	const [afterUrl, setAfterUrl] = useState(null);
	const s = async (sData) => {
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			return errorToast("Please select link first", "Error");
		}
		if (afterUrl !== null && afterUrl !== "") {
			let data = {
				linkId: SingleLink.id,
				clickCount: sData.number,
				after_click_limit_reach: afterUrl,
			};
			createLimitedLink(data);
		} else {
			let datat = {
				linkId: SingleLink.id,
				clickCount: sData.number,
			};
			createLimitedLink(datat);
		}
	};

	const afterLink = (e) => {
		setAfterUrl(e);
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
				{sub.planId?.limited_click_link ? (
					<Block size="lg">
						<Form className="gy-3" onSubmit={handleSubmit(s)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Limit the link
										</label>
										<span className="form-note">Specify the back link</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap d-flex align-item-center">
											<input
												type="number"
												id="link"
												name="number"
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
											re-direct url (optional)
										</label>
										<span className="form-note">Specify the After reach clicks limit (optional)</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap d-flex align-item-center">
											<input
												type="text"
												id="after_click_limit_reach"
												name="after_click_limit_reach"
												className="form-control"
												onChange={(e) => {
													afterLink(e.target.value);
												}}
											/>
										</div>
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

export default LimitedLink;
