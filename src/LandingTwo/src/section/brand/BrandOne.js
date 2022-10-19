import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { BrandLogo } from '../../components/logo/Logo'
import { Section } from '../../layout/section/Section'
import BrandLogo1 from '../../images/brand/a.png'
import BrandLogo2 from '../../images/brand/b.png'
import BrandLogo3 from '../../images/brand/c.png'
import BrandLogo4 from '../../images/brand/d.png'
import BrandLogo5 from '../../images/brand/e.png'
import BrandLogo6 from '../../images/brand/f.png'

const BrandOne = (props) => {
  return (
    <Section className = {props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="align-items-center gx-5 gy-4 text-center">
                <Col xs="4" lg="2">
                    <BrandLogo src={BrandLogo1} className="h-40px" />
                </Col>
                <Col xs="4" lg="2">
                    <BrandLogo src={BrandLogo2} className="h-40px" />
                </Col>
                <Col xs="4" lg="2">
                    <BrandLogo src={BrandLogo3} className="h-40px" />
                </Col>
                <Col xs="4" lg="2">
                    <BrandLogo src={BrandLogo4} className="h-40px" />
                </Col>
                <Col xs="4" lg="2">
                    <BrandLogo src={BrandLogo5} className="h-40px" />
                </Col>
                <Col xs="4" lg="2">
                    <BrandLogo src={BrandLogo6} className="h-40px" />
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default BrandOne
