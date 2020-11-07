import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './navi.scss';

class Navi extends Component {
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>
            </nav>
        );
    }
}
export default Navi;
