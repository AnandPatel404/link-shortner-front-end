import React from 'react'
import BannerSix from '../section/banner/BannerSix'
import CtaSix from '../section/cta/CtaSix'
import { FeatureFive, FeatureFiveAlt } from '../section/feature/FeatureFive'
import FooterFour from '../section/footer/FooterFour'
import PluginsTwo from '../section/plugins/PluginsTwo'
import PreviewOne from '../section/preview/PreviewOne'
import ReviewFour from '../section/review/ReviewFour'

const IndexSix = (props) => {
  return (
    <div className="nk-main">
        <BannerSix className="has-header-main-s1 bg-dark" id="#home" />
        <FeatureFive className="section-feature" id="#feature" />
        <FeatureFiveAlt className="section-feature bg-dark is-dark" />
        <PreviewOne className="section-privew pb-0" id="#previews" />
        <PluginsTwo className="section-plugin pb-0" />
        <ReviewFour className="section-testimonial" id="#reviews" />
        <CtaSix className="section-cta bg-dark is-dark" id="#cta" />
        <FooterFour className="footer" />
    </div>
  )
}

export default IndexSix
