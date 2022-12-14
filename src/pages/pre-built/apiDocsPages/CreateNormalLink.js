import React from "react";

import Content from "../../../layout/content/Content";

import Head from "../../../layout/head/Head";

// import { FormGroup, Row, Col, Form, Spinner } from "reactstrap";

import { Block, BlockHead, BlockHeadContent, BlockTitle, Button, Icon, BlockBetween } from "../../../components/Component";

function CreateNormalLink({ sm, updateSm }) {
	return (
		<React.Fragment>
			<Head title="Device Targeting Link" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Create a Normal Link With Api
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block size="lg"></Block>
			</Content>
		</React.Fragment>
	);
}

export default CreateNormalLink;
