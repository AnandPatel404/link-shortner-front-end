import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import Dropzone from "react-dropzone";
import DatePicker from "react-datepicker";
import {
	Block,
	BlockHead,
	BlockBetween,
	BlockHeadContent,
	BlockTitle,
	BlockDes,
	Button,
	ProjectCard,
	Col,
	RSelect,
} from "../../../components/Component";
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
		if (files.length > 0) {
			await fetch(files[0].preview).then(async (res) => {
				const blob = await res.blob();
				const reader = new FileReader();
				reader.readAsDataURL(blob);

				reader.onload = async () => {
					const data = {
						link: sData.link,
						qrColor: colorCodes,
						base64: reader.result,
					};
					console.log(data);
					await createQrs(data);
				};
			});
		} else {
			const data = {
				link: sData.link,
				qrColor: colorCodes.toString(),
			};
			console.log(data);
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
							<img
								src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAAAklEQVR4AewaftIAAAS0SURBVO3BQW4dSQxEwZdE35viyXO2hBdlFPpL1oCMEHyZNUawRgnWKMEa5eEPdvKTpOLETjqpOLGTT5KKzk5OpOLETn6SVHTBGiVYowRrlIe/kIpPspPvJBWdnXRS8UlS0dlJJxUnUvFJdnISrFGCNUqwRnm4ZCc3pOKGndywk04qbthJJxX/kp3ckIobwRolWKMEa5SHdWQnJ3bSScVvFqxRgjVKsEZ5+GWkorOTzk5O7OTETjqpuCEVnZ10dtJJxW8SrFGCNUqwRnm4JBX/klR0dnJDKk7s5MROOqn4JKn4TsEaJVijBGuUh7+wk59kJ51UdHbSSUVnJ51UdHbSScWJVHR2cmInnVSc2MlPCtYowRolWKM8/EEq/iWp+E5ScSIVJ1LxhlT8S8EaJVijBGsUwZd5wU5OpKKzkxOp6Oykk4rOTjqpeMNOOqno7KSTiu9kJydScSNYowRrlGCNIvgyB3ZyIhWdnXRScWInN6TiDTvppOKT7KSTiht20klFZyedVNwI1ijBGiVYowi+TGMnP0kqOjvppKKzkxtS0dnJDano7KSTihM7OZGKG3bSScWNYI0SrFGCNcrDH6Sis5NOKjo7OZGKEzvppKKzk04qOjvppOKGVHwnqejs5MROOqnopOLETjqp6II1SrBGCdYogi9zwU46qbhhJydScWInJ1JxYicnUtHZyQ2pOLGTE6no7KSTijeCNUqwRgnWKA8v2ckNqejspLOTE6no7OST7OSGVHR20knFDTvppOLETk6kogvWKMEaJVijPPzBTjqpOJGKEzvp7KSTis5OOqno7OQNqfgkO+mk4kQqTuzkxE7eCNYowRolWKMIvswH2UknFW/YSScVJ3bSSUVnJ58kFSd20klFZyedVHR2ciIVnZ10UtEFa5RgjRKsUR7+YCedVJzYSScVJ3bSScUNOzmRis5ObkjFJ0nFG1JxYiedVJwEa5RgjRKsUR4u2ckbUtHZSScVnVR0dtJJxRtSccNOTqTihlR0dnJDKm4Ea5RgjRKsUR7+wk46qejs5MRObthJJxVvSEVnJzfs5IaddFJxYiedVLxhJ51UdMEaJVijBGuUhw+zkxOpuGEnnVR0dtJJRWcnnVR0dvKGVHR20tnJiVR0dtJJRWcnnVTcCNYowRolWKM8fJhUnNjJiVR0UtHZSScVnZ10UtHZyRtS8Ul2ckMq3gjWKMEaJVijCL7ML2InN6Sis5M3pOLETm5IxQ076aSis5MTqTgJ1ijBGiVYozz8wU5+klScSEVnJzekorOTf8lOOqk4sZNOKjo7uRGsUYI1SrBGefgLqfgkOzmRis5OOqn4P5OKT5KKzk46qeiCNUqwRgnWKA+X7OSGVNywk+8kFTfs5A07+U52ciNYowRrlGCN8vDLScUbdtJJxSdJxYmddFJxw05uSMVJsEYJ1ijBGuXhl5GKEzv5SVLR2UlnJ51UdFJxYicnUnHDTjqp6II1SrBGCdYoD5ek4ifZyQ2peMNOOqnopOKGnXySnXRS0dnJSbBGCdYowRrl4S/s5DeTis5OTqSis5M37OSGVHR2cmInnVScSMVJsEYJ1ijBGkXwZdYYwRolWKMEa5T/AHoXAE1ciHekAAAAAElFTkSuQmCC"
								alt=""
							/>
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
												<label className="form-label ">Qr logo</label>
												<Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles)}>
													{({ getRootProps, getInputProps }) => (
														<section>
															<div {...getRootProps()} className="dropzone upload-zone dz-clickable">
																<input {...getInputProps()} />
																{files.length === 0 && (
																	<div className="dz-message">
																		<span className="dz-message-text">Drag and drop file</span>
																		<span className="dz-message-or">or</span>
																		<Button color="primary">SELECT</Button>
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
