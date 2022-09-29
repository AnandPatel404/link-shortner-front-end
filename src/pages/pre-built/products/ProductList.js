import React, { useState, useEffect } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
// import Dropzone from "react-dropzone";
import {
	Block,
	BlockHead,
	BlockTitle,
	BlockBetween,
	BlockHeadContent,
	// BlockDes,
	Icon,
	Row,
	Col,
	Button,
	DataTableHead,
	DataTableBody,
	DataTableRow,
	DataTableItem,
	PaginationComponent,
} from "../../../components/Component";
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { useForm } from "react-hook-form";
import { Modal, ModalBody } from "reactstrap";
import userDashBoard from "../../../zustand/userDashBoard/userDashBoard";
import { Link } from "react-router-dom";

const ProductList = () => {
	const { data, getUserAllShortenLink, removeLink, deleteMany, updateLink } = userDashBoard((state) => ({
		data: state.allLinks,
		getUserAllShortenLink: state.getUserAllShortenLink,
		removeLink: state.removeLink,
		deleteMany: state.deleteMany,
		updateLink: state.updateLink,
	}));
	useEffect(() => {
		getUserAllShortenLink();
	}, [getUserAllShortenLink]);
	const [sm, updateSm] = useState(false);
	const [formData, setFormData] = useState({
		protocol: "",
		domain: "",
		backlink: "",
		shorterLink: "",
		link_title: "",
		official_domain: "shorterme.link/",
		createdAt: "",
	});
	const [editId, setEditedId] = useState();
	const [view, setView] = useState({
		edit: false,
		add: false,
		details: false,
	});
	// const [onSearchText, setSearchText] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(7);

	// Changing state value when searching name
	// useEffect(() => {
	// 	getUserAllShortenLink();
	// 	if (onSearchText !== "") {
	// 		const filteredObject = productData.filter((item) => {
	// 			return item.sku.toLowerCase().includes(onSearchText.toLowerCase());
	// 		});
	// 		setData([...filteredObject]);
	// 	} else {
	// 		setData([...productData]);
	// 	}
	// }, [onSearchText]);

	// OnChange function to get the input data

	// // function to close the form modal
	const onFormCancel = () => {
		setView({ edit: false, add: false, details: false });
		resetForm();
	};

	const resetForm = () => {
		setFormData({
			protocol: "",
			domain: "",
			backlink: "",
			shorterLink: "",
			link_title: "",
			official_domain: "shorterme.link/",
			createdAt: "",
		});
	};

	const onEditSubmit = async (data) => {
		const submit = {
			protocol: data.protocol,
			link_title: data.title,
			backlink: data.backlink,
			domain: data.domain,
		};
		await updateLink(submit, editId);
		resetForm();

		setView({ edit: false, add: false });
	};

	// function that loads the want to editted data
	const onEditClick = (id) => {
		data.forEach((item) => {
			if (item.id === id) {
				setFormData({
					protocol: item.protocol,
					domain: item.domain,
					backlink: item.backlink,
					shorterLink: item.shorterLink,
					link_title: item.link_title,
					official_domain: "shorterme.link/",
					createdAt: new Date(item.createdAt).toLocaleString(),
				});
			}
		});
		setEditedId(id);
		setView({ add: false, edit: true });
	};

	// selects all the products
	// const selectorCheck = (e) => {
	// 	let newData;
	// 	newData = data.map((item) => {
	// 		item.check = e.currentTarget.checked;
	// 		return item;
	// 	});
	// 	setData([...newData]);
	// };

	// selects one product
	let linkId = [];
	const onSelectChange = (e, id) => {
		linkId.push(id);
	};
	// function to delete the selected item
	const selectorDeleteProduct = () => {
		deleteMany(linkId);
		linkId = [];
	};

	// // function to delete a link
	const deleteProduct = async (id) => {
		const promise = new Promise((resolve) => resolve(removeLink(id)));
		promise.then(() => {
			getUserAllShortenLink();
		});
	};

	// toggle function to view product details
	const toggle = (type) => {
		setView({
			edit: type === "edit" ? true : false,
			add: type === "add" ? true : false,
			details: type === "details" ? true : false,
		});
	};

	// Get current list, pagination
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const { errors, register, handleSubmit } = useForm();

	return (
		<React.Fragment>
			<Head title="Product List"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle>All Links</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent>
							<div className="toggle-wrap nk-block-tools-toggle">
								<a
									href="#more"
									className="btn btn-icon btn-trigger toggle-expand mr-n1"
									onClick={(ev) => {
										ev.preventDefault();
										updateSm(!sm);
									}}
								>
									<Icon name="more-v"></Icon>
								</a>
								<div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
									<ul className="nk-block-tools g-3">
										<li>
											<div className="form-control-wrap">
												<div className="form-icon form-icon-right">
													<Icon name="search"></Icon>
												</div>
												<input
													type="text"
													className="form-control"
													id="default-04"
													placeholder="Quick search by your link"
													// onChange={(e) => onFilterChange(e)}
												/>
											</div>
										</li>
										<li className="nk-block-tools-opt">
											<Link
												className="toggle btn btn-primary d-md-none"
												to={process.env.PUBLIC_URL + "/kyc-details-regular/UD01544"}
											>
												<Icon name="link"></Icon>
											</Link>
											<Link
												className="toggle btn btn-primary d-none d-md-inline-flex"
												to={process.env.PUBLIC_URL + "/kyc-details-regular/UD01544"}
											>
												<Icon name="link"></Icon>
												<span>Short link</span>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				<Block>
					<Card className="card-bordered">
						<div className="card-inner-group">
							<div className="card-inner p-0">
								<DataTableBody>
									<DataTableHead>
										<DataTableRow className="nk-tb-col-check">
											<div className="custom-control custom-control-sm custom-checkbox notext">
												<input
													type="checkbox"
													className="custom-control-input form-control"
													id="uid_1"
													// onChange={(e) => selectorCheck(e)}
												/>
												<label className="custom-control-label" htmlFor="uid_1"></label>
											</div>
										</DataTableRow>
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
																<li>
																	<DropdownItem
																		tag="a"
																		href="#remove"
																		onClick={(ev) => {
																			ev.preventDefault();
																			selectorDeleteProduct();
																		}}
																	>
																		<Icon name="trash"></Icon>
																		<span>Remove Selected</span>
																	</DropdownItem>
																</li>
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
																	defaultChecked={item.check}
																	id={item.id + "uid1"}
																	key={Math.random()}
																	onChange={(e) => onSelectChange(e, item.id)}
																/>
																<label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
															</div>
														</DataTableRow>
														<DataTableRow sm>
															<Link to={`${process.env.PUBLIC_URL}/kyc-details-regular/${item.id}`}>
																<span className="tb-product align-items-start d-flex flex-column">
																	<span className="title d-lg-none">
																		{item.link_title ? item.link_title.slice(0, 25) + "..." : "No title"}
																	</span>
																	<span className="title d-none  d-lg-block">
																		{item.link_title ? item.link_title.slice(0, 60) + "..." : "No title"}
																	</span>
																	<span className="tb-sub d-lg-none">{`${item.protocol}://${item.domain}/${
																		item.backlink.slice(0, 25) + "..."
																	}`}</span>
																	<span className="tb-sub d-none  d-lg-block">{`${item.protocol}://${item.domain}/${
																		item.backlink.slice(0, 60) + "..."
																	}`}</span>
																</span>
															</Link>
														</DataTableRow>
														<DataTableRow>
															<a
																className="tb-lead d-none d-md-inline-block"
																href={`localhost:8000/${item.shorterLink}`}
																target="_blank"
																rel="noreferrer"
															>
																{`localhost:8000/${item.shorterLink}`}
															</a>
														</DataTableRow>
														<DataTableRow>
															<span className="tb-sub d-none d-md-inline-block">
																{new Date(item.createdAt).toLocaleString()}
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
																						tag="a"
																						href="#edit"
																						onClick={(ev) => {
																							ev.preventDefault();
																							onEditClick(item.id);
																							toggle("edit");
																						}}
																					>
																						<Icon name="edit"></Icon>
																						<span>Edit Product</span>
																					</DropdownItem>
																				</li>
																				<li>
																					<DropdownItem
																						tag="a"
																						href="#remove"
																						onClick={(ev) => {
																							ev.preventDefault();
																							deleteProduct(item.id);
																						}}
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
											<span className="text-silent">No links found</span>
											<div style={{ fontSize: 4 + "rem" }}>
												<Icon name="inbox"></Icon>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</Card>
				</Block>

				<Modal isOpen={view.edit} toggle={() => onFormCancel()} className="modal-dialog-centered" size="lg">
					<ModalBody>
						<a href="#cancel" className="close">
							{" "}
							<Icon
								name="cross-sm"
								onClick={(ev) => {
									ev.preventDefault();
									onFormCancel();
								}}
							></Icon>
						</a>
						<div className="p-2">
							<h5 className="title">Update Link</h5>
							<div className="mt-4">
								<form noValidate onSubmit={handleSubmit(onEditSubmit)}>
									<Row className="g-3">
										<Col size="12">
											<div className="form-group">
												<label className="form-label" htmlFor="title">
													Link title
												</label>
												<div className="form-control-wrap">
													<input
														type="text"
														className="form-control"
														name="title"
														ref={register({
															required: "This field is required",
														})}
														defaultValue={formData.link_title}
													/>
													{errors.title && <span className="invalid">{errors.title.message}</span>}
												</div>
											</div>
										</Col>
										<Col md="6">
											<div className="form-group">
												<label className="form-label" htmlFor="protocol">
													Protocol
												</label>
												<div className="form-control-wrap">
													<input
														type="text"
														className="form-control"
														name="protocol"
														ref={register({ required: "This is required" })}
														defaultValue={formData.protocol}
													/>
													{errors.protocol && <span className="invalid">{errors.protocol.message}</span>}
												</div>
											</div>
										</Col>
										<Col md="6">
											<div className="form-group">
												<label className="form-label" htmlFor="domain">
													domain
												</label>
												<div className="form-control-wrap">
													<input
														type="text"
														className="form-control"
														name="domain"
														ref={register({ required: "This is required" })}
														defaultValue={formData.domain}
													/>
													{errors.domain && <span className="invalid">{errors.domain.message}</span>}
												</div>
											</div>
										</Col>
										<Col md="6">
											<div className="form-group">
												<label className="form-label" htmlFor="backlink">
													Back-link
												</label>
												<div className="form-control-wrap">
													<input
														type="text"
														className="form-control"
														name="backlink"
														ref={register({ required: "This is required" })}
														defaultValue={formData.backlink}
													/>
													{errors.backlink && <span className="invalid">{errors.backlink.message}</span>}
												</div>
											</div>
										</Col>
										<Col md="6">
											<div className="form-group">
												<label className="form-label" htmlFor="official_domain">
													Official-domain
												</label>
												<div className="form-control-wrap">
													<input
														type="text"
														className="form-control"
														name="official_domain"
														ref={register({ required: "This is required" })}
														defaultValue={formData.official_domain}
														disabled
													/>
													{errors.official_domain && <span className="invalid">{errors.official_domain.message}</span>}
												</div>
											</div>
										</Col>
										<Col md="6">
											<div className="form-group">
												<label className="form-label" htmlFor="shorterLink">
													Shorted-link
												</label>
												<div className="form-control-wrap">
													<input
														type="text"
														className="form-control"
														name="shorterLink"
														ref={register({ required: "This is required" })}
														defaultValue={formData.shorterLink}
														disabled
													/>
													{errors.shorterLink && <span className="invalid">{errors.shorterLink.message}</span>}
												</div>
											</div>
										</Col>
										<Col size="12">
											<Button color="primary" type="submit">
												<Icon className="plus"></Icon>
												<span>Update Product</span>
											</Button>
										</Col>
									</Row>
								</form>
							</div>
						</div>
					</ModalBody>
				</Modal>

				{view.add && <div className="toggle-overlay" onClick={toggle}></div>}
			</Content>
		</React.Fragment>
	);
};

export default ProductList;
