import React, { useState, useEffect } from 'react'
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'
import HeaderImg from '../../images/header/gfx-b.png'
import BrandLogo1 from '../../images/brand/a.png'
import BrandLogo2 from '../../images/brand/b.png'
import BrandLogo3 from '../../images/brand/c.png'
import BrandLogo4 from '../../images/brand/d.png'
import BrandLogo5 from '../../images/brand/e.png'
import BrandLogo6 from '../../images/brand/f.png'
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import { BrandLogo, Logo } from "../../components/logo/Logo"
import { Col, Container, Row } from "reactstrap"
import { Header, HeaderBrand, HeaderContent, HeaderMain, HeaderWrap } from "../../layout/header/Header"
import {Link} from "../../components/button/Button"
import { HeaderBadge, HeaderCaption, HeaderText, HeaderTitle } from '../../components/headerCaption/HeaderCaption'
import { BannerSixData } from './BannerData'
import ModalVideo from 'react-modal-video'
import { NioIcon } from '../../components/icon/Icon'
import { HeaderImage } from '../../components/images/Images'

const BannerSix = (props) =>{
    const [isOpen, setOpen] = useState(false)
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
        <Header className={props.className && props.className} id={props.id && props.id} >
            <HeaderMain className={`header-main-s1 is-sticky is-transparent on-dark ${offset > 0 ? "has-fixed" : ""}`}>
                <Container className='header-container'>
                    <HeaderWrap>
                        <div className="header-logo">
                            <Logo to="/IndexThree"
                            dark ={LogoDrak2x}
                            light ={LogoLight2x}
                            />
                        </div>
                        <div className="header-toggle" onClick={() => setToggle(!toggle)}>
                            <button className={`menu-toggler ${toggle === true ? "active" : ""}`}> 
                                <em className="menu-on icon ni ni-menu"></em>
                                <em className="menu-off icon ni ni-cross"></em>
                            </button>
                        </div>
                        <nav className={`header-menu menu ${toggle === true ? "active" : ""} ${mobileView ? "mobile-menu" : ""}`}> 
                            {!mobileView ? <Menu className="ml-lg-auto" data={BannerSixData} /> : <MobileMenu data={BannerSixData}/>}
                            <ul className="menu-btns">
                                <li>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg">Download App</Link>
                                </li>
                            </ul>
                        </nav>
                        {toggle && window.innerWidth < 992 && <div className="header-overlay" onClick={() => setToggle(!toggle)}></div>}
                    </HeaderWrap>
                </Container>
            </HeaderMain>
            <HeaderContent className="my-auto py-5 is-dark">
                <Container>
                    <Row className="flex-lg-row-reverse align-items-center justify-content-between g-gs">
                        <Col lg="6" className='mt-lg-0 mt-n4'>
                            <HeaderImage className="header-image-s2">
                                <img  src={HeaderImg} alt="header-img" />
                            </HeaderImage>
                        </Col>
                        <Col lg="5" md="10">
                            <HeaderCaption>
                                <HeaderBadge>
                                    <span className="badge badge-primary badge-md">Version 2.4</span>
                                </HeaderBadge>
                                <HeaderTitle className="fw-medium">Tools Made For Creative Profesional</HeaderTitle>
                                <HeaderText>
                                    <p>Powerful dashboard template that especially build for developers and programmers. DashLite comes with all kind of components.</p>
                                </HeaderText>
                                <ul className="header-action btns-inline">
                                    <li>
                                        <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-danger btn-lg"><span>Get Started</span></Link>
                                    </li>
                                    <li>
                                        <a onClick={()=> setOpen(true)} href="#0" className="link link-block link-primary popup-video">
                                            <NioIcon icon="play-circle" className="icon-lg" />
                                        <span>Watch video</span>
                                        </a>
                                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="SSo_EIwHSd4" onClose={() => setOpen(false)} />
                                    </li>
                                </ul>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
            <HeaderBrand className="py-4 py-lg-4">
                <Container>
                    <Row className='align-items-center gy-gs gx-5'>
                        <Col xs="4" md="2">
                            <BrandLogo className="h-40px" src={BrandLogo1} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo className="h-40px" src={BrandLogo2} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo className="h-40px" src={BrandLogo3} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo className="h-40px" src={BrandLogo4} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo className="h-40px" src={BrandLogo5} alt="Brand Logo" />
                        </Col>
                        <Col xs="4" md="2">
                            <BrandLogo className="h-40px" src={BrandLogo6} alt="Brand Logo" />
                        </Col>
                    </Row>
                </Container>
            </HeaderBrand>
        </Header>
    )
}

export default BannerSix
