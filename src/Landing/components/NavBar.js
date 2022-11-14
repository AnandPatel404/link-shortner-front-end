import React from "react";
import Logo from "../../layout/logo/Logo";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg extended navbar-light navbar-bg-light nk-header">
				<div className="container flex-lg-column">
					<div className="navbar-collapse-wrapper d-flex flex-row align-items-center my-2 w-100 justify-content-between">
						<div>
							<Logo />
						</div>
						<div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start justify-content-center">
							<div className="offcanvas-body d-flex flex-column h-100">
								<ul className="navbar-nav">
									<li className="dropdown dropdown-submenu dropend">
										<Link className="nav-link" to={`${process.env.PUBLIC_URL}/pricing`}>
											Pricing
										</Link>
									</li>
									<li className="dropdown dropdown-submenu dropend">
										<Link className="nav-link" to={`${process.env.PUBLIC_URL}/features`}>
											Features
										</Link>
									</li>

									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Projects
										</a>
									</li>
									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Blog
										</a>
										<ul className="dropdown-menu">
											<li className="nav-item">
												<a className="dropdown-item" href="./blog.html">
													Blog without Sidebar
												</a>
											</li>
											<li className="nav-item">
												<a className="dropdown-item" href="./blog2.html">
													Blog with Sidebar
												</a>
											</li>
											<li className="nav-item">
												<a className="dropdown-item" href="./blog3.html">
													Blog with Left Sidebar
												</a>
											</li>
											<li className="dropdown dropdown-submenu dropend">
												<a className="dropdown-item dropdown-toggle" href="/" data-bs-toggle="dropdown">
													Blog Posts
												</a>
												<ul className="dropdown-menu">
													<li className="nav-item">
														<a className="dropdown-item" href="./blog-post.html">
															Post without Sidebar
														</a>
													</li>
													<li className="nav-item">
														<a className="dropdown-item" href="./blog-post2.html">
															Post with Sidebar
														</a>
													</li>
													<li className="nav-item">
														<a className="dropdown-item" href="./blog-post3.html">
															Post with Left Sidebar
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="nav-item dropdown dropdown-mega">
										<a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Blocks
										</a>
										<ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
											<li className="mega-menu-content">
												<ul className="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled">
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/about.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block1.svg" alt="" />
															</div>
															<span>About</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/blog.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block2.svg" alt="" />
															</div>
															<span>Blog</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/call-to-action.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block3.svg" alt="" />
															</div>
															<span>Call to Action</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/clients.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block4.svg" alt="" />
															</div>
															<span>Clients</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/contact.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block5.svg" alt="" />
															</div>
															<span>Contact</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/facts.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block6.svg" alt="" />
															</div>
															<span>Facts</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/faq.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block7.svg" alt="" />
															</div>
															<span>FAQ</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/features.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block8.svg" alt="" />
															</div>
															<span>Features</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/footer.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block9.svg" alt="" />
															</div>
															<span>Footer</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/hero.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block10.svg" alt="" />
															</div>
															<span>Hero</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/misc.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block17.svg" alt="" />
															</div>
															<span>Misc</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/navbar.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block11.svg" alt="" />
															</div>
															<span>Navbar</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/portfolio.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block12.svg" alt="" />
															</div>
															<span>Portfolio</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/pricing.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block13.svg" alt="" />
															</div>
															<span>Pricing</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/process.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block14.svg" alt="" />
															</div>
															<span>Process</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/team.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block15.svg" alt="" />
															</div>
															<span>Team</span>
														</a>
													</li>
													<li className="col">
														<a className="dropdown-item" href="./docs/blocks/testimonials.html">
															<div className="rounded img-svg d-none d-lg-block p-4 mb-lg-2">
																<img className="rounded-0" src="./assets/img/demos/block16.svg" alt="" />
															</div>
															<span>Testimonials</span>
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li className="nav-item dropdown dropdown-mega">
										<a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown">
											Documentation
										</a>
										<ul className="dropdown-menu mega-menu">
											<li className="mega-menu-content">
												<div className="row gx-0 gx-lg-3">
													<div className="col-lg-4">
														<h6 className="dropdown-header">Usage</h6>
														<ul className="list-unstyled cc-2 pb-lg-1">
															<li>
																<a className="dropdown-item" href="./docs/index.html">
																	Get Started
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/forms.html">
																	Forms
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/faq.html">
																	FAQ
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/changelog.html">
																	Changelog
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/credits.html">
																	Credits
																</a>
															</li>
														</ul>
														<h6 className="dropdown-header mt-lg-6">Styleguide</h6>
														<ul className="list-unstyled cc-2">
															<li>
																<a className="dropdown-item" href="./docs/styleguide/colors.html">
																	Colors
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/styleguide/fonts.html">
																	Fonts
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/styleguide/icons-svg.html">
																	SVG Icons
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/styleguide/icons-font.html">
																	Font Icons
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/styleguide/illustrations.html">
																	Illustrations
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/styleguide/backgrounds.html">
																	Backgrounds
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/styleguide/misc.html">
																	Misc
																</a>
															</li>
														</ul>
													</div>

													<div className="col-lg-8">
														<h6 className="dropdown-header">Elements</h6>
														<ul className="list-unstyled cc-3">
															<li>
																<a className="dropdown-item" href="./docs/elements/accordion.html">
																	Accordion
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/alerts.html">
																	Alerts
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/animations.html">
																	Animations
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/avatars.html">
																	Avatars
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/background.html">
																	Background
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/badges.html">
																	Badges
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/buttons.html">
																	Buttons
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/card.html">
																	Card
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/carousel.html">
																	Carousel
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/dividers.html">
																	Dividers
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/form-elements.html">
																	Form Elements
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/image-hover.html">
																	Image Hover
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/image-mask.html">
																	Image Mask
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/lightbox.html">
																	Lightbox
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/player.html">
																	Media Player
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/modal.html">
																	Modal
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/pagination.html">
																	Pagination
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/progressbar.html">
																	Progressbar
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/shadows.html">
																	Shadows
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/shapes.html">
																	Shapes
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/tables.html">
																	Tables
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/tabs.html">
																	Tabs
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/text-animations.html">
																	Text Animations
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/text-highlight.html">
																	Text Highlight
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/tiles.html">
																	Tiles
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/tooltips-popovers.html">
																	Tooltips & Popovers
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="./docs/elements/typography.html">
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
						<div className="d-flex">
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
				</div>
			</nav>
		</React.Fragment>
	);
}

export default NavBar;
