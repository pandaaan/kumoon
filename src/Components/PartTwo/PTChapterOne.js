import React, { Component } from 'react';
import './PTchapterOne.scss';
import { Col, Image, Row } from 'react-bootstrap';
import concept from '../../images/conversation.svg';
class PTwoChapterOne extends Component {

    render() {
        return (
            <div id="ch-2-1" >
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >Chapter 1: Project Statement</h2>
                    </Col>
                </Row>

                <div className="place"></div>
                <Row>

                    <Col className="text-center" data-aos="zoom-in" >
                        <img alt="WA-logo" className="whatsapp-logo" src={concept}></img>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <p>
                            Mây is a visual co-working space designed like a game that especially explores the art of creative writing. The visual elements help to keep the room sorted. If files are created without order, it shows in the room.
                            Additionally, tools to organize projects are available, since the goal is to work collaboratively with others. When we developed this idea, we strongly focussed on the theme "break the creative distance". Although there are many tools to work together online such as dropbox paper, google docs or notion, what we found them to be lacking was the feeling of closeness and presence. Therefore we wanted to enhance what already existed by adding avatars that represent us and a designated and customizeable space to work in. The customisability furthermore allows us to create a work space that we feel comfortable in while creating something that connects all team members.
                        </p>
                    </Col>
                </Row>

                <div className="place"></div>
            </div>
        );
    }
}

export default PTwoChapterOne;
