import React from "react"
import { Container, Row, Col, Card } from "reactstrap"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Levels, Target, PencilCase } from "../../components/svg/Icon"
import { Section, SectionContant } from "../../layout/section/Section"

const ServiceThree = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <SectionContant>
                    <Row className="justify-content-start text-left g-gs">
                        <Col md="6" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <Levels />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title">Advanced Statistics</h4>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm lod tempor incididunt.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                        <Col md="6" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <PencilCase />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title">Powerful Admin</h4>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm lod tempor incididunt.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                        <Col md="12" lg="4">
                            <Card className="card-shadow">
                                <div className="card-inner card-inner-lg">
                                    <Service>
                                        <ServiceIcon className="service-icon styled-icon styled-icon-6x text-primary">
                                            <Target />
                                        </ServiceIcon>
                                        <ServiceText>
                                            <h4 className="title">Security Updates</h4>
                                            <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm lod tempor incididunt.</p>
                                        </ServiceText>
                                    </Service>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    )
}

export default ServiceThree
