import React, { useEffect, useState, useCallback, lazy } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import BrowserUser from "../../../components/partials/analytics/browser-users/BrowserUser";
import SessionDevice from "../../../components/partials/analytics/session-devices/SessionDevice";
import { Badge, Card, Spinner } from "reactstrap";
import {
	Button,
	Block,
	BlockBetween,
	BlockDes,
	BlockHead,
	BlockHeadContent,
	BlockTitle,
	Icon,
	Row,
	Col,
	PreviewAltCard,
} from "../../../components/Component";
import { Link } from "react-router-dom";
import usersDashBoard from "../../../zustand/DashBoard/userDashBoard";
const AudienceOverview = lazy(() => import("../../../components/partials/analytics/audience-overview/AudienceOverview"));

const KycDetailsRegular = ({ match }) => {
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const [link, setLink] = useState({});
	const [qr, setQr] = useState({});
	const { getLinkById } = usersDashBoard((state) => ({
		getLinkById: state.getLinkById,
	}));

	const getData = useCallback(async () => {
		const id = match.params.id;
		const data = await getLinkById(id, setLoading);
		console.log(data.data.data);
		setLink(data.data.data.link);
		setQr(data.data.data.isQrExist);
		setCount(data.data.data.count);
	}, [getLinkById, match.params.id]);

	useEffect(() => {
		getData();
	}, [getData]);
	return (
		<React.Fragment>
			<Head title="KYC Details - Regular"></Head>
			{loading ? (
				<div className="d-flex justify-content-center mt-5 pt-5">
					<Spinner />
				</div>
			) : (
				<div>
					{link && (
						<Content>
							<BlockHead size="sm">
								<BlockBetween className="g-3">
									<BlockHeadContent>
										<BlockTitle page>
											<strong className="text-primary small">{link.link_title}</strong>
										</BlockTitle>
										<BlockDes className="text-soft">
											<ul className="list-inline">
												<li>
													Link ID: <span className="text-base">{link.id}</span>
												</li>
												<li>
													Created At: <span className="text-base">{new Date(link.createdAt).toLocaleString()}</span>
												</li>
											</ul>
										</BlockDes>
									</BlockHeadContent>
									<BlockHeadContent>
										<Link to={`${process.env.PUBLIC_URL}/all-shorten-links`}>
											<Button color="light" outline className="bg-white d-none d-sm-inline-flex">
												<Icon name="arrow-left"></Icon>
												<span>Back</span>
											</Button>
											<Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
												<Icon name="arrow-left"></Icon>
											</Button>
										</Link>
									</BlockHeadContent>
								</BlockBetween>
							</BlockHead>

							<Block>
								<Row className="gy-5">
									<Col lg="5">
										<BlockHead>
											<BlockHeadContent>
												<BlockTitle tag="h5">link Info</BlockTitle>
											</BlockHeadContent>
										</BlockHead>
										<Card className="card-bordered">
											<ul className="data-list is-compact">
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">protocol</div>
														<div className="data-value">{link.protocol}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">domain</div>
														<div className="data-value">{link.domain}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">back link</div>
														<div className="data-value overflow-auto">{link.backlink}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Qr</div>
														<div className="data-value">{qr !== null ? "true" : "false"}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Status</div>
														<div className="data-value">
															<Badge
																size="sm"
																color={link.link_status === "Enable" ? "outline-success" : "outline-danger"}
																className="badge-dim"
															>
																{link.link_status}
															</Badge>
														</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Total clicks</div>
														<div className="data-value">{count}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Starting Date</div>
														<div className="data-value">
															{link.staring_date ? new Date(link.staring_date).toLocaleString() : "-"}
														</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Expire Date</div>
														<div className="data-value">
															{link.expire_date ? new Date(link.expire_date).toLocaleString() : "-"}
														</div>
													</div>
												</li>
											</ul>
										</Card>
									</Col>

									<Col lg="7">
										<BlockHead>
											<BlockHeadContent>
												<BlockTitle tag="h5">Shorted link info</BlockTitle>
											</BlockHeadContent>
										</BlockHead>
										<Card className="card-bordered">
											<ul className="data-list is-compact">
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">shorted back link</div>
														<div className="data-value">{link.shorterLink}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Password protected</div>
														<div className="data-value">{link.isPassword_protected?.toString()}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Password</div>
														<div className="data-value">
															{`${link.link_password?.slice(0, 40) ? link.link_password?.slice(0, 40) : "-"}`}
														</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Custom Domain</div>
														<div className="data-value">{link.coustomDomain?.domain ? "true" : "false"}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Custom Domain name</div>
														<div className="data-value">
															{link.coustomDomain?.domain ? link.coustomDomain?.domain : "shorterMe.link"}
															<Badge
																size="sm"
																color={link.coustomDomain?.status === "Enable" ? "outline-success" : "outline-danger"}
																className="badge-dim"
															>
																{link.coustomDomain?.status}
															</Badge>
														</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Click limit</div>
														<div className="data-value text-break">{link.click_limit ? link.click_limit : "-"}</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Link redirection</div>
														<div className="data-value text-break">
															{link.link_redirection ? link.link_redirection : "-"}
														</div>
													</div>
												</li>
												<li className="data-item">
													<div className="data-col">
														<div className="data-label">Updated At</div>
														<div className="data-value text-break">{new Date(link.updatedAt).toLocaleString()}</div>
													</div>
												</li>
											</ul>
										</Card>
									</Col>
									<Col lg="5">
										<PreviewAltCard className="h-100" bodyclassName="h-100 stretch flex-column">
											<SessionDevice />
										</PreviewAltCard>
									</Col>
									<Col lg="7">
										<PreviewAltCard className="h-100 d-flex justify-content-center align-items-center">
											{qr !== null && qr.length !== 0 ? (
												<img src={qr.QRdata} alt="qr" width={350} />
											) : (
												<span className="d-flex justify-content-center align-items-center flex-column">
													<Icon name="qr" className="h2" />
													no qr find
												</span>
											)}
										</PreviewAltCard>
									</Col>
									<Col lg="12">
										<PreviewAltCard className="h-100">
											<AudienceOverview totalClick={count} id={match.params.id} />
										</PreviewAltCard>
									</Col>
									<Col xxl="12">
										<Card className="card-bordered h-100">
											<BrowserUser />
										</Card>
									</Col>
									<Col xxl="12" className="d-flex justify-content-center">
										<Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/client-details/${link.id}/${1}`}>
											See client Details
										</Link>
									</Col>
								</Row>
							</Block>
						</Content>
					)}
				</div>
			)}
		</React.Fragment>
	);
};
export default KycDetailsRegular;
