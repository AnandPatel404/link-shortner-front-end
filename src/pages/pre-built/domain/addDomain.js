import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, Card, FormGroup, Modal, ModalBody, Form } from "reactstrap";
import {
	Button,
	Block,
	BlockBetween,
	BlockHead,
	BlockHeadContent,
	BlockTitle,
	Icon,
	Col,
	PaginationComponent,
	RSelect,
} from "../../../components/Component";
import { useForm } from "react-hook-form";
import userDomain from "../../../zustand/domainStuff/domain";

const AddDomain = () => {
	const option = [
		{ value: "Enable", label: "Enable" },
		{ value: "Disable", label: "Disable" },
	];
	const { data, createDomains, getAllDomain } = userDomain((state) => ({
		data: state.domains,
		createDomains: state.createDomains,
		getAllDomain: state.getAllDomain,
	}));

	useEffect(() => {
		getAllDomain();
	}, [getAllDomain]);

	const [modal, setModal] = useState({
		add: false,
	});
	// const [viewModal, setViewModal] = useState(false);
	const [formData, setFormData] = useState("Enable");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(10);

	// function to close the form modal
	const onFormCancel = () => {
		setModal({ add: false });
	};

	const onFormSubmit = async (sData) => {
		await createDomains({
			domainName: sData.domainName,
			status: formData,
		});
		setModal({ add: false });
	};

	const currentItems = data;

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const { errors, register, handleSubmit } = useForm();

	return (
		<React.Fragment>
			<Head title="Transaction Lists - Basic"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle page>Domain list</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent>
							<ul className="nk-block-tools g-3">
								<li>
									<Button color="primary" className="btn-icon" onClick={() => setModal({ add: true })}>
										<Icon name="plus"></Icon>
									</Button>
								</li>
							</ul>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block>
					<Card className="card-bordered card-stretch">
						<div className="card-inner-group">
							<div className="card-inner">
								<div className="card-title-group">
									<div className="card-title">
										<h5 className="title">All Domains</h5>
									</div>
								</div>
							</div>
							<div className="card-inner p-0">
								<table className="table table-tranx">
									<thead>
										<tr className="tb-tnx-head">
											<th className="tb-tnx-id">
												<span className="">No</span>
											</th>
											<th className="tb-tnx-info">
												<span className="tb-tnx-desc d-none d-sm-inline-block">
													<span>Domain name</span>
												</span>
												<span className="tb-tnx-date d-md-inline-block d-none">
													<span className="d-md-none">Date</span>
													<span className="d-none d-md-block">
														<span>Created Date</span>
													</span>
												</span>
											</th>
											<th className="tb-tnx-amount is-alt">
												<span className="tb-tnx-status d-none d-md-inline-block">Status</span>
											</th>
											<th className="tb-tnx-amount is-alt">
												<span className="tb-tnx-status d-none d-md-inline-block">Config</span>
											</th>
											<th className="tb-tnx-action">
												<span>&nbsp;</span>
											</th>
										</tr>
									</thead>
									<tbody>
										{currentItems.length > 0
											? currentItems.map((item, index) => {
													return (
														<tr key={item.id} className="tb-tnx-item">
															<td className="tb-tnx-id">
																<a
																	href="#ref"
																	onClick={(ev) => {
																		ev.preventDefault();
																	}}
																>
																	<span>{index + 1}</span>
																</a>
															</td>
															<td className="tb-tnx-info">
																<div className="tb-tnx-desc">
																	<span className="title">{item.domain}</span>
																</div>
																<div className="tb-tnx-date">
																	<span className="date">{new Date(item.createdAt).toLocaleDateString()}</span>
																</div>
															</td>
															<td className="tb-tnx-amount is-alt">
																<div className="tb-tnx-status">
																	<span
																		className={`badge badge-dot badge-${
																			item.status === "Enable" ? "success" : "danger"
																		}`}
																	>
																		{item.status}
																	</span>
																</div>
															</td>
															<td className="tb-tnx-amount is-alt">
																<div className="tb-tnx-status">
																	<span
																		className={`badge badge-dot badge-${
																			item.config === true ? "success" : "danger"
																		}`}
																	>
																		{item.config.toString()}
																	</span>
																</div>
															</td>
															<td className="tb-tnx-action">
																<UncontrolledDropdown>
																	<DropdownToggle
																		tag="a"
																		className="text-soft dropdown-toggle btn btn-icon btn-trigger"
																	>
																		<Icon name="more-h"></Icon>
																	</DropdownToggle>
																	<DropdownMenu right>
																		<ul className="link-list-plain">
																			{/* <li
																				onClick={() => {
																					setViewModal(true);
																				}}
																			>
																				<DropdownItem
																					tag="a"
																					href="#view"
																					onClick={(ev) => {
																						ev.preventDefault();
																					}}
																				>
																					View
																				</DropdownItem>
																			</li> */}
																		</ul>
																	</DropdownMenu>
																</UncontrolledDropdown>
															</td>
														</tr>
													);
											  })
											: null}
									</tbody>
								</table>
							</div>
							<div className="card-inner">
								{currentItems.length > 0 ? (
									<PaginationComponent
										noDown
										itemPerPage={itemPerPage}
										totalItems={data.length}
										paginate={paginate}
										currentPage={currentPage}
									/>
								) : (
									<div className="text-center">
										<span className="text-silent">No data found</span>
									</div>
								)}
							</div>
						</div>
					</Card>
				</Block>

				<Modal isOpen={modal.add} toggle={() => setModal({ add: false })} className="modal-dialog-centered" size="lg">
					<ModalBody>
						<a
							href="#cancel"
							onClick={(ev) => {
								ev.preventDefault();
								onFormCancel();
							}}
							className="close"
						>
							<Icon name="cross-sm"></Icon>
						</a>
						<div className="p-2">
							<h5 className="title">Add Domain</h5>
							<div className="mt-4">
								<Form className="row gy-4 mt-4" onSubmit={handleSubmit(onFormSubmit)}>
									<Col md="12">
										<FormGroup>
											<label className="form-label">Domain name</label>
											<input
												className="form-control"
												ref={register({ required: "This field is required" })}
												type="text"
												name="domainName"
												defaultValue={formData.bill}
												placeholder="Enter Your domain name"
											/>
											{errors.domainName && <span className="invalid">{errors.domainName.message}</span>}
										</FormGroup>
									</Col>

									<Col md="12">
										<FormGroup>
											<label className="form-label">Status</label>
											<div className="form-control-wrap">
												<RSelect options={option} onChange={(e) => setFormData(e.value)} defaultValue={option[0]} />
											</div>
										</FormGroup>
									</Col>
									<Col size="12">
										<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
											<li>
												<Button color="primary" size="md" type="submit">
													Add
												</Button>
											</li>
											<li>
												<a
													href="#cancel"
													onClick={(ev) => {
														ev.preventDefault();
														onFormCancel();
													}}
													className="link link-light"
												>
													Cancel
												</a>
											</li>
										</ul>
									</Col>
								</Form>
							</div>
						</div>
					</ModalBody>
				</Modal>
			</Content>
		</React.Fragment>
	);
};

export default AddDomain;
