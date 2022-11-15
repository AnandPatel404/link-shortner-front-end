import React, { useState } from "react";
import makeAnimated from "react-select/animated";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form, Spinner } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween, RSelect } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import userSubStore from "../../../zustand/Subscription/sub";
import { Link } from "react-router-dom";
function DeviceTargetingLink({ sm, updateSm }) {
	let newData = [];
	const colourData = [
		{ value: "Android", label: "Android" },
		{ value: "Windows", label: "Windows" },
		{ value: "Mac OS", label: "Mac OS" },
	];
	const animatedComponents = makeAnimated();
	const [loading, setLoading] = useState(false);
	const { SingleLink, createDeviceTargetingLink } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		createDeviceTargetingLink: state.createDeviceTargetingLink,
	}));

	const { sub } = userSubStore((state) => ({
		sub: state.subscription,
	}));
	const s = async () => {
		const data = {
			linkId: SingleLink.id,
			deviceTargetingData: newData,
		};
		await createDeviceTargetingLink(data, setLoading);
		newData = [];
	};
	const changeOs = (e) => {
		e.forEach((item) => {
			if (newData.indexOf(item.value) === -1) {
				newData.push(item.value);
			}
		});
		console.log(newData);
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
								Create a Link with Device Targeting
							</BlockTitle>
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
										<label className="form-label">Choose your Device and Os</label>
										<span className="form-note">Select the your Device and Os that your link client can reach</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<Col sm={6}>
												<div className="form-group">
													<RSelect
														closeMenuOnSelect={false}
														components={animatedComponents}
														isMulti
														options={colourData}
														onChange={(e) => {
															changeOs(e);
														}}
													/>
												</div>
											</Col>
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

export default DeviceTargetingLink;
