import React from "react"
import BannerOne from "../section/banner/BannerOne"
import CtaOne from "../section/cta/CtaOne"
import FactsOne from "../section/facts/FactsOne"
import FaqOne from "../section/faq/FaqOne"
import { FeatureOne, FeatureOneAlt } from "../section/feature/FeatureOne"
import FooterOne from "../section/footer/FooterOne"
import ReviewOne from "../section/review/ReviewOne"
import SercieOne from "../section/service/Serviceone"

const IndexOne = () =>{
    return(
    <div className="nk-main">
        <BannerOne className="has-header-main-s1 bg-grad-a mb-5 mb-sm-6 mb-md-7" id="#home" />
        <SercieOne className="section-service" id="#service"/>
        <ReviewOne className="section-review bg-lighter" id="#reviews"/>
        <FeatureOne className="section-feature pb-0" id="#feature"/>
        <FeatureOneAlt className="section-feature"/>
        <FactsOne className="section-facts bg-grad-a has-ovm" id="#fact"/>
        <FaqOne className="section-faq" id="#faqs"/>
        <CtaOne className="secton-cta bg-lighter"/>
        <FooterOne className="bg-indigo is-dark" id="#footer" />
    </div>
    )
}


export default IndexOne
