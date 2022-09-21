import React from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import RecentInvest from "../components/partials/invest/recent-investment/RecentInvest";
import TrafficChannel from "../components/partials/analytics/traffic-channel/Traffic";
import BrowserUser from "../components/partials/analytics/browser-users/BrowserUser";
import SessionDevice from "../components/partials/analytics/session-devices/SessionDevice";
import UserMap from "../components/partials/analytics/user-map/UserMap";
import { Card } from "reactstrap";
import {
	Block,
	BlockBetween,
	BlockHead,
	BlockHeadContent,
	BlockTitle,
	Icon,
	Button,
	Row,
	Col,
	PreviewAltCard,
	RSelect,
} from "../components/Component";
import userStore from "../zustand/userStore/userStore";
import firstSvg from "../images/svg/dashboard-one.svg";
import dashboardPaln from "../images/svg/dashboard-paln.svg";
import dashboardlimit from "../images/svg/dashboard-limite.svg";
import rocketSvg from "../images/svg/dashboard.svg";
import "./invest.css";

const InvestHomePage = () => {
	const option = [
		{ value: "https://one.com", label: "https://one.com" },
		{ value: "https://two.com", label: "https://two.com" },
	];

	return (
		<React.Fragment>
			<Head title="Invest Dashboard" />
			<Content>
				<Block>
					<Row className="g-gs">
						<Col md="4">
							<PreviewAltCard className="card-full borderReduis">
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
							<PreviewAltCard className="card-full borderReduis">
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
							<PreviewAltCard className="card-full borderReduis">
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
							<Card className=" card-full borderReduis">
								<RecentInvest />
							</Card>
						</Col>
						<Col md="6" lg="8" xxl="6">
							<Card className="h-100 borderReduis">
								<TrafficChannel />
							</Card>
						</Col>
						<Col md="6" lg="4" xxl="3">
							<Card className="card-full borderReduis">
								<img src={rocketSvg} alt="rocket" />
							</Card>
						</Col>
						<Col xl="12" xxl="8">
							<Card className="card-full p-3 borderReduis">
								<label htmlFor="basic-url" className="form-label p-1">
									Quick Short
								</label>
								<div className="input-group mb-3">
									<div className="form-wrap">
										<RSelect options={option} className="w-130px" placeholder="Your domain" />
									</div>
									<input type="text" className="form-control" aria-label="Text input with dropdown button" />
								</div>
								<div>
									<Button color="primary" className="">
										<Icon name="link-alt"></Icon>
										<span>cut</span>
									</Button>
								</div>
							</Card>
						</Col>
						<Col xxl="6">
							<Card className=" h-100 borderReduis">
								<BrowserUser />
							</Card>
						</Col>
						<Col md="6" xxl="3">
							<PreviewAltCard className="h-100 borderReduis" bodyclassName="h-100 stretch flex-column">
								<SessionDevice />
							</PreviewAltCard>
						</Col>

						<Col md="6" xxl="3">
							<PreviewAltCard className="h-100 borderReduis">
								<UserMap />
							</PreviewAltCard>
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
};

export default InvestHomePage;
