import React, { Component } from 'react'
import './Navbar.scss';
import Logo from '../../Logo.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar row w-100">
                <img src={Logo} alt="logo de mon site"/>
                <ul className="nav-links col-sm">
                    <li><a href="/home" className="nav-link">Home</a></li>
                    <li><a href="/about" className="nav-link">About</a></li>
                    <li><a href="/tours" className="nav-link active">Tours</a></li>
                </ul>
            </nav>
        )
    }
}
