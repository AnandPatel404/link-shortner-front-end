import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../components/Component";
function SectionFour() {
	return (
		<section className="">
			<div className="container py-14 pt-md-14 pb-md-18">
				<div className="row gy-6 mb-14 mb-md-18">
					<div className="col-lg-4">
						<h2 className="fs-16 text-uppercase text-muted mt-lg-18 mb-3">Our Pricing</h2>
						<h3 className="display-4 mb-3">We offer great and premium prices.</h3>
						<p>
							Enjoy a <span className="text-yellow">free 7-day trial</span> and experience the full service. No credit card required!
						</p>
						<Link to={`${process.env.PUBLIC_URL}/pricing`} className="btn btn-primary rounded-pill mt-2">
							See All Prices
						</Link>
					</div>

					<div className="col-lg-7 offset-lg-1 pricing-wrapper">
						<div className="row gy-6 position-relative mt-5">
							<div className="col-md-6">
								<div className="pricing card bg-soft-primary">
									<div className="card-body pb-12">
										<div className="prices text-dark">
											<div className="price price-show justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">8</span> <span className="price-duration">mo</span>
											</div>
										</div>

										<h4 className="card-title mt-2">Gold Plan</h4>
										<ul className="icon-list bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>100000</strong>
												</span>{" "}
												<strong>Link Creating Limit</strong>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<strong> Qr Link</strong>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Custom Domain Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>API Access</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>ShorterMe Branded Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Click Limit Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>User Analytics</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Unique Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Password Protected Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Expiration Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>validity</strong>
												</span>{" "}
												<strong>28 day</strong>
											</li>
										</ul>
										<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary rounded-pill">
											Choose Plan
										</Link>
									</div>
								</div>
							</div>

							<div className="col-md-6 popular">
								<div className="pricing card bg-soft-primary">
									<div className="card-body pb-12">
										<div className="prices text-dark">
											<div className="price price-show justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">28</span> <span className="price-duration">mo</span>
											</div>
										</div>

										<h4 className="card-title mt-2">Premium Plan</h4>
										<ul className="icon-list bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>1000000</strong>
												</span>{" "}
												<strong>Link Creating Limit</strong>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Qr Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Custom Domain Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>API Access</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>ShorterMe Branded Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Click Limit Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>User Analytics</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Unique Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Unique Branded Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Password Protected Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Expiration Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Device Targeting Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>Browser Targeting Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>validity</strong>
												</span>
												<strong> 28 day</strong>
											</li>
										</ul>

										<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary rounded-pill">
											Choose Plan
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionFour;
