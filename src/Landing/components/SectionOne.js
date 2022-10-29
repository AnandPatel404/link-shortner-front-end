import React from "react";
import img from "../assets/img/svg/grow.svg";
function SectionOne() {
	return (
		<section class="wrapper bg-light">
			<div class="container pt-10 pb-15 pt-md-14 pb-md-20">
				<div class="row gx-lg-8 gx-xl-12 gy-10 mb-5 align-items-center">
					<div
						class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0"
						data-cues="slideInDown"
						data-group="page-title"
						data-delay="600"
					>
						<h1 class="display-1 mb-5 mx-md-n5 mx-lg-0">Grow Your Business with Our Link Solutions</h1>
						<p class="lead fs-lg mb-7">We specialize in web, mobile and identity design. We love to turn ideas into beautiful things.</p>
						<div
							class="d-flex justify-content-center justify-content-lg-start"
							data-cues="slideInDown"
							data-group="page-title-buttons"
							data-delay="900"
						>
							<span>
								<a class="btn btn-primary rounded me-2" href="/">
									See Projects
								</a>
							</span>
							<span>
								<a class="btn btn-yellow rounded" href="/">
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
	);
}

export default SectionOne;
