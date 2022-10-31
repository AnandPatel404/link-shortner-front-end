import React from "react";
import NavBar from "./NavBar";

function Pricing() {
	return (
		<React.Fragment>
			<NavBar />
			<section class="wrapper bg-light">
				<div class="container py-14 py-md-16">
					<h2 class="display-4 mb-3">Our Pricing</h2>
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
										<i class="uil uil-check bg-pale-primary text-primary rounded-circle p-1"></i>
									</td>
									<td>
										<i class="uil uil-check bg-pale-primary text-primary rounded-circle p-1"></i>
									</td>
									<td>
										<i class="uil uil-check bg-pale-primary text-primary rounded-circle p-1"></i>
									</td>
								</tr>
								<tr>
									<td class="option text-start">24/7 Support</td>
									<td>-</td>
									<td>-</td>
									<td>
										<i class="uil uil-check bg-pale-primary text-primary rounded-circle p-1"></i>
									</td>
									<td>
										<i class="uil uil-check bg-pale-primary text-primary rounded-circle p-1"></i>
									</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<th class="w-25"></th>
									<th>
										<a href="/" class="btn btn-soft-primary rounded-pill mt-1">
											Choose Plan
										</a>
									</th>
									<th>
										<a href="/" class="btn btn-soft-primary rounded-pill mt-1">
											Choose Plan
										</a>
									</th>
									<th>
										<a href="/" class="btn btn-soft-primary rounded-pill mt-1">
											Choose Plan
										</a>
									</th>
									<th>
										<a href="/" class="btn btn-soft-primary rounded-pill mt-1">
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
