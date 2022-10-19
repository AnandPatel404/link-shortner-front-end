import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { Review, ReviewRating, ReviewText } from '../../components/review/Review'
import { Section, SectionHead } from '../../layout/section/Section'
import AuthorImg1 from '../../images/client/sq-a.jpg'
import AuthorImg2 from '../../images/client/sq-c.jpg'
import Rating from '../../components/rating/Rating'
import {ReviewTwoIcon} from './ReviewData'

const ReviewFour = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-lg-center text-lg-center">
                    <Col lg="6" md="10">
                        <SectionHead>
                            <h2 className="title fw-medium">Our Clients Experience With Us</h2>
                            <p>DashLite template included different layouts that fit into any application. Also all the layouts supported Dark Theme Mode & RTL Compatibility.</p>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className="g-gs">
                    <Col md="6">
                        <Card className="card-shadow">
                            <div className="card-inner card-inner-lg">
                                <Review className="review-s4">
                                    <div className="review-user user user-s1">
                                        <div className="img">
                                            <img className="img-circle sm" src={AuthorImg1} alt="img"/>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Michael Afonso</h6>
                                            <ReviewRating className="rating rating-sm">
                                                <Rating data={ReviewTwoIcon} />
                                            </ReviewRating>
                                        </div>
                                    </div>
                                    <ReviewText>
                                        <p>I must explain to you how all this mistakeng idea of pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                                    </ReviewText>
                                </Review>
                            </div>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="card-shadow">
                            <div className="card-inner card-inner-lg">
                                <Review className="review-s4">
                                    <div className="review-user user user-s1">
                                        <div className="img">
                                            <img className="img-circle sm" src={AuthorImg2} alt="img"/>
                                        </div>
                                        <div className="info">
                                            <h6 className="name">Dianna Smiley</h6>
                                            <ReviewRating className="rating rating-sm">
                                                <Rating data={ReviewTwoIcon} />
                                            </ReviewRating>
                                        </div>
                                    </div>
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

export default ReviewFour
