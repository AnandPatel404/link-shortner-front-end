import React from "react";
import s from "../assets/img/icons/lineal/telephone-3.svg";
import v from "../assets/img/icons/lineal/shield.svg";
import g from "../assets/img/icons/lineal/cloud-computing-3.svg";
import f from "../assets/img/icons/lineal/analytics.svg";
function SectionSix() {
	return (
		<section class="wrapper bg-light">
			<div class="container pt-14 pb-12 pt-md-16 pb-md-14">
				<div class="row gx-lg-8 gx-xl-12 gy-10 mb-lg-22 mb-xl-24 align-items-center">
					<div class="col-lg-7 order-lg-2">
						<div class="row gx-md-5 gy-5">
							<div class="col-md-5 offset-md-1 align-self-end">
								<div class="card bg-pale-yellow">
									<div class="card-body">
										<img src={s} class="icon-svg icon-svg-md text-yellow mb-3" alt="" />
										<h4>24/7 Support</h4>
										<p class="mb-0">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</p>
									</div>
								</div>
							</div>

							<div class="col-md-6 align-self-end">
								<div class="card bg-pale-red">
									<div class="card-body">
										<img src={v} class="svg-inject icon-svg icon-svg-md text-red mb-3" alt="" />
										<h4>Secure Payments</h4>
										<p class="mb-0">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta.</p>
									</div>
								</div>
							</div>

							<div class="col-md-5">
								<div class="card bg-pale-leaf">
									<div class="card-body">
										<img src={g} class="svg-inject icon-svg icon-svg-md text-leaf mb-3" alt="" />
										<h4>Daily Updates</h4>
										<p class="mb-0">Nulla vitae elit libero, a pharetra augue.</p>
									</div>
								</div>
							</div>

							<div class="col-md-6 align-self-start">
								<div class="card bg-pale-primary">
									<div class="card-body">
										<img src={f} class="svg-inject icon-svg icon-svg-md text-primary mb-3" alt="" />
										<h4>Market Research</h4>
										<p class="mb-0">Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget.</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-lg-5">
						<h2 class="fs-15 text-uppercase text-muted mb-3">What We Do?</h2>
						<h3 class="display-4 mb-5">The service we offer is specifically designed to meet your needs.</h3>
						<p>
							Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit
							amet non magna. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
						</p>
						<a href="/" class="btn btn-primary rounded-pill mt-3">
							More Details
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SectionSix;
