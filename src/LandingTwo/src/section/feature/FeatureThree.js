import React from "react"
import { Container, Col, Row } from "reactstrap"
import { ImageBlock } from "../../components/images/Images"
import { Section } from "../../layout/section/Section"
import { TextBlock, TitleH2 } from "../../components/textBlock/TextBlock"
import ThumbImg1 from '../../images/gfx/d.png'
import ThumbImg2 from '../../images/gfx/e.png'
import { CheckedCircle } from "../../components/styledList/StyledList"
import { FeatureThereeList } from './FeatureData'


const FeatureThree = (props) => {
  return (
    <Section className = {props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="g-gs justify-content-between align-items-center">
                <Col lg="6"> 
                    <ImageBlock>
                        <img src={ThumbImg1} alt="thumb-img" />
                    </ImageBlock>
                </Col>
                <Col lg="5">
                    <TextBlock>
                        <TitleH2 className="mb-3">Topics, Notes And Action Items All In One Place</TitleH2>
                        <ul className="list list-lg list-purple list-checked-circle gy-4">
                            <li className="pl-5"><strong>Amazing Features</strong>: For Enhanced performance we use Lite Speed web server, HTTP/2,PHP7.We make your Everything stays organized by to pic.Need to discuss a topic further.</li>
                            <li className="pl-5"><strong>Topics, notes and action items</strong>:  Everything stays organized by topic.Need to discuss a topic further? Set it to Revisit and it.We make your everything stays organized.</li>
                        </ul>
                    </TextBlock>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

const FeatureThreeAlt = (props) =>{
    return(
        <Section className={ props.className && props.className } id={ props.id && props.id }>
            <Container>
                <Row className="g-gs flex-row-reverse justify-content-between align-items-center">
                    <Col lg="6">
                        <ImageBlock>
                            <img src={ThumbImg2} alt="thumb-img" />
                        </ImageBlock>
                    </Col>
                    <Col lg="5">
                        <TextBlock>
                            <TitleH2 className="mb-3">Amazing Tool  For Creative Profesional</TitleH2>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination.At the end of the day, going forward, a new normal that has envolved from generation X ison the runway heading toward</p>
                            <CheckedCircle className="list-lg list-purple list-checked-circle pt-1" data={FeatureThereeList} />
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export { FeatureThree, FeatureThreeAlt }
