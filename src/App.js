import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './images/may_logo.svg';
import Prolog from './Components/PartOne/Prolog/Prolog';
import ChapterOne from './Components/PartOne/ChapterOne';
import ChapterTwo from './Components/PartOne/ChapterTwo';
import PTwoChapterOne from './Components/PartTwo/PTChapterOne';
import Navi from './Components/Navi/Navi';
import ArrowDown from './images/down-arrow.svg';


class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
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
            <h1>Part 01: Our Story</h1>
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
            <h1>Part 02: The Concept</h1>
            <hr />
            <p>"Mây is a visual workspace in which you can to be creative, create and come together to collaborate with others."</p>
            <div className="place"></div>
            <PTwoChapterOne />
          </Container>
        </Container>
      </div >
    );
  }
}
export default App;
