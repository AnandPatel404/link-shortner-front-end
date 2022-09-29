import { Form, FormGroup, Row, Col } from "reactstrap";
import Head from "../../../layout/head/Head";
// import Content from "../../../layout/content/Content";
import React, { useEffect, useState, useCallback } from "react";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle, Button, PreviewCard } from "../../../components/Component";
import { useForm } from "react-hook-form";
import userDashBoard from "../../../zustand/DashBoard/userDashBoard";

function Editlink({ match, history }) {
	const [data, SetData] = useState({});
	const { updateLink, getLinkById } = userDashBoard((state) => ({
		getLinkById: state.getLinkById,
		updateLink: state.updateLink,
	}));
	const getLink = useCallback(async () => {
		const id = match.params.id;
		const data = await getLinkById(id);
		SetData(data.data.data);
	}, [getLinkById, match.params.id]);
	useEffect(() => {
		getLink();
	}, [getLink, match.params.id]);
	const onFormSubmit = async (formData) => {
		await updateLink(formData, match.params.id, history);
	};
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Change Password" />
			<Row>
				<Col>
					<Block className="nk-auth-body wide-xs">
						<PreviewCard className=" mt-md-4" bodyClass="card-inner-lg">
							<BlockHead>
								<BlockContent>
									<BlockTitle tag="h4">Update link</BlockTitle>
									<BlockDes>
										<p>
											your link id is <span>:id</span>
										</p>
									</BlockDes>
								</BlockContent>
							</BlockHead>
							<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="link_title">
											Link-Title
										</label>
									</div>
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
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="protocol">
											Protocol
										</label>
									</div>
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
									{/* TODO: add select type in protocol */}
								</FormGroup>
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="domain">
											domain
										</label>
									</div>
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
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="backlink">
											Back-link
										</label>
									</div>
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
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="Official_domain">
											Official Domain
										</label>
									</div>
									<div className="form-control-wrap">
										<input
											type="text"
											ref={register({ required: "This field is required" })}
											placeholder="Shorterme.in/"
											className="form-control-lg form-control"
											defaultValue="Shorterme.in/"
											disabled
										/>
										{errors.Official_domain && <span className="invalid">{errors.Official_domain.message}</span>}
									</div>
								</FormGroup>
								<FormGroup>
									<div className="form-label-group">
										<label className="form-label" htmlFor="shorterLink">
											Shorter Link
										</label>
									</div>
									<div className="form-control-wrap">
										<input
											type="text"
											id="shorterLink"
											// name="shorterLink"
											ref={register({ required: "This field is required" })}
											placeholder="shorted link"
											className="form-control-lg form-control"
											defaultValue={data.shorterLink}
											disabled
										/>
										{errors.shorterLink && <span className="invalid">{errors.shorterLink.message}</span>}
									</div>
								</FormGroup>

								<FormGroup>
									<Button size="lg" className="btn-block" type="submit" color="primary">
										Submit
									</Button>
								</FormGroup>
							</Form>
						</PreviewCard>
					</Block>
				</Col>
			</Row>
		</React.Fragment>
	);
}

export default Editlink;
