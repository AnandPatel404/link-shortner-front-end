import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from '../../components/button/Button'
import { ImageBlock } from '../../components/images/Images'
import { HelpDesk } from '../../components/svg/Icon'
import { Paragraph, TextBlock, TitleH2 } from '../../components/textBlock/TextBlock'
import { Section } from '../../layout/section/Section'

const CtaTwo = (props) =>{
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-center">
                <Col xl="6" lg="7" md="8">
                    <TextBlock className="is-compact">
                        <ImageBlock className="h-150px mb-4">
                            <HelpDesk />
                        </ImageBlock>
                        <TitleH2>Get Started with Dashlite</TitleH2>
                        <Paragraph className="lead">Over 60 million people have chosen Dashlite to power the place on the web they call “home” — join the family.</Paragraph>
                        <ul className="btns-inline justify-center">
                            <li>
                                <Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-xl btn-primary">Get Dashlite</Link>
                            </li>
                        </ul>
                    </TextBlock>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default CtaTwo
