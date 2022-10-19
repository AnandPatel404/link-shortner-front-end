import React from "react"
import { Container, Col, Row } from "reactstrap"
import { Link } from "../../components/button/Button"
import { Paragraph, TextBlock, TitleH2 } from "../../components/textBlock/TextBlock"
import { Section } from "../../layout/section/Section"


const CtaSix = (props) =>{
    return (
        <Section className ={props.className && props.className} id={props.id && props.id} >
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md="8">
                        <TextBlock className="is-compact">
                            <TitleH2 className="fw-medium">More Than 2000+ People Using It</TitleH2>
                            <Paragraph className="pr-lg-7 pl-lg-7">DashLite template included different layouts that fit into any application.Do not forgot to check  what's coming next.</Paragraph>
                            <ul className="btns-inline">
                                <li>
                                    <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-xl btn-danger">Purchase $28</Link>
                                </li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default CtaSix
