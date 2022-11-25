import React, { useState, useEffect } from "react";
import Content from "../../layout/content/Content";
import Head from "../../layout/head/Head";
import { useForm } from "react-hook-form";
import { FormGroup, Row, Col, Form, Spinner } from "reactstrap";
import { Block, BlockHead, BlockHeadContent, BlockTitle, BlockDes, Button, Icon, BlockBetween } from "../../components/Component";
function LinkVerification({ match }) {
	useEffect(() => {
		const id = match.params.id;
	}, []);
	return (
		<React.Fragment>
			<Head title="Create Full Link" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Create a Link or find link
							</BlockTitle>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block size="lg">{/* <iframe src={} frameborder="0"></iframe> */}</Block>
			</Content>
		</React.Fragment>
	);
}

export default LinkVerification;
