import React from "react"
import BannerTwo from "../section/banner/BannerTwo"
import CtaTwo from "../section/cta/CtaTwo"
import { FeatureReview, FeatureTwo, FeatureTwoAlt } from "../section/feature/FeatureTwo"
import FooterOne from "../section/footer/FooterOne"
import PricingOne from "../section/pricing/PricingOne"
import ReviewTwo from "../section/review/ReviewTwo"
import Servicetwo from "../section/service/ServiceTwo"

const IndexTwo = (props) =>{
    return(
        <div className="nk-main">
            <BannerTwo className="header has-header-main-s1 bg-lighter" id="#home" />
            <Servicetwo className="section section-service pb-0" id="#service"/>
            <FeatureReview className="section-feature pb-0" id="#feature" />
            <FeatureTwoAlt className="section-feature pb-0" />
            <FeatureTwo className="section-feature" />
            <PricingOne className="section-pricing bg-lighter" id="#pricing"/>
            <ReviewTwo className="section-testimonial pb-0" id="#reviews" />
            <CtaTwo className="section-cta" />
            <FooterOne className="bg-lighter" id="#footer" />
        </div>
    )
}

export default IndexTwo
