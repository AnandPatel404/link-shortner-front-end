import React from "react"
import { Section, SectionHead } from "../../layout/section/Section"
import { Container, Row, Col, Card, Form, FormGroup, Input } from "reactstrap"
import { TextBlock, TitleH3 } from "../../components/textBlock/TextBlock"
import { Link } from "../../components/button/Button"

const CtaOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-center">
                    <Col xl="10">
                        <Row className="align-items-center g-0">
                            <Col md="7">
                                <Card className="card-shadow round-xl bg-indigo is-dark pb-4 pb-md-0">
                                    <div className="card-inner card-inner-xl">
                                        <TextBlock>
                                            <TitleH3>Single User</TitleH3>
                                        </TextBlock>
                                        <ul className="list list-nostyle fs-16px">
                                            <li>Meta Description Optimization</li>
                                            <li>Baseline Ranking Report</li>
                                            <li>Online 24/7 support</li>
                                            <li>Free Simple Website</li>
                                            <li className="note text-warning">+ All future update releases for Free</li>
                                        </ul>
                                        <ul className="btns-inline">
                                            <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer"  className="btn-xl btn-primary">Purchase Now for $28</Link></li>
                                        </ul>
                                    </div>
                                </Card>
                            </Col>
                            <Col md="5">
                                <Card className="card-shadow round-xl ml-lg-n7 ml-md-n5 mx-4 mr-md-0 mt-md-0 mt-n4">
                                    <div className="card-inner card-inner-lg">
                                        <div className="form-block">
                                            <SectionHead className="section-head-sm">
                                                <h4 className="title">Do you have any other question?</h4>
                                            </SectionHead>
                                            <Form className="form-submit">
                                                <Row className="g-4">
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <label className="form-label" htmlFor="name">Your Name</label>
                                                            <div className="form-control-wrap">
                                                                <Input type="text" className="form-control form-control-lg" id="name" placeholder="Your Name"/>
                                                            </div>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <label className="form-label" htmlFor="name">Enter Your Email</label>
                                                            <div className="form-control-wrap">
                                                                <Input type="text" className="form-control form-control-lg" id="email" placeholder="Enter Your Email"  />
                                                            </div>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <FormGroup>
                                                            <label className="form-label" htmlFor="question">Your Question</label>
                                                            <div className="form-control-wrap">
                                                                <textarea className="form-control no-resize" id="question" placeholder="Your Question"></textarea>
                                                            </div>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="12">
                                                        <Link to={`${process.env.PUBLIC_URL}/`} className="btn-lg btn-primary">Ask Question</Link>
                                                    </Col>
                                                </Row>
                                            </Form>
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

export default CtaOne
