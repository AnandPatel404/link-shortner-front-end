import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../../components/Component";
function SectionFour() {
	return (
		<section className="bg-soft-primary">
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
								<div className="pricing card shadow-lg">
									<div className="card-body pb-12">
										<div className="prices text-dark">
											<div className="price price-show justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">19</span> <span className="price-duration">mo</span>
											</div>
											<div className="price price-hide price-hidden justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">199</span> <span className="price-duration">yr</span>
											</div>
										</div>

										<h4 className="card-title mt-2">Premium Plan</h4>
										<ul className="icon-list bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check" />
												<span>
													<strong>5</strong> Projects{" "}
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													<strong>100K</strong> API Access{" "}
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													<strong>200MB</strong> Storage{" "}
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													{" "}
													Weekly <strong>Reports</strong>
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													{" "}
													7/24 <strong>Support</strong>
												</span>
											</li>
										</ul>
										<a href="/" className="btn btn-primary rounded-pill">
											Choose Plan
										</a>
									</div>
								</div>
							</div>

							<div className="col-md-6 popular">
								<div className="pricing card shadow-lg">
									<div className="card-body pb-12">
										<div className="prices text-dark">
											<div className="price price-show justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">49</span> <span className="price-duration">mo</span>
											</div>
											<div className="price price-hide price-hidden justify-content-start">
												<span className="price-currency">$</span>
												<span className="price-value">499</span> <span className="price-duration">yr</span>
											</div>
										</div>

										<h4 className="card-title mt-2">Corporate Plan</h4>
										<ul className="icon-list bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check" />
												<span>
													<strong>20</strong> Projects{" "}
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													<strong>300K</strong> API Access{" "}
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													<strong>500MB</strong> Storage{" "}
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													{" "}
													Weekly <strong>Reports</strong>
												</span>
											</li>
											<li>
												<Icon name="check" />
												<span>
													{" "}
													7/24 <strong>Support</strong>
												</span>
											</li>
										</ul>
										<a href="/" className="btn btn-primary rounded-pill">
											Choose Plan
										</a>
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
