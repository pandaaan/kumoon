import React, { Component } from 'react';
import './chapterOne.scss';
import { Col, Row } from 'react-bootstrap';
import waves from '../../images/radio-waves.svg';
import brainstorming from '../../images/brainstorming.svg';

class ChapterOne extends Component {
    
    render() {
        return (
            <div id="chapterone">
                <Row>
                    <Col>
                        <h3>#Chapter 1: Brainstorming</h3>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row>
                    <Col className="text-center">
                    <img alt="WA-logo" className="whatsapp-logo" src={brainstorming}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={waves} className="waves pr-2"></img>
                        <span>ideas ideas</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ChapterOne;
