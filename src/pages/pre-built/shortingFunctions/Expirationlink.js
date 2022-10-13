import React, { useEffect, useState, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { FormGroup, Input, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, Button } from "../../../components/Component";
import userDomain from "../../../zustand/domainStuff/domain";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
function Expirationlink() {
	const [doamins, setDomains] = useState("shorterME.link/");
	const [rangeStart, setRangeStart] = useState(new Date());
	const [rangeEnd, setRangeEnd] = useState();
	const { domains, getAllDomain } = userDomain((state) => ({
		domains: state.domains,
		getAllDomain: state.getAllDomain,
	}));

	const { createExpirationLink } = userFunctionalityLink((state) => ({
		createExpirationLink: state.createExpirationLink,
	}));

	const getAllDomains = useCallback(() => {
		getAllDomain();
	}, [getAllDomain]);

	useEffect(() => {
		getAllDomains();
	}, [getAllDomains]);

	const s = async (sData) => {
		const data = {
			link: sData.link,
			domain: doamins,
			staringDate: rangeStart,
			expireDate: rangeEnd,
		};
		await createExpirationLink(data);
	};

	const { handleSubmit, register } = useForm();
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockHeadContent>
						<BlockTitle tag="h2" className="fw-normal">
							Create a Link with your time and expiration
						</BlockTitle>
					</BlockHeadContent>
				</BlockHead>

				<Block size="lg">
					<PreviewCard>
						<div className="card-head">
							<h5 className="card-title">Link Setting</h5>
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
													{domains.length > 0 ? (
														domains.map((res) => (
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
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Date & Time
										</label>
										<span className="form-note">Specify the link you want short</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<div className="form-control-wrap">
											<div className="form-note">
												Date Format <code>mm/dd/yyyy</code>
											</div>
											<div className="input-daterange date-picker-range input-group">
												<DatePicker
													selected={rangeStart}
													onChange={setRangeStart}
													selectsStart
													startDate={rangeStart}
													endDate={rangeEnd}
													wrapperClassName="start-m"
													className="form-control"
												/>{" "}
												<div className="input-group-addon">TO</div>
												<DatePicker
													selected={rangeEnd}
													onChange={setRangeEnd}
													startDate={rangeStart}
													endDate={rangeEnd}
													selectsEnd
													minDate={rangeStart}
													wrapperClassName="end-m"
													className="form-control"
												/>
											</div>
										</div>
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

export default Expirationlink;
