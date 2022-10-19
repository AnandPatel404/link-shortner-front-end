import React from "react"
import { Container, Col, Row } from "reactstrap"
import { Link } from "../../components/button/Button"
import { Paragraph, TextBlock, TitleH2 } from "../../components/textBlock/TextBlock"
import { Section } from "../../layout/section/Section"


const CtaFour = (props) =>{
    return (
        <Section className ={props.className && props.className} id={props.id && props.id} >
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xl="6" lg="7" md="8">
                        <TextBlock className="is-compact">
                            <TitleH2>Experience Our Dashlite Service</TitleH2>
                            <Paragraph>Our vision is so simple. Create the largest and the most comprehensive conceptual base dashboard including great UI/UX.</Paragraph>
                            <ul className="btns-inline">
                                <li>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-lg btn-primary">Get Dashlite</Link>
                                </li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default CtaFour
