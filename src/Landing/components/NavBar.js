import React, { useState } from "react";
import Logo from "../../layout/logo/Logo";
import { Icon } from "../../components/Component";
import { Link } from "react-router-dom";
function NavBar() {
	const [ShowNavBar, setShowNavBar] = useState(false);
	const navbarShow = () => {
		setShowNavBar(!ShowNavBar);
	};
	return (
		<React.Fragment>
			<nav className="navbar navbar-expand-lg navbar-light bg-light nk-header">
				<div className="container">
					<div className="d-flex justify-content-between align-items-center w-100 px-4 py-2">
						<div onClick={navbarShow} className="d-md-none">
							<Icon name="menu" className="h2" />
						</div>
						<div className="navbar-brand">
							<Logo />
						</div>
						<ul className="d-none d-md-flex g-5 py-md-5">
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
							<li className="dropdown dropdown-submenu dropend">
								<Link className="nav-link" to={`${process.env.PUBLIC_URL}/contact-us`}>
									Contact Us
								</Link>
							</li>
						</ul>
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
					<div className={`${ShowNavBar ? "d-flex" : "d-none"} justify-content-center w-100`}>
						<ul className="navbar-nav">
							<li className="">
								<Link className="nav-link" to={`${process.env.PUBLIC_URL}/pricing`}>
									Pricing
								</Link>
							</li>
							<li className="">
								<Link className="nav-link" to={`${process.env.PUBLIC_URL}/features`}>
									Features
								</Link>
							</li>
							<li className="">
								<Link className="nav-link" to={`${process.env.PUBLIC_URL}/contact-us`}>
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</React.Fragment>
	);
}

export default NavBar;
