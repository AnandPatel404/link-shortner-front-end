import React, { useState } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
// import InvestOverview from "../components/partials/invest/invest-overview/InvestOverview";
// import InvestPlan from "../components/partials/invest/invest-plan/InvestPlan";
import RecentInvest from "../components/partials/invest/recent-investment/RecentInvest";
import RecentActivity from "../components/partials/default/recent-activity/Activity";
import Notifications from "../components/partials/default/notification/Notification";
import BrowserUser from "../components/partials/analytics/browser-users/BrowserUser";
import SessionDevice from "../components/partials/analytics/session-devices/SessionDevice";
import UserMap from "../components/partials/analytics/user-map/UserMap";
import { Card } from "reactstrap";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon, Button, Row, Col, PreviewAltCard } from "../components/Component";
import userStore from "../zustand/userStore/userStore";
import firstSvg from "../images/svg/dashboard-one.svg";
import dashboardPaln from "../images/svg/dashboard-paln.svg";
import dashboardlimit from "../images/svg/dashboard-limite.svg";

const InvestHomePage = () => {
	const userinfo = userStore((state) => state.user);
	const [sm, updateSm] = useState(false);
	return (
		<React.Fragment>
			<Head title="Invest Dashboard" />
			<Content>
				<BlockHead size="sm">
					<BlockBetween>
						<BlockHeadContent>
							<BlockTitle page>{userinfo.name}'s Dashboard</BlockTitle>
						</BlockHeadContent>
						<BlockHeadContent>
							<div className="toggle-wrap nk-block-tools-toggle">
								<Button className={`btn-icon btn-trigger toggle-expand mr-n1 ${sm ? "active" : ""}`} onClick={() => updateSm(!sm)}>
									<Icon name="more-v"></Icon>
								</Button>
								<div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
									<ul className="nk-block-tools g-3">
										{/* <li>
											<Button color="primary" outline className="btn-dim btn-white">
												<Icon name="download-cloud"></Icon>
												<span>Export</span>
											</Button>
										</li> */}
										<li>
											<Button color="primary" outline className="btn-dim btn-white">
												<Icon name="reports"></Icon>
												<span>Reports</span>
											</Button>
										</li>
									</ul>
								</div>
							</div>
						</BlockHeadContent>
					</BlockBetween>
				</BlockHead>

				<Block>
					<Row className="g-gs">
						<Col md="4">
							<PreviewAltCard className="card-full">
								<Row>
									<Col lg="8">
										<div className="card-title-group align-start mb-0">
											<div className="card-title">
												<h4>Total Shorten Link</h4>
											</div>
										</div>
										<div className="card-amount">
											<span className="amount mt-2">0</span>
										</div>
									</Col>
									<Col lg="4">
										<img src={firstSvg} alt="Total Shorten Link" className="d-none d-md-block" />
									</Col>
								</Row>
							</PreviewAltCard>
						</Col>

						<Col md="4">
							<PreviewAltCard className="card-full">
								<Row>
									<Col lg="8">
										<div className="card-title-group align-start mb-0">
											<div className="card-title">
												<h4>Activated Plan</h4>
											</div>
										</div>
										<div className="card-amount">
											<span className="amount mt-2">No plan active</span>
										</div>
									</Col>
									<Col lg="4">
										<img src={dashboardPaln} alt="Plan" className="d-none d-md-block" />
									</Col>
								</Row>
							</PreviewAltCard>
						</Col>

						<Col md="4">
							<PreviewAltCard className="card-full">
								<Row>
									<Col lg="8">
										<div className="card-title-group align-start mb-0">
											<div className="card-title">
												<h4>Limit</h4>
											</div>
										</div>
										<div className="card-amount">
											<span className="amount mt-2">0</span>
										</div>
									</Col>
									<Col lg="4">
										<img src={dashboardlimit} alt="limit" className="d-none d-md-block" />
									</Col>
								</Row>
							</PreviewAltCard>
						</Col>
						<Col xl="12" xxl="8">
							<Card className="card-bordered card-full">
								<RecentInvest />
							</Card>
						</Col>
						<Col xxl="6">
							<Card className="card-bordered h-100">
								<BrowserUser />
							</Card>
						</Col>
						{/* <Col md="6" xxl="4">
							<PreviewAltCard className="card-full">
								<InvestOverview />
							</PreviewAltCard>
						</Col> */}
						<Col md="6" xxl="3">
							<PreviewAltCard className="h-100" bodyClass="h-100 stretch flex-column">
								<SessionDevice />
							</PreviewAltCard>
						</Col>

						<Col md="6" xxl="3">
							<PreviewAltCard className="h-100">
								<UserMap />
							</PreviewAltCard>
						</Col>

						<Col md="6" xxl="4">
							<Card className="card-bordered card-full">
								<RecentActivity />
							</Card>
						</Col>
						<Col md="6" xxl="4">
							<Card className="card-bordered h-100">
								<Notifications />
							</Card>
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
};

export default InvestHomePage;
