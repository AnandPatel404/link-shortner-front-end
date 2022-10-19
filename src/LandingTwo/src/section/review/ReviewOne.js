import React from "react"
import { Container, Row, Col } from "reactstrap"
import Rating from "../../components/rating/Rating"
import { RatingText, Review, ReviewBrand, ReviewContent, ReviewRating, ReviewText } from "../../components/review/Review"
import { Section, SectionHead } from "../../layout/section/Section"
import BrandImg1 from '../../images/brand/brand-f.png';
import BrandImg2 from '../../images/brand/brand-g.png';
import BrandImg3 from '../../images/brand/brand-h.png';
import {ReviewOneIcon} from './ReviewData'

const ReviewOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row>
                    <Col xs="10" sm="9" md="7" xl="6">
                        <SectionHead>
                            <h2 className="title">Creative professionalas from these compannies</h2>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className="gx-gs gy-5 justify-center">
                    <Col md="6" lg="4">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Regularly updated to add new features. Developer has been responsive when contacted, not that I have needed to except to make suggestions.</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                            <ReviewBrand src={BrandImg1}/>
                        </Review>
                    </Col>
                    <Col md="6" lg="4">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Praising pain was bSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                            <ReviewBrand src={BrandImg2}/>
                        </Review>
                    </Col>
                    <Col md="6" lg="4">
                        <Review>
                            <ReviewContent className="card card-shadow round-xl">
                                <div className="card-inner card-inner-lg">
                                    <ReviewRating className="rating rating-sm">
                                        <Rating data={ReviewOneIcon} />  
                                        <RatingText>(4.5/5)</RatingText>  
                                    </ReviewRating> 
                                    <ReviewText>
                                        <p>Is everything cool, but I need support from you to use it, because i belived is a wordpress theme, and is not to! How I can do it to work for me.</p>
                                    </ReviewText>   
                                </div>
                            </ReviewContent>
                            <ReviewBrand src={BrandImg3}/>
                        </Review>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default ReviewOne