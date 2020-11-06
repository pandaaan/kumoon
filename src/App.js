import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Prolog from './Components/Prolog/Prolog';
import ChapterOne from './Components/ChapterOne/ChapterOne';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 2000
    });
  }
  render() {
    return (
      <Container className="bg-main">
        <Row>
          <Col>
            <h4>mây <WbCloudyIcon /></h4>
          </Col>
        </Row>

        <br />
        <Prolog />
        <div className="place-empty"></div>
        <ChapterOne />
        <div className="place"></div>
      </Container>
    );
  }
}
export default App;
