import React from "react";
import imgOne from "../assets/img/svg/reach.svg";
import imgTwo from "../assets/img/svg/collect.svg";
import imgThree from "../assets/img/svg/password.svg";
import imgFour from "../assets/img/svg/time.svg";
import imgFive from "../assets/img/illustrations/i18.png";
import NavBar from "./NavBar";
import { Icon } from "../../components/Component";

function Features() {
	return (
		<div class="content-wrapper">
			<NavBar />
			<section class="wrapper bg-light">
				<div class="container py-14 py-md-16">
					<div class="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center">
						<div class="col-lg-6 position-relative">
							<figure class="rounded mb-0">
								<img src={imgOne} alt="heroimg" />
							</figure>
						</div>

						<div class="col-lg-6">
							<h3 class="display-4 mb-4">Reach Popple With Your Brand</h3>
							<p class="mb-5">
								Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
								facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus
								mollis interdum. Maecenas sed diam eget risus varius.
							</p>
							<div class="row gy-3">
								<div class="col-xl-6">
									<ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
										<li>
											<span>
												<Icon name="check" />
											</span>
											<span>Aenean quam ornare curabitur blandit consectetur.</span>
										</li>
										<li class="mt-3">
											<span>
												<Icon name="check" />
											</span>
											<span>Nullam quis risus eget urna mollis ornare aenean leo.</span>
										</li>
									</ul>
								</div>

								<div class="col-xl-6">
									<ul class="icon-list bullet-bg bullet-soft-leaf mb-0">
										<li>
											<span>
												<Icon name="check" />
											</span>
											<span>Etiam porta euismod malesuada mollis nisl ornare sem.</span>
										</li>
										<li class="mt-3">
											<span>
												<Icon name="check" />
											</span>
											<span>Vivamus sagittis lacus augue rutrum maecenas.</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
						<div class="col-lg-6 order-lg-2 position-relative">
							<figure class="rounded mb-0">
								<img src={imgTwo} alt="heroimg" />{" "}
							</figure>
						</div>

						<div class="col-lg-6">
							<h3 class="display-4 mb-4">Analytics you client clicked</h3>
							<p class="mb-5">
								Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
								facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
							</p>
							<div class="row gy-3">
								<div class="col-xl-6">
									<ul class="icon-list bullet-bg bullet-soft-aqua mb-0">
										<li>
											<span>
												<Icon name="check" />
											</span>
											<span>Aenean quam ornare curabitur blandit consectetur.</span>
										</li>
										<li class="mt-3">
											<span>
												<Icon name="check" />
											</span>
											<span>Nullam quis risus eget urna mollis ornare aenean leo.</span>
										</li>
									</ul>
								</div>

								<div class="col-xl-6">
									<ul class="icon-list bullet-bg bullet-soft-aqua mb-0">
										<li>
											<span>
												<Icon name="check" />
											</span>
											<span>Etiam porta euismod malesuada mollis nisl ornare sem.</span>
										</li>
										<li class="mt-3">
											<span>
												<Icon name="check" />
											</span>
											<span>Vivamus sagittis lacus augue rutrum maecenas.</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container py-14 py-md-16">
					<div class="row text-center">
						<div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
							<h2 class="fs-16 text-uppercase text-primary mb-3">Other Features</h2>
							<h3 class="display-3 mb-10 px-xxl-10">The service we offer is specifically designed to meet your needs.</h3>
						</div>
					</div>
					<div class="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end">
						<div class="col-lg-4">
							<div class="px-md-15 px-lg-3">
								<img src={imgThree} alt="" width={300} />

								<h3>Password link</h3>
								<p class="mb-2">
									Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.
								</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="px-md-15 px-lg-3">
								<img src={imgFour} width={300} alt="" />

								<h3>Expiration Link</h3>
								<p class="mb-2">
									Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.
								</p>
							</div>
						</div>
						<div class="col-lg-4">
							<div class="px-md-15 px-lg-3">
								<figure class="mb-6">
									<img class="img-fluid" src={imgFive} alt="" />
								</figure>
								<h3>3D Animation</h3>
								<p class="mb-2">
									Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Features;
