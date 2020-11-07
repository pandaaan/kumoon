import React, { Component } from 'react';
import './chapterOne.scss';
import { Col, Row } from 'react-bootstrap';
import Hammer from '../../images/hammer.svg';


class ChapterOne extends Component {

    render() {
        return (
            <div id="ch-1-2">
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >Chapter 3: Solidifying the idea</h2>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row>
                    <Col className="text-center" data-aos="zoom-in" >
                        <img alt="WA-logo" className="whatsapp-logo" src={Hammer}></img>
                    </Col>
                </Row>
                <div className="place"></div>
            </div>
        );
    }
}

export default ChapterOne;
