import React from "react";
import { Icon } from "../../components/Component";
function SectionFour() {
	return (
		<section class="bg-soft-primary">
			<div class="container py-14 pt-md-14 pb-md-18">
				<div class="row gy-6 mb-14 mb-md-18">
					<div class="col-lg-4">
						<h2 class="fs-16 text-uppercase text-muted mt-lg-18 mb-3">Our Pricing</h2>
						<h3 class="display-4 mb-3">We offer great and premium prices.</h3>
						<p>
							Enjoy a{" "}
							<a href="/" class="hover">
								free 7-day trial
							</a>{" "}
							and experience the full service. No credit card required!
						</p>
						<a href="/" class="btn btn-primary rounded-pill mt-2">
							See All Prices
						</a>
					</div>

					<div class="col-lg-7 offset-lg-1 pricing-wrapper">
						<div class="row gy-6 position-relative mt-5">
							<div class="col-md-6">
								<div class="pricing card shadow-lg">
									<div class="card-body pb-12">
										<div class="prices text-dark">
											<div class="price price-show justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">19</span> <span class="price-duration">mo</span>
											</div>
											<div class="price price-hide price-hidden justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">199</span> <span class="price-duration">yr</span>
											</div>
										</div>

										<h4 class="card-title mt-2">Premium Plan</h4>
										<ul class="icon-list bullet-soft-primary mt-7 mb-8">
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
										<a href="/" class="btn btn-primary rounded-pill">
											Choose Plan
										</a>
									</div>
								</div>
							</div>

							<div class="col-md-6 popular">
								<div class="pricing card shadow-lg">
									<div class="card-body pb-12">
										<div class="prices text-dark">
											<div class="price price-show justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">49</span> <span class="price-duration">mo</span>
											</div>
											<div class="price price-hide price-hidden justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">499</span> <span class="price-duration">yr</span>
											</div>
										</div>

										<h4 class="card-title mt-2">Corporate Plan</h4>
										<ul class="icon-list bullet-soft-primary mt-7 mb-8">
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
										<a href="/" class="btn btn-primary rounded-pill">
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
