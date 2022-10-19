import React from "react"
import { Col, Row, Container } from "reactstrap"
import { Logo } from "../../components/logo/Logo"
import Footer from "../../layout/footer/Footer"
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'   
import { SocialIcon } from "../../components/icon/Icon"
import { LinkInline } from "../../components/styledList/StyledList"
import { SocialIconOne, LinkDataThree } from './FooterData'
import { Widget, WidgetTitle } from "../../components/wdiget/Widget"


const FooterTwo = (props) =>{
    return(
        <Footer className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-between py-4 py-md-6">
                    <Col md="6" lg="4">
                        <Widget className="widget-about">
                            <Logo to="/IndexThree"
                            dark ={LogoDrak2x}
                            light ={LogoLight2x}
                            />
                            <p>We denounce with righteous indignation and dislike men who are so beguiled and demora lized by the charms of pleasure.</p>
                        </Widget>
                    </Col>
                    <Col lg="6">
                        <Widget>
                            <WidgetTitle>Ressources</WidgetTitle>
                            <LinkInline className="widget-link link-inline-2col link-inline-md-3col g-2 py-2" data={LinkDataThree} />
                        </Widget>
                    </Col>
                </Row>
                <hr className="hr border-light mb-0 mt-n1"></hr>
                <Row className="g-3 align-items-center justify-content-md-between py-4">
                    <Col md="8">
                        <div>
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

export default FooterTwo
