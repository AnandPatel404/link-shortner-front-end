import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Section, SectionHead } from '../../layout/section/Section'
import bs from '../../images/icon/libs/bootstrap.png'
import html5 from '../../images/icon/libs/html5.png'
import css3 from '../../images/icon/libs/css3.png'
import laravel from '../../images/icon/libs/laravel.png'
import gulp from '../../images/icon/libs/gulp.png'
import sass from '../../images/icon/libs/sass.png'
import react from '../../images/icon/libs/react.png'
import npm from '../../images/icon/libs/npm.png'
import PluginsInfo from '../../components/plugins/Plugins'

const PluginsOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg="7">
                        <SectionHead className="text-center">
                            <h3 className="title">Technologies and Plugins</h3>
                            <p>Continually network virtual strategic theme areas vis-a-vis ubiquitous potentialities. Holisticly negotiate focused e-tailers without premium solutions.</p>
                        </SectionHead>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col xl="8" lg="10">
                        <Row className='g-gs'>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={bs} title="Bootstrap 4" />
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={html5} title="Html 5" />
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={css3} title="CSS" />
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={laravel} title="Laravel" />
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={gulp} title="Gulp" />
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={sass} title="Sass" />
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={react} title="React" />
                            </Col>
                            <Col md="3" sm="4" xs="6">
                                <PluginsInfo src={npm} title="NPM" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default PluginsOne
