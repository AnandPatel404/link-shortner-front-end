import React, { useState, useEffect } from "react";
// import HeaderImg from "../../images/bg/bg1.svg";
// import Menu from "../../layout/menu/Menu";
// import MobileMenu from "../../layout/menu/MobileMenu";
import Logo from "../../layout/logo/Logo";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { HeaderBadge, HeaderCaption, HeaderText, HeaderTitle, Header, HeaderContent, HeaderMain, HeaderWrap } from "./HeaderCaption";
// import { HeaderImage } from "../../components/images/Images";
import { BannerThreeData } from "./BannerData";

const BannerOne = (props) => {
	const [toggle, setToggle] = useState(false);
	const [offset, setOffset] = useState(0);
	const [mobileView, setMobileView] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
		window.scrollTo(0, 0);
		viewChange();
		window.addEventListener("resize", viewChange);
		return () => {
			window.removeEventListener("resize", viewChange);
		};
	}, []);

	// function to change the design view under 1200 px
	const viewChange = () => {
		if (window.innerWidth < 992) {
			setMobileView(true);
		} else {
			setMobileView(false);
		}
	};

	return (
		<Header className={props.className && props.className} id={props.id && props.id} style={{ backgroundColor: "#fef8e4" }}>
			<HeaderMain className={`header-main header-main-s1 is-sticky is-transparent on-dark ${offset > 0 ? "has-fixed" : ""}`}>
				<Container className="header-container">
					<HeaderWrap>
						<div className="header-logo">
							<Logo />
						</div>
						<div className="header-toggle" onClick={() => setToggle(!toggle)}>
							<button className={`menu-toggler ${toggle === true ? "active" : ""}`}>
								<em className="menu-on icon ni ni-menu"></em>
								<em className="menu-off icon ni ni-cross"></em>
							</button>
						</div>
						<nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}>
							{/* {!mobileView ? <Menu className="ml-lg-auto" data={BannerThreeData} /> : <MobileMenu data={BannerThreeData} />} */}
							<ul className="menu-btns">
								<li>
									<Link to="" target="_blank" rel="noreferrer" className="btn-primary btn-lg">
										Login
									</Link>
								</li>
							</ul>
						</nav>
						{toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
					</HeaderWrap>
				</Container>
			</HeaderMain>
			<HeaderContent className="my-auto py-5 is-dark">
				<Container>
					<Row className="flex-row-reverse align-items-center justify-content-between g-gs">
						<Col lg="6" className="">
							{/* <HeaderImage className="header-image-s2"><img src={HeaderImg} alt="header-img" /></HeaderImage> */}
						</Col>
						<Col lg="6">
							<HeaderCaption>
								{/* <HeaderBadge>
									<div className='badge-pro'>
										<span className='badge badge-danger badge-pill'>NEW</span>{' '}
										<span className='badge-pro-text'>Soft UI Design System PRO</span>
									</div>
								</HeaderBadge> */}
								<HeaderTitle className="text-primary">Professional &amp; Creative Design Solution</HeaderTitle>
								<HeaderText className="pr-5">
									<p>
										Nemo enim ipsam voluptatem quia volup tas sit aut aspernatur aut fugit sed quia consequuntur voluptatem
										nesciunt.
									</p>
								</HeaderText>
								<ul className="header-action btns-inline">
									<li>
										<Link
											to="https://1.envato.market/reactdashlite"
											target="_blank"
											rel="noreferrer"
											className="btn-danger btn-round btn-lg"
										>
											<span>Let's Start</span>
										</Link>
									</li>
								</ul>
							</HeaderCaption>
						</Col>
					</Row>
				</Container>
			</HeaderContent>
		</Header>
	);
};

export default BannerOne;
