import React from "react"
import { Container, Col, Row } from "reactstrap"
import { ImageBlock } from "../../components/images/Images"
import { Section } from "../../layout/section/Section"
import { Paragraph, TextBlock, TitleH2 } from "../../components/textBlock/TextBlock"
import { Review, ReviewContent, ReviewRating, ReviewText } from "../../components/review/Review"
import Rating from "../../components/rating/Rating"
import { Link } from "../../components/button/Button"
import { Service, ServiceIcon, ServiceText } from "../../components/service/Service"
import { Sharing, Vision } from "../../components/svg/Icon"
import ThumbImg1 from '../../images/gfx/a.png'
import ThumbImg2 from '../../images/gfx/b.png'
import ThumbImg3 from '../../images/gfx/c.png'
import {FeatureTwoIcon} from './FeatureData'

const FeatureReview = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="align-items-center justify-content-lg-between g-gs">
                    <Col lg="5">
                        <ImageBlock className="img-block-s1 left">
                            <img src={ThumbImg1} alt="Thumb img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock className="mr-xl-5">
                            <TitleH2>Build a better software with Our <span className="text-primary">Conceptual Apps</span> and Modern <span className="text-pink">UI Elements</span></TitleH2>
                            <Review className="review-s3">
                                <ReviewContent>
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={FeatureTwoIcon} />
                                    </ReviewRating>
                                    <ReviewText>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                        <h6 className="review-name text-dark">Samuel Mishin</h6>
                                    </ReviewText>
                                </ReviewContent>
                            </Review>
                            <ul className="btns-inline">
                                <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-lg btn-primary"><span>Learn More</span></Link></li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

const FeatureTwoAlt = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="flex-row-reverse align-items-center justify-content-between g-gs">
                    <Col lg="5">
                        <ImageBlock className="img-block-s1 right">
                            <img src={ThumbImg2} alt="Thumb img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock>
                            <TitleH2>Some unique features and awesome experience</TitleH2>
                            <div className="g-gs">
                                <Service className="service-s3">
                                    <ServiceIcon className="styled-icon styled-icon-s3 text-primary">
                                        <Vision />
                                    </ServiceIcon>
                                    <ServiceText>
                                        <h4 className="title">Easy to manage</h4>
                                        <p>Many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                    </ServiceText>
                                </Service>
                                <Service className="service-s3">
                                    <ServiceIcon className="styled-icon styled-icon-s3 text-success">
                                        <Sharing />
                                    </ServiceIcon>
                                    <ServiceText>
                                        <h4 className="title">A complete feature</h4>
                                        <p>Slightly variations of passages available the majority have suffered alteration even slightly believable.</p>
                                    </ServiceText>
                                </Service>
                            </div>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

const FeatureTwo = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="align-items-center justify-content-between g-gs">
                    <Col lg="5">
                    <ImageBlock className="img-block-s1 left">
                            <img src={ThumbImg3} alt="Thumb img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock>
                            <TitleH2>List building tools and lead generation</TitleH2>
                            <Paragraph className="lead">But the majority have suffered alteration in some form, by injected humour, or randomised slightly believable.</Paragraph>
                            <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Paragraph>
                            <ul className="btns-inline">
                                <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-lg btn-primary"><span>Get The App</span></Link></li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}
export {FeatureReview, FeatureTwoAlt, FeatureTwo}
