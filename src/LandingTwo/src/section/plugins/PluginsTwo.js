import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Section } from '../../layout/section/Section'
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock'
import bs from '../../images/icon/libs/bootstrap.png'
import html5 from '../../images/icon/libs/html5.png'
import css3 from '../../images/icon/libs/css3.png'
import javascript from '../../images/icon/libs/javascript.png'
import gulp from '../../images/icon/libs/gulp.png'
import sass from '../../images/icon/libs/sass.png'
import PluginsInfo from '../../components/plugins/Plugins'
import { OutlinedChecked } from '../../components/styledList/StyledList'
import { PluginsTwoList } from './PluginsData'


const PluginsTwo = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className="g-gs justify-content-lg-between align-items-center">
                    <Col xl="6" lg="7">
                        <Row className='text-center g-gs pe-lg-4 pe-xl-0 pb-3 pb-lg-0'>
                            <Col sm="4" xs="6">
                                <PluginsInfo className="card-shadow" src={javascript} title="Javascript" />
                            </Col>
                            <Col sm="4" xs="6">
                                <PluginsInfo className="card-shadow" src={sass} title="Sass" />
                            </Col>
                            <Col sm="4" xs="6">
                                <PluginsInfo className="card-shadow" src={gulp} title="Gulp" />
                            </Col>
                            <Col sm="4" xs="6">
                                <PluginsInfo className="card-shadow" src={bs} title="Bootstrap" />
                            </Col>
                            <Col sm="4" xs="6">
                                <PluginsInfo className="card-shadow" src={html5} title="Html 5" />
                            </Col>
                            <Col sm="4" xs="6">
                                <PluginsInfo className="card-shadow" src={css3} title="CSS 3"  /> 
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="5">
                        <TextBlock>
                            <TitleH3>Language &amp; Framework</TitleH3>
                            <p>An overview of DashLite  is fully clean and premium designed admin template which developped by popular framework, beautiful hand-crafted components &amp; elements.</p>
                            <OutlinedChecked data={PluginsTwoList} className="list-lg list-primary list-checked-circle outlined" />
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default PluginsTwo
