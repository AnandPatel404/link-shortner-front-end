import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { ImageBlock } from '../../components/images/Images'
import { Section } from '../../layout/section/Section'
import ThumbImg1 from '../../images/gfx/f.png'
import { Paragraph, TextBlock, TitleH2 } from '../../components/textBlock/TextBlock'
import User from '../../components/user/User'
import User1 from '../../images/client/sq-a.jpg'
import User2 from '../../images/client/sq-b.jpg'

const AboutOne = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="align-items-center justify-content-between g-gs">
                <Col lg="6">
                    <ImageBlock>
                        <img src={ThumbImg1} alt="thumb-img" />
                    </ImageBlock>
                </Col>
                <Col xl="5" lg="6">
                    <TextBlock>
                        <TitleH2 className="fw-medium">Story of Making DashLite</TitleH2>
                        <Paragraph>In marketplace, most of dashboard are generic. On other hand developers and programmers faced lots problem to build their application because those generic dashboard does not provide real-use-case pages. To solve the problem, Softnio Team make a vision.</Paragraph>
                        <Paragraph>Our vision is so simple. Create the largest and the most comprehensive conceptual base dashboard including great UI/UX.</Paragraph>
                        <h6 className="overline-title">Designed and developed by</h6>
                        <Row className="gy-3">
                            <Col sm="6">
                                <User className="user-s1" src={User2} name="Abu Bin Ishityak" role="Role as Designer" />
                            </Col>
                            <Col sm="6">
                                <User className="user-s1" src={User1} name="Softnio Team" role="As Developer" />
                            </Col>
                        </Row>
                    </TextBlock>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default AboutOne
