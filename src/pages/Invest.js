import React, { useEffect } from "react";
import shallow from "zustand/shallow";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import RecentInvest from "../components/partials/invest/recent-investment/RecentInvest";
import TrafficChannel from "../components/partials/analytics/traffic-channel/Traffic";
import { useForm } from "react-hook-form";
import { Card, Form } from "reactstrap";
import { Block, Icon, Button, Row, Col, PreviewAltCard } from "../components/Component";
import firstSvg from "../images/svg/dashboard-one.svg";
import b from "../images/svg/dashboard-paln.svg";
import a from "../images/svg/dashboard-limite.svg";
import rocketSvg from "../images/svg/dashboard.svg";
import useUserDashBoard from "../zustand/DashBoard/userDashBoard";
import { Link } from "react-router-dom";

const InvestHomePage = () => {
	const { linksLength, links, quickShort, subscription, userDashBoard } = useUserDashBoard(
		(state) => ({
			linksLength: state.linksLength,
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
						<Col md="4" lg="4" xl="4" xxl="4">
							<PreviewAltCard className="card-full">
								<Row>
									<Col lg="8" xl="6">
										<div className="card-title-group align-start mb-0">
											<div className="card-title">
												<h4>Total Shorten Link</h4>
											</div>
										</div>
										<div className="card-amount">
											<span className="amount mt-2">{linksLength}</span>
										</div>
									</Col>
									<Col lg="4" xl="6">
										<img src={firstSvg} alt="Total Shorten Link" className="d-none d-md-block" />
									</Col>
								</Row>
							</PreviewAltCard>
						</Col>

						<Col md="4" lg="4" xl="4" xxl="4">
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
										<img src={b} alt="Plan" className="d-none d-md-block" />
									</Col>
								</Row>
							</PreviewAltCard>
						</Col>

						<Col md="4" lg="4" xl="4" xxl="4">
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
										<img src={a} alt="limit" className="d-none d-md-block" />
									</Col>
								</Row>
							</PreviewAltCard>
						</Col>
						<Col md="8">
							<Form className="is-alter h-100" onSubmit={handleSubmit(onFormSubmit)}>
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
									<div className="d-flex justify-content-center">
										<Button color="primary" type="submit" className="px-5 py-2 h5">
											<Icon name="link-alt"></Icon>
											<span>cut</span>
										</Button>
									</div>
								</Card>
							</Form>
						</Col>
						<Col md="4">
							<Card className="card-bordered card-full">
								<img src={rocketSvg} alt="rocket" width={350} />
								<div className="d-flex justify-content-center mb-4">
									<Link className="btn btn-primary" style={{ width: 200 + "px" }} to={process.env.PUBLIC_URL + "/product-list"}>
										<Icon name="hot"></Icon>
										<span>Get api credentials</span>
									</Link>
								</div>
							</Card>
						</Col>
						{links.length > 0 ? (
							<Col xl="12" xxl="12">
								<Card className="card-bordered card-full">
									<RecentInvest links={links} />
								</Card>
							</Col>
						) : (
							""
						)}
						<Col md="12">
							<Card className="card-bordered h-100">
								<TrafficChannel />
							</Card>
						</Col>
					</Row>
				</Block>
			</Content>
		</React.Fragment>
	);
};

export default InvestHomePage;
