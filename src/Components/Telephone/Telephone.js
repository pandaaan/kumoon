import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './telephone.scss';
import telephoneIcon from '../../images/telephone.svg';
;

class Telephone extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col className="text-center">
                        <img alt="WA-logo" className="whatsapp-logo" src={telephoneIcon}></img>
                        <div className="line"></div>
                    </Col>
                </Row>
                <br /><br /><br /><br />
            </div>
        );
    }
}

export default Telephone;
