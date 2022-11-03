import React, { useState, useEffect, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Card, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalBody, Form, Col, FormGroup, Spinner } from "reactstrap";
import { Button, Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../../components/Component";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import userApiCred from "../../../zustand/apiCred/apiCred";
import Loader from "../../Loader/Loader";
import Swal from "sweetalert2";

const ApiCred = () => {
	const [data, setData] = useState([]);
	const [modelData, setModelData] = useState({
		id: "",
		keyId: "",
		secret: "",
		ip: "",
	});
	const [loadingTwo, setLoadingTwo] = useState(false);

	const [modal, setModal] = useState({
		add: false,
	});

	const [loading, setLoading] = useState(true);

	const { getApiCred, generateApiCred, updateApiCred, deleteApiCreds } = userApiCred((state) => ({
		getApiCred: state.getApiCred,
		generateApiCred: state.generateApiCred,
		updateApiCred: state.updateApiCred,
		deleteApiCreds: state.deleteApiCreds,
	}));
	// Changing state value when searching name
	const onFormCancel = () => {
		setModal({ add: false });
		setModelData({
			id: "",
			keyId: "",
			secret: "",
			ip: "",
		});
		getData();
	};
	const getData = useCallback(async () => {
		const newData = await getApiCred(setLoading);
		setData(newData);
	}, [getApiCred]);
	useEffect(() => {
		getData();
	}, [getData]);

	const onFormSubmit = async (sData) => {
		const data = {
			...sData,
			credId: modelData.id,
		};
		await updateApiCred(data, setModelData);
		setModal({ add: false });
		getData();
	};

	const generateCred = async () => {
		const data = await generateApiCred(setLoadingTwo);
		setModelData(data);
		setModal({ add: true });
	};

	const onGen = () => {
		setLoadingTwo();
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes",
		}).then((result) => {
			if (result.isConfirmed) {
				generateCred();
			}
		});
	};

	const deleteApiCred = async (id) => {
		await deleteApiCreds(id);
		getData();
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
											<Button color="primary" type="button" onClick={onGen}>
												{loadingTwo ? <Spinner /> : "Generate"}
											</Button>
										</BlockHeadContent>
									</div>
								</div>
								<div className="card-inner p-0">
									<table className="table table-orders">
										<thead className="tb-odr-head">
											<tr className="tb-odr-item">
												<th className="tb-odr-info">
													<span className="tb-odr-id d-none d-md-inline-block	">No</span>
													<span className="tb-odr-date">Key ID</span>
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
																									deleteApiCred(item.id);
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
					<Modal isOpen={modal.add} toggle={() => setModal({ add: false })} className="modal-dialog-centered" size="sm">
						<ModalBody>
							<div className="p-2">
								<h5 className="title">Api cred</h5>
								<div className="mt-4">
									<Form className="row gy-4 mt-4" onSubmit={handleSubmit(onFormSubmit)}>
										<Col md="12">
											<FormGroup>
												<label className="form-label">Key</label>
												<input
													className="form-control"
													ref={register({ required: "This field is required" })}
													type="text"
													name="keyId"
													defaultValue={modelData.keyId}
												/>
												{errors.keyId && <span className="invalid">{errors.keyId.message}</span>}
											</FormGroup>
										</Col>
										<Col md="12">
											<FormGroup>
												<label className="form-label">Secrete</label>
												<input
													className="form-control"
													ref={register({ required: "This field is required" })}
													type="text"
													name="secret"
													defaultValue={modelData.secret}
												/>
												<p className="form-label my-2">
													Note : Are you sure you have saved the key details? This is the last time we will show you the key
													secret.
												</p>
												{errors.secret && <span className="invalid">{errors.secret.message}</span>}
											</FormGroup>
										</Col>
										<Col md="12">
											<FormGroup>
												<label className="form-label">Ip</label>
												<input
													className="form-control"
													ref={register({ required: false })}
													type="text"
													name="ip"
													defaultValue={modelData.ip}
												/>
												<p className="form-label my-2">Leave Empty For All Ip</p>
												{errors.ip && <span className="invalid">{errors.ip.message}</span>}
											</FormGroup>
										</Col>
										<Col size="12">
											<ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
												<li>
													<Button color="primary" size="md" type="submit">
														Update
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
														Done
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
