import React from "react";
import browser from "../assets/img/icons/lineal/browser.svg";
import Chat from "../assets/img/icons/lineal/chat-2.svg";
import idsvg from "../assets/img/icons/lineal/id-card.svg";
import gift from "../assets/img/icons/lineal/gift.svg";
import eye from "../assets/img/illustrations/i8.png";
function SectionTwo() {
	return (
		<section className="wrapper bg-light">
			<div className="container py-14 py-md-16 pb-md-17">
				<div className="row gx-md-5 gy-5 mt-n18 mt-md-n21 mb-14 mb-md-17">
					<div className="col-md-6 col-xl-3">
						<div className="card shadow-lg card-border-bottom border-soft-yellow">
							<div className="card-body">
								<img src={browser} className="icon-svg icon-svg-md text-yellow mb-3" alt="" />
								<h4>Content Marketing</h4>
								<p className="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" className="hover link-yellow">
									Learn More
								</a>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-xl-3">
						<div className="card shadow-lg card-border-bottom border-soft-green">
							<div className="card-body">
								<img src={Chat} className="icon-svg icon-svg-md text-green mb-3" alt="" />
								<h4>Social Engagement</h4>
								<p className="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" className="hover link-green">
									Learn More
								</a>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-xl-3">
						<div className="card shadow-lg card-border-bottom border-soft-orange">
							<div className="card-body">
								<img src={idsvg} className=" icon-svg icon-svg-md text-orange mb-3" alt="" />
								<h4>Identity & Branding</h4>
								<p className="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" className="hover link-orange">
									Learn More
								</a>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-xl-3">
						<div className="card shadow-lg card-border-bottom border-soft-blue">
							<div className="card-body">
								<img src={gift} className="icon-svg icon-svg-md text-blue mb-3" alt="" />
								<h4>Product Design</h4>
								<p className="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.
								</p>
								<a href="/" className="hover link-blue">
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
					<div className="col-lg-7">
						<figure>
							<img className="w-auto" src={eye} alt="" />
						</figure>
					</div>

					<div className="col-lg-5">
						<h3 className="display-4 mb-7">Our three process steps on creating awesome projects.</h3>
						<div className="d-flex flex-row mb-6">
							<div>
								<span className="icon btn btn-circle btn-soft-primary pe-none me-5">
									<span className="number fs-18">1</span>
								</span>
							</div>
							<div>
								<h4 className="mb-1">Collect Ideas</h4>
								<p className="mb-0">
									Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus. Donec ullamcorper nulla non metus.
								</p>
							</div>
						</div>
						<div className="d-flex flex-row mb-6">
							<div>
								<span className="icon btn btn-circle btn-soft-primary pe-none me-5">
									<span className="number fs-18">2</span>
								</span>
							</div>
							<div>
								<h4 className="mb-1">Data Analysis</h4>
								<p className="mb-0">
									Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna auctor fringilla augue.
								</p>
							</div>
						</div>
						<div className="d-flex flex-row">
							<div>
								<span className="icon btn btn-circle btn-soft-primary pe-none me-5">
									<span className="number fs-18">3</span>
								</span>
							</div>
							<div>
								<h4 className="mb-1">Finalize Product</h4>
								<p className="mb-0">
									Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed. Nulla vitae elit libero pharetra.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionTwo;
