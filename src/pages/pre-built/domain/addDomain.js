import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import DatePicker from "react-datepicker";
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, Card, FormGroup, Modal, ModalBody, DropdownItem, Form, Badge } from "reactstrap";
import {
	Button,
	Block,
	BlockBetween,
	BlockDes,
	BlockHead,
	BlockHeadContent,
	BlockTitle,
	Icon,
	Col,
	PaginationComponent,
	Row,
	RSelect,
} from "../../../components/Component";
import { statusOptions, transData } from "../trans-list/TransData";
import { dateFormatterAlt } from "../../../utils/Utils";
import { useForm } from "react-hook-form";

const AddDomain = () => {
	const [onSearch, setonSearch] = useState(true);
	const [onSearchText, setSearchText] = useState("");
	const [modal, setModal] = useState({
		add: false,
	});
	const [viewModal, setViewModal] = useState(false);
	const [detail, setDetail] = useState({});
	const [data, setData] = useState(transData);
	const [formData, setFormData] = useState({
		bill: "",
		issue: new Date(),
		due: new Date(),
		total: "",
		status: "",
		ref: "",
	});
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(10);
	const [sort, setSortState] = useState("");

	const sortingFunc = (params) => {
		let defaultData = data;
		if (params === "asc") {
			let sortedData = [...defaultData].sort((a, b) => parseFloat(a.ref) - parseFloat(b.ref));
			setData([...sortedData]);
		} else if (params === "dsc") {
			let sortedData = [...defaultData].sort((a, b) => parseFloat(b.ref) - parseFloat(a.ref));
			setData([...sortedData]);
		}
	};

	// Changing state value when searching name
	useEffect(() => {
		if (onSearchText !== "") {
			const filteredObject = transData.filter((item) => {
				return item.bill.toLowerCase().includes(onSearchText.toLowerCase());
			});
			setData([...filteredObject]);
		} else {
			setData([...transData]);
		}
	}, [onSearchText]);

	// onChange function for searching name
	const onFilterChange = (e) => {
		setSearchText(e.target.value);
	};

	// function to reset the form
	const resetForm = () => {
		setFormData({
			bill: "",
			issue: new Date(),
			due: new Date(),
			total: "",
			status: "",
		});
	};

	// function to close the form modal
	const onFormCancel = () => {
		setModal({ add: false });
		resetForm();
	};

	// submit function to add a new item
	const onFormSubmit = (submitData) => {
		const { bill, total } = submitData;
		let submittedData = {
			id: data.length + 1,
			ref: 4970 + data.length,
			bill: bill,
			issue: dateFormatterAlt(formData.issue, true),
			due: dateFormatterAlt(formData.due, true),
			total: total + ".00",
			status: formData.status,
		};
		setData([submittedData, ...data]);

		resetForm();
		setModal({ add: false });
	};

	// function to load detail data
	const loadDetail = (id) => {
		let index = data.findIndex((item) => item.id === id);
		setDetail(data[index]);
	};

	// function to toggle the search option
	const toggle = () => setonSearch(!onSearch);

	// Get current list, pagination
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

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
							{/* <BlockDes className="text-soft">
								<p>You have total 937 orders.</p>
							</BlockDes> */}
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
									<div className={`card-search search-wrap ${!onSearch ? "active" : ""}`}>
										<div className="search-content">
											<Button
												className="search-back btn-icon toggle-search"
												onClick={() => {
													setSearchText("");
													toggle();
												}}
											>
												<Icon name="arrow-left"></Icon>
											</Button>
											<input
												type="text"
												className="form-control border-transparent form-focus-none"
												placeholder="Search by bill name"
												value={onSearchText}
												onChange={(e) => onFilterChange(e)}
											/>
											<Button className="search-submit btn-icon">
												<Icon name="search"></Icon>
											</Button>
										</div>
									</div>
								</div>
							</div>
							<div className="card-inner p-0">
								<table className="table table-tranx">
									<thead>
										<tr className="tb-tnx-head">
											<th className="tb-tnx-id">
												<span className="">#</span>
											</th>
											<th className="tb-tnx-info">
												<span className="tb-tnx-desc d-none d-sm-inline-block">
													<span>Bill For</span>
												</span>
												<span className="tb-tnx-date d-md-inline-block d-none">
													<span className="d-md-none">Date</span>
													<span className="d-none d-md-block">
														<span>Issue Date</span>
														{/* <span>Due Date</span> */}
													</span>
												</span>
											</th>
											<th className="tb-tnx-amount is-alt">
												{/* <span className="tb-tnx-total">Total</span> */}
												<span className="tb-tnx-status d-none d-md-inline-block">Status</span>
											</th>
											<th className="tb-tnx-action">
												<span>&nbsp;</span>
											</th>
										</tr>
									</thead>
									<tbody>
										{currentItems.length > 0
											? currentItems.map((item) => {
													return (
														<tr key={item.id} className="tb-tnx-item">
															<td className="tb-tnx-id">
																<a
																	href="#ref"
																	onClick={(ev) => {
																		ev.preventDefault();
																	}}
																>
																	<span>{item.ref}</span>
																</a>
															</td>
															<td className="tb-tnx-info">
																<div className="tb-tnx-desc">
																	<span className="title">{item.bill}</span>
																</div>
																<div className="tb-tnx-date">
																	<span className="date">{item.issue}</span>
																	{/* <span className="date">{item.due}</span> */}
																</div>
															</td>
															<td className="tb-tnx-amount is-alt">
																{/* <div className="tb-tnx-total">
																	<span className="amount">${item.total}</span>
																</div> */}
																<div className="tb-tnx-status">
																	<span
																		className={`badge badge-dot badge-${
																			item.status === "Paid"
																				? "success"
																				: item.status === "Due"
																				? "warning"
																				: "danger"
																		}`}
																	>
																		{item.status}
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
																					loadDetail(item.id);
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
											<label className="form-label">Bill</label>
											<input
												className="form-control"
												ref={register({ required: "This field is required" })}
												type="text"
												name="bill"
												defaultValue={formData.bill}
												placeholder="Enter bill"
											/>
											{errors.bill && <span className="invalid">{errors.bill.message}</span>}
										</FormGroup>
									</Col>

									<Col md="12">
										<FormGroup>
											<label className="form-label">Status</label>
											<div className="form-control-wrap">
												<RSelect
													options={statusOptions}
													defaultValue={{ value: "Paid", label: "Paid" }}
													onChange={(e) => setFormData({ ...formData, status: e.value })}
												/>
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

				<Modal isOpen={viewModal} toggle={() => setViewModal(false)} className="modal-dialog-centered" size="lg">
					<ModalBody>
						<a
							href="#cancel"
							onClick={(ev) => {
								ev.preventDefault();
								setViewModal(false);
							}}
							className="close"
						>
							<Icon name="cross-sm"></Icon>
						</a>
						<div className="nk-modal-head">
							<h4 className="nk-modal-title title">
								Transaction <small className="text-primary">#{detail.ref}</small>
							</h4>
						</div>
						<div className="nk-tnx-details mt-sm-3">
							<Row className="gy-3">
								<Col lg={6}>
									<span className="sub-text">Order ID</span>
									<span className="caption-text">{detail.ref}</span>
								</Col>
								<Col lg={6}>
									<span className="sub-text">Bill </span>
									<span className="caption-text text-break">{detail.bill}</span>
								</Col>
								<Col lg={6}>
									<span className="sub-text">Transaction Fee</span>
									<span className="caption-text">$ {detail.total}</span>
								</Col>
								<Col lg={6}>
									<span className="sub-text">Status</span>
									<Badge color={detail.status === "Paid" ? "success" : detail.status === "Due" ? "warning" : "danger"} size="md">
										{detail.status}
									</Badge>
								</Col>
								<Col lg={6}>
									<span className="sub-text">Issue Date</span>
									<span className="caption-text"> {detail.issue}</span>
								</Col>
								<Col lg={6}>
									<span className="sub-text">Due Date</span>
									<span className="caption-text"> {detail.due}</span>
								</Col>
							</Row>
						</div>
					</ModalBody>
				</Modal>
			</Content>
		</React.Fragment>
	);
};

export default AddDomain;
