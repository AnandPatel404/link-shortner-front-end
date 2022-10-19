import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock'
import { Section, SectionHead } from '../../layout/section/Section'

const PricingFour = (props) => {
  return (
    <Section className={ props.className && props.className } id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-tenter">
                <Col xl="7" lg="9">
                    <SectionHead className="text-center mb-1">
                        <h2 className="title text-dark mb-0">Best pricing package start business</h2>
                        <p>Continually network virtual strategic theme areas vis-a-vis ubiquitous potentialities. Holisticly negotiate focused e-tailers without premium solutions..</p>
                    </SectionHead>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xl="10">
                    <Row className="align-items-center g-0">
                        <Col md="7">
                            <Card className="card-shadow round-xl bg-dark is-dark pb-4 pb-md-0">
                                <div className="card-inner card-inner-xl">
                                    <TextBlock>
                                        <TitleH3 className="mb-3">Advanced Pack</TitleH3>
                                        <ul className="list list-nostyle fs-15px mb-1">
                                            <li>Meta Descri ption Optimizatio</li>
                                            <li>Baseline Ranking Report</li>
                                            <li>Increase traffic 100%</li>
                                            <li>Online 24/7 support</li>
                                            <li>10 Keyword Optimization</li>
                                            <li>Free Simple Website</li> 
                                            <li className="note text-warning fs-14px">+ All future update releases for Free</li>
                                        </ul>
                                        <ul className="btns-inline pt-4">
                                            <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-round btn-xl btn-primary fs-16px">Purchase Now for $50</Link></li>
                                        </ul>
                                    </TextBlock>
                                </div>
                            </Card>
                        </Col>
                        <Col md="5">
                            <Card className="card-shadow card-bd-right-3px round-xl ml-lg-n7 ml-md-n5 mx-4 mr-md-0 mt-md-0 mt-n4">
                                <div className="card-inner card-inner-lg">
                                    <div className="text-block is-compact pr-3">
                                        <h4 className="title text-azure">Starter Pack</h4>
                                        <ul className="list list-nostyle fs-15px">
                                            <li>Meta Descri ption Optimizatio</li>
                                            <li>Baseline Ranking Report</li>
                                            <li>Increase traffic 100%</li>
                                            <li>Online 24/7 support</li>
                                        </ul>
                                        <ul className="btns-inline pt-2">
                                            <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn btn-lg btn-round btn-secondary"> <span>Purchase Now for $28</span><em className="icon ni ni-arrow-long-right"></em></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default PricingFour
