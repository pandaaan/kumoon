import React, { Component } from 'react';
import './PTchapterTwo.scss';
import { Col, Image, Row } from 'react-bootstrap';
import cube from '../../images/cube.svg';
import room from '../../images/room_interaction/room_char_interaction_workfile-min.JPG';
import bookshelf from '../../images/objects/bookshelf.png';
import insideBook from '../../images/objects/insideBook.png';
import postit from '../../images/objects/postit.png';
import carton from '../../images/objects/carton.png';
import calendar from '../../images/objects/calendar.png';
import calendar2 from '../../images/objects/calendar_2.png';
import calendar3 from '../../images/objects/calendar_3.png';
import thoughts from '../../images/objects/thoughts.png';
import whiteboard from '../../images/objects/whiteboard.png';
import radio from '../../images/radio.svg';
import picture from '../../images/paint.svg';



class PTChapterTwo extends Component {

    render() {
        return (
            <div id="ch-2-2" >
                <Row>
                    <Col>
                        <h2 data-aos="fade-right" data-aos-duration="1000" >The Room</h2>
                        <p>click through the room to see what you can do with mây.</p>
                    </Col>
                </Row>

                <div className="place"></div>
                <Row>

                    <Col className="text-center" data-aos="zoom-in" >
                        <Image alt="WA-logo" className="whatsapp-logo" src={cube} />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col xs={12}>
                        {/* <div className="room-card">
                            <Image alt="room" className="border-radius" fluid src={room} />
                            <Image alt="room-2" className="border-radius img-top" fluid src={room2} />
                        </div> */}
                        <div className="room-card">
                            <Image alt="room" className="border-radius" fluid src={room} />
                            <svg className="border-radius img-top" id="Ebene_1" data-name="Ebene 1"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
                                <title>room_points</title>
                                <circle data-toggle="modal" data-target="#bookshelfmodal" id="bookshelf" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="930" cy="177.39" r="15" />
                                <circle data-toggle="modal" data-target="#postitmodal" id="postit" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="1195.04" cy="147.39" r="15" />
                                <circle data-toggle="modal" data-target="#whiteboardmodal" id="whiteboard" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="1433.86" cy="247.45" r="15" />
                                <circle data-toggle="modal" data-target="#plantmodal" id="plant" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="1615.4" cy="364.7" r="15" />
                                <circle data-toggle="modal" data-target="#cartonmodal" id="carton" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="1160.6" cy="360.9" r="15" />
                                <circle data-toggle="modal" data-target="#pcmodal" id="pc" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="581.7" cy="242" r="15" />
                                <circle data-toggle="modal" data-target="#trashmodal" id="trashbin" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="105.4" cy="603.7" r="15" />
                                <circle data-toggle="modal" data-target="#calendarmodal" id="calendar" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="1354.8" cy="139.5" r="15" />
                                <circle data-toggle="modal" data-target="#thoughtsmodal" id="thoughts" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="770.6" cy="333" r="15" />
                                <circle data-toggle="modal" data-target="#booksmodal" id="books" fill="#e3f6f5" stroke="#272343" strokeMiterlimit="10" strokeWidth="12px" className="cls-1" cx="390.9" cy="360.9" r="15" />
                            </svg>
                        </div>

                    </Col>
                </Row>
                <div className="place"></div>

                <Row>
                    <Col >
                        <p>Additional Features</p>
                        <div className="d-flex ">
                            <div className="add mr-5 cls-1" data-toggle="modal" data-target="#radiomodal">
                                <Image src={radio} fluid alt="radio" />
                            </div>
                            <div className="add cls-1" data-toggle="modal" data-target="#picturemodal">
                                <Image src={picture} fluid alt="picture" />
                            </div>
                        </div>

                    </Col>
                </Row>
                <div className="place"></div>
                {/* <!--BOOKSHELF--> */}

                <div className="modal fade" id="bookshelfmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Bookshelf</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Can carry a limited amount of things like books or cartons.</p>
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <Image className="d-block w-100" alt="bookshelf" src={bookshelf}></Image>
                                        </div>
                                        <div class="carousel-item">
                                            <Image className="d-block w-100" fluid src={insideBook}></Image>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                {/* <!--POSTIT--> */}

                <div className="modal fade" id="postitmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Post-it</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>For nice messages or jokes. Write or doodle whatever you want (with a limit)!</p>
                                <Image fluid alt="postit" src={postit}></Image>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--whiteboard--> */}

                <div className="modal fade" id="whiteboardmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Whiteboard</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>For doodle stuff, kanban, or real pitches. Could also be a flipchart.</p>
                                <Image fluid alt="postit" src={whiteboard}></Image>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--plant--> */}

                <div className="modal fade" id="plantmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Plant</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Looks pretty. You can water it.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--CARTON--> */}

                <div className="modal fade" id="cartonmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Carton</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Collection of different files. Maybe a sign to clean up.</p>
                                <Image fluid alt="postit" src={carton}></Image>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--trash--> */}

                <div className="modal fade" id="trashmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Trashcan</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Recently deleted files.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--PC--> */}
                <div className="modal fade" id="pcmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">PC/Laptop</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Watch videos here. A TV would also be possible..</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--calendar--> */}

                <div className="modal fade" id="calendarmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Calendar</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Be scared of your deadlines here. Gives a good overview of your appointments.</p>
                                <div id="calendarIndicator" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#calendarIndicator" data-slide-to="0" class="active"></li>
                                        <li data-target="#calendarIndicator" data-slide-to="1"></li>
                                        <li data-target="#calendarIndicator" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <Image className="d-block w-100" alt="bookshelf" src={calendar}></Image>
                                        </div>
                                        <div class="carousel-item">
                                            <Image className="d-block w-100" alt="calendar detail" fluid src={calendar2}></Image>
                                        </div>
                                        <div class="carousel-item">
                                            <Image className="d-block w-100" alt="calendar detail" fluid src={calendar3}></Image>
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#calendarIndicator" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#calendarIndicator" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!--THOUGHTS--> */}

                <div className="modal fade" id="thoughtsmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Thoughtbubble</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Hop in the file your buddy is working on with one click.</p>
                                <Image fluid alt="postit" src={thoughts}></Image>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--books--> */}

                <div className="modal fade" id="booksmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Books</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Write whatever you want!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--plant--> */}

                <div className="modal fade" id="radiomodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Radio</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Plays music.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--plant--> */}

                <div className="modal fade" id="picturemodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Picture</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Yeah just a picture. Can be wall decoration or framed on desks. May be collected in a photo album.</p>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        );
    }
}

export default PTChapterTwo;
