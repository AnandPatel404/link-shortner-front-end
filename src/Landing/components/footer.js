import React from "react";
import Logo from "../../layout/logo/Logo";
import Footer from "../../layout/footer/Footer";
import { Link } from "react-router-dom";

function footer() {
	return (
		<footer>
			<div className="container pb-10 bg-light">
				<hr />
				<div className="row gy-6 gy-lg-0 d-flex justify-content-between py-10 py-md-20">
					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<Logo />
							<p className="my-4">
								Shorterme link solution is web app for those who want to create short link from long link{" "}
								<br className="d-none d-lg-block" />
								And Analytics link Performance and much more
							</p>
						</div>
					</div>

					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<h4 className="widget-title  mb-3">SOLUTIONS</h4>
							<ul className="list-unstyled text-reset mb-0">
								<li>
									<a href="/">Our Story</a>
								</li>
								<li>
									<a href="/">Solutions</a>
								</li>
								<li>
									<a href="/">Projects</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<h4 className="widget-title  mb-3">Learn More</h4>
							<ul className="list-unstyled text-reset mb-0">
								<li>
									<Link to={`${process.env.PUBLIC_URL}/contact-us`}>Contact Us</Link>
								</li>
								<li>
									<Link to={`${process.env.PUBLIC_URL}/pricing`}>Pricing</Link>
								</li>
								<li>
									<Link to={`${process.env.PUBLIC_URL}/password-protected-link-features`}>Feature</Link>
								</li>
								<li>
									<a href="/">About Us</a>
								</li>
								<li>
									<Link to={`${process.env.PUBLIC_URL}/credits`}>Credits</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className="col-md-12 col-lg-3">
						<div className="widget">
							<h4 className="widget-title  mb-3">Our Newsletter</h4>
							<p className="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
							<div className="newsletter-wrapper">
								<div id="mc_embed_signup2">
									<form>
										<div id="mc_embed_signup_scroll2">
											<div className="mc-field-group input-group form-floating">
												<input
													type="email"
													value=""
													name="EMAIL"
													className="required email form-control"
													placeholder="Email Address"
													id="mce-EMAIL2"
												/>
												<input
													type="submit"
													value="Join"
													name="subscribe"
													id="mc-embedded-subscribe2"
													className="btn btn-primary "
												/>
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
