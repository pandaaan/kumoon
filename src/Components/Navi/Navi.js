import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './navi.scss';
import Logo from '../../images/may_logo_white.svg';

class Navi extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header text-center">
                    <Image src={Logo} alt="sidebar-logo" className="sidebar-logo"></Image>
                </div>
            </nav>
        );
    }
}
export default Navi;
