import React, { Component } from 'react';
import './chapterOne.scss';
import { Col, Image, Row } from 'react-bootstrap';
import brainstorming from '../../images/brainstorming.svg';
import AR from '../../images/360-degrees.svg';
import Mail from '../../images/mailbox.svg';
import Mindpalace from '../../images/emotional-intelligence.svg';

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
                        <div className="brainstorm-content">
                            <div className="brainstorm-img d-flex align-items-center">
                                <Image fluid src={AR} alt="ar-vr" /><h4 className="ml-4">AR/VR</h4>
                            </div>

                        </div>
                    </Col>
                </Row>
                <Row className="card-row" data-aos="fade-up">
                    <Col lg={4} xs={12} className="brainstorm-card h-100 ">
                        <div className="brainstorm-content">
                            <div className="brainstorm-img d-flex align-items-center">
                                <Image fluid src={Mail} alt="mailbox" /><h4 className="ml-4">Bluetooth Penpals</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-end card-row" data-aos="fade-up">
                    <Col lg={4} xs={12} className="brainstorm-card h-100 ">
                        <div className="brainstorm-content">
                            <div className="brainstorm-img d-flex align-items-center">
                                <Image fluid src={Mindpalace} alt="mindpalace" /><h4 className="ml-4">Mindpalace</h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ChapterOne;
