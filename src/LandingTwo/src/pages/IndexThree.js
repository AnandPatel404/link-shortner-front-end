import "../assets/scss/dashlite.scss";
import React from "react";
import BannerThree from "../section/banner/BannerThree";
import BrandOne from "../section/brand/BrandOne";
import CtaThree from "../section/cta/CtaThree";
import FactsTwo from "../section/facts/FactsTwo";
import FooterTwo from "../section/footer/FooterTwo";
import PluginsOne from "../section/plugins/PluginsOne";
import PricingTwo from "../section/pricing/PricingTwo";
import ProductOne from "../section/product/ProductOne";
import ReviewThree from "../section/review/ReviewThree";
import ServiceThree from "../section/service/ServiceThree";

const IndexThree = (props) => {
	return (
		<div className="nk-main">
			<BannerThree className="has-header-main-s1 next-overlap-3x" id="#home" />
			<ServiceThree className="section-service py-0" id="#service" />
			<ProductOne className="section-product" id="#product" />
			<FactsTwo className="section-facts bg-dark has-bg-image" id="#facts" />
			<PluginsOne className="section-plugin bg-lighter text-center" id="#plugin" />
			<PricingTwo className="section-pricing" id="#pricing" />
			<CtaThree className="section-cta text-light py-0" id="#cta" />
			<ReviewThree className="section-reviews" id="#reviews" />
			<BrandOne className="section-brand section-sm bg-lighter" id="#brands" />
			<FooterTwo className="bg-dark is-dark" />
		</div>
	);
};

export default IndexThree;
