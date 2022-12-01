import React, { lazy } from "react";
import { Link } from "react-router-dom";
import Head from "../../layout/head/Head";
import img from "../../images/svg/www-bro.svg";
const NavBar = lazy(() => import("./NavBar"));
const SectionTwo = lazy(() => import("./SectionTwo"));
const SectionThree = lazy(() => import("./SectionThree"));
const SectionFour = lazy(() => import("./SectionFour"));
const SectionFive = lazy(() => import("./SectionFive"));
const SectionSeven = lazy(() => import("./SectionSeven"));
const Footer = lazy(() => import("./footer"));

function SectionOne() {
	return (
		<div className="content-wrapper bg-light">
			<Head title="Home" />
			<NavBar />
			<section className="wrapper bg-light">
				<div className="container pt-10 pb-15 pt-md-14 pb-md-20">
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">
								Relax And
								<br /> Grow And Manage Your Link Business with Our Link Solutions
							</h2>
							<p className="my-7">
								Link Management Platform With All Features You Need In One Place. Short, brand, Manage Links And Track Your Links In
								Easy Way.
							</p>
							<div className="d-flex justify-content-center justify-content-lg-start">
								<span>
									<Link className="btn btn-primary rounded me-2" to={`${process.env.PUBLIC_URL}/auth-send-otp`}>
										Start Free Trail
									</Link>
									<Link className="btn btn-primary btn-dim rounded me-2" to={`${process.env.PUBLIC_URL}/auth-login`}>
										Log-in
									</Link>
								</span>
							</div>
						</div>

						<div className="col-lg-6 d-flex justify-content-center">
							<img src={img} alt="heroOne" width={500} />
						</div>
					</div>
				</div>
			</section>
			<SectionThree />
			<SectionSeven />
			<SectionTwo />
			<SectionFour />
			<SectionFive />
			<Footer />
		</div>
	);
}

export default SectionOne;
