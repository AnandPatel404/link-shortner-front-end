import React from "react";
import targetSvg from "../assets/img/svg/target.svg";
import graf from "../assets/img/svg/graf.svg";
import dataSvg from "../assets/img/svg/data.svg";
import { PreviewCard } from "../../components/Component";
import { Link } from "react-router-dom";

function SectionSeven() {
	return (
		<section className="wrapper wrapper-border">
			<div className="container-card pt-14 pt-md-16">
				<div className="card image-wrapper shadow-lg pb-15">
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
											<img src={dataSvg} alt="" />
											<h3 className="counter">10+</h3>
											<p className="mb-0">Features</p>
										</div>

										<div className="col-md-4">
											<img src={graf} className="" alt="" />
											<h3 className="counter">Full</h3>
											<p className="mb-0">Analysis Of Link</p>
										</div>

										<div className="col-md-4">
											<img src={targetSvg} className="" alt="" />
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
							<PreviewCard className="p-3 shadow-lg mb-5 bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Custom Domain</h5>
											<p className="mb-5">Promote Your Name With Your Domain.</p>
										</div>
									</div>
									<p>Buy your name domain and configure with our site and create YourName/Link.</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="p-3 mb-5 shadow-lg bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">API Access</h5>
											<p className="mb-5">Create Link Creating Automation.</p>
										</div>
									</div>
									<p>Create Your Automation For Link And Much More All Dashboard Features Available In Api.</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="p-3 mb-5 shadow-lg bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Qr Link</h5>
											<p className="mb-5">Link that dedicated To QR</p>
										</div>
									</div>
									<p>Create Your Link As QR Link And With Your Logo And Color Of Your Choice.</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="p-3 mb-5 shadow-lg bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Custom Back-Link</h5>
											<p className="mb-5">Create Link With Your Choice Back-Link</p>
										</div>
									</div>
									<p>Create Link With Your Choice Back-Link Link YourDomain/Your-choice-back-link.</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="p-3 mb-5 shadow-lg bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Click Limit Link</h5>
											<p className="mb-5">The Limit You Can Set On The Link</p>
										</div>
									</div>
									<p>One Of The Best Features We Provide Is Click Limit Link That You Can Set On Your Link.</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="p-3 mb-5 shadow-lg bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Device Targeting Links</h5>
											<p className="mb-5">Only Specific Device Can Access Link</p>
										</div>
									</div>
									<p>You Can Also Control That Which Device Can Access Your Link Or Which Not.</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="p-3 mb-5 shadow-lg bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Browser Targeting Links</h5>
											<p className="mb-5">Only Specific Browser Can Access Link</p>
										</div>
									</div>
									<p>You Can Also Control That Which Browser Can Access Your Link Or Which Not.</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<PreviewCard className="p-3 mb-5 shadow-lg bg-white rounded">
								<div className="icon mb-0">
									<div className="blockquote-details">
										<div className="info ps-0">
											<h5 className="mb-1">Password Protected Link</h5>
											<p className="mb-5">You Can Also Set A Password To Your Link</p>
										</div>
									</div>
									<p>You Can Set Your Password To Link For Security</p>
									<Link to={`${process.env.PUBLIC_URL}/all-features`}>Read More</Link>
								</div>
							</PreviewCard>
						</div>
						<div className="item col-md-6 col-xl-3">
							<div className="icon mb-0">
								<Link to={`${process.env.PUBLIC_URL}/all-features`} className="btn btn-primary">
									See Features
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionSeven;
