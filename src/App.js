import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './images/may_logo.svg';
import Prolog from './Components/Prolog/Prolog';
import ChapterOne from './Components/ChapterOne/ChapterOne';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000,
      // disable: 'mobile'
    });
  }
  render() {
    return (
      <Container className="bg-main">
        <Row className="title-bg align-items-center justify-content-center">
          <Col xs={12} className="d-flex justify-content-center">
            <div className="" data-aos="fade-up text-center">
              <img src={Logo} className="logo"></img>
              <h2 className="subtitle-1">let's get creative.</h2>
              <br />
              <p className="subtitle">11/20</p>
              <p>dan, ly, my</p>
            </div>

          </Col>
        </Row>

        <br />
        <Prolog />
        <div className="place-empty"></div>
        <ChapterOne />
        <div className="place"></div>
      </Container >
    );
  }
}
export default App;
