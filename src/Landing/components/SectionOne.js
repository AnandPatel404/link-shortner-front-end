import React, { lazy } from "react";
import { Link } from "react-router-dom";
import Head from "../../layout/head/Head";
import qrFeature from "../assets/img/svg/qrFeature.svg";
import img from "../../images/svg/www-bro.svg";
import browser from "../assets/img/svg/browser.svg";
import analitics from "../assets/img/svg/analitics.svg";
import api from "../assets/img/carbon.png";
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
			<div className="container pt-10 pb-15 pt-md-14 pb-md-20">
				<h2 className="fs-16 text-uppercase text-muted my-10 text-center">Some feature information</h2>
				<div className="row my-10 align-items-center">
					<div className="col-lg-6 d-flex justify-content-center">
						<img src={api} alt="heroOne" width={500} />
					</div>
					<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-left text-lg-start order-2 order-lg-0">
						<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Developer-friendly API.</h2>
						<h5 className="my-10">benefits</h5>
						<p className="my-4">
							1️⃣ Shorterme api is developer-friendly api that you can easily create your link creating automation and create bulk of
							link in just minute
						</p>
						<p className="my-4">2️⃣ you can easily create link without visit the shorterme and without login</p>
						<p className="my-4">3️⃣ you can easily access most of feature in api that that's why you don't needs to login</p>
						<div className="icon mb-0">
							<Link to={`${process.env.PUBLIC_URL}/all-features`} className="btn btn-primary">
								See All Features
							</Link>
						</div>
					</div>
				</div>
				<div className="row my-10 align-items-center">
					<div className="col-lg-6 d-flex justify-content-center">
						<img src={qrFeature} alt="heroOne" width={600} />
					</div>
					<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-left text-lg-start order-2 order-lg-0">
						<h2 className="mb-5 mx-md-n5 mx-lg-0">QR link and Qr With Logo</h2>
						<p className="my-4">
							in shorterme you can create a any color QR Link and share anywhere you want this QR is contain shorted link and sent
							client to link destination and you can download qr in png form
						</p>
						<p className="my-4">This QR Used Like :-</p>
						<p className="my-4">
							1️⃣ You can create your particular e-commerce product QR and send to client and users that can redirect directly to
							destination
						</p>
						<p className="my-4">
							2️⃣ Create your facebook or instagram profile and page QR link that your friend and user can redirect directly to
							destination
						</p>
						<div className="icon mb-0">
							<Link to={`${process.env.PUBLIC_URL}/all-features`} className="btn btn-primary">
								See All Features
							</Link>
						</div>
					</div>
				</div>
				<div className="row my-10 align-items-center">
					<div className="col-lg-6 d-flex justify-content-center align-items-center">
						<img src={analitics} alt="heroOne" width={700} />
					</div>
					<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-left text-lg-start order-2 order-lg-0">
						<h2 className="mb-5 mx-md-n5 mx-lg-0">Link Analysis</h2>
						<p className="my-4">
							in shorterme we provide full link analysis and link footprint that you can understand your link and track your all client
						</p>
						<p className="my-4">1️⃣ You can full Analysis your link in shorterme</p>
						<p className="my-4">2️⃣ like which mobile and version is using when client click on link</p>
						<p className="my-4">3️⃣ where the click come from client location</p>
						<p className="my-4">4️⃣ average of mobile user and desktop user on click</p>
						<p className="my-4">5️⃣ last 7 day click chart </p>
						<p className="my-4">6️⃣ client ip and much more</p>
						<div className="icon mb-0">
							<Link to={`${process.env.PUBLIC_URL}/all-features`} className="btn btn-primary">
								See All Features
							</Link>
						</div>
					</div>
				</div>
				<div className="row my-10 align-items-center">
					<div className="col-lg-6 d-flex justify-content-center">
						<img src={browser} alt="heroOne" width={500} />
					</div>
					<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-left text-lg-start order-2 order-lg-0">
						<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Browser Targeting Link</h2>
						<h5 className="my-10">Specific Browser Can access this link</h5>
						<p className="my-4">1️⃣ You can specify the which browser can access the link and which not</p>
						<p className="my-4">2️⃣ Here the feature is for this people, which is specially create link for some browsers.</p>
						<div className="icon mb-0">
							<Link to={`${process.env.PUBLIC_URL}/all-features`} className="btn btn-primary">
								See All Features
							</Link>
						</div>
					</div>
				</div>
			</div>
			<SectionFour />
			<SectionTwo />
			<SectionFive />
			<Footer />
		</div>
	);
}

export default SectionOne;
