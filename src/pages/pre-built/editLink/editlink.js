import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { Spinner } from "reactstrap";
import React, { useEffect, useState, useCallback } from "react";
import { FormGroup, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, Button } from "../../../components/Component";
import { useForm } from "react-hook-form";
import userDashBoard from "../../../zustand/DashBoard/userDashBoard";

function Editlink({ match, history }) {
	const [loading, setLoading] = useState(true);
	const [data, SetData] = useState({});
	const [status, setStatus] = useState("");
	const { updateLink, getLinkById } = userDashBoard((state) => ({
		getLinkById: state.getLinkById,
		updateLink: state.updateLink,
	}));
	const getLink = useCallback(async () => {
		const id = match.params.id;
		const data = await getLinkById(id, setLoading);
		SetData(data.data.data.link);
		setStatus(data.data.data.link.link_status);
	}, [getLinkById, match.params.id]);
	useEffect(() => {
		getLink();
	}, [getLink, match.params.id]);
	const onFormSubmit = async (formData) => {
		const data = {
			link_title: formData.link_title,
			backlink: formData.backlink,
			domain: formData.domain,
			link_status: status,
			protocol: formData.protocol,
		};
		await updateLink(data, match.params.id, history);
	};
	const { errors, register, handleSubmit } = useForm();

	const set = () => {
		if (status === "Enable") {
			setStatus("Disable");
		} else {
			setStatus("Enable");
		}
	};
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			{loading ? (
				<div className="d-flex justify-content-center align-items-center" style={{ height: 100 + "vh" }}>
					<Spinner />
				</div>
			) : (
				<Content page="component">
					<BlockHead size="lg" wide="sm">
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Update your link
							</BlockTitle>
						</BlockHeadContent>
					</BlockHead>

					<Block size="lg">
						<PreviewCard>
							<div className="card-head">
								<h5 className="card-title">Link Setting</h5>
							</div>
							<Form className="gy-3" onSubmit={handleSubmit(onFormSubmit)}>
								<Row className="g-3 align-center">
									<Col lg="5">
										<FormGroup>
											<label className="form-label" htmlFor="site-name">
												Link title
											</label>
										</FormGroup>
									</Col>
									<Col lg="7">
										<FormGroup>
											<div className="form-control-wrap">
												<input
													type="text"
													id="link_title"
													name="link_title"
													ref={register({ required: "This field is required" })}
													placeholder="Title of link"
													className="form-control-lg form-control"
													defaultValue={data.link_title}
												/>
												{errors.link_title && <span className="invalid">{errors.link_title.message}</span>}
											</div>
										</FormGroup>
									</Col>
								</Row>
								<Row className="g-3 align-center">
									<Col lg="5">
										<FormGroup>
											<label className="form-label">Link status</label>
										</FormGroup>
									</Col>
									<Col lg="7">
										<FormGroup>
											{data.link_status === "Enable" ? (
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
											) : (
												<ul className="custom-control-group g-3 align-center flex-wrap">
													<li>
														<div className="custom-control custom-radio">
															<input
																type="radio"
																className="custom-control-input form-control"
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
																defaultChecked
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
											)}
										</FormGroup>
									</Col>
								</Row>
								<Row className="g-3 align-center">
									<Col lg="5">
										<FormGroup>
											<label className="form-label">Protocol</label>
										</FormGroup>
									</Col>
									<Col lg="7">
										<FormGroup>
											<div className="form-control-wrap">
												<input
													type="text"
													id="protocol"
													name="protocol"
													ref={register({ required: "This field is required" })}
													placeholder="Enter protocol"
													className="form-control-lg form-control"
													defaultValue={data.protocol}
												/>
												{errors.protocol && <span className="invalid">{errors.protocol.message}</span>}
											</div>
										</FormGroup>
									</Col>
								</Row>

								<Row className="g-3 align-center">
									<Col lg="5">
										<FormGroup>
											<label className="form-label">Domain</label>
										</FormGroup>
									</Col>
									<Col lg="7">
										<FormGroup>
											<div className="form-control-wrap">
												<input
													type="text"
													id="domain"
													name="domain"
													ref={register({ required: "This field is required" })}
													placeholder="link domain"
													className="form-control-lg form-control"
													defaultValue={data.domain}
												/>
												{errors.domain && <span className="invalid">{errors.domain.message}</span>}
											</div>
										</FormGroup>
									</Col>
								</Row>
								<Row className="g-3 align-center">
									<Col lg="5">
										<FormGroup>
											<label className="form-label">Back link</label>
										</FormGroup>
									</Col>
									<Col lg="7">
										<FormGroup>
											<div className="form-control-wrap">
												<input
													type="text"
													id="backlink"
													name="backlink"
													ref={register({ required: "This field is required" })}
													placeholder="back link of link"
													className="form-control-lg form-control"
													defaultValue={data.backlink}
												/>
												{errors.backlink && <span className="invalid">{errors.backlink.message}</span>}
											</div>
										</FormGroup>
									</Col>
								</Row>
								<Row className="g-3 align-center">
									<Col lg="5">
										<FormGroup>
											<label className="form-label">Official Domain</label>
										</FormGroup>
									</Col>
									<Col lg="7">
										<FormGroup>
											{data.coustomDomain ? (
												<div className="form-control-wrap">
													<input
														type="text"
														name="Official_domain"
														ref={register({ required: "This field is required" })}
														placeholder="Shorterme.in/"
														className="form-control-lg form-control"
														defaultValue={data.coustomDomain?.domain}
														disabled
													/>
													{errors.Official_domain && <span className="invalid">{errors.Official_domain.message}</span>}
												</div>
											) : (
												<div className="form-control-wrap">
													<input
														type="text"
														name="Official_domain"
														ref={register({ required: "This field is required" })}
														placeholder="Shorterme.in/"
														className="form-control-lg form-control"
														defaultValue="Shorterme.link/"
														disabled
													/>
													{errors.Official_domain && <span className="invalid">{errors.Official_domain.message}</span>}
												</div>
											)}
										</FormGroup>
									</Col>
								</Row>
								<Row className="g-3 align-center">
									<Col lg="5">
										<FormGroup>
											<label className="form-label"> Shorter Link</label>
										</FormGroup>
									</Col>
									<Col lg="7">
										<FormGroup>
											<div className="form-control-wrap">
												<input
													type="text"
													id="shorterLink"
													name="shortedLink"
													ref={register({ required: "This field is required" })}
													placeholder="shorted link"
													className="form-control-lg form-control"
													defaultValue={data.shorterLink}
													disabled
												/>
												{errors.shorterLink && <span className="invalid">{errors.shorterLink.message}</span>}
											</div>
										</FormGroup>
									</Col>
								</Row>

								<Row className="g-3">
									<Col lg="7" className="offset-lg-5">
										<FormGroup className="mt-2">
											<Button color="primary" size="lg" type="submit">
												Update
											</Button>
										</FormGroup>
									</Col>
								</Row>
							</Form>
						</PreviewCard>
					</Block>
				</Content>
			)}
		</React.Fragment>
	);
}

export default Editlink;
