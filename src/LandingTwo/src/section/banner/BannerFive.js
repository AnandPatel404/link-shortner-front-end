import React, { useState, useEffect } from 'react'
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import { Logo } from "../../components/logo/Logo"
import { Col, Container, Row } from "reactstrap"
import { Header, HeaderContent, HeaderMain, HeaderWrap } from "../../layout/header/Header"
import {Link} from "../../components/button/Button"
import { HeaderCaption, HeaderText, HeaderTitle } from '../../components/headerCaption/HeaderCaption'
import Rating from '../../components/rating/Rating'
import { RatingText } from '../../components/review/Review'
import { BannerFiveData, BannerTwoIcon } from './BannerData'
import { StyledIcon } from '../../components/icon/Icon'
import ModalVideo from 'react-modal-video'
import Play from '../../components/svg/Play'
import { BgImage } from '../../layout/ovm/Ovm'

const BannerFive = (props) =>{
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
                            {!mobileView ? <Menu className="ml-lg-auto" data={BannerFiveData} /> : <MobileMenu data={BannerFiveData}/>}
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
            <HeaderContent className="my-auto py-6 is-dark">
                <Container className="mt-n4 mt-lg-0">
                    <Row className="flex-lg-row-reverse align-items-center justify-content-between g-gs">
                        <Col lg="6" className='mb-lg-0'>
                            <div className='header-play text-lg-center'>
                                <a onClick={()=> setOpen(true)} href="#0" className="play popup-video">
                                    <StyledIcon className="styled-icon styled-icon-6x styled-icon-s5 text-warning">
                                        <Play />
                                    </StyledIcon>
                                    <div className="play-text">2:58 minutes</div>
                                </a>
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="SSo_EIwHSd4" onClose={() => setOpen(false)} />
                            </div>
                        </Col>
                        <Col lg="6">
                            <HeaderCaption>
                                <div className='header-rating rating'>
                                    <Rating data={BannerTwoIcon} /> 
                                    <RatingText>14,252 reviews</RatingText>
                                </div>
                                <HeaderTitle className="fw-medium">Build your website with Dashlite template</HeaderTitle>
                                <HeaderText className="pr-5">
                                    <p>Dictum metus id fermentum efficitur. Praesent ultrices justo in feugiat condimentum. </p>
                                </HeaderText>
                                <ul className="header-action btns-inline">
                                    <li>
                                        <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg btn-round"><span>Try it For Free!</span></Link>
                                    </li>
                                </ul>
                            </HeaderCaption>
                        </Col>
                    </Row>
                </Container>
            </HeaderContent>
            <BgImage className="bg-image bg-overlay after-bg-dark after-opacity-95 overlay-fall bg-image-loaded bg-image-header-a" />
        </Header>
    )
}

export default BannerFive
