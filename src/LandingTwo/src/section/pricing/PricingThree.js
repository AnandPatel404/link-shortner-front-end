import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { Pricing, PricingAction } from '../../components/pricingInfo/PricingInfo'
import { ListChecked } from '../../components/styledList/StyledList'
import { Section, SectionHead } from '../../layout/section/Section'
import { PricingListThree } from './PricingData'

const PricingThree = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center'>
                    <Col xl="6" md="8" sm="10">
                        <SectionHead className="text-center">
                            <h2 className="title fw-medium">Choose Your Plan</h2>
                            <p>Best  plan dolor sit amet, consectetur adipiscing elit. Commodo  at fringilla dictum ut ante habitasse quis. Ut integer in </p>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className='justify-content-center g-gs'>
                    <Col lg="4" sm="6">
                        <Pricing className="pricing-s3 pricing-s3-featured card-shadow card-bordered round-xl">
                            <div className="card-inner card-inner-lg">
                                <h4 className="title pb-2 fw-normal">Basic</h4>
                                <h1 className="pb-4 fw-medium"><sub>$</sub>15</h1>
                                <ListChecked className="list-success list-check gy-2" data={PricingListThree} />
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-outline-light btn-lg btn-block"><span>Buy Plan</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col lg="4" sm="6">
                        <Pricing className="pricing-s3 pricing-featured card card-shadow card-bordered round-xl">
                            <div className="card-inner card-inner-lg">
                                <h4 className="title pb-2 fw-normal">Premium</h4>
                                <h1 className="pb-4 fw-medium"><sub>$</sub>20</h1>
                                <ListChecked className="list-success list-check gy-2" data={PricingListThree} />
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-outline-light btn-lg btn-block"><span>Buy Plan</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                    <Col lg="4" sm="6">
                        <Pricing className="pricing-s3 pricing-s3-featured card-shadow card-bordered round-xl">
                            <div className="card-inner card-inner-lg">
                                <h4 className="title pb-2 fw-normal">Ultimate</h4>
                                <h1 className="pb-4 fw-medium"><sub>$</sub>30</h1>
                                <ListChecked className="list-success list-check gy-2" data={PricingListThree} />
                                <PricingAction>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-outline-light btn-lg btn-block"><span>Buy Plan</span></Link>
                                </PricingAction>
                            </div>
                        </Pricing>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default PricingThree
