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

					<div class="navbar-collapse-wrapper bg-white d-flex flex-row align-items-center justify-content-between bg-soft-primary">
						<Logo />
						<div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start justify-content-center">
							<div class="offcanvas-body d-flex flex-column h-100">
								<ul class="navbar-nav">
									<li class="dropdown dropdown-submenu dropend">
										<Link class="nav-link" to="/pricing">
											Pricing
										</Link>
									</li>
									<li class="nav-item dropdown dropdown-mega">
										<Link class="nav-link dropdown-toggle" to="/" data-bs-toggle="dropdown">
											Home
										</Link>
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
