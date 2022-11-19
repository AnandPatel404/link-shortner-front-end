import React, { lazy } from "react";
import img from "../assets/img/svg/growthree.svg";
const NavBar = lazy(() => import("./NavBar"));
const SectionTwo = lazy(() => import("./SectionTwo"));
const SectionThree = lazy(() => import("./SectionThree"));
const SectionFour = lazy(() => import("./SectionFour"));
const SectionFive = lazy(() => import("./SectionFive"));
const SectionSix = lazy(() => import("./SectionSix"));
const Footer = lazy(() => import("./footer"));

function SectionOne() {
	return (
		<div className="content-wrapper bg-light">
			<NavBar />
			<section className="wrapper bg-light">
				<div className="container pt-10 pb-15 pt-md-14 pb-md-20">
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">Grow Your Link Business with Our Link Solutions</h2>
							<p className="my-7">
								Link Management Platform With All Features You Need In One Place. Short, brand, Manage Links And Track Your Links In
								Easy Way.
							</p>
							<div className="d-flex justify-content-center justify-content-lg-start">
								<span>
									<a className="btn btn-primary rounded me-2" href="/">
										Learn More
									</a>
								</span>
							</div>
						</div>

						<div className="col-lg-6 d-flex justify-content-center">
							<img src={img} alt="heroOne" />
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
