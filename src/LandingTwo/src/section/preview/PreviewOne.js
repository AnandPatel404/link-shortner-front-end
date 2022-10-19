import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Section, SectionHead } from '../../layout/section/Section'
import demo1 from '../../images/product/a.jpg'
import demo2 from '../../images/product/b.jpg'
import demo3 from '../../images/product/c.jpg'
import demo4 from '../../images/product/d.jpg'
import demo5 from '../../images/product/e.jpg'
import demo6 from '../../images/product/f.jpg'

const PreviewOne = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-center">
                <Col lg="7" md="10">
                    <SectionHead>
                        <h2 className="title fw-medium">Multipurpose Admin Dashboard</h2>
                        <p>DashLite template included different layouts that fit into any application. Also all the layouts supported Dark Theme Mode &amp; RTL Compatibility.</p>
                    </SectionHead>
                </Col>
            </Row>
            <Row className="text-center g-gs justify-center">
                <Col lg="4" sm="6" xs="9">
                    <a href="https://react.dashlite.net/demo1/" target="_blank" rel="noreferrer" className="card card-shadow product product-s2">
                        <div className="card-inner product-img bg-purple">
                            <img src={demo1} alt="" />
                        </div>
                        <div className="card-inner product-info">
                            <h6 className="title">Layout - Demo 1</h6>
                        </div>
                    </a>
                </Col>
                <Col lg="4" sm="6" xs="9">
                    <a href="https://react.dashlite.net/demo2/" target="_blank" rel="noreferrer" className="card card-shadow product product-s2">
                        <div className="card-inner product-img bg-pink">
                            <img src={demo2} alt="" />
                        </div>
                        <div className="card-inner product-info">
                            <h6 className="title">Layout - Demo 2</h6>
                        </div>
                    </a>
                </Col>
                <Col lg="4" sm="6" xs="9">
                    <a href="https://react.dashlite.net/demo3/" target="_blank" rel="noreferrer" className="card card-shadow product product-s2">
                        <div className="card-inner product-img bg-teal">
                            <img src={demo3} alt="" />
                        </div>
                        <div className="card-inner product-info">
                            <h6 className="title">Layout - Demo 3</h6>
                        </div>
                    </a>
                </Col>
                <Col lg="4" sm="6" xs="9">
                    <a href="https://react.dashlite.net/demo4/" target="_blank" rel="noreferrer" className="card card-shadow product product-s2">
                        <div className="card-inner product-img bg-danger">
                            <img src={demo4} alt="" />
                        </div>
                        <div className="card-inner product-info">
                            <h6 className="title">Layout - Demo 4</h6>
                        </div>
                    </a>
                </Col>
                <Col lg="4" sm="6" xs="9">
                    <a href="https://react.dashlite.net/demo5/" target="_blank" rel="noreferrer" className="card card-shadow product product-s2">
                        <div className="card-inner product-img bg-warning">
                            <img src={demo5} alt="" />
                        </div>
                        <div className="card-inner product-info">
                            <h6 className="title">Layout - Demo 5</h6>
                        </div>
                    </a>
                </Col>
                <Col lg="4" sm="6" xs="9">
                    <a href="https://react.dashlite.net/demo6/" target="_blank" rel="noreferrer" className="card card-shadow product product-s2">
                        <div className="card-inner product-img bg-info">
                            <img src={demo6} alt="" />
                        </div>
                        <div className="card-inner product-info">
                            <h6 className="title">Layout - Demo 6</h6>
                        </div>
                    </a>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default PreviewOne
