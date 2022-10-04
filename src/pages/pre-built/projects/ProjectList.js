import React, { useState, useEffect } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, FormGroup, ModalBody, Modal, DropdownItem, Form } from "reactstrap";
import {
	Block,
	BlockHead,
	BlockBetween,
	BlockHeadContent,
	BlockTitle,
	BlockDes,
	Icon,
	Button,
	Col,
	PaginationComponent,
	DataTable,
	DataTableBody,
	DataTableHead,
	DataTableRow,
	DataTableItem,
} from "../../../components/Component";
import { Link } from "react-router-dom";
import useqrCode from "../../../zustand/qrCode/qrCode";

export const ProjectListPage = () => {
	const [itemPerPage] = useState(7);
	const [currentPage, setCurrentPage] = useState(1);
	const { getAllQr, data } = useqrCode((state) => ({
		data: state.allQr,
		getAllQr: state.getAllQr,
	}));

	useEffect(() => {
		getAllQr();
	}, [getAllQr]);

	const [sm, updateSm] = useState(false);
	const [modal, setModal] = useState({
		edit: false,
		add: false,
	});

	// function to change the check property of an item
	const selectorCheck = (e) => {
		let newData;
		newData = data.map((item) => {
			item.checked = e.currentTarget.checked;
			return item;
		});
		// setData([...newData]);
	};

	// function to delete the seletected item
	const selectorDeleteProject = () => {
		let newData;
		newData = data.filter((item) => item.checked !== true);
		// setData([...newData]);
	};

	// function to change the check property of selected item
	const onSelectChange = (e, id) => {
		let newData = data;
		let index = newData.findIndex((item) => item.id === id);
		newData[index].checked = e.currentTarget.checked;
		// setData([...newData]);
	};

	const currentItems = data;
	console.log(currentItems);

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<React.Fragment>
			<Head title="Project List"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle page>QR list</BlockTitle>
							{/* <BlockDes className="text-soft">You have total {data.length} projects</BlockDes> */}
						</BlockHeadContent>
						<BlockHeadContent>
							<div className="toggle-wrap nk-block-tools-toggle">
								<Button className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
									<Icon name="menu-alt-r"></Icon>
								</Button>
								<div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
									<ul className="nk-block-tools g-3">
										<li>
											<UncontrolledDropdown>
												<DropdownToggle tag="a" className="dropdown-toggle btn btn-white btn-dim btn-outline-light">
													<Icon name="filter-alt" className="d-none d-sm-inline"></Icon>
													<span>Filtered By</span>
													<Icon name="chevron-right" className="dd-indc"></Icon>
												</DropdownToggle>
												<DropdownMenu right>
													<ul className="link-list-opt no-bdr">
														<li>
															<DropdownItem
																tag="a"
																href="#dropdownitem"
																onClick={(ev) => {
																	ev.preventDefault();
																}}
															>
																<span>Open</span>
															</DropdownItem>
														</li>
														<li>
															<DropdownItem
																tag="a"
																href="#dropdownitem"
																onClick={(ev) => {
																	ev.preventDefault();
																}}
															>
																<span>Closed</span>
															</DropdownItem>
														</li>
														<li>
															<DropdownItem
																tag="a"
																href="#dropdownitem"
																onClick={(ev) => {
																	ev.preventDefault();
																}}
															>
																<span>Onhold</span>
															</DropdownItem>
														</li>
													</ul>
												</DropdownMenu>
											</UncontrolledDropdown>
										</li>
									</ul>
								</div>
							</div>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				<Block>
					<DataTable className="card-stretch">
						<DataTableBody>
							<DataTableHead>
								<DataTableRow className="nk-tb-col-check"></DataTableRow>
								<DataTableRow sm>
									<span>title</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">shorten</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">time&date</span>
								</DataTableRow>
								<DataTableRow className="nk-tb-col-tools">
									<ul className="nk-tb-actions gx-1 my-n1">
										<li className="mr-n1">
											<UncontrolledDropdown>
												<DropdownToggle
													tag="a"
													href="#toggle"
													onClick={(ev) => ev.preventDefault()}
													className="dropdown-toggle btn btn-icon btn-trigger"
												>
													<Icon name="more-h"></Icon>
												</DropdownToggle>
												<DropdownMenu right>
													<ul className="link-list-opt no-bdr">
														{/* <li>
															<DropdownItem tag="a" href="#remove" onClick={selectorDeleteProduct}>
																<Icon name="trash"></Icon>
																<span>Remove Selected</span>
															</DropdownItem>
														</li> */}
													</ul>
												</DropdownMenu>
											</UncontrolledDropdown>
										</li>
									</ul>
								</DataTableRow>
							</DataTableHead>
							{currentItems.length > 0
								? currentItems.map((item) => {
										return (
											<DataTableItem key={item.id}>
												<DataTableRow className="nk-tb-col-check">
													<div className="custom-control custom-control-sm custom-checkbox notext">
														<input
															type="checkbox"
															className="custom-control-input form-control"
															defaultChecked={false}
															id={item.id + "uid1"}
															key={Math.random()}
															onChange={(e) => onSelectChange(e, item.id)}
														/>
														<label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
													</div>
												</DataTableRow>
												<DataTableRow sm className="d-flex align-items-center">
													<img src={item.QRdata} alt="" width={70} className="mx-2" />
													<span className="tb-product align-items-start d-flex flex-column">
														<span className="title d-lg-none">
															{item.linkId?.link_title ? item.linkId?.link_title.slice(0, 25) + "..." : "No title"}
														</span>
														<span className="title d-none  d-lg-block">
															{item.linkId?.link_title ? item.linkId?.link_title.slice(0, 60) + "..." : "No title"}
														</span>
														<span className="tb-sub d-lg-none">{`${item.linkId?.protocol}://${item.linkId?.domain}/${
															item.linkId?.backlink.slice(0, 25) + "..."
														}`}</span>
														<span className="tb-sub d-none  d-lg-block">{`${item.linkId?.protocol}://${
															item.linkId?.domain
														}/${item.linkId?.backlink.slice(0, 60) + "..."}`}</span>
													</span>
												</DataTableRow>
												<DataTableRow>
													<a
														className="tb-lead d-none d-md-inline-block"
														href={`localhost:8000/${item.linkId?.shorterLink}`}
														target="_blank"
														rel="noreferrer"
													>
														{`localhost:8000/${item.linkId?.shorterLink}`}
													</a>
												</DataTableRow>
												<DataTableRow>
													<span className="tb-sub d-none d-md-inline-block">
														{new Date(item.linkId?.createdAt).toLocaleString()}
													</span>
												</DataTableRow>
												<DataTableRow className="nk-tb-col-tools">
													<ul className="nk-tb-actions gx-1 my-n1">
														<li className="mr-n1">
															<UncontrolledDropdown>
																<DropdownToggle
																	tag="a"
																	href="#more"
																	onClick={(ev) => ev.preventDefault()}
																	className="dropdown-toggle btn btn-icon btn-trigger"
																>
																	<Icon name="more-h"></Icon>
																</DropdownToggle>
																<DropdownMenu right>
																	<ul className="link-list-opt no-bdr">
																		<li>
																			<DropdownItem>
																				<Link
																					to={`${process.env.PUBLIC_URL}/link-details/${item.linkId?.id}`}
																					className=""
																				>
																					<Icon name="edit"></Icon>
																					<span>Edit Product</span>
																				</Link>
																			</DropdownItem>
																		</li>
																		<li>
																			<DropdownItem
																				href="#remove"
																				onClick={(ev) => {
																					ev.preventDefault();
																					// deleteProduct(item.id);
																				}}
																				className="ml-2"
																			>
																				<Icon name="trash"></Icon>
																				<span>Remove Product</span>
																			</DropdownItem>
																		</li>
																	</ul>
																</DropdownMenu>
															</UncontrolledDropdown>
														</li>
													</ul>
												</DataTableRow>
											</DataTableItem>
										);
								  })
								: null}
						</DataTableBody>
						<div className="card-inner">
							{data.length > 0 ? (
								<PaginationComponent
									itemPerPage={itemPerPage}
									totalItems={data.length}
									paginate={paginate}
									currentPage={currentPage}
								/>
							) : (
								<div className="text-center d-flex flex-column">
									<span className="text-silent">No Qr found</span>
									<div style={{ fontSize: 4 + "rem" }}>
										<Icon name="inbox"></Icon>
									</div>
								</div>
							)}
						</div>
					</DataTable>
				</Block>

				<Modal isOpen={modal.edit} toggle={() => setModal({ edit: false })} className="modal-dialog-centered" size="lg">
					<ModalBody>
						<a
							href="#cancel"
							onClick={(ev) => {
								ev.preventDefault();
							}}
							className="close"
						>
							<Icon name="cross-sm"></Icon>
						</a>
						<div className="p-2">
							<h5 className="title">Update Project</h5>
							<div className="mt-4">
								<Form className="row gy-4">
									<Col md="6">
										<FormGroup>
											<label className="form-label">Title</label>
											<input
												type="text"
												name="title"
												// defaultValue={formData.title}
												placeholder="Enter Title"
												// onChange={(e) => onInputChange(e)}
												className="form-control"
											/>
										</FormGroup>
									</Col>
									<Col md="6">
										<FormGroup>
											<label className="form-label">Client</label>
											<input type="text" name="subtitle" placeholder="Enter client Name" className="form-control" />
										</FormGroup>
									</Col>
									<Col size="12">
										<FormGroup>
											<label className="form-label">Description</label>
											<textarea
												name="description"
												// defaultValue={formData.description}
												placeholder="Your description"
												className="form-control no-resize"
											/>
										</FormGroup>
									</Col>
									<Col md="6">
										<FormGroup>
											<label className="form-label">Number of Tasks</label>
											<input type="number" name="tasks" className="form-control" />
										</FormGroup>
									</Col>
									<Col md="6">
										<FormGroup>
											<label className="form-label">Total Tasks</label>
											<input type="number" name="totalTask" className="form-control" />
										</FormGroup>
									</Col>

									<Col size="12">
										<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
											<li>
												<Button color="primary" size="md" type="submit">
													Update Project
												</Button>
											</li>
											<li>
												<Button
													onClick={(ev) => {
														ev.preventDefault();
													}}
													className="link link-light"
												>
													Cancel
												</Button>
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

export default ProjectListPage;
