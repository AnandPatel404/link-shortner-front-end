import React from "react";
// import a from "../assets/img/photos/sa1.jpg";
function SectionFive() {
	return (
		<div>
			<section class="wrapper bg-soft-primary">
				<div class="container pt-md-14 pb-md-20 text-center">
					<div class="row">
						<div class="col-md-10 col-lg-8 col-xl-8 col-xxl-6 mx-auto mb-13" data-cues="slideInDown" data-group="page-title">
							<h1 class="display-1 mb-4">Staying on top of your bills never been this easy</h1>
							<p class="lead fs-lg px-xl-12 px-xxl-6 mb-7">
								Easily achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.
							</p>
							<div class="d-flex justify-content-center" data-cues="slideInDown" data-group="page-title-buttons" data-delay="600">
								<span>
									<a class="btn btn-primary rounded mx-1" href="/">
										Get Started
									</a>
								</span>
								<span>
									<a class="btn btn-green rounded mx-1" href="/">
										Free Trial
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div class="container">
				<div class="row gx-0 mb-16 mb-mb-20">
					<div class="col-9 col-sm-10 col-lg-9 mx-auto mt-n15 mt-md-n20">
						{/* <img class="img-fluid mx-auto rounded shadow-lg" data-cue="slideInUp" src={a} alt="" /> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default SectionFive;
