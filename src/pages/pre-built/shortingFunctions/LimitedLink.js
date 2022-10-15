import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";

function LimitedLink({ sm, updateSm }) {
	const { SingleLink, createLimitedLink } = userFunctionalityLink((state) => ({
		SingleLink: state.SingleLink,
		createLimitedLink: state.createLimitedLink,
	}));
	const s = async (sData) => {
		if (!SingleLink || SingleLink.length === 0 || !SingleLink.id) {
			return errorToast("Please select link first", "Error");
		}
		let data = {
			linkId: SingleLink.id,
			clickCount: sData.number,
		};
		createLimitedLink(data);
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
			</Content>
		</React.Fragment>
	);
}

export default LimitedLink;
