import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './navi.scss';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../images/may_logo_white.svg';

class Navi extends Component {
    render() {
        return (
            <nav id="sidebar" className="active">
                <div className="custom-menu">
                    <button type="button" id="sidebarCollapse" className="btn btn-primary">
                        <MenuIcon id="menu-icon" />
                        <span className="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div className="p-4">
                    <br />
                    <a href="#" className="side-logo" ><Image fluid src={Logo} /></a>
                    <br /> <br />
                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle">01: Our Story</a>
                            <ul className="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#ch-1-1">The Beginning</a>
                                </li>
                                <li>
                                    <a href="#ch-1-2">Brainstorming</a>
                                </li>
                                <li>
                                    <a href="#ch-1-3">Solidifying The Idea</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                                className="dropdown-toggle">02: The Concept</a>
                            <ul className="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#ch-2-1">Project Statement</a>
                                </li>
                                <li>
                                    <a href="#ch-2-2">The Room</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navi;
