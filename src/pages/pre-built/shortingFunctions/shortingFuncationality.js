import React, { useEffect, useState, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Input, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, Button, Icon, BlockBetween } from "../../../components/Component";
import userDomain from "../../../zustand/domainStuff/domain";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userDashBoard from "../../../zustand/DashBoard/userDashBoard";
import { Link } from "react-router-dom";
function ShortingFuncationality({ sm, updateSm }) {
	const [domain, setDomains] = useState([]);
	const { getAllDomain } = userDomain((state) => ({
		getAllDomain: state.getAllDomain,
	}));

	const { SingleLink, customDomain } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		customDomain: state.customDomain,
	}));

	const { sub } = userDashBoard((state) => ({
		sub: state.subscription,
	}));
	const getDomains = useCallback(async () => {
		const data = await getAllDomain();
		domain(data.data);
	}, [domain, getAllDomain]);

	useEffect(() => {
		getDomains();
	}, [getDomains]);

	const s = async () => {
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			return errorToast("Please select link first", "Error");
		}
		const data = {
			linkId: SingleLink.id,
			domain: domain,
		};
		customDomain(data);
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
								Create a Link with custom domain
							</BlockTitle>
							<BlockDes>
								<p className="lead">create a link with your domain and your brand</p>
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
										<label className="form-label">Choose your domain</label>
										<span className="form-note">Specify the domain of your link.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<div className="form-control-select">
												<Input type="select" onChange={(e) => setDomains(e.target.value)}>
													<option value="shorterME.link/">shorterME.link/</option>
													{domain.length > 0 ? (
														domain.map((res) => (
															<option value={res.domain} key={res.id}>
																{res.domain}/
															</option>
														))
													) : (
														<option value="shorterME.link/">shorterME.link/</option>
													)}
												</Input>
											</div>
										</div>
									</FormGroup>
								</Col>
							</Row>

							<Row className="g-3">
								<Col lg="7" className="offset-lg-5">
									<FormGroup className="mt-2">
										<Button color="primary" size="lg" type="submit">
											save
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

export default ShortingFuncationality;
