import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { Block, BlockHead, BlockBetween, BlockHeadContent, BlockTitle, Row, Button, Col, Icon } from "../../../components/Component";
import { FormGroup, Form, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userSubStore from "../../../zustand/Subscription/sub";
import { Link } from "react-router-dom";

const ProjectCardPage = ({ sm, updateSm }) => {
	const [colorCodes, setColorsCode] = useState("#000000");
	const [loading, setLoading] = useState(false);

	const { createQr, SingleLink } = userFunctionalityLink((state) => ({
		createQr: state.createQr,
		SingleLink: state.SingleLink,
	}));

	const { sub } = userSubStore((state) => ({
		sub: state.subscription,
	}));

	const colorCode = (e) => {
		setColorsCode(e);
	};

	const onSubmit = async () => {
		setLoading(true);
		if (!SingleLink || !SingleLink.id || SingleLink.length === 0) {
			setLoading(false);
			return errorToast("Please select link first", "Error");
		}

		const data = {
			qrColor: colorCodes.toString(),
		};
		await createQr(data, SingleLink.id, setLoading);
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
								Create a Link with Qr code
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				{sub.planId?.qr_link ? (
					<Block size="lg">
						<Form className="gy-3" onSubmit={handleSubmit(onSubmit)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Qr color
										</label>
										<span className="form-note">Specify the Qr color</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<input type="color" className="" name="backGroundColor" onChange={(e) => colorCode(e.target.value)} />
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
};
export default ProjectCardPage;
