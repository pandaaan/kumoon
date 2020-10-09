import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Navi.scss';
import Clock from '../Clock';

const room = require('../images/room.png');
//const roomSvg = require('../images/room.svg');
//const livingroom = require('../images/livingroom.png');

class Menu extends React.Component {

    constructor() {
        super()
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.state = {
            currentDate: date
        }
    }
    render() {
        return (

            <Row className="whole-content">
                <Col lg={2} xs={1} className="col-side-menu">
                    <div className="row-projectname">
                        <Row className="row-title">
                            <Col xs={12}>
                                <p className="projectname">  RoomName <span><ExpandMoreIcon /></span></p>
                            </Col>
                        </Row>
                        <Row className="row-member">
                            <Col xs={12}>
                                <p> <span><ExpandLessIcon /></span> members</p>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col lg={3}>
                                        <div className="avatar">

                                        </div>
                                    </Col>
                                    <Col>
                                        <p>Dan</p>
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col lg={3}>
                                        <div className="avatar">

                                        </div>
                                    </Col>
                                    <Col>
                                        <p>Ly</p>
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center align-items-center">
                                    <Col lg={3}>
                                        <div className="avatar">

                                        </div>
                                    </Col>
                                    <Col>
                                        <p>My</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col lg={10} className="col-header">
                    <Row className="row-header d-flex flex-row-reverse">
                        <div className="d-flex flex-row">
                            <div className="header-function notification  h-42 d-flex justify-content-center align-items-center">
                                <div>
                                    <NotificationsIcon />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="header-function search h-42 d-flex justify-content-center align-items-center">
                                <div><SearchIcon /></div>
                            </div>
                            <div className="space"></div>
                            <div className="header-function setting h-42 d-flex justify-content-center align-items-center">
                                <div>
                                    <MoreHorizIcon />
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row className="row-content">
                        <div className="div-img d-flex justify-content-center align-items-center">
                            <Image fluid alt="room" src={room} />
                        </div>
                    </Row>
                    <Row className="row-clock">
                        <Col xs={12} className="">
                            <Row className=" d-flex flex-row-reverse" >
                                <div className="p-0 m-0 clock"><Clock /></div>
                            </Row>
                            <Row className="row-date d-flex flex-row-reverse">
                                <p className="p-0 m-0"> {this.state.currentDate}</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row >
        );
    }

}

export default Menu;