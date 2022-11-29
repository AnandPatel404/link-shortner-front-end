import React from "react";
import paichart from "../assets/img/svg/Advantages-bro.svg";
function SectionThree() {
	return (
		<section className="wrapper">
			<div className="container py-14 pt-md-17 pb-md-15">
				<div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
					<div className="col-lg-6 d-flex flex-column text-center text-lg-start align-items-center">
						<h2 className="fs-16 text-uppercase text-muted mb-3">Main Advantages</h2>
						<img src={paichart} alt="" width={400} />
					</div>
					<div className="col-lg-6">
						<div className="card shadow-lg me-lg-6 bg-soft-primary">
							<div className="card-body p-6">
								<div className="d-flex flex-row">
									<div>
										<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
											<span className="number">01</span>
										</span>
									</div>
									<div>
										<h4 className="mb-1">Lots Of Features At a Great Price</h4>
										<p className="mb-0">
											We provide many facilities at this price and we do not charge any hidden cost, customer's satisfaction is
											our first goal.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="card shadow-lg ms-lg-13 mt-6 bg-soft-primary ">
							<div className="card-body p-6">
								<div className="d-flex flex-row">
									<div>
										<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
											<span className="number">02</span>
										</span>
									</div>
									<div>
										<h4 className="mb-1">Link Analytics Platform</h4>
										<p className="mb-0">
											Track Each Shortened Link And Measure Its Performance To Understand It. Detailed Analytics Provides You
											Info About Clicks, Devices, Brands, Browsers, Systems, Geo Location Many More.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="card shadow-lg mx-lg-6 mt-6 bg-soft-primary ">
							<div className="card-body p-6">
								<div className="d-flex flex-row">
									<div>
										<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
											<span className="number">03</span>
										</span>
									</div>
									<div>
										<h4 className="mb-1">Easy To Understand User Interface</h4>
										<p className="mb-0">We do not provide complex dashboards, we provide easy to understand dashboards</p>
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

export default SectionThree;
