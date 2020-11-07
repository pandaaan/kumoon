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
      <Container fluid className="bg-main p-0 m-0">
        <Container>
          <Row className="title-bg align-items-center justify-content-center">
            <Col xs={12} className="d-flex justify-content-center">
              <div className="" data-aos="fade-up ">
                <img src={Logo} alt="logo" className="logo"></img>
                <h2 className="subtitle-1">let's get creative.</h2>
                <br />
                <p className="subtitle">11/20</p>
                <p>dan, ly, my</p>
              </div>

            </Col>
          </Row>

        </Container>

        <br />
        <Container>
          <Prolog />
          <div className="place-empty"></div>
        </Container>
        <div className="blue-bg">
          <Container>
            <div className="place"></div>
            <ChapterOne />
            <div className="place"></div>
          </Container>
        </div>


      </Container >
    );
  }
}
export default App;
