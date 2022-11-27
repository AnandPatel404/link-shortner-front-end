import React from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { FormGroup, Row, Col } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";
function PasswordProtectedF({ sm, updateSm }) {
	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Password Protected Link
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
					<Row className="g-3 align-center">
						<Col lg="5">
							<FormGroup>
								<label className="form-label" htmlFor="site-name">
									Back-link
								</label>
								<span className="form-note">Specify the back link</span>
							</FormGroup>
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default PasswordProtectedF;
