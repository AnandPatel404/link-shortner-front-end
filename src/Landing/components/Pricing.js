import React, { lazy, useState, useEffect, useCallback } from "react";
import Loader from "../../pages/Loader/Loader";
import userPlan from "../../zustand/plans/plan";
const Footer = lazy(() => import("./footer"));
const Icon = lazy(() => import("../../components/icon/Icon"));
const NavBar = lazy(() => import("./NavBar"));

function Pricing() {
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
			{loading ? (
				<Loader />
			) : (
				<React.Fragment>
					<div style={{ backgroundColor: "#ffffff" }}>
						<NavBar />
					</div>

					<section class="wrapper bg-light">
						<div class="container py-14 py-md-16">
							<h2 class="display-5 mb-7 text-center">Our Pricing</h2>
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
																		<strong>{item.link_creating_limit}</strong> Link creating Limit{" "}
																	</span>
																</li>
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
																			<strong>QR Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>QR Link</strong>
																		</span>
																	</li>
																)}
																{item.user_analytics ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>User Analytics</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>User Analytics</strong>
																		</span>
																	</li>
																)}
																{item.password_protected_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Password Protected Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Password Protected Link</strong>
																		</span>
																	</li>
																)}
																{item.custom_domain ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Custom Domain</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Custom Domain</strong>
																		</span>
																	</li>
																)}
																{item.unique_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Unique Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Unique Link</strong>
																		</span>
																	</li>
																)}
																{item.limited_click_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Limited Click Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Limited Click Link</strong>
																		</span>
																	</li>
																)}
																{item.expiration_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Expiration Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Expiration Link</strong>
																		</span>
																	</li>
																)}
																{item.device_targeting_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Device Targeting Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Device Targeting Link</strong>
																		</span>
																	</li>
																)}
																{item.browser_targeting_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Browser Targeting Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Browser Targeting Link</strong>
																		</span>
																	</li>
																)}
																{item.unique_branded_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Unique Branded Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Unique Branded Link</strong>
																		</span>
																	</li>
																)}
																{item.custom_qr_link ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Custom QR Link</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Custom QR Link</strong>
																		</span>
																	</li>
																)}
																{item.custom_link_redirection_page ? (
																	<li>
																		<Icon name="check-fill-c" className="text-yellow" />
																		<span>
																			<strong>Custom Link Redirection Page</strong>
																		</span>
																	</li>
																) : (
																	<li>
																		<Icon name="cross-fill-c" className="text-danger" />
																		<span>
																			<strong>Custom Link Redirection Page</strong>
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
											{data.map((res) => (
												<th>
													<div class="h4 mb-1">{res.plan_name}</div>
													<div class="fs-15 fw-normal text-secondary">{`$${res.plan_price} / ${res.validity} Days`}</div>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										<tr>
											<td class="option text-start">Link creating Limit</td>
											<td>100</td>
											<td>100000</td>
											<td>1000000</td>
											<td>10000000</td>
										</tr>
										<tr>
											<td class="option text-start">API Access (Api Hit Per Day)</td>
											<td>100</td>
											<td>100000</td>
											<td>1000000</td>
											<td>10000000</td>
										</tr>
										<tr>
											<td class="option text-start">QR Link</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
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
											<td class="option text-start">User Analytics</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
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
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
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
											<td class="option text-start">Password Protected Link</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
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
											<td class="option text-start">Custom Domain</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
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
											<td class="option text-start">Unique Link</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
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
											<td class="option text-start">Limited Click Link</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
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
											<td class="option text-start">Expiration Link</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
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
											<td class="option text-start">Device Targeting Link</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
										</tr>
										<tr>
											<td class="option text-start">Browser Targeting Link</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
										</tr>
										<tr>
											<td class="option text-start">Unique Branded Link</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
										</tr>
										<tr>
											<td class="option text-start">Custom QR Link</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
											<td>
												<Icon name="check-fill-c" className="text-yellow" />
											</td>
										</tr>
										<tr>
											<td class="option text-start">Custom Link Redirection Page</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
											</td>
											<td>
												<Icon name="cross-fill-c" className="text-danger" />
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
						<Footer />
					</section>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default Pricing;
