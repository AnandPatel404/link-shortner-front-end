import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Section, SectionContant, SectionHead } from '../../layout/section/Section'
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Paper, Responsive, Paint } from '../../components/svg/Icon'

const ServiceFive = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-center">
                <Col md="8" xl="7">
                    <SectionHead>
                        <h2 className="title text-dark">With all the features you need</h2>
                        <p>Continually network virtual strategic theme areas vis-a-vis ubiquitous potentialities. Holisticly negotiate focused e-tailers without premium solutions.</p>
                    </SectionHead>
                </Col>
            </Row>
            <SectionContant>
                <Row className="gy-gs justify-content-center text-center">
                    <Col xs="10" sm="6" lg="4">
                        <Service className="card card-full service-s4 after-bg-info">
                            <div className="card-inner">
                                <ServiceIcon className="styled-icon styled-icon-6x text-info">
                                    <Paper />
                                </ServiceIcon>
                                <ServiceText>
                                    <h5 className="title text-dark">Advanced Statistics</h5>
                                    <p>On the other hand, we denounce with dislike ralized charms.</p>
                                </ServiceText>
                            </div>
                        </Service>
                    </Col>
                    <Col xs="10" sm="6" lg="4">
                        <Service className="card card-full service-s4">
                            <div className="card-inner">
                                <ServiceIcon className="styled-icon styled-icon-6x text-primary">
                                    <Responsive />
                                </ServiceIcon>
                                <ServiceText>
                                    <h5 className="title text-dark">Powerful Admin</h5>
                                    <p>I must explain to you how all this mistaken idea of denouncing.</p>
                                </ServiceText>
                            </div>
                        </Service>
                    </Col>
                    <Col xs="10" sm="6" lg="4">
                        <Service className="card card-full service-s4 after-bg-danger">
                            <div className="card-inner">
                                <ServiceIcon className="styled-icon styled-icon-6x text-danger">
                                    <Paint />
                                </ServiceIcon>
                                <ServiceText>
                                    <h5 className="title text-dark">Security Updates</h5>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply roots.</p>
                                </ServiceText>
                            </div>
                        </Service>
                    </Col>
                </Row>
            </SectionContant>
        </Container>
    </Section>
  )
}

export default ServiceFive
