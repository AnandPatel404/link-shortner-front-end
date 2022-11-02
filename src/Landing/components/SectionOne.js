import React, { lazy } from "react";
import img from "../assets/img/svg/growtwo.svg";
const NavBar = lazy(() => import("./NavBar"));
const SectionTwo = lazy(() => import("./SectionTwo"));
const SectionThree = lazy(() => import("./SectionThree"));
const SectionFour = lazy(() => import("./SectionFour"));
const SectionFive = lazy(() => import("./SectionFive"));
const SectionSix = lazy(() => import("./SectionSix"));
const Footer = lazy(() => import("./footer"));

function SectionOne() {
	return (
		<div class="content-wrapper bg-light">
			<NavBar />
			<section class="wrapper bg-light">
				<div class="container pt-10 pb-15 pt-md-14 pb-md-20">
					<div class="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
						<div
							class="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0"
							data-cues="slideInDown"
							data-group="page-title"
							data-delay="600"
						>
							<h1 class=" mb-5 mx-md-n5 mx-lg-0">Grow Your Business with Our Link Solutions</h1>
							<p class=" mb-7">
								Link Management Platform with all features you need in one place. Shorten, brand, manage and track your links the easy
								way.
							</p>
							<div
								class="d-flex justify-content-center justify-content-lg-start"
								data-cues="slideInDown"
								data-group="page-title-buttons"
								data-delay="900"
							>
								<span>
									<a class="btn btn-primary rounded me-2" href="/">
										Learn More
									</a>
								</span>
							</div>
						</div>

						<div class="col-lg-6 d-flex justify-content-center">
							<img src={img} alt="heroOne" width={600} />
						</div>
					</div>
				</div>
			</section>
			<SectionThree />
			<SectionTwo />
			<SectionFour />
			<SectionFive />
			<SectionSix />
			<Footer />
		</div>
	);
}

export default SectionOne;
