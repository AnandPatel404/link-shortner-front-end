import React, { useEffect, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Input, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, PreviewCard, Button } from "../../../components/Component";
import userDomain from "../../../zustand/domainStuff/domain";

function SetErrorPage() {
	const [linkStatus, setLinkStatus] = useState("Enable");
	const { getAllDomain, createLinkWithCustomDomain } = userDomain((state) => ({
		getAllDomain: state.getAllDomain,
		createLinkWithCustomDomain: state.createLinkWithCustomDomain,
	}));

	useEffect(() => {
		getAllDomain();
	}, [getAllDomain]);

	const s = async (sData) => {
		const data = {
			link: sData.link,
			link_status: linkStatus,
		};
		await createLinkWithCustomDomain(data);
	};
	// TODO : this is not done yet
	const set = (e) => {
		if (linkStatus === "Enable") {
			setLinkStatus("Disable");
		} else {
			setLinkStatus("Enable");
		}
	};

	const { errors, handleSubmit, register } = useForm();
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockHeadContent>
						<BlockTitle tag="h2" className="fw-normal">
							Set a error page
						</BlockTitle>
						<BlockDes>
							<p className="lead">
								{" "}
								Set a your allover links error page any reason website is down or status is off this link automatically redirect this
								page
							</p>
						</BlockDes>
					</BlockHeadContent>
				</BlockHead>

				<Block size="lg">
					<PreviewCard>
						<div className="card-head">
							<h5 className="card-title">Error redirection</h5>
						</div>
						<Form className="gy-3" onSubmit={handleSubmit(s)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Link
										</label>
										<span className="form-note">Specify the link you want short</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<input
												type="text"
												id="link"
												name="link"
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
										<label className="form-label">status</label>
										<span className="form-note">Enable or disable link status.</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<ul className="custom-control-group g-3 align-center flex-wrap">
											<li>
												<div className="custom-control custom-radio">
													<input
														type="radio"
														className="custom-control-input form-control"
														defaultChecked
														name="status"
														id="reg-enable"
														onClick={set}
													/>
													<label className="custom-control-label" htmlFor="reg-enable">
														Enable
													</label>
												</div>
											</li>
											<li>
												<div className="custom-control custom-radio">
													<input
														type="radio"
														className="custom-control-input form-control"
														name="status"
														id="reg-disable"
														onClick={set}
													/>
													<label className="custom-control-label" htmlFor="reg-disable">
														Disable
													</label>
												</div>
											</li>
										</ul>
									</FormGroup>
								</Col>
							</Row>

							<Row className="g-3">
								<Col lg="7" className="offset-lg-5">
									<FormGroup className="mt-2">
										<Button color="primary" size="lg" type="submit">
											Create
										</Button>
									</FormGroup>
								</Col>
							</Row>
						</Form>
					</PreviewCard>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default SetErrorPage;
