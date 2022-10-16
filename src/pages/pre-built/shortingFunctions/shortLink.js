import React, { useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
function ShortLink({ sm, updateSm }) {
	const [linkStatus, setLinkStatus] = useState("Enable");
	const [title, setTitle] = useState(null);
	const { createLink } = userFunctionalityLink((state) => ({
		createLink: state.createLink,
	}));
	const s = async (sData) => {
		if (title !== null && title !== "") {
			const data = {
				link: sData.link,
				link_title: sData.title,
				link_status: linkStatus,
			};
			createLink(data);
		} else {
			const data = {
				link: sData.link,
				link_status: linkStatus,
			};
			createLink(data);
		}
	};
	const set = (e) => {
		if (linkStatus === "Enable") {
			setLinkStatus("Disable");
		} else {
			setLinkStatus("Enable");
		}
	};

	const tt = (e) => {
		setTitle(e);
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
								Create a Link or find link
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block size="lg">
					<Form className="gy-3" onSubmit={handleSubmit(s)}>
						<Row className="g-3 align-center">
							<Col lg="5">
								<FormGroup>
									<label className="form-label" htmlFor="site-name">
										Url
									</label>
									<span className="form-note">Specify the link</span>
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
									<label className="form-label" htmlFor="site-name">
										Title
									</label>
									<span className="form-note">Specify the title (if you don't Specify automatically title add to link)</span>
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
												tt(e.target.value);
											}}
										/>
									</div>
								</FormGroup>
							</Col>
						</Row>
						<Row className="g-3 align-center">
							<Col lg="5">
								<FormGroup>
									<label className="form-label">Link status</label>
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
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default ShortLink;
