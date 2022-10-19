import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { ImageBlock } from '../../components/images/Images'
import { Section, SectionContant, SectionHead } from '../../layout/section/Section'
import thumbImg from '../../images/gfx/d.png'
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock'
import { Service, ServiceText } from '../../components/service/Service'
import { StyledIcon } from '../../components/icon/Icon'
import { ColorPlate, CodeDisplay, Grid, Shield, ToolsAlt, Pie, Headphone } from '../../components/svg/Icon'

const FeatureFive = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="align-items-center justify-content-between g-gs">
                <Col lg="6">
                    <ImageBlock>
                        <img src={thumbImg} alt="thumb-img" />
                    </ImageBlock>
                </Col>
                <Col xl="5" lg="6">
                    <TextBlock>
                        <TitleH3 className="fw-medium mb-5">Make Your Website Growth</TitleH3>
                        <div className="g-gs">
                            <Service className="service-inline service-s6">
                                <StyledIcon className="service-icon styled-icon-4x styled-icon-s4 text-primary">
                                    <Grid />
                                </StyledIcon>
                                <ServiceText>
                                    <h5 className="title fw-medium">Friendly Design</h5>
                                    <p>Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </ServiceText>
                            </Service>
                            <Service className="service-inline service-s6">
                                <StyledIcon className="service-icon styled-icon-4x styled-icon-s4 text-primary">
                                    <Shield />
                                </StyledIcon>
                                <ServiceText>
                                    <h5 className="title fw-medium">Strong Security</h5>
                                    <p>Slightly variations of passages available the majority have suffered alteration even slightly believable.</p>
                                </ServiceText>
                            </Service>
                            <Service className="service-inline service-s6">
                                <StyledIcon className="service-icon styled-icon-4x styled-icon-s4 text-primary">
                                    <Pie />
                                </StyledIcon>
                                <ServiceText>
                                    <h5 className="title fw-medium">Data Analycis</h5>
                                    <p>Slightly variations of passages available the majority have suffered alteration even slightly believable.</p>
                                </ServiceText>
                            </Service>
                        </div>
                    </TextBlock>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

const FeatureFiveAlt = (props) => {
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col lg="8" md="10">
                        <SectionHead>
                            <h2 className="title fw-medium">Special Features</h2>
                            <p>An overview of DashLite – is fully clean and premium designed admin template which included beautiful hand-crafted components & elements.</p>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <Row className="justify-content-center">
                        <Col xl="8" lg="10">
                            <Row className="text-center g-gs">
                                <Col md="3" xs="6">
                                    <Card className="card-shadow service is-compact">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                                <ColorPlate />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className="title text-dark fs-14px">Colourful</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md="3" xs="6">
                                    <Card className="card-shadow service is-compact">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                                <CodeDisplay />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className="title text-dark fs-14px">Well Coded</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md="3" xs="6">
                                    <Card className="card-shadow service is-compact">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                                <ToolsAlt />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className="title text-dark fs-14px">Easy Customise</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                                <Col md="3" xs="6">
                                    <Card className="card-shadow service is-compact">
                                        <div className="card-inner">
                                            <StyledIcon className="service-icon styled-icon-s4 styled-icon-6x circle text-primary">
                                                <Headphone />
                                            </StyledIcon>
                                            <ServiceText>
                                                <h6 className="title text-dark fs-14px">24/7 Support</h6>
                                            </ServiceText>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    )
}

export { FeatureFive, FeatureFiveAlt }
