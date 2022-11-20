import React from "react";
import Logo from "../../layout/logo/Logo";
import Footer from "../../layout/footer/Footer";

function footer() {
	return (
		<footer>
			<div class="container pb-10 bg-light">
				<hr />
				<div class="row gy-6 gy-lg-0 d-flex justify-content-between py-10 py-md-20">
					<div class="col-md-4 col-lg-3">
						<div class="widget">
							<Logo />
							<p class="my-4">
								Shorterme link solution is web app for those who want to create short link from long link{" "}
								<br class="d-none d-lg-block" />
								And Analytics link Performance and much more
							</p>
						</div>
					</div>

					<div class="col-md-4 col-lg-3">
						<div class="widget">
							<h4 class="widget-title  mb-3">SOLUTIONS</h4>
							<ul class="list-unstyled text-reset mb-0">
								<li>
									<a href="/">About Us</a>
								</li>
								<li>
									<a href="/">Our Story</a>
								</li>
								<li>
									<a href="/">Projects</a>
								</li>
								<li>
									<a href="/">Terms of Use</a>
								</li>
								<li>
									<a href="/">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-md-4 col-lg-3">
						<div class="widget">
							<h4 class="widget-title  mb-3">Learn More</h4>
							<ul class="list-unstyled text-reset mb-0">
								<li>
									<a href="/">About Us</a>
								</li>
								<li>
									<a href="/">Our Story</a>
								</li>
								<li>
									<a href="/">Projects</a>
								</li>
								<li>
									<a href="/">Terms of Use</a>
								</li>
								<li>
									<a href="/">Privacy Policy</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-md-12 col-lg-3">
						<div class="widget">
							<h4 class="widget-title  mb-3">Our Newsletter</h4>
							<p class="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
							<div class="newsletter-wrapper">
								<div id="mc_embed_signup2">
									<form
										action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
										method="post"
										id="mc-embedded-subscribe-form2"
										name="mc-embedded-subscribe-form"
										class="validate "
										target="_blank"
										novalidate
									>
										<div id="mc_embed_signup_scroll2">
											<div class="mc-field-group input-group form-floating">
												<input
													type="email"
													value=""
													name="EMAIL"
													class="required email form-control"
													placeholder="Email Address"
													id="mce-EMAIL2"
												/>
												<input
													type="submit"
													value="Join"
													name="subscribe"
													id="mc-embedded-subscribe2"
													class="btn btn-primary "
												/>
											</div>
											<div id="mce-responses2" class="clear">
												<div class="response" id="mce-error-response2"></div>
												<div class="response" id="mce-success-response2"></div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</footer>
	);
}

export default footer;
