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
								<div className="pricing card shadow-lg bg-soft-primary">
									<div className="card-body pb-12">
										<div className="prices text-dark">
											<div className="price price-show justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">19</span> <span className="price-duration">mo</span>
											</div>
										</div>

										<h4 className="card-title mt-2">Premium Plan</h4>
										<ul className="icon-list bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>1000000</span> Link Creating Limit
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>1000000</span> Qr Link limit
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
												<span>Click Limit Link</span>
											</li>
										</ul>
										<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary rounded-pill">
											Choose Plan
										</Link>
									</div>
								</div>
							</div>

							<div className="col-md-6 popular">
								<div className="pricing card shadow-lg bg-soft-primary">
									<div className="card-body pb-12">
										<div className="prices text-dark">
											<div className="price price-show justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">49</span> <span className="price-duration">mo</span>
											</div>
										</div>

										<h4 className="card-title mt-2">Premium Pro Plan</h4>
										<ul className="icon-list bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>Qr Link</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>Custom Logo Qr Link</span>
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
													<strong>Your Branded Link</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>Click Limit Link</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>Device Targeting Links</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>Browser Targeting Links</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													{" "}
													7/24 <strong>Support</strong>
												</span>
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
