import React, { useState, useEffect } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from "reactstrap";
import {
	Block,
	BlockHead,
	BlockBetween,
	BlockHeadContent,
	BlockTitle,
	Icon,
	PaginationComponent,
	DataTable,
	DataTableBody,
	DataTableHead,
	DataTableRow,
	DataTableItem,
} from "../../../components/Component";
import { Link } from "react-router-dom";
import useqrCode from "../../../zustand/qrCode/qrCode";

export const ClientDetails = () => {
	const [itemPerPage] = useState(7);
	const [currentPage, setCurrentPage] = useState(1);
	const { getAllQr, data } = useqrCode((state) => ({
		data: state.allQr,
		getAllQr: state.getAllQr,
	}));

	useEffect(() => {
		getAllQr();
	}, [getAllQr]);

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
							<BlockTitle page>Client list</BlockTitle>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>
				<Block>
					<DataTable className="card-stretch">
						<DataTableBody>
							<DataTableHead>
								<DataTableRow className="nk-tb-col-check"></DataTableRow>
								<DataTableRow sm>
									<span>browser name</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">browser version</span>
								</DataTableRow>
								<DataTableRow>
									<span className="d-none d-md-inline-block">os</span>
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
			</Content>
		</React.Fragment>
	);
};

export default ClientDetails;
