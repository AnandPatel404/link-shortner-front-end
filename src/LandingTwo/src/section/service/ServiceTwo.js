import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Service, ServiceIcon, ServiceText } from '../../components/service/Service'
import { BarChart, Cloud, Dashboard } from '../../components/svg/Icon'
import  {Section, SectionContant, SectionHead } from '../../layout/section/Section'


const Servicetwo = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col xs="9" sm="7" md="6">
                        <SectionHead>
                            <h2 className="title">We provide various kind of service for you</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <Row className='justify-content-center text-center g-gs'>
                        <Col xs="9" sm="7" md="4">
                            <Service className="service-s2">
                                <ServiceIcon className="styled-icon styled-icon-s2 bg-primary">
                                    <BarChart />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Advanced Statistics</h4>
                                    <p>But I must explain to you how all this mistaken idea of pleasure.</p>
                                </ServiceText>
                            </Service>
                        </Col>
                        <Col xs="9" sm="7" md="4">
                            <Service className="service-s2">
                                <ServiceIcon className="styled-icon styled-icon-s2 bg-pink">
                                    <Dashboard />
                                </ServiceIcon>
                                <ServiceText>
                                    <h4 className="title">Powerful Admin</h4>
                                    <p>Expound the actual teachings of the great explorer of the truth.</p>
                                </ServiceText>
                            </Service>
                        </Col>
                        <Col xs="9" sm="7" md="4">
                            <Service className="service-s2">
                                <ServiceIcon className="styled-icon styled-icon-s2 bg-success">
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

export default Servicetwo