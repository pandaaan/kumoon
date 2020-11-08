import React, { Component } from 'react';
import './PTchapterOne.scss';
import { Col, Image, Row } from 'react-bootstrap';
import cube from '../../images/cube.svg';

class PTChapterTwo extends Component {

    render() {
        return (
            <div id="ch-2-2" >
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >Chapter 2: The Room</h2>
                    </Col>
                </Row>

                <div className="place"></div>
                <Row>

                    <Col className="text-center" data-aos="zoom-in" >
                        <img alt="WA-logo" className="whatsapp-logo" src={cube}></img>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>

                    </Col>
                </Row>

                <div className="place"></div>
            </div>
        );
    }
}

export default PTChapterTwo;
