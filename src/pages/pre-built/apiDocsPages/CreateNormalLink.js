import React from "react";

import Content from "../../../layout/content/Content";

import Head from "../../../layout/head/Head";

import { Row, Col } from "reactstrap";

import carbon from "../../../Landing/assets/img/carbon.png";

import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";

function CreateNormalLink({ sm, updateSm }) {
	return (
		<React.Fragment>
			<Head title="Device Targeting Link" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal align-items-center">
								Create a Normal Link With Api
							</BlockTitle>
						</BlockHeadContent>
						<div>
							<p>API Method</p>
							<Button type="button" className="btn btn-primary btn-dim">
								Post
							</Button>
						</div>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block size="lg">
					<Row className="g-3 d-flex justify-content-center align-items-center">
						<Col lg="12">
							<div className="d-flex flex-row justify-content-between">
								<div className="w-100">
									<p>URL</p>
									<div className="font-weight-bold p-3" style={{ backgroundColor: "#fef8e4" }}>
										https://shorterme.in/v1/api/links
									</div>
								</div>
								<div style={{ cursor: "pointer" }}>
									<Icon name="check-round-cut" className="h4"></Icon>
								</div>
							</div>
						</Col>
						<Col lg="10">
							<img src={carbon} alt="" />
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default CreateNormalLink;
