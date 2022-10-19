import React from "react"
import { Container, Row, Col, Card } from "reactstrap"
import { Paragraph, TextBlock, TitleH2 } from "../../components/textBlock/TextBlock"
import { Ovm } from "../../layout/ovm/Ovm"
import { Section } from "../../layout/section/Section"

const FactsOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="g-gs align-items-center">
                    <Col lg="5">
                        <TextBlock className="is-dark pr-xl-5">
                            <TitleH2>Conceptual Apps &amp; Premium Theme</TitleH2>
                            <Paragraph className="lead">An overview of DashLite – is fully clean and premium designed admin template.</Paragraph>
                        </TextBlock>
                    </Col>
                    <Col lg="7">
                        <Row className="justify-center text-center g-gs">
                            <Col sm="4" xs="6">
                                <Card className="card-full round-xl">
                                    <div className="card-inner card-inner-md">
                                        <div className="h1 fw-bold text-purple">7 +</div>
                                        <div className="h6 text-base">Use case <br/> App Concept</div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="4" xs="6">
                                <Card className="card-full round-xl">
                                    <div className="card-inner card-inner-md">
                                        <div className="h1 fw-bold text-success">6 +</div>
                                        <div className="h6 text-base">Dashboard <br/> Layout</div>
                                    </div>
                                </Card>
                            </Col>
                            <Col sm="4" xs="6">
                                <Card className="card-full round-xl">
                                    <div className="card-inner card-inner-md">
                                        <div className="h1 fw-bold text-pink">28 +</div>
                                        <div className="h6 text-base">Eye - Catching <br/> Components</div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Ovm className="shape-b shape-cover" />
        </Section>
    )
}

export default FactsOne