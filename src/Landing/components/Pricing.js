import React, { lazy } from "react";
import NavBar from "./NavBar";
// import { Icon } from "../../components/Component";
const Icon = lazy(() => import("../../components/icon/Icon"));

function Pricing() {
	return (
		<React.Fragment>
			<div style={{ backgroundColor: "#ffffff" }}>
				<NavBar />
			</div>

			<section class="wrapper bg-light">
				<div class="container py-14 py-md-16">
					<h2 class="display-5 mb-7 text-center">Our Pricing</h2>
					<div class="pricing-wrapper">
						<div class="row gx-2 gy-6 mt-2">
							<div class="col-md-6 col-lg-3">
								<div class="pricing card shadow-lg">
									<div class="card-body">
										<h4 class="card-title">Basic Plan</h4>
										<div class="prices text-dark">
											<div class="price price-show justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">9</span> <span class="price-duration">mo</span>
											</div>
											<div class="price price-hide price-hidden justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">99</span> <span class="price-duration">yr</span>
											</div>
										</div>

										<ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>1</strong> Project{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>100K</strong> API Access{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>100MB</strong> Storage{" "}
												</span>
											</li>
											<li>
												<Icon name="cross-fill-c" className="text-danger" />
												<span>
													{" "}
													Weekly <strong>Reports</strong>{" "}
												</span>
											</li>
											<li>
												<Icon name="cross-fill-c" className="text-danger" />
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

							<div class="col-md-6 col-lg-3">
								<div class="pricing card shadow-lg">
									<div class="card-body">
										<h4 class="card-title">Premium Plan</h4>
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

										<ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>5</strong> Projects{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>100K</strong> API Access{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>200MB</strong> Storage{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													{" "}
													Weekly <strong>Reports</strong>
												</span>
											</li>
											<li>
												<Icon name="cross-fill-c" className="text-danger" />
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

							<div class="col-md-6 col-lg-3">
								<div class="pricing card bg-soft-primary">
									<div class="card-body">
										<h4 class="card-title">Corporate Plan</h4>
										<div class="prices text-dark">
											<div class="price price-show justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">29</span> <span class="price-duration">mo</span>
											</div>
											<div class="price price-hide price-hidden justify-content-start">
												<span class="price-currency">$</span>
												<span class="price-value">299</span> <span class="price-duration">yr</span>
											</div>
										</div>

										<ul class="icon-list bullet-bg bullet-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>20</strong> Projects{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>300K</strong> API Access{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>500MB</strong> Storage{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													{" "}
													Weekly <strong>Reports</strong>
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
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

							<div class="col-md-6 col-lg-3">
								<div class="pricing card shadow-lg">
									<div class="card-body">
										<h4 class="card-title">Community Plan</h4>
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

										<ul class="icon-list bullet-bg bullet-soft-primary mt-7 mb-8">
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>90</strong> Projects{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>900K</strong> API Access{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													<strong>900MB</strong> Storage{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
												<span>
													{" "}
													Weekly <strong>Reports</strong>{" "}
												</span>
											</li>
											<li>
												<Icon name="check-fill-c" className="text-yellow" />
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

					<a href="/" class="btn btn-primary rounded-pill mt-2">
						See All Prices
					</a>
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
		</React.Fragment>
	);
}

export default Pricing;
