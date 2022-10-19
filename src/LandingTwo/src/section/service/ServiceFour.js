import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Section, SectionContant, SectionHead } from '../../layout/section/Section'
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Grid, Shield, Pie } from '../../components/svg/Icon'

const ServiceFour = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-center">
                <Col sm="8" lg="6">
                    <SectionHead>
                        <h2 className="title">Make Your Website Growth With Next Level Visitors</h2>
                    </SectionHead>
                </Col>
            </Row>
            <SectionContant>
                <Row className="justify-content-center text-center g-gs">
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Grid />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">Friendly Design</h4>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm lod tempor incididunt ctechtner.</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Shield />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">Strong Security</h4>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm lod tempor incididunt ctechtner.</p>
                            </ServiceText>
                        </Service>
                    </Col>
                    <Col sm="8" md="6" lg="4">
                        <Service>
                            <ServiceIcon className="styled-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                <Pie />
                            </ServiceIcon>
                            <ServiceText>
                                <h4 className="title">Data Analysis</h4>
                                <p>Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusm lod tempor incididunt ctechtner.</p>
                            </ServiceText>
                        </Service>
                    </Col>
                </Row>
            </SectionContant>
        </Container>
    </Section>
  )
}

export default ServiceFour
