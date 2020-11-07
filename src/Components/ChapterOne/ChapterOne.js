import React, { Component } from 'react';
import './chapterOne.scss';
import { Col, Image, Row } from 'react-bootstrap';
import brainstorming from '../../images/brainstorming.svg';
import AR from '../../images/360-degrees.svg';
import Mail from '../../images/mailbox.svg';
import Mindpalace from '../../images/emotional-intelligence.svg';
import Workspace from '../../images/working.svg';

class ChapterOne extends Component {

    render() {
        return (
            <div id="chapterOne">
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >#Chapter 1: Brainstorming</h2>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row>
                    <Col className="text-center" data-aos="zoom-in" >
                        <img alt="WA-logo" className="whatsapp-logo" src={brainstorming}></img>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row className="d-flex justify-content-end card-row" data-aos="fade-up">
                    <Col lg={4} xs={12} className="brainstorm-card h-100 ">
                        <div className="brainstorm-content ">
                            <Row >
                                <Col xs={1} >
                                    <div className="brainstorm-img ">
                                        <Image fluid src={AR} alt="ar-vr" />
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center pl-5 ">
                                    <h4 className="">AR/VR</h4>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>

                                </Col>
                            </Row>

                        </div>

                    </Col>
                </Row>
                <Row className="card-row" data-aos="fade-up">
                    <Col lg={4} xs={12} className="brainstorm-card h-100 ">
                        <div className="brainstorm-content">
                            <Row >
                                <Col xs={1} >
                                    <div className="brainstorm-img ">
                                        <Image fluid src={Mail} alt="ar-vr" />
                                    </div>
                                </Col>
                                <Col className="d-flex align-items-center pl-5 ">
                                    <h4 className="">Bluetooth Penpal</h4>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-end card-row" data-aos="fade-up">
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
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className=" card-row" data-aos="fade-up">
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
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>

                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ChapterOne;
