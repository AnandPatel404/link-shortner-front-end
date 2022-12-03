import React, { useState, useEffect, useCallback } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, FormGroup, ModalBody, Modal, DropdownItem, Form } from "reactstrap";
import {
	Block,
	BlockHead,
	BlockBetween,
	BlockHeadContent,
	BlockTitle,
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
import useqrCode from "../../../zustand/qrCode/qrCode";

export const QrList = () => {
	const [itemPerPage] = useState(7);
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([]);
	const { getAllQr, deleteQr } = useqrCode((state) => ({
		getAllQr: state.getAllQr,
		deleteQr: state.deleteQr,
	}));

	const getData = useCallback(async () => {
		const data = await getAllQr();
		console.log(data.data.data);
		setData(data.data.data);
	}, [getAllQr]);

	useEffect(() => {
		getData();
	}, [getData]);

	const [modal, setModal] = useState({
		edit: false,
		add: false,
	});

	const deleteProduct = async (id) => {
		await deleteQr(id);
		getData();
	};
	const currentItems = data;

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<React.Fragment>
			<Head title="Qr List"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle page>QR list</BlockTitle>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				<Block>
					<DataTable className="card-stretch">
						<DataTableBody>
							<DataTableHead>
								<DataTableRow sm>
									<span>Title</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">Shorted Link</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">Time & Date</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">Download</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block"></span>
								</DataTableRow>
							</DataTableHead>
							{currentItems.length > 0
								? currentItems.map((item) => {
										return (
											<DataTableItem key={item.id}>
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
														href={`${item.coustomDomain ? item.coustomDomain?.domain : "shortedurl.link"}/${
															item.linkId?.shorterLink
														}`}
														target="_blank"
														rel="noreferrer"
													>
														{`${item.coustomDomain ? item.coustomDomain?.domain : "shortedurl.link"}/${
															item.linkId?.shorterLink
														}`}
													</a>
												</DataTableRow>
												<DataTableRow>
													<span className="tb-sub d-none d-md-inline-block">
														{new Date(item.linkId?.createdAt).toLocaleString()}
													</span>
												</DataTableRow>
												<DataTableRow>
													<span className="tb-sub d-none d-md-inline-block">
														<a
															download={`download-${Date.now()}-${item.id}.png`}
															href={item.QRdata}
															target="_blank"
															rel="noreferrer"
															className="btn btn-primary"
														>
															Download Qr
														</a>
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
																			<DropdownItem
																				href="#remove"
																				onClick={(ev) => {
																					ev.preventDefault();
																					deleteProduct(item.id);
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

export default QrList;
