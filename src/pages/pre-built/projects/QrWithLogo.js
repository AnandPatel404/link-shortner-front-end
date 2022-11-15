import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Dropzone from "react-dropzone";
import { Block, BlockHead, BlockBetween, BlockHeadContent, BlockTitle, Row, Button, Col, Icon } from "../../../components/Component";
import { FormGroup, Form, Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import userFunctionalityLink from "../../../zustand/fuctionalityLinks/functionaLityLink";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import userSubStore from "../../../zustand/Subscription/sub";
import { Link } from "react-router-dom";

const QrWithLogo = ({ sm, updateSm }) => {
	const [files, setFiles] = useState([]);
	const [loading, setLoading] = useState(false);

	const { createQrwithLogo, SingleLink } = userFunctionalityLink((state) => ({
		createQrwithLogo: state.createQrwithLogo,
		SingleLink: state.SingleLink,
	}));

	const { sub } = userSubStore((state) => ({
		sub: state.subscription,
	}));

	const handleDropChange = async (acceptedFiles, set) => {
		set(
			acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
	};

	const onSubmit = async () => {
		setLoading(true);
		if (!SingleLink || !SingleLink.id || SingleLink.length === 0) {
			setLoading(false);
			return errorToast("Please select link first", "Error");
		}

		if (files.length > 0) {
			const data = new FormData();
			data.append("img", files[0]);

			await createQrwithLogo(data, SingleLink.id, setLoading);
		}
	};

	const { handleSubmit } = useForm();

	return (
		<React.Fragment>
			<Head title="Form Elements" />
			<Content page="component">
				<BlockHead size="lg" wide="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle tag="h2" className="fw-normal">
								Create a Link with Qr code
							</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent className="align-self-start d-lg-none">
							<Button className={`toggle btn btn-icon btn-trigger mt-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
								<Icon name="menu-alt-r"></Icon>
							</Button>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				{sub.planId?.qr_link ? (
					<Block size="lg">
						<Form className="gy-3" onSubmit={handleSubmit(onSubmit)}>
							<Row className="g-3 align-center">
								<Col lg="5">
									<FormGroup>
										<label className="form-label" htmlFor="site-name">
											Qr with logo
										</label>
										<span className="form-note">Specify the Qr logo</span>
									</FormGroup>
								</Col>
								<Col lg="7">
									<FormGroup>
										<Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)} maxFiles={1}>
											{({ getRootProps, getInputProps }) => (
												<section>
													<div {...getRootProps()} className="dropzone border-0 p-0 d-flex">
														<input {...getInputProps()} />
														{files.length === 0 && (
															<div className="dz-message">
																<span className="dz-message-text">Drag and drop file</span>
																<span className="dz-message-or">or</span>
																<Button color="primary" type="button">
																	SELECT
																</Button>
															</div>
														)}
														{files.map((file) => (
															<div
																key={file.name}
																className="dz-preview dz-processing dz-image-preview dz-error dz-complete d-flex justify-content-center"
															>
																<div className="">
																	<img src={file.preview} alt="preview" width={300} />
																</div>
															</div>
														))}
													</div>
												</section>
											)}
										</Dropzone>
									</FormGroup>
								</Col>
							</Row>
							<Row className="g-3">
								<Col lg="7" className="offset-lg-5">
									<FormGroup className="mt-2">
										<Button color="primary" size="lg" type="submit">
											{loading ? <Spinner /> : "Save"}
										</Button>
									</FormGroup>
								</Col>
							</Row>
						</Form>
					</Block>
				) : (
					<Link to={`${process.env.PUBLIC_URL}/pricing-table`}>Upgrade Your Plan To Use This Functionality</Link>
				)}
			</Content>
		</React.Fragment>
	);
};
export default QrWithLogo;
