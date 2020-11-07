import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './images/may_logo.svg';
import Prolog from './Components/PartOne/Prolog/Prolog';
import ChapterOne from './Components/PartOne/ChapterOne';
import ChapterTwo from './Components/PartOne/ChapterTwo';
import Navi from './Components/Navi/Navi';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return (
      <Container className="bg-main wrapper">
        <Navi />
        <div id="content">
          <Row className="title-bg align-items-center justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="" data-aos="fade-up ">
                <img src={Logo} alt="logo" className="logo"></img>
                <h2 className="subtitle-1">A Visual Workspace.</h2>
                <p className="subtitle-2">The setting for us to be creative, create and come together to collaborate</p>
                <br />
                <p className="subtitle">11/20</p>
                <p>MyDaLy</p>
              </div>
            </Col>
          </Row>

          <br />

          <h1>Part 1: Our Story</h1>
          <hr />
          <Prolog />
          <div className="place-empty"></div>
          <div className="place"></div>
          <ChapterOne />
          <div className="place"></div>
          <div className="place"></div>
          <ChapterTwo />
          <div className="place"></div>
        </div>
      </Container >
    );
  }
}
export default App;
