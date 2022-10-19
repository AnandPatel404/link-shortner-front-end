import React from 'react'
import { Col, Container, Row } from "reactstrap"
import { ImageBlock } from '../../components/images/Images'
import { Section } from '../../layout/section/Section'
import ThumbImg1 from '../../images/gfx/a.png'
import ThumbImg2 from '../../images/gfx/b.png'
import { Paragraph, TextBlock, TitleH2 } from '../../components/textBlock/TextBlock'
import { Link } from '../../components/button/Button'
import { OutlinedChecked } from '../../components/styledList/StyledList'
import {FeatureOneList} from './FeatureData'


const FeatureOne = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col lg="5">
                        <ImageBlock className="img-block-s1 left">
                            <img src={ThumbImg1} alt="Dashlite" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock className="pr-xl-5">
                            <TitleH2>Simplifies Saas data warehouse management</TitleH2>
                            <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Paragraph>
                            <OutlinedChecked className="list-lg list-success list-checked-circle outlined" data={FeatureOneList} />
                            <ul className="btns-inline">
                                <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-lg btn-primary">Get The App</Link></li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

const FeatureOneAlt = (props) =>{
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='flex-row-reverse justify-content-between align-items-center'>
                    <Col lg="5">
                        <ImageBlock className="img-block-s1 right">
                            <img src={ThumbImg2} alt="Dashlite" />
                        </ImageBlock>
                    </Col>
                    <Col lg="6">
                        <TextBlock>
                            <TitleH2>Instantly upload any software usage dashlite data</TitleH2>
                            <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Paragraph>
                            <Paragraph>But the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Paragraph>
                            <ul className="btns-inline">
                                <li><Link to="https://1.envato.market/reactdashlite" target="_blank" rel="noreferrer" className="btn-lg btn-primary">Get The App</Link></li>
                            </ul>
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export {FeatureOne, FeatureOneAlt}
