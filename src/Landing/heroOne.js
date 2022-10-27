import React from "react";
function HeroOne() {
	return (
		<div class="content-wrapper">
			<section class="wrapper bg-soft-primary">
				<div class="container py-14 pt-md-17 pb-md-20">
					<div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
						<div class="col-lg-4 text-center text-lg-start">
							<h3 class="display-4 mb-3 pe-xl-15">We are proud of our works</h3>
							<p class="lead fs-lg mb-0 pe-xxl-10">We bring solutions to make life easier for our customers.</p>
						</div>

						<div class="col-lg-8 mt-lg-2">
							<div class="row align-items-center counter-wrapper gy-6 text-center">
								<div class="col-md-4">
									<img src="./assets/img/icons/lineal/check.svg" class="svg-inject icon-svg icon-svg-md text-primary mb-3" alt="" />
									<h3 class="counter">7518</h3>
									<p>Completed Projects</p>
								</div>

								<div class="col-md-4">
									<img src="./assets/img/icons/lineal/user.svg" class="svg-inject icon-svg icon-svg-md text-primary mb-3" alt="" />
									<h3 class="counter">3472</h3>
									<p>Happy Customers</p>
								</div>

								<div class="col-md-4">
									<img
										src="./assets/img/icons/lineal/briefcase-2.svg"
										class="svg-inject icon-svg icon-svg-md text-primary mb-3"
										alt=""
									/>
									<h3 class="counter">2184</h3>
									<p>Expert Employees</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="wrapper bg-light">
				<div class="container py-14 py-md-16 pb-md-17">
					<div class="grid mb-14 mb-md-18 mt-3">
						<div class="row isotope gy-6 mt-n19 mt-md-n22">
							<div class="item col-md-6 col-xl-3">
								<div class="card shadow-lg card-border-bottom border-soft-primary">
									<div class="card-body">
										<span class="ratings five mb-3"></span>
										<blockquote class="icon mb-0">
											<p>
												“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta.
												Cras mattis consectetur.”
											</p>
											<div class="blockquote-details">
												<div class="info ps-0">
													<h5 class="mb-1">Coriss Ambady</h5>
													<p class="mb-0">Financial Analyst</p>
												</div>
											</div>
										</blockquote>
									</div>
								</div>
							</div>

							<div class="item col-md-6 col-xl-3">
								<div class="card shadow-lg card-border-bottom border-soft-primary">
									<div class="card-body">
										<span class="ratings five mb-3"></span>
										<blockquote class="icon mb-0">
											<p>
												“Fusce dapibus, tellus ac cursus tortor mauris condimentum fermentum massa justo sit amet purus sit
												amet fermentum.”
											</p>
											<div class="blockquote-details">
												<div class="info ps-0">
													<h5 class="mb-1">Cory Zamora</h5>
													<p class="mb-0">Marketing Specialist</p>
												</div>
											</div>
										</blockquote>
									</div>
								</div>
							</div>

							<div class="item col-md-6 col-xl-3">
								<div class="card shadow-lg card-border-bottom border-soft-primary">
									<div class="card-body">
										<span class="ratings five mb-3"></span>
										<blockquote class="icon mb-0">
											<p>
												“Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor eu
												rutrum. Nulla vitae libero.”
											</p>
											<div class="blockquote-details">
												<div class="info ps-0">
													<h5 class="mb-1">Nikolas Brooten</h5>
													<p class="mb-0">Sales Manager</p>
												</div>
											</div>
										</blockquote>
									</div>
								</div>
							</div>

							<div class="item col-md-6 col-xl-3">
								<div class="card shadow-lg card-border-bottom border-soft-primary">
									<div class="card-body">
										<span class="ratings five mb-3"></span>
										<blockquote class="icon mb-0">
											<p>
												“Etiam adipiscing tincidunt elit convallis felis suscipit ut. Phasellus rhoncus eu tincidunt auctor
												nullam rutrum, pharetra augue.”
											</p>
											<div class="blockquote-details">
												<div class="info ps-0">
													<h5 class="mb-1">Coriss Ambady</h5>
													<p class="mb-0">Financial Analyst</p>
												</div>
											</div>
										</blockquote>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="projects-tiles">
						<div class="project grid grid-view">
							<div class="row gx-md-8 gx-xl-12 gy-10 gy-md-12 isotope">
								<div class="item col-md-6 mt-md-7 mt-lg-15">
									<div class="project-details d-flex justify-content-center align-self-end flex-column ps-0 pb-0">
										<div class="post-header">
											<h2 class="display-4 mb-4 pe-xxl-15">Check out some of our recent projects below.</h2>
											<p class="lead fs-lg mb-0">We love to turn ideas into beautiful things.</p>
										</div>
									</div>
								</div>

								<div class="item col-md-6">
									<figure class="lift rounded mb-6">
										<a href="./single-project3.html">
											{" "}
											<img src="./assets/img/photos/rp1.jpg" srcset="./assets/img/photos/rp1@2x.jpg 2x" alt="" />
										</a>
									</figure>
									<div class="post-category text-line mb-3 text-violet">Stationary</div>
									<h2 class="post-title h3">Ipsum Ultricies Cursus</h2>
								</div>

								<div class="item col-md-6">
									<figure class="lift rounded mb-6">
										<a href="./single-project2.html">
											{" "}
											<img src="./assets/img/photos/rp2.jpg" srcset="./assets/img/photos/rp2@2x.jpg 2x" alt="" />
										</a>
									</figure>
									<div class="post-category text-line mb-3 text-leaf">Invitation</div>
									<h2 class="post-title h3">Mollis Ipsum Mattis</h2>
								</div>

								<div class="item col-md-6">
									<figure class="lift rounded mb-6">
										<a href="./single-project.html">
											{" "}
											<img src="./assets/img/photos/rp3.jpg" srcset="./assets/img/photos/rp3@2x.jpg 2x" alt="" />
										</a>
									</figure>
									<div class="post-category text-line mb-3 text-purple">Notebook</div>
									<h2 class="post-title h3">Magna Tristique Inceptos</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="wrapper bg-soft-primary">
				<div class="container py-14 py-md-17">
					<div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
						<div class="col-lg-7">
							<figure>
								<img class="w-auto" src="./assets/img/illustrations/i5.png" srcset="./assets/img/illustrations/i5@2x.png 2x" alt="" />
							</figure>
						</div>

						<div class="col-lg-5">
							<h3 class="display-4 mb-7">Got any questions? Don't hesitate to get in touch.</h3>
							<div class="d-flex flex-row">
								<div>
									<div class="icon text-primary fs-28 me-4 mt-n1">
										{" "}
										<i class="uil uil-location-pin-alt"></i>{" "}
									</div>
								</div>
								<div>
									<h5 class="mb-1">Address</h5>
									<address>Moonshine St. 14/05 Light City, London</address>
								</div>
							</div>
							<div class="d-flex flex-row">
								<div>
									<div class="icon text-primary fs-28 me-4 mt-n1">
										{" "}
										<i class="uil uil-phone-volume"></i>{" "}
									</div>
								</div>
								<div>
									<h5 class="mb-1">Phone</h5>
									<p>00 (123) 456 78 90</p>
								</div>
							</div>
							<div class="d-flex flex-row">
								<div>
									<div class="icon text-primary fs-28 me-4 mt-n1">
										{" "}
										<i class="uil uil-envelope"></i>{" "}
									</div>
								</div>
								<div>
									<h5 class="mb-1">E-mail</h5>
									<p class="mb-0">
										<a href="mailto:sandbox@email.com" class="link-body">
											sandbox@email.com
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HeroOne;
