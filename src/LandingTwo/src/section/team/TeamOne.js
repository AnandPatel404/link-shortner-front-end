import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Section, SectionHead } from '../../layout/section/Section'
import teamImg1 from '../../images/team/a.jpg'
import teamImg2 from '../../images/team/b.jpg'
import teamImg3 from '../../images/team/c.jpg'
import teamImg4 from '../../images/team/d.jpg'
import { SocialIcon } from '../../components/icon/Icon'
import { TeamDataOne } from './TeamData'

const TeamOne = (props) => {
  return (
    <Section className={props.className && props.className} id={props.id && props.id}>
        <Container>
            <Row className="justify-content-center text-center">
                <Col xl="7" lg="9">
                    <SectionHead>
                        <h2 className="title text-dark px-1">Have questions or need support? Our team is here to help!</h2>
                        <p>Continually network virtual strategic theme areas vis-a-vis ubiquitous potentialities. Holisticly negotiate focused e-tailers without premium solutions.</p>
                    </SectionHead>
                </Col>
            </Row>
            <Row className="g-gs justify-content-center">
                <Col lg="3" xs="6">
                    <div className="team team-s1">
                       <div className="team-portrait">
                            <img src={teamImg1} alt="" />
                       </div>
                        <div className="team-info">
                            <h6 className="team-name">Marthe Dodier</h6>
                            <div className="team-role">Web Developer</div>
                            <SocialIcon className="social-primary" data={TeamDataOne} />
                        </div>
                   </div>
                </Col>
                <Col lg="3" xs="6">
                    <div className="team team-s1">
                       <div className="team-portrait">
                            <img src={teamImg2} alt="" />
                       </div>
                        <div className="team-info">
                            <h6 className="team-name">Kathleen Castro</h6>
                            <div className="team-role">Web Developer</div>
                            <SocialIcon className="social-primary" data={TeamDataOne} />
                        </div>
                   </div>
                </Col>
                <Col lg="3" xs="6">
                    <div className="team team-s1">
                       <div className="team-portrait">
                            <img src={teamImg3} alt="" />
                       </div>
                        <div className="team-info">
                            <h6 className="team-name">Agraman Bourde</h6>
                            <div className="team-role">Web Developer</div>
                            <SocialIcon className="social-primary" data={TeamDataOne} />
                        </div>
                   </div>
                </Col>
                <Col lg="3" xs="6">
                    <div className="team team-s1">
                       <div className="team-portrait">
                            <img src={teamImg4} alt="" />
                       </div>
                        <div className="team-info">
                            <h6 className="team-name">Loring Duperra</h6>
                            <div className="team-role">Web Developer</div>
                            <SocialIcon className="social-primary" data={TeamDataOne} />
                        </div>
                   </div>
                </Col>
            </Row>
        </Container>
    </Section>
  )
}

export default TeamOne
