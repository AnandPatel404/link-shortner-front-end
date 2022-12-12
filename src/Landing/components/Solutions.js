import React, { lazy } from "react";
import Head from "../../layout/head/Head";
import qrFeature from "../assets/img/svg/qrFeature.svg";
import passwordSvg from "../assets/img/svg/password.svg";
import analitics from "../assets/img/svg/analitics.svg";
import browser from "../assets/img/svg/browser.svg";
import mobile from "../assets/img/svg/mobile.svg";
import calendar from "../assets/img/svg/calendar.svg";
const NavBar = lazy(() => import("./NavBar"));
const Footer = lazy(() => import("./footer"));

function Solutions() {
	return (
		<div className="content-wrapper bg-light">
			<Head title="All Solutions" />
			<NavBar />
			<section className="wrapper bg-light">
				<div className="container pt-10 pb-15 pt-md-14 pb-md-20">
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ QR link and Qr With Logo</h2>
							<p className="my-4">✅ in shorterme you can create a any color QR and that not all you can create a QR with your logo</p>
							<p className="my-4">✅ with qr link you can connect with your client directly</p>
							<p className="my-4">
								✅ The client just has to scan the QR link, then the client will directly go to the link destination
							</p>
						</div>

						<div className="col-lg-6 d-flex justify-content-center">
							<img src={qrFeature} alt="heroOne" width={500} />
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={passwordSvg} alt="heroOne" width={500} />
						</div>
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Password Protected Link</h2>
							<p className="my-4">✅ Create a Password Protected link lock the your shorted link</p>
							<p className="my-4">✅ Anyone who knows this password will be able to open that link.</p>
							<p className="my-4">✅ Your link's password will save in encrypt form so other can not see your link password</p>
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Link Analysis</h2>
							<p className="my-4">✅ You can Analysis your link in shorterme</p>
							<p className="my-4">✅ like which mobile and version is using when client click on link</p>
							<p className="my-4">✅ where the click come from client location</p>
							<p className="my-4">✅ average of mobile user and desktop user on click</p>
							<p className="my-4">✅ last 7 day click chart </p>
							<p className="my-4">✅ client ip and much more</p>
						</div>
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={analitics} alt="heroOne" width={500} />
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={browser} alt="heroOne" width={500} />
						</div>
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Browser Targeting Link</h2>
							<p className="my-4">✅ You can specify the which browser can access the link and which not</p>
							<p className="my-4">✅ Here the feature is for this people, which is specially create link for some browsers.</p>
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Device Targeting Link</h2>
							<p className="my-4">✅ You can also specify the which device can access the link and which not</p>
							<p className="my-4">✅ Here the feature is for this people, which is specially create link for some device.</p>
						</div>
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={mobile} alt="heroOne" width={500} />
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={calendar} alt="heroOne" width={500} />
						</div>
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Expiration Link</h2>
							<p className="my-4">✅ You can specify the date that link will expire</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Solutions;
