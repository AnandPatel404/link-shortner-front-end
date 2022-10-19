import React from 'react'
import { Card, Col, Container, Row } from 'reactstrap'
import { Portrait } from '../../components/images/Images'
import { Review, ReviewContent, ReviewPortrait, ReviewRating, ReviewText } from '../../components/review/Review'
import { Section, SectionHead } from '../../layout/section/Section'
import AuthorImg1 from '../../images/client/client-a.png'
import AuthorImg2 from '../../images/client/client-b.png'
import Rating from '../../components/rating/Rating'
import {ReviewTwoIcon} from './ReviewData'

const ReviewTwo = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col xl="7" md="8" xs="10">
                        <SectionHead>
                            <h2 className="title">This is what our esteemed clients have to say for us</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className="g-gs justify-content-center">
                    <Col lg="6">
                        <Card className="card-shadow round-xl">
                            <div className="card-inner card-inner-lg">
                                <Review className="review-s2">
                                    <ReviewPortrait className="review-portrait-s1">
                                        <Portrait className="portrait-s1">
                                            <img src={AuthorImg1} alt="img"/>
                                        </Portrait>
                                    </ReviewPortrait>
                                    <ReviewContent>
                                        <ReviewRating className="rating rating-sm">
                                            <Rating data={ReviewTwoIcon} />
                                        </ReviewRating>
                                        <ReviewText>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <h6 className="review-name text-dark">Victoria Hansen</h6>
                                        </ReviewText>
                                    </ReviewContent>
                                </Review>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card className="card-shadow round-xl">
                            <div className="card-inner card-inner-lg">
                                <Review className="review-s2">
                                    <ReviewPortrait className="review-portrait-s1">
                                        <Portrait className="portrait-s1">
                                            <img src={AuthorImg2} alt="img"/>
                                        </Portrait>
                                    </ReviewPortrait>
                                    <ReviewContent>
                                        <ReviewRating className="rating rating-sm">
                                            <Rating data={ReviewTwoIcon} />
                                        </ReviewRating>
                                        <ReviewText>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                            <h6 className="review-name text-dark">Samuel Mishin</h6>
                                        </ReviewText>
                                    </ReviewContent>
                                </Review>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default ReviewTwo
