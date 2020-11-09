import React, { Component } from 'react';
import './PTchapterOne.scss';
import { Col, Row, Image } from 'react-bootstrap';
import concept from '../../images/conversation.svg';
import roomVorschau from '../../images/statement/room_vorschau.png'
import Logo from '../../images/may_logo.svg';

class PTwoChapterOne extends Component {

    render() {
        return (
            <div id="ch-2-1" >
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >Project Statement</h2>
                    </Col>
                </Row>

                <div className="place"></div>
                <Row>

                    <Col className="text-center" data-aos="zoom-in" >
                        <img alt="logo" className="roomVorschau" src={Logo}></img>
                    </Col>
                </Row>
                <br />
                <div className="place"></div>
                <Row>
                    <Col data-aos="fade-up">
                        <p>
                            Mây is a visual co-working space and cloud designed like a game that especially explores the art of creative writing.
                        </p>
                        <p>
                            A place to bring creative people together, whether because of certain distances or other circumstances. It's equipped with all kinds of organising tools, needed for great collaborations and an inbuilt text editor to let your creative juices flow.
                        </p>
                        <p>The setting is inside a 3d environment which is a room/workspace for you and your partner or team, as well as avatars that represent you and your actions.</p>
                        <p>
                            Although there are many tools to work together online such as dropbox paper, google docs or notion, what we found them to be lacking was the feeling of closeness and presence. Therefore we wanted to enhance what already existed by adding avatars that represent us and a designated and customiseable space to work in. The customisability furthermore allows us to create a work space that we feel comfortable in while creating something that connects all team members.
                        </p>
                    </Col>
                </Row>

                <div className="place"></div>
            </div>
        );
    }
}

export default PTwoChapterOne;
