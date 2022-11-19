import React from "react";
import eye from "../assets/img/svg/pro.svg";
function SectionTwo() {
	return (
		<section className="wrapper">
			<div className="container py-14 py-md-16">
				<div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
					<div className="col-lg-5">
						<h3 className="display-4 mb-7">Our three process steps on creating awesome projects.</h3>
						<div className="d-flex flex-row mb-6">
							<div>
								<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
									<span className="number">01</span>
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
								<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
									<span className="number">02</span>
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
								<span className="icon btn btn-circle btn-lg btn-primary pe-none me-4">
									<span className="number">03</span>
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
					<div className="col-lg-7 d-flex">
						<img src={eye} alt="svg" width={700} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionTwo;
