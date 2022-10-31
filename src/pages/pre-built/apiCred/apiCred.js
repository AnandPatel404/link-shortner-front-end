import React, { useState, useEffect, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, Form, Col, FormGroup } from "reactstrap";
import { Button, Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../../components/Component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import userApiCred from "../../../zustand/apiCred/apiCred";
import Loader from "../../Loader/Loader";

const ApiCred = () => {
	const [data, setData] = useState([]);

	const [modal, setModal] = useState({
		add: false,
	});

	const [loading, setLoading] = useState(true);
	const { getApiCred } = userApiCred((state) => ({
		getApiCred: state.getApiCred,
	}));
	// Changing state value when searching name
	const onFormCancel = () => {
		setModal({ add: false });
	};
	const getData = useCallback(async () => {
		const newData = await getApiCred(setLoading);
		setData(newData);
	}, [getApiCred]);
	useEffect(() => {
		getData();
	}, [getData]);

	const onFormSubmit = async (sData) => {
		setModal({ add: false });
	};

	const currentItems = data;
	const { errors, register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Invoice List"></Head>
			{loading ? (
				<div className="d-flex justify-content-center align-items-center" style={{ height: 100 + "vh" }}>
					<Loader />
				</div>
			) : (
				<Content>
					<BlockHead size="sm">
						<BlockBetween>
							<BlockHeadContent>
								<BlockTitle page>Api Credentials</BlockTitle>
							</BlockHeadContent>
						</BlockBetween>
					</BlockHead>

					<Block>
						<Card className="card-bordered card-stretch">
							<div className="card-inner-group">
								<div className="card-inner">
									<div className="card-title-group">
										<div className="card-title">
											<h5 className="title">All Api Credentials</h5>
										</div>
										<BlockHeadContent>
											<Button color="primary" type="button" onClick={() => setModal({ add: true })}>
												Generate
											</Button>
										</BlockHeadContent>
									</div>
								</div>
								<div className="card-inner p-0">
									<table className="table table-orders">
										<thead className="tb-odr-head">
											<tr className="tb-odr-item">
												<th className="tb-odr-info">
													<span className="tb-odr-id">No</span>
													<span className="tb-odr-date d-none d-md-inline-block">Key ID</span>
												</th>
												<th className="tb-odr-amount">
													<span className="tb-odr-total"> IP Address</span>
												</th>
												<th className="tb-odr-amount">
													<span className="tb-odr-status d-none d-md-inline-block">Add Date</span>
												</th>
												<th className="tb-odr-action">&nbsp;</th>
											</tr>
										</thead>
										<tbody className="tb-odr-body">
											{currentItems.length > 0
												? currentItems.map((item, index) => {
														return (
															<tr className="tb-odr-item" key={item.id}>
																<td className="tb-odr-info">
																	<span className="tb-odr-id">{index + 1}</span>
																	<span className="tb-odr-date">{item.keyId}</span>
																</td>
																<td className="tb-odr-amount">
																	<span className="tb-odr-total">
																		<span className="amount">{item.ip}</span>
																	</span>
																</td>
																<td className="tb-odr-amount">
																	<span className="tb-odr-total">
																		<span className="amount">{new Date(item.createdAt).toLocaleString()}</span>
																	</span>
																</td>

																<td className="tb-odr-action">
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
																</td>
															</tr>
														);
												  })
												: null}
										</tbody>
									</table>
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
			)}
		</React.Fragment>
	);
};
export default ApiCred;
