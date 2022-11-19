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
