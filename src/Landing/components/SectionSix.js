import React, { lazy } from "react";
import manPixal from "../assets/img/manypixelOne.png";
import flexiple from "../assets/img/flexiple.png";
import storySet from "../assets/img/stroyset.png";
import fontawosam from "../assets/img/fontawosamOne.png";
import bootstrap from "../assets/img/bootstrapOne.png";
import thinkwhat from "../assets/img/razorpay.png";
const NavBar = lazy(() => import("./NavBar"));
const Footer = lazy(() => import("./footer"));
function SectionSix() {
	return (
		<section class="wrapper bg-light">
			<NavBar />
			<div className="container pt-md-14 text-center">
				<div className="row">
					<div className="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13">
						<h3 className="mb-4">Special Thanks To This Company Who Make Our Work Easy</h3>
						<hr />
						<p className=" px-xl-12 px-xxl-6 mb-7">We Appreciate Other Work And Other Company Who Make Our Work Easy</p>
					</div>
				</div>
			</div>
			<div class="container py-14 py-md-16">
				<div class="grid grid-view projects-masonry">
					<div class="row gx-md-8 gy-10 gy-md-13 isotope">
						<div class="project item col-md-6 col-xl-4 product">
							<a href="https://www.manypixels.co/" target="_blank" rel="noreferrer">
								{" "}
								<img src={manPixal} alt="" width={300} />
							</a>
						</div>

						<div class="project item col-md-6 col-xl-4 workshop">
							<a href="https://flexiple.com/illustrations/" target="_blank" rel="noreferrer">
								{" "}
								<img src={flexiple} alt="" width={300} />
							</a>
						</div>

						<div class="project item col-md-6 col-xl-4 still-life">
							<a href="https://storyset.com/" target="_blank" rel="noreferrer">
								{" "}
								<img src={storySet} alt="" width={300} />
							</a>
						</div>

						<div class="project item col-md-6 col-xl-4 product">
							<a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
								{" "}
								<img src={fontawosam} alt="" width={400} />
							</a>
						</div>

						<div class="project item col-md-6 col-xl-4 product">
							<a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
								{" "}
								<img src={bootstrap} alt="" width={300} />
							</a>
						</div>
						<div class="project item col-md-6 col-xl-4 product">
							<a href="https://razorpay.com/" target="_blank" rel="noreferrer">
								{" "}
								<img src={thinkwhat} alt="" width={400} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}

export default SectionSix;
