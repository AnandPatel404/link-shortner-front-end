/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
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
import { Card, DropdownItem, UncontrolledDropdown, DropdownMenu, DropdownToggle, Badge } from "reactstrap";
import userDashBoard from "../../../zustand/DashBoard/userDashBoard";
import { Link } from "react-router-dom";
import Loader from "../../Loader/Loader";

const ProductList = () => {
	const [loading, setLoading] = useState(true);
	const [sm, updateSm] = useState(false);
	const [onSearchText, setSearchText] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(10);

	const { data, getUserAllShortenLink, removeLink, AllLinksLength } = userDashBoard((state) => ({
		data: state.allLinks,
		getUserAllShortenLink: state.getUserAllShortenLink,
		removeLink: state.removeLink,
		deleteMany: state.deleteMany,
		AllLinksLength: state.AllLinksLength,
	}));

	const deleteProduct = async (id) => {
		await removeLink(id);
	};

	let params = {
		currentPage,
		shorterLink: onSearchText,
	};
	if (params.shorterLink === undefined || params.shorterLink === "") {
		delete params.shorterLink;
	}
	if (params.sortBy === undefined || params.sortBy === "") {
		delete params.sortBy;
	}
	useEffect(() => {
		getUserAllShortenLink(params, setLoading);
	}, [getUserAllShortenLink, currentPage, onSearchText]);

	const currentItems = data;

	// Change Page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<React.Fragment>
			<Head title="Link List"></Head>
			{loading ? (
				<div className="d-flex justify-content-center align-items-center" style={{ height: 100 + "vh" }}>
					<Loader />
				</div>
			) : (
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
														onChange={(e) => setSearchText(e.target.value)}
													/>
												</div>
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
											<DataTableRow sm>
												<span>url & title</span>
											</DataTableRow>
											<DataTableRow>
												<span className="d-none d-md-inline-block">short-link</span>
											</DataTableRow>
											<DataTableRow>
												<span className="d-none d-md-inline-block">createdAt</span>
											</DataTableRow>
											<DataTableRow>
												<span className="d-none d-md-inline-block">status</span>
											</DataTableRow>
											<DataTableRow>
												<span className="d-none d-md-inline-block"></span>
											</DataTableRow>
										</DataTableHead>
										{currentItems.length > 0
											? currentItems.map((item) => {
													return (
														<DataTableItem key={item.id}>
															<DataTableRow sm>
																<Link to={`${process.env.PUBLIC_URL}/link/${item.id}`}>
																	<span className="tb-product align-items-start d-flex flex-column">
																		<span className="title d-lg-none">
																			{item.link_title ? item.link_title.slice(0, 25) + "..." : "No title"}
																		</span>
																		<span className="title d-none  d-lg-block">
																			{item.link_title ? item.link_title.slice(0, 60) + "..." : "No title"}
																		</span>
																		<span className="tb-sub d-lg-none">{`${item.protocol}://${item.domain}/${
																			item.backlink?.slice(0, 25) + "..."
																		}`}</span>
																		<span className="tb-sub d-none  d-lg-block">{`${item.protocol}://${
																			item.domain
																		}/${item.backlink?.slice(0, 60) + "..."}`}</span>
																	</span>
																</Link>
															</DataTableRow>
															<DataTableRow>
																<a
																	className="tb-lead d-none d-md-inline-block"
																	href={`${item.coustomDomain ? item.coustomDomain?.domain : "shortedurl.link"}/${
																		item.shorterLink
																	}`}
																	target="_blank"
																	rel="noreferrer"
																>
																	{`${item.coustomDomain ? item.coustomDomain?.domain : "shortedurl.link"}/${
																		item.shorterLink
																	}`}
																</a>
															</DataTableRow>
															<DataTableRow>
																<span className="tb-sub d-none d-md-inline-block">
																	{new Date(item.createdAt).toLocaleString()}
																</span>
															</DataTableRow>
															<DataTableRow>
																<Badge
																	size="sm"
																	color={item.link_status === "Enable" ? "outline-success" : "outline-danger"}
																	className="badge-dim"
																>
																	{item.link_status}
																</Badge>
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
																								to={`${process.env.PUBLIC_URL}/update-link/${item.id}`}
																							>
																								<Icon name="edit"></Icon>
																								<span>Edit link</span>
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
												totalItems={AllLinksLength}
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
			)}
		</React.Fragment>
	);
};

export default ProductList;
