import React, { Component } from 'react';
import './prolog.scss';
import { Col, Row } from 'react-bootstrap';
import Whatsapp from '../../images/whatsapp.svg';

class Prolog extends Component {
    render() {
        return (
            <div id="prolog">
                <Row>
                    <Col xs={12}>
                        <h3 data-aos="fade-right">#Prolog</h3>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row>
                    <Col xs={12} className="text-center">
                        <div className="notification" data-aos="zoom-in">
                            <span><img src={Whatsapp} alt="WA-logo" className="whatsapp-logo" /></span>
                        </div>
                    </Col>
                </Row>
                <div className="place"></div>
                <Row data-aos-delay="1000">
                    <Col xs={12}>
                        <div className="msg" data-aos="fade-up" >
                            <div className="bubble">
                                <div className="txt">
                                    <span className="name ly">&#x1F575; Ly</span>
                                    <span className="timestamp">10:20 pm</span>
                                    <span className="message">Guys check this out!</span>
                                </div>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>
                        <div className="msg" data-aos="fade-up">
                            <div className="bubble follow">
                                <div className="txt">
                                    <span className="timestamp">10:21 pm</span>
                                    <span className="message follow"><span className="text-bold">Sony Talent League by THU </span><br />
                                        <a href="https://www.trojan-unicorn.com/challenges/sony-talent-league" className="thu-link">
                                            https://www.trojan-unicorn.com/challenges/sony-talent-league
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="msg" data-aos="fade-up">
                            <div className="bubble alt">
                                <div className="txt">
                                    <span className="name alt">🧞‍♀️ Dan</span>
                                    <span className="timestamp">10:25 pm</span>
                                    <p className="message">Looks interesting!</p>
                                </div>
                                <div className="bubble-arrow alt"></div>
                            </div>
                        </div>
                        <div className="msg" data-aos="fade-up">
                            <div className="bubble">
                                <div className="txt">
                                    <span className="name my">🕵️‍♂️ My</span>
                                    <span className="timestamp">10:25 pm</span>
                                    <p className="message">cool! <span className="text-bold" >Break the distance</span>...the theme sounds difficult, though</p>
                                </div>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>
                        <div className="msg" data-aos="fade-up">
                            <div className="bubble">
                                <div className="txt">
                                    <span className="name ly">🧝‍♀️ Ly</span>
                                    <span className="timestamp">10:43 pm</span>
                                    <span className="message">We should try it. <br /> We have nothing to loose.</span>

                                </div>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>
                        <div className="msg" data-aos="fade-up">
                            <div className="bubble alt">
                                <div className="txt">
                                    <span className="name alt">🧞‍♀️ Dan</span>
                                    <span className="timestamp">10:44 pm</span>
                                    <p className="message">you can count me in ✨</p>
                                </div>
                                <div className="bubble-arrow alt"></div>
                            </div>
                        </div>
                        <div className="msg" data-aos="fade-up">
                            <div className="bubble">
                                <div className="txt">
                                    <span className="name my">🕵️‍♂️ My</span>
                                    <span className="timestamp">10:45 pm</span>
                                    <p className="message">alright, i'm in too! 👍</p>
                                </div>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>
                        <div className="msg" data-aos="fade-up">
                            <div className="bubble">
                                <div className="txt">
                                    <span className="name ly">🧝‍♀️ Ly</span>
                                    <span className="timestamp">10:55 pm</span>
                                    <span className="message">Nice! gonna call you guys in a few days for Brainstorming.</span>
                                </div>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Prolog;
