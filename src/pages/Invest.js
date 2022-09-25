import React, { useEffect } from "react";
import shallow from "zustand/shallow";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import RecentInvest from "../components/partials/invest/recent-investment/RecentInvest";
import TrafficChannel from "../components/partials/analytics/traffic-channel/Traffic";
import BrowserUser from "../components/partials/analytics/browser-users/BrowserUser";
import SessionDevice from "../components/partials/analytics/session-devices/SessionDevice";
import UserMap from "../components/partials/analytics/user-map/UserMap";
import { useForm } from "react-hook-form";
import { Card, Form } from "reactstrap";
import { Block, Icon, Button, Row, Col, PreviewAltCard } from "../components/Component";
import firstSvg from "../images/svg/dashboard-one.svg";
import dashboardPaln from "../images/svg/dashboard-paln.svg";
import dashboardlimit from "../images/svg/dashboard-limite.svg";
import rocketSvg from "../images/svg/dashboard.svg";
import useUserDashBoard from "../zustand/userDashBoard/userDashBoard";
import { Link } from "react-router-dom";

const InvestHomePage = () => {
	const { links, quickShort, subscription, userDashBoard } = useUserDashBoard(
		(state) => ({
			links: state.links,
			quickShort: state.quickShort,
			subscription: state.subscription,
			userDashBoard: state.userDashBoard,
		}),
		shallow
	);

	useEffect(() => {
		userDashBoard();
	}, [userDashBoard]);

	const onFormSubmit = (formData) => {
		quickShort(formData);
	};
	const { register, handleSubmit } = useForm();
	return (
		<React.Fragment>
			<Head title="Dashboard" />
			<Content>
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
											<span className="amount mt-2">{links.length}</span>
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
											<span className="amount mt-2">{`${subscription.planId?.plan_name} plan`}</span>
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
											<span className="amount mt-2">{subscription.link_creating_limit}</span>
										</div>
									</Col>
									<Col lg="4">
										<img src={dashboardlimit} alt="limit" className="d-none d-md-block" />
									</Col>
								</Row>
							</PreviewAltCard>
						</Col>
						<Col md="6" lg="8" xxl="6">
							<Card className="card-bordered h-100">
								<TrafficChannel />
							</Card>
						</Col>
						<Col md="6" lg="4" xxl="3">
							<img src={rocketSvg} alt="rocket" />
							<div className="d-flex justify-content-center mb-4">
								<Link className="btn btn-primary alin" style={{ width: 200 + "px" }} to={process.env.PUBLIC_URL + "/product-list"}>
									<Icon name="hot"></Icon>
									<span>Get api credentials</span>
								</Link>
							</div>
						</Col>
						<Col xl="12" xxl="8">
							<Form className="is-alter" onSubmit={handleSubmit(onFormSubmit)}>
								<Card className="card-bordered card-full p-3">
									<label htmlFor="basic-url" className="form-label p-1">
										Quick Short
									</label>
									<div className="input-group mb-3">
										<div className="form-wrap">
											<div className="input-group input-group-md">
												<div className="input-group-prepend">
													<span className="input-group-text" id="inputGroup-sizing-lg">
														shorterMe.link
													</span>
												</div>
											</div>
										</div>
										<input
											type="text"
											className="form-control"
											name="link"
											ref={register({ required: "This field is required" })}
											placeholder="Enter your link"
										/>
									</div>
									<div>
										<Button color="primary" type="submit">
											<Icon name="link-alt"></Icon>
											<span>cut</span>
										</Button>
									</div>
								</Card>
							</Form>
						</Col>
						<Col xl="12" xxl="8">
							<Card className="card-bordered card-full">
								<RecentInvest links={links} />
							</Card>
						</Col>
						<Col xxl="6">
							<Card className="card-bordered h-100">
								<BrowserUser />
							</Card>
						</Col>
						<Col md="6" xxl="3">
							<PreviewAltCard className="h-100" bodyclassName="h-100 stretch flex-column">
								<SessionDevice />
							</PreviewAltCard>
						</Col>

						<Col md="6" xxl="3">
							<PreviewAltCard className="h-100">
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
