import React from "react"
import { Col, Row, Container } from "reactstrap"
import { Logo } from "../../components/logo/Logo"
import Footer from "../../layout/footer/Footer"
import LogoDrak2x from '../../images/logo-dark2x.png'
import LogoLight2x from '../../images/logo2x.png'   
import { NioIcon, SocialIcon } from "../../components/icon/Icon"
import { LinkList } from "../../components/styledList/StyledList"
import { SocialIconFour, LinkCompany, LinkProduct, LinkRecourse } from './FooterData'
import { Widget, WidgetTitle } from "../../components/wdiget/Widget"


const FooterFour = (props) =>{
    return(
        <Footer className={props.className && props.className} id={props.id && props.id}>
            <Container className="py-5 py-md-7">
                <Row className="g-gs">
                    <Col md="9" lg="3" className="mr-auto">
                        <div className="widget widget-about">
                            <Logo to="/"
                                dark ={LogoDrak2x}
                                light ={LogoLight2x}
                            />
                            <p>As our ultimate goal is to design lots of application so these give you a clear understanding where we are heading.</p>
                            <SocialIcon className="social-primary" data={SocialIconFour} />
                            </div>
                    </Col>
                    <Col lg="2" sm="4" xs="6">
                        <Widget>
                            <WidgetTitle>Product</WidgetTitle>
                            <LinkList data={LinkProduct} />
                        </Widget>
                    </Col>
                    <Col lg="2" sm="4" xs="6">
                        <Widget>
                            <WidgetTitle>Company</WidgetTitle>
                            <LinkList data={LinkCompany} />
                        </Widget>
                    </Col>
                    <Col lg="2" sm="4" xs="6">
                        <Widget>
                            <WidgetTitle>Recourse</WidgetTitle>
                            <LinkList data={LinkRecourse} />
                        </Widget>
                    </Col>
                    <Col xl="2" lg="3" md="8">
                        <Widget>
                            <WidgetTitle>Contact Us</WidgetTitle>
                            <ul className="widget-contact row gy-2 gx-gs">
                                <li className="col-mb-6 col-lg-12"><NioIcon icon="map-pin-fill" /><span> 31 Mirpur Street <br/>Dhaka, Bangladesh</span></li>
                                <li className="col-mb-6 col-lg-12"><NioIcon icon="call-fill" /><span>(021) 5248 631 <br/>(021) 5148 6324</span></li>
                            </ul>
                        </Widget>
                    </Col>
                </Row>
            </Container>
            <div className="bg-dark text-center is-dark py-3">
                <div className="container">
                    <div className="text-base"> &copy; 2022, DashLite. Template made by <a href="https://themeforest.net/user/softnio/portfolio" target="_blank" rel="noreferrer"> Softnio </a></div>
                </div>
            </div>
        </Footer>
    )
}

export default FooterFour
