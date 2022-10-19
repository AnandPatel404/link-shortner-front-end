import React,{ useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Play from '../../components/svg/Play'
import { Section } from '../../layout/section/Section'
import { TextBlock, TitleH3 } from '../../components/textBlock/TextBlock'
import { StyledIcon } from '../../components/icon/Icon'
import { BgImage } from '../../layout/ovm/Ovm'
import ModalVideo from 'react-modal-video'

const FactsTwo = (props) =>{
    const [isOpen, setOpen] = useState(false)
    return(
        <Section className={props.className && props.className} id={props.id && props.id}>
            <Container>
                <Row className='g-gs flex-sm-row-reverse justify-content-center align-items-center'>
                    <Col md="6" sm="3" className='text-sm-center is-dark'>
                        <a onClick={()=> setOpen(true)} href="#0" className="play popup-video">
                            <StyledIcon className="styled-icon styled-icon-6x styled-icon-s5 text-white">
                                <Play />
                            </StyledIcon>
                        </a>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="SSo_EIwHSd4" onClose={() => setOpen(false)} />
                    </Col>
                    <Col md="6" sm="9">
                        <TextBlock className="is-dark pr-xl-5">
                            <h6 className="title-xs fs-15px text-purple">Our's Achievement</h6>
                            <TitleH3>2578+ Project Complited Hole Over the world.</TitleH3>
                        </TextBlock>
                        <Row className='g-gs'>
                            <Col sm="4" xs="6">
                                <div className="facts facts-s2">
                                    <div className="facts-card">
                                        <div className="h2 fw-bold text-danger pb-1">2065</div>
                                        <div className="h6 fw-normal text-white">Clients</div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4" xs="6">
                                <div className="facts facts-s2">
                                    <div className="facts-card">
                                        <div className="h2 fw-bold text-success pb-1">5043</div>
                                        <div className="h6 fw-normal text-white">Members</div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm="4" xs="6">
                                <div className="facts facts-s2">
                                    <div className="facts-card">
                                        <div className="h2 fw-bold text-purple pb-1">245</div>
                                        <div className="h6 fw-normal text-white">Awards</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <BgImage className="bg-image-faq bg-contain bg-right bg-overlay bg-overlay-dark-transparent d-none d-md-block overlay-fall bg-image-loaded"/>
        </Section>
    )
}

export default FactsTwo
