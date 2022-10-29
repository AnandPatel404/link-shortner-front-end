import React, { lazy } from "react";
import img from "../assets/img/svg/grow.svg";
import NavBar from "./NavBar";
import "../style.css";
const SectionTwo = lazy(() => import("./SectionTwo"));
const SectionThree = lazy(() => import("./SectionThree"));
const SectionFour = lazy(() => import("./SectionFour"));
const SectionFive = lazy(() => import("./SectionFive"));
const SectionSix = lazy(() => import("./SectionSix"));
const Footer = lazy(() => import("./footer"));

function SectionOne() {
	return (
		<div class="content-wrapper bg-soft-primary">
			<NavBar />
			<section class="wrapper bg-soft-primary">
				<div class="container pt-10 pb-15 pt-md-14 pb-md-20">
					<div class="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
						<div
							class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0"
							data-cues="slideInDown"
							data-group="page-title"
							data-delay="600"
						>
							<h1 class="display-1 mb-5 mx-md-n5 mx-lg-0">Grow Your Business with Our Link Solutions</h1>
							<p class="lead fs-lg mb-7">
								We specialize in web, mobile and identity design. We love to turn ideas into beautiful things.
							</p>
							<div
								class="d-flex justify-content-center justify-content-lg-start"
								data-cues="slideInDown"
								data-group="page-title-buttons"
								data-delay="900"
							>
								<span>
									<a class="btn btn-primary btn-dim rounded me-2" href="/">
										Learn More
									</a>
								</span>
							</div>
						</div>

						<div class="col-lg-7 d-flex justify-content-center">
							{/* <figure> */}
							<img src={img} alt="heroOne" width={650} />
							{/* </figure> */}
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
