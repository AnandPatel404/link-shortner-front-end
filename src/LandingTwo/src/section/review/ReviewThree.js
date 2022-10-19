import React from 'react'
import { Container, Col, Row, Card } from 'reactstrap'
import { Review, ReviewText } from '../../components/review/Review'
import { Section, SectionHead } from '../../layout/section/Section'
import User from '../../components/user/User'
import User1 from '../../images/client/sq-a.jpg'
import User2 from '../../images/client/sq-b.jpg'

const ReviewThree = (props) => {
  return ( 
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="justify-content-lg-center text-lg-center">
                <Col lg="6" md="10">
                    <SectionHead>
                        <h2 className="title">What Our Customers Say</h2>
                        <p className="fs-15px">Continually network virtual strategic theme areas vis-a-vis ubiquitous potentialities. Holisticly negotiate focused e-tailers without premium solutions.</p>
                    </SectionHead>
                </Col>
            </Row>
            <Row className="g-gs">
                <Col lg="6" md="6">
                    <Card className="card-shadow">
                        <div className="card-inner card-inner-lg">
                            <Review className="review-s4">
                                <User className="review-user user-s1" src={User1} name="Michael Afonso" role="UI/UX Designer" />
                                <ReviewText>
                                    <p>I must explain to you how all this mistakeng idea of pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                                </ReviewText>
                            </Review>
                        </div>
                    </Card>
                </Col>
                <Col lg="6" md="6">
                    <Card className="card-shadow">
                        <div className="card-inner card-inner-lg">
                            <Review className="review-s4">
                                <User className="review-user user-s1" src={User2} name="Samuel Mishin" role="Web Developer" />
                                <ReviewText>
                                    <p>I must explain to you how all this mistakeng idea of pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                                </ReviewText>
                            </Review>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default ReviewThree
