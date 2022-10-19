import React from "react"
import { Col, Row, Container } from "reactstrap"
import { Logo } from "../../components/logo/Logo"
import Footer from "../../layout/footer/Footer"
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'   
import { SocialIcon } from "../../components/icon/Icon"
import { LinkInline } from "../../components/styledList/StyledList"
import { SocialIconOne, LinkData } from './FooterData'


const FooterOne = (props) =>{
    return(
        <Footer className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="g-3 align-items-center justify-content-md-between py-4 py-md-5">
                    <Col md="3">
                        <div className="footer-logo">
                            <Logo to="/"
                            dark ={LogoDrak2x}
                            light ={LogoLight2x}
                            />
                        </div>
                    </Col>
                    <Col md="9" className="d-flex justify-content-md-end">
                        <LinkInline className="gx-4" data={LinkData} />
                    </Col>
                </Row>
                <hr className="hr border-light mb-0 mt-n1"></hr>
                <Row className="g-3 align-items-center justify-content-md-between py-4">
                    <Col md="8">
                        <div className="text-base">
                            Copyright &copy; 2022 Dashlite. Template Made by 
                            <a className="text-base fw-bold" href="https://themeforest.net/user/softnio/portfolio" target="_blank" rel="noreferrer"> Softnio </a>
                        </div>
                    </Col>
                    <Col md="4" className="d-flex justify-content-md-end">
                        <SocialIcon data={SocialIconOne} />
                    </Col>
                </Row>
            </Container>
        </Footer>
    )
}

export default FooterOne
