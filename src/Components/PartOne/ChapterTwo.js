import React, { Component } from 'react';
import './chapterTwo.scss';
import { Col, Row, Image } from 'react-bootstrap';
import Hammer from '../../images/hammer.svg';
import Workingspace from '../../images/working.svg';

class ChapterOne extends Component {

    render() {
        return (
            <div id="ch-1-3">
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >Chapter 3: Solidifying The Idea</h2>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row>
                    <Col className="text-center" data-aos="zoom-in" >
                        <img alt="WA-logo" className="whatsapp-logo" src={Hammer}></img>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row className="card-row d-flex align-items-center justify-content-center" >
                    <Col lg={6} xs={12} className="brainstorm-card h-100 " data-aos="fade-right">
                        <div className="brainstorm-content">
                            <Row className="justify-content-center align-items-center">
                                <Col xs={1} >
                                    <div className="brainstorm-img">
                                        <Image fluid src={Workingspace} alt="ar-vr" />
                                    </div>
                                </Col>
                                <Col>
                                    <h5 className="pl-3">Visual Co-Workspace</h5>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col>
                                    <p className="m-0 desc">This workspace is presented as a room that you can furnish and interact with. The user are visible throught avatars, who display the actions of the user.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    {/* <Col>
                        <Row>
                            <Col className="d-flex justify-content-around desc">
                                <div className="ideas-feature-card d-flex align-items-center justify-content-center">
                                    <p className="mb-0">Avatar</p>
                                </div>

                                <div className="ideas-feature-card d-flex align-items-center justify-content-center">
                                    <p className="mb-0">Objects</p>
                                </div>
                                <div className="ideas-feature-card d-flex align-items-center justify-content-center">
                                    <p className="mb-0">Project Management Tools</p>
                                </div>
                            </Col>

                        </Row>

                    </Col> */}
                </Row>
                <div className="place"></div>
            </div>
        );
    }
}

export default ChapterOne;
