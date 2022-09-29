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
	Icon,
	DataTableHead,
	DataTableBody,
	DataTableRow,
	DataTableItem,
	PaginationComponent,
} from "../../../components/Component";
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import userDashBoard from "../../../zustand/DashBoard/userDashBoard";
import { errorToast } from "../../../pages/components/misc/ReactToastify";
import { Link } from "react-router-dom";

const ProductList = () => {
	const { data, getUserAllShortenLink, removeLink, deleteMany } = userDashBoard((state) => ({
		data: state.allLinks,
		getUserAllShortenLink: state.getUserAllShortenLink,
		removeLink: state.removeLink,
		deleteMany: state.deleteMany,
		getLinkById: state.getLinkById,
		updateLink: state.updateLink,
	}));
	useEffect(() => {
		getUserAllShortenLink();
	}, [getUserAllShortenLink]);
	const [sm, updateSm] = useState(false);
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

	// selects one product
	let linkId = [];
	const onSelectChange = (e, id) => {
		linkId.push(id);
	};
	// function to delete the selected item
	const selectorDeleteProduct = () => {
		if (linkId.length === 0) {
			return errorToast(`Please select the item before click ❌❌`, "Error");
		}
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

	// Get current list, pagination
	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;
	const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
																<li>
																	<DropdownItem tag="a" href="#remove" onClick={selectorDeleteProduct}>
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
																	defaultChecked={false}
																	id={item.id + "uid1"}
																	key={Math.random()}
																	onChange={(e) => onSelectChange(e, item.id)}
																/>
																<label className="custom-control-label" htmlFor={item.id + "uid1"}></label>
															</div>
														</DataTableRow>
														<DataTableRow sm>
															{/* <Link to={`${process.env.PUBLIC_URL}/kyc-details-regular/${item.id}`}> */}
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
															{/* </Link> */}
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
																					<DropdownItem>
																						<Link
																							to={`${process.env.PUBLIC_URL}/link-details/${item.id}`}
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
			</Content>
		</React.Fragment>
	);
};

export default ProductList;
