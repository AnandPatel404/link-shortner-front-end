import React from "react";
import targetSvg from "../assets/img/svg/target.svg";
import graf from "../assets/img/svg/graf.svg";
import dataSvg from "../assets/img/svg/data.svg";
import { PreviewCard } from "../../components/Component";

function SectionSeven() {
	return (
		<section className="wrapper bg-light wrapper-border">
			<div className="container-card pt-14 pt-md-16">
				<div className="card image-wrapper  bg-overlay bg-overlay-light-400 pb-15" style={{ backgroundColor: "#f4bd0e" }}>
					<div className="card-body py-14 px-0">
						<div className="container">
							<div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0">
								<div className="col-lg-4 text-center text-lg-start">
									<h3 className="display-4 mb-3 pe-xxl-15">We are proud of our works</h3>
									<p className="lead fs-lg mb-0 pe-xxl-10">We bring solutions to make life easier for our customers.</p>
								</div>

								<div className="col-lg-8 mt-lg-2">
									<div className="row align-items-center counter-wrapper gy-6 text-center">
										<div className="col-md-4">
											<img src={targetSvg} className="" alt="" />
											<h3 className="counter">1000+</h3>
											<p className="mb-0">Completed Projects</p>
										</div>

										<div className="col-md-4">
											<img src={graf} className="" alt="" />
											<h3 className="counter">4x</h3>
											<p className="mb-0">Revenue Growth</p>
										</div>

										<div className="col-md-4">
											<img src={dataSvg} alt="" />
											<h3 className="counter">99.7%</h3>
											<p className="mb-0">Customer Satisfaction</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="grid mb-15">
					<div className="row isotope gy-6 mt-n18">
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="shadow-lg p-3 mb-5 bg-white rounded">
								<div className="icon mb-0">
									<p>
										“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras
										mattis consectetur.”
									</p>
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Coriss Ambady</h5>
											<p className="mb-0">Financial Analyst</p>
										</div>
									</div>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="shadow-lg p-3 mb-5 bg-white rounded">
								<div className="icon mb-0">
									<p>
										“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras
										mattis consectetur.”
									</p>
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Coriss Ambady</h5>
											<p className="mb-0">Financial Analyst</p>
										</div>
									</div>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="shadow-lg p-3 mb-5 bg-white rounded">
								<div className="icon mb-0">
									<p>
										“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras
										mattis consectetur.”
									</p>
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Coriss Ambady</h5>
											<p className="mb-0">Financial Analyst</p>
										</div>
									</div>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="shadow-lg p-3 mb-5 bg-white rounded">
								<div className="icon mb-0">
									<p>
										“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras
										mattis consectetur.”
									</p>
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Coriss Ambady</h5>
											<p className="mb-0">Financial Analyst</p>
										</div>
									</div>
								</div>
							</PreviewCard>
						</div>
						<hr />
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionSeven;
