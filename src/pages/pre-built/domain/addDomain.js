import React, { useState, useEffect, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, Card, FormGroup, Modal, ModalBody, Form, DropdownItem } from "reactstrap";
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
import Swal from "sweetalert2";

const AddDomain = () => {
	const option = [
		{ value: "Enable", label: "Enable" },
		{ value: "Disable", label: "Disable" },
	];
	const [items, setItems] = useState([]);
	const { createDomains, getAllDomain, deleteDomain } = userDomain((state) => ({
		createDomains: state.createDomains,
		getAllDomain: state.getAllDomain,
		deleteDomain: state.deleteDomain,
	}));

	const getData = useCallback(async () => {
		const data = await getAllDomain();
		setItems(data.data.data);
	}, [getAllDomain]);

	useEffect(() => {
		getData();
	}, [getData]);

	const [modal, setModal] = useState({
		add: false,
	});
	const [formData, setFormData] = useState("Enable");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(10);

	// function to close the form modal
	const onFormCancel = () => {
		setModal({ add: false });
	};

	const onFormSubmit = async (sData) => {
		const data = {
			domainName: sData.domainName,
			rootDomainLink: sData.rootDomainLink,
			status: formData,
		};
		createDomains(data, setModal, getData);
	};

	const dd = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this and your all domain link is deleted",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				confirmDelete(id);
			}
		});
	};

	const confirmDelete = (id) => {
		deleteDomain(id, getData);
	};

	const currentItems = items;

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
												<span>More</span>
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
																			<li
																				onClick={() => {
																					dd(item.id);
																				}}
																			>
																				<DropdownItem tag="a">Delete Domain</DropdownItem>
																			</li>
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
										totalItems={currentItems.length}
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
												placeholder="Enter Your domain name"
											/>
											{errors.domainName && <span className="invalid">{errors.domainName.message}</span>}
										</FormGroup>
									</Col>
									<Col md="12">
										<FormGroup>
											<label className="form-label">Root link</label>
											<input
												className="form-control"
												ref={register({ required: "This field is required" })}
												type="text"
												name="rootDomainLink"
												placeholder="Enter Your root domain link"
											/>
											{errors.rootDomainLink && <span className="invalid">{errors.rootDomainLink.message}</span>}
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
