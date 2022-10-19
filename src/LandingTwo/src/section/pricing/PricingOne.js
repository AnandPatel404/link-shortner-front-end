import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { Pricing, PricingAction, PricingAmont, PricingSubTitle, PricingTitle } from '../../components/pricingInfo/PricingInfo'
import { Section, SectionHead } from '../../layout/section/Section'

const PricingOne = (props) =>{
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
                <Row className='justify-content-center justify-content-lg-between align-items-center text-center g-gs'>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-s1 card card-shadow round-xl">
                            <div className="card-inner card-inner-lg">
                                <PricingAmont>$19 <small>/yr</small></PricingAmont>
                                <PricingSubTitle>6 User, Billed Yearly</PricingSubTitle>
                                <PricingTitle>Single User</PricingTitle>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Full Access Library</li>
                                    <li>24/7 Tech Support</li>
                                    <li>Additional Features</li>
                                    <li><del>6GB Storage</del></li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg btn-block"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-featured pricing-s1 card-shadow round-xl">
                            <div className="card-inner card-inner-lg">
                                <PricingAmont>$99 <small>/yr</small></PricingAmont>
                                <PricingSubTitle>10 User, Billed Yearly</PricingSubTitle>
                                <PricingTitle>Advanced User</PricingTitle>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Full Access Library</li>
                                    <li>24/7 Tech Support</li>
                                    <li><del>Additional Features</del></li>
                                    <li><del>6GB Storage</del></li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg btn-block"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-s1 card-shadow round-xl">
                            <div className="card-inner card-inner-lg">
                                <PricingAmont>$45 <small>/yr</small></PricingAmont>
                                <PricingSubTitle>7 User, Billed Yearly</PricingSubTitle>
                                <PricingTitle>Premium User</PricingTitle>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Full Access Library</li>
                                    <li>24/7 Tech Support</li>
                                    <li><del>Additional Features</del></li>
                                    <li><del>6GB Storage</del></li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg btn-block"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col xl="3" sm="6">
                        <Pricing className="pricing-s1 card-shadow round-xl">
                            <div className="card-inner card-inner-lg">
                                <PricingAmont>$29 <small>/yr</small></PricingAmont>
                                <PricingSubTitle>3 User, Billed Yearly</PricingSubTitle>
                                <PricingTitle>Starter User</PricingTitle>
                                <ul className="pricing-features list list-nostyle">
                                    <li>Full Access Library</li>
                                    <li>24/7 Tech Support</li>
                                    <li>Additional Features</li>
                                    <li><del>6GB Storage</del></li>
                                </ul>
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-primary btn-lg btn-block"><span>Purchase Now</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default PricingOne
