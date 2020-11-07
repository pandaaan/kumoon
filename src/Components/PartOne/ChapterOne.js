import React, { Component } from 'react';
import './chapterOne.scss';
import { Col, Image, Row } from 'react-bootstrap';
import brainstorming from '../../images/brainstorming.svg';
import AR from '../../images/360-degrees.svg';
import TikTok from '../../images/tik-tok.svg';
import Mindpalace from '../../images/emotional-intelligence.svg';
import Workspace from '../../images/working.svg';

class ChapterOne extends Component {

    render() {
        return (
            <div id="ch-1-1">
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >Chapter 2: Brainstorming</h2>
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
                            <p className="m-3">We were thinking about how a cross-border idea might look like and which ideas that already exists might fit the theme.
                           </p>
                        </div>
                    </Col>

                </Row>
                <div className="place"></div>
                <Row className="d-flex justify-content-end card-row" data-aos="fade-left">
                    <Col lg={4} xs={12} className=" brainstorm-card h-100 ">
                        <div className="brainstorm-content ">
                            <Row >
                                <Col xs={1} >
                                    <div className="brainstorm-img ">
                                        <Image fluid src={AR} alt="ar-vr" />
                                    </div>
                                </Col>
                                {/* <Col className="d-flex align-items-center pl-5 ">
                                    <h4 className="">AR/VR</h4>
                                </Col> */}
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <p className="m-0 desc">A lot of ideas were related to AR and VR and how conversations often endet with, "but this already exists".</p>
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
                                {/* <Col className="d-flex align-items-center pl-5 ">
                                    <h4 className="">TikTok</h4>
                                </Col> */}
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <p className="m-0 desc">Funnily enough TikTok could be considered cross-border since they combine different art forms of film and music, hence we thought the idea mustn't be truly unique but innovative.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-end card-row" data-aos="fade-left">
                    <Col lg={4} xs={12} className="brainstorm-card h-100 ">
                        <div className="brainstorm-content">
                            <Row >
                                <Col xs={1} >
                                    <div className="brainstorm-img ">
                                        <Image fluid src={Mindpalace} alt="ar-vr" />
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center pl-5 ">
                                    <h4 className="">Mindpalace</h4>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <p className="m-0 desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className=" card-row" data-aos="fade-right">
                    <Col lg={4} xs={12} className="brainstorm-card h-100 ">
                        <div className="brainstorm-content">
                            <Row >
                                <Col xs={1} >
                                    <div className="brainstorm-img ">
                                        <Image fluid src={Workspace} alt="ar-vr" />
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center pl-5 ">
                                    <h4 className="">Digital Workingspace</h4>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <p className="m-0 desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <div className="place"></div>
            </div>
        );
    }
}

export default ChapterOne;
