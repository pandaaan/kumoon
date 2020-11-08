import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './navi.scss';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../images/may_logo_white.svg';

class Navi extends Component {
    render() {
        return (
            <nav id="sidebar" className="active">
                <div class="custom-menu">
                    <button type="button" id="sidebarCollapse" class="btn btn-primary">
                        <MenuIcon id="menu-icon" />
                        <span class="sr-only">Toggle Menu</span>
                    </button>
                </div>
                <div class="p-4 pt-5">
                    <a href="#" class="side-logo" ><Image fluid src={Logo} /></a>
                    <br /> <br />
                    <ul class="list-unstyled components mb-5">
                        <li class="active">
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle">Part 01: Our Story</a>
                            <ul class="collapse list-unstyled" id="homeSubmenu">
                                <li>
                                    <a href="#ch-1-1">Chapter 1: The Beginning</a>
                                </li>
                                <li>
                                    <a href="#ch-1-2">Chapter 2: Brainstorming</a>
                                </li>
                                <li>
                                    <a href="#ch-1-3">Chapter 3: Solidifying The Idea</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                                class="dropdown-toggle">Part 02: The Concept</a>
                            <ul class="collapse list-unstyled" id="pageSubmenu">
                                <li>
                                    <a href="#ch-2-1">Chapter 1: Project Statement</a>
                                </li>
                                <li>
                                    <a href="#ch-2-2">Chapter 2: The Room</a>
                                </li>
                                <li>
                                    <a href="#ch-2-3">Chapter 3</a>
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
