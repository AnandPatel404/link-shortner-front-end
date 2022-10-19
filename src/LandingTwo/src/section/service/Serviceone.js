import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { BarChart, Cloud, Dashboard } from "../../components/svg/Icon"
import {Section, SectionContant, SectionHead} from "../../layout/section/Section"

const ServieOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row>
                    <Col xs="10" sm="7" md="5">
                        <SectionHead>
                            <h2 className="title">We provide various kind of service for you</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <Row className="g-gs">
                        <Col sm="6" lg="4">
                            <Service className="service-s1">
                                <ServiceIcon className="service-icon styled-icon styled-icon-s1">
                                    <BarChart />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Advanced Statistics</h4>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure.</p>
                                </ServiceText>
                            </Service>
                        </Col>
                        <Col sm="6" lg="4">
                            <Service className="service-s1">
                                <ServiceIcon className="service-icon styled-icon styled-icon-s1">
                                    <Dashboard />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Powerful Admin</h4>
                                    <p>Expound the actual teachings of the great explorer of the truth.</p>
                                </ServiceText>
                            </Service>
                        </Col>
                        <Col sm="6" lg="4">
                            <Service className="service-s1">
                                <ServiceIcon className="service-icon styled-icon styled-icon-s1">
                                    <Cloud />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Security Updates</h4>
                                    <p>Praising pain was born and I will give you a complete account.</p>
                                </ServiceText>
                            </Service>
                        </Col>
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    )
}

export default ServieOne