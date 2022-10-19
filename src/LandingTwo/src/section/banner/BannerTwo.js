import React, { useState, useEffect } from 'react'
import {BrandLogo, Logo} from "../../components/logo/Logo"
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'
import { Col, Container, Row } from "reactstrap"
import {Header, HeaderWrap, HeaderBrand, HeaderContent, HeaderMain} from "../../layout/header/Header"
import {Link} from "../../components/button/Button"
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import { HeaderCaption, HeaderText, HeaderTitle } from '../../components/headerCaption/HeaderCaption'
import { HeaderImage } from '../../components/images/Images'
import Rating from '../../components/rating/Rating'
import { RatingText } from '../../components/review/Review'
import { NioIcon } from '../../components/icon/Icon'
import HeaderImg from '../../images/header/gfx-b.png'
import BrandLogo1 from '../../images/brand/brand-a.png'
import BrandLogo2 from '../../images/brand/brand-b.png'
import BrandLogo3 from '../../images/brand/brand-c.png'
import BrandLogo4 from '../../images/brand/brand-d.png'
import {BannerTwoData, BannerTwoIcon} from './BannerData'


const BannerTwo = (props) =>{
    const [toggle, setToggle] = useState(false);
    const [offset, setOffset] = useState(0);
    const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
    window.scrollTo(0,0);
    viewChange();
    window.addEventListener("resize", viewChange);
    return () => {
        window.removeEventListener('resize', viewChange);
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

  
    return(
        <Header className={props.className && props.className} id={props.id && props.id}>
            <HeaderMain  className={`header-main header-main-s1 is-sticky is-transparent ${offset > 0 ? "has-fixed" : ""}`}>
                <Container className='header-container'>
                    <HeaderWrap>
                        <div className="header-logo">
                            <Logo to="/IndexTwo"
                            dark ={LogoDrak2x}
                            light ={LogoLight2x}
                            />
                        </div>
                        <div className="header-toggle" onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? "active" : ""}`} data-target="mainNav"> 
                                <em className="menu-on icon ni ni-menu"></em>
                                <em className="menu-off icon ni ni-cross"></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}>
                            {!mobileView ? <Menu className="ml-lg-auto" data={BannerTwoData} /> : <MobileMenu data={BannerTwoData}/>}
                            <ul className="menu-btns">
                                <li>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg">Download the app</Link>
                                </li>
                            </ul>
                        </nav>
                        {toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>
            </HeaderMain>
            <HeaderContent className="my-auto py-5 mt-n1">
                <Container>
                    <Row className="flex-lg-row-reverse align-items-center justify-content-between g-gs">
                        <Col lg="6" className='mb-n3 mb-lg-0'>
                            <HeaderImage className="header-image-s2">
                                <img src={HeaderImg} alt="" />
                            </HeaderImage>
                        </Col>
                        <Col lg="5" md="10">
                            <HeaderCaption>
                                <div className='header-rating rating'>
                                    <Rating data={BannerTwoIcon} /> 
                                    <RatingText>30 days free trial</RatingText>
                                </div>
                                <HeaderTitle>Instantly upload any software usage nio saasbox data</HeaderTitle>
                                <HeaderText>
                                    <p>Dictum metus id fermentum efficitur. Praesent ultrices justo in feugiat condimentum. </p>
                                </HeaderText>
                                <ul className="header-action btns-inline">
                                    <li><Link to={`${process.env.PUBLIC_URL}/`} className="btn-primary btn-lg"><span>Start Free Trial</span></Link></li>
                                    <li><a href={`${process.env.PUBLIC_URL}/`} className="link link-block link-gray"><NioIcon className="icon-lg" icon="play-circle" /><span>Watch video</span></a></li>
                                </ul>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
            <HeaderBrand className="pb-4 pt-2 pb-lg-5">
                <Container>
                    <Row className='align-items-center g-gs'>
                        <Col xs="4" md="2">
                            <BrandLogo src={BrandLogo1} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo src={BrandLogo2} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo src={BrandLogo3} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo src={BrandLogo4} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo src={BrandLogo1} alt="Brand Logo" />
                        </Col>
                    </Row>
                </Container>
            </HeaderBrand>
        </Header>
    )
}

export default BannerTwo
