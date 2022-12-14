import React, { lazy } from "react";
import Head from "../../layout/head/Head";
import qrFeature from "../assets/img/svg/qrFeature.svg";
import passwordSvg from "../assets/img/svg/password.svg";
import analitics from "../assets/img/svg/analitics.svg";
import browser from "../assets/img/svg/browser.svg";
import mobile from "../assets/img/svg/mobile.svg";
import calendar from "../assets/img/svg/calendar.svg";
import fourZeroFour from "../assets/img/svg/fourzerofour.svg";
import customDomain from "../assets/img/svg/domainname.svg";
import brandedLink from "../assets/img/svg/brandedLink.svg";
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
							<h5 className="my-10">Color QR</h5>
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
							<h5 className="my-10">Color QR Link With Logo</h5>
							<p className="my-4">
								in shorterme you can create a any color and with logo QR Link and share anywhere you want this QR is contain shorted
								link and sent client to link destination and you can download qr in png form
							</p>
							<p className="my-4">This QR Used Like :-</p>
							<p className="my-4">1️⃣ You can create QR with logo that specify which brand qr is</p>
							<p className="my-4">
								2️⃣ You can set your profile photo as QR link and share anywhere that you easily interact with your client
							</p>
						</div>

						<div className="col-lg-6 d-flex justify-content-center">
							<img src={qrFeature} alt="heroOne" width={600} />
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={passwordSvg} alt="heroOne" width={500} />
						</div>
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Password Protected Link</h2>
							<h5 className="my-10">Lock the link</h5>
							<p className="my-4">
								1️⃣ create a password protected link and share anywhere, Anyone who knows this password will be able to open that link.
							</p>
							<p className="my-4">
								2️⃣ You can share your client by putting a password in your link, so that only those who have this password can see
								this link.
							</p>
							<p className="my-4">3️⃣ This link may be useful for sharing your confidential information.</p>
							<p className="my-4">
								4️⃣ Either you want to sell a product to a few people, then create password protect link and share this password to a
								few people
							</p>
							<p className="my-4">✅ Your link's password will save in encrypt form so other can not see your link password</p>
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Link Analysis</h2>
							<h5 className="my-10">Track the link footprint</h5>
							<p className="my-4">
								in shorterme we provide full link analysis and link footprint that you can understand your link and track your all
								client
							</p>
							<p className="my-4">1️⃣ You can full Analysis your link in shorterme</p>
							<p className="my-4">2️⃣ like which mobile and version is using when client click on link</p>
							<p className="my-4">3️⃣ where the click come from client location</p>
							<p className="my-4">4️⃣ average of mobile user and desktop user on click</p>
							<p className="my-4">5️⃣ last 7 day click chart </p>
							<p className="my-4">6️⃣ client ip and much more</p>
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
							<h5 className="my-10">Specific Browser Can access this link</h5>
							<p className="my-4">1️⃣ You can specify the which browser can access the link and which not</p>
							<p className="my-4">2️⃣ Here the feature is for this people, which is specially create link for some browsers.</p>
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Device Targeting Link</h2>
							<h5 className="my-10">Specific Device Can access this link</h5>
							<p className="my-4">1️⃣ You can also specify the which device can access the link and which not</p>
							<p className="my-4">2️⃣ Here the feature is for this people, which is specially create link for some device.</p>
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
							<h5 className="my-10">This link is automatically expire in your date time</h5>
							<p className="my-4">
								1️⃣ if you organize a event or like some time offer so create a expiration link and stay free this link is
								automatically expire in your given date.
							</p>
							<p className="my-4">
								2️⃣ After the time is over, your link will not go waste, you can restart it and you can change its redirection anytime.
							</p>
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Error Redirection</h2>
							<p>
								in shorterme you can create your shorted link but you can also create a error page and in case you destination link is
								down or not responding so shorted link redirect to another page so in future you don't worry about your link
							</p>
							<p className="my-4">1️⃣ if your destination link is down so it redirect to another page</p>
							<p className="my-4">2️⃣ this error page work on this errors like 400 error , 404 error , 500 error , 401 error</p>
						</div>
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={fourZeroFour} alt="heroOne" width={500} />
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={customDomain} alt="heroOne" width={500} />
						</div>
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Custom Domain</h2>
							<p>
								in shorterme you can create your shorted link with brand name domain name simply connect your domain with our ip and
								that's all now you can create your shorted link
							</p>
							<p className="my-4">1️⃣ if your brand domain has no back link so it redirect to domain root link</p>
							<p className="my-4">2️⃣ you also enable and disable custom domain</p>
						</div>
					</div>
					<div className="row mb-5 align-items-center">
						<div className="col-md-10 offset-md-1 offset-lg-0 col-lg-6 text-center text-lg-start order-2 order-lg-0">
							<h2 className="mb-5 mx-md-n5 mx-lg-0">⭐ Custom Branded Link</h2>
							<p>
								in shorterme you can create your shorted link with brand name domain name simply connect your domain with our ip and
								that's all now you can create your shorted link
							</p>
							<p className="my-4">1️⃣ if your brand domain has no back link so it redirect to domain root link</p>
							<p className="my-4">2️⃣ you also enable and disable custom domain</p>
						</div>
						<div className="col-lg-6 d-flex justify-content-center">
							<img src={brandedLink} alt="heroOne" width={500} />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Solutions;
