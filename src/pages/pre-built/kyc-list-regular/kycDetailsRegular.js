import React, { useEffect, useState, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import BrowserUser from "../../../components/partials/analytics/browser-users/BrowserUser";
import AudienceOverview from "../../../components/partials/analytics/audience-overview/AudienceOverview";
import { Badge, Card } from "reactstrap";
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

const KycDetailsRegular = ({ match }) => {
	const [link, setLink] = useState({});
	const { getLinkById } = usersDashBoard((state) => ({
		getLinkById: state.getLinkById,
	}));

	const getData = useCallback(async () => {
		const id = match.params.id;
		const data = await getLinkById(id);
		setLink(data.data.data);
	}, [getLinkById, match.params.id]);

	useEffect(() => {
		getData();
	}, [getData]);
	return (
		<React.Fragment>
			<Head title="KYC Details - Regular"></Head>
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
												<div className="data-value">{link.backlink}</div>
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
												<div className="data-value">200</div>
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
												<div className="data-value">{link.password}</div>
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
												<div className="data-label">Updated At</div>
												<div className="data-value text-break">{new Date(link.updatedAt).toLocaleString()}</div>
											</div>
										</li>
									</ul>
								</Card>
							</Col>
							<Col lg="12">
								<PreviewAltCard className="h-100">
									<AudienceOverview />
								</PreviewAltCard>
							</Col>
							<Col xxl="12">
								<Card className="card-bordered h-100">
									<BrowserUser />
								</Card>
							</Col>
							<Col xxl="12" className="d-flex justify-content-center">
								<Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/client-details/${link.id}`}>
									See client Details
								</Link>
							</Col>
						</Row>
					</Block>
				</Content>
			)}
		</React.Fragment>
	);
};
export default KycDetailsRegular;
