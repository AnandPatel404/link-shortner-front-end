import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, PreviewCard, Button } from "../../../components/Component";
function PasswordProtectedLink() {
	const s = async (sData) => {};

	const { handleSubmit, register } = useForm();
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockHeadContent>
						<BlockTitle tag="h2" className="fw-normal">
							Create a Link with your Password
						</BlockTitle>
					</BlockHeadContent>
				</BlockHead>

				<Block size="lg">
					<PreviewCard>
						<Form className="gy-3" onSubmit={handleSubmit(s)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Link Password
										</label>
										<span className="form-note">Specify the link password</span>
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
					</PreviewCard>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default PasswordProtectedLink;
