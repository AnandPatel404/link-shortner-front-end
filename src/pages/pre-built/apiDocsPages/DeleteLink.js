import React from "react";

import Content from "../../../layout/content/Content";

import Head from "../../../layout/head/Head";

import { Row, Col } from "reactstrap";

import carbon from "../../../Landing/assets/img/delete.png";

import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";

import linkOutPut from "../../../Landing/assets/img/deleteo.png";

import Swal from "sweetalert2";

function DeleteLink({ sm, updateSm }) {
	const succ = (link) => {
		Swal.fire("Link is copied", "", "success");
		navigator.clipboard.writeText(link);
	};
	return (
		<React.Fragment>
			<Head title="Delete Link With Api" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal align-items-center">
								Delete Link With Api
							</BlockTitle>
							<p> Delete Link using Shorterme API key and secret key.</p>
						</BlockHeadContent>
						<BlockHeadContent>
							<p>API Method</p>
							<Button type="button" className="btn btn-primary" size="md">
								DELETE
							</Button>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				<hr />
				<Block size="lg">
					<Row className="g-3 d-flex justify-content-center align-items-center">
						<Col lg="12">
							<div className="w-100">
								<div className="d-flex align-items-center justify-content-between">
									<p className="h4">URL</p>
									<Icon
										name="check-round-cut"
										className="h3"
										style={{ cursor: "pointer" }}
										onClick={() => {
											succ("https://shorterme.in/v1/api/links");
										}}
									></Icon>
								</div>
								<div
									className="font-weight-bold p-3"
									style={{ backgroundColor: "#fef8e4", cursor: "pointer" }}
									onClick={() => {
										succ("https://shorterme.in/v1/api/links");
									}}
								>
									https://shorterme.in/v1/api/links
								</div>
							</div>
						</Col>
						<Col lg="10">
							<img src={carbon} alt="" />
						</Col>
						<Col lg="10">
							<div className="w-100">
								<div className="d-flex align-items-center justify-content-between">
									<p className="h4">Output</p>
								</div>
							</div>
							<img src={linkOutPut} alt="" />
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
}

export default DeleteLink;
