import React from "react"
import { Container, Card, Col, Row } from "reactstrap"
import { Link } from "../../components/button/Button"
import { Paragraph, TextBlock, TitleH3 } from "../../components/textBlock/TextBlock"
import { Section } from "../../layout/section/Section"


const CtaThree = (props) =>{
    return (
        <Section className ={props.className && props.className} id={props.id && props.id} >
            <Container>
                <Card className="bg-dark bg-grad-c">
                    <div className="card-inner p-5">
                        <Row className="justify-content-between align-items-center g-gs">
                            <Col lg="8">
                                <TextBlock>
                                    <TitleH3 className="text-light">Over 2000+ Peoples Using SaaS Dashlite</TitleH3>
                                    <Paragraph>Continually network virtual strategic theme areas vis-a-vis ubiquitous potentialities. Holisticly negotiate focused e-tailers without premium solutions.</Paragraph>
                                </TextBlock>
                            </Col>
                            <Col lg="4" className="d-flex justify-content-lg-end">
                                <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-danger btn-round btn-lg">Join Now</Link>
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Container>
        </Section>
    )
}

export default CtaThree
