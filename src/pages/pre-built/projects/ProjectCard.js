import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Dropzone from "react-dropzone";
// import DatePicker from "react-datepicker";
import { Block, BlockHead, BlockBetween, BlockHeadContent, BlockTitle, BlockDes, Button, ProjectCard, Col, Row } from "../../../components/Component";
import { FormGroup, Form, ModalBody, Modal } from "reactstrap";
import { useForm } from "react-hook-form";
import useqrCode from "../../../zustand/qrCode/qrCode";

const ProjectCardPage = () => {
	const [newID, setNewId] = useState("");
	const { createQrs, checkQrLink } = useqrCode((state) => ({
		createQrs: state.createQr,
		checkQrLink: state.checkQrLink,
	}));
	const [modal, setModal] = useState({
		edit: false,
		color: false,
	});
	const [colorCodes, setColorsCode] = useState("");

	// const [deadLine, setDate] = useState(false);
	// const [dates, setDates] = useState("");

	// const setDeadlines = () => {
	// 	setDate(!deadLine);
	// };

	const [image, setImage] = useState(false);
	const showlogoBOx = () => {
		setImage(!image);
	};

	const [files, setFiles] = useState([]);

	const handleDropChange = async (acceptedFiles, set) => {
		set(
			acceptedFiles.map((file) =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
	};

	const colorCode = (e) => {
		setColorsCode(e);
	};

	const onFormSubmit = async (sData) => {
		const d = await checkQrLink(sData, setModal);
		setNewId(d.data.id);
	};

	const onsecondSubmit = async () => {
		if (files) {
			const data = new FormData();
			data.append("qrColor", colorCodes.toString());
			data.append("img", files[0]);

			await createQrs(data, newID, setModal);
		} else {
			const data = {
				qrColor: colorCodes.toString(),
			};
			await createQrs(data, newID, setModal);
		}
	};

	const { errors, register, handleSubmit } = useForm();

	return (
		<React.Fragment>
			<Head title="Project Card"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle page>QR </BlockTitle>
							<BlockDes className="text-soft">make your link as qr</BlockDes>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				{/* <Block>
					<ProjectCard>
						<div className="p-2">
							<h5 className="title">Qr generation</h5>
							<div className="mt-4">
								<Form className="row gy-4" onSubmit={handleSubmit(onFormSubmit)}>
									<Col md="4">
										<FormGroup onChange={setDeadlines}>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input form-control" id="deadline" name="deadline" />
												<label className="custom-control-label" htmlFor="deadline">
													set Date to Qr
												</label>
											</div>
										</FormGroup>
									</Col>
									{deadLine === true ? (
										<Col md="12">
											<FormGroup>
												<label className="form-label">Deadline Date</label>
												<DatePicker
													selected={dates}
													className="form-control"
													onChange={(date) => setDates(date)}
													minDate={new Date()}
												/>
											</FormGroup>
										</Col>
									) : (
										""
									)}
								</Form>
							</div>
						</div>
					</ProjectCard>
				</Block> */}
				<Block className="nk-auth-body pt-lg-5 mt-lg-4 wide-s">
					<ProjectCard>
						<Row>
							<Col size="12" className="d-flex justify-content-center">
								<Button color="primary" size="md" onClick={() => setModal({ edit: true })}>
									Create Qr
								</Button>
							</Col>
						</Row>
					</ProjectCard>
				</Block>
				<Modal isOpen={modal.edit} toggle={() => setModal({ edit: false })} className="modal-dialog-centered" size="lg">
					<ModalBody>
						<h5 className="title">Enter your link</h5>
						<Form className="row gy-3" onSubmit={handleSubmit(onFormSubmit)}>
							<Col md="12">
								<FormGroup>
									<input
										type="text"
										name="link"
										placeholder="Enter link"
										className="form-control"
										ref={register({ required: "This field is required" })}
									/>

									{errors.link && <span className="invalid">{errors.link.message}</span>}
								</FormGroup>
							</Col>
							<Col md="12">
								<FormGroup>
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input form-control" id="isAllreadyExist" name="isExist" />
										<label className="custom-control-label" htmlFor="isAllreadyExist">
											is this link already exist in your profile
										</label>
									</div>
								</FormGroup>
							</Col>
							<Col size="12">
								<Button color="primary" size="md" type="submit">
									Next
								</Button>
							</Col>
						</Form>
					</ModalBody>
				</Modal>

				<Modal isOpen={modal.color} toggle={() => setModal({ edit: false })} className="modal-dialog-centered" size="lg">
					<ModalBody>
						<h5 className="title">Choose your Qr color</h5>
						<Form className="row gy-3" onSubmit={handleSubmit(onsecondSubmit)}>
							<Col md="6">
								<FormGroup>
									<input type="color" className="" name="backGroundColor" onChange={(e) => colorCode(e.target.value)} />
								</FormGroup>
							</Col>
							<Col md="4">
								<FormGroup onChange={showlogoBOx}>
									<div className="custom-control custom-checkbox">
										<input type="checkbox" className="custom-control-input form-control" id="withLogo" name="withLogo" />
										<label className="custom-control-label" htmlFor="withLogo">
											Qr with your logo
										</label>
									</div>
								</FormGroup>
							</Col>
							{image === true ? (
								<Col md="12" className="d-flex justify-content-center">
									<FormGroup>
										<label className="form-label">Dropzone Single File</label>
										<Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)} maxFiles={1}>
											{({ getRootProps, getInputProps }) => (
												<section>
													<div {...getRootProps()} className="dropzone upload-zone dz-clickable">
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
							) : (
								""
							)}
							<Col size="12" className="my-2">
								<Button color="primary" size="md" onClick={() => setModal({ edit: false })}>
									Next
								</Button>
							</Col>
						</Form>
					</ModalBody>
				</Modal>
			</Content>
		</React.Fragment>
	);
};
export default ProjectCardPage;
