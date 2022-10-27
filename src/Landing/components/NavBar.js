import React from "react";
import Logo from "../../layout/logo/Logo";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<React.Fragment>
			<nav class="navbar navbar-expand-lg extended navbar-light navbar-bg-light caret-none">
				<div class="container flex-lg-column">
					<div class="topbar d-flex flex-row w-100 justify-content-between align-items-center">
						<div class="navbar-brand"></div>
						<div class="navbar-other ms-auto"></div>
					</div>

					<div class="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center justify-content-between">
						<Logo />
						<div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start justify-content-center">
							{/* <div class="offcanvas-header d-lg-none">
								<h3 class="text-white fs-30 mb-0">Sandbox</h3>
								<button type="button" class="btn-close btn-close-white"></button>
							</div> */}
							<div class="offcanvas-body d-flex flex-column h-100">
								<ul class="navbar-nav">
									<li class="nav-item dropdown dropdown-mega">
										<a class="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Demos
										</a>
										{/* <ul class="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
						  <li class="mega-menu-content mega-menu-scroll"> */}
										{/* <ul class="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled">
							  <li class="col"><a class="dropdown-item" href="./demo1.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi1.jpg" srcset="./assets/img/demos/mi1@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo I</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo2.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi2.jpg" srcset="./assets/img/demos/mi2@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo II</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo3.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi3.jpg" srcset="./assets/img/demos/mi3@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo III</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo4.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi4.jpg" srcset="./assets/img/demos/mi4@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo IV</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo5.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi5.jpg" srcset="./assets/img/demos/mi5@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo V</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo6.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi6.jpg" srcset="./assets/img/demos/mi6@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo VI</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo7.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi7.jpg" srcset="./assets/img/demos/mi7@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo VII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo8.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi8.jpg" srcset="./assets/img/demos/mi8@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo VIII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo9.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi9.jpg" srcset="./assets/img/demos/mi9@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo IX</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo10.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi10.jpg" srcset="./assets/img/demos/mi10@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo X</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo11.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi11.jpg" srcset="./assets/img/demos/mi11@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XI</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo12.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi12.jpg" srcset="./assets/img/demos/mi12@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo13.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi13.jpg" srcset="./assets/img/demos/mi13@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XIII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo14.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi14.jpg" srcset="./assets/img/demos/mi14@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XIV</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo15.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi15.jpg" srcset="./assets/img/demos/mi15@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XV</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo16.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi16.jpg" srcset="./assets/img/demos/mi16@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XVI</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo17.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi17.jpg" srcset="./assets/img/demos/mi17@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XVII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo18.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi18.jpg" srcset="./assets/img/demos/mi18@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XVIII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo19.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi19.jpg" srcset="./assets/img/demos/mi19@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XIX</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo20.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi20.jpg" srcset="./assets/img/demos/mi20@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XX</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo21.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi21.jpg" srcset="./assets/img/demos/mi21@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XXI</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo22.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi22.jpg" srcset="./assets/img/demos/mi22@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XXII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo23.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi23.jpg" srcset="./assets/img/demos/mi23@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XXIII</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo24.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi24.jpg" srcset="./assets/img/demos/mi24@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XXIV</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo25.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi25.jpg" srcset="./assets/img/demos/mi25@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XXV</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo26.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi26.jpg" srcset="./assets/img/demos/mi26@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XXVI</span>
								</a></li>
							  <li class="col"><a class="dropdown-item" href="./demo27.html">
								  <figure class="rounded lift d-none d-lg-block"><img src="./assets/img/demos/mi27.jpg" srcset="./assets/img/demos/mi27@2x.jpg 2x" alt=""></figure>
								  <span class="d-lg-none">Demo XXVII</span>
								</a></li>
							</ul> */}

										{/* <span class="d-none d-lg-flex"><i class="uil uil-direction"></i><strong>Scroll to view more</strong></span>
						  </li>

						</ul> */}
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Pages
										</a>
										<ul class="dropdown-menu">
											<li class="dropdown dropdown-submenu dropend">
												<a class="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													Services
												</a>
												<ul class="dropdown-menu">
													<li class="nav-item">
														<a class="dropdown-item" href="./services.html">
															Services I
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./services2.html">
															Services II
														</a>
													</li>
												</ul>
											</li>
											<li class="dropdown dropdown-submenu dropend">
												<a class="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													About
												</a>
												<ul class="dropdown-menu">
													<li class="nav-item">
														<a class="dropdown-item" href="./about.html">
															About I
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./about2.html">
															About II
														</a>
													</li>
												</ul>
											</li>
											<li class="dropdown dropdown-submenu dropend">
												<a class="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													Shop
												</a>
												<ul class="dropdown-menu">
													<li class="nav-item">
														<a class="dropdown-item" href="./shop.html">
															Shop I
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./shop2.html">
															Shop II
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./shop-product.html">
															Product Page
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./shop-cart.html">
															Shopping Cart
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./shop-checkout.html">
															Checkout
														</a>
													</li>
												</ul>
											</li>
											<li class="dropdown dropdown-submenu dropend">
												<a class="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													Contact
												</a>
												<ul class="dropdown-menu">
													<li class="nav-item">
														<a class="dropdown-item" href="./contact.html">
															Contact I
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./contact2.html">
															Contact II
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./contact3.html">
															Contact III
														</a>
													</li>
												</ul>
											</li>
											<li class="dropdown dropdown-submenu dropend">
												<a class="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													Career
												</a>
												<ul class="dropdown-menu">
													<li class="nav-item">
														<a class="dropdown-item" href="./career.html">
															Job Listing I
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./career2.html">
															Job Listing II
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./career-job.html">
															Job Description
														</a>
													</li>
												</ul>
											</li>
											<li class="dropdown dropdown-submenu dropend">
												<a class="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													Utility
												</a>
												<ul class="dropdown-menu">
													<li class="nav-item">
														<a class="dropdown-item" href="./404.html">
															404 Not Found
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./page-loader.html">
															Page Loader
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./signin.html">
															Sign In I
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./signin2.html">
															Sign In II
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./signup.html">
															Sign Up I
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./signup2.html">
															Sign Up II
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./terms.html">
															Terms
														</a>
													</li>
												</ul>
											</li>
											<li class="nav-item">
												<a class="dropdown-item" href="./pricing.html">
													Pricing
												</a>
											</li>
											<li class="nav-item">
												<a class="dropdown-item" href="./onepage.html">
													One Page
												</a>
											</li>
										</ul>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Projects
										</a>
										<div class="dropdown-menu dropdown-lg">
											<div class="dropdown-lg-content">
												<div>
													<h6 class="dropdown-header">Project Pages</h6>
													<ul class="list-unstyled">
														<li>
															<a class="dropdown-item" href="./projects.html">
																Projects I
															</a>
														</li>
														<li>
															<a class="dropdown-item" href="./projects2.html">
																Projects II
															</a>
														</li>
														<li>
															<a class="dropdown-item" href="./projects3.html">
																Projects III
															</a>
														</li>
														<li>
															<a class="dropdown-item" href="./projects4.html">
																Projects IV
															</a>
														</li>
													</ul>
												</div>

												<div>
													<h6 class="dropdown-header">Single Projects</h6>
													<ul class="list-unstyled">
														<li>
															<a class="dropdown-item" href="./single-project.html">
																Single Project I
															</a>
														</li>
														<li>
															<a class="dropdown-item" href="./single-project2.html">
																Single Project II
															</a>
														</li>
														<li>
															<a class="dropdown-item" href="./single-project3.html">
																Single Project III
															</a>
														</li>
														<li>
															<a class="dropdown-item" href="./single-project4.html">
																Single Project IV
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li class="nav-item dropdown">
										<a class="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Blog
										</a>
										<ul class="dropdown-menu">
											<li class="nav-item">
												<a class="dropdown-item" href="./blog.html">
													Blog without Sidebar
												</a>
											</li>
											<li class="nav-item">
												<a class="dropdown-item" href="./blog2.html">
													Blog with Sidebar
												</a>
											</li>
											<li class="nav-item">
												<a class="dropdown-item" href="./blog3.html">
													Blog with Left Sidebar
												</a>
											</li>
											<li class="dropdown dropdown-submenu dropend">
												<a class="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													Blog Posts
												</a>
												<ul class="dropdown-menu">
													<li class="nav-item">
														<a class="dropdown-item" href="./blog-post.html">
															Post without Sidebar
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./blog-post2.html">
															Post with Sidebar
														</a>
													</li>
													<li class="nav-item">
														<a class="dropdown-item" href="./blog-post3.html">
															Post with Left Sidebar
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li class="nav-item dropdown dropdown-mega">
										<a class="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Blocks
										</a>
										<ul class="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
											<li class="mega-menu-content">
												<ul class="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/about.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block1.svg" alt="" />
															</div>
															<span>About</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/blog.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block2.svg" alt="" />
															</div>
															<span>Blog</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/call-to-action.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block3.svg" alt="" />
															</div>
															<span>Call to Action</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/clients.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block4.svg" alt="" />
															</div>
															<span>Clients</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/contact.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block5.svg" alt="" />
															</div>
															<span>Contact</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/facts.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block6.svg" alt="" />
															</div>
															<span>Facts</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/faq.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block7.svg" alt="" />
															</div>
															<span>FAQ</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/features.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block8.svg" alt="" />
															</div>
															<span>Features</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/footer.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block9.svg" alt="" />
															</div>
															<span>Footer</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/hero.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block10.svg" alt="" />
															</div>
															<span>Hero</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/misc.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block17.svg" alt="" />
															</div>
															<span>Misc</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/navbar.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block11.svg" alt="" />
															</div>
															<span>Navbar</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/portfolio.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block12.svg" alt="" />
															</div>
															<span>Portfolio</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/pricing.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block13.svg" alt="" />
															</div>
															<span>Pricing</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/process.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block14.svg" alt="" />
															</div>
															<span>Process</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/team.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block15.svg" alt="" />
															</div>
															<span>Team</span>
														</a>
													</li>
													<li class="col">
														<a class="dropdown-item" href="./docs/blocks/testimonials.html">
															<div class="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img class="rounded-0" src="./assets/img/demos/block16.svg" alt="" />
															</div>
															<span>Testimonials</span>
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li class="nav-item dropdown dropdown-mega">
										<a class="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Documentation
										</a>
										<ul class="dropdown-menu mega-menu">
											<li class="mega-menu-content">
												<div class="row gx-0 gx-lg-3">
													<div class="col-lg-4">
														<h6 class="dropdown-header">Usage</h6>
														<ul class="list-unstyled cc-2 pb-lg-1">
															<li>
																<a class="dropdown-item" href="./docs/index.html">
																	Get Started
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/forms.html">
																	Forms
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/faq.html">
																	FAQ
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/changelog.html">
																	Changelog
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/credits.html">
																	Credits
																</a>
															</li>
														</ul>
														<h6 class="dropdown-header mt-lg-6">Styleguide</h6>
														<ul class="list-unstyled cc-2">
															<li>
																<a class="dropdown-item" href="./docs/styleguide/colors.html">
																	Colors
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/styleguide/fonts.html">
																	Fonts
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/styleguide/icons-svg.html">
																	SVG Icons
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/styleguide/icons-font.html">
																	Font Icons
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/styleguide/illustrations.html">
																	Illustrations
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/styleguide/backgrounds.html">
																	Backgrounds
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/styleguide/misc.html">
																	Misc
																</a>
															</li>
														</ul>
													</div>

													<div class="col-lg-8">
														<h6 class="dropdown-header">Elements</h6>
														<ul class="list-unstyled cc-3">
															<li>
																<a class="dropdown-item" href="./docs/elements/accordion.html">
																	Accordion
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/alerts.html">
																	Alerts
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/animations.html">
																	Animations
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/avatars.html">
																	Avatars
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/background.html">
																	Background
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/badges.html">
																	Badges
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/buttons.html">
																	Buttons
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/card.html">
																	Card
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/carousel.html">
																	Carousel
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/dividers.html">
																	Dividers
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/form-elements.html">
																	Form Elements
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/image-hover.html">
																	Image Hover
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/image-mask.html">
																	Image Mask
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/lightbox.html">
																	Lightbox
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/player.html">
																	Media Player
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/modal.html">
																	Modal
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/pagination.html">
																	Pagination
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/progressbar.html">
																	Progressbar
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/shadows.html">
																	Shadows
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/shapes.html">
																	Shapes
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/tables.html">
																	Tables
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/tabs.html">
																	Tabs
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/text-animations.html">
																	Text Animations
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/text-highlight.html">
																	Text Highlight
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/tiles.html">
																	Tiles
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/tooltips-popovers.html">
																	Tooltips & Popovers
																</a>
															</li>
															<li>
																<a class="dropdown-item" href="./docs/elements/typography.html">
																	Typography
																</a>
															</li>
														</ul>
													</div>
												</div>
											</li>
										</ul>
									</li>
								</ul>
							</div>
						</div>
						<div className="mx-2">
							<Link to={`${process.env.PUBLIC_URL}/auth-login`} className="btn btn-primary">
								Login
							</Link>
						</div>
						<div className="mx-2">
							<Link to={`${process.env.PUBLIC_URL}/auth-send-otp`} className="btn btn-dim btn-primary">
								Sign up
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default NavBar;
