import React, { useState, useEffect } from 'react'
import HeaderImg from '../../images/header/gfx-c.png'
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'
import Menu from '../../layout/menu/Menu'
import MobileMenu from '../../layout/menu/MobileMenu'
import {Logo} from "../../components/logo/Logo"
import { Col, Container, Row } from "reactstrap"
import {Header, HeaderWrap, HeaderContent, HeaderMain} from "../../layout/header/Header"
import {Link} from "../../components/button/Button"
import { HeaderCaption, HeaderText, HeaderTitle } from '../../components/headerCaption/HeaderCaption'
import { HeaderImage } from '../../components/images/Images'
import {BannerOneData} from './BannerData'


const BannerOne = (props) =>{
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
        <HeaderMain className={`header-main header-main-s1 is-sticky on-dark is-transparent ${offset > 0 ? "has-fixed" : ""}`}>
            <Container className="header-container">
                <HeaderWrap>
                    <div className="header-logo">
                        <Logo to="/"
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
                        {!mobileView ? <Menu className="ml-lg-auto" data={BannerOneData} /> : <MobileMenu data={BannerOneData}/>}
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
        <HeaderContent className="my-auto py-5 is-dark">
            <div className="container">
                <Row className="row justify-content-center text-center">
                    <Col lg="7" md="10">
                        <HeaderCaption>
                            <HeaderTitle>Instantly upload any software usage nio saasbox data</HeaderTitle>
                            <HeaderText>
                                <p>A powerful admin dashboard template that especially build for developers and programmers. DashLite comes with all kind of components.</p>
                            </HeaderText>
                            <ul className="header-action btns-inline">
                                <li>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg"><span>Getting Started</span></Link>
                                </li>
                                <li>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-danger btn-lg"><span>View Demo</span></Link>
                                </li>
                            </ul>
                        </HeaderCaption>
                    </Col>
                </Row>
            </div>
        </HeaderContent>
        <HeaderImage className="mb-n5 mb-sm-n6 mb-md-n7">
            <Container>
                <Row className='justify-content-center'>
                    <Col xl="10">
                        <div className="card overflow-hidden p-2 bg-light">
                            <img src={HeaderImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </HeaderImage>
    </Header>
    )
}


export default BannerOne
