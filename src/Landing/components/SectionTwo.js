import React from "react";
import browser from "../assets/img/icons/lineal/browser.svg";
import Chat from "../assets/img/icons/lineal/chat-2.svg";

function SectionTwo() {
	return (
		<section class="wrapper bg-light">
			<div class="container py-14 py-md-16 pb-md-17">
				<div class="row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17">
					<div class="col-md-6 col-xl-3">
						<div class="card shadow-lg card-border-bottom border-soft-yellow">
							<div class="card-body">
								<img src={browser} class="svg-inject icon-svg icon-svg-md text-yellow mb-3" alt="" />
								<h4>Content Marketing</h4>
								<p class="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" class="more hover link-yellow">
									Learn More
								</a>
							</div>
						</div>
					</div>

					<div class="col-md-6 col-xl-3">
						<div class="card shadow-lg card-border-bottom border-soft-green">
							<div class="card-body">
								<img src={Chat} class="svg-inject icon-svg icon-svg-md text-green mb-3" alt="" />
								<h4>Social Engagement</h4>
								<p class="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" class="more hover link-green">
									Learn More
								</a>
							</div>
						</div>
					</div>

					<div class="col-md-6 col-xl-3">
						<div class="card shadow-lg card-border-bottom border-soft-orange">
							<div class="card-body">
								<img src="./assets/img/icons/lineal/id-card.svg" class="svg-inject icon-svg icon-svg-md text-orange mb-3" alt="" />
								<h4>Identity & Branding</h4>
								<p class="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" class="more hover link-orange">
									Learn More
								</a>
							</div>
						</div>
					</div>

					<div class="col-md-6 col-xl-3">
						<div class="card shadow-lg card-border-bottom border-soft-blue">
							<div class="card-body">
								<img src="./assets/img/icons/lineal/gift.svg" class="svg-inject icon-svg icon-svg-md text-blue mb-3" alt="" />
								<h4>Product Design</h4>
								<p class="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" class="more hover link-blue">
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
					<div class="col-lg-7">
						<figure>
							<img class="w-auto" src="./assets/img/illustrations/i8.png" srcset="./assets/img/illustrations/i8@2x.png 2x" alt="" />
						</figure>
					</div>

					<div class="col-lg-5">
						<h3 class="display-4 mb-7">Our three process steps on creating awesome projects.</h3>
						<div class="d-flex flex-row mb-6">
							<div>
								<span class="icon btn btn-circle btn-soft-primary pe-none me-5">
									<span class="number fs-18">1</span>
								</span>
							</div>
							<div>
								<h4 class="mb-1">Collect Ideas</h4>
								<p class="mb-0">
									Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus. Donec ullamcorper nulla non metus.
								</p>
							</div>
						</div>
						<div class="d-flex flex-row mb-6">
							<div>
								<span class="icon btn btn-circle btn-soft-primary pe-none me-5">
									<span class="number fs-18">2</span>
								</span>
							</div>
							<div>
								<h4 class="mb-1">Data Analysis</h4>
								<p class="mb-0">Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna auctor fringilla augue.</p>
							</div>
						</div>
						<div class="d-flex flex-row">
							<div>
								<span class="icon btn btn-circle btn-soft-primary pe-none me-5">
									<span class="number fs-18">3</span>
								</span>
							</div>
							<div>
								<h4 class="mb-1">Finalize Product</h4>
								<p class="mb-0">
									Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed. Nulla vitae elit libero pharetra.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
					<div class="col-lg-7 order-lg-2">
						<figure>
							<img class="w-auto" src="./assets/img/illustrations/i2.png" srcset="./assets/img/illustrations/i2@2x.png 2x" alt="" />
						</figure>
					</div>

					<div class="col-lg-5">
						<h3 class="display-4 mb-7 mt-lg-10">Few reasons why our valued customers choose us.</h3>
						<div class="accordion accordion-wrapper" id="accordionExample">
							<div class="card plain accordion-item">
								<div class="card-header" id="headingOne">
									<button
										class="accordion-button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										{" "}
										Professional Design{" "}
									</button>
								</div>

								<div
									id="collapseOne"
									class="accordion-collapse collapse show"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div class="card-body">
										<p>
											Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
											risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.
										</p>
									</div>
								</div>
							</div>

							<div class="card plain accordion-item">
								<div class="card-header" id="headingTwo">
									<button
										class="collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
									>
										{" "}
										Top-Notch Support{" "}
									</button>
								</div>

								<div
									id="collapseTwo"
									class="accordion-collapse collapse"
									aria-labelledby="headingTwo"
									data-bs-parent="#accordionExample"
								>
									<div class="card-body">
										<p>
											Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
											risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.
										</p>
									</div>
								</div>
							</div>

							<div class="card plain accordion-item">
								<div class="card-header" id="headingThree">
									<button
										class="collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
									>
										{" "}
										Header and Slider Options{" "}
									</button>
								</div>

								<div
									id="collapseThree"
									class="accordion-collapse collapse"
									aria-labelledby="headingThree"
									data-bs-parent="#accordionExample"
								>
									<div class="card-body">
										<p>
											Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
											risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.
										</p>
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

export default SectionTwo;
