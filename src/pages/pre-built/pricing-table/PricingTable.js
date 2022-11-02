import React, { useEffect, useState, useCallback } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { BlockBetween, BlockDes, Block, BlockContent, BlockHead, BlockTitle, Icon } from "../../../components/Component";
import userPlan from "../../../zustand/plans/plan";
import Loader from "../../Loader/Loader";

const PricingTable = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const { plan } = userPlan((state) => ({
		plan: state.plan,
	}));

	const getAllPlan = useCallback(async () => {
		const data = await plan(setLoading);
		setData(data);
	}, [plan]);

	useEffect(() => {
		getAllPlan();
	}, [getAllPlan]);
	return (
		<React.Fragment>
			<Head title="Pricing Table"></Head>
			<Content>
				<BlockHead size="sm">
					<BlockBetween className="g-3">
						<BlockContent>
							<BlockTitle>Pricing</BlockTitle>
							<BlockDes className="text-soft">
								<p>Choose your pricing plan and start enjoying our service.</p>
							</BlockDes>
						</BlockContent>
					</BlockBetween>
				</BlockHead>
				{loading ? (
					<Loader />
				) : (
					<Block size="lg">
						<section class="wrapper">
							<div class="container py-14 py-md-16">
								<div class="pricing-wrapper">
									<div class="row gx-2 gy-6 mt-2">
										{data.length > 0
											? data.map((item) => (
													<div class="col-md-6 col-lg-3" key={item.id}>
														<div class="pricing card shadow-lg">
															<div class="card-body">
																<h4 class="card-title">{item.plan_name}</h4>
																<div class="prices text-dark">
																	<div class="price price-show justify-content-start">
																		<span class="price-currency">$</span>
																		<span class="price-value">{item.plan_price}</span>{" "}
																		<span class="price-duration"> {item.validity} days</span>
																	</div>
																</div>

																<ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			{" "}
																			7/24 <strong>Support</strong>
																		</span>
																	</li>
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>{item.link_creating_limit}</strong> Link creating{" "}
																		</span>
																	</li>
																	{item.custom_domain ? (
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				<strong>{item.custom_domain_limit}</strong> Custom Domain{" "}
																			</span>
																		</li>
																	) : (
																		<li>
																			<Icon name="cross-fill-c" className="text-danger" />
																			<span>
																				<strong>{item.custom_domain_limit}</strong> Custom Domain{" "}
																			</span>
																		</li>
																	)}
																	{item.api_webhook ? (
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				<strong>{item.api_webhook_limit}</strong> Api Hit per Day{" "}
																			</span>
																		</li>
																	) : (
																		<li>
																			<Icon name="cross-fill-c" className="text-danger" />
																			<span>
																				<strong>{item.api_webhook_limit}</strong> Api Hit per Day{" "}
																			</span>
																		</li>
																	)}
																	{item.qr_link ? (
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				<strong>{item.qr_link_limit}</strong> QR{" "}
																			</span>
																		</li>
																	) : (
																		<li>
																			<Icon name="cross-fill-c" className="text-danger" />
																			<span>
																				<strong>{item.qr_link_limit}</strong> QR{" "}
																			</span>
																		</li>
																	)}
																	{item.custom_link_redirect ? (
																		<li>
																			<Icon name="check-fill-c" className="text-yellow" />
																			<span>
																				<strong>{item.custom_link_redirect_limit}</strong> Custom Link
																				Redirect{" "}
																			</span>
																		</li>
																	) : (
																		<li>
																			<Icon name="cross-fill-c" className="text-danger" />
																			<span>
																				<strong>{item.custom_link_redirect_limit}</strong> Custom Link
																				Redirect{" "}
																			</span>
																		</li>
																	)}
																</ul>
																<a href="/" class="btn btn-primary rounded-pill">
																	Choose Plan
																</a>
															</div>
														</div>
													</div>
											  ))
											: null}
									</div>
								</div>
							</div>
						</section>

						<section class="wrapper" style={{ backgroundColor: "#ffffff" }}>
							<div class="container py-14 py-md-16">
								<p class="lead fs-lg">
									We offer <span class="underline">great prices</span>, premium and quality solution for your business.
								</p>
								<div class="row">
									<div class="col-lg-4">
										<p>
											Enjoy a{" "}
											<a href="/" class="hover">
												free 7-day trial
											</a>{" "}
											and experience the full service. No credit card required!
										</p>
									</div>
								</div>
								<div class="table-responsive">
									<table class="table table-borderless table-striped text-center">
										<thead>
											<tr>
												<th class="w-25"></th>
												<th>
													<div class="h4 mb-1">Basic Plan</div>
													<div class="fs-15 fw-normal text-secondary">$9 / Monthly</div>
												</th>
												<th>
													<div class="h4 mb-1">Premium Plan</div>
													<div class="fs-15 fw-normal text-secondary">$19 / Monthly</div>
												</th>
												<th>
													<div class="h4 mb-1">Corporate Plan</div>
													<div class="fs-15 fw-normal text-secondary">$29 / Monthly</div>
												</th>
												<th>
													<div class="h4 mb-1">Business Plan</div>
													<div class="fs-15 fw-normal text-secondary">$49 / Monthly</div>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="option text-start">Project</td>
												<td>1</td>
												<td>5</td>
												<td>20</td>
												<td>90</td>
											</tr>
											<tr>
												<td class="option text-start">API Access</td>
												<td>100K</td>
												<td>200K</td>
												<td>300K</td>
												<td>900K</td>
											</tr>
											<tr>
												<td class="option text-start">Storage</td>
												<td>100MB</td>
												<td>200MB</td>
												<td>500MB</td>
												<td>900MB</td>
											</tr>
											<tr>
												<td class="option text-start">Weekly Reports</td>
												<td>-</td>
												<td>
													<Icon name="check-fill-c" className="text-yellow" />
												</td>
												<td>
													<Icon name="check-fill-c" className="text-yellow" />
												</td>
												<td>
													<Icon name="check-fill-c" className="text-yellow" />
												</td>
											</tr>
											<tr>
												<td class="option text-start">24/7 Support</td>
												<td>-</td>
												<td>-</td>
												<td>
													<Icon name="check-fill-c" className="text-yellow" />
												</td>
												<td>
													<Icon name="check-fill-c" className="text-yellow" />
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th class="w-25"></th>
												<th>
													<a href="/" class="btn btn-primary rounded-pill mt-1">
														Choose Plan
													</a>
												</th>
												<th>
													<a href="/" class="btn btn-primary rounded-pill mt-1">
														Choose Plan
													</a>
												</th>
												<th>
													<a href="/" class="btn btn-primary rounded-pill mt-1">
														Choose Plan
													</a>
												</th>
												<th>
													<a href="/" class="btn btn-primary rounded-pill mt-1">
														Choose Plan
													</a>
												</th>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</section>
					</Block>
				)}
			</Content>
		</React.Fragment>
	);
};

export default PricingTable;
