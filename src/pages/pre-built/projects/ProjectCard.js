import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Dropzone from "react-dropzone";
import DatePicker from "react-datepicker";
import { Block, BlockHead, BlockBetween, BlockHeadContent, BlockTitle, BlockDes, Button, ProjectCard, Col } from "../../../components/Component";
import { FormGroup, Form } from "reactstrap";
import { useForm } from "react-hook-form";
import useqrCode from "../../../zustand/qrCode/qrCode";

const ProjectCardPage = () => {
	const { createQrs } = useqrCode((state) => ({
		createQrs: state.createQr,
	}));
	const [color, SetColor] = useState();
	const [colorCodes, setColorsCode] = useState("");

	const [deadLine, setDate] = useState(false);
	const [dates, setDates] = useState("");

	const [image, setImage] = useState(false);
	const showlogoBOx = () => {
		setImage(!image);
	};
	const setDeadlines = () => {
		setDate(!deadLine);
	};
	const setcolor = () => {
		SetColor(!color);
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
		const data = new FormData();
		if (files) {
			data.append("link", sData.link);
			data.append("qrColor", colorCodes.toString());
			data.append("img", files[0]);

			await createQrs(data);
		} else {
			const data = {
				link: sData.link,
				qrColor: colorCodes.toString(),
			};
			await createQrs(data);
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

				<Block>
					<ProjectCard>
						<div className="p-2">
							<h5 className="title">Qr generation</h5>
							<div className="mt-4">
								<Form className="row gy-4" onSubmit={handleSubmit(onFormSubmit)}>
									<Col md="12">
										<FormGroup>
											<label className="form-label">Link</label>
											<input
												type="text"
												name="link"
												placeholder="Enter link"
												className="form-control"
												ref={register({ required: "This field is required" })}
											/>

											{errors.title && <span className="invalid">{errors.title.message}</span>}
										</FormGroup>
									</Col>
									<Col md="4">
										<FormGroup>
											<div className="custom-control custom-checkbox">
												<input
													type="checkbox"
													className="custom-control-input form-control"
													id="isAllreadyExist"
													name="isExist"
												/>
												<label className="custom-control-label" htmlFor="isAllreadyExist">
													is this link already exist in your profile
												</label>
											</div>
										</FormGroup>
									</Col>
									<Col md="4">
										<FormGroup onChange={setcolor}>
											<div className="custom-control custom-checkbox">
												<input type="checkbox" className="custom-control-input form-control" id="color" name="color" />
												<label className="custom-control-label" htmlFor="color">
													Qr With color
												</label>
											</div>
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
									{color === true ? (
										<Col md="12">
											<FormGroup>
												<input type="color" className="" name="backGroundColor" onChange={(e) => colorCode(e.target.value)} />
												<label className="form-label">Qr code</label>
											</FormGroup>
										</Col>
									) : (
										""
									)}
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
									<Col size="12">
										<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
											<li>
												<Button color="primary" size="md" type="submit">
													Create Qr
												</Button>
											</li>
										</ul>
									</Col>
								</Form>
							</div>
						</div>
					</ProjectCard>
				</Block>
			</Content>
		</React.Fragment>
	);
};
export default ProjectCardPage;
