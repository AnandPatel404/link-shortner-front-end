import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { Pricing, PricingAction, PricingAmont, PricingBadge, PricingSubTitle, PricingTitle } from '../../components/pricingInfo/PricingInfo'
import { Section, SectionHead } from '../../layout/section/Section'

const PricingTwo = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center'>
                    <Col xl="4" md="5" sm="7">
                        <SectionHead className="text-center">
                            <h2 className="title">Choose the perfect plan for you</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className='justify-content-center justify-content-lg-between align-items-center g-gs'>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-s2 card card-shadow round-md">
                            <div className="card-inner card-inner-lg">
                                <PricingAmont className="text-purple">$10.00</PricingAmont>
                                <PricingTitle>Basic Account</PricingTitle>
                                <PricingSubTitle>Only for first month</PricingSubTitle>
                                <hr className="hr border-light"></hr>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Limited Acess Library</li>
                                    <li>24/7 Tech Support</li>
                                    <li>Additional Features</li>
                                    <li><del>6GB Storage</del></li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-outline-primary btn-lg btn-round"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-s2 card card-shadow round-md">
                            <div className="card-inner card-inner-lg">
                                <PricingBadge text="Popular" />
                                <PricingAmont className="text-purple">$35.00</PricingAmont>
                                <PricingTitle>Premium Account</PricingTitle>
                                <PricingSubTitle>Only for first month</PricingSubTitle>
                                <hr className="hr border-light"></hr>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Full Access Library</li>
                                    <li>Hotline Support 24/7</li>
                                    <li>Additional Features</li>
                                    <li>eCommerce Store</li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg btn-round"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-s2 card card-shadow round-md">
                            <div className="card-inner card-inner-lg">
                                <PricingAmont className="text-purple">$24.00</PricingAmont>
                                <PricingTitle>Standard Account</PricingTitle>
                                <PricingSubTitle>Only for first month</PricingSubTitle>
                                <hr className="hr border-light"></hr>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Full Access Library</li>
                                    <li>24/7 Tech Support</li>
                                    <li>Additional Features</li>
                                    <li>2GB Storage</li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-outline-primary btn-lg btn-round"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-s2 card card-shadow round-md">
                            <div className="card-inner card-inner-lg">
                                <PricingAmont className="text-purple">$29.00</PricingAmont>
                                <PricingTitle>Starter Account</PricingTitle>
                                <PricingSubTitle>Only for first month</PricingSubTitle>
                                <hr className="hr border-light"></hr>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Full Access Library</li>
                                    <li>24/7 Tech Support</li>
                                    <li>Additional Features</li>
                                    <li>6GB Storage</li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-outline-primary btn-lg btn-round"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default PricingTwo
