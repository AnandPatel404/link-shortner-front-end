import React from 'react'
import BannerFive from '../section/banner/BannerFive'
import CtaFive from '../section/cta/CtaFive'
import { FeatureFour, FeatureFourAlt } from '../section/feature/FeatureFour'
import FooterTwo from '../section/footer/FooterTwo'
import PricingFour from '../section/pricing/PricingFour'
import ReviewThree from '../section/review/ReviewThree'
import ServiceFive from '../section/service/ServiceFive'
import TeamOne from '../section/team/TeamOne'

const IndexFive = (props) => {
  return (
    <div className="nk-main">
        <BannerFive className="has-header-main-s1 bg-dark has-bg-image" id="#home" />
        <ServiceFive className="section-service pb-0" id="#service"/>
        <FeatureFour className="section-feature pb-0" id="#features " />
        <FeatureFourAlt className="section-feature" />
        <CtaFive className="section-cta is-dark has-bg-image" id="#cta" />
        <PricingFour className="pb-0" id="#package" />
        <TeamOne className="section-team pb-0" id="#team" />
        <ReviewThree className="section-reviews" id="#reviews" />
        <FooterTwo className="bg-dark is-dark" />
    </div>
  )
}

export default IndexFive
