import React from "react";
import eye from "../assets/img/svg/growTwo2.svg";
function SectionTwo() {
	return (
		<section className="wrapper">
			<div className="container py-14 py-md-16">
				<div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
					<div className="col-lg-7 d-flex justify-content-center align-items-center order-first ">
						<img src={eye} alt="svg" width={700} />
					</div>
					<div className="col-lg-5">
						<h2 className="fs-16 text-uppercase text-muted">Why Shorterme</h2>
						<h3 className="my-8">Here Is The Reason Why Shorterme</h3>
						<div className="d-flex flex-row my-10">
							<div>
								<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
									<span className="number">01</span>
								</span>
							</div>
							<div>
								<h4 className="mb-1">Simple And Fast</h4>
								<p className="mb-0">Our user interface is the most simple and easy to use.</p>
							</div>
						</div>
						<div className="d-flex flex-row mb-6">
							<div>
								<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
									<span className="number">02</span>
								</span>
							</div>
							<div>
								<h4 className="mb-1">Video tutorial to build good links</h4>
								<p className="mb-0">We provide video tutorials so that you can build the best links and grow your business.</p>
							</div>
						</div>
						<div className="d-flex flex-row">
							<div>
								<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
									<span className="number">03</span>
								</span>
							</div>
							<div>
								<h4 className="mb-1">Free 7 day trail for free </h4>
								<p className="mb-0">Login and get 7 days trail for free and use lot of features we provide 12+ feature</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionTwo;
