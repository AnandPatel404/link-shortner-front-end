import React, { lazy, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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

					<section className="wrapper bg-light">
						<div className="container py-14 py-md-16">
							<h2 className="display-5 mb-7 text-center">Our Pricing</h2>
							<div className="pricing-wrapper">
								<div className="row gx-2 gy-6 mt-2">
									{data.length > 0
										? data.map((item) => (
												<div className="col-md-6 col-lg-3" key={item.id}>
													<div className="pricing card shadow-lg">
														<div className="card-body">
															<h4 className="card-title">{item.plan_name}</h4>
															<div className="prices text-dark">
																<div className="price price-show justify-content-start">
																	<span className="price-currency">$</span>
																	<span className="price-value">{item.plan_price}</span>{" "}
																	<span className="price-duration"> {item.validity} days</span>
																</div>
															</div>

															<ul className="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
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
															<Link
																to={`${process.env.PUBLIC_URL}/auth-login`}
																className="btn btn-primary rounded-pill mt-1"
															>
																Choose Plan
															</Link>
														</div>
													</div>
												</div>
										  ))
										: null}
								</div>
							</div>
						</div>
					</section>

					<section className="wrapper" style={{ backgroundColor: "#ffffff" }}>
						<div className="container py-14 py-md-16">
							<p className="lead fs-lg">
								We offer <span className="underline">great prices</span>, premium and quality solution for your business.
							</p>
							<div className="row">
								<div className="col-lg-4">
									<p>
										Enjoy a{" "}
										<a href="/" className="hover">
											free 7-day trial
										</a>{" "}
										and experience the full service. No credit card required!
									</p>
								</div>
							</div>
							<div className="table-responsive">
								<table className="table table-borderless table-striped text-center">
									<thead>
										<tr>
											<th className="w-25"></th>
											{data.map((res) => (
												<th>
													<div className="h4 mb-1">{res.plan_name}</div>
													<div className="fs-15 fw-normal text-secondary">{`$${res.plan_price} / ${res.validity} Days`}</div>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className="option text-start">Link creating Limit</td>
											<td>100</td>
											<td>100000</td>
											<td>1000000</td>
											<td>10000000</td>
										</tr>
										<tr>
											<td className="option text-start">API Access (Api Hit Per Day)</td>
											<td>100</td>
											<td>100000</td>
											<td>1000000</td>
											<td>10000000</td>
										</tr>
										<tr>
											<td className="option text-start">QR Link</td>
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
											<td className="option text-start">User Analytics</td>
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
											<td className="option text-start">24/7 Support</td>
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
											<td className="option text-start">Password Protected Link</td>
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
											<td className="option text-start">Custom Domain</td>
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
											<td className="option text-start">Unique Link</td>
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
											<td className="option text-start">Limited Click Link</td>
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
											<td className="option text-start">Expiration Link</td>
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
											<td className="option text-start">Device Targeting Link</td>
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
											<td className="option text-start">Browser Targeting Link</td>
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
											<td className="option text-start">Unique Branded Link</td>
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
											<td className="option text-start">Custom QR Link</td>
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
											<td className="option text-start">Custom Link Redirection Page</td>
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
											<th className="w-25"></th>
											<th>
												<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary rounded-pill mt-1">
													Choose Plan
												</Link>
											</th>
											<th>
												<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary rounded-pill mt-1">
													Choose Plan
												</Link>
											</th>
											<th>
												<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary rounded-pill mt-1">
													Choose Plan
												</Link>
											</th>
											<th>
												<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary rounded-pill mt-1">
													Choose Plan
												</Link>
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
