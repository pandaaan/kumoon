import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './images/may_logo.svg';
import Prolog from './Components/PartOne/Prolog/Prolog';
import ChapterOne from './Components/PartOne/ChapterOne';
import ChapterTwo from './Components/PartOne/ChapterTwo';
import PTChapterOne from './Components/PartTwo/PTChapterOne';
import PTChapterTwo from './Components/PartTwo/PTChapterTwo';
import Footer from './Components/Footer/Footer';
import Navi from './Components/Navi/Navi';
import ArrowDown from './images/down-arrow.svg';
import thanks from './images/thanks_anim.gif';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      disable: 'mobile',
    });
  }
  render() {
    return (
      <div className="wrapper d-flex align-items-stretch">
        <Navi />
        <Container fluid id="content" >
          <div className="background-img">
            <Row className="title-bg align-items-center justify-content-center">
              <Col xs={12} className="d-flex justify-content-center">
                <div className="text-center" data-aos="fade-up ">
                  <img src={Logo} alt="logo" className="logo"></img>
                  <h2 className="subtitle-1">A Visual Workspace.</h2>
                  <p className="subtitle-2">The setting for us to be creative, create and come together to collaborate</p>
                  <br />
                  <p className="subtitle">11/20</p>
                  <p>MyDaLy</p>
                  <div className="place"></div>
                  <Image className="arrow" src={ArrowDown} />

                </div>

              </Col>
            </Row>
          </div>
          <br />
          <Container className="">
            <div className="place-empty"></div>
            <div className="place"></div>
            <h1>01: Our Story</h1>
            <hr />
            <Prolog />
            <div className="place-empty"></div>
            <div className="place"></div>
            <ChapterOne />
            <div className="place"></div>
            <div className="place"></div>
            <ChapterTwo />
            <div className="place-empty"></div>
            <div className="place"></div>
            <h1>02: The Concept</h1>
            <hr />
            <p className="quote pl-3 lead"> Mây is a visual co-working space and cloud designed like a game that especially explores the art of creative writing.</p>
            <div className="place"></div>
            <PTChapterOne />
            <div className="place"></div>
            <div className="place"></div>
            <PTChapterTwo />
            <div className="place"></div>
            <div className="place"></div>
            <Row>
              <Col xs={12} className="text-center">

                <div className="room-card">
                  <Image alt="room" className="border-radius" fluid src={thanks} />

                </div>

              </Col>
            </Row>
            <div className="place"></div>
            <Footer />
          </Container>
        </Container>
      </div >
    );
  }
}
export default App;
