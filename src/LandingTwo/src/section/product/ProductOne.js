import React from "react"
import { Container, Row, Col } from "reactstrap"
import { ProductDesc, ProductImage, ProductInfo, ProductPrice } from "../../components/product/Product"
import { Section, SectionContant, SectionHead } from "../../layout/section/Section"
import ProductImg1 from '../../images/product/a.jpg'
import ProductImg2 from '../../images/product/b.jpg'
import ProductImg3 from '../../images/product/c.jpg'
import ProductImg4 from '../../images/product/d.jpg'

const ProductOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-center text-tenter">
                    <Col lg="7">
                        <SectionHead className="text-center">
                            <h3 className="title">Conceptual Apps &amp; Premium Theme</h3>
                            <p>An overview of <span>DashLite</span> – is fully clean and premium designed admin template which included beautiful hand-crafted components &amp; elements. Take advantage of 66 Front-end &amp; Back-end Premium Products and <span>save up to 90% OFF</span></p>
                        </SectionHead>
                    </Col>
                </Row>
                <SectionContant>
                    <Row className="gx-gs gy-5">
                        <Col md="6">
                            <a href="https://react.dashlite.net/demo1/" target="_blank" rel="noreferrer" className="card product product-s1">
                                <ProductImage className="card-inner">
                                    <img src={ProductImg1} alt="product-img"/>
                                </ProductImage>
                                <ProductInfo>
                                    <ProductDesc>
                                        <h5 className="title">Sales Report Dashboard</h5>
                                        <span className="sub-title">14 screens</span>
                                    </ProductDesc>
                                    <ProductPrice>
                                        <del>$38</del> <span>$24</span>
                                    </ProductPrice>
                                </ProductInfo>
                            </a>
                        </Col>
                        <Col md="6">
                            <a href="https://react.dashlite.net/demo2/ecommerce/index" target="_blank" rel="noreferrer" className="card product product-s1">
                                <ProductImage className="card-inner">
                                    <img src={ProductImg2} alt="product-img"/>
                                </ProductImage>
                                <ProductInfo>
                                    <ProductDesc>
                                        <h5 className="title">Multi Vendor eCommerce</h5>
                                        <span className="sub-title">34 screens</span>
                                    </ProductDesc>
                                    <ProductPrice>
                                        <del>$38</del> <span>$24</span>
                                    </ProductPrice>
                                </ProductInfo>
                            </a>
                        </Col>
                        <Col md="6">
                            <a href="https://react.dashlite.net/demo3/" target="_blank" rel="noreferrer" className="card product product-s1">
                                <ProductImage className="card-inner">
                                    <img src={ProductImg3} alt="product-img"/>
                                </ProductImage>
                                <ProductInfo>
                                    <ProductDesc>
                                        <h5 className="title">Web Analytics Manager</h5>
                                        <span className="sub-title">27 screens</span>
                                    </ProductDesc>
                                    <ProductPrice>
                                        <del>$38</del> <span>$24</span>
                                    </ProductPrice>
                                </ProductInfo>
                            </a>
                        </Col>
                        <Col md="6">
                            <a href="https://react.dashlite.net/demo4/" target="_blank" rel="noreferrer" className="card product product-s1">
                                <ProductImage className="card-inner">
                                    <img src={ProductImg4} alt="product-img"/>
                                </ProductImage>
                                <ProductInfo>
                                    <ProductDesc>
                                        <h5 className="title">Saas Management Panel</h5>
                                        <span className="sub-title">19 screens</span>
                                    </ProductDesc>
                                    <ProductPrice>
                                        <del>$38</del> <span>$24</span>
                                    </ProductPrice>
                                </ProductInfo>
                            </a>
                        </Col>
                    </Row>
                </SectionContant>
            </Container>
        </Section>
    )
}

export default ProductOne
