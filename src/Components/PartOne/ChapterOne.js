import React, { Component } from 'react';
import './chapterOne.scss';
import { Col, Image, Row } from 'react-bootstrap';
import brainstorming from '../../images/brainstorming.svg';
import AR from '../../images/360-degrees.svg';
import TikTok from '../../images/tik-tok.svg';
import Idea from '../../images/light-bulb.svg';

class ChapterOne extends Component {

    render() {
        return (
            <div id="ch-1-2" >
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >Brainstorming</h2>
                    </Col>
                </Row>

                <div className="place"></div>
                <Row>

                    <Col className="text-center" data-aos="zoom-in" >
                        <img alt="WA-logo" className="whatsapp-logo" src={brainstorming}></img>
                    </Col>
                </Row>
                <br />
                <Row className="" data-aos="fade-up">
                    <Col className="">
                        <div className="main-desc text-center">
                            <p className="m-3">We began our project with questions like how could a cross-border idea look like and which already existing ideas might fit the theme.
                           </p>
                        </div>
                    </Col>

                </Row>
                <div className="place"></div>
                <div className="ideas">


                    <Row className="d-flex justify-content-end card-row" data-aos="fade-left">
                        <Col lg={4} xs={12} className=" brainstorm-card h-100 ">
                            <div className="brainstorm-content ">
                                <Row >
                                    <Col xs={1} >
                                        <div className="brainstorm-img ">
                                            <Image fluid src={AR} alt="ar-vr" />
                                        </div>
                                    </Col>

                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <p className="m-0 desc">A lot of early ideas were related to AR and VR, followed by many discussions that ended with "but this already exists".</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className="card-row" >
                        <Col lg={4} xs={12} className="brainstorm-card h-100 " data-aos="fade-right">
                            <div className="brainstorm-content">
                                <Row >
                                    <Col xs={1} >
                                        <div className="brainstorm-img ">
                                            <Image fluid src={TikTok} alt="ar-vr" />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <p className="m-0 desc">Funnily enough TikTok can be considered a cross-border idea since it combines the two different art forms of film and music.</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-end card-row" data-aos="fade-left">
                        <Col lg={4} xs={12} className="brainstorm-card h-100 ">
                            <div className="brainstorm-content">
                                <Row >
                                    <Col xs={1} >
                                        <div className="brainstorm-img ">
                                            <Image fluid src={Idea} alt="ar-vr" />
                                        </div>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <p className="m-0 desc">So we came to realize that the idea didn't need to be truly unique yet still could be innovative.</p>

                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="place"></div>
            </div>
        );
    }
}

export default ChapterOne;
